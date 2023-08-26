import type { ChainType } from "@switchboard-xyz/common";
import { type IChainNetworkConfig, networks } from "@switchboard-xyz/common";
import React from "react";

import { capitalizeFirstLetterOfEachWord } from "../../utils";
import AddressButton from "../AddressButton";

export function getNetworkTable(
  chain: ChainType,
  network: string,
  hideQueues = false
): JSX.Element {
  const networkConfig: IChainNetworkConfig = networks[chain][network];

  const addresses: Array<[string, string]> = [];
  addresses.push(["Address", networkConfig.address]);
  const ignoreKeys = [
    "networkName",
    "address",
    "authority",
    "queues",
    "attestationQueues",
    "metadata",
    "chain",
  ];
  const restOfKeys = Object.keys(networkConfig).filter(
    (key) => !ignoreKeys.includes(key)
  );
  restOfKeys.forEach((key) =>
    addresses.push([
      capitalizeFirstLetterOfEachWord(key),
      networkConfig[key] as string,
    ])
  );

  const table: JSX.Element = (
    <>
      <h3>Program Deployment</h3>
      <p>
        Below are the <i>{network}</i> {capitalizeFirstLetterOfEachWord(chain)}{" "}
        addresses associated with the Switchboard deployment.
      </p>
      <table>
        <tr>
          <th>Account</th>
          <th>Address</th>
        </tr>
        {addresses.map(([label, address]) => {
          return (
            <tr key={label}>
              <td>{capitalizeFirstLetterOfEachWord(label)}</td>
              <td>
                <AddressButton address={address} />
              </td>
            </tr>
          );
        })}
      </table>

      {hideQueues || (networkConfig.queues ?? []).length === 0 ? (
        <></>
      ) : (
        <>
          {" "}
          <h3>Queues</h3>
          <table>
            <tr>
              <th>Queue</th>
              <th>Address</th>
            </tr>

            {(networkConfig.queues ?? []).map((queueConfig) => {
              return (
                <tr>
                  <td>{queueConfig.name}</td>
                  <td>
                    <AddressButton address={queueConfig.address} /> <br />
                    {queueConfig.permissioned ? (
                      <p>
                        The permissioned queue requires aggregators to have{" "}
                        <code>PERMIT_ORACLE_QUEUE_USAGE</code> permissions
                        before using the queue's resources.
                      </p>
                    ) : (
                      <p>
                        The permissionless queue does not require aggregators to
                        have <code>PERMIT_ORACLE_QUEUE_USAGE</code> permissions
                        before using a queue's resources. This is the default
                        queue when building feeds in the publisher.
                      </p>
                    )}
                  </td>
                </tr>
              );
            })}
          </table>
        </>
      )}
      {hideQueues || networkConfig.attestationQueues?.length === 0 ? (
        <></>
      ) : (
        <>
          <h3>Attestation Queues</h3>
          <table>
            <tr>
              <th>Attestation Queue</th>
              <th>Address</th>
            </tr>

            {(networkConfig.attestationQueues ?? []).map((queueConfig) => {
              return (
                <tr>
                  <td>{queueConfig.name}</td>
                  <td>
                    <AddressButton address={queueConfig.address} /> <br />
                  </td>
                </tr>
              );
            })}
          </table>
        </>
      )}
    </>
  );

  return table;
}
