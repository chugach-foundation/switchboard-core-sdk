import * as proto from "./protos/index.js";

import { Big } from "big.js";

/**
 * Serialize a stringified OracleJob and replace any json comments
 * @param job - Stringified OracleJob or object with an array of Switchboard tasks defined
 * @throws {String}
 * @returns {proto.OracleJob }
 */
export function serializeOracleJob(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  job: string | proto.IOracleJob | Record<string, any>
): proto.OracleJob {
  if (!job) {
    throw new Error(`No job to serialize`);
  }

  let jobObj: proto.IOracleJob;
  if (typeof job === "string") {
    const parsedFileString = job
      // replace all json comments https://regex101.com/r/B8WkuX/1
      .replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/g, "");
    jobObj = proto.OracleJob.fromObject(JSON.parse(parsedFileString));
  } else {
    if (!("tasks" in job) || !Array.isArray(job.tasks)) {
      throw new Error(`OracleJob is missing the 'tasks' property`);
    }
    if (job.tasks.length === 0) {
      throw new Error(`OracleJob has no tasks defined`);
    }
    jobObj = proto.OracleJob.fromObject(job);
  }

  try {
    const err = proto.OracleJob.verify(jobObj);
    if (err !== null) {
      throw new Error(err);
    }
    return proto.OracleJob.create(jobObj);
  } catch (error) {
    throw new Error(`failed to serialize oracle job: ${error}`);
  }
}

/**
 * Deserialize an OracleJob from on-chain data
 * @param jobData - Serialized OracleJob data
 * @returns {proto.OracleJob}
 */
export function deserializeOracleJob(
  jobData: Buffer | Uint8Array
): proto.OracleJob {
  return proto.OracleJob.decodeDelimited(jobData);
}

export type TaskSimulatorNetwork = "devnet" | "mainnet-beta";

export type TaskRunnerResponse = TaskRunnerError | TaskRunnerSuccess;

export type TaskRunnerMeta = {
  taskRunnerVersion: string;
};

export type TaskRunnerError = TaskRunnerMeta & {
  error: string;
};

export type TaskRunnerSuccess = TaskRunnerMeta & {
  results: Array<Big>;
  result: Big;
};

/**
 * Make an Http request to the task-runner endpoint to simulate an OracleJob result
 * @param jobs - array of {@type proto.OracleJob} to run
 * @param network - the task simulator network to use
 * @returns the task simulator response
 */
export async function simulateOracleJobs(
  jobs: Array<proto.OracleJob>,
  network: TaskSimulatorNetwork = "mainnet-beta"
): Promise<TaskRunnerResponse> {
  const response = await fetch("https://task.switchboard.xyz/simulate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      jobs: jobs.map((j) => j.toJSON()),
      cluster: network,
    }),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to simulate job definition, Status=${response.status}`
    );
  }
  const payload: {
    results: Array<string>;
    result: string;
    task_runner_version: string;
  } = await response.json();

  return {
    results: payload.results.map((r) => new Big(r)),
    result: new Big(payload.result),
    taskRunnerVersion: payload.task_runner_version,
  };
}
