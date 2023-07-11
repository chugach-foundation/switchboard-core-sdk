/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function (global, factory) {
  /* global define, require, module */

  /* AMD */ if (typeof define === 'function' && define.amd)
    define(['protobufjs/minimal'], factory);
  /* CommonJS */ else if (
    typeof require === 'function' &&
    typeof module === 'object' &&
    module &&
    module.exports
  )
    module.exports = factory(require('protobufjs/minimal'));
})(this, function ($protobuf) {
  'use strict';

  // Common aliases
  var $Reader = $protobuf.Reader,
    $Writer = $protobuf.Writer,
    $util = $protobuf.util;

  // Exported root namespace
  var $root = $protobuf.roots.sbv2Protos || ($protobuf.roots.sbv2Protos = {});

  $root.OracleJob = (function () {
    /**
     * Properties of an OracleJob.
     * @exports IOracleJob
     * @interface IOracleJob
     * @property {Array.<OracleJob.ITask>|null} [tasks] The chain of tasks to perform for this OracleJob.
     */

    /**
     * Constructs a new OracleJob.
     * @exports OracleJob
     * @classdesc Represnts a list of tasks to be performed by a switchboard oracle.
     * @implements IOracleJob
     * @constructor
     * @param {IOracleJob=} [properties] Properties to set
     */
    function OracleJob(properties) {
      this.tasks = [];
      if (properties)
        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
          if (properties[keys[i]] != null) this[keys[i]] = properties[keys[i]];
    }

    /**
     * The chain of tasks to perform for this OracleJob.
     * @member {Array.<OracleJob.ITask>} tasks
     * @memberof OracleJob
     * @instance
     */
    OracleJob.prototype.tasks = $util.emptyArray;

    /**
     * Creates a new OracleJob instance using the specified properties.
     * @function create
     * @memberof OracleJob
     * @static
     * @param {IOracleJob=} [properties] Properties to set
     * @returns {OracleJob} OracleJob instance
     */
    OracleJob.create = function create(properties) {
      return new OracleJob(properties);
    };

    /**
     * Encodes the specified OracleJob message. Does not implicitly {@apilink OracleJob.verify|verify} messages.
     * @function encode
     * @memberof OracleJob
     * @static
     * @param {IOracleJob} message OracleJob message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OracleJob.encode = function encode(message, writer) {
      if (!writer) writer = $Writer.create();
      if (message.tasks != null && message.tasks.length)
        for (var i = 0; i < message.tasks.length; ++i)
          $root.OracleJob.Task.encode(
            message.tasks[i],
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
          ).ldelim();
      return writer;
    };

    /**
     * Encodes the specified OracleJob message, length delimited. Does not implicitly {@apilink OracleJob.verify|verify} messages.
     * @function encodeDelimited
     * @memberof OracleJob
     * @static
     * @param {IOracleJob} message OracleJob message or plain object to encode
     * @param {$protobuf.Writer} [writer] Writer to encode to
     * @returns {$protobuf.Writer} Writer
     */
    OracleJob.encodeDelimited = function encodeDelimited(message, writer) {
      return this.encode(message, writer).ldelim();
    };

    /**
     * Decodes an OracleJob message from the specified reader or buffer.
     * @function decode
     * @memberof OracleJob
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @param {number} [length] Message length if known beforehand
     * @returns {OracleJob} OracleJob
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OracleJob.decode = function decode(reader, length) {
      if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
      var end = length === undefined ? reader.len : reader.pos + length,
        message = new $root.OracleJob();
      while (reader.pos < end) {
        var tag = reader.uint32();
        switch (tag >>> 3) {
          case 1: {
            if (!(message.tasks && message.tasks.length)) message.tasks = [];
            message.tasks.push(
              $root.OracleJob.Task.decode(reader, reader.uint32())
            );
            break;
          }
          default:
            reader.skipType(tag & 7);
            break;
        }
      }
      return message;
    };

    /**
     * Decodes an OracleJob message from the specified reader or buffer, length delimited.
     * @function decodeDelimited
     * @memberof OracleJob
     * @static
     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
     * @returns {OracleJob} OracleJob
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    OracleJob.decodeDelimited = function decodeDelimited(reader) {
      if (!(reader instanceof $Reader)) reader = new $Reader(reader);
      return this.decode(reader, reader.uint32());
    };

    /**
     * Verifies an OracleJob message.
     * @function verify
     * @memberof OracleJob
     * @static
     * @param {Object.<string,*>} message Plain object to verify
     * @returns {string|null} `null` if valid, otherwise the reason why it is not
     */
    OracleJob.verify = function verify(message) {
      if (typeof message !== 'object' || message === null)
        return 'object expected';
      if (message.tasks != null && message.hasOwnProperty('tasks')) {
        if (!Array.isArray(message.tasks)) return 'tasks: array expected';
        for (var i = 0; i < message.tasks.length; ++i) {
          var error = $root.OracleJob.Task.verify(message.tasks[i]);
          if (error) return 'tasks.' + error;
        }
      }
      return null;
    };

    /**
     * Creates an OracleJob message from a plain object. Also converts values to their respective internal types.
     * @function fromObject
     * @memberof OracleJob
     * @static
     * @param {Object.<string,*>} object Plain object
     * @returns {OracleJob} OracleJob
     */
    OracleJob.fromObject = function fromObject(object) {
      if (object instanceof $root.OracleJob) return object;
      var message = new $root.OracleJob();
      if (object.tasks) {
        if (!Array.isArray(object.tasks))
          throw TypeError('.OracleJob.tasks: array expected');
        message.tasks = [];
        for (var i = 0; i < object.tasks.length; ++i) {
          if (typeof object.tasks[i] !== 'object')
            throw TypeError('.OracleJob.tasks: object expected');
          message.tasks[i] = $root.OracleJob.Task.fromObject(object.tasks[i]);
        }
      }
      return message;
    };

    /**
     * Creates a plain object from an OracleJob message. Also converts values to other types if specified.
     * @function toObject
     * @memberof OracleJob
     * @static
     * @param {OracleJob} message OracleJob
     * @param {$protobuf.IConversionOptions} [options] Conversion options
     * @returns {Object.<string,*>} Plain object
     */
    OracleJob.toObject = function toObject(message, options) {
      if (!options) options = {};
      var object = {};
      if (options.arrays || options.defaults) object.tasks = [];
      if (message.tasks && message.tasks.length) {
        object.tasks = [];
        for (var j = 0; j < message.tasks.length; ++j)
          object.tasks[j] = $root.OracleJob.Task.toObject(
            message.tasks[j],
            options
          );
      }
      return object;
    };

    /**
     * Converts this OracleJob to JSON.
     * @function toJSON
     * @memberof OracleJob
     * @instance
     * @returns {Object.<string,*>} JSON object
     */
    OracleJob.prototype.toJSON = function toJSON() {
      return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
    };

    /**
     * Gets the default type url for OracleJob
     * @function getTypeUrl
     * @memberof OracleJob
     * @static
     * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
     * @returns {string} The default type url
     */
    OracleJob.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
      if (typeUrlPrefix === undefined) {
        typeUrlPrefix = 'type.googleapis.com';
      }
      return typeUrlPrefix + '/OracleJob';
    };

    /**
     * Creates an OracleJob message from a YAML string.
     */
    OracleJob.fromYaml = function fromYaml(yamlString) {
      return OracleJob.fromObject(require('yaml').parse(yamlString));
    };

    /**
     * Converts this OracleJob to YAML.
     */
    OracleJob.prototype.toYaml = function toYaml() {
      return require('yaml').stringify(this.toJSON());
    };

    OracleJob.HttpTask = (function () {
      /**
       * Properties of a HttpTask.
       * @memberof OracleJob
       * @interface IHttpTask
       * @property {string|null} [url] A string containing the URL to direct this HTTP request to.
       * @property {OracleJob.HttpTask.Method|null} [method] The type of HTTP request to make.
       * @property {Array.<OracleJob.HttpTask.IHeader>|null} [headers] A list of headers to add to this HttpTask.
       * @property {string|null} [body] A stringified body (if any) to add to this HttpTask.
       */

      /**
       * Constructs a new HttpTask.
       * @memberof OracleJob
       * @classdesc The adapter will report the text body of a successful HTTP request to the
       * specified url, or return an error if the response status code is greater
       * than or equal to 400.
       *
       * _**Input**_: None
       *
       * _**Returns**_: String representation of the http response.
       *
       * _**Example**_: Basic HttpTask
       *
       * ```json
       * {"httpTask": {"url": "https://mywebsite.org/path"} }
       * ```
       *
       * _**Example**_: HttpTask example with headers
       *
       * ```json
       * { "httpTask": { "url": "https://mywebsite.org/path", "method": "METHOD_POST", "headers": [ { "key": "MY_HEADER_KEY", "value": "MY_HEADER_VALUE" } ], "body": "{\"MY_BODY_KEY\":\"MY_BODY_VALUE\"}" } }
       * ```
       * @implements IHttpTask
       * @constructor
       * @param {OracleJob.IHttpTask=} [properties] Properties to set
       */
      function HttpTask(properties) {
        this.headers = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * A string containing the URL to direct this HTTP request to.
       * @member {string} url
       * @memberof OracleJob.HttpTask
       * @instance
       */
      HttpTask.prototype.url = '';

      /**
       * The type of HTTP request to make.
       * @member {OracleJob.HttpTask.Method} method
       * @memberof OracleJob.HttpTask
       * @instance
       */
      HttpTask.prototype.method = 0;

      /**
       * A list of headers to add to this HttpTask.
       * @member {Array.<OracleJob.HttpTask.IHeader>} headers
       * @memberof OracleJob.HttpTask
       * @instance
       */
      HttpTask.prototype.headers = $util.emptyArray;

      /**
       * A stringified body (if any) to add to this HttpTask.
       * @member {string} body
       * @memberof OracleJob.HttpTask
       * @instance
       */
      HttpTask.prototype.body = '';

      /**
       * Creates a new HttpTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.HttpTask
       * @static
       * @param {OracleJob.IHttpTask=} [properties] Properties to set
       * @returns {OracleJob.HttpTask} HttpTask instance
       */
      HttpTask.create = function create(properties) {
        return new HttpTask(properties);
      };

      /**
       * Encodes the specified HttpTask message. Does not implicitly {@apilink OracleJob.HttpTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.HttpTask
       * @static
       * @param {OracleJob.IHttpTask} message HttpTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HttpTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.url != null && Object.hasOwnProperty.call(message, 'url'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.url);
        if (
          message.method != null &&
          Object.hasOwnProperty.call(message, 'method')
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.method);
        if (message.headers != null && message.headers.length)
          for (var i = 0; i < message.headers.length; ++i)
            $root.OracleJob.HttpTask.Header.encode(
              message.headers[i],
              writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
            ).ldelim();
        if (message.body != null && Object.hasOwnProperty.call(message, 'body'))
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.body);
        return writer;
      };

      /**
       * Encodes the specified HttpTask message, length delimited. Does not implicitly {@apilink OracleJob.HttpTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.HttpTask
       * @static
       * @param {OracleJob.IHttpTask} message HttpTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HttpTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a HttpTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.HttpTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.HttpTask} HttpTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HttpTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.HttpTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.url = reader.string();
              break;
            }
            case 2: {
              message.method = reader.int32();
              break;
            }
            case 3: {
              if (!(message.headers && message.headers.length))
                message.headers = [];
              message.headers.push(
                $root.OracleJob.HttpTask.Header.decode(reader, reader.uint32())
              );
              break;
            }
            case 4: {
              message.body = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a HttpTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.HttpTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.HttpTask} HttpTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HttpTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a HttpTask message.
       * @function verify
       * @memberof OracleJob.HttpTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      HttpTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.url != null && message.hasOwnProperty('url'))
          if (!$util.isString(message.url)) return 'url: string expected';
        if (message.method != null && message.hasOwnProperty('method'))
          switch (message.method) {
            default:
              return 'method: enum value expected';
            case 0:
            case 1:
            case 2:
              break;
          }
        if (message.headers != null && message.hasOwnProperty('headers')) {
          if (!Array.isArray(message.headers)) return 'headers: array expected';
          for (var i = 0; i < message.headers.length; ++i) {
            var error = $root.OracleJob.HttpTask.Header.verify(
              message.headers[i]
            );
            if (error) return 'headers.' + error;
          }
        }
        if (message.body != null && message.hasOwnProperty('body'))
          if (!$util.isString(message.body)) return 'body: string expected';
        return null;
      };

      /**
       * Creates a HttpTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.HttpTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.HttpTask} HttpTask
       */
      HttpTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.HttpTask) return object;
        var message = new $root.OracleJob.HttpTask();
        if (object.url != null) message.url = String(object.url);
        switch (object.method) {
          default:
            if (typeof object.method === 'number') {
              message.method = object.method;
              break;
            }
            break;
          case 'METHOD_UNKOWN':
          case 0:
            message.method = 0;
            break;
          case 'METHOD_GET':
          case 1:
            message.method = 1;
            break;
          case 'METHOD_POST':
          case 2:
            message.method = 2;
            break;
        }
        if (object.headers) {
          if (!Array.isArray(object.headers))
            throw TypeError('.OracleJob.HttpTask.headers: array expected');
          message.headers = [];
          for (var i = 0; i < object.headers.length; ++i) {
            if (typeof object.headers[i] !== 'object')
              throw TypeError('.OracleJob.HttpTask.headers: object expected');
            message.headers[i] = $root.OracleJob.HttpTask.Header.fromObject(
              object.headers[i]
            );
          }
        }
        if (object.body != null) message.body = String(object.body);
        return message;
      };

      /**
       * Creates a plain object from a HttpTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.HttpTask
       * @static
       * @param {OracleJob.HttpTask} message HttpTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      HttpTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.headers = [];
        if (options.defaults) {
          object.url = '';
          object.method = options.enums === String ? 'METHOD_UNKOWN' : 0;
          object.body = '';
        }
        if (message.url != null && message.hasOwnProperty('url'))
          object.url = message.url;
        if (message.method != null && message.hasOwnProperty('method'))
          object.method =
            options.enums === String
              ? $root.OracleJob.HttpTask.Method[message.method] === undefined
                ? message.method
                : $root.OracleJob.HttpTask.Method[message.method]
              : message.method;
        if (message.headers && message.headers.length) {
          object.headers = [];
          for (var j = 0; j < message.headers.length; ++j)
            object.headers[j] = $root.OracleJob.HttpTask.Header.toObject(
              message.headers[j],
              options
            );
        }
        if (message.body != null && message.hasOwnProperty('body'))
          object.body = message.body;
        return object;
      };

      /**
       * Converts this HttpTask to JSON.
       * @function toJSON
       * @memberof OracleJob.HttpTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      HttpTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for HttpTask
       * @function getTypeUrl
       * @memberof OracleJob.HttpTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      HttpTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.HttpTask';
      };

      /**
       * An enumeration representing the types of HTTP requests available to make.
       * @name OracleJob.HttpTask.Method
       * @enum {number}
       * @property {number} METHOD_UNKOWN=0 Unset HTTP method will default to METHOD_GET
       * @property {number} METHOD_GET=1 Perform an HTTP 'GET' request.
       * @property {number} METHOD_POST=2 Perform an HTTP 'POST' request.
       */
      HttpTask.Method = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'METHOD_UNKOWN')] = 0;
        values[(valuesById[1] = 'METHOD_GET')] = 1;
        values[(valuesById[2] = 'METHOD_POST')] = 2;
        return values;
      })();

      HttpTask.Header = (function () {
        /**
         * Properties of a Header.
         * @memberof OracleJob.HttpTask
         * @interface IHeader
         * @property {string|null} [key] A header key such as `Authorization` or `Content-Type`
         * @property {string|null} [value] A value for the given header key like `Basic MYAUTHKEY` or `application/json`
         */

        /**
         * Constructs a new Header.
         * @memberof OracleJob.HttpTask
         * @classdesc An object that represents a header to add to an HTTP request.
         * @implements IHeader
         * @constructor
         * @param {OracleJob.HttpTask.IHeader=} [properties] Properties to set
         */
        function Header(properties) {
          if (properties)
            for (
              var keys = Object.keys(properties), i = 0;
              i < keys.length;
              ++i
            )
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
        }

        /**
         * A header key such as `Authorization` or `Content-Type`
         * @member {string} key
         * @memberof OracleJob.HttpTask.Header
         * @instance
         */
        Header.prototype.key = '';

        /**
         * A value for the given header key like `Basic MYAUTHKEY` or `application/json`
         * @member {string} value
         * @memberof OracleJob.HttpTask.Header
         * @instance
         */
        Header.prototype.value = '';

        /**
         * Creates a new Header instance using the specified properties.
         * @function create
         * @memberof OracleJob.HttpTask.Header
         * @static
         * @param {OracleJob.HttpTask.IHeader=} [properties] Properties to set
         * @returns {OracleJob.HttpTask.Header} Header instance
         */
        Header.create = function create(properties) {
          return new Header(properties);
        };

        /**
         * Encodes the specified Header message. Does not implicitly {@apilink OracleJob.HttpTask.Header.verify|verify} messages.
         * @function encode
         * @memberof OracleJob.HttpTask.Header
         * @static
         * @param {OracleJob.HttpTask.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.key != null && Object.hasOwnProperty.call(message, 'key'))
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.key);
          if (
            message.value != null &&
            Object.hasOwnProperty.call(message, 'value')
          )
            writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.value);
          return writer;
        };

        /**
         * Encodes the specified Header message, length delimited. Does not implicitly {@apilink OracleJob.HttpTask.Header.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OracleJob.HttpTask.Header
         * @static
         * @param {OracleJob.HttpTask.IHeader} message Header message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Header.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Header message from the specified reader or buffer.
         * @function decode
         * @memberof OracleJob.HttpTask.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OracleJob.HttpTask.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.OracleJob.HttpTask.Header();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.key = reader.string();
                break;
              }
              case 2: {
                message.value = reader.string();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes a Header message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OracleJob.HttpTask.Header
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OracleJob.HttpTask.Header} Header
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Header.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Header message.
         * @function verify
         * @memberof OracleJob.HttpTask.Header
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Header.verify = function verify(message) {
          if (typeof message !== 'object' || message === null)
            return 'object expected';
          if (message.key != null && message.hasOwnProperty('key'))
            if (!$util.isString(message.key)) return 'key: string expected';
          if (message.value != null && message.hasOwnProperty('value'))
            if (!$util.isString(message.value)) return 'value: string expected';
          return null;
        };

        /**
         * Creates a Header message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OracleJob.HttpTask.Header
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OracleJob.HttpTask.Header} Header
         */
        Header.fromObject = function fromObject(object) {
          if (object instanceof $root.OracleJob.HttpTask.Header) return object;
          var message = new $root.OracleJob.HttpTask.Header();
          if (object.key != null) message.key = String(object.key);
          if (object.value != null) message.value = String(object.value);
          return message;
        };

        /**
         * Creates a plain object from a Header message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OracleJob.HttpTask.Header
         * @static
         * @param {OracleJob.HttpTask.Header} message Header
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Header.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.defaults) {
            object.key = '';
            object.value = '';
          }
          if (message.key != null && message.hasOwnProperty('key'))
            object.key = message.key;
          if (message.value != null && message.hasOwnProperty('value'))
            object.value = message.value;
          return object;
        };

        /**
         * Converts this Header to JSON.
         * @function toJSON
         * @memberof OracleJob.HttpTask.Header
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Header.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Header
         * @function getTypeUrl
         * @memberof OracleJob.HttpTask.Header
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Header.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/OracleJob.HttpTask.Header';
        };

        return Header;
      })();

      return HttpTask;
    })();

    OracleJob.JsonParseTask = (function () {
      /**
       * Properties of a JsonParseTask.
       * @memberof OracleJob
       * @interface IJsonParseTask
       * @property {string|null} [path] JSONPath formatted path to the element. https://t.ly/uLtw
       * https://www.npmjs.com/package/jsonpath-plus
       * @property {OracleJob.JsonParseTask.AggregationMethod|null} [aggregationMethod] The technique that will be used to aggregate the results if walking the specified path returns multiple numerical results.
       */

      /**
       * Constructs a new JsonParseTask.
       * @memberof OracleJob
       * @classdesc The adapter walks the path specified and returns the value found at that result. If returning
       * JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the response.
       *
       * _**Input**_: String representation of a JSON object.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Parses the price field from a JSON object
       *
       * ```json
       * {"jsonParse": {"path": "$.price"} }
       * ```
       * @implements IJsonParseTask
       * @constructor
       * @param {OracleJob.IJsonParseTask=} [properties] Properties to set
       */
      function JsonParseTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * JSONPath formatted path to the element. https://t.ly/uLtw
       * https://www.npmjs.com/package/jsonpath-plus
       * @member {string} path
       * @memberof OracleJob.JsonParseTask
       * @instance
       */
      JsonParseTask.prototype.path = '';

      /**
       * The technique that will be used to aggregate the results if walking the specified path returns multiple numerical results.
       * @member {OracleJob.JsonParseTask.AggregationMethod} aggregationMethod
       * @memberof OracleJob.JsonParseTask
       * @instance
       */
      JsonParseTask.prototype.aggregationMethod = 0;

      /**
       * Creates a new JsonParseTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.JsonParseTask
       * @static
       * @param {OracleJob.IJsonParseTask=} [properties] Properties to set
       * @returns {OracleJob.JsonParseTask} JsonParseTask instance
       */
      JsonParseTask.create = function create(properties) {
        return new JsonParseTask(properties);
      };

      /**
       * Encodes the specified JsonParseTask message. Does not implicitly {@apilink OracleJob.JsonParseTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.JsonParseTask
       * @static
       * @param {OracleJob.IJsonParseTask} message JsonParseTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      JsonParseTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.path != null && Object.hasOwnProperty.call(message, 'path'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.path);
        if (
          message.aggregationMethod != null &&
          Object.hasOwnProperty.call(message, 'aggregationMethod')
        )
          writer
            .uint32(/* id 2, wireType 0 =*/ 16)
            .int32(message.aggregationMethod);
        return writer;
      };

      /**
       * Encodes the specified JsonParseTask message, length delimited. Does not implicitly {@apilink OracleJob.JsonParseTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.JsonParseTask
       * @static
       * @param {OracleJob.IJsonParseTask} message JsonParseTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      JsonParseTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a JsonParseTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.JsonParseTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.JsonParseTask} JsonParseTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      JsonParseTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.JsonParseTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.path = reader.string();
              break;
            }
            case 2: {
              message.aggregationMethod = reader.int32();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a JsonParseTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.JsonParseTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.JsonParseTask} JsonParseTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      JsonParseTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a JsonParseTask message.
       * @function verify
       * @memberof OracleJob.JsonParseTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      JsonParseTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.path != null && message.hasOwnProperty('path'))
          if (!$util.isString(message.path)) return 'path: string expected';
        if (
          message.aggregationMethod != null &&
          message.hasOwnProperty('aggregationMethod')
        )
          switch (message.aggregationMethod) {
            default:
              return 'aggregationMethod: enum value expected';
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
          }
        return null;
      };

      /**
       * Creates a JsonParseTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.JsonParseTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.JsonParseTask} JsonParseTask
       */
      JsonParseTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.JsonParseTask) return object;
        var message = new $root.OracleJob.JsonParseTask();
        if (object.path != null) message.path = String(object.path);
        switch (object.aggregationMethod) {
          default:
            if (typeof object.aggregationMethod === 'number') {
              message.aggregationMethod = object.aggregationMethod;
              break;
            }
            break;
          case 'NONE':
          case 0:
            message.aggregationMethod = 0;
            break;
          case 'MIN':
          case 1:
            message.aggregationMethod = 1;
            break;
          case 'MAX':
          case 2:
            message.aggregationMethod = 2;
            break;
          case 'SUM':
          case 3:
            message.aggregationMethod = 3;
            break;
          case 'MEAN':
          case 4:
            message.aggregationMethod = 4;
            break;
          case 'MEDIAN':
          case 5:
            message.aggregationMethod = 5;
            break;
        }
        return message;
      };

      /**
       * Creates a plain object from a JsonParseTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.JsonParseTask
       * @static
       * @param {OracleJob.JsonParseTask} message JsonParseTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      JsonParseTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.path = '';
          object.aggregationMethod = options.enums === String ? 'NONE' : 0;
        }
        if (message.path != null && message.hasOwnProperty('path'))
          object.path = message.path;
        if (
          message.aggregationMethod != null &&
          message.hasOwnProperty('aggregationMethod')
        )
          object.aggregationMethod =
            options.enums === String
              ? $root.OracleJob.JsonParseTask.AggregationMethod[
                  message.aggregationMethod
                ] === undefined
                ? message.aggregationMethod
                : $root.OracleJob.JsonParseTask.AggregationMethod[
                    message.aggregationMethod
                  ]
              : message.aggregationMethod;
        return object;
      };

      /**
       * Converts this JsonParseTask to JSON.
       * @function toJSON
       * @memberof OracleJob.JsonParseTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      JsonParseTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for JsonParseTask
       * @function getTypeUrl
       * @memberof OracleJob.JsonParseTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      JsonParseTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.JsonParseTask';
      };

      /**
       * The methods of combining a list of numerical results.
       * @name OracleJob.JsonParseTask.AggregationMethod
       * @enum {number}
       * @property {number} NONE=0 NONE value
       * @property {number} MIN=1 Grab the minimum value of the results.
       * @property {number} MAX=2 Grab the maximum value of the results.
       * @property {number} SUM=3 Sum up all of the results.
       * @property {number} MEAN=4 Average all of the results.
       * @property {number} MEDIAN=5 Grab the median of the results.
       */
      JsonParseTask.AggregationMethod = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'NONE')] = 0;
        values[(valuesById[1] = 'MIN')] = 1;
        values[(valuesById[2] = 'MAX')] = 2;
        values[(valuesById[3] = 'SUM')] = 3;
        values[(valuesById[4] = 'MEAN')] = 4;
        values[(valuesById[5] = 'MEDIAN')] = 5;
        return values;
      })();

      return JsonParseTask;
    })();

    OracleJob.MedianTask = (function () {
      /**
       * Properties of a MedianTask.
       * @memberof OracleJob
       * @interface IMedianTask
       * @property {Array.<OracleJob.ITask>|null} [tasks] A list of subtasks to process and produce a list of result values.
       * @property {Array.<IOracleJob>|null} [jobs] A list of subjobs to process and produce a list of result values.
       * @property {number|null} [minSuccessfulRequired] The minimum number of values before a successful median can be yielded.
       */

      /**
       * Constructs a new MedianTask.
       * @memberof OracleJob
       * @classdesc Returns the median (middle) of all the results returned by the provided subtasks and subjobs. Nested tasks must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the median numerical result of 3 tasks.
       *
       * ```json
       * {"medianTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the median numerical result of 3 jobs.
       *
       * ```json
       * {"medianTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @implements IMedianTask
       * @constructor
       * @param {OracleJob.IMedianTask=} [properties] Properties to set
       */
      function MedianTask(properties) {
        this.tasks = [];
        this.jobs = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * A list of subtasks to process and produce a list of result values.
       * @member {Array.<OracleJob.ITask>} tasks
       * @memberof OracleJob.MedianTask
       * @instance
       */
      MedianTask.prototype.tasks = $util.emptyArray;

      /**
       * A list of subjobs to process and produce a list of result values.
       * @member {Array.<IOracleJob>} jobs
       * @memberof OracleJob.MedianTask
       * @instance
       */
      MedianTask.prototype.jobs = $util.emptyArray;

      /**
       * The minimum number of values before a successful median can be yielded.
       * @member {number} minSuccessfulRequired
       * @memberof OracleJob.MedianTask
       * @instance
       */
      MedianTask.prototype.minSuccessfulRequired = 0;

      /**
       * Creates a new MedianTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.MedianTask
       * @static
       * @param {OracleJob.IMedianTask=} [properties] Properties to set
       * @returns {OracleJob.MedianTask} MedianTask instance
       */
      MedianTask.create = function create(properties) {
        return new MedianTask(properties);
      };

      /**
       * Encodes the specified MedianTask message. Does not implicitly {@apilink OracleJob.MedianTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.MedianTask
       * @static
       * @param {OracleJob.IMedianTask} message MedianTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MedianTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tasks != null && message.tasks.length)
          for (var i = 0; i < message.tasks.length; ++i)
            $root.OracleJob.Task.encode(
              message.tasks[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
        if (message.jobs != null && message.jobs.length)
          for (var i = 0; i < message.jobs.length; ++i)
            $root.OracleJob.encode(
              message.jobs[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
        if (
          message.minSuccessfulRequired != null &&
          Object.hasOwnProperty.call(message, 'minSuccessfulRequired')
        )
          writer
            .uint32(/* id 3, wireType 0 =*/ 24)
            .int32(message.minSuccessfulRequired);
        return writer;
      };

      /**
       * Encodes the specified MedianTask message, length delimited. Does not implicitly {@apilink OracleJob.MedianTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.MedianTask
       * @static
       * @param {OracleJob.IMedianTask} message MedianTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MedianTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a MedianTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.MedianTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.MedianTask} MedianTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MedianTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.MedianTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.tasks && message.tasks.length)) message.tasks = [];
              message.tasks.push(
                $root.OracleJob.Task.decode(reader, reader.uint32())
              );
              break;
            }
            case 2: {
              if (!(message.jobs && message.jobs.length)) message.jobs = [];
              message.jobs.push(
                $root.OracleJob.decode(reader, reader.uint32())
              );
              break;
            }
            case 3: {
              message.minSuccessfulRequired = reader.int32();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a MedianTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.MedianTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.MedianTask} MedianTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MedianTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a MedianTask message.
       * @function verify
       * @memberof OracleJob.MedianTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      MedianTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.tasks != null && message.hasOwnProperty('tasks')) {
          if (!Array.isArray(message.tasks)) return 'tasks: array expected';
          for (var i = 0; i < message.tasks.length; ++i) {
            var error = $root.OracleJob.Task.verify(message.tasks[i]);
            if (error) return 'tasks.' + error;
          }
        }
        if (message.jobs != null && message.hasOwnProperty('jobs')) {
          if (!Array.isArray(message.jobs)) return 'jobs: array expected';
          for (var i = 0; i < message.jobs.length; ++i) {
            var error = $root.OracleJob.verify(message.jobs[i]);
            if (error) return 'jobs.' + error;
          }
        }
        if (
          message.minSuccessfulRequired != null &&
          message.hasOwnProperty('minSuccessfulRequired')
        )
          if (!$util.isInteger(message.minSuccessfulRequired))
            return 'minSuccessfulRequired: integer expected';
        return null;
      };

      /**
       * Creates a MedianTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.MedianTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.MedianTask} MedianTask
       */
      MedianTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.MedianTask) return object;
        var message = new $root.OracleJob.MedianTask();
        if (object.tasks) {
          if (!Array.isArray(object.tasks))
            throw TypeError('.OracleJob.MedianTask.tasks: array expected');
          message.tasks = [];
          for (var i = 0; i < object.tasks.length; ++i) {
            if (typeof object.tasks[i] !== 'object')
              throw TypeError('.OracleJob.MedianTask.tasks: object expected');
            message.tasks[i] = $root.OracleJob.Task.fromObject(object.tasks[i]);
          }
        }
        if (object.jobs) {
          if (!Array.isArray(object.jobs))
            throw TypeError('.OracleJob.MedianTask.jobs: array expected');
          message.jobs = [];
          for (var i = 0; i < object.jobs.length; ++i) {
            if (typeof object.jobs[i] !== 'object')
              throw TypeError('.OracleJob.MedianTask.jobs: object expected');
            message.jobs[i] = $root.OracleJob.fromObject(object.jobs[i]);
          }
        }
        if (object.minSuccessfulRequired != null)
          message.minSuccessfulRequired = object.minSuccessfulRequired | 0;
        return message;
      };

      /**
       * Creates a plain object from a MedianTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.MedianTask
       * @static
       * @param {OracleJob.MedianTask} message MedianTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      MedianTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) {
          object.tasks = [];
          object.jobs = [];
        }
        if (options.defaults) object.minSuccessfulRequired = 0;
        if (message.tasks && message.tasks.length) {
          object.tasks = [];
          for (var j = 0; j < message.tasks.length; ++j)
            object.tasks[j] = $root.OracleJob.Task.toObject(
              message.tasks[j],
              options
            );
        }
        if (message.jobs && message.jobs.length) {
          object.jobs = [];
          for (var j = 0; j < message.jobs.length; ++j)
            object.jobs[j] = $root.OracleJob.toObject(message.jobs[j], options);
        }
        if (
          message.minSuccessfulRequired != null &&
          message.hasOwnProperty('minSuccessfulRequired')
        )
          object.minSuccessfulRequired = message.minSuccessfulRequired;
        return object;
      };

      /**
       * Converts this MedianTask to JSON.
       * @function toJSON
       * @memberof OracleJob.MedianTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      MedianTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for MedianTask
       * @function getTypeUrl
       * @memberof OracleJob.MedianTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      MedianTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.MedianTask';
      };

      return MedianTask;
    })();

    OracleJob.MeanTask = (function () {
      /**
       * Properties of a MeanTask.
       * @memberof OracleJob
       * @interface IMeanTask
       * @property {Array.<OracleJob.ITask>|null} [tasks] A list of subtasks to process and produce a list of result values.
       * @property {Array.<IOracleJob>|null} [jobs] A list of subjobs to process and produce a list of result values.
       */

      /**
       * Constructs a new MeanTask.
       * @memberof OracleJob
       * @classdesc Returns the mean (average) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the mean numerical result of 3 tasks.
       *
       * ```json
       * {"meanTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the mean numerical result of 3 jobs.
       *
       * ```json
       * {"meanTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @implements IMeanTask
       * @constructor
       * @param {OracleJob.IMeanTask=} [properties] Properties to set
       */
      function MeanTask(properties) {
        this.tasks = [];
        this.jobs = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * A list of subtasks to process and produce a list of result values.
       * @member {Array.<OracleJob.ITask>} tasks
       * @memberof OracleJob.MeanTask
       * @instance
       */
      MeanTask.prototype.tasks = $util.emptyArray;

      /**
       * A list of subjobs to process and produce a list of result values.
       * @member {Array.<IOracleJob>} jobs
       * @memberof OracleJob.MeanTask
       * @instance
       */
      MeanTask.prototype.jobs = $util.emptyArray;

      /**
       * Creates a new MeanTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.MeanTask
       * @static
       * @param {OracleJob.IMeanTask=} [properties] Properties to set
       * @returns {OracleJob.MeanTask} MeanTask instance
       */
      MeanTask.create = function create(properties) {
        return new MeanTask(properties);
      };

      /**
       * Encodes the specified MeanTask message. Does not implicitly {@apilink OracleJob.MeanTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.MeanTask
       * @static
       * @param {OracleJob.IMeanTask} message MeanTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MeanTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tasks != null && message.tasks.length)
          for (var i = 0; i < message.tasks.length; ++i)
            $root.OracleJob.Task.encode(
              message.tasks[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
        if (message.jobs != null && message.jobs.length)
          for (var i = 0; i < message.jobs.length; ++i)
            $root.OracleJob.encode(
              message.jobs[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified MeanTask message, length delimited. Does not implicitly {@apilink OracleJob.MeanTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.MeanTask
       * @static
       * @param {OracleJob.IMeanTask} message MeanTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MeanTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a MeanTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.MeanTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.MeanTask} MeanTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MeanTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.MeanTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.tasks && message.tasks.length)) message.tasks = [];
              message.tasks.push(
                $root.OracleJob.Task.decode(reader, reader.uint32())
              );
              break;
            }
            case 2: {
              if (!(message.jobs && message.jobs.length)) message.jobs = [];
              message.jobs.push(
                $root.OracleJob.decode(reader, reader.uint32())
              );
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a MeanTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.MeanTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.MeanTask} MeanTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MeanTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a MeanTask message.
       * @function verify
       * @memberof OracleJob.MeanTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      MeanTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.tasks != null && message.hasOwnProperty('tasks')) {
          if (!Array.isArray(message.tasks)) return 'tasks: array expected';
          for (var i = 0; i < message.tasks.length; ++i) {
            var error = $root.OracleJob.Task.verify(message.tasks[i]);
            if (error) return 'tasks.' + error;
          }
        }
        if (message.jobs != null && message.hasOwnProperty('jobs')) {
          if (!Array.isArray(message.jobs)) return 'jobs: array expected';
          for (var i = 0; i < message.jobs.length; ++i) {
            var error = $root.OracleJob.verify(message.jobs[i]);
            if (error) return 'jobs.' + error;
          }
        }
        return null;
      };

      /**
       * Creates a MeanTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.MeanTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.MeanTask} MeanTask
       */
      MeanTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.MeanTask) return object;
        var message = new $root.OracleJob.MeanTask();
        if (object.tasks) {
          if (!Array.isArray(object.tasks))
            throw TypeError('.OracleJob.MeanTask.tasks: array expected');
          message.tasks = [];
          for (var i = 0; i < object.tasks.length; ++i) {
            if (typeof object.tasks[i] !== 'object')
              throw TypeError('.OracleJob.MeanTask.tasks: object expected');
            message.tasks[i] = $root.OracleJob.Task.fromObject(object.tasks[i]);
          }
        }
        if (object.jobs) {
          if (!Array.isArray(object.jobs))
            throw TypeError('.OracleJob.MeanTask.jobs: array expected');
          message.jobs = [];
          for (var i = 0; i < object.jobs.length; ++i) {
            if (typeof object.jobs[i] !== 'object')
              throw TypeError('.OracleJob.MeanTask.jobs: object expected');
            message.jobs[i] = $root.OracleJob.fromObject(object.jobs[i]);
          }
        }
        return message;
      };

      /**
       * Creates a plain object from a MeanTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.MeanTask
       * @static
       * @param {OracleJob.MeanTask} message MeanTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      MeanTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) {
          object.tasks = [];
          object.jobs = [];
        }
        if (message.tasks && message.tasks.length) {
          object.tasks = [];
          for (var j = 0; j < message.tasks.length; ++j)
            object.tasks[j] = $root.OracleJob.Task.toObject(
              message.tasks[j],
              options
            );
        }
        if (message.jobs && message.jobs.length) {
          object.jobs = [];
          for (var j = 0; j < message.jobs.length; ++j)
            object.jobs[j] = $root.OracleJob.toObject(message.jobs[j], options);
        }
        return object;
      };

      /**
       * Converts this MeanTask to JSON.
       * @function toJSON
       * @memberof OracleJob.MeanTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      MeanTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for MeanTask
       * @function getTypeUrl
       * @memberof OracleJob.MeanTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      MeanTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.MeanTask';
      };

      return MeanTask;
    })();

    OracleJob.MaxTask = (function () {
      /**
       * Properties of a MaxTask.
       * @memberof OracleJob
       * @interface IMaxTask
       * @property {Array.<OracleJob.ITask>|null} [tasks] A list of subtasks to process and produce a list of result values.
       * @property {Array.<IOracleJob>|null} [jobs] A list of subjobs to process and produce a list of result values.
       */

      /**
       * Constructs a new MaxTask.
       * @memberof OracleJob
       * @classdesc Returns the maximum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the maximum numerical result from 3 tasks.
       *
       * ```json
       * {"maxTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the maximum numerical result from 3 jobs.
       *
       * ```json
       * {"maxTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @implements IMaxTask
       * @constructor
       * @param {OracleJob.IMaxTask=} [properties] Properties to set
       */
      function MaxTask(properties) {
        this.tasks = [];
        this.jobs = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * A list of subtasks to process and produce a list of result values.
       * @member {Array.<OracleJob.ITask>} tasks
       * @memberof OracleJob.MaxTask
       * @instance
       */
      MaxTask.prototype.tasks = $util.emptyArray;

      /**
       * A list of subjobs to process and produce a list of result values.
       * @member {Array.<IOracleJob>} jobs
       * @memberof OracleJob.MaxTask
       * @instance
       */
      MaxTask.prototype.jobs = $util.emptyArray;

      /**
       * Creates a new MaxTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.MaxTask
       * @static
       * @param {OracleJob.IMaxTask=} [properties] Properties to set
       * @returns {OracleJob.MaxTask} MaxTask instance
       */
      MaxTask.create = function create(properties) {
        return new MaxTask(properties);
      };

      /**
       * Encodes the specified MaxTask message. Does not implicitly {@apilink OracleJob.MaxTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.MaxTask
       * @static
       * @param {OracleJob.IMaxTask} message MaxTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MaxTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tasks != null && message.tasks.length)
          for (var i = 0; i < message.tasks.length; ++i)
            $root.OracleJob.Task.encode(
              message.tasks[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
        if (message.jobs != null && message.jobs.length)
          for (var i = 0; i < message.jobs.length; ++i)
            $root.OracleJob.encode(
              message.jobs[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified MaxTask message, length delimited. Does not implicitly {@apilink OracleJob.MaxTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.MaxTask
       * @static
       * @param {OracleJob.IMaxTask} message MaxTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MaxTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a MaxTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.MaxTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.MaxTask} MaxTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MaxTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.MaxTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.tasks && message.tasks.length)) message.tasks = [];
              message.tasks.push(
                $root.OracleJob.Task.decode(reader, reader.uint32())
              );
              break;
            }
            case 2: {
              if (!(message.jobs && message.jobs.length)) message.jobs = [];
              message.jobs.push(
                $root.OracleJob.decode(reader, reader.uint32())
              );
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a MaxTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.MaxTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.MaxTask} MaxTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MaxTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a MaxTask message.
       * @function verify
       * @memberof OracleJob.MaxTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      MaxTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.tasks != null && message.hasOwnProperty('tasks')) {
          if (!Array.isArray(message.tasks)) return 'tasks: array expected';
          for (var i = 0; i < message.tasks.length; ++i) {
            var error = $root.OracleJob.Task.verify(message.tasks[i]);
            if (error) return 'tasks.' + error;
          }
        }
        if (message.jobs != null && message.hasOwnProperty('jobs')) {
          if (!Array.isArray(message.jobs)) return 'jobs: array expected';
          for (var i = 0; i < message.jobs.length; ++i) {
            var error = $root.OracleJob.verify(message.jobs[i]);
            if (error) return 'jobs.' + error;
          }
        }
        return null;
      };

      /**
       * Creates a MaxTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.MaxTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.MaxTask} MaxTask
       */
      MaxTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.MaxTask) return object;
        var message = new $root.OracleJob.MaxTask();
        if (object.tasks) {
          if (!Array.isArray(object.tasks))
            throw TypeError('.OracleJob.MaxTask.tasks: array expected');
          message.tasks = [];
          for (var i = 0; i < object.tasks.length; ++i) {
            if (typeof object.tasks[i] !== 'object')
              throw TypeError('.OracleJob.MaxTask.tasks: object expected');
            message.tasks[i] = $root.OracleJob.Task.fromObject(object.tasks[i]);
          }
        }
        if (object.jobs) {
          if (!Array.isArray(object.jobs))
            throw TypeError('.OracleJob.MaxTask.jobs: array expected');
          message.jobs = [];
          for (var i = 0; i < object.jobs.length; ++i) {
            if (typeof object.jobs[i] !== 'object')
              throw TypeError('.OracleJob.MaxTask.jobs: object expected');
            message.jobs[i] = $root.OracleJob.fromObject(object.jobs[i]);
          }
        }
        return message;
      };

      /**
       * Creates a plain object from a MaxTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.MaxTask
       * @static
       * @param {OracleJob.MaxTask} message MaxTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      MaxTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) {
          object.tasks = [];
          object.jobs = [];
        }
        if (message.tasks && message.tasks.length) {
          object.tasks = [];
          for (var j = 0; j < message.tasks.length; ++j)
            object.tasks[j] = $root.OracleJob.Task.toObject(
              message.tasks[j],
              options
            );
        }
        if (message.jobs && message.jobs.length) {
          object.jobs = [];
          for (var j = 0; j < message.jobs.length; ++j)
            object.jobs[j] = $root.OracleJob.toObject(message.jobs[j], options);
        }
        return object;
      };

      /**
       * Converts this MaxTask to JSON.
       * @function toJSON
       * @memberof OracleJob.MaxTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      MaxTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for MaxTask
       * @function getTypeUrl
       * @memberof OracleJob.MaxTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      MaxTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.MaxTask';
      };

      return MaxTask;
    })();

    OracleJob.MinTask = (function () {
      /**
       * Properties of a MinTask.
       * @memberof OracleJob
       * @interface IMinTask
       * @property {Array.<OracleJob.ITask>|null} [tasks] A list of subtasks to process and produce a list of result values.
       * @property {Array.<IOracleJob>|null} [jobs] A list of subjobs to process and produce a list of result values.
       */

      /**
       * Constructs a new MinTask.
       * @memberof OracleJob
       * @classdesc Returns the minimum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the minimum numerical result from 3 tasks.
       *
       * ```json
       * {"minTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the minimum numerical result from 3 jobs.
       *
       * ```json
       * {"minTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @implements IMinTask
       * @constructor
       * @param {OracleJob.IMinTask=} [properties] Properties to set
       */
      function MinTask(properties) {
        this.tasks = [];
        this.jobs = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * A list of subtasks to process and produce a list of result values.
       * @member {Array.<OracleJob.ITask>} tasks
       * @memberof OracleJob.MinTask
       * @instance
       */
      MinTask.prototype.tasks = $util.emptyArray;

      /**
       * A list of subjobs to process and produce a list of result values.
       * @member {Array.<IOracleJob>} jobs
       * @memberof OracleJob.MinTask
       * @instance
       */
      MinTask.prototype.jobs = $util.emptyArray;

      /**
       * Creates a new MinTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.MinTask
       * @static
       * @param {OracleJob.IMinTask=} [properties] Properties to set
       * @returns {OracleJob.MinTask} MinTask instance
       */
      MinTask.create = function create(properties) {
        return new MinTask(properties);
      };

      /**
       * Encodes the specified MinTask message. Does not implicitly {@apilink OracleJob.MinTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.MinTask
       * @static
       * @param {OracleJob.IMinTask} message MinTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MinTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.tasks != null && message.tasks.length)
          for (var i = 0; i < message.tasks.length; ++i)
            $root.OracleJob.Task.encode(
              message.tasks[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
        if (message.jobs != null && message.jobs.length)
          for (var i = 0; i < message.jobs.length; ++i)
            $root.OracleJob.encode(
              message.jobs[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified MinTask message, length delimited. Does not implicitly {@apilink OracleJob.MinTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.MinTask
       * @static
       * @param {OracleJob.IMinTask} message MinTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MinTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a MinTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.MinTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.MinTask} MinTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MinTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.MinTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.tasks && message.tasks.length)) message.tasks = [];
              message.tasks.push(
                $root.OracleJob.Task.decode(reader, reader.uint32())
              );
              break;
            }
            case 2: {
              if (!(message.jobs && message.jobs.length)) message.jobs = [];
              message.jobs.push(
                $root.OracleJob.decode(reader, reader.uint32())
              );
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a MinTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.MinTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.MinTask} MinTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MinTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a MinTask message.
       * @function verify
       * @memberof OracleJob.MinTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      MinTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.tasks != null && message.hasOwnProperty('tasks')) {
          if (!Array.isArray(message.tasks)) return 'tasks: array expected';
          for (var i = 0; i < message.tasks.length; ++i) {
            var error = $root.OracleJob.Task.verify(message.tasks[i]);
            if (error) return 'tasks.' + error;
          }
        }
        if (message.jobs != null && message.hasOwnProperty('jobs')) {
          if (!Array.isArray(message.jobs)) return 'jobs: array expected';
          for (var i = 0; i < message.jobs.length; ++i) {
            var error = $root.OracleJob.verify(message.jobs[i]);
            if (error) return 'jobs.' + error;
          }
        }
        return null;
      };

      /**
       * Creates a MinTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.MinTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.MinTask} MinTask
       */
      MinTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.MinTask) return object;
        var message = new $root.OracleJob.MinTask();
        if (object.tasks) {
          if (!Array.isArray(object.tasks))
            throw TypeError('.OracleJob.MinTask.tasks: array expected');
          message.tasks = [];
          for (var i = 0; i < object.tasks.length; ++i) {
            if (typeof object.tasks[i] !== 'object')
              throw TypeError('.OracleJob.MinTask.tasks: object expected');
            message.tasks[i] = $root.OracleJob.Task.fromObject(object.tasks[i]);
          }
        }
        if (object.jobs) {
          if (!Array.isArray(object.jobs))
            throw TypeError('.OracleJob.MinTask.jobs: array expected');
          message.jobs = [];
          for (var i = 0; i < object.jobs.length; ++i) {
            if (typeof object.jobs[i] !== 'object')
              throw TypeError('.OracleJob.MinTask.jobs: object expected');
            message.jobs[i] = $root.OracleJob.fromObject(object.jobs[i]);
          }
        }
        return message;
      };

      /**
       * Creates a plain object from a MinTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.MinTask
       * @static
       * @param {OracleJob.MinTask} message MinTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      MinTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) {
          object.tasks = [];
          object.jobs = [];
        }
        if (message.tasks && message.tasks.length) {
          object.tasks = [];
          for (var j = 0; j < message.tasks.length; ++j)
            object.tasks[j] = $root.OracleJob.Task.toObject(
              message.tasks[j],
              options
            );
        }
        if (message.jobs && message.jobs.length) {
          object.jobs = [];
          for (var j = 0; j < message.jobs.length; ++j)
            object.jobs[j] = $root.OracleJob.toObject(message.jobs[j], options);
        }
        return object;
      };

      /**
       * Converts this MinTask to JSON.
       * @function toJSON
       * @memberof OracleJob.MinTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      MinTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for MinTask
       * @function getTypeUrl
       * @memberof OracleJob.MinTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      MinTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.MinTask';
      };

      return MinTask;
    })();

    OracleJob.ValueTask = (function () {
      /**
       * Properties of a ValueTask.
       * @memberof OracleJob
       * @interface IValueTask
       * @property {number|null} [value] The value that will be returned from this task.
       * @property {string|null} [aggregatorPubkey] Specifies an aggregatorr to pull the value of.
       * @property {string|null} [big] A stringified big.js. `Accepts variable expansion syntax.`
       */

      /**
       * Constructs a new ValueTask.
       * @memberof OracleJob
       * @classdesc Returns a specified value.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the value 10
       *
       * ```json
       * {"valueTask": {"value": 10} }
       * ```
       *
       * _**Example**_: Returns the currentRound result of an aggregator
       *
       * ```json
       * {"valueTask": {"aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"} }
       * ```
       *
       * _**Example**_: Returns the value stored in a CacheTask variable
       *
       * ```json
       * {"valueTask": {"big": "${ONE}"} }
       * ```
       * @implements IValueTask
       * @constructor
       * @param {OracleJob.IValueTask=} [properties] Properties to set
       */
      function ValueTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The value that will be returned from this task.
       * @member {number|null|undefined} value
       * @memberof OracleJob.ValueTask
       * @instance
       */
      ValueTask.prototype.value = null;

      /**
       * Specifies an aggregatorr to pull the value of.
       * @member {string|null|undefined} aggregatorPubkey
       * @memberof OracleJob.ValueTask
       * @instance
       */
      ValueTask.prototype.aggregatorPubkey = null;

      /**
       * A stringified big.js. `Accepts variable expansion syntax.`
       * @member {string|null|undefined} big
       * @memberof OracleJob.ValueTask
       * @instance
       */
      ValueTask.prototype.big = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * ValueTask Value.
       * @member {"value"|"aggregatorPubkey"|"big"|undefined} Value
       * @memberof OracleJob.ValueTask
       * @instance
       */
      Object.defineProperty(ValueTask.prototype, 'Value', {
        get: $util.oneOfGetter(
          ($oneOfFields = ['value', 'aggregatorPubkey', 'big'])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new ValueTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.ValueTask
       * @static
       * @param {OracleJob.IValueTask=} [properties] Properties to set
       * @returns {OracleJob.ValueTask} ValueTask instance
       */
      ValueTask.create = function create(properties) {
        return new ValueTask(properties);
      };

      /**
       * Encodes the specified ValueTask message. Does not implicitly {@apilink OracleJob.ValueTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.ValueTask
       * @static
       * @param {OracleJob.IValueTask} message ValueTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ValueTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.value != null &&
          Object.hasOwnProperty.call(message, 'value')
        )
          writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.value);
        if (
          message.aggregatorPubkey != null &&
          Object.hasOwnProperty.call(message, 'aggregatorPubkey')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.aggregatorPubkey);
        if (message.big != null && Object.hasOwnProperty.call(message, 'big'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.big);
        return writer;
      };

      /**
       * Encodes the specified ValueTask message, length delimited. Does not implicitly {@apilink OracleJob.ValueTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.ValueTask
       * @static
       * @param {OracleJob.IValueTask} message ValueTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ValueTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ValueTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.ValueTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.ValueTask} ValueTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ValueTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.ValueTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.value = reader.double();
              break;
            }
            case 2: {
              message.aggregatorPubkey = reader.string();
              break;
            }
            case 3: {
              message.big = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ValueTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.ValueTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.ValueTask} ValueTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ValueTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ValueTask message.
       * @function verify
       * @memberof OracleJob.ValueTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ValueTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (message.value != null && message.hasOwnProperty('value')) {
          properties.Value = 1;
          if (typeof message.value !== 'number')
            return 'value: number expected';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          if (properties.Value === 1) return 'Value: multiple values';
          properties.Value = 1;
          if (!$util.isString(message.aggregatorPubkey))
            return 'aggregatorPubkey: string expected';
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          if (properties.Value === 1) return 'Value: multiple values';
          properties.Value = 1;
          if (!$util.isString(message.big)) return 'big: string expected';
        }
        return null;
      };

      /**
       * Creates a ValueTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.ValueTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.ValueTask} ValueTask
       */
      ValueTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.ValueTask) return object;
        var message = new $root.OracleJob.ValueTask();
        if (object.value != null) message.value = Number(object.value);
        if (object.aggregatorPubkey != null)
          message.aggregatorPubkey = String(object.aggregatorPubkey);
        if (object.big != null) message.big = String(object.big);
        return message;
      };

      /**
       * Creates a plain object from a ValueTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.ValueTask
       * @static
       * @param {OracleJob.ValueTask} message ValueTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ValueTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.value != null && message.hasOwnProperty('value')) {
          object.value =
            options.json && !isFinite(message.value)
              ? String(message.value)
              : message.value;
          if (options.oneofs) object.Value = 'value';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          object.aggregatorPubkey = message.aggregatorPubkey;
          if (options.oneofs) object.Value = 'aggregatorPubkey';
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          object.big = message.big;
          if (options.oneofs) object.Value = 'big';
        }
        return object;
      };

      /**
       * Converts this ValueTask to JSON.
       * @function toJSON
       * @memberof OracleJob.ValueTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ValueTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for ValueTask
       * @function getTypeUrl
       * @memberof OracleJob.ValueTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      ValueTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.ValueTask';
      };

      return ValueTask;
    })();

    OracleJob.WebsocketTask = (function () {
      /**
       * Properties of a WebsocketTask.
       * @memberof OracleJob
       * @interface IWebsocketTask
       * @property {string|null} [url] The websocket url.
       * @property {string|null} [subscription] The websocket message to notify of a new subscription.
       * @property {number|null} [maxDataAgeSeconds] Minimum amount of time required between when the horses are taking out.
       * @property {string|null} [filter] Incoming message JSONPath filter.
       * Example: "$[?(@.channel == 'ticker' && @.market == 'BTC/USD')]"
       */

      /**
       * Constructs a new WebsocketTask.
       * @memberof OracleJob
       * @classdesc Opens and maintains a websocket for light speed data retrieval.
       *
       * _**Input**_: None
       *
       * _**Returns**_: String representation of the websocket subscription message.
       *
       * _**Example**_: Opens a coinbase websocket
       *
       * ```json
       * { "websocketTask": { "url": "wss://ws-feed.pro.coinbase.com", "subscription": "{\"type\":\"subscribe\",\"product_ids\":[\"BTC-USD\"],\"channels\":[\"ticker\",{\"name\":\"ticker\",\"product_ids\":[\"BTC-USD\"]}]}", "maxDataAgeSeconds": 15, "filter": "$[?(@.type == 'ticker' && @.product_id == 'BTC-USD')]" } }
       * ```
       * @implements IWebsocketTask
       * @constructor
       * @param {OracleJob.IWebsocketTask=} [properties] Properties to set
       */
      function WebsocketTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The websocket url.
       * @member {string} url
       * @memberof OracleJob.WebsocketTask
       * @instance
       */
      WebsocketTask.prototype.url = '';

      /**
       * The websocket message to notify of a new subscription.
       * @member {string} subscription
       * @memberof OracleJob.WebsocketTask
       * @instance
       */
      WebsocketTask.prototype.subscription = '';

      /**
       * Minimum amount of time required between when the horses are taking out.
       * @member {number} maxDataAgeSeconds
       * @memberof OracleJob.WebsocketTask
       * @instance
       */
      WebsocketTask.prototype.maxDataAgeSeconds = 0;

      /**
       * Incoming message JSONPath filter.
       * Example: "$[?(@.channel == 'ticker' && @.market == 'BTC/USD')]"
       * @member {string} filter
       * @memberof OracleJob.WebsocketTask
       * @instance
       */
      WebsocketTask.prototype.filter = '';

      /**
       * Creates a new WebsocketTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.WebsocketTask
       * @static
       * @param {OracleJob.IWebsocketTask=} [properties] Properties to set
       * @returns {OracleJob.WebsocketTask} WebsocketTask instance
       */
      WebsocketTask.create = function create(properties) {
        return new WebsocketTask(properties);
      };

      /**
       * Encodes the specified WebsocketTask message. Does not implicitly {@apilink OracleJob.WebsocketTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.WebsocketTask
       * @static
       * @param {OracleJob.IWebsocketTask} message WebsocketTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      WebsocketTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.url != null && Object.hasOwnProperty.call(message, 'url'))
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.url);
        if (
          message.subscription != null &&
          Object.hasOwnProperty.call(message, 'subscription')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.subscription);
        if (
          message.maxDataAgeSeconds != null &&
          Object.hasOwnProperty.call(message, 'maxDataAgeSeconds')
        )
          writer
            .uint32(/* id 3, wireType 0 =*/ 24)
            .int32(message.maxDataAgeSeconds);
        if (
          message.filter != null &&
          Object.hasOwnProperty.call(message, 'filter')
        )
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.filter);
        return writer;
      };

      /**
       * Encodes the specified WebsocketTask message, length delimited. Does not implicitly {@apilink OracleJob.WebsocketTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.WebsocketTask
       * @static
       * @param {OracleJob.IWebsocketTask} message WebsocketTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      WebsocketTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a WebsocketTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.WebsocketTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.WebsocketTask} WebsocketTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      WebsocketTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.WebsocketTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.url = reader.string();
              break;
            }
            case 2: {
              message.subscription = reader.string();
              break;
            }
            case 3: {
              message.maxDataAgeSeconds = reader.int32();
              break;
            }
            case 4: {
              message.filter = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a WebsocketTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.WebsocketTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.WebsocketTask} WebsocketTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      WebsocketTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a WebsocketTask message.
       * @function verify
       * @memberof OracleJob.WebsocketTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      WebsocketTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.url != null && message.hasOwnProperty('url'))
          if (!$util.isString(message.url)) return 'url: string expected';
        if (
          message.subscription != null &&
          message.hasOwnProperty('subscription')
        )
          if (!$util.isString(message.subscription))
            return 'subscription: string expected';
        if (
          message.maxDataAgeSeconds != null &&
          message.hasOwnProperty('maxDataAgeSeconds')
        )
          if (!$util.isInteger(message.maxDataAgeSeconds))
            return 'maxDataAgeSeconds: integer expected';
        if (message.filter != null && message.hasOwnProperty('filter'))
          if (!$util.isString(message.filter)) return 'filter: string expected';
        return null;
      };

      /**
       * Creates a WebsocketTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.WebsocketTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.WebsocketTask} WebsocketTask
       */
      WebsocketTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.WebsocketTask) return object;
        var message = new $root.OracleJob.WebsocketTask();
        if (object.url != null) message.url = String(object.url);
        if (object.subscription != null)
          message.subscription = String(object.subscription);
        if (object.maxDataAgeSeconds != null)
          message.maxDataAgeSeconds = object.maxDataAgeSeconds | 0;
        if (object.filter != null) message.filter = String(object.filter);
        return message;
      };

      /**
       * Creates a plain object from a WebsocketTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.WebsocketTask
       * @static
       * @param {OracleJob.WebsocketTask} message WebsocketTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      WebsocketTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.url = '';
          object.subscription = '';
          object.maxDataAgeSeconds = 0;
          object.filter = '';
        }
        if (message.url != null && message.hasOwnProperty('url'))
          object.url = message.url;
        if (
          message.subscription != null &&
          message.hasOwnProperty('subscription')
        )
          object.subscription = message.subscription;
        if (
          message.maxDataAgeSeconds != null &&
          message.hasOwnProperty('maxDataAgeSeconds')
        )
          object.maxDataAgeSeconds = message.maxDataAgeSeconds;
        if (message.filter != null && message.hasOwnProperty('filter'))
          object.filter = message.filter;
        return object;
      };

      /**
       * Converts this WebsocketTask to JSON.
       * @function toJSON
       * @memberof OracleJob.WebsocketTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      WebsocketTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for WebsocketTask
       * @function getTypeUrl
       * @memberof OracleJob.WebsocketTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      WebsocketTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.WebsocketTask';
      };

      return WebsocketTask;
    })();

    OracleJob.ConditionalTask = (function () {
      /**
       * Properties of a ConditionalTask.
       * @memberof OracleJob
       * @interface IConditionalTask
       * @property {Array.<OracleJob.ITask>|null} [attempt] A list of subtasks to process in an attempt to produce a valid numerical result.
       * @property {Array.<OracleJob.ITask>|null} [onFailure] A list of subtasks that will be run if `attempt` subtasks are unable to produce an acceptable
       * result.
       */

      /**
       * Constructs a new ConditionalTask.
       * @memberof OracleJob
       * @classdesc This task will run the `attempt` on the subtasks in an effort to produce a valid numerical result. If `attempt`. fails to produce an acceptable result, `on_failure` subtasks will be run instead.
       *
       * _**Input**_: The current running numerical result output from a task.
       *
       * _**Returns**_: A numerical result, else run `on_failure` subtasks.
       *
       * _**Example**_: Returns the numerical result from the conditionalTask's subtasks, else `on_failure` returns the numerical result from its subtasks.
       *
       * ```json
       * {"conditionalTask":{"attempt":[{"tasks":[{"jupiterSwapTask":{"inTokenAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outTokenAddress":"DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ"}}]}],"onFailure":[{"lpExchangeRateTask":{"orcaPoolAddress":"7yJ4gMRJhEoCR48aPE3EAWRmCoygakik81ZS1sajaTnE"}}]}}
       * ```
       * @implements IConditionalTask
       * @constructor
       * @param {OracleJob.IConditionalTask=} [properties] Properties to set
       */
      function ConditionalTask(properties) {
        this.attempt = [];
        this.onFailure = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * A list of subtasks to process in an attempt to produce a valid numerical result.
       * @member {Array.<OracleJob.ITask>} attempt
       * @memberof OracleJob.ConditionalTask
       * @instance
       */
      ConditionalTask.prototype.attempt = $util.emptyArray;

      /**
       * A list of subtasks that will be run if `attempt` subtasks are unable to produce an acceptable
       * result.
       * @member {Array.<OracleJob.ITask>} onFailure
       * @memberof OracleJob.ConditionalTask
       * @instance
       */
      ConditionalTask.prototype.onFailure = $util.emptyArray;

      /**
       * Creates a new ConditionalTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.ConditionalTask
       * @static
       * @param {OracleJob.IConditionalTask=} [properties] Properties to set
       * @returns {OracleJob.ConditionalTask} ConditionalTask instance
       */
      ConditionalTask.create = function create(properties) {
        return new ConditionalTask(properties);
      };

      /**
       * Encodes the specified ConditionalTask message. Does not implicitly {@apilink OracleJob.ConditionalTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.ConditionalTask
       * @static
       * @param {OracleJob.IConditionalTask} message ConditionalTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ConditionalTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.attempt != null && message.attempt.length)
          for (var i = 0; i < message.attempt.length; ++i)
            $root.OracleJob.Task.encode(
              message.attempt[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
        if (message.onFailure != null && message.onFailure.length)
          for (var i = 0; i < message.onFailure.length; ++i)
            $root.OracleJob.Task.encode(
              message.onFailure[i],
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified ConditionalTask message, length delimited. Does not implicitly {@apilink OracleJob.ConditionalTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.ConditionalTask
       * @static
       * @param {OracleJob.IConditionalTask} message ConditionalTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ConditionalTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ConditionalTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.ConditionalTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.ConditionalTask} ConditionalTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ConditionalTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.ConditionalTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.attempt && message.attempt.length))
                message.attempt = [];
              message.attempt.push(
                $root.OracleJob.Task.decode(reader, reader.uint32())
              );
              break;
            }
            case 2: {
              if (!(message.onFailure && message.onFailure.length))
                message.onFailure = [];
              message.onFailure.push(
                $root.OracleJob.Task.decode(reader, reader.uint32())
              );
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ConditionalTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.ConditionalTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.ConditionalTask} ConditionalTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ConditionalTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ConditionalTask message.
       * @function verify
       * @memberof OracleJob.ConditionalTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ConditionalTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.attempt != null && message.hasOwnProperty('attempt')) {
          if (!Array.isArray(message.attempt)) return 'attempt: array expected';
          for (var i = 0; i < message.attempt.length; ++i) {
            var error = $root.OracleJob.Task.verify(message.attempt[i]);
            if (error) return 'attempt.' + error;
          }
        }
        if (message.onFailure != null && message.hasOwnProperty('onFailure')) {
          if (!Array.isArray(message.onFailure))
            return 'onFailure: array expected';
          for (var i = 0; i < message.onFailure.length; ++i) {
            var error = $root.OracleJob.Task.verify(message.onFailure[i]);
            if (error) return 'onFailure.' + error;
          }
        }
        return null;
      };

      /**
       * Creates a ConditionalTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.ConditionalTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.ConditionalTask} ConditionalTask
       */
      ConditionalTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.ConditionalTask) return object;
        var message = new $root.OracleJob.ConditionalTask();
        if (object.attempt) {
          if (!Array.isArray(object.attempt))
            throw TypeError(
              '.OracleJob.ConditionalTask.attempt: array expected'
            );
          message.attempt = [];
          for (var i = 0; i < object.attempt.length; ++i) {
            if (typeof object.attempt[i] !== 'object')
              throw TypeError(
                '.OracleJob.ConditionalTask.attempt: object expected'
              );
            message.attempt[i] = $root.OracleJob.Task.fromObject(
              object.attempt[i]
            );
          }
        }
        if (object.onFailure) {
          if (!Array.isArray(object.onFailure))
            throw TypeError(
              '.OracleJob.ConditionalTask.onFailure: array expected'
            );
          message.onFailure = [];
          for (var i = 0; i < object.onFailure.length; ++i) {
            if (typeof object.onFailure[i] !== 'object')
              throw TypeError(
                '.OracleJob.ConditionalTask.onFailure: object expected'
              );
            message.onFailure[i] = $root.OracleJob.Task.fromObject(
              object.onFailure[i]
            );
          }
        }
        return message;
      };

      /**
       * Creates a plain object from a ConditionalTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.ConditionalTask
       * @static
       * @param {OracleJob.ConditionalTask} message ConditionalTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ConditionalTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) {
          object.attempt = [];
          object.onFailure = [];
        }
        if (message.attempt && message.attempt.length) {
          object.attempt = [];
          for (var j = 0; j < message.attempt.length; ++j)
            object.attempt[j] = $root.OracleJob.Task.toObject(
              message.attempt[j],
              options
            );
        }
        if (message.onFailure && message.onFailure.length) {
          object.onFailure = [];
          for (var j = 0; j < message.onFailure.length; ++j)
            object.onFailure[j] = $root.OracleJob.Task.toObject(
              message.onFailure[j],
              options
            );
        }
        return object;
      };

      /**
       * Converts this ConditionalTask to JSON.
       * @function toJSON
       * @memberof OracleJob.ConditionalTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ConditionalTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for ConditionalTask
       * @function getTypeUrl
       * @memberof OracleJob.ConditionalTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      ConditionalTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.ConditionalTask';
      };

      return ConditionalTask;
    })();

    OracleJob.DivideTask = (function () {
      /**
       * Properties of a DivideTask.
       * @memberof OracleJob
       * @interface IDivideTask
       * @property {number|null} [scalar] Specifies a basic scalar denominator to divide by.
       * @property {string|null} [aggregatorPubkey] Specifies another aggregator resut to divide by.
       * @property {IOracleJob|null} [job] A job whose result is computed before dividing our numerical input by that result.
       * @property {string|null} [big] A stringified big.js. `Accepts variable expansion syntax.`
       */

      /**
       * Constructs a new DivideTask.
       * @memberof OracleJob
       * @classdesc This task will divide a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by dividing by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by dividing by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by dividing by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"divideTask":{"big":"${TEN}"}}]}
       * ```
       * @implements IDivideTask
       * @constructor
       * @param {OracleJob.IDivideTask=} [properties] Properties to set
       */
      function DivideTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Specifies a basic scalar denominator to divide by.
       * @member {number|null|undefined} scalar
       * @memberof OracleJob.DivideTask
       * @instance
       */
      DivideTask.prototype.scalar = null;

      /**
       * Specifies another aggregator resut to divide by.
       * @member {string|null|undefined} aggregatorPubkey
       * @memberof OracleJob.DivideTask
       * @instance
       */
      DivideTask.prototype.aggregatorPubkey = null;

      /**
       * A job whose result is computed before dividing our numerical input by that result.
       * @member {IOracleJob|null|undefined} job
       * @memberof OracleJob.DivideTask
       * @instance
       */
      DivideTask.prototype.job = null;

      /**
       * A stringified big.js. `Accepts variable expansion syntax.`
       * @member {string|null|undefined} big
       * @memberof OracleJob.DivideTask
       * @instance
       */
      DivideTask.prototype.big = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * DivideTask Denominator.
       * @member {"scalar"|"aggregatorPubkey"|"job"|"big"|undefined} Denominator
       * @memberof OracleJob.DivideTask
       * @instance
       */
      Object.defineProperty(DivideTask.prototype, 'Denominator', {
        get: $util.oneOfGetter(
          ($oneOfFields = ['scalar', 'aggregatorPubkey', 'job', 'big'])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new DivideTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.DivideTask
       * @static
       * @param {OracleJob.IDivideTask=} [properties] Properties to set
       * @returns {OracleJob.DivideTask} DivideTask instance
       */
      DivideTask.create = function create(properties) {
        return new DivideTask(properties);
      };

      /**
       * Encodes the specified DivideTask message. Does not implicitly {@apilink OracleJob.DivideTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.DivideTask
       * @static
       * @param {OracleJob.IDivideTask} message DivideTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DivideTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.scalar != null &&
          Object.hasOwnProperty.call(message, 'scalar')
        )
          writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.scalar);
        if (
          message.aggregatorPubkey != null &&
          Object.hasOwnProperty.call(message, 'aggregatorPubkey')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.aggregatorPubkey);
        if (message.job != null && Object.hasOwnProperty.call(message, 'job'))
          $root.OracleJob.encode(
            message.job,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
        if (message.big != null && Object.hasOwnProperty.call(message, 'big'))
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.big);
        return writer;
      };

      /**
       * Encodes the specified DivideTask message, length delimited. Does not implicitly {@apilink OracleJob.DivideTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.DivideTask
       * @static
       * @param {OracleJob.IDivideTask} message DivideTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DivideTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DivideTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.DivideTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.DivideTask} DivideTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DivideTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.DivideTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.scalar = reader.double();
              break;
            }
            case 2: {
              message.aggregatorPubkey = reader.string();
              break;
            }
            case 3: {
              message.job = $root.OracleJob.decode(reader, reader.uint32());
              break;
            }
            case 4: {
              message.big = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DivideTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.DivideTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.DivideTask} DivideTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DivideTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DivideTask message.
       * @function verify
       * @memberof OracleJob.DivideTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DivideTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          properties.Denominator = 1;
          if (typeof message.scalar !== 'number')
            return 'scalar: number expected';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          if (properties.Denominator === 1)
            return 'Denominator: multiple values';
          properties.Denominator = 1;
          if (!$util.isString(message.aggregatorPubkey))
            return 'aggregatorPubkey: string expected';
        }
        if (message.job != null && message.hasOwnProperty('job')) {
          if (properties.Denominator === 1)
            return 'Denominator: multiple values';
          properties.Denominator = 1;
          {
            var error = $root.OracleJob.verify(message.job);
            if (error) return 'job.' + error;
          }
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          if (properties.Denominator === 1)
            return 'Denominator: multiple values';
          properties.Denominator = 1;
          if (!$util.isString(message.big)) return 'big: string expected';
        }
        return null;
      };

      /**
       * Creates a DivideTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.DivideTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.DivideTask} DivideTask
       */
      DivideTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.DivideTask) return object;
        var message = new $root.OracleJob.DivideTask();
        if (object.scalar != null) message.scalar = Number(object.scalar);
        if (object.aggregatorPubkey != null)
          message.aggregatorPubkey = String(object.aggregatorPubkey);
        if (object.job != null) {
          if (typeof object.job !== 'object')
            throw TypeError('.OracleJob.DivideTask.job: object expected');
          message.job = $root.OracleJob.fromObject(object.job);
        }
        if (object.big != null) message.big = String(object.big);
        return message;
      };

      /**
       * Creates a plain object from a DivideTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.DivideTask
       * @static
       * @param {OracleJob.DivideTask} message DivideTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DivideTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          object.scalar =
            options.json && !isFinite(message.scalar)
              ? String(message.scalar)
              : message.scalar;
          if (options.oneofs) object.Denominator = 'scalar';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          object.aggregatorPubkey = message.aggregatorPubkey;
          if (options.oneofs) object.Denominator = 'aggregatorPubkey';
        }
        if (message.job != null && message.hasOwnProperty('job')) {
          object.job = $root.OracleJob.toObject(message.job, options);
          if (options.oneofs) object.Denominator = 'job';
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          object.big = message.big;
          if (options.oneofs) object.Denominator = 'big';
        }
        return object;
      };

      /**
       * Converts this DivideTask to JSON.
       * @function toJSON
       * @memberof OracleJob.DivideTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DivideTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for DivideTask
       * @function getTypeUrl
       * @memberof OracleJob.DivideTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      DivideTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.DivideTask';
      };

      return DivideTask;
    })();

    OracleJob.MultiplyTask = (function () {
      /**
       * Properties of a MultiplyTask.
       * @memberof OracleJob
       * @interface IMultiplyTask
       * @property {number|null} [scalar] Specifies a scalar to multiply by.
       * @property {string|null} [aggregatorPubkey] Specifies an aggregator to multiply by.
       * @property {IOracleJob|null} [job] A job whose result is computed before multiplying our numerical input by that result.
       * @property {string|null} [big] A stringified big.js. `Accepts variable expansion syntax.`
       */

      /**
       * Constructs a new MultiplyTask.
       * @memberof OracleJob
       * @classdesc This task will multiply a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by multiplying by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"multiplyTask":{"big":"${TEN}"}}]}
       * ```
       * @implements IMultiplyTask
       * @constructor
       * @param {OracleJob.IMultiplyTask=} [properties] Properties to set
       */
      function MultiplyTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Specifies a scalar to multiply by.
       * @member {number|null|undefined} scalar
       * @memberof OracleJob.MultiplyTask
       * @instance
       */
      MultiplyTask.prototype.scalar = null;

      /**
       * Specifies an aggregator to multiply by.
       * @member {string|null|undefined} aggregatorPubkey
       * @memberof OracleJob.MultiplyTask
       * @instance
       */
      MultiplyTask.prototype.aggregatorPubkey = null;

      /**
       * A job whose result is computed before multiplying our numerical input by that result.
       * @member {IOracleJob|null|undefined} job
       * @memberof OracleJob.MultiplyTask
       * @instance
       */
      MultiplyTask.prototype.job = null;

      /**
       * A stringified big.js. `Accepts variable expansion syntax.`
       * @member {string|null|undefined} big
       * @memberof OracleJob.MultiplyTask
       * @instance
       */
      MultiplyTask.prototype.big = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * MultiplyTask Multiple.
       * @member {"scalar"|"aggregatorPubkey"|"job"|"big"|undefined} Multiple
       * @memberof OracleJob.MultiplyTask
       * @instance
       */
      Object.defineProperty(MultiplyTask.prototype, 'Multiple', {
        get: $util.oneOfGetter(
          ($oneOfFields = ['scalar', 'aggregatorPubkey', 'job', 'big'])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new MultiplyTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.MultiplyTask
       * @static
       * @param {OracleJob.IMultiplyTask=} [properties] Properties to set
       * @returns {OracleJob.MultiplyTask} MultiplyTask instance
       */
      MultiplyTask.create = function create(properties) {
        return new MultiplyTask(properties);
      };

      /**
       * Encodes the specified MultiplyTask message. Does not implicitly {@apilink OracleJob.MultiplyTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.MultiplyTask
       * @static
       * @param {OracleJob.IMultiplyTask} message MultiplyTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MultiplyTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.scalar != null &&
          Object.hasOwnProperty.call(message, 'scalar')
        )
          writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.scalar);
        if (
          message.aggregatorPubkey != null &&
          Object.hasOwnProperty.call(message, 'aggregatorPubkey')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.aggregatorPubkey);
        if (message.job != null && Object.hasOwnProperty.call(message, 'job'))
          $root.OracleJob.encode(
            message.job,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
        if (message.big != null && Object.hasOwnProperty.call(message, 'big'))
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.big);
        return writer;
      };

      /**
       * Encodes the specified MultiplyTask message, length delimited. Does not implicitly {@apilink OracleJob.MultiplyTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.MultiplyTask
       * @static
       * @param {OracleJob.IMultiplyTask} message MultiplyTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MultiplyTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a MultiplyTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.MultiplyTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.MultiplyTask} MultiplyTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MultiplyTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.MultiplyTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.scalar = reader.double();
              break;
            }
            case 2: {
              message.aggregatorPubkey = reader.string();
              break;
            }
            case 3: {
              message.job = $root.OracleJob.decode(reader, reader.uint32());
              break;
            }
            case 4: {
              message.big = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a MultiplyTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.MultiplyTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.MultiplyTask} MultiplyTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MultiplyTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a MultiplyTask message.
       * @function verify
       * @memberof OracleJob.MultiplyTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      MultiplyTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          properties.Multiple = 1;
          if (typeof message.scalar !== 'number')
            return 'scalar: number expected';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          if (properties.Multiple === 1) return 'Multiple: multiple values';
          properties.Multiple = 1;
          if (!$util.isString(message.aggregatorPubkey))
            return 'aggregatorPubkey: string expected';
        }
        if (message.job != null && message.hasOwnProperty('job')) {
          if (properties.Multiple === 1) return 'Multiple: multiple values';
          properties.Multiple = 1;
          {
            var error = $root.OracleJob.verify(message.job);
            if (error) return 'job.' + error;
          }
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          if (properties.Multiple === 1) return 'Multiple: multiple values';
          properties.Multiple = 1;
          if (!$util.isString(message.big)) return 'big: string expected';
        }
        return null;
      };

      /**
       * Creates a MultiplyTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.MultiplyTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.MultiplyTask} MultiplyTask
       */
      MultiplyTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.MultiplyTask) return object;
        var message = new $root.OracleJob.MultiplyTask();
        if (object.scalar != null) message.scalar = Number(object.scalar);
        if (object.aggregatorPubkey != null)
          message.aggregatorPubkey = String(object.aggregatorPubkey);
        if (object.job != null) {
          if (typeof object.job !== 'object')
            throw TypeError('.OracleJob.MultiplyTask.job: object expected');
          message.job = $root.OracleJob.fromObject(object.job);
        }
        if (object.big != null) message.big = String(object.big);
        return message;
      };

      /**
       * Creates a plain object from a MultiplyTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.MultiplyTask
       * @static
       * @param {OracleJob.MultiplyTask} message MultiplyTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      MultiplyTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          object.scalar =
            options.json && !isFinite(message.scalar)
              ? String(message.scalar)
              : message.scalar;
          if (options.oneofs) object.Multiple = 'scalar';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          object.aggregatorPubkey = message.aggregatorPubkey;
          if (options.oneofs) object.Multiple = 'aggregatorPubkey';
        }
        if (message.job != null && message.hasOwnProperty('job')) {
          object.job = $root.OracleJob.toObject(message.job, options);
          if (options.oneofs) object.Multiple = 'job';
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          object.big = message.big;
          if (options.oneofs) object.Multiple = 'big';
        }
        return object;
      };

      /**
       * Converts this MultiplyTask to JSON.
       * @function toJSON
       * @memberof OracleJob.MultiplyTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      MultiplyTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for MultiplyTask
       * @function getTypeUrl
       * @memberof OracleJob.MultiplyTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      MultiplyTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.MultiplyTask';
      };

      return MultiplyTask;
    })();

    OracleJob.AddTask = (function () {
      /**
       * Properties of an AddTask.
       * @memberof OracleJob
       * @interface IAddTask
       * @property {number|null} [scalar] Specifies a scalar to add by.
       * @property {string|null} [aggregatorPubkey] Specifies an aggregator to add by.
       * @property {IOracleJob|null} [job] A job whose result is computed before adding our numerical input by that result.
       * @property {string|null} [big] A stringified big.js. `Accepts variable expansion syntax.`
       */

      /**
       * Constructs a new AddTask.
       * @memberof OracleJob
       * @classdesc This task will add a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by adding by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"addTask":{"big":"${TEN}"}}]}
       * ```
       * @implements IAddTask
       * @constructor
       * @param {OracleJob.IAddTask=} [properties] Properties to set
       */
      function AddTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Specifies a scalar to add by.
       * @member {number|null|undefined} scalar
       * @memberof OracleJob.AddTask
       * @instance
       */
      AddTask.prototype.scalar = null;

      /**
       * Specifies an aggregator to add by.
       * @member {string|null|undefined} aggregatorPubkey
       * @memberof OracleJob.AddTask
       * @instance
       */
      AddTask.prototype.aggregatorPubkey = null;

      /**
       * A job whose result is computed before adding our numerical input by that result.
       * @member {IOracleJob|null|undefined} job
       * @memberof OracleJob.AddTask
       * @instance
       */
      AddTask.prototype.job = null;

      /**
       * A stringified big.js. `Accepts variable expansion syntax.`
       * @member {string|null|undefined} big
       * @memberof OracleJob.AddTask
       * @instance
       */
      AddTask.prototype.big = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * AddTask Addition.
       * @member {"scalar"|"aggregatorPubkey"|"job"|"big"|undefined} Addition
       * @memberof OracleJob.AddTask
       * @instance
       */
      Object.defineProperty(AddTask.prototype, 'Addition', {
        get: $util.oneOfGetter(
          ($oneOfFields = ['scalar', 'aggregatorPubkey', 'job', 'big'])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new AddTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.AddTask
       * @static
       * @param {OracleJob.IAddTask=} [properties] Properties to set
       * @returns {OracleJob.AddTask} AddTask instance
       */
      AddTask.create = function create(properties) {
        return new AddTask(properties);
      };

      /**
       * Encodes the specified AddTask message. Does not implicitly {@apilink OracleJob.AddTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.AddTask
       * @static
       * @param {OracleJob.IAddTask} message AddTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.scalar != null &&
          Object.hasOwnProperty.call(message, 'scalar')
        )
          writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.scalar);
        if (
          message.aggregatorPubkey != null &&
          Object.hasOwnProperty.call(message, 'aggregatorPubkey')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.aggregatorPubkey);
        if (message.job != null && Object.hasOwnProperty.call(message, 'job'))
          $root.OracleJob.encode(
            message.job,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
        if (message.big != null && Object.hasOwnProperty.call(message, 'big'))
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.big);
        return writer;
      };

      /**
       * Encodes the specified AddTask message, length delimited. Does not implicitly {@apilink OracleJob.AddTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.AddTask
       * @static
       * @param {OracleJob.IAddTask} message AddTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AddTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an AddTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.AddTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.AddTask} AddTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.AddTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.scalar = reader.double();
              break;
            }
            case 2: {
              message.aggregatorPubkey = reader.string();
              break;
            }
            case 3: {
              message.job = $root.OracleJob.decode(reader, reader.uint32());
              break;
            }
            case 4: {
              message.big = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an AddTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.AddTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.AddTask} AddTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AddTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an AddTask message.
       * @function verify
       * @memberof OracleJob.AddTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AddTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          properties.Addition = 1;
          if (typeof message.scalar !== 'number')
            return 'scalar: number expected';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          if (properties.Addition === 1) return 'Addition: multiple values';
          properties.Addition = 1;
          if (!$util.isString(message.aggregatorPubkey))
            return 'aggregatorPubkey: string expected';
        }
        if (message.job != null && message.hasOwnProperty('job')) {
          if (properties.Addition === 1) return 'Addition: multiple values';
          properties.Addition = 1;
          {
            var error = $root.OracleJob.verify(message.job);
            if (error) return 'job.' + error;
          }
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          if (properties.Addition === 1) return 'Addition: multiple values';
          properties.Addition = 1;
          if (!$util.isString(message.big)) return 'big: string expected';
        }
        return null;
      };

      /**
       * Creates an AddTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.AddTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.AddTask} AddTask
       */
      AddTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.AddTask) return object;
        var message = new $root.OracleJob.AddTask();
        if (object.scalar != null) message.scalar = Number(object.scalar);
        if (object.aggregatorPubkey != null)
          message.aggregatorPubkey = String(object.aggregatorPubkey);
        if (object.job != null) {
          if (typeof object.job !== 'object')
            throw TypeError('.OracleJob.AddTask.job: object expected');
          message.job = $root.OracleJob.fromObject(object.job);
        }
        if (object.big != null) message.big = String(object.big);
        return message;
      };

      /**
       * Creates a plain object from an AddTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.AddTask
       * @static
       * @param {OracleJob.AddTask} message AddTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AddTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          object.scalar =
            options.json && !isFinite(message.scalar)
              ? String(message.scalar)
              : message.scalar;
          if (options.oneofs) object.Addition = 'scalar';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          object.aggregatorPubkey = message.aggregatorPubkey;
          if (options.oneofs) object.Addition = 'aggregatorPubkey';
        }
        if (message.job != null && message.hasOwnProperty('job')) {
          object.job = $root.OracleJob.toObject(message.job, options);
          if (options.oneofs) object.Addition = 'job';
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          object.big = message.big;
          if (options.oneofs) object.Addition = 'big';
        }
        return object;
      };

      /**
       * Converts this AddTask to JSON.
       * @function toJSON
       * @memberof OracleJob.AddTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AddTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for AddTask
       * @function getTypeUrl
       * @memberof OracleJob.AddTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      AddTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.AddTask';
      };

      return AddTask;
    })();

    OracleJob.SubtractTask = (function () {
      /**
       * Properties of a SubtractTask.
       * @memberof OracleJob
       * @interface ISubtractTask
       * @property {number|null} [scalar] Specifies a scalar to subtract by.
       * @property {string|null} [aggregatorPubkey] Specifies an aggregator to subtract by.
       * @property {IOracleJob|null} [job] A job whose result is computed before subtracting our numerical input by that result.
       * @property {string|null} [big] A stringified big.js. `Accepts variable expansion syntax.`
       */

      /**
       * Constructs a new SubtractTask.
       * @memberof OracleJob
       * @classdesc This task will subtract a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by subtracting by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"subtractTask":{"big":"${TEN}"}}]}
       * ```
       * @implements ISubtractTask
       * @constructor
       * @param {OracleJob.ISubtractTask=} [properties] Properties to set
       */
      function SubtractTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Specifies a scalar to subtract by.
       * @member {number|null|undefined} scalar
       * @memberof OracleJob.SubtractTask
       * @instance
       */
      SubtractTask.prototype.scalar = null;

      /**
       * Specifies an aggregator to subtract by.
       * @member {string|null|undefined} aggregatorPubkey
       * @memberof OracleJob.SubtractTask
       * @instance
       */
      SubtractTask.prototype.aggregatorPubkey = null;

      /**
       * A job whose result is computed before subtracting our numerical input by that result.
       * @member {IOracleJob|null|undefined} job
       * @memberof OracleJob.SubtractTask
       * @instance
       */
      SubtractTask.prototype.job = null;

      /**
       * A stringified big.js. `Accepts variable expansion syntax.`
       * @member {string|null|undefined} big
       * @memberof OracleJob.SubtractTask
       * @instance
       */
      SubtractTask.prototype.big = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * SubtractTask Subtraction.
       * @member {"scalar"|"aggregatorPubkey"|"job"|"big"|undefined} Subtraction
       * @memberof OracleJob.SubtractTask
       * @instance
       */
      Object.defineProperty(SubtractTask.prototype, 'Subtraction', {
        get: $util.oneOfGetter(
          ($oneOfFields = ['scalar', 'aggregatorPubkey', 'job', 'big'])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new SubtractTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.SubtractTask
       * @static
       * @param {OracleJob.ISubtractTask=} [properties] Properties to set
       * @returns {OracleJob.SubtractTask} SubtractTask instance
       */
      SubtractTask.create = function create(properties) {
        return new SubtractTask(properties);
      };

      /**
       * Encodes the specified SubtractTask message. Does not implicitly {@apilink OracleJob.SubtractTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.SubtractTask
       * @static
       * @param {OracleJob.ISubtractTask} message SubtractTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SubtractTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.scalar != null &&
          Object.hasOwnProperty.call(message, 'scalar')
        )
          writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.scalar);
        if (
          message.aggregatorPubkey != null &&
          Object.hasOwnProperty.call(message, 'aggregatorPubkey')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.aggregatorPubkey);
        if (message.job != null && Object.hasOwnProperty.call(message, 'job'))
          $root.OracleJob.encode(
            message.job,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
        if (message.big != null && Object.hasOwnProperty.call(message, 'big'))
          writer.uint32(/* id 4, wireType 2 =*/ 34).string(message.big);
        return writer;
      };

      /**
       * Encodes the specified SubtractTask message, length delimited. Does not implicitly {@apilink OracleJob.SubtractTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.SubtractTask
       * @static
       * @param {OracleJob.ISubtractTask} message SubtractTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SubtractTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SubtractTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.SubtractTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.SubtractTask} SubtractTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SubtractTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.SubtractTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.scalar = reader.double();
              break;
            }
            case 2: {
              message.aggregatorPubkey = reader.string();
              break;
            }
            case 3: {
              message.job = $root.OracleJob.decode(reader, reader.uint32());
              break;
            }
            case 4: {
              message.big = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SubtractTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.SubtractTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.SubtractTask} SubtractTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SubtractTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SubtractTask message.
       * @function verify
       * @memberof OracleJob.SubtractTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SubtractTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          properties.Subtraction = 1;
          if (typeof message.scalar !== 'number')
            return 'scalar: number expected';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          if (properties.Subtraction === 1)
            return 'Subtraction: multiple values';
          properties.Subtraction = 1;
          if (!$util.isString(message.aggregatorPubkey))
            return 'aggregatorPubkey: string expected';
        }
        if (message.job != null && message.hasOwnProperty('job')) {
          if (properties.Subtraction === 1)
            return 'Subtraction: multiple values';
          properties.Subtraction = 1;
          {
            var error = $root.OracleJob.verify(message.job);
            if (error) return 'job.' + error;
          }
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          if (properties.Subtraction === 1)
            return 'Subtraction: multiple values';
          properties.Subtraction = 1;
          if (!$util.isString(message.big)) return 'big: string expected';
        }
        return null;
      };

      /**
       * Creates a SubtractTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.SubtractTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.SubtractTask} SubtractTask
       */
      SubtractTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.SubtractTask) return object;
        var message = new $root.OracleJob.SubtractTask();
        if (object.scalar != null) message.scalar = Number(object.scalar);
        if (object.aggregatorPubkey != null)
          message.aggregatorPubkey = String(object.aggregatorPubkey);
        if (object.job != null) {
          if (typeof object.job !== 'object')
            throw TypeError('.OracleJob.SubtractTask.job: object expected');
          message.job = $root.OracleJob.fromObject(object.job);
        }
        if (object.big != null) message.big = String(object.big);
        return message;
      };

      /**
       * Creates a plain object from a SubtractTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.SubtractTask
       * @static
       * @param {OracleJob.SubtractTask} message SubtractTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SubtractTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          object.scalar =
            options.json && !isFinite(message.scalar)
              ? String(message.scalar)
              : message.scalar;
          if (options.oneofs) object.Subtraction = 'scalar';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          object.aggregatorPubkey = message.aggregatorPubkey;
          if (options.oneofs) object.Subtraction = 'aggregatorPubkey';
        }
        if (message.job != null && message.hasOwnProperty('job')) {
          object.job = $root.OracleJob.toObject(message.job, options);
          if (options.oneofs) object.Subtraction = 'job';
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          object.big = message.big;
          if (options.oneofs) object.Subtraction = 'big';
        }
        return object;
      };

      /**
       * Converts this SubtractTask to JSON.
       * @function toJSON
       * @memberof OracleJob.SubtractTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SubtractTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for SubtractTask
       * @function getTypeUrl
       * @memberof OracleJob.SubtractTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      SubtractTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.SubtractTask';
      };

      return SubtractTask;
    })();

    OracleJob.LpTokenPriceTask = (function () {
      /**
       * Properties of a LpTokenPriceTask.
       * @memberof OracleJob
       * @interface ILpTokenPriceTask
       * @property {string|null} [mercurialPoolAddress] Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js
       * @property {string|null} [saberPoolAddress] Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist
       * @property {string|null} [orcaPoolAddress] Orca pool address. A full list can be found here: https://www.orca.so/pools
       * @property {string|null} [raydiumPoolAddress] The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json
       * @property {Array.<string>|null} [priceFeedAddresses] A list of Switchboard aggregator accounts used to calculate the fair LP price. This ensures the price is based on the previous round to mitigate flash loan price manipulation.
       * @property {Array.<IOracleJob>|null} [priceFeedJobs] A list of OracleJobs to execute in order to yield the price feed jobs to use for the fair price formula.
       * @property {boolean|null} [useFairPrice] If enabled and price_feed_addresses provided, the oracle will calculate the fair LP price based on the liquidity pool reserves. See our blog post for more information: https://switchboardxyz.medium.com/fair-lp-token-oracles-94a457c50239
       */

      /**
       * Constructs a new LpTokenPriceTask.
       * @memberof OracleJob
       * @classdesc Fetch LP token price info from a number of supported exchanges.
       *
       * See our blog post on [Fair LP Token Oracles](/blog/2022/01/20/Fair-LP-Token-Oracles)
       *
       * *NOTE**: This is not the swap price but the price of the underlying LP token.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The price of an LP token for a given AMM pool.
       *
       * _**Example**_: Fetch the Orca LP token price of the SOL/USDC pool
       *
       * ```json
       * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
       * ```
       *
       * _**Example**_: Fetch the fair price Orca LP token price of the SOL/USDC pool
       *
       * ```json
       * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9", "useFairPrice": true, "priceFeedAddresses": [ "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
       * ```
       *
       * _**Example**_: Fetch the fair price Raydium LP token price of the SOL/USDC pool
       *
       * ```json
       * { "lpTokenPriceTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "useFairPrice": true,"priceFeedAddresses": ["GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR","BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
       * ```
       * @implements ILpTokenPriceTask
       * @constructor
       * @param {OracleJob.ILpTokenPriceTask=} [properties] Properties to set
       */
      function LpTokenPriceTask(properties) {
        this.priceFeedAddresses = [];
        this.priceFeedJobs = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js
       * @member {string|null|undefined} mercurialPoolAddress
       * @memberof OracleJob.LpTokenPriceTask
       * @instance
       */
      LpTokenPriceTask.prototype.mercurialPoolAddress = null;

      /**
       * Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist
       * @member {string|null|undefined} saberPoolAddress
       * @memberof OracleJob.LpTokenPriceTask
       * @instance
       */
      LpTokenPriceTask.prototype.saberPoolAddress = null;

      /**
       * Orca pool address. A full list can be found here: https://www.orca.so/pools
       * @member {string|null|undefined} orcaPoolAddress
       * @memberof OracleJob.LpTokenPriceTask
       * @instance
       */
      LpTokenPriceTask.prototype.orcaPoolAddress = null;

      /**
       * The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json
       * @member {string|null|undefined} raydiumPoolAddress
       * @memberof OracleJob.LpTokenPriceTask
       * @instance
       */
      LpTokenPriceTask.prototype.raydiumPoolAddress = null;

      /**
       * A list of Switchboard aggregator accounts used to calculate the fair LP price. This ensures the price is based on the previous round to mitigate flash loan price manipulation.
       * @member {Array.<string>} priceFeedAddresses
       * @memberof OracleJob.LpTokenPriceTask
       * @instance
       */
      LpTokenPriceTask.prototype.priceFeedAddresses = $util.emptyArray;

      /**
       * A list of OracleJobs to execute in order to yield the price feed jobs to use for the fair price formula.
       * @member {Array.<IOracleJob>} priceFeedJobs
       * @memberof OracleJob.LpTokenPriceTask
       * @instance
       */
      LpTokenPriceTask.prototype.priceFeedJobs = $util.emptyArray;

      /**
       * If enabled and price_feed_addresses provided, the oracle will calculate the fair LP price based on the liquidity pool reserves. See our blog post for more information: https://switchboardxyz.medium.com/fair-lp-token-oracles-94a457c50239
       * @member {boolean} useFairPrice
       * @memberof OracleJob.LpTokenPriceTask
       * @instance
       */
      LpTokenPriceTask.prototype.useFairPrice = false;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * LpTokenPriceTask PoolAddress.
       * @member {"mercurialPoolAddress"|"saberPoolAddress"|"orcaPoolAddress"|"raydiumPoolAddress"|undefined} PoolAddress
       * @memberof OracleJob.LpTokenPriceTask
       * @instance
       */
      Object.defineProperty(LpTokenPriceTask.prototype, 'PoolAddress', {
        get: $util.oneOfGetter(
          ($oneOfFields = [
            'mercurialPoolAddress',
            'saberPoolAddress',
            'orcaPoolAddress',
            'raydiumPoolAddress',
          ])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new LpTokenPriceTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.LpTokenPriceTask
       * @static
       * @param {OracleJob.ILpTokenPriceTask=} [properties] Properties to set
       * @returns {OracleJob.LpTokenPriceTask} LpTokenPriceTask instance
       */
      LpTokenPriceTask.create = function create(properties) {
        return new LpTokenPriceTask(properties);
      };

      /**
       * Encodes the specified LpTokenPriceTask message. Does not implicitly {@apilink OracleJob.LpTokenPriceTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.LpTokenPriceTask
       * @static
       * @param {OracleJob.ILpTokenPriceTask} message LpTokenPriceTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LpTokenPriceTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.mercurialPoolAddress != null &&
          Object.hasOwnProperty.call(message, 'mercurialPoolAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.mercurialPoolAddress);
        if (
          message.saberPoolAddress != null &&
          Object.hasOwnProperty.call(message, 'saberPoolAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.saberPoolAddress);
        if (
          message.orcaPoolAddress != null &&
          Object.hasOwnProperty.call(message, 'orcaPoolAddress')
        )
          writer
            .uint32(/* id 3, wireType 2 =*/ 26)
            .string(message.orcaPoolAddress);
        if (
          message.raydiumPoolAddress != null &&
          Object.hasOwnProperty.call(message, 'raydiumPoolAddress')
        )
          writer
            .uint32(/* id 4, wireType 2 =*/ 34)
            .string(message.raydiumPoolAddress);
        if (
          message.priceFeedAddresses != null &&
          message.priceFeedAddresses.length
        )
          for (var i = 0; i < message.priceFeedAddresses.length; ++i)
            writer
              .uint32(/* id 5, wireType 2 =*/ 42)
              .string(message.priceFeedAddresses[i]);
        if (message.priceFeedJobs != null && message.priceFeedJobs.length)
          for (var i = 0; i < message.priceFeedJobs.length; ++i)
            $root.OracleJob.encode(
              message.priceFeedJobs[i],
              writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
            ).ldelim();
        if (
          message.useFairPrice != null &&
          Object.hasOwnProperty.call(message, 'useFairPrice')
        )
          writer.uint32(/* id 7, wireType 0 =*/ 56).bool(message.useFairPrice);
        return writer;
      };

      /**
       * Encodes the specified LpTokenPriceTask message, length delimited. Does not implicitly {@apilink OracleJob.LpTokenPriceTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.LpTokenPriceTask
       * @static
       * @param {OracleJob.ILpTokenPriceTask} message LpTokenPriceTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LpTokenPriceTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a LpTokenPriceTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.LpTokenPriceTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.LpTokenPriceTask} LpTokenPriceTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LpTokenPriceTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.LpTokenPriceTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.mercurialPoolAddress = reader.string();
              break;
            }
            case 2: {
              message.saberPoolAddress = reader.string();
              break;
            }
            case 3: {
              message.orcaPoolAddress = reader.string();
              break;
            }
            case 4: {
              message.raydiumPoolAddress = reader.string();
              break;
            }
            case 5: {
              if (
                !(
                  message.priceFeedAddresses &&
                  message.priceFeedAddresses.length
                )
              )
                message.priceFeedAddresses = [];
              message.priceFeedAddresses.push(reader.string());
              break;
            }
            case 6: {
              if (!(message.priceFeedJobs && message.priceFeedJobs.length))
                message.priceFeedJobs = [];
              message.priceFeedJobs.push(
                $root.OracleJob.decode(reader, reader.uint32())
              );
              break;
            }
            case 7: {
              message.useFairPrice = reader.bool();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a LpTokenPriceTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.LpTokenPriceTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.LpTokenPriceTask} LpTokenPriceTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LpTokenPriceTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a LpTokenPriceTask message.
       * @function verify
       * @memberof OracleJob.LpTokenPriceTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      LpTokenPriceTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (
          message.mercurialPoolAddress != null &&
          message.hasOwnProperty('mercurialPoolAddress')
        ) {
          properties.PoolAddress = 1;
          if (!$util.isString(message.mercurialPoolAddress))
            return 'mercurialPoolAddress: string expected';
        }
        if (
          message.saberPoolAddress != null &&
          message.hasOwnProperty('saberPoolAddress')
        ) {
          if (properties.PoolAddress === 1)
            return 'PoolAddress: multiple values';
          properties.PoolAddress = 1;
          if (!$util.isString(message.saberPoolAddress))
            return 'saberPoolAddress: string expected';
        }
        if (
          message.orcaPoolAddress != null &&
          message.hasOwnProperty('orcaPoolAddress')
        ) {
          if (properties.PoolAddress === 1)
            return 'PoolAddress: multiple values';
          properties.PoolAddress = 1;
          if (!$util.isString(message.orcaPoolAddress))
            return 'orcaPoolAddress: string expected';
        }
        if (
          message.raydiumPoolAddress != null &&
          message.hasOwnProperty('raydiumPoolAddress')
        ) {
          if (properties.PoolAddress === 1)
            return 'PoolAddress: multiple values';
          properties.PoolAddress = 1;
          if (!$util.isString(message.raydiumPoolAddress))
            return 'raydiumPoolAddress: string expected';
        }
        if (
          message.priceFeedAddresses != null &&
          message.hasOwnProperty('priceFeedAddresses')
        ) {
          if (!Array.isArray(message.priceFeedAddresses))
            return 'priceFeedAddresses: array expected';
          for (var i = 0; i < message.priceFeedAddresses.length; ++i)
            if (!$util.isString(message.priceFeedAddresses[i]))
              return 'priceFeedAddresses: string[] expected';
        }
        if (
          message.priceFeedJobs != null &&
          message.hasOwnProperty('priceFeedJobs')
        ) {
          if (!Array.isArray(message.priceFeedJobs))
            return 'priceFeedJobs: array expected';
          for (var i = 0; i < message.priceFeedJobs.length; ++i) {
            var error = $root.OracleJob.verify(message.priceFeedJobs[i]);
            if (error) return 'priceFeedJobs.' + error;
          }
        }
        if (
          message.useFairPrice != null &&
          message.hasOwnProperty('useFairPrice')
        )
          if (typeof message.useFairPrice !== 'boolean')
            return 'useFairPrice: boolean expected';
        return null;
      };

      /**
       * Creates a LpTokenPriceTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.LpTokenPriceTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.LpTokenPriceTask} LpTokenPriceTask
       */
      LpTokenPriceTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.LpTokenPriceTask) return object;
        var message = new $root.OracleJob.LpTokenPriceTask();
        if (object.mercurialPoolAddress != null)
          message.mercurialPoolAddress = String(object.mercurialPoolAddress);
        if (object.saberPoolAddress != null)
          message.saberPoolAddress = String(object.saberPoolAddress);
        if (object.orcaPoolAddress != null)
          message.orcaPoolAddress = String(object.orcaPoolAddress);
        if (object.raydiumPoolAddress != null)
          message.raydiumPoolAddress = String(object.raydiumPoolAddress);
        if (object.priceFeedAddresses) {
          if (!Array.isArray(object.priceFeedAddresses))
            throw TypeError(
              '.OracleJob.LpTokenPriceTask.priceFeedAddresses: array expected'
            );
          message.priceFeedAddresses = [];
          for (var i = 0; i < object.priceFeedAddresses.length; ++i)
            message.priceFeedAddresses[i] = String(
              object.priceFeedAddresses[i]
            );
        }
        if (object.priceFeedJobs) {
          if (!Array.isArray(object.priceFeedJobs))
            throw TypeError(
              '.OracleJob.LpTokenPriceTask.priceFeedJobs: array expected'
            );
          message.priceFeedJobs = [];
          for (var i = 0; i < object.priceFeedJobs.length; ++i) {
            if (typeof object.priceFeedJobs[i] !== 'object')
              throw TypeError(
                '.OracleJob.LpTokenPriceTask.priceFeedJobs: object expected'
              );
            message.priceFeedJobs[i] = $root.OracleJob.fromObject(
              object.priceFeedJobs[i]
            );
          }
        }
        if (object.useFairPrice != null)
          message.useFairPrice = Boolean(object.useFairPrice);
        return message;
      };

      /**
       * Creates a plain object from a LpTokenPriceTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.LpTokenPriceTask
       * @static
       * @param {OracleJob.LpTokenPriceTask} message LpTokenPriceTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      LpTokenPriceTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) {
          object.priceFeedAddresses = [];
          object.priceFeedJobs = [];
        }
        if (options.defaults) object.useFairPrice = false;
        if (
          message.mercurialPoolAddress != null &&
          message.hasOwnProperty('mercurialPoolAddress')
        ) {
          object.mercurialPoolAddress = message.mercurialPoolAddress;
          if (options.oneofs) object.PoolAddress = 'mercurialPoolAddress';
        }
        if (
          message.saberPoolAddress != null &&
          message.hasOwnProperty('saberPoolAddress')
        ) {
          object.saberPoolAddress = message.saberPoolAddress;
          if (options.oneofs) object.PoolAddress = 'saberPoolAddress';
        }
        if (
          message.orcaPoolAddress != null &&
          message.hasOwnProperty('orcaPoolAddress')
        ) {
          object.orcaPoolAddress = message.orcaPoolAddress;
          if (options.oneofs) object.PoolAddress = 'orcaPoolAddress';
        }
        if (
          message.raydiumPoolAddress != null &&
          message.hasOwnProperty('raydiumPoolAddress')
        ) {
          object.raydiumPoolAddress = message.raydiumPoolAddress;
          if (options.oneofs) object.PoolAddress = 'raydiumPoolAddress';
        }
        if (message.priceFeedAddresses && message.priceFeedAddresses.length) {
          object.priceFeedAddresses = [];
          for (var j = 0; j < message.priceFeedAddresses.length; ++j)
            object.priceFeedAddresses[j] = message.priceFeedAddresses[j];
        }
        if (message.priceFeedJobs && message.priceFeedJobs.length) {
          object.priceFeedJobs = [];
          for (var j = 0; j < message.priceFeedJobs.length; ++j)
            object.priceFeedJobs[j] = $root.OracleJob.toObject(
              message.priceFeedJobs[j],
              options
            );
        }
        if (
          message.useFairPrice != null &&
          message.hasOwnProperty('useFairPrice')
        )
          object.useFairPrice = message.useFairPrice;
        return object;
      };

      /**
       * Converts this LpTokenPriceTask to JSON.
       * @function toJSON
       * @memberof OracleJob.LpTokenPriceTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      LpTokenPriceTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for LpTokenPriceTask
       * @function getTypeUrl
       * @memberof OracleJob.LpTokenPriceTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      LpTokenPriceTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.LpTokenPriceTask';
      };

      return LpTokenPriceTask;
    })();

    OracleJob.LpExchangeRateTask = (function () {
      /**
       * Properties of a LpExchangeRateTask.
       * @memberof OracleJob
       * @interface ILpExchangeRateTask
       * @property {string|null} [inTokenAddress] Used alongside mercurial_pool_address to specify the input token for a swap.
       * @property {string|null} [outTokenAddress] Used alongside mercurial_pool_address to specify the output token for a swap.
       * @property {string|null} [mercurialPoolAddress] Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js
       * @property {string|null} [saberPoolAddress] Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist
       * @property {string|null} [orcaPoolTokenMintAddress] **@deprecated** Use orcaPoolAddress
       * @property {string|null} [raydiumPoolAddress] The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json
       * @property {string|null} [orcaPoolAddress] Pool address for an Orca LP pool or whirlpool.
       * A full list of Orca LP pools can be found here: https://www.orca.so/pools
       * @property {string|null} [portReserveAddress] The Port reserve pubkey. A full list can be found here: https://api-v1.port.finance/reserves
       */

      /**
       * Constructs a new LpExchangeRateTask.
       * @memberof OracleJob
       * @classdesc Fetch the current swap price for a given liquidity pool
       *
       * _**Input**_: None
       *
       * _**Returns**_: The swap price for a given AMM pool.
       *
       * _**Example**_: Fetch the exchange rate from the Orca SOL/USDC pool
       *
       * ```json
       * { "lpExchangeRateTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
       * ```
       *
       * _**Example**_: Fetch the exchange rate from the Raydium SOL/USDC pool
       *
       * ```json
       * { "lpExchangeRateTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2" } }
       * ```
       * @implements ILpExchangeRateTask
       * @constructor
       * @param {OracleJob.ILpExchangeRateTask=} [properties] Properties to set
       */
      function LpExchangeRateTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Used alongside mercurial_pool_address to specify the input token for a swap.
       * @member {string} inTokenAddress
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       */
      LpExchangeRateTask.prototype.inTokenAddress = '';

      /**
       * Used alongside mercurial_pool_address to specify the output token for a swap.
       * @member {string} outTokenAddress
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       */
      LpExchangeRateTask.prototype.outTokenAddress = '';

      /**
       * Mercurial finance pool address. A full list can be found here: https://github.com/mercurial-finance/stable-swap-n-pool-js
       * @member {string|null|undefined} mercurialPoolAddress
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       */
      LpExchangeRateTask.prototype.mercurialPoolAddress = null;

      /**
       * Saber pool address. A full list can be found here: https://github.com/saber-hq/saber-registry-dist
       * @member {string|null|undefined} saberPoolAddress
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       */
      LpExchangeRateTask.prototype.saberPoolAddress = null;

      /**
       * **@deprecated** Use orcaPoolAddress
       * @member {string|null|undefined} orcaPoolTokenMintAddress
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       */
      LpExchangeRateTask.prototype.orcaPoolTokenMintAddress = null;

      /**
       * The Raydium liquidity pool ammId. A full list can be found here: https://sdk.raydium.io/liquidity/mainnet.json
       * @member {string|null|undefined} raydiumPoolAddress
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       */
      LpExchangeRateTask.prototype.raydiumPoolAddress = null;

      /**
       * Pool address for an Orca LP pool or whirlpool.
       * A full list of Orca LP pools can be found here: https://www.orca.so/pools
       * @member {string|null|undefined} orcaPoolAddress
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       */
      LpExchangeRateTask.prototype.orcaPoolAddress = null;

      /**
       * The Port reserve pubkey. A full list can be found here: https://api-v1.port.finance/reserves
       * @member {string|null|undefined} portReserveAddress
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       */
      LpExchangeRateTask.prototype.portReserveAddress = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * LpExchangeRateTask PoolAddress.
       * @member {"mercurialPoolAddress"|"saberPoolAddress"|"orcaPoolTokenMintAddress"|"raydiumPoolAddress"|"orcaPoolAddress"|"portReserveAddress"|undefined} PoolAddress
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       */
      Object.defineProperty(LpExchangeRateTask.prototype, 'PoolAddress', {
        get: $util.oneOfGetter(
          ($oneOfFields = [
            'mercurialPoolAddress',
            'saberPoolAddress',
            'orcaPoolTokenMintAddress',
            'raydiumPoolAddress',
            'orcaPoolAddress',
            'portReserveAddress',
          ])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new LpExchangeRateTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.LpExchangeRateTask
       * @static
       * @param {OracleJob.ILpExchangeRateTask=} [properties] Properties to set
       * @returns {OracleJob.LpExchangeRateTask} LpExchangeRateTask instance
       */
      LpExchangeRateTask.create = function create(properties) {
        return new LpExchangeRateTask(properties);
      };

      /**
       * Encodes the specified LpExchangeRateTask message. Does not implicitly {@apilink OracleJob.LpExchangeRateTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.LpExchangeRateTask
       * @static
       * @param {OracleJob.ILpExchangeRateTask} message LpExchangeRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LpExchangeRateTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.inTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'inTokenAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.inTokenAddress);
        if (
          message.outTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'outTokenAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.outTokenAddress);
        if (
          message.mercurialPoolAddress != null &&
          Object.hasOwnProperty.call(message, 'mercurialPoolAddress')
        )
          writer
            .uint32(/* id 3, wireType 2 =*/ 26)
            .string(message.mercurialPoolAddress);
        if (
          message.saberPoolAddress != null &&
          Object.hasOwnProperty.call(message, 'saberPoolAddress')
        )
          writer
            .uint32(/* id 4, wireType 2 =*/ 34)
            .string(message.saberPoolAddress);
        if (
          message.orcaPoolTokenMintAddress != null &&
          Object.hasOwnProperty.call(message, 'orcaPoolTokenMintAddress')
        )
          writer
            .uint32(/* id 5, wireType 2 =*/ 42)
            .string(message.orcaPoolTokenMintAddress);
        if (
          message.raydiumPoolAddress != null &&
          Object.hasOwnProperty.call(message, 'raydiumPoolAddress')
        )
          writer
            .uint32(/* id 6, wireType 2 =*/ 50)
            .string(message.raydiumPoolAddress);
        if (
          message.orcaPoolAddress != null &&
          Object.hasOwnProperty.call(message, 'orcaPoolAddress')
        )
          writer
            .uint32(/* id 7, wireType 2 =*/ 58)
            .string(message.orcaPoolAddress);
        if (
          message.portReserveAddress != null &&
          Object.hasOwnProperty.call(message, 'portReserveAddress')
        )
          writer
            .uint32(/* id 8, wireType 2 =*/ 66)
            .string(message.portReserveAddress);
        return writer;
      };

      /**
       * Encodes the specified LpExchangeRateTask message, length delimited. Does not implicitly {@apilink OracleJob.LpExchangeRateTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.LpExchangeRateTask
       * @static
       * @param {OracleJob.ILpExchangeRateTask} message LpExchangeRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LpExchangeRateTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a LpExchangeRateTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.LpExchangeRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.LpExchangeRateTask} LpExchangeRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LpExchangeRateTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.LpExchangeRateTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.inTokenAddress = reader.string();
              break;
            }
            case 2: {
              message.outTokenAddress = reader.string();
              break;
            }
            case 3: {
              message.mercurialPoolAddress = reader.string();
              break;
            }
            case 4: {
              message.saberPoolAddress = reader.string();
              break;
            }
            case 5: {
              message.orcaPoolTokenMintAddress = reader.string();
              break;
            }
            case 6: {
              message.raydiumPoolAddress = reader.string();
              break;
            }
            case 7: {
              message.orcaPoolAddress = reader.string();
              break;
            }
            case 8: {
              message.portReserveAddress = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a LpExchangeRateTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.LpExchangeRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.LpExchangeRateTask} LpExchangeRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LpExchangeRateTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a LpExchangeRateTask message.
       * @function verify
       * @memberof OracleJob.LpExchangeRateTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      LpExchangeRateTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          if (!$util.isString(message.inTokenAddress))
            return 'inTokenAddress: string expected';
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          if (!$util.isString(message.outTokenAddress))
            return 'outTokenAddress: string expected';
        if (
          message.mercurialPoolAddress != null &&
          message.hasOwnProperty('mercurialPoolAddress')
        ) {
          properties.PoolAddress = 1;
          if (!$util.isString(message.mercurialPoolAddress))
            return 'mercurialPoolAddress: string expected';
        }
        if (
          message.saberPoolAddress != null &&
          message.hasOwnProperty('saberPoolAddress')
        ) {
          if (properties.PoolAddress === 1)
            return 'PoolAddress: multiple values';
          properties.PoolAddress = 1;
          if (!$util.isString(message.saberPoolAddress))
            return 'saberPoolAddress: string expected';
        }
        if (
          message.orcaPoolTokenMintAddress != null &&
          message.hasOwnProperty('orcaPoolTokenMintAddress')
        ) {
          if (properties.PoolAddress === 1)
            return 'PoolAddress: multiple values';
          properties.PoolAddress = 1;
          if (!$util.isString(message.orcaPoolTokenMintAddress))
            return 'orcaPoolTokenMintAddress: string expected';
        }
        if (
          message.raydiumPoolAddress != null &&
          message.hasOwnProperty('raydiumPoolAddress')
        ) {
          if (properties.PoolAddress === 1)
            return 'PoolAddress: multiple values';
          properties.PoolAddress = 1;
          if (!$util.isString(message.raydiumPoolAddress))
            return 'raydiumPoolAddress: string expected';
        }
        if (
          message.orcaPoolAddress != null &&
          message.hasOwnProperty('orcaPoolAddress')
        ) {
          if (properties.PoolAddress === 1)
            return 'PoolAddress: multiple values';
          properties.PoolAddress = 1;
          if (!$util.isString(message.orcaPoolAddress))
            return 'orcaPoolAddress: string expected';
        }
        if (
          message.portReserveAddress != null &&
          message.hasOwnProperty('portReserveAddress')
        ) {
          if (properties.PoolAddress === 1)
            return 'PoolAddress: multiple values';
          properties.PoolAddress = 1;
          if (!$util.isString(message.portReserveAddress))
            return 'portReserveAddress: string expected';
        }
        return null;
      };

      /**
       * Creates a LpExchangeRateTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.LpExchangeRateTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.LpExchangeRateTask} LpExchangeRateTask
       */
      LpExchangeRateTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.LpExchangeRateTask) return object;
        var message = new $root.OracleJob.LpExchangeRateTask();
        if (object.inTokenAddress != null)
          message.inTokenAddress = String(object.inTokenAddress);
        if (object.outTokenAddress != null)
          message.outTokenAddress = String(object.outTokenAddress);
        if (object.mercurialPoolAddress != null)
          message.mercurialPoolAddress = String(object.mercurialPoolAddress);
        if (object.saberPoolAddress != null)
          message.saberPoolAddress = String(object.saberPoolAddress);
        if (object.orcaPoolTokenMintAddress != null)
          message.orcaPoolTokenMintAddress = String(
            object.orcaPoolTokenMintAddress
          );
        if (object.raydiumPoolAddress != null)
          message.raydiumPoolAddress = String(object.raydiumPoolAddress);
        if (object.orcaPoolAddress != null)
          message.orcaPoolAddress = String(object.orcaPoolAddress);
        if (object.portReserveAddress != null)
          message.portReserveAddress = String(object.portReserveAddress);
        return message;
      };

      /**
       * Creates a plain object from a LpExchangeRateTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.LpExchangeRateTask
       * @static
       * @param {OracleJob.LpExchangeRateTask} message LpExchangeRateTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      LpExchangeRateTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.inTokenAddress = '';
          object.outTokenAddress = '';
        }
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          object.inTokenAddress = message.inTokenAddress;
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          object.outTokenAddress = message.outTokenAddress;
        if (
          message.mercurialPoolAddress != null &&
          message.hasOwnProperty('mercurialPoolAddress')
        ) {
          object.mercurialPoolAddress = message.mercurialPoolAddress;
          if (options.oneofs) object.PoolAddress = 'mercurialPoolAddress';
        }
        if (
          message.saberPoolAddress != null &&
          message.hasOwnProperty('saberPoolAddress')
        ) {
          object.saberPoolAddress = message.saberPoolAddress;
          if (options.oneofs) object.PoolAddress = 'saberPoolAddress';
        }
        if (
          message.orcaPoolTokenMintAddress != null &&
          message.hasOwnProperty('orcaPoolTokenMintAddress')
        ) {
          object.orcaPoolTokenMintAddress = message.orcaPoolTokenMintAddress;
          if (options.oneofs) object.PoolAddress = 'orcaPoolTokenMintAddress';
        }
        if (
          message.raydiumPoolAddress != null &&
          message.hasOwnProperty('raydiumPoolAddress')
        ) {
          object.raydiumPoolAddress = message.raydiumPoolAddress;
          if (options.oneofs) object.PoolAddress = 'raydiumPoolAddress';
        }
        if (
          message.orcaPoolAddress != null &&
          message.hasOwnProperty('orcaPoolAddress')
        ) {
          object.orcaPoolAddress = message.orcaPoolAddress;
          if (options.oneofs) object.PoolAddress = 'orcaPoolAddress';
        }
        if (
          message.portReserveAddress != null &&
          message.hasOwnProperty('portReserveAddress')
        ) {
          object.portReserveAddress = message.portReserveAddress;
          if (options.oneofs) object.PoolAddress = 'portReserveAddress';
        }
        return object;
      };

      /**
       * Converts this LpExchangeRateTask to JSON.
       * @function toJSON
       * @memberof OracleJob.LpExchangeRateTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      LpExchangeRateTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for LpExchangeRateTask
       * @function getTypeUrl
       * @memberof OracleJob.LpExchangeRateTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      LpExchangeRateTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.LpExchangeRateTask';
      };

      return LpExchangeRateTask;
    })();

    OracleJob.RegexExtractTask = (function () {
      /**
       * Properties of a RegexExtractTask.
       * @memberof OracleJob
       * @interface IRegexExtractTask
       * @property {string|null} [pattern] Regex pattern to find.
       * @property {number|null} [groupNumber] Group number to extract.
       */

      /**
       * Constructs a new RegexExtractTask.
       * @memberof OracleJob
       * @classdesc Find a pattern within a string of a previous task and extract a group number.
       * @implements IRegexExtractTask
       * @constructor
       * @param {OracleJob.IRegexExtractTask=} [properties] Properties to set
       */
      function RegexExtractTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Regex pattern to find.
       * @member {string} pattern
       * @memberof OracleJob.RegexExtractTask
       * @instance
       */
      RegexExtractTask.prototype.pattern = '';

      /**
       * Group number to extract.
       * @member {number} groupNumber
       * @memberof OracleJob.RegexExtractTask
       * @instance
       */
      RegexExtractTask.prototype.groupNumber = 0;

      /**
       * Creates a new RegexExtractTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.RegexExtractTask
       * @static
       * @param {OracleJob.IRegexExtractTask=} [properties] Properties to set
       * @returns {OracleJob.RegexExtractTask} RegexExtractTask instance
       */
      RegexExtractTask.create = function create(properties) {
        return new RegexExtractTask(properties);
      };

      /**
       * Encodes the specified RegexExtractTask message. Does not implicitly {@apilink OracleJob.RegexExtractTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.RegexExtractTask
       * @static
       * @param {OracleJob.IRegexExtractTask} message RegexExtractTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RegexExtractTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.pattern != null &&
          Object.hasOwnProperty.call(message, 'pattern')
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.pattern);
        if (
          message.groupNumber != null &&
          Object.hasOwnProperty.call(message, 'groupNumber')
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.groupNumber);
        return writer;
      };

      /**
       * Encodes the specified RegexExtractTask message, length delimited. Does not implicitly {@apilink OracleJob.RegexExtractTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.RegexExtractTask
       * @static
       * @param {OracleJob.IRegexExtractTask} message RegexExtractTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RegexExtractTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RegexExtractTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.RegexExtractTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.RegexExtractTask} RegexExtractTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RegexExtractTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.RegexExtractTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.pattern = reader.string();
              break;
            }
            case 2: {
              message.groupNumber = reader.int32();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RegexExtractTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.RegexExtractTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.RegexExtractTask} RegexExtractTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RegexExtractTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RegexExtractTask message.
       * @function verify
       * @memberof OracleJob.RegexExtractTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RegexExtractTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.pattern != null && message.hasOwnProperty('pattern'))
          if (!$util.isString(message.pattern))
            return 'pattern: string expected';
        if (
          message.groupNumber != null &&
          message.hasOwnProperty('groupNumber')
        )
          if (!$util.isInteger(message.groupNumber))
            return 'groupNumber: integer expected';
        return null;
      };

      /**
       * Creates a RegexExtractTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.RegexExtractTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.RegexExtractTask} RegexExtractTask
       */
      RegexExtractTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.RegexExtractTask) return object;
        var message = new $root.OracleJob.RegexExtractTask();
        if (object.pattern != null) message.pattern = String(object.pattern);
        if (object.groupNumber != null)
          message.groupNumber = object.groupNumber | 0;
        return message;
      };

      /**
       * Creates a plain object from a RegexExtractTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.RegexExtractTask
       * @static
       * @param {OracleJob.RegexExtractTask} message RegexExtractTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RegexExtractTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.pattern = '';
          object.groupNumber = 0;
        }
        if (message.pattern != null && message.hasOwnProperty('pattern'))
          object.pattern = message.pattern;
        if (
          message.groupNumber != null &&
          message.hasOwnProperty('groupNumber')
        )
          object.groupNumber = message.groupNumber;
        return object;
      };

      /**
       * Converts this RegexExtractTask to JSON.
       * @function toJSON
       * @memberof OracleJob.RegexExtractTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RegexExtractTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RegexExtractTask
       * @function getTypeUrl
       * @memberof OracleJob.RegexExtractTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RegexExtractTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.RegexExtractTask';
      };

      return RegexExtractTask;
    })();

    OracleJob.XStepPriceTask = (function () {
      /**
       * Properties of a XStepPriceTask.
       * @memberof OracleJob
       * @interface IXStepPriceTask
       * @property {OracleJob.IMedianTask|null} [stepJob] median task containing the job definitions to fetch the STEP/USD price
       * @property {string|null} [stepAggregatorPubkey] existing aggregator pubkey for STEP/USD
       */

      /**
       * Constructs a new XStepPriceTask.
       * @memberof OracleJob
       * @classdesc Represents a XStepPriceTask.
       * @implements IXStepPriceTask
       * @constructor
       * @param {OracleJob.IXStepPriceTask=} [properties] Properties to set
       */
      function XStepPriceTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * median task containing the job definitions to fetch the STEP/USD price
       * @member {OracleJob.IMedianTask|null|undefined} stepJob
       * @memberof OracleJob.XStepPriceTask
       * @instance
       */
      XStepPriceTask.prototype.stepJob = null;

      /**
       * existing aggregator pubkey for STEP/USD
       * @member {string|null|undefined} stepAggregatorPubkey
       * @memberof OracleJob.XStepPriceTask
       * @instance
       */
      XStepPriceTask.prototype.stepAggregatorPubkey = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * XStepPriceTask StepSource.
       * @member {"stepJob"|"stepAggregatorPubkey"|undefined} StepSource
       * @memberof OracleJob.XStepPriceTask
       * @instance
       */
      Object.defineProperty(XStepPriceTask.prototype, 'StepSource', {
        get: $util.oneOfGetter(
          ($oneOfFields = ['stepJob', 'stepAggregatorPubkey'])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new XStepPriceTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.XStepPriceTask
       * @static
       * @param {OracleJob.IXStepPriceTask=} [properties] Properties to set
       * @returns {OracleJob.XStepPriceTask} XStepPriceTask instance
       */
      XStepPriceTask.create = function create(properties) {
        return new XStepPriceTask(properties);
      };

      /**
       * Encodes the specified XStepPriceTask message. Does not implicitly {@apilink OracleJob.XStepPriceTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.XStepPriceTask
       * @static
       * @param {OracleJob.IXStepPriceTask} message XStepPriceTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      XStepPriceTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.stepJob != null &&
          Object.hasOwnProperty.call(message, 'stepJob')
        )
          $root.OracleJob.MedianTask.encode(
            message.stepJob,
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
          ).ldelim();
        if (
          message.stepAggregatorPubkey != null &&
          Object.hasOwnProperty.call(message, 'stepAggregatorPubkey')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.stepAggregatorPubkey);
        return writer;
      };

      /**
       * Encodes the specified XStepPriceTask message, length delimited. Does not implicitly {@apilink OracleJob.XStepPriceTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.XStepPriceTask
       * @static
       * @param {OracleJob.IXStepPriceTask} message XStepPriceTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      XStepPriceTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a XStepPriceTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.XStepPriceTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.XStepPriceTask} XStepPriceTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      XStepPriceTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.XStepPriceTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.stepJob = $root.OracleJob.MedianTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 2: {
              message.stepAggregatorPubkey = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a XStepPriceTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.XStepPriceTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.XStepPriceTask} XStepPriceTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      XStepPriceTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a XStepPriceTask message.
       * @function verify
       * @memberof OracleJob.XStepPriceTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      XStepPriceTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (message.stepJob != null && message.hasOwnProperty('stepJob')) {
          properties.StepSource = 1;
          {
            var error = $root.OracleJob.MedianTask.verify(message.stepJob);
            if (error) return 'stepJob.' + error;
          }
        }
        if (
          message.stepAggregatorPubkey != null &&
          message.hasOwnProperty('stepAggregatorPubkey')
        ) {
          if (properties.StepSource === 1) return 'StepSource: multiple values';
          properties.StepSource = 1;
          if (!$util.isString(message.stepAggregatorPubkey))
            return 'stepAggregatorPubkey: string expected';
        }
        return null;
      };

      /**
       * Creates a XStepPriceTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.XStepPriceTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.XStepPriceTask} XStepPriceTask
       */
      XStepPriceTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.XStepPriceTask) return object;
        var message = new $root.OracleJob.XStepPriceTask();
        if (object.stepJob != null) {
          if (typeof object.stepJob !== 'object')
            throw TypeError(
              '.OracleJob.XStepPriceTask.stepJob: object expected'
            );
          message.stepJob = $root.OracleJob.MedianTask.fromObject(
            object.stepJob
          );
        }
        if (object.stepAggregatorPubkey != null)
          message.stepAggregatorPubkey = String(object.stepAggregatorPubkey);
        return message;
      };

      /**
       * Creates a plain object from a XStepPriceTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.XStepPriceTask
       * @static
       * @param {OracleJob.XStepPriceTask} message XStepPriceTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      XStepPriceTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.stepJob != null && message.hasOwnProperty('stepJob')) {
          object.stepJob = $root.OracleJob.MedianTask.toObject(
            message.stepJob,
            options
          );
          if (options.oneofs) object.StepSource = 'stepJob';
        }
        if (
          message.stepAggregatorPubkey != null &&
          message.hasOwnProperty('stepAggregatorPubkey')
        ) {
          object.stepAggregatorPubkey = message.stepAggregatorPubkey;
          if (options.oneofs) object.StepSource = 'stepAggregatorPubkey';
        }
        return object;
      };

      /**
       * Converts this XStepPriceTask to JSON.
       * @function toJSON
       * @memberof OracleJob.XStepPriceTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      XStepPriceTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for XStepPriceTask
       * @function getTypeUrl
       * @memberof OracleJob.XStepPriceTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      XStepPriceTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.XStepPriceTask';
      };

      return XStepPriceTask;
    })();

    OracleJob.TwapTask = (function () {
      /**
       * Properties of a TwapTask.
       * @memberof OracleJob
       * @interface ITwapTask
       * @property {string|null} [aggregatorPubkey] The target aggregator for the TWAP.
       * @property {number|null} [period] Period, in seconds, the twap should account for
       * @property {boolean|null} [weightByPropagationTime] Weight samples by their propagation time
       * @property {number|null} [minSamples] Minimum number of samples in the history to calculate a valid result
       * @property {number|null} [endingUnixTimestamp] Ending unix timestamp to collect values up to
       * @property {OracleJob.ICronParseTask|null} [endingUnixTimestampTask] Execute the task to get the ending unix timestamp
       */

      /**
       * Constructs a new TwapTask.
       * @memberof OracleJob
       * @classdesc Takes a twap over a set period for a certain aggregator. Aggregators have an optional history buffer account storing the last N accepted results. The TwapTask will iterate over an aggregators history buffer and calculate the time weighted average of the samples within a given time period.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The time weighted average of an aggregator over a given time period.
       *
       * _**Example**_: The 1hr Twap of the SOL/USD Aggregator, requiring at least 60 samples.
       *
       * ```json
       * { "twapTask": { "aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "period": 3600, "minSamples": 60, "weightByPropagationTime": true  } }
       * ```
       * @implements ITwapTask
       * @constructor
       * @param {OracleJob.ITwapTask=} [properties] Properties to set
       */
      function TwapTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The target aggregator for the TWAP.
       * @member {string} aggregatorPubkey
       * @memberof OracleJob.TwapTask
       * @instance
       */
      TwapTask.prototype.aggregatorPubkey = '';

      /**
       * Period, in seconds, the twap should account for
       * @member {number} period
       * @memberof OracleJob.TwapTask
       * @instance
       */
      TwapTask.prototype.period = 0;

      /**
       * Weight samples by their propagation time
       * @member {boolean} weightByPropagationTime
       * @memberof OracleJob.TwapTask
       * @instance
       */
      TwapTask.prototype.weightByPropagationTime = false;

      /**
       * Minimum number of samples in the history to calculate a valid result
       * @member {number} minSamples
       * @memberof OracleJob.TwapTask
       * @instance
       */
      TwapTask.prototype.minSamples = 0;

      /**
       * Ending unix timestamp to collect values up to
       * @member {number} endingUnixTimestamp
       * @memberof OracleJob.TwapTask
       * @instance
       */
      TwapTask.prototype.endingUnixTimestamp = 0;

      /**
       * Execute the task to get the ending unix timestamp
       * @member {OracleJob.ICronParseTask|null|undefined} endingUnixTimestampTask
       * @memberof OracleJob.TwapTask
       * @instance
       */
      TwapTask.prototype.endingUnixTimestampTask = null;

      /**
       * Creates a new TwapTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.TwapTask
       * @static
       * @param {OracleJob.ITwapTask=} [properties] Properties to set
       * @returns {OracleJob.TwapTask} TwapTask instance
       */
      TwapTask.create = function create(properties) {
        return new TwapTask(properties);
      };

      /**
       * Encodes the specified TwapTask message. Does not implicitly {@apilink OracleJob.TwapTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.TwapTask
       * @static
       * @param {OracleJob.ITwapTask} message TwapTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      TwapTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.aggregatorPubkey != null &&
          Object.hasOwnProperty.call(message, 'aggregatorPubkey')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.aggregatorPubkey);
        if (
          message.period != null &&
          Object.hasOwnProperty.call(message, 'period')
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.period);
        if (
          message.weightByPropagationTime != null &&
          Object.hasOwnProperty.call(message, 'weightByPropagationTime')
        )
          writer
            .uint32(/* id 3, wireType 0 =*/ 24)
            .bool(message.weightByPropagationTime);
        if (
          message.minSamples != null &&
          Object.hasOwnProperty.call(message, 'minSamples')
        )
          writer.uint32(/* id 4, wireType 0 =*/ 32).uint32(message.minSamples);
        if (
          message.endingUnixTimestamp != null &&
          Object.hasOwnProperty.call(message, 'endingUnixTimestamp')
        )
          writer
            .uint32(/* id 5, wireType 0 =*/ 40)
            .int32(message.endingUnixTimestamp);
        if (
          message.endingUnixTimestampTask != null &&
          Object.hasOwnProperty.call(message, 'endingUnixTimestampTask')
        )
          $root.OracleJob.CronParseTask.encode(
            message.endingUnixTimestampTask,
            writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
          ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified TwapTask message, length delimited. Does not implicitly {@apilink OracleJob.TwapTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.TwapTask
       * @static
       * @param {OracleJob.ITwapTask} message TwapTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      TwapTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a TwapTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.TwapTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.TwapTask} TwapTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      TwapTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.TwapTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.aggregatorPubkey = reader.string();
              break;
            }
            case 2: {
              message.period = reader.int32();
              break;
            }
            case 3: {
              message.weightByPropagationTime = reader.bool();
              break;
            }
            case 4: {
              message.minSamples = reader.uint32();
              break;
            }
            case 5: {
              message.endingUnixTimestamp = reader.int32();
              break;
            }
            case 6: {
              message.endingUnixTimestampTask =
                $root.OracleJob.CronParseTask.decode(reader, reader.uint32());
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a TwapTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.TwapTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.TwapTask} TwapTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      TwapTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a TwapTask message.
       * @function verify
       * @memberof OracleJob.TwapTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      TwapTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        )
          if (!$util.isString(message.aggregatorPubkey))
            return 'aggregatorPubkey: string expected';
        if (message.period != null && message.hasOwnProperty('period'))
          if (!$util.isInteger(message.period))
            return 'period: integer expected';
        if (
          message.weightByPropagationTime != null &&
          message.hasOwnProperty('weightByPropagationTime')
        )
          if (typeof message.weightByPropagationTime !== 'boolean')
            return 'weightByPropagationTime: boolean expected';
        if (message.minSamples != null && message.hasOwnProperty('minSamples'))
          if (!$util.isInteger(message.minSamples))
            return 'minSamples: integer expected';
        if (
          message.endingUnixTimestamp != null &&
          message.hasOwnProperty('endingUnixTimestamp')
        )
          if (!$util.isInteger(message.endingUnixTimestamp))
            return 'endingUnixTimestamp: integer expected';
        if (
          message.endingUnixTimestampTask != null &&
          message.hasOwnProperty('endingUnixTimestampTask')
        ) {
          var error = $root.OracleJob.CronParseTask.verify(
            message.endingUnixTimestampTask
          );
          if (error) return 'endingUnixTimestampTask.' + error;
        }
        return null;
      };

      /**
       * Creates a TwapTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.TwapTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.TwapTask} TwapTask
       */
      TwapTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.TwapTask) return object;
        var message = new $root.OracleJob.TwapTask();
        if (object.aggregatorPubkey != null)
          message.aggregatorPubkey = String(object.aggregatorPubkey);
        if (object.period != null) message.period = object.period | 0;
        if (object.weightByPropagationTime != null)
          message.weightByPropagationTime = Boolean(
            object.weightByPropagationTime
          );
        if (object.minSamples != null)
          message.minSamples = object.minSamples >>> 0;
        if (object.endingUnixTimestamp != null)
          message.endingUnixTimestamp = object.endingUnixTimestamp | 0;
        if (object.endingUnixTimestampTask != null) {
          if (typeof object.endingUnixTimestampTask !== 'object')
            throw TypeError(
              '.OracleJob.TwapTask.endingUnixTimestampTask: object expected'
            );
          message.endingUnixTimestampTask =
            $root.OracleJob.CronParseTask.fromObject(
              object.endingUnixTimestampTask
            );
        }
        return message;
      };

      /**
       * Creates a plain object from a TwapTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.TwapTask
       * @static
       * @param {OracleJob.TwapTask} message TwapTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      TwapTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.aggregatorPubkey = '';
          object.period = 0;
          object.weightByPropagationTime = false;
          object.minSamples = 0;
          object.endingUnixTimestamp = 0;
          object.endingUnixTimestampTask = null;
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        )
          object.aggregatorPubkey = message.aggregatorPubkey;
        if (message.period != null && message.hasOwnProperty('period'))
          object.period = message.period;
        if (
          message.weightByPropagationTime != null &&
          message.hasOwnProperty('weightByPropagationTime')
        )
          object.weightByPropagationTime = message.weightByPropagationTime;
        if (message.minSamples != null && message.hasOwnProperty('minSamples'))
          object.minSamples = message.minSamples;
        if (
          message.endingUnixTimestamp != null &&
          message.hasOwnProperty('endingUnixTimestamp')
        )
          object.endingUnixTimestamp = message.endingUnixTimestamp;
        if (
          message.endingUnixTimestampTask != null &&
          message.hasOwnProperty('endingUnixTimestampTask')
        )
          object.endingUnixTimestampTask =
            $root.OracleJob.CronParseTask.toObject(
              message.endingUnixTimestampTask,
              options
            );
        return object;
      };

      /**
       * Converts this TwapTask to JSON.
       * @function toJSON
       * @memberof OracleJob.TwapTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      TwapTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for TwapTask
       * @function getTypeUrl
       * @memberof OracleJob.TwapTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      TwapTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.TwapTask';
      };

      return TwapTask;
    })();

    OracleJob.SerumSwapTask = (function () {
      /**
       * Properties of a SerumSwapTask.
       * @memberof OracleJob
       * @interface ISerumSwapTask
       * @property {string|null} [serumPoolAddress] The serum pool to fetch swap price for
       */

      /**
       * Constructs a new SerumSwapTask.
       * @memberof OracleJob
       * @classdesc Fetch the latest swap price on Serum's orderbook
       * @implements ISerumSwapTask
       * @constructor
       * @param {OracleJob.ISerumSwapTask=} [properties] Properties to set
       */
      function SerumSwapTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The serum pool to fetch swap price for
       * @member {string} serumPoolAddress
       * @memberof OracleJob.SerumSwapTask
       * @instance
       */
      SerumSwapTask.prototype.serumPoolAddress = '';

      /**
       * Creates a new SerumSwapTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.SerumSwapTask
       * @static
       * @param {OracleJob.ISerumSwapTask=} [properties] Properties to set
       * @returns {OracleJob.SerumSwapTask} SerumSwapTask instance
       */
      SerumSwapTask.create = function create(properties) {
        return new SerumSwapTask(properties);
      };

      /**
       * Encodes the specified SerumSwapTask message. Does not implicitly {@apilink OracleJob.SerumSwapTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.SerumSwapTask
       * @static
       * @param {OracleJob.ISerumSwapTask} message SerumSwapTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SerumSwapTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.serumPoolAddress != null &&
          Object.hasOwnProperty.call(message, 'serumPoolAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.serumPoolAddress);
        return writer;
      };

      /**
       * Encodes the specified SerumSwapTask message, length delimited. Does not implicitly {@apilink OracleJob.SerumSwapTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.SerumSwapTask
       * @static
       * @param {OracleJob.ISerumSwapTask} message SerumSwapTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SerumSwapTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SerumSwapTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.SerumSwapTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.SerumSwapTask} SerumSwapTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SerumSwapTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.SerumSwapTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.serumPoolAddress = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SerumSwapTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.SerumSwapTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.SerumSwapTask} SerumSwapTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SerumSwapTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SerumSwapTask message.
       * @function verify
       * @memberof OracleJob.SerumSwapTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SerumSwapTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.serumPoolAddress != null &&
          message.hasOwnProperty('serumPoolAddress')
        )
          if (!$util.isString(message.serumPoolAddress))
            return 'serumPoolAddress: string expected';
        return null;
      };

      /**
       * Creates a SerumSwapTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.SerumSwapTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.SerumSwapTask} SerumSwapTask
       */
      SerumSwapTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.SerumSwapTask) return object;
        var message = new $root.OracleJob.SerumSwapTask();
        if (object.serumPoolAddress != null)
          message.serumPoolAddress = String(object.serumPoolAddress);
        return message;
      };

      /**
       * Creates a plain object from a SerumSwapTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.SerumSwapTask
       * @static
       * @param {OracleJob.SerumSwapTask} message SerumSwapTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SerumSwapTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.serumPoolAddress = '';
        if (
          message.serumPoolAddress != null &&
          message.hasOwnProperty('serumPoolAddress')
        )
          object.serumPoolAddress = message.serumPoolAddress;
        return object;
      };

      /**
       * Converts this SerumSwapTask to JSON.
       * @function toJSON
       * @memberof OracleJob.SerumSwapTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SerumSwapTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for SerumSwapTask
       * @function getTypeUrl
       * @memberof OracleJob.SerumSwapTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      SerumSwapTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.SerumSwapTask';
      };

      return SerumSwapTask;
    })();

    OracleJob.PowTask = (function () {
      /**
       * Properties of a PowTask.
       * @memberof OracleJob
       * @interface IPowTask
       * @property {number|null} [scalar] Take the working value to the exponent of value.
       * @property {string|null} [aggregatorPubkey] Take the working value to the exponent of the aggregators value.
       * @property {string|null} [big] A stringified big.js. `Accepts variable expansion syntax.`
       */

      /**
       * Constructs a new PowTask.
       * @memberof OracleJob
       * @classdesc Round the current running result to an exponential power.
       *
       * _**Input**_: The current running numerical result.
       *
       * _**Returns**_: The input raised to an exponential power.
       *
       * _**Example**_: Raise 2 to the power of 3, 2^3
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":2}},{"powTask":{"scalar":3}}]}
       * ```
       * @implements IPowTask
       * @constructor
       * @param {OracleJob.IPowTask=} [properties] Properties to set
       */
      function PowTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Take the working value to the exponent of value.
       * @member {number|null|undefined} scalar
       * @memberof OracleJob.PowTask
       * @instance
       */
      PowTask.prototype.scalar = null;

      /**
       * Take the working value to the exponent of the aggregators value.
       * @member {string|null|undefined} aggregatorPubkey
       * @memberof OracleJob.PowTask
       * @instance
       */
      PowTask.prototype.aggregatorPubkey = null;

      /**
       * A stringified big.js. `Accepts variable expansion syntax.`
       * @member {string|null|undefined} big
       * @memberof OracleJob.PowTask
       * @instance
       */
      PowTask.prototype.big = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * PowTask Exponent.
       * @member {"scalar"|"aggregatorPubkey"|"big"|undefined} Exponent
       * @memberof OracleJob.PowTask
       * @instance
       */
      Object.defineProperty(PowTask.prototype, 'Exponent', {
        get: $util.oneOfGetter(
          ($oneOfFields = ['scalar', 'aggregatorPubkey', 'big'])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new PowTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.PowTask
       * @static
       * @param {OracleJob.IPowTask=} [properties] Properties to set
       * @returns {OracleJob.PowTask} PowTask instance
       */
      PowTask.create = function create(properties) {
        return new PowTask(properties);
      };

      /**
       * Encodes the specified PowTask message. Does not implicitly {@apilink OracleJob.PowTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.PowTask
       * @static
       * @param {OracleJob.IPowTask} message PowTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PowTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.scalar != null &&
          Object.hasOwnProperty.call(message, 'scalar')
        )
          writer.uint32(/* id 1, wireType 1 =*/ 9).double(message.scalar);
        if (
          message.aggregatorPubkey != null &&
          Object.hasOwnProperty.call(message, 'aggregatorPubkey')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.aggregatorPubkey);
        if (message.big != null && Object.hasOwnProperty.call(message, 'big'))
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.big);
        return writer;
      };

      /**
       * Encodes the specified PowTask message, length delimited. Does not implicitly {@apilink OracleJob.PowTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.PowTask
       * @static
       * @param {OracleJob.IPowTask} message PowTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PowTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PowTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.PowTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.PowTask} PowTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PowTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.PowTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.scalar = reader.double();
              break;
            }
            case 2: {
              message.aggregatorPubkey = reader.string();
              break;
            }
            case 3: {
              message.big = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a PowTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.PowTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.PowTask} PowTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PowTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PowTask message.
       * @function verify
       * @memberof OracleJob.PowTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PowTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          properties.Exponent = 1;
          if (typeof message.scalar !== 'number')
            return 'scalar: number expected';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          if (properties.Exponent === 1) return 'Exponent: multiple values';
          properties.Exponent = 1;
          if (!$util.isString(message.aggregatorPubkey))
            return 'aggregatorPubkey: string expected';
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          if (properties.Exponent === 1) return 'Exponent: multiple values';
          properties.Exponent = 1;
          if (!$util.isString(message.big)) return 'big: string expected';
        }
        return null;
      };

      /**
       * Creates a PowTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.PowTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.PowTask} PowTask
       */
      PowTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.PowTask) return object;
        var message = new $root.OracleJob.PowTask();
        if (object.scalar != null) message.scalar = Number(object.scalar);
        if (object.aggregatorPubkey != null)
          message.aggregatorPubkey = String(object.aggregatorPubkey);
        if (object.big != null) message.big = String(object.big);
        return message;
      };

      /**
       * Creates a plain object from a PowTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.PowTask
       * @static
       * @param {OracleJob.PowTask} message PowTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PowTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.scalar != null && message.hasOwnProperty('scalar')) {
          object.scalar =
            options.json && !isFinite(message.scalar)
              ? String(message.scalar)
              : message.scalar;
          if (options.oneofs) object.Exponent = 'scalar';
        }
        if (
          message.aggregatorPubkey != null &&
          message.hasOwnProperty('aggregatorPubkey')
        ) {
          object.aggregatorPubkey = message.aggregatorPubkey;
          if (options.oneofs) object.Exponent = 'aggregatorPubkey';
        }
        if (message.big != null && message.hasOwnProperty('big')) {
          object.big = message.big;
          if (options.oneofs) object.Exponent = 'big';
        }
        return object;
      };

      /**
       * Converts this PowTask to JSON.
       * @function toJSON
       * @memberof OracleJob.PowTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PowTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for PowTask
       * @function getTypeUrl
       * @memberof OracleJob.PowTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      PowTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.PowTask';
      };

      return PowTask;
    })();

    OracleJob.LendingRateTask = (function () {
      /**
       * Properties of a LendingRateTask.
       * @memberof OracleJob
       * @interface ILendingRateTask
       * @property {string|null} [protocol] 01, apricot, francium, jet, larix, mango, port, solend, tulip
       * @property {string|null} [assetMint] A token mint address supported by the chosen protocol
       * @property {OracleJob.LendingRateTask.Field|null} [field] LendingRateTask field
       */

      /**
       * Constructs a new LendingRateTask.
       * @memberof OracleJob
       * @classdesc Fetch the lending rates for various Solana protocols
       * @implements ILendingRateTask
       * @constructor
       * @param {OracleJob.ILendingRateTask=} [properties] Properties to set
       */
      function LendingRateTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * 01, apricot, francium, jet, larix, mango, port, solend, tulip
       * @member {string} protocol
       * @memberof OracleJob.LendingRateTask
       * @instance
       */
      LendingRateTask.prototype.protocol = '';

      /**
       * A token mint address supported by the chosen protocol
       * @member {string} assetMint
       * @memberof OracleJob.LendingRateTask
       * @instance
       */
      LendingRateTask.prototype.assetMint = '';

      /**
       * LendingRateTask field.
       * @member {OracleJob.LendingRateTask.Field} field
       * @memberof OracleJob.LendingRateTask
       * @instance
       */
      LendingRateTask.prototype.field = 0;

      /**
       * Creates a new LendingRateTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.LendingRateTask
       * @static
       * @param {OracleJob.ILendingRateTask=} [properties] Properties to set
       * @returns {OracleJob.LendingRateTask} LendingRateTask instance
       */
      LendingRateTask.create = function create(properties) {
        return new LendingRateTask(properties);
      };

      /**
       * Encodes the specified LendingRateTask message. Does not implicitly {@apilink OracleJob.LendingRateTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.LendingRateTask
       * @static
       * @param {OracleJob.ILendingRateTask} message LendingRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LendingRateTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.protocol != null &&
          Object.hasOwnProperty.call(message, 'protocol')
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.protocol);
        if (
          message.assetMint != null &&
          Object.hasOwnProperty.call(message, 'assetMint')
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.assetMint);
        if (
          message.field != null &&
          Object.hasOwnProperty.call(message, 'field')
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.field);
        return writer;
      };

      /**
       * Encodes the specified LendingRateTask message, length delimited. Does not implicitly {@apilink OracleJob.LendingRateTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.LendingRateTask
       * @static
       * @param {OracleJob.ILendingRateTask} message LendingRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      LendingRateTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a LendingRateTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.LendingRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.LendingRateTask} LendingRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LendingRateTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.LendingRateTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.protocol = reader.string();
              break;
            }
            case 2: {
              message.assetMint = reader.string();
              break;
            }
            case 3: {
              message.field = reader.int32();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a LendingRateTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.LendingRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.LendingRateTask} LendingRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      LendingRateTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a LendingRateTask message.
       * @function verify
       * @memberof OracleJob.LendingRateTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      LendingRateTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.protocol != null && message.hasOwnProperty('protocol'))
          if (!$util.isString(message.protocol))
            return 'protocol: string expected';
        if (message.assetMint != null && message.hasOwnProperty('assetMint'))
          if (!$util.isString(message.assetMint))
            return 'assetMint: string expected';
        if (message.field != null && message.hasOwnProperty('field'))
          switch (message.field) {
            default:
              return 'field: enum value expected';
            case 0:
            case 1:
              break;
          }
        return null;
      };

      /**
       * Creates a LendingRateTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.LendingRateTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.LendingRateTask} LendingRateTask
       */
      LendingRateTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.LendingRateTask) return object;
        var message = new $root.OracleJob.LendingRateTask();
        if (object.protocol != null) message.protocol = String(object.protocol);
        if (object.assetMint != null)
          message.assetMint = String(object.assetMint);
        switch (object.field) {
          default:
            if (typeof object.field === 'number') {
              message.field = object.field;
              break;
            }
            break;
          case 'FIELD_DEPOSIT_RATE':
          case 0:
            message.field = 0;
            break;
          case 'FIELD_BORROW_RATE':
          case 1:
            message.field = 1;
            break;
        }
        return message;
      };

      /**
       * Creates a plain object from a LendingRateTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.LendingRateTask
       * @static
       * @param {OracleJob.LendingRateTask} message LendingRateTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      LendingRateTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.protocol = '';
          object.assetMint = '';
          object.field = options.enums === String ? 'FIELD_DEPOSIT_RATE' : 0;
        }
        if (message.protocol != null && message.hasOwnProperty('protocol'))
          object.protocol = message.protocol;
        if (message.assetMint != null && message.hasOwnProperty('assetMint'))
          object.assetMint = message.assetMint;
        if (message.field != null && message.hasOwnProperty('field'))
          object.field =
            options.enums === String
              ? $root.OracleJob.LendingRateTask.Field[message.field] ===
                undefined
                ? message.field
                : $root.OracleJob.LendingRateTask.Field[message.field]
              : message.field;
        return object;
      };

      /**
       * Converts this LendingRateTask to JSON.
       * @function toJSON
       * @memberof OracleJob.LendingRateTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      LendingRateTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for LendingRateTask
       * @function getTypeUrl
       * @memberof OracleJob.LendingRateTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      LendingRateTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.LendingRateTask';
      };

      /**
       * Field enum.
       * @name OracleJob.LendingRateTask.Field
       * @enum {number}
       * @property {number} FIELD_DEPOSIT_RATE=0 deposit lending rate
       * @property {number} FIELD_BORROW_RATE=1 borrow lending rate
       */
      LendingRateTask.Field = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'FIELD_DEPOSIT_RATE')] = 0;
        values[(valuesById[1] = 'FIELD_BORROW_RATE')] = 1;
        return values;
      })();

      return LendingRateTask;
    })();

    OracleJob.MangoPerpMarketTask = (function () {
      /**
       * Properties of a MangoPerpMarketTask.
       * @memberof OracleJob
       * @interface IMangoPerpMarketTask
       * @property {string|null} [perpMarketAddress] Mainnet address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json
       */

      /**
       * Constructs a new MangoPerpMarketTask.
       * @memberof OracleJob
       * @classdesc Fetch the current price for a Mango perpetual market
       * @implements IMangoPerpMarketTask
       * @constructor
       * @param {OracleJob.IMangoPerpMarketTask=} [properties] Properties to set
       */
      function MangoPerpMarketTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Mainnet address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json
       * @member {string} perpMarketAddress
       * @memberof OracleJob.MangoPerpMarketTask
       * @instance
       */
      MangoPerpMarketTask.prototype.perpMarketAddress = '';

      /**
       * Creates a new MangoPerpMarketTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.MangoPerpMarketTask
       * @static
       * @param {OracleJob.IMangoPerpMarketTask=} [properties] Properties to set
       * @returns {OracleJob.MangoPerpMarketTask} MangoPerpMarketTask instance
       */
      MangoPerpMarketTask.create = function create(properties) {
        return new MangoPerpMarketTask(properties);
      };

      /**
       * Encodes the specified MangoPerpMarketTask message. Does not implicitly {@apilink OracleJob.MangoPerpMarketTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.MangoPerpMarketTask
       * @static
       * @param {OracleJob.IMangoPerpMarketTask} message MangoPerpMarketTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MangoPerpMarketTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.perpMarketAddress != null &&
          Object.hasOwnProperty.call(message, 'perpMarketAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.perpMarketAddress);
        return writer;
      };

      /**
       * Encodes the specified MangoPerpMarketTask message, length delimited. Does not implicitly {@apilink OracleJob.MangoPerpMarketTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.MangoPerpMarketTask
       * @static
       * @param {OracleJob.IMangoPerpMarketTask} message MangoPerpMarketTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MangoPerpMarketTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a MangoPerpMarketTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.MangoPerpMarketTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.MangoPerpMarketTask} MangoPerpMarketTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MangoPerpMarketTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.MangoPerpMarketTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.perpMarketAddress = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a MangoPerpMarketTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.MangoPerpMarketTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.MangoPerpMarketTask} MangoPerpMarketTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MangoPerpMarketTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a MangoPerpMarketTask message.
       * @function verify
       * @memberof OracleJob.MangoPerpMarketTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      MangoPerpMarketTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.perpMarketAddress != null &&
          message.hasOwnProperty('perpMarketAddress')
        )
          if (!$util.isString(message.perpMarketAddress))
            return 'perpMarketAddress: string expected';
        return null;
      };

      /**
       * Creates a MangoPerpMarketTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.MangoPerpMarketTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.MangoPerpMarketTask} MangoPerpMarketTask
       */
      MangoPerpMarketTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.MangoPerpMarketTask)
          return object;
        var message = new $root.OracleJob.MangoPerpMarketTask();
        if (object.perpMarketAddress != null)
          message.perpMarketAddress = String(object.perpMarketAddress);
        return message;
      };

      /**
       * Creates a plain object from a MangoPerpMarketTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.MangoPerpMarketTask
       * @static
       * @param {OracleJob.MangoPerpMarketTask} message MangoPerpMarketTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      MangoPerpMarketTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.perpMarketAddress = '';
        if (
          message.perpMarketAddress != null &&
          message.hasOwnProperty('perpMarketAddress')
        )
          object.perpMarketAddress = message.perpMarketAddress;
        return object;
      };

      /**
       * Converts this MangoPerpMarketTask to JSON.
       * @function toJSON
       * @memberof OracleJob.MangoPerpMarketTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      MangoPerpMarketTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for MangoPerpMarketTask
       * @function getTypeUrl
       * @memberof OracleJob.MangoPerpMarketTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      MangoPerpMarketTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.MangoPerpMarketTask';
      };

      return MangoPerpMarketTask;
    })();

    OracleJob.JupiterSwapTask = (function () {
      /**
       * Properties of a JupiterSwapTask.
       * @memberof OracleJob
       * @interface IJupiterSwapTask
       * @property {string|null} [inTokenAddress] The input token address.
       * @property {string|null} [outTokenAddress] The output token address.
       * @property {OracleJob.JupiterSwapTask.IFilterList|null} [allowList] A list of AMM markets to allow.
       * @property {OracleJob.JupiterSwapTask.IFilterList|null} [denyList] A list of AMM markets to deny.
       * @property {number|null} [baseAmount] The amount of `in_token_address` tokens to swap.
       * @property {number|null} [quoteAmount] The amount of `out_token_address` tokens to swap.
       * @property {string|null} [baseAmountString] The amount of `in_token_address` tokens to swap.
       * @property {string|null} [quoteAmountString] The amount of `out_token_address` tokens to swap.
       */

      /**
       * Constructs a new JupiterSwapTask.
       * @memberof OracleJob
       * @classdesc Fetch the simulated price for a swap on JupiterSwap.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The swap price on Jupiter for a given input and output token mint address.
       *
       * _**Example**_: Fetch the JupiterSwap price for exchanging 1 SOL into USDC.
       *
       * ```json
       * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" } }
       * ```
       *
       * _**Example**_: Fetch the JupiterSwap price for exchanging 1000 SOL into USDC.
       *
       * ```json
       * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "baseAmount": "1000" } }
       * ```
       * @implements IJupiterSwapTask
       * @constructor
       * @param {OracleJob.IJupiterSwapTask=} [properties] Properties to set
       */
      function JupiterSwapTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The input token address.
       * @member {string} inTokenAddress
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      JupiterSwapTask.prototype.inTokenAddress = '';

      /**
       * The output token address.
       * @member {string} outTokenAddress
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      JupiterSwapTask.prototype.outTokenAddress = '';

      /**
       * A list of AMM markets to allow.
       * @member {OracleJob.JupiterSwapTask.IFilterList|null|undefined} allowList
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      JupiterSwapTask.prototype.allowList = null;

      /**
       * A list of AMM markets to deny.
       * @member {OracleJob.JupiterSwapTask.IFilterList|null|undefined} denyList
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      JupiterSwapTask.prototype.denyList = null;

      /**
       * The amount of `in_token_address` tokens to swap.
       * @member {number|null|undefined} baseAmount
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      JupiterSwapTask.prototype.baseAmount = null;

      /**
       * The amount of `out_token_address` tokens to swap.
       * @member {number|null|undefined} quoteAmount
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      JupiterSwapTask.prototype.quoteAmount = null;

      /**
       * The amount of `in_token_address` tokens to swap.
       * @member {string|null|undefined} baseAmountString
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      JupiterSwapTask.prototype.baseAmountString = null;

      /**
       * The amount of `out_token_address` tokens to swap.
       * @member {string|null|undefined} quoteAmountString
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      JupiterSwapTask.prototype.quoteAmountString = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * JupiterSwapTask RoutesFilters.
       * @member {"allowList"|"denyList"|undefined} RoutesFilters
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      Object.defineProperty(JupiterSwapTask.prototype, 'RoutesFilters', {
        get: $util.oneOfGetter(($oneOfFields = ['allowList', 'denyList'])),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * JupiterSwapTask SwapAmount.
       * @member {"baseAmount"|"quoteAmount"|"baseAmountString"|"quoteAmountString"|undefined} SwapAmount
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       */
      Object.defineProperty(JupiterSwapTask.prototype, 'SwapAmount', {
        get: $util.oneOfGetter(
          ($oneOfFields = [
            'baseAmount',
            'quoteAmount',
            'baseAmountString',
            'quoteAmountString',
          ])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new JupiterSwapTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.JupiterSwapTask
       * @static
       * @param {OracleJob.IJupiterSwapTask=} [properties] Properties to set
       * @returns {OracleJob.JupiterSwapTask} JupiterSwapTask instance
       */
      JupiterSwapTask.create = function create(properties) {
        return new JupiterSwapTask(properties);
      };

      /**
       * Encodes the specified JupiterSwapTask message. Does not implicitly {@apilink OracleJob.JupiterSwapTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.JupiterSwapTask
       * @static
       * @param {OracleJob.IJupiterSwapTask} message JupiterSwapTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      JupiterSwapTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.inTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'inTokenAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.inTokenAddress);
        if (
          message.outTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'outTokenAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.outTokenAddress);
        if (
          message.baseAmount != null &&
          Object.hasOwnProperty.call(message, 'baseAmount')
        )
          writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.baseAmount);
        if (
          message.allowList != null &&
          Object.hasOwnProperty.call(message, 'allowList')
        )
          $root.OracleJob.JupiterSwapTask.FilterList.encode(
            message.allowList,
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
        if (
          message.denyList != null &&
          Object.hasOwnProperty.call(message, 'denyList')
        )
          $root.OracleJob.JupiterSwapTask.FilterList.encode(
            message.denyList,
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
        if (
          message.quoteAmount != null &&
          Object.hasOwnProperty.call(message, 'quoteAmount')
        )
          writer.uint32(/* id 6, wireType 1 =*/ 49).double(message.quoteAmount);
        if (
          message.baseAmountString != null &&
          Object.hasOwnProperty.call(message, 'baseAmountString')
        )
          writer
            .uint32(/* id 7, wireType 2 =*/ 58)
            .string(message.baseAmountString);
        if (
          message.quoteAmountString != null &&
          Object.hasOwnProperty.call(message, 'quoteAmountString')
        )
          writer
            .uint32(/* id 8, wireType 2 =*/ 66)
            .string(message.quoteAmountString);
        return writer;
      };

      /**
       * Encodes the specified JupiterSwapTask message, length delimited. Does not implicitly {@apilink OracleJob.JupiterSwapTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.JupiterSwapTask
       * @static
       * @param {OracleJob.IJupiterSwapTask} message JupiterSwapTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      JupiterSwapTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a JupiterSwapTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.JupiterSwapTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.JupiterSwapTask} JupiterSwapTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      JupiterSwapTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.JupiterSwapTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.inTokenAddress = reader.string();
              break;
            }
            case 2: {
              message.outTokenAddress = reader.string();
              break;
            }
            case 4: {
              message.allowList =
                $root.OracleJob.JupiterSwapTask.FilterList.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 5: {
              message.denyList =
                $root.OracleJob.JupiterSwapTask.FilterList.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 3: {
              message.baseAmount = reader.double();
              break;
            }
            case 6: {
              message.quoteAmount = reader.double();
              break;
            }
            case 7: {
              message.baseAmountString = reader.string();
              break;
            }
            case 8: {
              message.quoteAmountString = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a JupiterSwapTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.JupiterSwapTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.JupiterSwapTask} JupiterSwapTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      JupiterSwapTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a JupiterSwapTask message.
       * @function verify
       * @memberof OracleJob.JupiterSwapTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      JupiterSwapTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          if (!$util.isString(message.inTokenAddress))
            return 'inTokenAddress: string expected';
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          if (!$util.isString(message.outTokenAddress))
            return 'outTokenAddress: string expected';
        if (message.allowList != null && message.hasOwnProperty('allowList')) {
          properties.RoutesFilters = 1;
          {
            var error = $root.OracleJob.JupiterSwapTask.FilterList.verify(
              message.allowList
            );
            if (error) return 'allowList.' + error;
          }
        }
        if (message.denyList != null && message.hasOwnProperty('denyList')) {
          if (properties.RoutesFilters === 1)
            return 'RoutesFilters: multiple values';
          properties.RoutesFilters = 1;
          {
            var error = $root.OracleJob.JupiterSwapTask.FilterList.verify(
              message.denyList
            );
            if (error) return 'denyList.' + error;
          }
        }
        if (
          message.baseAmount != null &&
          message.hasOwnProperty('baseAmount')
        ) {
          properties.SwapAmount = 1;
          if (typeof message.baseAmount !== 'number')
            return 'baseAmount: number expected';
        }
        if (
          message.quoteAmount != null &&
          message.hasOwnProperty('quoteAmount')
        ) {
          if (properties.SwapAmount === 1) return 'SwapAmount: multiple values';
          properties.SwapAmount = 1;
          if (typeof message.quoteAmount !== 'number')
            return 'quoteAmount: number expected';
        }
        if (
          message.baseAmountString != null &&
          message.hasOwnProperty('baseAmountString')
        ) {
          if (properties.SwapAmount === 1) return 'SwapAmount: multiple values';
          properties.SwapAmount = 1;
          if (!$util.isString(message.baseAmountString))
            return 'baseAmountString: string expected';
        }
        if (
          message.quoteAmountString != null &&
          message.hasOwnProperty('quoteAmountString')
        ) {
          if (properties.SwapAmount === 1) return 'SwapAmount: multiple values';
          properties.SwapAmount = 1;
          if (!$util.isString(message.quoteAmountString))
            return 'quoteAmountString: string expected';
        }
        return null;
      };

      /**
       * Creates a JupiterSwapTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.JupiterSwapTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.JupiterSwapTask} JupiterSwapTask
       */
      JupiterSwapTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.JupiterSwapTask) return object;
        var message = new $root.OracleJob.JupiterSwapTask();
        if (object.inTokenAddress != null)
          message.inTokenAddress = String(object.inTokenAddress);
        if (object.outTokenAddress != null)
          message.outTokenAddress = String(object.outTokenAddress);
        if (object.allowList != null) {
          if (typeof object.allowList !== 'object')
            throw TypeError(
              '.OracleJob.JupiterSwapTask.allowList: object expected'
            );
          message.allowList =
            $root.OracleJob.JupiterSwapTask.FilterList.fromObject(
              object.allowList
            );
        }
        if (object.denyList != null) {
          if (typeof object.denyList !== 'object')
            throw TypeError(
              '.OracleJob.JupiterSwapTask.denyList: object expected'
            );
          message.denyList =
            $root.OracleJob.JupiterSwapTask.FilterList.fromObject(
              object.denyList
            );
        }
        if (object.baseAmount != null)
          message.baseAmount = Number(object.baseAmount);
        if (object.quoteAmount != null)
          message.quoteAmount = Number(object.quoteAmount);
        if (object.baseAmountString != null)
          message.baseAmountString = String(object.baseAmountString);
        if (object.quoteAmountString != null)
          message.quoteAmountString = String(object.quoteAmountString);
        return message;
      };

      /**
       * Creates a plain object from a JupiterSwapTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.JupiterSwapTask
       * @static
       * @param {OracleJob.JupiterSwapTask} message JupiterSwapTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      JupiterSwapTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.inTokenAddress = '';
          object.outTokenAddress = '';
        }
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          object.inTokenAddress = message.inTokenAddress;
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          object.outTokenAddress = message.outTokenAddress;
        if (
          message.baseAmount != null &&
          message.hasOwnProperty('baseAmount')
        ) {
          object.baseAmount =
            options.json && !isFinite(message.baseAmount)
              ? String(message.baseAmount)
              : message.baseAmount;
          if (options.oneofs) object.SwapAmount = 'baseAmount';
        }
        if (message.allowList != null && message.hasOwnProperty('allowList')) {
          object.allowList =
            $root.OracleJob.JupiterSwapTask.FilterList.toObject(
              message.allowList,
              options
            );
          if (options.oneofs) object.RoutesFilters = 'allowList';
        }
        if (message.denyList != null && message.hasOwnProperty('denyList')) {
          object.denyList = $root.OracleJob.JupiterSwapTask.FilterList.toObject(
            message.denyList,
            options
          );
          if (options.oneofs) object.RoutesFilters = 'denyList';
        }
        if (
          message.quoteAmount != null &&
          message.hasOwnProperty('quoteAmount')
        ) {
          object.quoteAmount =
            options.json && !isFinite(message.quoteAmount)
              ? String(message.quoteAmount)
              : message.quoteAmount;
          if (options.oneofs) object.SwapAmount = 'quoteAmount';
        }
        if (
          message.baseAmountString != null &&
          message.hasOwnProperty('baseAmountString')
        ) {
          object.baseAmountString = message.baseAmountString;
          if (options.oneofs) object.SwapAmount = 'baseAmountString';
        }
        if (
          message.quoteAmountString != null &&
          message.hasOwnProperty('quoteAmountString')
        ) {
          object.quoteAmountString = message.quoteAmountString;
          if (options.oneofs) object.SwapAmount = 'quoteAmountString';
        }
        return object;
      };

      /**
       * Converts this JupiterSwapTask to JSON.
       * @function toJSON
       * @memberof OracleJob.JupiterSwapTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      JupiterSwapTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for JupiterSwapTask
       * @function getTypeUrl
       * @memberof OracleJob.JupiterSwapTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      JupiterSwapTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.JupiterSwapTask';
      };

      JupiterSwapTask.FilterList = (function () {
        /**
         * Properties of a FilterList.
         * @memberof OracleJob.JupiterSwapTask
         * @interface IFilterList
         * @property {Array.<string>|null} [labels] A list of Jupiter AMM labels to allow or deny (e.g. 'Raydium', 'Orca')
         */

        /**
         * Constructs a new FilterList.
         * @memberof OracleJob.JupiterSwapTask
         * @classdesc Represents a FilterList.
         * @implements IFilterList
         * @constructor
         * @param {OracleJob.JupiterSwapTask.IFilterList=} [properties] Properties to set
         */
        function FilterList(properties) {
          this.labels = [];
          if (properties)
            for (
              var keys = Object.keys(properties), i = 0;
              i < keys.length;
              ++i
            )
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
        }

        /**
         * A list of Jupiter AMM labels to allow or deny (e.g. 'Raydium', 'Orca')
         * @member {Array.<string>} labels
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @instance
         */
        FilterList.prototype.labels = $util.emptyArray;

        /**
         * Creates a new FilterList instance using the specified properties.
         * @function create
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @static
         * @param {OracleJob.JupiterSwapTask.IFilterList=} [properties] Properties to set
         * @returns {OracleJob.JupiterSwapTask.FilterList} FilterList instance
         */
        FilterList.create = function create(properties) {
          return new FilterList(properties);
        };

        /**
         * Encodes the specified FilterList message. Does not implicitly {@apilink OracleJob.JupiterSwapTask.FilterList.verify|verify} messages.
         * @function encode
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @static
         * @param {OracleJob.JupiterSwapTask.IFilterList} message FilterList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilterList.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (message.labels != null && message.labels.length)
            for (var i = 0; i < message.labels.length; ++i)
              writer
                .uint32(/* id 1, wireType 2 =*/ 10)
                .string(message.labels[i]);
          return writer;
        };

        /**
         * Encodes the specified FilterList message, length delimited. Does not implicitly {@apilink OracleJob.JupiterSwapTask.FilterList.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @static
         * @param {OracleJob.JupiterSwapTask.IFilterList} message FilterList message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        FilterList.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a FilterList message from the specified reader or buffer.
         * @function decode
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OracleJob.JupiterSwapTask.FilterList} FilterList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilterList.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.OracleJob.JupiterSwapTask.FilterList();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                if (!(message.labels && message.labels.length))
                  message.labels = [];
                message.labels.push(reader.string());
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes a FilterList message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OracleJob.JupiterSwapTask.FilterList} FilterList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        FilterList.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a FilterList message.
         * @function verify
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        FilterList.verify = function verify(message) {
          if (typeof message !== 'object' || message === null)
            return 'object expected';
          if (message.labels != null && message.hasOwnProperty('labels')) {
            if (!Array.isArray(message.labels)) return 'labels: array expected';
            for (var i = 0; i < message.labels.length; ++i)
              if (!$util.isString(message.labels[i]))
                return 'labels: string[] expected';
          }
          return null;
        };

        /**
         * Creates a FilterList message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OracleJob.JupiterSwapTask.FilterList} FilterList
         */
        FilterList.fromObject = function fromObject(object) {
          if (object instanceof $root.OracleJob.JupiterSwapTask.FilterList)
            return object;
          var message = new $root.OracleJob.JupiterSwapTask.FilterList();
          if (object.labels) {
            if (!Array.isArray(object.labels))
              throw TypeError(
                '.OracleJob.JupiterSwapTask.FilterList.labels: array expected'
              );
            message.labels = [];
            for (var i = 0; i < object.labels.length; ++i)
              message.labels[i] = String(object.labels[i]);
          }
          return message;
        };

        /**
         * Creates a plain object from a FilterList message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @static
         * @param {OracleJob.JupiterSwapTask.FilterList} message FilterList
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        FilterList.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.arrays || options.defaults) object.labels = [];
          if (message.labels && message.labels.length) {
            object.labels = [];
            for (var j = 0; j < message.labels.length; ++j)
              object.labels[j] = message.labels[j];
          }
          return object;
        };

        /**
         * Converts this FilterList to JSON.
         * @function toJSON
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        FilterList.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for FilterList
         * @function getTypeUrl
         * @memberof OracleJob.JupiterSwapTask.FilterList
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        FilterList.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/OracleJob.JupiterSwapTask.FilterList';
        };

        return FilterList;
      })();

      return JupiterSwapTask;
    })();

    OracleJob.PerpMarketTask = (function () {
      /**
       * Properties of a PerpMarketTask.
       * @memberof OracleJob
       * @interface IPerpMarketTask
       * @property {string|null} [mangoMarketAddress] Market address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json
       * @property {string|null} [driftMarketAddress] Market address for a drift perpetual market. A full list can be found here: https://github.com/drift-labs/protocol-v1/blob/master/sdk/src/constants/markets.ts
       * @property {string|null} [zetaMarketAddress] Market address for a zeta perpetual market.
       * @property {string|null} [zoMarketAddress] Market address for a 01 protocol perpetual market.
       */

      /**
       * Constructs a new PerpMarketTask.
       * @memberof OracleJob
       * @classdesc Fetch the current price of a perpetual market.
       * @implements IPerpMarketTask
       * @constructor
       * @param {OracleJob.IPerpMarketTask=} [properties] Properties to set
       */
      function PerpMarketTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Market address for a mango perpetual market. A full list can be found here: https://github.com/blockworks-foundation/mango-client-v3/blob/main/src/ids.json
       * @member {string|null|undefined} mangoMarketAddress
       * @memberof OracleJob.PerpMarketTask
       * @instance
       */
      PerpMarketTask.prototype.mangoMarketAddress = null;

      /**
       * Market address for a drift perpetual market. A full list can be found here: https://github.com/drift-labs/protocol-v1/blob/master/sdk/src/constants/markets.ts
       * @member {string|null|undefined} driftMarketAddress
       * @memberof OracleJob.PerpMarketTask
       * @instance
       */
      PerpMarketTask.prototype.driftMarketAddress = null;

      /**
       * Market address for a zeta perpetual market.
       * @member {string|null|undefined} zetaMarketAddress
       * @memberof OracleJob.PerpMarketTask
       * @instance
       */
      PerpMarketTask.prototype.zetaMarketAddress = null;

      /**
       * Market address for a 01 protocol perpetual market.
       * @member {string|null|undefined} zoMarketAddress
       * @memberof OracleJob.PerpMarketTask
       * @instance
       */
      PerpMarketTask.prototype.zoMarketAddress = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * PerpMarketTask MarketAddress.
       * @member {"mangoMarketAddress"|"driftMarketAddress"|"zetaMarketAddress"|"zoMarketAddress"|undefined} MarketAddress
       * @memberof OracleJob.PerpMarketTask
       * @instance
       */
      Object.defineProperty(PerpMarketTask.prototype, 'MarketAddress', {
        get: $util.oneOfGetter(
          ($oneOfFields = [
            'mangoMarketAddress',
            'driftMarketAddress',
            'zetaMarketAddress',
            'zoMarketAddress',
          ])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new PerpMarketTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.PerpMarketTask
       * @static
       * @param {OracleJob.IPerpMarketTask=} [properties] Properties to set
       * @returns {OracleJob.PerpMarketTask} PerpMarketTask instance
       */
      PerpMarketTask.create = function create(properties) {
        return new PerpMarketTask(properties);
      };

      /**
       * Encodes the specified PerpMarketTask message. Does not implicitly {@apilink OracleJob.PerpMarketTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.PerpMarketTask
       * @static
       * @param {OracleJob.IPerpMarketTask} message PerpMarketTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PerpMarketTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.mangoMarketAddress != null &&
          Object.hasOwnProperty.call(message, 'mangoMarketAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.mangoMarketAddress);
        if (
          message.driftMarketAddress != null &&
          Object.hasOwnProperty.call(message, 'driftMarketAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.driftMarketAddress);
        if (
          message.zetaMarketAddress != null &&
          Object.hasOwnProperty.call(message, 'zetaMarketAddress')
        )
          writer
            .uint32(/* id 3, wireType 2 =*/ 26)
            .string(message.zetaMarketAddress);
        if (
          message.zoMarketAddress != null &&
          Object.hasOwnProperty.call(message, 'zoMarketAddress')
        )
          writer
            .uint32(/* id 4, wireType 2 =*/ 34)
            .string(message.zoMarketAddress);
        return writer;
      };

      /**
       * Encodes the specified PerpMarketTask message, length delimited. Does not implicitly {@apilink OracleJob.PerpMarketTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.PerpMarketTask
       * @static
       * @param {OracleJob.IPerpMarketTask} message PerpMarketTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PerpMarketTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PerpMarketTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.PerpMarketTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.PerpMarketTask} PerpMarketTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PerpMarketTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.PerpMarketTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.mangoMarketAddress = reader.string();
              break;
            }
            case 2: {
              message.driftMarketAddress = reader.string();
              break;
            }
            case 3: {
              message.zetaMarketAddress = reader.string();
              break;
            }
            case 4: {
              message.zoMarketAddress = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a PerpMarketTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.PerpMarketTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.PerpMarketTask} PerpMarketTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PerpMarketTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PerpMarketTask message.
       * @function verify
       * @memberof OracleJob.PerpMarketTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PerpMarketTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (
          message.mangoMarketAddress != null &&
          message.hasOwnProperty('mangoMarketAddress')
        ) {
          properties.MarketAddress = 1;
          if (!$util.isString(message.mangoMarketAddress))
            return 'mangoMarketAddress: string expected';
        }
        if (
          message.driftMarketAddress != null &&
          message.hasOwnProperty('driftMarketAddress')
        ) {
          if (properties.MarketAddress === 1)
            return 'MarketAddress: multiple values';
          properties.MarketAddress = 1;
          if (!$util.isString(message.driftMarketAddress))
            return 'driftMarketAddress: string expected';
        }
        if (
          message.zetaMarketAddress != null &&
          message.hasOwnProperty('zetaMarketAddress')
        ) {
          if (properties.MarketAddress === 1)
            return 'MarketAddress: multiple values';
          properties.MarketAddress = 1;
          if (!$util.isString(message.zetaMarketAddress))
            return 'zetaMarketAddress: string expected';
        }
        if (
          message.zoMarketAddress != null &&
          message.hasOwnProperty('zoMarketAddress')
        ) {
          if (properties.MarketAddress === 1)
            return 'MarketAddress: multiple values';
          properties.MarketAddress = 1;
          if (!$util.isString(message.zoMarketAddress))
            return 'zoMarketAddress: string expected';
        }
        return null;
      };

      /**
       * Creates a PerpMarketTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.PerpMarketTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.PerpMarketTask} PerpMarketTask
       */
      PerpMarketTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.PerpMarketTask) return object;
        var message = new $root.OracleJob.PerpMarketTask();
        if (object.mangoMarketAddress != null)
          message.mangoMarketAddress = String(object.mangoMarketAddress);
        if (object.driftMarketAddress != null)
          message.driftMarketAddress = String(object.driftMarketAddress);
        if (object.zetaMarketAddress != null)
          message.zetaMarketAddress = String(object.zetaMarketAddress);
        if (object.zoMarketAddress != null)
          message.zoMarketAddress = String(object.zoMarketAddress);
        return message;
      };

      /**
       * Creates a plain object from a PerpMarketTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.PerpMarketTask
       * @static
       * @param {OracleJob.PerpMarketTask} message PerpMarketTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PerpMarketTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (
          message.mangoMarketAddress != null &&
          message.hasOwnProperty('mangoMarketAddress')
        ) {
          object.mangoMarketAddress = message.mangoMarketAddress;
          if (options.oneofs) object.MarketAddress = 'mangoMarketAddress';
        }
        if (
          message.driftMarketAddress != null &&
          message.hasOwnProperty('driftMarketAddress')
        ) {
          object.driftMarketAddress = message.driftMarketAddress;
          if (options.oneofs) object.MarketAddress = 'driftMarketAddress';
        }
        if (
          message.zetaMarketAddress != null &&
          message.hasOwnProperty('zetaMarketAddress')
        ) {
          object.zetaMarketAddress = message.zetaMarketAddress;
          if (options.oneofs) object.MarketAddress = 'zetaMarketAddress';
        }
        if (
          message.zoMarketAddress != null &&
          message.hasOwnProperty('zoMarketAddress')
        ) {
          object.zoMarketAddress = message.zoMarketAddress;
          if (options.oneofs) object.MarketAddress = 'zoMarketAddress';
        }
        return object;
      };

      /**
       * Converts this PerpMarketTask to JSON.
       * @function toJSON
       * @memberof OracleJob.PerpMarketTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PerpMarketTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for PerpMarketTask
       * @function getTypeUrl
       * @memberof OracleJob.PerpMarketTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      PerpMarketTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.PerpMarketTask';
      };

      return PerpMarketTask;
    })();

    OracleJob.OracleTask = (function () {
      /**
       * Properties of an OracleTask.
       * @memberof OracleJob
       * @interface IOracleTask
       * @property {string|null} [switchboardAddress] Mainnet address of a Switchboard V2 feed. Switchboard is decentralized and allows anyone to build their own feed. A small subset of feeds is available here: https://switchboard.xyz/explorer
       * @property {string|null} [pythAddress] Mainnet address for a Pyth feed. A full list can be found here: https://pyth.network/price-feeds/
       * @property {string|null} [chainlinkAddress] Mainnet address for a Chainlink feed. A full list can be found here: https://docs.chain.link/docs/solana/data-feeds-solana
       * @property {number|null} [pythAllowedConfidenceInterval] Value (as a percentage) that the lower bound confidence interval is of the actual value.
       * Confidence intervals that are larger that this treshold are rejected.
       */

      /**
       * Constructs a new OracleTask.
       * @memberof OracleJob
       * @classdesc Fetch the current price of a Solana oracle protocol.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The current price of an on-chain oracle.
       *
       * _**Example**_: The Switchboard SOL/USD oracle price.
       *
       * ```json
       * { "oracleTask": { "switchboardAddress": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR" } }
       * ```
       *
       * _**Example**_: The Pyth SOL/USD oracle price.
       *
       * ```json
       * { "oracleTask": { "pythAddress": "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG" } }
       * ```
       *
       * _**Example**_: The Chainlink SOL/USD oracle price.
       *
       * ```json
       * { "oracleTask": { "chainlinkAddress": "CcPVS9bqyXbD9cLnTbhhHazLsrua8QMFUHTutPtjyDzq" } }
       * ```
       * @implements IOracleTask
       * @constructor
       * @param {OracleJob.IOracleTask=} [properties] Properties to set
       */
      function OracleTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Mainnet address of a Switchboard V2 feed. Switchboard is decentralized and allows anyone to build their own feed. A small subset of feeds is available here: https://switchboard.xyz/explorer
       * @member {string|null|undefined} switchboardAddress
       * @memberof OracleJob.OracleTask
       * @instance
       */
      OracleTask.prototype.switchboardAddress = null;

      /**
       * Mainnet address for a Pyth feed. A full list can be found here: https://pyth.network/price-feeds/
       * @member {string|null|undefined} pythAddress
       * @memberof OracleJob.OracleTask
       * @instance
       */
      OracleTask.prototype.pythAddress = null;

      /**
       * Mainnet address for a Chainlink feed. A full list can be found here: https://docs.chain.link/docs/solana/data-feeds-solana
       * @member {string|null|undefined} chainlinkAddress
       * @memberof OracleJob.OracleTask
       * @instance
       */
      OracleTask.prototype.chainlinkAddress = null;

      /**
       * Value (as a percentage) that the lower bound confidence interval is of the actual value.
       * Confidence intervals that are larger that this treshold are rejected.
       * @member {number} pythAllowedConfidenceInterval
       * @memberof OracleJob.OracleTask
       * @instance
       */
      OracleTask.prototype.pythAllowedConfidenceInterval = 0;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * OracleTask AggregatorAddress.
       * @member {"switchboardAddress"|"pythAddress"|"chainlinkAddress"|undefined} AggregatorAddress
       * @memberof OracleJob.OracleTask
       * @instance
       */
      Object.defineProperty(OracleTask.prototype, 'AggregatorAddress', {
        get: $util.oneOfGetter(
          ($oneOfFields = [
            'switchboardAddress',
            'pythAddress',
            'chainlinkAddress',
          ])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new OracleTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.OracleTask
       * @static
       * @param {OracleJob.IOracleTask=} [properties] Properties to set
       * @returns {OracleJob.OracleTask} OracleTask instance
       */
      OracleTask.create = function create(properties) {
        return new OracleTask(properties);
      };

      /**
       * Encodes the specified OracleTask message. Does not implicitly {@apilink OracleJob.OracleTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.OracleTask
       * @static
       * @param {OracleJob.IOracleTask} message OracleTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      OracleTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.switchboardAddress != null &&
          Object.hasOwnProperty.call(message, 'switchboardAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.switchboardAddress);
        if (
          message.pythAddress != null &&
          Object.hasOwnProperty.call(message, 'pythAddress')
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.pythAddress);
        if (
          message.chainlinkAddress != null &&
          Object.hasOwnProperty.call(message, 'chainlinkAddress')
        )
          writer
            .uint32(/* id 3, wireType 2 =*/ 26)
            .string(message.chainlinkAddress);
        if (
          message.pythAllowedConfidenceInterval != null &&
          Object.hasOwnProperty.call(message, 'pythAllowedConfidenceInterval')
        )
          writer
            .uint32(/* id 4, wireType 1 =*/ 33)
            .double(message.pythAllowedConfidenceInterval);
        return writer;
      };

      /**
       * Encodes the specified OracleTask message, length delimited. Does not implicitly {@apilink OracleJob.OracleTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.OracleTask
       * @static
       * @param {OracleJob.IOracleTask} message OracleTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      OracleTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an OracleTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.OracleTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.OracleTask} OracleTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      OracleTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.OracleTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.switchboardAddress = reader.string();
              break;
            }
            case 2: {
              message.pythAddress = reader.string();
              break;
            }
            case 3: {
              message.chainlinkAddress = reader.string();
              break;
            }
            case 4: {
              message.pythAllowedConfidenceInterval = reader.double();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an OracleTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.OracleTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.OracleTask} OracleTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      OracleTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an OracleTask message.
       * @function verify
       * @memberof OracleJob.OracleTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      OracleTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (
          message.switchboardAddress != null &&
          message.hasOwnProperty('switchboardAddress')
        ) {
          properties.AggregatorAddress = 1;
          if (!$util.isString(message.switchboardAddress))
            return 'switchboardAddress: string expected';
        }
        if (
          message.pythAddress != null &&
          message.hasOwnProperty('pythAddress')
        ) {
          if (properties.AggregatorAddress === 1)
            return 'AggregatorAddress: multiple values';
          properties.AggregatorAddress = 1;
          if (!$util.isString(message.pythAddress))
            return 'pythAddress: string expected';
        }
        if (
          message.chainlinkAddress != null &&
          message.hasOwnProperty('chainlinkAddress')
        ) {
          if (properties.AggregatorAddress === 1)
            return 'AggregatorAddress: multiple values';
          properties.AggregatorAddress = 1;
          if (!$util.isString(message.chainlinkAddress))
            return 'chainlinkAddress: string expected';
        }
        if (
          message.pythAllowedConfidenceInterval != null &&
          message.hasOwnProperty('pythAllowedConfidenceInterval')
        )
          if (typeof message.pythAllowedConfidenceInterval !== 'number')
            return 'pythAllowedConfidenceInterval: number expected';
        return null;
      };

      /**
       * Creates an OracleTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.OracleTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.OracleTask} OracleTask
       */
      OracleTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.OracleTask) return object;
        var message = new $root.OracleJob.OracleTask();
        if (object.switchboardAddress != null)
          message.switchboardAddress = String(object.switchboardAddress);
        if (object.pythAddress != null)
          message.pythAddress = String(object.pythAddress);
        if (object.chainlinkAddress != null)
          message.chainlinkAddress = String(object.chainlinkAddress);
        if (object.pythAllowedConfidenceInterval != null)
          message.pythAllowedConfidenceInterval = Number(
            object.pythAllowedConfidenceInterval
          );
        return message;
      };

      /**
       * Creates a plain object from an OracleTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.OracleTask
       * @static
       * @param {OracleJob.OracleTask} message OracleTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      OracleTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.pythAllowedConfidenceInterval = 0;
        if (
          message.switchboardAddress != null &&
          message.hasOwnProperty('switchboardAddress')
        ) {
          object.switchboardAddress = message.switchboardAddress;
          if (options.oneofs) object.AggregatorAddress = 'switchboardAddress';
        }
        if (
          message.pythAddress != null &&
          message.hasOwnProperty('pythAddress')
        ) {
          object.pythAddress = message.pythAddress;
          if (options.oneofs) object.AggregatorAddress = 'pythAddress';
        }
        if (
          message.chainlinkAddress != null &&
          message.hasOwnProperty('chainlinkAddress')
        ) {
          object.chainlinkAddress = message.chainlinkAddress;
          if (options.oneofs) object.AggregatorAddress = 'chainlinkAddress';
        }
        if (
          message.pythAllowedConfidenceInterval != null &&
          message.hasOwnProperty('pythAllowedConfidenceInterval')
        )
          object.pythAllowedConfidenceInterval =
            options.json && !isFinite(message.pythAllowedConfidenceInterval)
              ? String(message.pythAllowedConfidenceInterval)
              : message.pythAllowedConfidenceInterval;
        return object;
      };

      /**
       * Converts this OracleTask to JSON.
       * @function toJSON
       * @memberof OracleJob.OracleTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      OracleTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for OracleTask
       * @function getTypeUrl
       * @memberof OracleJob.OracleTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      OracleTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.OracleTask';
      };

      return OracleTask;
    })();

    OracleJob.AnchorFetchTask = (function () {
      /**
       * Properties of an AnchorFetchTask.
       * @memberof OracleJob
       * @interface IAnchorFetchTask
       * @property {string|null} [programId] Owning program of the account to parse.
       * @property {string|null} [accountAddress] The account to parse.
       */

      /**
       * Constructs a new AnchorFetchTask.
       * @memberof OracleJob
       * @classdesc Load a parse an Anchor based solana account.
       * @implements IAnchorFetchTask
       * @constructor
       * @param {OracleJob.IAnchorFetchTask=} [properties] Properties to set
       */
      function AnchorFetchTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Owning program of the account to parse.
       * @member {string} programId
       * @memberof OracleJob.AnchorFetchTask
       * @instance
       */
      AnchorFetchTask.prototype.programId = '';

      /**
       * The account to parse.
       * @member {string} accountAddress
       * @memberof OracleJob.AnchorFetchTask
       * @instance
       */
      AnchorFetchTask.prototype.accountAddress = '';

      /**
       * Creates a new AnchorFetchTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.AnchorFetchTask
       * @static
       * @param {OracleJob.IAnchorFetchTask=} [properties] Properties to set
       * @returns {OracleJob.AnchorFetchTask} AnchorFetchTask instance
       */
      AnchorFetchTask.create = function create(properties) {
        return new AnchorFetchTask(properties);
      };

      /**
       * Encodes the specified AnchorFetchTask message. Does not implicitly {@apilink OracleJob.AnchorFetchTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.AnchorFetchTask
       * @static
       * @param {OracleJob.IAnchorFetchTask} message AnchorFetchTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AnchorFetchTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.programId != null &&
          Object.hasOwnProperty.call(message, 'programId')
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.programId);
        if (
          message.accountAddress != null &&
          Object.hasOwnProperty.call(message, 'accountAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.accountAddress);
        return writer;
      };

      /**
       * Encodes the specified AnchorFetchTask message, length delimited. Does not implicitly {@apilink OracleJob.AnchorFetchTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.AnchorFetchTask
       * @static
       * @param {OracleJob.IAnchorFetchTask} message AnchorFetchTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      AnchorFetchTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an AnchorFetchTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.AnchorFetchTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.AnchorFetchTask} AnchorFetchTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AnchorFetchTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.AnchorFetchTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.programId = reader.string();
              break;
            }
            case 2: {
              message.accountAddress = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an AnchorFetchTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.AnchorFetchTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.AnchorFetchTask} AnchorFetchTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      AnchorFetchTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an AnchorFetchTask message.
       * @function verify
       * @memberof OracleJob.AnchorFetchTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      AnchorFetchTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.programId != null && message.hasOwnProperty('programId'))
          if (!$util.isString(message.programId))
            return 'programId: string expected';
        if (
          message.accountAddress != null &&
          message.hasOwnProperty('accountAddress')
        )
          if (!$util.isString(message.accountAddress))
            return 'accountAddress: string expected';
        return null;
      };

      /**
       * Creates an AnchorFetchTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.AnchorFetchTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.AnchorFetchTask} AnchorFetchTask
       */
      AnchorFetchTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.AnchorFetchTask) return object;
        var message = new $root.OracleJob.AnchorFetchTask();
        if (object.programId != null)
          message.programId = String(object.programId);
        if (object.accountAddress != null)
          message.accountAddress = String(object.accountAddress);
        return message;
      };

      /**
       * Creates a plain object from an AnchorFetchTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.AnchorFetchTask
       * @static
       * @param {OracleJob.AnchorFetchTask} message AnchorFetchTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      AnchorFetchTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.programId = '';
          object.accountAddress = '';
        }
        if (message.programId != null && message.hasOwnProperty('programId'))
          object.programId = message.programId;
        if (
          message.accountAddress != null &&
          message.hasOwnProperty('accountAddress')
        )
          object.accountAddress = message.accountAddress;
        return object;
      };

      /**
       * Converts this AnchorFetchTask to JSON.
       * @function toJSON
       * @memberof OracleJob.AnchorFetchTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      AnchorFetchTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for AnchorFetchTask
       * @function getTypeUrl
       * @memberof OracleJob.AnchorFetchTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      AnchorFetchTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.AnchorFetchTask';
      };

      return AnchorFetchTask;
    })();

    OracleJob.TpsTask = (function () {
      /**
       * Properties of a TpsTask.
       * @memberof OracleJob
       * @interface ITpsTask
       */

      /**
       * Constructs a new TpsTask.
       * @memberof OracleJob
       * @classdesc Fetch the current transactions per second.
       * @implements ITpsTask
       * @constructor
       * @param {OracleJob.ITpsTask=} [properties] Properties to set
       */
      function TpsTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new TpsTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.TpsTask
       * @static
       * @param {OracleJob.ITpsTask=} [properties] Properties to set
       * @returns {OracleJob.TpsTask} TpsTask instance
       */
      TpsTask.create = function create(properties) {
        return new TpsTask(properties);
      };

      /**
       * Encodes the specified TpsTask message. Does not implicitly {@apilink OracleJob.TpsTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.TpsTask
       * @static
       * @param {OracleJob.ITpsTask} message TpsTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      TpsTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified TpsTask message, length delimited. Does not implicitly {@apilink OracleJob.TpsTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.TpsTask
       * @static
       * @param {OracleJob.ITpsTask} message TpsTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      TpsTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a TpsTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.TpsTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.TpsTask} TpsTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      TpsTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.TpsTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a TpsTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.TpsTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.TpsTask} TpsTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      TpsTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a TpsTask message.
       * @function verify
       * @memberof OracleJob.TpsTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      TpsTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        return null;
      };

      /**
       * Creates a TpsTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.TpsTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.TpsTask} TpsTask
       */
      TpsTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.TpsTask) return object;
        return new $root.OracleJob.TpsTask();
      };

      /**
       * Creates a plain object from a TpsTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.TpsTask
       * @static
       * @param {OracleJob.TpsTask} message TpsTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      TpsTask.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this TpsTask to JSON.
       * @function toJSON
       * @memberof OracleJob.TpsTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      TpsTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for TpsTask
       * @function getTypeUrl
       * @memberof OracleJob.TpsTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      TpsTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.TpsTask';
      };

      return TpsTask;
    })();

    OracleJob.SplStakePoolTask = (function () {
      /**
       * Properties of a SplStakePoolTask.
       * @memberof OracleJob
       * @interface ISplStakePoolTask
       * @property {string|null} [pubkey] The pubkey of the SPL Stake Pool.
       */

      /**
       * Constructs a new SplStakePoolTask.
       * @memberof OracleJob
       * @classdesc Fetch the JSON representation of an SPL Stake Pool account.
       * @implements ISplStakePoolTask
       * @constructor
       * @param {OracleJob.ISplStakePoolTask=} [properties] Properties to set
       */
      function SplStakePoolTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The pubkey of the SPL Stake Pool.
       * @member {string} pubkey
       * @memberof OracleJob.SplStakePoolTask
       * @instance
       */
      SplStakePoolTask.prototype.pubkey = '';

      /**
       * Creates a new SplStakePoolTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.SplStakePoolTask
       * @static
       * @param {OracleJob.ISplStakePoolTask=} [properties] Properties to set
       * @returns {OracleJob.SplStakePoolTask} SplStakePoolTask instance
       */
      SplStakePoolTask.create = function create(properties) {
        return new SplStakePoolTask(properties);
      };

      /**
       * Encodes the specified SplStakePoolTask message. Does not implicitly {@apilink OracleJob.SplStakePoolTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.SplStakePoolTask
       * @static
       * @param {OracleJob.ISplStakePoolTask} message SplStakePoolTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SplStakePoolTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.pubkey != null &&
          Object.hasOwnProperty.call(message, 'pubkey')
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.pubkey);
        return writer;
      };

      /**
       * Encodes the specified SplStakePoolTask message, length delimited. Does not implicitly {@apilink OracleJob.SplStakePoolTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.SplStakePoolTask
       * @static
       * @param {OracleJob.ISplStakePoolTask} message SplStakePoolTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SplStakePoolTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SplStakePoolTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.SplStakePoolTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.SplStakePoolTask} SplStakePoolTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SplStakePoolTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.SplStakePoolTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.pubkey = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SplStakePoolTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.SplStakePoolTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.SplStakePoolTask} SplStakePoolTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SplStakePoolTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SplStakePoolTask message.
       * @function verify
       * @memberof OracleJob.SplStakePoolTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SplStakePoolTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.pubkey != null && message.hasOwnProperty('pubkey'))
          if (!$util.isString(message.pubkey)) return 'pubkey: string expected';
        return null;
      };

      /**
       * Creates a SplStakePoolTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.SplStakePoolTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.SplStakePoolTask} SplStakePoolTask
       */
      SplStakePoolTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.SplStakePoolTask) return object;
        var message = new $root.OracleJob.SplStakePoolTask();
        if (object.pubkey != null) message.pubkey = String(object.pubkey);
        return message;
      };

      /**
       * Creates a plain object from a SplStakePoolTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.SplStakePoolTask
       * @static
       * @param {OracleJob.SplStakePoolTask} message SplStakePoolTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SplStakePoolTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.pubkey = '';
        if (message.pubkey != null && message.hasOwnProperty('pubkey'))
          object.pubkey = message.pubkey;
        return object;
      };

      /**
       * Converts this SplStakePoolTask to JSON.
       * @function toJSON
       * @memberof OracleJob.SplStakePoolTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SplStakePoolTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for SplStakePoolTask
       * @function getTypeUrl
       * @memberof OracleJob.SplStakePoolTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      SplStakePoolTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.SplStakePoolTask';
      };

      return SplStakePoolTask;
    })();

    OracleJob.SplTokenParseTask = (function () {
      /**
       * Properties of a SplTokenParseTask.
       * @memberof OracleJob
       * @interface ISplTokenParseTask
       * @property {string|null} [tokenAccountAddress] The publicKey of a token account to fetch the mintInfo for.
       * @property {string|null} [mintAddress] The publicKey of the token mint address.
       */

      /**
       * Constructs a new SplTokenParseTask.
       * @memberof OracleJob
       * @classdesc Fetch the JSON representation of an SPL token mint.
       * @implements ISplTokenParseTask
       * @constructor
       * @param {OracleJob.ISplTokenParseTask=} [properties] Properties to set
       */
      function SplTokenParseTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The publicKey of a token account to fetch the mintInfo for.
       * @member {string|null|undefined} tokenAccountAddress
       * @memberof OracleJob.SplTokenParseTask
       * @instance
       */
      SplTokenParseTask.prototype.tokenAccountAddress = null;

      /**
       * The publicKey of the token mint address.
       * @member {string|null|undefined} mintAddress
       * @memberof OracleJob.SplTokenParseTask
       * @instance
       */
      SplTokenParseTask.prototype.mintAddress = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * SplTokenParseTask AccountAddress.
       * @member {"tokenAccountAddress"|"mintAddress"|undefined} AccountAddress
       * @memberof OracleJob.SplTokenParseTask
       * @instance
       */
      Object.defineProperty(SplTokenParseTask.prototype, 'AccountAddress', {
        get: $util.oneOfGetter(
          ($oneOfFields = ['tokenAccountAddress', 'mintAddress'])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new SplTokenParseTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.SplTokenParseTask
       * @static
       * @param {OracleJob.ISplTokenParseTask=} [properties] Properties to set
       * @returns {OracleJob.SplTokenParseTask} SplTokenParseTask instance
       */
      SplTokenParseTask.create = function create(properties) {
        return new SplTokenParseTask(properties);
      };

      /**
       * Encodes the specified SplTokenParseTask message. Does not implicitly {@apilink OracleJob.SplTokenParseTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.SplTokenParseTask
       * @static
       * @param {OracleJob.ISplTokenParseTask} message SplTokenParseTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SplTokenParseTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.tokenAccountAddress != null &&
          Object.hasOwnProperty.call(message, 'tokenAccountAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.tokenAccountAddress);
        if (
          message.mintAddress != null &&
          Object.hasOwnProperty.call(message, 'mintAddress')
        )
          writer.uint32(/* id 2, wireType 2 =*/ 18).string(message.mintAddress);
        return writer;
      };

      /**
       * Encodes the specified SplTokenParseTask message, length delimited. Does not implicitly {@apilink OracleJob.SplTokenParseTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.SplTokenParseTask
       * @static
       * @param {OracleJob.ISplTokenParseTask} message SplTokenParseTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SplTokenParseTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SplTokenParseTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.SplTokenParseTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.SplTokenParseTask} SplTokenParseTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SplTokenParseTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.SplTokenParseTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.tokenAccountAddress = reader.string();
              break;
            }
            case 2: {
              message.mintAddress = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SplTokenParseTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.SplTokenParseTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.SplTokenParseTask} SplTokenParseTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SplTokenParseTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SplTokenParseTask message.
       * @function verify
       * @memberof OracleJob.SplTokenParseTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SplTokenParseTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (
          message.tokenAccountAddress != null &&
          message.hasOwnProperty('tokenAccountAddress')
        ) {
          properties.AccountAddress = 1;
          if (!$util.isString(message.tokenAccountAddress))
            return 'tokenAccountAddress: string expected';
        }
        if (
          message.mintAddress != null &&
          message.hasOwnProperty('mintAddress')
        ) {
          if (properties.AccountAddress === 1)
            return 'AccountAddress: multiple values';
          properties.AccountAddress = 1;
          if (!$util.isString(message.mintAddress))
            return 'mintAddress: string expected';
        }
        return null;
      };

      /**
       * Creates a SplTokenParseTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.SplTokenParseTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.SplTokenParseTask} SplTokenParseTask
       */
      SplTokenParseTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.SplTokenParseTask) return object;
        var message = new $root.OracleJob.SplTokenParseTask();
        if (object.tokenAccountAddress != null)
          message.tokenAccountAddress = String(object.tokenAccountAddress);
        if (object.mintAddress != null)
          message.mintAddress = String(object.mintAddress);
        return message;
      };

      /**
       * Creates a plain object from a SplTokenParseTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.SplTokenParseTask
       * @static
       * @param {OracleJob.SplTokenParseTask} message SplTokenParseTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SplTokenParseTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (
          message.tokenAccountAddress != null &&
          message.hasOwnProperty('tokenAccountAddress')
        ) {
          object.tokenAccountAddress = message.tokenAccountAddress;
          if (options.oneofs) object.AccountAddress = 'tokenAccountAddress';
        }
        if (
          message.mintAddress != null &&
          message.hasOwnProperty('mintAddress')
        ) {
          object.mintAddress = message.mintAddress;
          if (options.oneofs) object.AccountAddress = 'mintAddress';
        }
        return object;
      };

      /**
       * Converts this SplTokenParseTask to JSON.
       * @function toJSON
       * @memberof OracleJob.SplTokenParseTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SplTokenParseTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for SplTokenParseTask
       * @function getTypeUrl
       * @memberof OracleJob.SplTokenParseTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      SplTokenParseTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.SplTokenParseTask';
      };

      return SplTokenParseTask;
    })();

    OracleJob.DefiKingdomsTask = (function () {
      /**
       * Properties of a DefiKingdomsTask.
       * @memberof OracleJob
       * @interface IDefiKingdomsTask
       * @property {string|null} [provider] The RPC provider to use for the swap.
       * @property {OracleJob.DefiKingdomsTask.IToken|null} [inToken] The input token of the swap.
       * @property {OracleJob.DefiKingdomsTask.IToken|null} [outToken] The output token of the swap.
       */

      /**
       * Constructs a new DefiKingdomsTask.
       * @memberof OracleJob
       * @classdesc Fetch the swap price from DefiKingdoms.
       * @implements IDefiKingdomsTask
       * @constructor
       * @param {OracleJob.IDefiKingdomsTask=} [properties] Properties to set
       */
      function DefiKingdomsTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The RPC provider to use for the swap.
       * @member {string} provider
       * @memberof OracleJob.DefiKingdomsTask
       * @instance
       */
      DefiKingdomsTask.prototype.provider = '';

      /**
       * The input token of the swap.
       * @member {OracleJob.DefiKingdomsTask.IToken|null|undefined} inToken
       * @memberof OracleJob.DefiKingdomsTask
       * @instance
       */
      DefiKingdomsTask.prototype.inToken = null;

      /**
       * The output token of the swap.
       * @member {OracleJob.DefiKingdomsTask.IToken|null|undefined} outToken
       * @memberof OracleJob.DefiKingdomsTask
       * @instance
       */
      DefiKingdomsTask.prototype.outToken = null;

      /**
       * Creates a new DefiKingdomsTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.DefiKingdomsTask
       * @static
       * @param {OracleJob.IDefiKingdomsTask=} [properties] Properties to set
       * @returns {OracleJob.DefiKingdomsTask} DefiKingdomsTask instance
       */
      DefiKingdomsTask.create = function create(properties) {
        return new DefiKingdomsTask(properties);
      };

      /**
       * Encodes the specified DefiKingdomsTask message. Does not implicitly {@apilink OracleJob.DefiKingdomsTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.DefiKingdomsTask
       * @static
       * @param {OracleJob.IDefiKingdomsTask} message DefiKingdomsTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DefiKingdomsTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.provider != null &&
          Object.hasOwnProperty.call(message, 'provider')
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.provider);
        if (
          message.inToken != null &&
          Object.hasOwnProperty.call(message, 'inToken')
        )
          $root.OracleJob.DefiKingdomsTask.Token.encode(
            message.inToken,
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
        if (
          message.outToken != null &&
          Object.hasOwnProperty.call(message, 'outToken')
        )
          $root.OracleJob.DefiKingdomsTask.Token.encode(
            message.outToken,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified DefiKingdomsTask message, length delimited. Does not implicitly {@apilink OracleJob.DefiKingdomsTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.DefiKingdomsTask
       * @static
       * @param {OracleJob.IDefiKingdomsTask} message DefiKingdomsTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      DefiKingdomsTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a DefiKingdomsTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.DefiKingdomsTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.DefiKingdomsTask} DefiKingdomsTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DefiKingdomsTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.DefiKingdomsTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.provider = reader.string();
              break;
            }
            case 2: {
              message.inToken = $root.OracleJob.DefiKingdomsTask.Token.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 3: {
              message.outToken = $root.OracleJob.DefiKingdomsTask.Token.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a DefiKingdomsTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.DefiKingdomsTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.DefiKingdomsTask} DefiKingdomsTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      DefiKingdomsTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a DefiKingdomsTask message.
       * @function verify
       * @memberof OracleJob.DefiKingdomsTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      DefiKingdomsTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.provider != null && message.hasOwnProperty('provider'))
          if (!$util.isString(message.provider))
            return 'provider: string expected';
        if (message.inToken != null && message.hasOwnProperty('inToken')) {
          var error = $root.OracleJob.DefiKingdomsTask.Token.verify(
            message.inToken
          );
          if (error) return 'inToken.' + error;
        }
        if (message.outToken != null && message.hasOwnProperty('outToken')) {
          var error = $root.OracleJob.DefiKingdomsTask.Token.verify(
            message.outToken
          );
          if (error) return 'outToken.' + error;
        }
        return null;
      };

      /**
       * Creates a DefiKingdomsTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.DefiKingdomsTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.DefiKingdomsTask} DefiKingdomsTask
       */
      DefiKingdomsTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.DefiKingdomsTask) return object;
        var message = new $root.OracleJob.DefiKingdomsTask();
        if (object.provider != null) message.provider = String(object.provider);
        if (object.inToken != null) {
          if (typeof object.inToken !== 'object')
            throw TypeError(
              '.OracleJob.DefiKingdomsTask.inToken: object expected'
            );
          message.inToken = $root.OracleJob.DefiKingdomsTask.Token.fromObject(
            object.inToken
          );
        }
        if (object.outToken != null) {
          if (typeof object.outToken !== 'object')
            throw TypeError(
              '.OracleJob.DefiKingdomsTask.outToken: object expected'
            );
          message.outToken = $root.OracleJob.DefiKingdomsTask.Token.fromObject(
            object.outToken
          );
        }
        return message;
      };

      /**
       * Creates a plain object from a DefiKingdomsTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.DefiKingdomsTask
       * @static
       * @param {OracleJob.DefiKingdomsTask} message DefiKingdomsTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      DefiKingdomsTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.provider = '';
          object.inToken = null;
          object.outToken = null;
        }
        if (message.provider != null && message.hasOwnProperty('provider'))
          object.provider = message.provider;
        if (message.inToken != null && message.hasOwnProperty('inToken'))
          object.inToken = $root.OracleJob.DefiKingdomsTask.Token.toObject(
            message.inToken,
            options
          );
        if (message.outToken != null && message.hasOwnProperty('outToken'))
          object.outToken = $root.OracleJob.DefiKingdomsTask.Token.toObject(
            message.outToken,
            options
          );
        return object;
      };

      /**
       * Converts this DefiKingdomsTask to JSON.
       * @function toJSON
       * @memberof OracleJob.DefiKingdomsTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      DefiKingdomsTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for DefiKingdomsTask
       * @function getTypeUrl
       * @memberof OracleJob.DefiKingdomsTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      DefiKingdomsTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.DefiKingdomsTask';
      };

      DefiKingdomsTask.Token = (function () {
        /**
         * Properties of a Token.
         * @memberof OracleJob.DefiKingdomsTask
         * @interface IToken
         * @property {string|null} [address] The address of the token.
         * @property {number|null} [decimals] The number of decimal places for a token.
         */

        /**
         * Constructs a new Token.
         * @memberof OracleJob.DefiKingdomsTask
         * @classdesc Represents a Token.
         * @implements IToken
         * @constructor
         * @param {OracleJob.DefiKingdomsTask.IToken=} [properties] Properties to set
         */
        function Token(properties) {
          if (properties)
            for (
              var keys = Object.keys(properties), i = 0;
              i < keys.length;
              ++i
            )
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
        }

        /**
         * The address of the token.
         * @member {string} address
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @instance
         */
        Token.prototype.address = '';

        /**
         * The number of decimal places for a token.
         * @member {number} decimals
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @instance
         */
        Token.prototype.decimals = 0;

        /**
         * Creates a new Token instance using the specified properties.
         * @function create
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @static
         * @param {OracleJob.DefiKingdomsTask.IToken=} [properties] Properties to set
         * @returns {OracleJob.DefiKingdomsTask.Token} Token instance
         */
        Token.create = function create(properties) {
          return new Token(properties);
        };

        /**
         * Encodes the specified Token message. Does not implicitly {@apilink OracleJob.DefiKingdomsTask.Token.verify|verify} messages.
         * @function encode
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @static
         * @param {OracleJob.DefiKingdomsTask.IToken} message Token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Token.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (
            message.address != null &&
            Object.hasOwnProperty.call(message, 'address')
          )
            writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.address);
          if (
            message.decimals != null &&
            Object.hasOwnProperty.call(message, 'decimals')
          )
            writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.decimals);
          return writer;
        };

        /**
         * Encodes the specified Token message, length delimited. Does not implicitly {@apilink OracleJob.DefiKingdomsTask.Token.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @static
         * @param {OracleJob.DefiKingdomsTask.IToken} message Token message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Token.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Token message from the specified reader or buffer.
         * @function decode
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OracleJob.DefiKingdomsTask.Token} Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Token.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.OracleJob.DefiKingdomsTask.Token();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.address = reader.string();
                break;
              }
              case 2: {
                message.decimals = reader.int32();
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes a Token message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OracleJob.DefiKingdomsTask.Token} Token
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Token.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Token message.
         * @function verify
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Token.verify = function verify(message) {
          if (typeof message !== 'object' || message === null)
            return 'object expected';
          if (message.address != null && message.hasOwnProperty('address'))
            if (!$util.isString(message.address))
              return 'address: string expected';
          if (message.decimals != null && message.hasOwnProperty('decimals'))
            if (!$util.isInteger(message.decimals))
              return 'decimals: integer expected';
          return null;
        };

        /**
         * Creates a Token message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OracleJob.DefiKingdomsTask.Token} Token
         */
        Token.fromObject = function fromObject(object) {
          if (object instanceof $root.OracleJob.DefiKingdomsTask.Token)
            return object;
          var message = new $root.OracleJob.DefiKingdomsTask.Token();
          if (object.address != null) message.address = String(object.address);
          if (object.decimals != null) message.decimals = object.decimals | 0;
          return message;
        };

        /**
         * Creates a plain object from a Token message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @static
         * @param {OracleJob.DefiKingdomsTask.Token} message Token
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Token.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.defaults) {
            object.address = '';
            object.decimals = 0;
          }
          if (message.address != null && message.hasOwnProperty('address'))
            object.address = message.address;
          if (message.decimals != null && message.hasOwnProperty('decimals'))
            object.decimals = message.decimals;
          return object;
        };

        /**
         * Converts this Token to JSON.
         * @function toJSON
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Token.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for Token
         * @function getTypeUrl
         * @memberof OracleJob.DefiKingdomsTask.Token
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        Token.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/OracleJob.DefiKingdomsTask.Token';
        };

        return Token;
      })();

      return DefiKingdomsTask;
    })();

    OracleJob.UniswapExchangeRateTask = (function () {
      /**
       * Properties of an UniswapExchangeRateTask.
       * @memberof OracleJob
       * @interface IUniswapExchangeRateTask
       * @property {string|null} [inTokenAddress] The input token address.
       * @property {string|null} [outTokenAddress] The output token address.
       * @property {number|null} [inTokenAmount] The amount of tokens to swap.
       * @property {number|null} [slippage] The allowable slippage in percent for the swap.
       * @property {string|null} [provider] The RPC provider to use for the swap.
       */

      /**
       * Constructs a new UniswapExchangeRateTask.
       * @memberof OracleJob
       * @classdesc Fetch the swap price from UniSwap.
       * @implements IUniswapExchangeRateTask
       * @constructor
       * @param {OracleJob.IUniswapExchangeRateTask=} [properties] Properties to set
       */
      function UniswapExchangeRateTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The input token address.
       * @member {string} inTokenAddress
       * @memberof OracleJob.UniswapExchangeRateTask
       * @instance
       */
      UniswapExchangeRateTask.prototype.inTokenAddress = '';

      /**
       * The output token address.
       * @member {string} outTokenAddress
       * @memberof OracleJob.UniswapExchangeRateTask
       * @instance
       */
      UniswapExchangeRateTask.prototype.outTokenAddress = '';

      /**
       * The amount of tokens to swap.
       * @member {number} inTokenAmount
       * @memberof OracleJob.UniswapExchangeRateTask
       * @instance
       */
      UniswapExchangeRateTask.prototype.inTokenAmount = 0;

      /**
       * The allowable slippage in percent for the swap.
       * @member {number} slippage
       * @memberof OracleJob.UniswapExchangeRateTask
       * @instance
       */
      UniswapExchangeRateTask.prototype.slippage = 0;

      /**
       * The RPC provider to use for the swap.
       * @member {string} provider
       * @memberof OracleJob.UniswapExchangeRateTask
       * @instance
       */
      UniswapExchangeRateTask.prototype.provider = '';

      /**
       * Creates a new UniswapExchangeRateTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.UniswapExchangeRateTask
       * @static
       * @param {OracleJob.IUniswapExchangeRateTask=} [properties] Properties to set
       * @returns {OracleJob.UniswapExchangeRateTask} UniswapExchangeRateTask instance
       */
      UniswapExchangeRateTask.create = function create(properties) {
        return new UniswapExchangeRateTask(properties);
      };

      /**
       * Encodes the specified UniswapExchangeRateTask message. Does not implicitly {@apilink OracleJob.UniswapExchangeRateTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.UniswapExchangeRateTask
       * @static
       * @param {OracleJob.IUniswapExchangeRateTask} message UniswapExchangeRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      UniswapExchangeRateTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.inTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'inTokenAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.inTokenAddress);
        if (
          message.outTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'outTokenAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.outTokenAddress);
        if (
          message.inTokenAmount != null &&
          Object.hasOwnProperty.call(message, 'inTokenAmount')
        )
          writer
            .uint32(/* id 3, wireType 1 =*/ 25)
            .double(message.inTokenAmount);
        if (
          message.slippage != null &&
          Object.hasOwnProperty.call(message, 'slippage')
        )
          writer.uint32(/* id 4, wireType 1 =*/ 33).double(message.slippage);
        if (
          message.provider != null &&
          Object.hasOwnProperty.call(message, 'provider')
        )
          writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.provider);
        return writer;
      };

      /**
       * Encodes the specified UniswapExchangeRateTask message, length delimited. Does not implicitly {@apilink OracleJob.UniswapExchangeRateTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.UniswapExchangeRateTask
       * @static
       * @param {OracleJob.IUniswapExchangeRateTask} message UniswapExchangeRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      UniswapExchangeRateTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an UniswapExchangeRateTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.UniswapExchangeRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.UniswapExchangeRateTask} UniswapExchangeRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      UniswapExchangeRateTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.UniswapExchangeRateTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.inTokenAddress = reader.string();
              break;
            }
            case 2: {
              message.outTokenAddress = reader.string();
              break;
            }
            case 3: {
              message.inTokenAmount = reader.double();
              break;
            }
            case 4: {
              message.slippage = reader.double();
              break;
            }
            case 5: {
              message.provider = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an UniswapExchangeRateTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.UniswapExchangeRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.UniswapExchangeRateTask} UniswapExchangeRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      UniswapExchangeRateTask.decodeDelimited = function decodeDelimited(
        reader
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an UniswapExchangeRateTask message.
       * @function verify
       * @memberof OracleJob.UniswapExchangeRateTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      UniswapExchangeRateTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          if (!$util.isString(message.inTokenAddress))
            return 'inTokenAddress: string expected';
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          if (!$util.isString(message.outTokenAddress))
            return 'outTokenAddress: string expected';
        if (
          message.inTokenAmount != null &&
          message.hasOwnProperty('inTokenAmount')
        )
          if (typeof message.inTokenAmount !== 'number')
            return 'inTokenAmount: number expected';
        if (message.slippage != null && message.hasOwnProperty('slippage'))
          if (typeof message.slippage !== 'number')
            return 'slippage: number expected';
        if (message.provider != null && message.hasOwnProperty('provider'))
          if (!$util.isString(message.provider))
            return 'provider: string expected';
        return null;
      };

      /**
       * Creates an UniswapExchangeRateTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.UniswapExchangeRateTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.UniswapExchangeRateTask} UniswapExchangeRateTask
       */
      UniswapExchangeRateTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.UniswapExchangeRateTask)
          return object;
        var message = new $root.OracleJob.UniswapExchangeRateTask();
        if (object.inTokenAddress != null)
          message.inTokenAddress = String(object.inTokenAddress);
        if (object.outTokenAddress != null)
          message.outTokenAddress = String(object.outTokenAddress);
        if (object.inTokenAmount != null)
          message.inTokenAmount = Number(object.inTokenAmount);
        if (object.slippage != null) message.slippage = Number(object.slippage);
        if (object.provider != null) message.provider = String(object.provider);
        return message;
      };

      /**
       * Creates a plain object from an UniswapExchangeRateTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.UniswapExchangeRateTask
       * @static
       * @param {OracleJob.UniswapExchangeRateTask} message UniswapExchangeRateTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      UniswapExchangeRateTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.inTokenAddress = '';
          object.outTokenAddress = '';
          object.inTokenAmount = 0;
          object.slippage = 0;
          object.provider = '';
        }
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          object.inTokenAddress = message.inTokenAddress;
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          object.outTokenAddress = message.outTokenAddress;
        if (
          message.inTokenAmount != null &&
          message.hasOwnProperty('inTokenAmount')
        )
          object.inTokenAmount =
            options.json && !isFinite(message.inTokenAmount)
              ? String(message.inTokenAmount)
              : message.inTokenAmount;
        if (message.slippage != null && message.hasOwnProperty('slippage'))
          object.slippage =
            options.json && !isFinite(message.slippage)
              ? String(message.slippage)
              : message.slippage;
        if (message.provider != null && message.hasOwnProperty('provider'))
          object.provider = message.provider;
        return object;
      };

      /**
       * Converts this UniswapExchangeRateTask to JSON.
       * @function toJSON
       * @memberof OracleJob.UniswapExchangeRateTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      UniswapExchangeRateTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for UniswapExchangeRateTask
       * @function getTypeUrl
       * @memberof OracleJob.UniswapExchangeRateTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      UniswapExchangeRateTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.UniswapExchangeRateTask';
      };

      return UniswapExchangeRateTask;
    })();

    OracleJob.SushiswapExchangeRateTask = (function () {
      /**
       * Properties of a SushiswapExchangeRateTask.
       * @memberof OracleJob
       * @interface ISushiswapExchangeRateTask
       * @property {string|null} [inTokenAddress] The input token address.
       * @property {string|null} [outTokenAddress] The output token address.
       * @property {number|null} [inTokenAmount] The amount of tokens to swap.
       * @property {number|null} [slippage] The allowable slippage in percent for the swap.
       * @property {string|null} [provider] The RPC provider to use for the swap.
       */

      /**
       * Constructs a new SushiswapExchangeRateTask.
       * @memberof OracleJob
       * @classdesc Fetch the swap price from SushiSwap.
       * @implements ISushiswapExchangeRateTask
       * @constructor
       * @param {OracleJob.ISushiswapExchangeRateTask=} [properties] Properties to set
       */
      function SushiswapExchangeRateTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The input token address.
       * @member {string} inTokenAddress
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @instance
       */
      SushiswapExchangeRateTask.prototype.inTokenAddress = '';

      /**
       * The output token address.
       * @member {string} outTokenAddress
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @instance
       */
      SushiswapExchangeRateTask.prototype.outTokenAddress = '';

      /**
       * The amount of tokens to swap.
       * @member {number} inTokenAmount
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @instance
       */
      SushiswapExchangeRateTask.prototype.inTokenAmount = 0;

      /**
       * The allowable slippage in percent for the swap.
       * @member {number} slippage
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @instance
       */
      SushiswapExchangeRateTask.prototype.slippage = 0;

      /**
       * The RPC provider to use for the swap.
       * @member {string} provider
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @instance
       */
      SushiswapExchangeRateTask.prototype.provider = '';

      /**
       * Creates a new SushiswapExchangeRateTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @static
       * @param {OracleJob.ISushiswapExchangeRateTask=} [properties] Properties to set
       * @returns {OracleJob.SushiswapExchangeRateTask} SushiswapExchangeRateTask instance
       */
      SushiswapExchangeRateTask.create = function create(properties) {
        return new SushiswapExchangeRateTask(properties);
      };

      /**
       * Encodes the specified SushiswapExchangeRateTask message. Does not implicitly {@apilink OracleJob.SushiswapExchangeRateTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @static
       * @param {OracleJob.ISushiswapExchangeRateTask} message SushiswapExchangeRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SushiswapExchangeRateTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.inTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'inTokenAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.inTokenAddress);
        if (
          message.outTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'outTokenAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.outTokenAddress);
        if (
          message.inTokenAmount != null &&
          Object.hasOwnProperty.call(message, 'inTokenAmount')
        )
          writer
            .uint32(/* id 3, wireType 1 =*/ 25)
            .double(message.inTokenAmount);
        if (
          message.slippage != null &&
          Object.hasOwnProperty.call(message, 'slippage')
        )
          writer.uint32(/* id 4, wireType 1 =*/ 33).double(message.slippage);
        if (
          message.provider != null &&
          Object.hasOwnProperty.call(message, 'provider')
        )
          writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.provider);
        return writer;
      };

      /**
       * Encodes the specified SushiswapExchangeRateTask message, length delimited. Does not implicitly {@apilink OracleJob.SushiswapExchangeRateTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @static
       * @param {OracleJob.ISushiswapExchangeRateTask} message SushiswapExchangeRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SushiswapExchangeRateTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SushiswapExchangeRateTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.SushiswapExchangeRateTask} SushiswapExchangeRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SushiswapExchangeRateTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.SushiswapExchangeRateTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.inTokenAddress = reader.string();
              break;
            }
            case 2: {
              message.outTokenAddress = reader.string();
              break;
            }
            case 3: {
              message.inTokenAmount = reader.double();
              break;
            }
            case 4: {
              message.slippage = reader.double();
              break;
            }
            case 5: {
              message.provider = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SushiswapExchangeRateTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.SushiswapExchangeRateTask} SushiswapExchangeRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SushiswapExchangeRateTask.decodeDelimited = function decodeDelimited(
        reader
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SushiswapExchangeRateTask message.
       * @function verify
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SushiswapExchangeRateTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          if (!$util.isString(message.inTokenAddress))
            return 'inTokenAddress: string expected';
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          if (!$util.isString(message.outTokenAddress))
            return 'outTokenAddress: string expected';
        if (
          message.inTokenAmount != null &&
          message.hasOwnProperty('inTokenAmount')
        )
          if (typeof message.inTokenAmount !== 'number')
            return 'inTokenAmount: number expected';
        if (message.slippage != null && message.hasOwnProperty('slippage'))
          if (typeof message.slippage !== 'number')
            return 'slippage: number expected';
        if (message.provider != null && message.hasOwnProperty('provider'))
          if (!$util.isString(message.provider))
            return 'provider: string expected';
        return null;
      };

      /**
       * Creates a SushiswapExchangeRateTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.SushiswapExchangeRateTask} SushiswapExchangeRateTask
       */
      SushiswapExchangeRateTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.SushiswapExchangeRateTask)
          return object;
        var message = new $root.OracleJob.SushiswapExchangeRateTask();
        if (object.inTokenAddress != null)
          message.inTokenAddress = String(object.inTokenAddress);
        if (object.outTokenAddress != null)
          message.outTokenAddress = String(object.outTokenAddress);
        if (object.inTokenAmount != null)
          message.inTokenAmount = Number(object.inTokenAmount);
        if (object.slippage != null) message.slippage = Number(object.slippage);
        if (object.provider != null) message.provider = String(object.provider);
        return message;
      };

      /**
       * Creates a plain object from a SushiswapExchangeRateTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @static
       * @param {OracleJob.SushiswapExchangeRateTask} message SushiswapExchangeRateTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SushiswapExchangeRateTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.inTokenAddress = '';
          object.outTokenAddress = '';
          object.inTokenAmount = 0;
          object.slippage = 0;
          object.provider = '';
        }
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          object.inTokenAddress = message.inTokenAddress;
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          object.outTokenAddress = message.outTokenAddress;
        if (
          message.inTokenAmount != null &&
          message.hasOwnProperty('inTokenAmount')
        )
          object.inTokenAmount =
            options.json && !isFinite(message.inTokenAmount)
              ? String(message.inTokenAmount)
              : message.inTokenAmount;
        if (message.slippage != null && message.hasOwnProperty('slippage'))
          object.slippage =
            options.json && !isFinite(message.slippage)
              ? String(message.slippage)
              : message.slippage;
        if (message.provider != null && message.hasOwnProperty('provider'))
          object.provider = message.provider;
        return object;
      };

      /**
       * Converts this SushiswapExchangeRateTask to JSON.
       * @function toJSON
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SushiswapExchangeRateTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for SushiswapExchangeRateTask
       * @function getTypeUrl
       * @memberof OracleJob.SushiswapExchangeRateTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      SushiswapExchangeRateTask.getTypeUrl = function getTypeUrl(
        typeUrlPrefix
      ) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.SushiswapExchangeRateTask';
      };

      return SushiswapExchangeRateTask;
    })();

    OracleJob.PancakeswapExchangeRateTask = (function () {
      /**
       * Properties of a PancakeswapExchangeRateTask.
       * @memberof OracleJob
       * @interface IPancakeswapExchangeRateTask
       * @property {string|null} [inTokenAddress] The input token address.
       * @property {string|null} [outTokenAddress] The output token address.
       * @property {number|null} [inTokenAmount] The amount of tokens to swap.
       * @property {number|null} [slippage] The allowable slippage in percent for the swap.
       * @property {string|null} [provider] The RPC provider to use for the swap.
       */

      /**
       * Constructs a new PancakeswapExchangeRateTask.
       * @memberof OracleJob
       * @classdesc Fetch the swap price from PancakeSwap.
       * @implements IPancakeswapExchangeRateTask
       * @constructor
       * @param {OracleJob.IPancakeswapExchangeRateTask=} [properties] Properties to set
       */
      function PancakeswapExchangeRateTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The input token address.
       * @member {string} inTokenAddress
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @instance
       */
      PancakeswapExchangeRateTask.prototype.inTokenAddress = '';

      /**
       * The output token address.
       * @member {string} outTokenAddress
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @instance
       */
      PancakeswapExchangeRateTask.prototype.outTokenAddress = '';

      /**
       * The amount of tokens to swap.
       * @member {number} inTokenAmount
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @instance
       */
      PancakeswapExchangeRateTask.prototype.inTokenAmount = 0;

      /**
       * The allowable slippage in percent for the swap.
       * @member {number} slippage
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @instance
       */
      PancakeswapExchangeRateTask.prototype.slippage = 0;

      /**
       * The RPC provider to use for the swap.
       * @member {string} provider
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @instance
       */
      PancakeswapExchangeRateTask.prototype.provider = '';

      /**
       * Creates a new PancakeswapExchangeRateTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @static
       * @param {OracleJob.IPancakeswapExchangeRateTask=} [properties] Properties to set
       * @returns {OracleJob.PancakeswapExchangeRateTask} PancakeswapExchangeRateTask instance
       */
      PancakeswapExchangeRateTask.create = function create(properties) {
        return new PancakeswapExchangeRateTask(properties);
      };

      /**
       * Encodes the specified PancakeswapExchangeRateTask message. Does not implicitly {@apilink OracleJob.PancakeswapExchangeRateTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @static
       * @param {OracleJob.IPancakeswapExchangeRateTask} message PancakeswapExchangeRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PancakeswapExchangeRateTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.inTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'inTokenAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.inTokenAddress);
        if (
          message.outTokenAddress != null &&
          Object.hasOwnProperty.call(message, 'outTokenAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.outTokenAddress);
        if (
          message.inTokenAmount != null &&
          Object.hasOwnProperty.call(message, 'inTokenAmount')
        )
          writer
            .uint32(/* id 3, wireType 1 =*/ 25)
            .double(message.inTokenAmount);
        if (
          message.slippage != null &&
          Object.hasOwnProperty.call(message, 'slippage')
        )
          writer.uint32(/* id 4, wireType 1 =*/ 33).double(message.slippage);
        if (
          message.provider != null &&
          Object.hasOwnProperty.call(message, 'provider')
        )
          writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.provider);
        return writer;
      };

      /**
       * Encodes the specified PancakeswapExchangeRateTask message, length delimited. Does not implicitly {@apilink OracleJob.PancakeswapExchangeRateTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @static
       * @param {OracleJob.IPancakeswapExchangeRateTask} message PancakeswapExchangeRateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      PancakeswapExchangeRateTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a PancakeswapExchangeRateTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.PancakeswapExchangeRateTask} PancakeswapExchangeRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PancakeswapExchangeRateTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.PancakeswapExchangeRateTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.inTokenAddress = reader.string();
              break;
            }
            case 2: {
              message.outTokenAddress = reader.string();
              break;
            }
            case 3: {
              message.inTokenAmount = reader.double();
              break;
            }
            case 4: {
              message.slippage = reader.double();
              break;
            }
            case 5: {
              message.provider = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a PancakeswapExchangeRateTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.PancakeswapExchangeRateTask} PancakeswapExchangeRateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      PancakeswapExchangeRateTask.decodeDelimited = function decodeDelimited(
        reader
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a PancakeswapExchangeRateTask message.
       * @function verify
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      PancakeswapExchangeRateTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          if (!$util.isString(message.inTokenAddress))
            return 'inTokenAddress: string expected';
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          if (!$util.isString(message.outTokenAddress))
            return 'outTokenAddress: string expected';
        if (
          message.inTokenAmount != null &&
          message.hasOwnProperty('inTokenAmount')
        )
          if (typeof message.inTokenAmount !== 'number')
            return 'inTokenAmount: number expected';
        if (message.slippage != null && message.hasOwnProperty('slippage'))
          if (typeof message.slippage !== 'number')
            return 'slippage: number expected';
        if (message.provider != null && message.hasOwnProperty('provider'))
          if (!$util.isString(message.provider))
            return 'provider: string expected';
        return null;
      };

      /**
       * Creates a PancakeswapExchangeRateTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.PancakeswapExchangeRateTask} PancakeswapExchangeRateTask
       */
      PancakeswapExchangeRateTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.PancakeswapExchangeRateTask)
          return object;
        var message = new $root.OracleJob.PancakeswapExchangeRateTask();
        if (object.inTokenAddress != null)
          message.inTokenAddress = String(object.inTokenAddress);
        if (object.outTokenAddress != null)
          message.outTokenAddress = String(object.outTokenAddress);
        if (object.inTokenAmount != null)
          message.inTokenAmount = Number(object.inTokenAmount);
        if (object.slippage != null) message.slippage = Number(object.slippage);
        if (object.provider != null) message.provider = String(object.provider);
        return message;
      };

      /**
       * Creates a plain object from a PancakeswapExchangeRateTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @static
       * @param {OracleJob.PancakeswapExchangeRateTask} message PancakeswapExchangeRateTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      PancakeswapExchangeRateTask.toObject = function toObject(
        message,
        options
      ) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.inTokenAddress = '';
          object.outTokenAddress = '';
          object.inTokenAmount = 0;
          object.slippage = 0;
          object.provider = '';
        }
        if (
          message.inTokenAddress != null &&
          message.hasOwnProperty('inTokenAddress')
        )
          object.inTokenAddress = message.inTokenAddress;
        if (
          message.outTokenAddress != null &&
          message.hasOwnProperty('outTokenAddress')
        )
          object.outTokenAddress = message.outTokenAddress;
        if (
          message.inTokenAmount != null &&
          message.hasOwnProperty('inTokenAmount')
        )
          object.inTokenAmount =
            options.json && !isFinite(message.inTokenAmount)
              ? String(message.inTokenAmount)
              : message.inTokenAmount;
        if (message.slippage != null && message.hasOwnProperty('slippage'))
          object.slippage =
            options.json && !isFinite(message.slippage)
              ? String(message.slippage)
              : message.slippage;
        if (message.provider != null && message.hasOwnProperty('provider'))
          object.provider = message.provider;
        return object;
      };

      /**
       * Converts this PancakeswapExchangeRateTask to JSON.
       * @function toJSON
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      PancakeswapExchangeRateTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for PancakeswapExchangeRateTask
       * @function getTypeUrl
       * @memberof OracleJob.PancakeswapExchangeRateTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      PancakeswapExchangeRateTask.getTypeUrl = function getTypeUrl(
        typeUrlPrefix
      ) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.PancakeswapExchangeRateTask';
      };

      return PancakeswapExchangeRateTask;
    })();

    OracleJob.CacheTask = (function () {
      /**
       * Properties of a CacheTask.
       * @memberof OracleJob
       * @interface ICacheTask
       * @property {Array.<OracleJob.CacheTask.ICacheItem>|null} [cacheItems] A list of cached variables to reference in the job with `${VARIABLE_NAME}`.
       */

      /**
       * Constructs a new CacheTask.
       * @memberof OracleJob
       * @classdesc Execute a job and store the result in a variable to reference later.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The input
       *
       * _**Example**_: CacheTask storing ${ONE} = 1
       *
       * ```json
       * { "cacheTask": { "cacheItems": [ { "variableName": "ONE", "job": { "tasks": [ { "valueTask": { "value": 1 } } ] } } ] } }
       * ```
       * @implements ICacheTask
       * @constructor
       * @param {OracleJob.ICacheTask=} [properties] Properties to set
       */
      function CacheTask(properties) {
        this.cacheItems = [];
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * A list of cached variables to reference in the job with `${VARIABLE_NAME}`.
       * @member {Array.<OracleJob.CacheTask.ICacheItem>} cacheItems
       * @memberof OracleJob.CacheTask
       * @instance
       */
      CacheTask.prototype.cacheItems = $util.emptyArray;

      /**
       * Creates a new CacheTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.CacheTask
       * @static
       * @param {OracleJob.ICacheTask=} [properties] Properties to set
       * @returns {OracleJob.CacheTask} CacheTask instance
       */
      CacheTask.create = function create(properties) {
        return new CacheTask(properties);
      };

      /**
       * Encodes the specified CacheTask message. Does not implicitly {@apilink OracleJob.CacheTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.CacheTask
       * @static
       * @param {OracleJob.ICacheTask} message CacheTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CacheTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.cacheItems != null && message.cacheItems.length)
          for (var i = 0; i < message.cacheItems.length; ++i)
            $root.OracleJob.CacheTask.CacheItem.encode(
              message.cacheItems[i],
              writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
            ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified CacheTask message, length delimited. Does not implicitly {@apilink OracleJob.CacheTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.CacheTask
       * @static
       * @param {OracleJob.ICacheTask} message CacheTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CacheTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CacheTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.CacheTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.CacheTask} CacheTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CacheTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.CacheTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              if (!(message.cacheItems && message.cacheItems.length))
                message.cacheItems = [];
              message.cacheItems.push(
                $root.OracleJob.CacheTask.CacheItem.decode(
                  reader,
                  reader.uint32()
                )
              );
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a CacheTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.CacheTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.CacheTask} CacheTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CacheTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CacheTask message.
       * @function verify
       * @memberof OracleJob.CacheTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CacheTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.cacheItems != null &&
          message.hasOwnProperty('cacheItems')
        ) {
          if (!Array.isArray(message.cacheItems))
            return 'cacheItems: array expected';
          for (var i = 0; i < message.cacheItems.length; ++i) {
            var error = $root.OracleJob.CacheTask.CacheItem.verify(
              message.cacheItems[i]
            );
            if (error) return 'cacheItems.' + error;
          }
        }
        return null;
      };

      /**
       * Creates a CacheTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.CacheTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.CacheTask} CacheTask
       */
      CacheTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.CacheTask) return object;
        var message = new $root.OracleJob.CacheTask();
        if (object.cacheItems) {
          if (!Array.isArray(object.cacheItems))
            throw TypeError('.OracleJob.CacheTask.cacheItems: array expected');
          message.cacheItems = [];
          for (var i = 0; i < object.cacheItems.length; ++i) {
            if (typeof object.cacheItems[i] !== 'object')
              throw TypeError(
                '.OracleJob.CacheTask.cacheItems: object expected'
              );
            message.cacheItems[i] =
              $root.OracleJob.CacheTask.CacheItem.fromObject(
                object.cacheItems[i]
              );
          }
        }
        return message;
      };

      /**
       * Creates a plain object from a CacheTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.CacheTask
       * @static
       * @param {OracleJob.CacheTask} message CacheTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CacheTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.arrays || options.defaults) object.cacheItems = [];
        if (message.cacheItems && message.cacheItems.length) {
          object.cacheItems = [];
          for (var j = 0; j < message.cacheItems.length; ++j)
            object.cacheItems[j] = $root.OracleJob.CacheTask.CacheItem.toObject(
              message.cacheItems[j],
              options
            );
        }
        return object;
      };

      /**
       * Converts this CacheTask to JSON.
       * @function toJSON
       * @memberof OracleJob.CacheTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CacheTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for CacheTask
       * @function getTypeUrl
       * @memberof OracleJob.CacheTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      CacheTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.CacheTask';
      };

      CacheTask.CacheItem = (function () {
        /**
         * Properties of a CacheItem.
         * @memberof OracleJob.CacheTask
         * @interface ICacheItem
         * @property {string|null} [variableName] The name of the variable to store in cache to reference later with `${VARIABLE_NAME}`.
         * @property {IOracleJob|null} [job] The OracleJob to execute to yield the value to store in cache.
         */

        /**
         * Constructs a new CacheItem.
         * @memberof OracleJob.CacheTask
         * @classdesc Represents a CacheItem.
         * @implements ICacheItem
         * @constructor
         * @param {OracleJob.CacheTask.ICacheItem=} [properties] Properties to set
         */
        function CacheItem(properties) {
          if (properties)
            for (
              var keys = Object.keys(properties), i = 0;
              i < keys.length;
              ++i
            )
              if (properties[keys[i]] != null)
                this[keys[i]] = properties[keys[i]];
        }

        /**
         * The name of the variable to store in cache to reference later with `${VARIABLE_NAME}`.
         * @member {string} variableName
         * @memberof OracleJob.CacheTask.CacheItem
         * @instance
         */
        CacheItem.prototype.variableName = '';

        /**
         * The OracleJob to execute to yield the value to store in cache.
         * @member {IOracleJob|null|undefined} job
         * @memberof OracleJob.CacheTask.CacheItem
         * @instance
         */
        CacheItem.prototype.job = null;

        /**
         * Creates a new CacheItem instance using the specified properties.
         * @function create
         * @memberof OracleJob.CacheTask.CacheItem
         * @static
         * @param {OracleJob.CacheTask.ICacheItem=} [properties] Properties to set
         * @returns {OracleJob.CacheTask.CacheItem} CacheItem instance
         */
        CacheItem.create = function create(properties) {
          return new CacheItem(properties);
        };

        /**
         * Encodes the specified CacheItem message. Does not implicitly {@apilink OracleJob.CacheTask.CacheItem.verify|verify} messages.
         * @function encode
         * @memberof OracleJob.CacheTask.CacheItem
         * @static
         * @param {OracleJob.CacheTask.ICacheItem} message CacheItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CacheItem.encode = function encode(message, writer) {
          if (!writer) writer = $Writer.create();
          if (
            message.variableName != null &&
            Object.hasOwnProperty.call(message, 'variableName')
          )
            writer
              .uint32(/* id 1, wireType 2 =*/ 10)
              .string(message.variableName);
          if (message.job != null && Object.hasOwnProperty.call(message, 'job'))
            $root.OracleJob.encode(
              message.job,
              writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
            ).ldelim();
          return writer;
        };

        /**
         * Encodes the specified CacheItem message, length delimited. Does not implicitly {@apilink OracleJob.CacheTask.CacheItem.verify|verify} messages.
         * @function encodeDelimited
         * @memberof OracleJob.CacheTask.CacheItem
         * @static
         * @param {OracleJob.CacheTask.ICacheItem} message CacheItem message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CacheItem.encodeDelimited = function encodeDelimited(message, writer) {
          return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CacheItem message from the specified reader or buffer.
         * @function decode
         * @memberof OracleJob.CacheTask.CacheItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {OracleJob.CacheTask.CacheItem} CacheItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CacheItem.decode = function decode(reader, length) {
          if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
          var end = length === undefined ? reader.len : reader.pos + length,
            message = new $root.OracleJob.CacheTask.CacheItem();
          while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
              case 1: {
                message.variableName = reader.string();
                break;
              }
              case 2: {
                message.job = $root.OracleJob.decode(reader, reader.uint32());
                break;
              }
              default:
                reader.skipType(tag & 7);
                break;
            }
          }
          return message;
        };

        /**
         * Decodes a CacheItem message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof OracleJob.CacheTask.CacheItem
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {OracleJob.CacheTask.CacheItem} CacheItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CacheItem.decodeDelimited = function decodeDelimited(reader) {
          if (!(reader instanceof $Reader)) reader = new $Reader(reader);
          return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CacheItem message.
         * @function verify
         * @memberof OracleJob.CacheTask.CacheItem
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CacheItem.verify = function verify(message) {
          if (typeof message !== 'object' || message === null)
            return 'object expected';
          if (
            message.variableName != null &&
            message.hasOwnProperty('variableName')
          )
            if (!$util.isString(message.variableName))
              return 'variableName: string expected';
          if (message.job != null && message.hasOwnProperty('job')) {
            var error = $root.OracleJob.verify(message.job);
            if (error) return 'job.' + error;
          }
          return null;
        };

        /**
         * Creates a CacheItem message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof OracleJob.CacheTask.CacheItem
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {OracleJob.CacheTask.CacheItem} CacheItem
         */
        CacheItem.fromObject = function fromObject(object) {
          if (object instanceof $root.OracleJob.CacheTask.CacheItem)
            return object;
          var message = new $root.OracleJob.CacheTask.CacheItem();
          if (object.variableName != null)
            message.variableName = String(object.variableName);
          if (object.job != null) {
            if (typeof object.job !== 'object')
              throw TypeError(
                '.OracleJob.CacheTask.CacheItem.job: object expected'
              );
            message.job = $root.OracleJob.fromObject(object.job);
          }
          return message;
        };

        /**
         * Creates a plain object from a CacheItem message. Also converts values to other types if specified.
         * @function toObject
         * @memberof OracleJob.CacheTask.CacheItem
         * @static
         * @param {OracleJob.CacheTask.CacheItem} message CacheItem
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CacheItem.toObject = function toObject(message, options) {
          if (!options) options = {};
          var object = {};
          if (options.defaults) {
            object.variableName = '';
            object.job = null;
          }
          if (
            message.variableName != null &&
            message.hasOwnProperty('variableName')
          )
            object.variableName = message.variableName;
          if (message.job != null && message.hasOwnProperty('job'))
            object.job = $root.OracleJob.toObject(message.job, options);
          return object;
        };

        /**
         * Converts this CacheItem to JSON.
         * @function toJSON
         * @memberof OracleJob.CacheTask.CacheItem
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CacheItem.prototype.toJSON = function toJSON() {
          return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        /**
         * Gets the default type url for CacheItem
         * @function getTypeUrl
         * @memberof OracleJob.CacheTask.CacheItem
         * @static
         * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
         * @returns {string} The default type url
         */
        CacheItem.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
          if (typeUrlPrefix === undefined) {
            typeUrlPrefix = 'type.googleapis.com';
          }
          return typeUrlPrefix + '/OracleJob.CacheTask.CacheItem';
        };

        return CacheItem;
      })();

      return CacheTask;
    })();

    OracleJob.SysclockOffsetTask = (function () {
      /**
       * Properties of a SysclockOffsetTask.
       * @memberof OracleJob
       * @interface ISysclockOffsetTask
       */

      /**
       * Constructs a new SysclockOffsetTask.
       * @memberof OracleJob
       * @classdesc Return the difference between an oracle's clock and the current timestamp at `SYSVAR_CLOCK_PUBKEY`.
       * @implements ISysclockOffsetTask
       * @constructor
       * @param {OracleJob.ISysclockOffsetTask=} [properties] Properties to set
       */
      function SysclockOffsetTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new SysclockOffsetTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.SysclockOffsetTask
       * @static
       * @param {OracleJob.ISysclockOffsetTask=} [properties] Properties to set
       * @returns {OracleJob.SysclockOffsetTask} SysclockOffsetTask instance
       */
      SysclockOffsetTask.create = function create(properties) {
        return new SysclockOffsetTask(properties);
      };

      /**
       * Encodes the specified SysclockOffsetTask message. Does not implicitly {@apilink OracleJob.SysclockOffsetTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.SysclockOffsetTask
       * @static
       * @param {OracleJob.ISysclockOffsetTask} message SysclockOffsetTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SysclockOffsetTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified SysclockOffsetTask message, length delimited. Does not implicitly {@apilink OracleJob.SysclockOffsetTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.SysclockOffsetTask
       * @static
       * @param {OracleJob.ISysclockOffsetTask} message SysclockOffsetTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SysclockOffsetTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SysclockOffsetTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.SysclockOffsetTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.SysclockOffsetTask} SysclockOffsetTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SysclockOffsetTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.SysclockOffsetTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SysclockOffsetTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.SysclockOffsetTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.SysclockOffsetTask} SysclockOffsetTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SysclockOffsetTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SysclockOffsetTask message.
       * @function verify
       * @memberof OracleJob.SysclockOffsetTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SysclockOffsetTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        return null;
      };

      /**
       * Creates a SysclockOffsetTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.SysclockOffsetTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.SysclockOffsetTask} SysclockOffsetTask
       */
      SysclockOffsetTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.SysclockOffsetTask) return object;
        return new $root.OracleJob.SysclockOffsetTask();
      };

      /**
       * Creates a plain object from a SysclockOffsetTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.SysclockOffsetTask
       * @static
       * @param {OracleJob.SysclockOffsetTask} message SysclockOffsetTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SysclockOffsetTask.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this SysclockOffsetTask to JSON.
       * @function toJSON
       * @memberof OracleJob.SysclockOffsetTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SysclockOffsetTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for SysclockOffsetTask
       * @function getTypeUrl
       * @memberof OracleJob.SysclockOffsetTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      SysclockOffsetTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.SysclockOffsetTask';
      };

      return SysclockOffsetTask;
    })();

    OracleJob.MarinadeStateTask = (function () {
      /**
       * Properties of a MarinadeStateTask.
       * @memberof OracleJob
       * @interface IMarinadeStateTask
       */

      /**
       * Constructs a new MarinadeStateTask.
       * @memberof OracleJob
       * @classdesc Represents a MarinadeStateTask.
       * @implements IMarinadeStateTask
       * @constructor
       * @param {OracleJob.IMarinadeStateTask=} [properties] Properties to set
       */
      function MarinadeStateTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * Creates a new MarinadeStateTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.MarinadeStateTask
       * @static
       * @param {OracleJob.IMarinadeStateTask=} [properties] Properties to set
       * @returns {OracleJob.MarinadeStateTask} MarinadeStateTask instance
       */
      MarinadeStateTask.create = function create(properties) {
        return new MarinadeStateTask(properties);
      };

      /**
       * Encodes the specified MarinadeStateTask message. Does not implicitly {@apilink OracleJob.MarinadeStateTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.MarinadeStateTask
       * @static
       * @param {OracleJob.IMarinadeStateTask} message MarinadeStateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MarinadeStateTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        return writer;
      };

      /**
       * Encodes the specified MarinadeStateTask message, length delimited. Does not implicitly {@apilink OracleJob.MarinadeStateTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.MarinadeStateTask
       * @static
       * @param {OracleJob.IMarinadeStateTask} message MarinadeStateTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      MarinadeStateTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a MarinadeStateTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.MarinadeStateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.MarinadeStateTask} MarinadeStateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MarinadeStateTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.MarinadeStateTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a MarinadeStateTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.MarinadeStateTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.MarinadeStateTask} MarinadeStateTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      MarinadeStateTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a MarinadeStateTask message.
       * @function verify
       * @memberof OracleJob.MarinadeStateTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      MarinadeStateTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        return null;
      };

      /**
       * Creates a MarinadeStateTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.MarinadeStateTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.MarinadeStateTask} MarinadeStateTask
       */
      MarinadeStateTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.MarinadeStateTask) return object;
        return new $root.OracleJob.MarinadeStateTask();
      };

      /**
       * Creates a plain object from a MarinadeStateTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.MarinadeStateTask
       * @static
       * @param {OracleJob.MarinadeStateTask} message MarinadeStateTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      MarinadeStateTask.toObject = function toObject() {
        return {};
      };

      /**
       * Converts this MarinadeStateTask to JSON.
       * @function toJSON
       * @memberof OracleJob.MarinadeStateTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      MarinadeStateTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for MarinadeStateTask
       * @function getTypeUrl
       * @memberof OracleJob.MarinadeStateTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      MarinadeStateTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.MarinadeStateTask';
      };

      return MarinadeStateTask;
    })();

    OracleJob.SolanaAccountDataFetchTask = (function () {
      /**
       * Properties of a SolanaAccountDataFetchTask.
       * @memberof OracleJob
       * @interface ISolanaAccountDataFetchTask
       * @property {string|null} [pubkey] The on-chain account to fetch the account data from.
       */

      /**
       * Constructs a new SolanaAccountDataFetchTask.
       * @memberof OracleJob
       * @classdesc Fetch the account data in a stringified buffer format.
       * @implements ISolanaAccountDataFetchTask
       * @constructor
       * @param {OracleJob.ISolanaAccountDataFetchTask=} [properties] Properties to set
       */
      function SolanaAccountDataFetchTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The on-chain account to fetch the account data from.
       * @member {string} pubkey
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @instance
       */
      SolanaAccountDataFetchTask.prototype.pubkey = '';

      /**
       * Creates a new SolanaAccountDataFetchTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @static
       * @param {OracleJob.ISolanaAccountDataFetchTask=} [properties] Properties to set
       * @returns {OracleJob.SolanaAccountDataFetchTask} SolanaAccountDataFetchTask instance
       */
      SolanaAccountDataFetchTask.create = function create(properties) {
        return new SolanaAccountDataFetchTask(properties);
      };

      /**
       * Encodes the specified SolanaAccountDataFetchTask message. Does not implicitly {@apilink OracleJob.SolanaAccountDataFetchTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @static
       * @param {OracleJob.ISolanaAccountDataFetchTask} message SolanaAccountDataFetchTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SolanaAccountDataFetchTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.pubkey != null &&
          Object.hasOwnProperty.call(message, 'pubkey')
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.pubkey);
        return writer;
      };

      /**
       * Encodes the specified SolanaAccountDataFetchTask message, length delimited. Does not implicitly {@apilink OracleJob.SolanaAccountDataFetchTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @static
       * @param {OracleJob.ISolanaAccountDataFetchTask} message SolanaAccountDataFetchTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      SolanaAccountDataFetchTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a SolanaAccountDataFetchTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.SolanaAccountDataFetchTask} SolanaAccountDataFetchTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SolanaAccountDataFetchTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.SolanaAccountDataFetchTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.pubkey = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a SolanaAccountDataFetchTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.SolanaAccountDataFetchTask} SolanaAccountDataFetchTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      SolanaAccountDataFetchTask.decodeDelimited = function decodeDelimited(
        reader
      ) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a SolanaAccountDataFetchTask message.
       * @function verify
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      SolanaAccountDataFetchTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.pubkey != null && message.hasOwnProperty('pubkey'))
          if (!$util.isString(message.pubkey)) return 'pubkey: string expected';
        return null;
      };

      /**
       * Creates a SolanaAccountDataFetchTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.SolanaAccountDataFetchTask} SolanaAccountDataFetchTask
       */
      SolanaAccountDataFetchTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.SolanaAccountDataFetchTask)
          return object;
        var message = new $root.OracleJob.SolanaAccountDataFetchTask();
        if (object.pubkey != null) message.pubkey = String(object.pubkey);
        return message;
      };

      /**
       * Creates a plain object from a SolanaAccountDataFetchTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @static
       * @param {OracleJob.SolanaAccountDataFetchTask} message SolanaAccountDataFetchTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      SolanaAccountDataFetchTask.toObject = function toObject(
        message,
        options
      ) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) object.pubkey = '';
        if (message.pubkey != null && message.hasOwnProperty('pubkey'))
          object.pubkey = message.pubkey;
        return object;
      };

      /**
       * Converts this SolanaAccountDataFetchTask to JSON.
       * @function toJSON
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      SolanaAccountDataFetchTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for SolanaAccountDataFetchTask
       * @function getTypeUrl
       * @memberof OracleJob.SolanaAccountDataFetchTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      SolanaAccountDataFetchTask.getTypeUrl = function getTypeUrl(
        typeUrlPrefix
      ) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.SolanaAccountDataFetchTask';
      };

      return SolanaAccountDataFetchTask;
    })();

    OracleJob.CronParseTask = (function () {
      /**
       * Properties of a CronParseTask.
       * @memberof OracleJob
       * @interface ICronParseTask
       * @property {string|null} [cronPattern] The cron pattern to parse.
       * @property {number|null} [clockOffset] The timestamp offset to calculate the next run.
       * @property {OracleJob.CronParseTask.ClockType|null} [clock] Use the TaskRunner's clock or the on-chain SYSCLOCK.
       */

      /**
       * Constructs a new CronParseTask.
       * @memberof OracleJob
       * @classdesc Return a timestamp from a crontab instruction.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A timestamp
       *
       * _**Example**_: Return the unix timestamp for the on-chain SYSCLOCK
       *
       * ```json
       * {"cronParseTask":{"cronPattern":"* * * * * *","clockOffset":0,"clock":"SYSCLOCK"}}
       * ```
       *
       * _**Example**_: Return the unix timestamp for next friday at 5pm UTC
       *
       * ```json
       * {"cronParseTask":{"cronPattern":"0 17 * * 5","clockOffset":0,"clock":0}}
       * ```
       * @implements ICronParseTask
       * @constructor
       * @param {OracleJob.ICronParseTask=} [properties] Properties to set
       */
      function CronParseTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The cron pattern to parse.
       * @member {string} cronPattern
       * @memberof OracleJob.CronParseTask
       * @instance
       */
      CronParseTask.prototype.cronPattern = '';

      /**
       * The timestamp offset to calculate the next run.
       * @member {number} clockOffset
       * @memberof OracleJob.CronParseTask
       * @instance
       */
      CronParseTask.prototype.clockOffset = 0;

      /**
       * Use the TaskRunner's clock or the on-chain SYSCLOCK.
       * @member {OracleJob.CronParseTask.ClockType} clock
       * @memberof OracleJob.CronParseTask
       * @instance
       */
      CronParseTask.prototype.clock = 0;

      /**
       * Creates a new CronParseTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.CronParseTask
       * @static
       * @param {OracleJob.ICronParseTask=} [properties] Properties to set
       * @returns {OracleJob.CronParseTask} CronParseTask instance
       */
      CronParseTask.create = function create(properties) {
        return new CronParseTask(properties);
      };

      /**
       * Encodes the specified CronParseTask message. Does not implicitly {@apilink OracleJob.CronParseTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.CronParseTask
       * @static
       * @param {OracleJob.ICronParseTask} message CronParseTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CronParseTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.cronPattern != null &&
          Object.hasOwnProperty.call(message, 'cronPattern')
        )
          writer.uint32(/* id 1, wireType 2 =*/ 10).string(message.cronPattern);
        if (
          message.clockOffset != null &&
          Object.hasOwnProperty.call(message, 'clockOffset')
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.clockOffset);
        if (
          message.clock != null &&
          Object.hasOwnProperty.call(message, 'clock')
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.clock);
        return writer;
      };

      /**
       * Encodes the specified CronParseTask message, length delimited. Does not implicitly {@apilink OracleJob.CronParseTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.CronParseTask
       * @static
       * @param {OracleJob.ICronParseTask} message CronParseTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      CronParseTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a CronParseTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.CronParseTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.CronParseTask} CronParseTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CronParseTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.CronParseTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.cronPattern = reader.string();
              break;
            }
            case 2: {
              message.clockOffset = reader.int32();
              break;
            }
            case 3: {
              message.clock = reader.int32();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a CronParseTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.CronParseTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.CronParseTask} CronParseTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      CronParseTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a CronParseTask message.
       * @function verify
       * @memberof OracleJob.CronParseTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      CronParseTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.cronPattern != null &&
          message.hasOwnProperty('cronPattern')
        )
          if (!$util.isString(message.cronPattern))
            return 'cronPattern: string expected';
        if (
          message.clockOffset != null &&
          message.hasOwnProperty('clockOffset')
        )
          if (!$util.isInteger(message.clockOffset))
            return 'clockOffset: integer expected';
        if (message.clock != null && message.hasOwnProperty('clock'))
          switch (message.clock) {
            default:
              return 'clock: enum value expected';
            case 0:
            case 1:
              break;
          }
        return null;
      };

      /**
       * Creates a CronParseTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.CronParseTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.CronParseTask} CronParseTask
       */
      CronParseTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.CronParseTask) return object;
        var message = new $root.OracleJob.CronParseTask();
        if (object.cronPattern != null)
          message.cronPattern = String(object.cronPattern);
        if (object.clockOffset != null)
          message.clockOffset = object.clockOffset | 0;
        switch (object.clock) {
          default:
            if (typeof object.clock === 'number') {
              message.clock = object.clock;
              break;
            }
            break;
          case 'ORACLE':
          case 0:
            message.clock = 0;
            break;
          case 'SYSCLOCK':
          case 1:
            message.clock = 1;
            break;
        }
        return message;
      };

      /**
       * Creates a plain object from a CronParseTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.CronParseTask
       * @static
       * @param {OracleJob.CronParseTask} message CronParseTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      CronParseTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.cronPattern = '';
          object.clockOffset = 0;
          object.clock = options.enums === String ? 'ORACLE' : 0;
        }
        if (
          message.cronPattern != null &&
          message.hasOwnProperty('cronPattern')
        )
          object.cronPattern = message.cronPattern;
        if (
          message.clockOffset != null &&
          message.hasOwnProperty('clockOffset')
        )
          object.clockOffset = message.clockOffset;
        if (message.clock != null && message.hasOwnProperty('clock'))
          object.clock =
            options.enums === String
              ? $root.OracleJob.CronParseTask.ClockType[message.clock] ===
                undefined
                ? message.clock
                : $root.OracleJob.CronParseTask.ClockType[message.clock]
              : message.clock;
        return object;
      };

      /**
       * Converts this CronParseTask to JSON.
       * @function toJSON
       * @memberof OracleJob.CronParseTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      CronParseTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for CronParseTask
       * @function getTypeUrl
       * @memberof OracleJob.CronParseTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      CronParseTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.CronParseTask';
      };

      /**
       * ClockType enum.
       * @name OracleJob.CronParseTask.ClockType
       * @enum {number}
       * @property {number} ORACLE=0 Use the TaskRunners system clock for the current time.
       * @property {number} SYSCLOCK=1 Use the on-chain SYSCLOCK for the current time.
       */
      CronParseTask.ClockType = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'ORACLE')] = 0;
        values[(valuesById[1] = 'SYSCLOCK')] = 1;
        return values;
      })();

      return CronParseTask;
    })();

    OracleJob.BufferLayoutParseTask = (function () {
      /**
       * Properties of a BufferLayoutParseTask.
       * @memberof OracleJob
       * @interface IBufferLayoutParseTask
       * @property {number|null} [offset] The buffer offset to start deserializing from.
       * @property {OracleJob.BufferLayoutParseTask.Endian|null} [endian] The endianness of the stored value.
       * @property {OracleJob.BufferLayoutParseTask.BufferParseType|null} [type] The type of value to deserialize.
       */

      /**
       * Constructs a new BufferLayoutParseTask.
       * @memberof OracleJob
       * @classdesc Return the deserialized value from a stringified buffer.
       * @implements IBufferLayoutParseTask
       * @constructor
       * @param {OracleJob.IBufferLayoutParseTask=} [properties] Properties to set
       */
      function BufferLayoutParseTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The buffer offset to start deserializing from.
       * @member {number} offset
       * @memberof OracleJob.BufferLayoutParseTask
       * @instance
       */
      BufferLayoutParseTask.prototype.offset = 0;

      /**
       * The endianness of the stored value.
       * @member {OracleJob.BufferLayoutParseTask.Endian} endian
       * @memberof OracleJob.BufferLayoutParseTask
       * @instance
       */
      BufferLayoutParseTask.prototype.endian = 0;

      /**
       * The type of value to deserialize.
       * @member {OracleJob.BufferLayoutParseTask.BufferParseType} type
       * @memberof OracleJob.BufferLayoutParseTask
       * @instance
       */
      BufferLayoutParseTask.prototype.type = 1;

      /**
       * Creates a new BufferLayoutParseTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.BufferLayoutParseTask
       * @static
       * @param {OracleJob.IBufferLayoutParseTask=} [properties] Properties to set
       * @returns {OracleJob.BufferLayoutParseTask} BufferLayoutParseTask instance
       */
      BufferLayoutParseTask.create = function create(properties) {
        return new BufferLayoutParseTask(properties);
      };

      /**
       * Encodes the specified BufferLayoutParseTask message. Does not implicitly {@apilink OracleJob.BufferLayoutParseTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.BufferLayoutParseTask
       * @static
       * @param {OracleJob.IBufferLayoutParseTask} message BufferLayoutParseTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      BufferLayoutParseTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.offset != null &&
          Object.hasOwnProperty.call(message, 'offset')
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).uint32(message.offset);
        if (
          message.endian != null &&
          Object.hasOwnProperty.call(message, 'endian')
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.endian);
        if (message.type != null && Object.hasOwnProperty.call(message, 'type'))
          writer.uint32(/* id 3, wireType 0 =*/ 24).int32(message.type);
        return writer;
      };

      /**
       * Encodes the specified BufferLayoutParseTask message, length delimited. Does not implicitly {@apilink OracleJob.BufferLayoutParseTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.BufferLayoutParseTask
       * @static
       * @param {OracleJob.IBufferLayoutParseTask} message BufferLayoutParseTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      BufferLayoutParseTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a BufferLayoutParseTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.BufferLayoutParseTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.BufferLayoutParseTask} BufferLayoutParseTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      BufferLayoutParseTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.BufferLayoutParseTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.offset = reader.uint32();
              break;
            }
            case 2: {
              message.endian = reader.int32();
              break;
            }
            case 3: {
              message.type = reader.int32();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a BufferLayoutParseTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.BufferLayoutParseTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.BufferLayoutParseTask} BufferLayoutParseTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      BufferLayoutParseTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a BufferLayoutParseTask message.
       * @function verify
       * @memberof OracleJob.BufferLayoutParseTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      BufferLayoutParseTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.offset != null && message.hasOwnProperty('offset'))
          if (!$util.isInteger(message.offset))
            return 'offset: integer expected';
        if (message.endian != null && message.hasOwnProperty('endian'))
          switch (message.endian) {
            default:
              return 'endian: enum value expected';
            case 0:
            case 1:
              break;
          }
        if (message.type != null && message.hasOwnProperty('type'))
          switch (message.type) {
            default:
              return 'type: enum value expected';
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
            case 11:
            case 12:
            case 13:
            case 14:
              break;
          }
        return null;
      };

      /**
       * Creates a BufferLayoutParseTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.BufferLayoutParseTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.BufferLayoutParseTask} BufferLayoutParseTask
       */
      BufferLayoutParseTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.BufferLayoutParseTask)
          return object;
        var message = new $root.OracleJob.BufferLayoutParseTask();
        if (object.offset != null) message.offset = object.offset >>> 0;
        switch (object.endian) {
          default:
            if (typeof object.endian === 'number') {
              message.endian = object.endian;
              break;
            }
            break;
          case 'LITTLE_ENDIAN':
          case 0:
            message.endian = 0;
            break;
          case 'BIG_ENDIAN':
          case 1:
            message.endian = 1;
            break;
        }
        switch (object.type) {
          default:
            if (typeof object.type === 'number') {
              message.type = object.type;
              break;
            }
            break;
          case 'pubkey':
          case 1:
            message.type = 1;
            break;
          case 'bool':
          case 2:
            message.type = 2;
            break;
          case 'u8':
          case 3:
            message.type = 3;
            break;
          case 'i8':
          case 4:
            message.type = 4;
            break;
          case 'u16':
          case 5:
            message.type = 5;
            break;
          case 'i16':
          case 6:
            message.type = 6;
            break;
          case 'u32':
          case 7:
            message.type = 7;
            break;
          case 'i32':
          case 8:
            message.type = 8;
            break;
          case 'f32':
          case 9:
            message.type = 9;
            break;
          case 'u64':
          case 10:
            message.type = 10;
            break;
          case 'i64':
          case 11:
            message.type = 11;
            break;
          case 'f64':
          case 12:
            message.type = 12;
            break;
          case 'u128':
          case 13:
            message.type = 13;
            break;
          case 'i128':
          case 14:
            message.type = 14;
            break;
        }
        return message;
      };

      /**
       * Creates a plain object from a BufferLayoutParseTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.BufferLayoutParseTask
       * @static
       * @param {OracleJob.BufferLayoutParseTask} message BufferLayoutParseTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      BufferLayoutParseTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.offset = 0;
          object.endian = options.enums === String ? 'LITTLE_ENDIAN' : 0;
          object.type = options.enums === String ? 'pubkey' : 1;
        }
        if (message.offset != null && message.hasOwnProperty('offset'))
          object.offset = message.offset;
        if (message.endian != null && message.hasOwnProperty('endian'))
          object.endian =
            options.enums === String
              ? $root.OracleJob.BufferLayoutParseTask.Endian[message.endian] ===
                undefined
                ? message.endian
                : $root.OracleJob.BufferLayoutParseTask.Endian[message.endian]
              : message.endian;
        if (message.type != null && message.hasOwnProperty('type'))
          object.type =
            options.enums === String
              ? $root.OracleJob.BufferLayoutParseTask.BufferParseType[
                  message.type
                ] === undefined
                ? message.type
                : $root.OracleJob.BufferLayoutParseTask.BufferParseType[
                    message.type
                  ]
              : message.type;
        return object;
      };

      /**
       * Converts this BufferLayoutParseTask to JSON.
       * @function toJSON
       * @memberof OracleJob.BufferLayoutParseTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      BufferLayoutParseTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for BufferLayoutParseTask
       * @function getTypeUrl
       * @memberof OracleJob.BufferLayoutParseTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      BufferLayoutParseTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.BufferLayoutParseTask';
      };

      /**
       * Endian enum.
       * @name OracleJob.BufferLayoutParseTask.Endian
       * @enum {number}
       * @property {number} LITTLE_ENDIAN=0 Use little endian byte order.
       * @property {number} BIG_ENDIAN=1 Use big endian byte order.
       */
      BufferLayoutParseTask.Endian = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'LITTLE_ENDIAN')] = 0;
        values[(valuesById[1] = 'BIG_ENDIAN')] = 1;
        return values;
      })();

      /**
       * BufferParseType enum.
       * @name OracleJob.BufferLayoutParseTask.BufferParseType
       * @enum {number}
       * @property {number} pubkey=1 A public key.
       * @property {number} bool=2 A boolean.
       * @property {number} u8=3 An 8-bit unsigned value.
       * @property {number} i8=4 An 8-bit signed value.
       * @property {number} u16=5 A 16-bit unsigned value.
       * @property {number} i16=6 A 16-bit signed value.
       * @property {number} u32=7 A 32-bit unsigned value.
       * @property {number} i32=8 A 32-bit signed value.
       * @property {number} f32=9 A 32-bit IEEE floating point value.
       * @property {number} u64=10 A 64-bit unsigned value.
       * @property {number} i64=11 A 64-bit signed value.
       * @property {number} f64=12 A 64-bit IEEE floating point value.
       * @property {number} u128=13 A 128-bit unsigned value.
       * @property {number} i128=14 A 128-bit signed value.
       */
      BufferLayoutParseTask.BufferParseType = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[1] = 'pubkey')] = 1;
        values[(valuesById[2] = 'bool')] = 2;
        values[(valuesById[3] = 'u8')] = 3;
        values[(valuesById[4] = 'i8')] = 4;
        values[(valuesById[5] = 'u16')] = 5;
        values[(valuesById[6] = 'i16')] = 6;
        values[(valuesById[7] = 'u32')] = 7;
        values[(valuesById[8] = 'i32')] = 8;
        values[(valuesById[9] = 'f32')] = 9;
        values[(valuesById[10] = 'u64')] = 10;
        values[(valuesById[11] = 'i64')] = 11;
        values[(valuesById[12] = 'f64')] = 12;
        values[(valuesById[13] = 'u128')] = 13;
        values[(valuesById[14] = 'i128')] = 14;
        return values;
      })();

      return BufferLayoutParseTask;
    })();

    OracleJob.HistoryFunctionTask = (function () {
      /**
       * Properties of a HistoryFunctionTask.
       * @memberof OracleJob
       * @interface IHistoryFunctionTask
       * @property {OracleJob.HistoryFunctionTask.Method|null} [method] HistoryFunctionTask method
       * @property {string|null} [aggregatorAddress] HistoryFunctionTask aggregatorAddress
       * @property {number|null} [period] HistoryFunctionTask period
       */

      /**
       * Constructs a new HistoryFunctionTask.
       * @memberof OracleJob
       * @classdesc Represents a HistoryFunctionTask.
       * @implements IHistoryFunctionTask
       * @constructor
       * @param {OracleJob.IHistoryFunctionTask=} [properties] Properties to set
       */
      function HistoryFunctionTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * HistoryFunctionTask method.
       * @member {OracleJob.HistoryFunctionTask.Method} method
       * @memberof OracleJob.HistoryFunctionTask
       * @instance
       */
      HistoryFunctionTask.prototype.method = 0;

      /**
       * HistoryFunctionTask aggregatorAddress.
       * @member {string} aggregatorAddress
       * @memberof OracleJob.HistoryFunctionTask
       * @instance
       */
      HistoryFunctionTask.prototype.aggregatorAddress = '';

      /**
       * HistoryFunctionTask period.
       * @member {number} period
       * @memberof OracleJob.HistoryFunctionTask
       * @instance
       */
      HistoryFunctionTask.prototype.period = 0;

      /**
       * Creates a new HistoryFunctionTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.HistoryFunctionTask
       * @static
       * @param {OracleJob.IHistoryFunctionTask=} [properties] Properties to set
       * @returns {OracleJob.HistoryFunctionTask} HistoryFunctionTask instance
       */
      HistoryFunctionTask.create = function create(properties) {
        return new HistoryFunctionTask(properties);
      };

      /**
       * Encodes the specified HistoryFunctionTask message. Does not implicitly {@apilink OracleJob.HistoryFunctionTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.HistoryFunctionTask
       * @static
       * @param {OracleJob.IHistoryFunctionTask} message HistoryFunctionTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HistoryFunctionTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.method != null &&
          Object.hasOwnProperty.call(message, 'method')
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.method);
        if (
          message.aggregatorAddress != null &&
          Object.hasOwnProperty.call(message, 'aggregatorAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.aggregatorAddress);
        if (
          message.period != null &&
          Object.hasOwnProperty.call(message, 'period')
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.period);
        return writer;
      };

      /**
       * Encodes the specified HistoryFunctionTask message, length delimited. Does not implicitly {@apilink OracleJob.HistoryFunctionTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.HistoryFunctionTask
       * @static
       * @param {OracleJob.IHistoryFunctionTask} message HistoryFunctionTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      HistoryFunctionTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a HistoryFunctionTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.HistoryFunctionTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.HistoryFunctionTask} HistoryFunctionTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HistoryFunctionTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.HistoryFunctionTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.method = reader.int32();
              break;
            }
            case 2: {
              message.aggregatorAddress = reader.string();
              break;
            }
            case 3: {
              message.period = reader.uint32();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a HistoryFunctionTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.HistoryFunctionTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.HistoryFunctionTask} HistoryFunctionTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      HistoryFunctionTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a HistoryFunctionTask message.
       * @function verify
       * @memberof OracleJob.HistoryFunctionTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      HistoryFunctionTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.method != null && message.hasOwnProperty('method'))
          switch (message.method) {
            default:
              return 'method: enum value expected';
            case 0:
            case 1:
              break;
          }
        if (
          message.aggregatorAddress != null &&
          message.hasOwnProperty('aggregatorAddress')
        )
          if (!$util.isString(message.aggregatorAddress))
            return 'aggregatorAddress: string expected';
        if (message.period != null && message.hasOwnProperty('period'))
          if (!$util.isInteger(message.period))
            return 'period: integer expected';
        return null;
      };

      /**
       * Creates a HistoryFunctionTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.HistoryFunctionTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.HistoryFunctionTask} HistoryFunctionTask
       */
      HistoryFunctionTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.HistoryFunctionTask)
          return object;
        var message = new $root.OracleJob.HistoryFunctionTask();
        switch (object.method) {
          default:
            if (typeof object.method === 'number') {
              message.method = object.method;
              break;
            }
            break;
          case 'METHOD_MIN':
          case 0:
            message.method = 0;
            break;
          case 'METHOD_MAX':
          case 1:
            message.method = 1;
            break;
        }
        if (object.aggregatorAddress != null)
          message.aggregatorAddress = String(object.aggregatorAddress);
        if (object.period != null) message.period = object.period >>> 0;
        return message;
      };

      /**
       * Creates a plain object from a HistoryFunctionTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.HistoryFunctionTask
       * @static
       * @param {OracleJob.HistoryFunctionTask} message HistoryFunctionTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      HistoryFunctionTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.method = options.enums === String ? 'METHOD_MIN' : 0;
          object.aggregatorAddress = '';
          object.period = 0;
        }
        if (message.method != null && message.hasOwnProperty('method'))
          object.method =
            options.enums === String
              ? $root.OracleJob.HistoryFunctionTask.Method[message.method] ===
                undefined
                ? message.method
                : $root.OracleJob.HistoryFunctionTask.Method[message.method]
              : message.method;
        if (
          message.aggregatorAddress != null &&
          message.hasOwnProperty('aggregatorAddress')
        )
          object.aggregatorAddress = message.aggregatorAddress;
        if (message.period != null && message.hasOwnProperty('period'))
          object.period = message.period;
        return object;
      };

      /**
       * Converts this HistoryFunctionTask to JSON.
       * @function toJSON
       * @memberof OracleJob.HistoryFunctionTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      HistoryFunctionTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for HistoryFunctionTask
       * @function getTypeUrl
       * @memberof OracleJob.HistoryFunctionTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      HistoryFunctionTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.HistoryFunctionTask';
      };

      /**
       * Method enum.
       * @name OracleJob.HistoryFunctionTask.Method
       * @enum {number}
       * @property {number} METHOD_MIN=0 METHOD_MIN value
       * @property {number} METHOD_MAX=1 METHOD_MAX value
       */
      HistoryFunctionTask.Method = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'METHOD_MIN')] = 0;
        values[(valuesById[1] = 'METHOD_MAX')] = 1;
        return values;
      })();

      return HistoryFunctionTask;
    })();

    OracleJob.VwapTask = (function () {
      /**
       * Properties of a VwapTask.
       * @memberof OracleJob
       * @interface IVwapTask
       * @property {string|null} [priceAggregatorAddress] VwapTask priceAggregatorAddress
       * @property {string|null} [volumeAggregatorAddress] VwapTask volumeAggregatorAddress
       * @property {number|null} [period] VwapTask period
       */

      /**
       * Constructs a new VwapTask.
       * @memberof OracleJob
       * @classdesc Represents a VwapTask.
       * @implements IVwapTask
       * @constructor
       * @param {OracleJob.IVwapTask=} [properties] Properties to set
       */
      function VwapTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * VwapTask priceAggregatorAddress.
       * @member {string} priceAggregatorAddress
       * @memberof OracleJob.VwapTask
       * @instance
       */
      VwapTask.prototype.priceAggregatorAddress = '';

      /**
       * VwapTask volumeAggregatorAddress.
       * @member {string} volumeAggregatorAddress
       * @memberof OracleJob.VwapTask
       * @instance
       */
      VwapTask.prototype.volumeAggregatorAddress = '';

      /**
       * VwapTask period.
       * @member {number} period
       * @memberof OracleJob.VwapTask
       * @instance
       */
      VwapTask.prototype.period = 0;

      /**
       * Creates a new VwapTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.VwapTask
       * @static
       * @param {OracleJob.IVwapTask=} [properties] Properties to set
       * @returns {OracleJob.VwapTask} VwapTask instance
       */
      VwapTask.create = function create(properties) {
        return new VwapTask(properties);
      };

      /**
       * Encodes the specified VwapTask message. Does not implicitly {@apilink OracleJob.VwapTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.VwapTask
       * @static
       * @param {OracleJob.IVwapTask} message VwapTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      VwapTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.priceAggregatorAddress != null &&
          Object.hasOwnProperty.call(message, 'priceAggregatorAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.priceAggregatorAddress);
        if (
          message.volumeAggregatorAddress != null &&
          Object.hasOwnProperty.call(message, 'volumeAggregatorAddress')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.volumeAggregatorAddress);
        if (
          message.period != null &&
          Object.hasOwnProperty.call(message, 'period')
        )
          writer.uint32(/* id 3, wireType 0 =*/ 24).uint32(message.period);
        return writer;
      };

      /**
       * Encodes the specified VwapTask message, length delimited. Does not implicitly {@apilink OracleJob.VwapTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.VwapTask
       * @static
       * @param {OracleJob.IVwapTask} message VwapTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      VwapTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a VwapTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.VwapTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.VwapTask} VwapTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      VwapTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.VwapTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.priceAggregatorAddress = reader.string();
              break;
            }
            case 2: {
              message.volumeAggregatorAddress = reader.string();
              break;
            }
            case 3: {
              message.period = reader.uint32();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a VwapTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.VwapTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.VwapTask} VwapTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      VwapTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a VwapTask message.
       * @function verify
       * @memberof OracleJob.VwapTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      VwapTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.priceAggregatorAddress != null &&
          message.hasOwnProperty('priceAggregatorAddress')
        )
          if (!$util.isString(message.priceAggregatorAddress))
            return 'priceAggregatorAddress: string expected';
        if (
          message.volumeAggregatorAddress != null &&
          message.hasOwnProperty('volumeAggregatorAddress')
        )
          if (!$util.isString(message.volumeAggregatorAddress))
            return 'volumeAggregatorAddress: string expected';
        if (message.period != null && message.hasOwnProperty('period'))
          if (!$util.isInteger(message.period))
            return 'period: integer expected';
        return null;
      };

      /**
       * Creates a VwapTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.VwapTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.VwapTask} VwapTask
       */
      VwapTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.VwapTask) return object;
        var message = new $root.OracleJob.VwapTask();
        if (object.priceAggregatorAddress != null)
          message.priceAggregatorAddress = String(
            object.priceAggregatorAddress
          );
        if (object.volumeAggregatorAddress != null)
          message.volumeAggregatorAddress = String(
            object.volumeAggregatorAddress
          );
        if (object.period != null) message.period = object.period >>> 0;
        return message;
      };

      /**
       * Creates a plain object from a VwapTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.VwapTask
       * @static
       * @param {OracleJob.VwapTask} message VwapTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      VwapTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.priceAggregatorAddress = '';
          object.volumeAggregatorAddress = '';
          object.period = 0;
        }
        if (
          message.priceAggregatorAddress != null &&
          message.hasOwnProperty('priceAggregatorAddress')
        )
          object.priceAggregatorAddress = message.priceAggregatorAddress;
        if (
          message.volumeAggregatorAddress != null &&
          message.hasOwnProperty('volumeAggregatorAddress')
        )
          object.volumeAggregatorAddress = message.volumeAggregatorAddress;
        if (message.period != null && message.hasOwnProperty('period'))
          object.period = message.period;
        return object;
      };

      /**
       * Converts this VwapTask to JSON.
       * @function toJSON
       * @memberof OracleJob.VwapTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      VwapTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for VwapTask
       * @function getTypeUrl
       * @memberof OracleJob.VwapTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      VwapTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.VwapTask';
      };

      return VwapTask;
    })();

    OracleJob.EwmaTask = (function () {
      /**
       * Properties of an EwmaTask.
       * @memberof OracleJob
       * @interface IEwmaTask
       * @property {string|null} [aggregatorAddress] EwmaTask aggregatorAddress
       * @property {number|null} [period] EwmaTask period
       * @property {number|null} [lambda] EwmaTask lambda
       */

      /**
       * Constructs a new EwmaTask.
       * @memberof OracleJob
       * @classdesc Represents an EwmaTask.
       * @implements IEwmaTask
       * @constructor
       * @param {OracleJob.IEwmaTask=} [properties] Properties to set
       */
      function EwmaTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * EwmaTask aggregatorAddress.
       * @member {string} aggregatorAddress
       * @memberof OracleJob.EwmaTask
       * @instance
       */
      EwmaTask.prototype.aggregatorAddress = '';

      /**
       * EwmaTask period.
       * @member {number} period
       * @memberof OracleJob.EwmaTask
       * @instance
       */
      EwmaTask.prototype.period = 0;

      /**
       * EwmaTask lambda.
       * @member {number} lambda
       * @memberof OracleJob.EwmaTask
       * @instance
       */
      EwmaTask.prototype.lambda = 0;

      /**
       * Creates a new EwmaTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.EwmaTask
       * @static
       * @param {OracleJob.IEwmaTask=} [properties] Properties to set
       * @returns {OracleJob.EwmaTask} EwmaTask instance
       */
      EwmaTask.create = function create(properties) {
        return new EwmaTask(properties);
      };

      /**
       * Encodes the specified EwmaTask message. Does not implicitly {@apilink OracleJob.EwmaTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.EwmaTask
       * @static
       * @param {OracleJob.IEwmaTask} message EwmaTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      EwmaTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.aggregatorAddress != null &&
          Object.hasOwnProperty.call(message, 'aggregatorAddress')
        )
          writer
            .uint32(/* id 1, wireType 2 =*/ 10)
            .string(message.aggregatorAddress);
        if (
          message.period != null &&
          Object.hasOwnProperty.call(message, 'period')
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.period);
        if (
          message.lambda != null &&
          Object.hasOwnProperty.call(message, 'lambda')
        )
          writer.uint32(/* id 3, wireType 1 =*/ 25).double(message.lambda);
        return writer;
      };

      /**
       * Encodes the specified EwmaTask message, length delimited. Does not implicitly {@apilink OracleJob.EwmaTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.EwmaTask
       * @static
       * @param {OracleJob.IEwmaTask} message EwmaTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      EwmaTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes an EwmaTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.EwmaTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.EwmaTask} EwmaTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      EwmaTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.EwmaTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.aggregatorAddress = reader.string();
              break;
            }
            case 2: {
              message.period = reader.int32();
              break;
            }
            case 3: {
              message.lambda = reader.double();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes an EwmaTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.EwmaTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.EwmaTask} EwmaTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      EwmaTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies an EwmaTask message.
       * @function verify
       * @memberof OracleJob.EwmaTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      EwmaTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.aggregatorAddress != null &&
          message.hasOwnProperty('aggregatorAddress')
        )
          if (!$util.isString(message.aggregatorAddress))
            return 'aggregatorAddress: string expected';
        if (message.period != null && message.hasOwnProperty('period'))
          if (!$util.isInteger(message.period))
            return 'period: integer expected';
        if (message.lambda != null && message.hasOwnProperty('lambda'))
          if (typeof message.lambda !== 'number')
            return 'lambda: number expected';
        return null;
      };

      /**
       * Creates an EwmaTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.EwmaTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.EwmaTask} EwmaTask
       */
      EwmaTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.EwmaTask) return object;
        var message = new $root.OracleJob.EwmaTask();
        if (object.aggregatorAddress != null)
          message.aggregatorAddress = String(object.aggregatorAddress);
        if (object.period != null) message.period = object.period | 0;
        if (object.lambda != null) message.lambda = Number(object.lambda);
        return message;
      };

      /**
       * Creates a plain object from an EwmaTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.EwmaTask
       * @static
       * @param {OracleJob.EwmaTask} message EwmaTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      EwmaTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.aggregatorAddress = '';
          object.period = 0;
          object.lambda = 0;
        }
        if (
          message.aggregatorAddress != null &&
          message.hasOwnProperty('aggregatorAddress')
        )
          object.aggregatorAddress = message.aggregatorAddress;
        if (message.period != null && message.hasOwnProperty('period'))
          object.period = message.period;
        if (message.lambda != null && message.hasOwnProperty('lambda'))
          object.lambda =
            options.json && !isFinite(message.lambda)
              ? String(message.lambda)
              : message.lambda;
        return object;
      };

      /**
       * Converts this EwmaTask to JSON.
       * @function toJSON
       * @memberof OracleJob.EwmaTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      EwmaTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for EwmaTask
       * @function getTypeUrl
       * @memberof OracleJob.EwmaTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      EwmaTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.EwmaTask';
      };

      return EwmaTask;
    })();

    OracleJob.ComparisonTask = (function () {
      /**
       * Properties of a ComparisonTask.
       * @memberof OracleJob
       * @interface IComparisonTask
       * @property {OracleJob.ComparisonTask.Operation|null} [op] The type of operator to use on the left (lhs) and right (rhs) operand.
       * @property {IOracleJob|null} [lhs] OracleJob where the executed result is equal to the left hand side operand.
       * @property {string|null} [lhsValue] String or `${CACHE_KEY}` representing the left hand side operand.
       * @property {IOracleJob|null} [rhs] OracleJob where the executed result is equal to the right hand side operand.
       * @property {string|null} [rhsValue] String or `${CACHE_KEY}` representing the right hand side operand.
       * @property {IOracleJob|null} [onTrue] The OracleJob to execute if the condition evaluates to true.
       * @property {string|null} [onTrueValue] The result to use if the condition evaluates to true. Can be set to a `${CACHE_KEY}`.
       * @property {IOracleJob|null} [onFalse] The OracleJob to execute if the condition evaluates to false.
       * @property {string|null} [onFalseValue] The result to use if the condition evaluates to false. Can be set to a `${CACHE_KEY}`.
       * @property {IOracleJob|null} [onFailure] The OracleJob to execute if the condition fails to evaluate.
       * @property {string|null} [onFailureValue] The result to use if the condition fails to evaluate. Can be set to a `${CACHE_KEY}`.
       */

      /**
       * Constructs a new ComparisonTask.
       * @memberof OracleJob
       * @classdesc Represents a ComparisonTask.
       * @implements IComparisonTask
       * @constructor
       * @param {OracleJob.IComparisonTask=} [properties] Properties to set
       */
      function ComparisonTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The type of operator to use on the left (lhs) and right (rhs) operand.
       * @member {OracleJob.ComparisonTask.Operation} op
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.op = 0;

      /**
       * OracleJob where the executed result is equal to the left hand side operand.
       * @member {IOracleJob|null|undefined} lhs
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.lhs = null;

      /**
       * String or `${CACHE_KEY}` representing the left hand side operand.
       * @member {string|null|undefined} lhsValue
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.lhsValue = null;

      /**
       * OracleJob where the executed result is equal to the right hand side operand.
       * @member {IOracleJob|null|undefined} rhs
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.rhs = null;

      /**
       * String or `${CACHE_KEY}` representing the right hand side operand.
       * @member {string|null|undefined} rhsValue
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.rhsValue = null;

      /**
       * The OracleJob to execute if the condition evaluates to true.
       * @member {IOracleJob|null|undefined} onTrue
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.onTrue = null;

      /**
       * The result to use if the condition evaluates to true. Can be set to a `${CACHE_KEY}`.
       * @member {string} onTrueValue
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.onTrueValue = '';

      /**
       * The OracleJob to execute if the condition evaluates to false.
       * @member {IOracleJob|null|undefined} onFalse
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.onFalse = null;

      /**
       * The result to use if the condition evaluates to false. Can be set to a `${CACHE_KEY}`.
       * @member {string} onFalseValue
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.onFalseValue = '';

      /**
       * The OracleJob to execute if the condition fails to evaluate.
       * @member {IOracleJob|null|undefined} onFailure
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.onFailure = null;

      /**
       * The result to use if the condition fails to evaluate. Can be set to a `${CACHE_KEY}`.
       * @member {string} onFailureValue
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      ComparisonTask.prototype.onFailureValue = '';

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * ComparisonTask LHS.
       * @member {"lhs"|"lhsValue"|undefined} LHS
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      Object.defineProperty(ComparisonTask.prototype, 'LHS', {
        get: $util.oneOfGetter(($oneOfFields = ['lhs', 'lhsValue'])),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * ComparisonTask RHS.
       * @member {"rhs"|"rhsValue"|undefined} RHS
       * @memberof OracleJob.ComparisonTask
       * @instance
       */
      Object.defineProperty(ComparisonTask.prototype, 'RHS', {
        get: $util.oneOfGetter(($oneOfFields = ['rhs', 'rhsValue'])),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new ComparisonTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.ComparisonTask
       * @static
       * @param {OracleJob.IComparisonTask=} [properties] Properties to set
       * @returns {OracleJob.ComparisonTask} ComparisonTask instance
       */
      ComparisonTask.create = function create(properties) {
        return new ComparisonTask(properties);
      };

      /**
       * Encodes the specified ComparisonTask message. Does not implicitly {@apilink OracleJob.ComparisonTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.ComparisonTask
       * @static
       * @param {OracleJob.IComparisonTask} message ComparisonTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ComparisonTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (message.op != null && Object.hasOwnProperty.call(message, 'op'))
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.op);
        if (message.lhs != null && Object.hasOwnProperty.call(message, 'lhs'))
          $root.OracleJob.encode(
            message.lhs,
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
        if (
          message.lhsValue != null &&
          Object.hasOwnProperty.call(message, 'lhsValue')
        )
          writer.uint32(/* id 3, wireType 2 =*/ 26).string(message.lhsValue);
        if (message.rhs != null && Object.hasOwnProperty.call(message, 'rhs'))
          $root.OracleJob.encode(
            message.rhs,
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
        if (
          message.rhsValue != null &&
          Object.hasOwnProperty.call(message, 'rhsValue')
        )
          writer.uint32(/* id 5, wireType 2 =*/ 42).string(message.rhsValue);
        if (
          message.onTrue != null &&
          Object.hasOwnProperty.call(message, 'onTrue')
        )
          $root.OracleJob.encode(
            message.onTrue,
            writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
          ).ldelim();
        if (
          message.onTrueValue != null &&
          Object.hasOwnProperty.call(message, 'onTrueValue')
        )
          writer.uint32(/* id 7, wireType 2 =*/ 58).string(message.onTrueValue);
        if (
          message.onFalse != null &&
          Object.hasOwnProperty.call(message, 'onFalse')
        )
          $root.OracleJob.encode(
            message.onFalse,
            writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
          ).ldelim();
        if (
          message.onFalseValue != null &&
          Object.hasOwnProperty.call(message, 'onFalseValue')
        )
          writer
            .uint32(/* id 9, wireType 2 =*/ 74)
            .string(message.onFalseValue);
        if (
          message.onFailure != null &&
          Object.hasOwnProperty.call(message, 'onFailure')
        )
          $root.OracleJob.encode(
            message.onFailure,
            writer.uint32(/* id 10, wireType 2 =*/ 82).fork()
          ).ldelim();
        if (
          message.onFailureValue != null &&
          Object.hasOwnProperty.call(message, 'onFailureValue')
        )
          writer
            .uint32(/* id 11, wireType 2 =*/ 90)
            .string(message.onFailureValue);
        return writer;
      };

      /**
       * Encodes the specified ComparisonTask message, length delimited. Does not implicitly {@apilink OracleJob.ComparisonTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.ComparisonTask
       * @static
       * @param {OracleJob.IComparisonTask} message ComparisonTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      ComparisonTask.encodeDelimited = function encodeDelimited(
        message,
        writer
      ) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a ComparisonTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.ComparisonTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.ComparisonTask} ComparisonTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ComparisonTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.ComparisonTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.op = reader.int32();
              break;
            }
            case 2: {
              message.lhs = $root.OracleJob.decode(reader, reader.uint32());
              break;
            }
            case 3: {
              message.lhsValue = reader.string();
              break;
            }
            case 4: {
              message.rhs = $root.OracleJob.decode(reader, reader.uint32());
              break;
            }
            case 5: {
              message.rhsValue = reader.string();
              break;
            }
            case 6: {
              message.onTrue = $root.OracleJob.decode(reader, reader.uint32());
              break;
            }
            case 7: {
              message.onTrueValue = reader.string();
              break;
            }
            case 8: {
              message.onFalse = $root.OracleJob.decode(reader, reader.uint32());
              break;
            }
            case 9: {
              message.onFalseValue = reader.string();
              break;
            }
            case 10: {
              message.onFailure = $root.OracleJob.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 11: {
              message.onFailureValue = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a ComparisonTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.ComparisonTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.ComparisonTask} ComparisonTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      ComparisonTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a ComparisonTask message.
       * @function verify
       * @memberof OracleJob.ComparisonTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      ComparisonTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (message.op != null && message.hasOwnProperty('op'))
          switch (message.op) {
            default:
              return 'op: enum value expected';
            case 0:
            case 1:
            case 2:
              break;
          }
        if (message.lhs != null && message.hasOwnProperty('lhs')) {
          properties.LHS = 1;
          {
            var error = $root.OracleJob.verify(message.lhs);
            if (error) return 'lhs.' + error;
          }
        }
        if (message.lhsValue != null && message.hasOwnProperty('lhsValue')) {
          if (properties.LHS === 1) return 'LHS: multiple values';
          properties.LHS = 1;
          if (!$util.isString(message.lhsValue))
            return 'lhsValue: string expected';
        }
        if (message.rhs != null && message.hasOwnProperty('rhs')) {
          properties.RHS = 1;
          {
            var error = $root.OracleJob.verify(message.rhs);
            if (error) return 'rhs.' + error;
          }
        }
        if (message.rhsValue != null && message.hasOwnProperty('rhsValue')) {
          if (properties.RHS === 1) return 'RHS: multiple values';
          properties.RHS = 1;
          if (!$util.isString(message.rhsValue))
            return 'rhsValue: string expected';
        }
        if (message.onTrue != null && message.hasOwnProperty('onTrue')) {
          var error = $root.OracleJob.verify(message.onTrue);
          if (error) return 'onTrue.' + error;
        }
        if (
          message.onTrueValue != null &&
          message.hasOwnProperty('onTrueValue')
        )
          if (!$util.isString(message.onTrueValue))
            return 'onTrueValue: string expected';
        if (message.onFalse != null && message.hasOwnProperty('onFalse')) {
          var error = $root.OracleJob.verify(message.onFalse);
          if (error) return 'onFalse.' + error;
        }
        if (
          message.onFalseValue != null &&
          message.hasOwnProperty('onFalseValue')
        )
          if (!$util.isString(message.onFalseValue))
            return 'onFalseValue: string expected';
        if (message.onFailure != null && message.hasOwnProperty('onFailure')) {
          var error = $root.OracleJob.verify(message.onFailure);
          if (error) return 'onFailure.' + error;
        }
        if (
          message.onFailureValue != null &&
          message.hasOwnProperty('onFailureValue')
        )
          if (!$util.isString(message.onFailureValue))
            return 'onFailureValue: string expected';
        return null;
      };

      /**
       * Creates a ComparisonTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.ComparisonTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.ComparisonTask} ComparisonTask
       */
      ComparisonTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.ComparisonTask) return object;
        var message = new $root.OracleJob.ComparisonTask();
        switch (object.op) {
          default:
            if (typeof object.op === 'number') {
              message.op = object.op;
              break;
            }
            break;
          case 'OPERATION_EQ':
          case 0:
            message.op = 0;
            break;
          case 'OPERATION_GT':
          case 1:
            message.op = 1;
            break;
          case 'OPERATION_LT':
          case 2:
            message.op = 2;
            break;
        }
        if (object.lhs != null) {
          if (typeof object.lhs !== 'object')
            throw TypeError('.OracleJob.ComparisonTask.lhs: object expected');
          message.lhs = $root.OracleJob.fromObject(object.lhs);
        }
        if (object.lhsValue != null) message.lhsValue = String(object.lhsValue);
        if (object.rhs != null) {
          if (typeof object.rhs !== 'object')
            throw TypeError('.OracleJob.ComparisonTask.rhs: object expected');
          message.rhs = $root.OracleJob.fromObject(object.rhs);
        }
        if (object.rhsValue != null) message.rhsValue = String(object.rhsValue);
        if (object.onTrue != null) {
          if (typeof object.onTrue !== 'object')
            throw TypeError(
              '.OracleJob.ComparisonTask.onTrue: object expected'
            );
          message.onTrue = $root.OracleJob.fromObject(object.onTrue);
        }
        if (object.onTrueValue != null)
          message.onTrueValue = String(object.onTrueValue);
        if (object.onFalse != null) {
          if (typeof object.onFalse !== 'object')
            throw TypeError(
              '.OracleJob.ComparisonTask.onFalse: object expected'
            );
          message.onFalse = $root.OracleJob.fromObject(object.onFalse);
        }
        if (object.onFalseValue != null)
          message.onFalseValue = String(object.onFalseValue);
        if (object.onFailure != null) {
          if (typeof object.onFailure !== 'object')
            throw TypeError(
              '.OracleJob.ComparisonTask.onFailure: object expected'
            );
          message.onFailure = $root.OracleJob.fromObject(object.onFailure);
        }
        if (object.onFailureValue != null)
          message.onFailureValue = String(object.onFailureValue);
        return message;
      };

      /**
       * Creates a plain object from a ComparisonTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.ComparisonTask
       * @static
       * @param {OracleJob.ComparisonTask} message ComparisonTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      ComparisonTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.op = options.enums === String ? 'OPERATION_EQ' : 0;
          object.onTrue = null;
          object.onTrueValue = '';
          object.onFalse = null;
          object.onFalseValue = '';
          object.onFailure = null;
          object.onFailureValue = '';
        }
        if (message.op != null && message.hasOwnProperty('op'))
          object.op =
            options.enums === String
              ? $root.OracleJob.ComparisonTask.Operation[message.op] ===
                undefined
                ? message.op
                : $root.OracleJob.ComparisonTask.Operation[message.op]
              : message.op;
        if (message.lhs != null && message.hasOwnProperty('lhs')) {
          object.lhs = $root.OracleJob.toObject(message.lhs, options);
          if (options.oneofs) object.LHS = 'lhs';
        }
        if (message.lhsValue != null && message.hasOwnProperty('lhsValue')) {
          object.lhsValue = message.lhsValue;
          if (options.oneofs) object.LHS = 'lhsValue';
        }
        if (message.rhs != null && message.hasOwnProperty('rhs')) {
          object.rhs = $root.OracleJob.toObject(message.rhs, options);
          if (options.oneofs) object.RHS = 'rhs';
        }
        if (message.rhsValue != null && message.hasOwnProperty('rhsValue')) {
          object.rhsValue = message.rhsValue;
          if (options.oneofs) object.RHS = 'rhsValue';
        }
        if (message.onTrue != null && message.hasOwnProperty('onTrue'))
          object.onTrue = $root.OracleJob.toObject(message.onTrue, options);
        if (
          message.onTrueValue != null &&
          message.hasOwnProperty('onTrueValue')
        )
          object.onTrueValue = message.onTrueValue;
        if (message.onFalse != null && message.hasOwnProperty('onFalse'))
          object.onFalse = $root.OracleJob.toObject(message.onFalse, options);
        if (
          message.onFalseValue != null &&
          message.hasOwnProperty('onFalseValue')
        )
          object.onFalseValue = message.onFalseValue;
        if (message.onFailure != null && message.hasOwnProperty('onFailure'))
          object.onFailure = $root.OracleJob.toObject(
            message.onFailure,
            options
          );
        if (
          message.onFailureValue != null &&
          message.hasOwnProperty('onFailureValue')
        )
          object.onFailureValue = message.onFailureValue;
        return object;
      };

      /**
       * Converts this ComparisonTask to JSON.
       * @function toJSON
       * @memberof OracleJob.ComparisonTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      ComparisonTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for ComparisonTask
       * @function getTypeUrl
       * @memberof OracleJob.ComparisonTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      ComparisonTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.ComparisonTask';
      };

      /**
       * Operation enum.
       * @name OracleJob.ComparisonTask.Operation
       * @enum {number}
       * @property {number} OPERATION_EQ=0 Use the equals to '==' operator.
       * @property {number} OPERATION_GT=1 Use the greater than '>' operator.
       * @property {number} OPERATION_LT=2 Use the less than '<' operator.
       */
      ComparisonTask.Operation = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'OPERATION_EQ')] = 0;
        values[(valuesById[1] = 'OPERATION_GT')] = 1;
        values[(valuesById[2] = 'OPERATION_LT')] = 2;
        return values;
      })();

      return ComparisonTask;
    })();

    OracleJob.RoundTask = (function () {
      /**
       * Properties of a RoundTask.
       * @memberof OracleJob
       * @interface IRoundTask
       * @property {OracleJob.RoundTask.Method|null} [method] The rounding method to use.
       * @property {number|null} [decimals] The number of decimals to round to.
       */

      /**
       * Constructs a new RoundTask.
       * @memberof OracleJob
       * @classdesc Round the current running result to a set number of decimal places.
       *
       * _**Input**_: The current running numerical result.
       *
       * _**Returns**_: The running result rounded to a set number of decimal places.
       *
       * _**Example**_: Round down the running resul to 8 decimal places
       *
       * ```json
       * { "roundTask": { "method": "METHOD_ROUND_DOWN", "decimals": 8 } }
       * ```
       * @implements IRoundTask
       * @constructor
       * @param {OracleJob.IRoundTask=} [properties] Properties to set
       */
      function RoundTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The rounding method to use.
       * @member {OracleJob.RoundTask.Method} method
       * @memberof OracleJob.RoundTask
       * @instance
       */
      RoundTask.prototype.method = 0;

      /**
       * The number of decimals to round to.
       * @member {number} decimals
       * @memberof OracleJob.RoundTask
       * @instance
       */
      RoundTask.prototype.decimals = 0;

      /**
       * Creates a new RoundTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.RoundTask
       * @static
       * @param {OracleJob.IRoundTask=} [properties] Properties to set
       * @returns {OracleJob.RoundTask} RoundTask instance
       */
      RoundTask.create = function create(properties) {
        return new RoundTask(properties);
      };

      /**
       * Encodes the specified RoundTask message. Does not implicitly {@apilink OracleJob.RoundTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.RoundTask
       * @static
       * @param {OracleJob.IRoundTask} message RoundTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RoundTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.method != null &&
          Object.hasOwnProperty.call(message, 'method')
        )
          writer.uint32(/* id 1, wireType 0 =*/ 8).int32(message.method);
        if (
          message.decimals != null &&
          Object.hasOwnProperty.call(message, 'decimals')
        )
          writer.uint32(/* id 2, wireType 0 =*/ 16).int32(message.decimals);
        return writer;
      };

      /**
       * Encodes the specified RoundTask message, length delimited. Does not implicitly {@apilink OracleJob.RoundTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.RoundTask
       * @static
       * @param {OracleJob.IRoundTask} message RoundTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      RoundTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a RoundTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.RoundTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.RoundTask} RoundTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RoundTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.RoundTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.method = reader.int32();
              break;
            }
            case 2: {
              message.decimals = reader.int32();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a RoundTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.RoundTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.RoundTask} RoundTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      RoundTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a RoundTask message.
       * @function verify
       * @memberof OracleJob.RoundTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      RoundTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (message.method != null && message.hasOwnProperty('method'))
          switch (message.method) {
            default:
              return 'method: enum value expected';
            case 0:
            case 1:
              break;
          }
        if (message.decimals != null && message.hasOwnProperty('decimals'))
          if (!$util.isInteger(message.decimals))
            return 'decimals: integer expected';
        return null;
      };

      /**
       * Creates a RoundTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.RoundTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.RoundTask} RoundTask
       */
      RoundTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.RoundTask) return object;
        var message = new $root.OracleJob.RoundTask();
        switch (object.method) {
          default:
            if (typeof object.method === 'number') {
              message.method = object.method;
              break;
            }
            break;
          case 'METHOD_ROUND_UP':
          case 0:
            message.method = 0;
            break;
          case 'METHOD_ROUND_DOWN':
          case 1:
            message.method = 1;
            break;
        }
        if (object.decimals != null) message.decimals = object.decimals | 0;
        return message;
      };

      /**
       * Creates a plain object from a RoundTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.RoundTask
       * @static
       * @param {OracleJob.RoundTask} message RoundTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      RoundTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.method = options.enums === String ? 'METHOD_ROUND_UP' : 0;
          object.decimals = 0;
        }
        if (message.method != null && message.hasOwnProperty('method'))
          object.method =
            options.enums === String
              ? $root.OracleJob.RoundTask.Method[message.method] === undefined
                ? message.method
                : $root.OracleJob.RoundTask.Method[message.method]
              : message.method;
        if (message.decimals != null && message.hasOwnProperty('decimals'))
          object.decimals = message.decimals;
        return object;
      };

      /**
       * Converts this RoundTask to JSON.
       * @function toJSON
       * @memberof OracleJob.RoundTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      RoundTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for RoundTask
       * @function getTypeUrl
       * @memberof OracleJob.RoundTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      RoundTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.RoundTask';
      };

      /**
       * Method enum.
       * @name OracleJob.RoundTask.Method
       * @enum {number}
       * @property {number} METHOD_ROUND_UP=0 Round the result down.
       * @property {number} METHOD_ROUND_DOWN=1 Round the result up.
       */
      RoundTask.Method = (function () {
        var valuesById = {},
          values = Object.create(valuesById);
        values[(valuesById[0] = 'METHOD_ROUND_UP')] = 0;
        values[(valuesById[1] = 'METHOD_ROUND_DOWN')] = 1;
        return values;
      })();

      return RoundTask;
    })();

    OracleJob.BoundTask = (function () {
      /**
       * Properties of a BoundTask.
       * @memberof OracleJob
       * @interface IBoundTask
       * @property {IOracleJob|null} [lowerBound] The OracleJob to execute for the lower bound value.
       * @property {string|null} [lowerBoundValue] The value to use for the lower bound. Can be set to a `${CACHE_KEY}`.
       * @property {IOracleJob|null} [upperBound] The OracleJob to execute for the upper bound value.
       * @property {string|null} [upperBoundValue] The value to use for the upper bound. Can be set to a `${CACHE_KEY}`.
       * @property {IOracleJob|null} [onExceedsUpperBound] The OracleJob to execute if the upper bound is exceeded.
       * @property {string|null} [onExceedsUpperBoundValue] The value to use if the upper bound is exceeded. Can be set to a `${CACHE_KEY}`.
       * @property {IOracleJob|null} [onExceedsLowerBound] The OracleJob to execute if the lower bound is exceeded.
       * @property {string|null} [onExceedsLowerBoundValue] The value to use if the lower bound is exceeded. Can be set to a `${CACHE_KEY}`.
       */

      /**
       * Constructs a new BoundTask.
       * @memberof OracleJob
       * @classdesc Bound the running result to an upper/lower bound. This is typically the last task in an OracleJob.
       *
       * _**Input**_: The current running numerical result.
       *
       * _**Returns**_: The running result bounded to an upper or lower bound if it exceeds a given threshold.
       *
       * _**Example**_: Bound the running result to a value between 0.90 and 1.10
       *
       * ```json
       * { "boundTask": { "lowerBoundValue": "0.90","onExceedsLowerBoundValue": "0.90","upperBoundValue": "1.10","onExceedsUpperBoundValue": "1.10" } }
       * ```
       * @implements IBoundTask
       * @constructor
       * @param {OracleJob.IBoundTask=} [properties] Properties to set
       */
      function BoundTask(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The OracleJob to execute for the lower bound value.
       * @member {IOracleJob|null|undefined} lowerBound
       * @memberof OracleJob.BoundTask
       * @instance
       */
      BoundTask.prototype.lowerBound = null;

      /**
       * The value to use for the lower bound. Can be set to a `${CACHE_KEY}`.
       * @member {string} lowerBoundValue
       * @memberof OracleJob.BoundTask
       * @instance
       */
      BoundTask.prototype.lowerBoundValue = '';

      /**
       * The OracleJob to execute for the upper bound value.
       * @member {IOracleJob|null|undefined} upperBound
       * @memberof OracleJob.BoundTask
       * @instance
       */
      BoundTask.prototype.upperBound = null;

      /**
       * The value to use for the upper bound. Can be set to a `${CACHE_KEY}`.
       * @member {string} upperBoundValue
       * @memberof OracleJob.BoundTask
       * @instance
       */
      BoundTask.prototype.upperBoundValue = '';

      /**
       * The OracleJob to execute if the upper bound is exceeded.
       * @member {IOracleJob|null|undefined} onExceedsUpperBound
       * @memberof OracleJob.BoundTask
       * @instance
       */
      BoundTask.prototype.onExceedsUpperBound = null;

      /**
       * The value to use if the upper bound is exceeded. Can be set to a `${CACHE_KEY}`.
       * @member {string} onExceedsUpperBoundValue
       * @memberof OracleJob.BoundTask
       * @instance
       */
      BoundTask.prototype.onExceedsUpperBoundValue = '';

      /**
       * The OracleJob to execute if the lower bound is exceeded.
       * @member {IOracleJob|null|undefined} onExceedsLowerBound
       * @memberof OracleJob.BoundTask
       * @instance
       */
      BoundTask.prototype.onExceedsLowerBound = null;

      /**
       * The value to use if the lower bound is exceeded. Can be set to a `${CACHE_KEY}`.
       * @member {string} onExceedsLowerBoundValue
       * @memberof OracleJob.BoundTask
       * @instance
       */
      BoundTask.prototype.onExceedsLowerBoundValue = '';

      /**
       * Creates a new BoundTask instance using the specified properties.
       * @function create
       * @memberof OracleJob.BoundTask
       * @static
       * @param {OracleJob.IBoundTask=} [properties] Properties to set
       * @returns {OracleJob.BoundTask} BoundTask instance
       */
      BoundTask.create = function create(properties) {
        return new BoundTask(properties);
      };

      /**
       * Encodes the specified BoundTask message. Does not implicitly {@apilink OracleJob.BoundTask.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.BoundTask
       * @static
       * @param {OracleJob.IBoundTask} message BoundTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      BoundTask.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.lowerBound != null &&
          Object.hasOwnProperty.call(message, 'lowerBound')
        )
          $root.OracleJob.encode(
            message.lowerBound,
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
          ).ldelim();
        if (
          message.lowerBoundValue != null &&
          Object.hasOwnProperty.call(message, 'lowerBoundValue')
        )
          writer
            .uint32(/* id 2, wireType 2 =*/ 18)
            .string(message.lowerBoundValue);
        if (
          message.upperBound != null &&
          Object.hasOwnProperty.call(message, 'upperBound')
        )
          $root.OracleJob.encode(
            message.upperBound,
            writer.uint32(/* id 3, wireType 2 =*/ 26).fork()
          ).ldelim();
        if (
          message.upperBoundValue != null &&
          Object.hasOwnProperty.call(message, 'upperBoundValue')
        )
          writer
            .uint32(/* id 4, wireType 2 =*/ 34)
            .string(message.upperBoundValue);
        if (
          message.onExceedsUpperBound != null &&
          Object.hasOwnProperty.call(message, 'onExceedsUpperBound')
        )
          $root.OracleJob.encode(
            message.onExceedsUpperBound,
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
        if (
          message.onExceedsUpperBoundValue != null &&
          Object.hasOwnProperty.call(message, 'onExceedsUpperBoundValue')
        )
          writer
            .uint32(/* id 6, wireType 2 =*/ 50)
            .string(message.onExceedsUpperBoundValue);
        if (
          message.onExceedsLowerBound != null &&
          Object.hasOwnProperty.call(message, 'onExceedsLowerBound')
        )
          $root.OracleJob.encode(
            message.onExceedsLowerBound,
            writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
          ).ldelim();
        if (
          message.onExceedsLowerBoundValue != null &&
          Object.hasOwnProperty.call(message, 'onExceedsLowerBoundValue')
        )
          writer
            .uint32(/* id 8, wireType 2 =*/ 66)
            .string(message.onExceedsLowerBoundValue);
        return writer;
      };

      /**
       * Encodes the specified BoundTask message, length delimited. Does not implicitly {@apilink OracleJob.BoundTask.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.BoundTask
       * @static
       * @param {OracleJob.IBoundTask} message BoundTask message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      BoundTask.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a BoundTask message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.BoundTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.BoundTask} BoundTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      BoundTask.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.BoundTask();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.lowerBound = $root.OracleJob.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 2: {
              message.lowerBoundValue = reader.string();
              break;
            }
            case 3: {
              message.upperBound = $root.OracleJob.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 4: {
              message.upperBoundValue = reader.string();
              break;
            }
            case 5: {
              message.onExceedsUpperBound = $root.OracleJob.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 6: {
              message.onExceedsUpperBoundValue = reader.string();
              break;
            }
            case 7: {
              message.onExceedsLowerBound = $root.OracleJob.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 8: {
              message.onExceedsLowerBoundValue = reader.string();
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a BoundTask message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.BoundTask
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.BoundTask} BoundTask
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      BoundTask.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a BoundTask message.
       * @function verify
       * @memberof OracleJob.BoundTask
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      BoundTask.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        if (
          message.lowerBound != null &&
          message.hasOwnProperty('lowerBound')
        ) {
          var error = $root.OracleJob.verify(message.lowerBound);
          if (error) return 'lowerBound.' + error;
        }
        if (
          message.lowerBoundValue != null &&
          message.hasOwnProperty('lowerBoundValue')
        )
          if (!$util.isString(message.lowerBoundValue))
            return 'lowerBoundValue: string expected';
        if (
          message.upperBound != null &&
          message.hasOwnProperty('upperBound')
        ) {
          var error = $root.OracleJob.verify(message.upperBound);
          if (error) return 'upperBound.' + error;
        }
        if (
          message.upperBoundValue != null &&
          message.hasOwnProperty('upperBoundValue')
        )
          if (!$util.isString(message.upperBoundValue))
            return 'upperBoundValue: string expected';
        if (
          message.onExceedsUpperBound != null &&
          message.hasOwnProperty('onExceedsUpperBound')
        ) {
          var error = $root.OracleJob.verify(message.onExceedsUpperBound);
          if (error) return 'onExceedsUpperBound.' + error;
        }
        if (
          message.onExceedsUpperBoundValue != null &&
          message.hasOwnProperty('onExceedsUpperBoundValue')
        )
          if (!$util.isString(message.onExceedsUpperBoundValue))
            return 'onExceedsUpperBoundValue: string expected';
        if (
          message.onExceedsLowerBound != null &&
          message.hasOwnProperty('onExceedsLowerBound')
        ) {
          var error = $root.OracleJob.verify(message.onExceedsLowerBound);
          if (error) return 'onExceedsLowerBound.' + error;
        }
        if (
          message.onExceedsLowerBoundValue != null &&
          message.hasOwnProperty('onExceedsLowerBoundValue')
        )
          if (!$util.isString(message.onExceedsLowerBoundValue))
            return 'onExceedsLowerBoundValue: string expected';
        return null;
      };

      /**
       * Creates a BoundTask message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.BoundTask
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.BoundTask} BoundTask
       */
      BoundTask.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.BoundTask) return object;
        var message = new $root.OracleJob.BoundTask();
        if (object.lowerBound != null) {
          if (typeof object.lowerBound !== 'object')
            throw TypeError('.OracleJob.BoundTask.lowerBound: object expected');
          message.lowerBound = $root.OracleJob.fromObject(object.lowerBound);
        }
        if (object.lowerBoundValue != null)
          message.lowerBoundValue = String(object.lowerBoundValue);
        if (object.upperBound != null) {
          if (typeof object.upperBound !== 'object')
            throw TypeError('.OracleJob.BoundTask.upperBound: object expected');
          message.upperBound = $root.OracleJob.fromObject(object.upperBound);
        }
        if (object.upperBoundValue != null)
          message.upperBoundValue = String(object.upperBoundValue);
        if (object.onExceedsUpperBound != null) {
          if (typeof object.onExceedsUpperBound !== 'object')
            throw TypeError(
              '.OracleJob.BoundTask.onExceedsUpperBound: object expected'
            );
          message.onExceedsUpperBound = $root.OracleJob.fromObject(
            object.onExceedsUpperBound
          );
        }
        if (object.onExceedsUpperBoundValue != null)
          message.onExceedsUpperBoundValue = String(
            object.onExceedsUpperBoundValue
          );
        if (object.onExceedsLowerBound != null) {
          if (typeof object.onExceedsLowerBound !== 'object')
            throw TypeError(
              '.OracleJob.BoundTask.onExceedsLowerBound: object expected'
            );
          message.onExceedsLowerBound = $root.OracleJob.fromObject(
            object.onExceedsLowerBound
          );
        }
        if (object.onExceedsLowerBoundValue != null)
          message.onExceedsLowerBoundValue = String(
            object.onExceedsLowerBoundValue
          );
        return message;
      };

      /**
       * Creates a plain object from a BoundTask message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.BoundTask
       * @static
       * @param {OracleJob.BoundTask} message BoundTask
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      BoundTask.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (options.defaults) {
          object.lowerBound = null;
          object.lowerBoundValue = '';
          object.upperBound = null;
          object.upperBoundValue = '';
          object.onExceedsUpperBound = null;
          object.onExceedsUpperBoundValue = '';
          object.onExceedsLowerBound = null;
          object.onExceedsLowerBoundValue = '';
        }
        if (message.lowerBound != null && message.hasOwnProperty('lowerBound'))
          object.lowerBound = $root.OracleJob.toObject(
            message.lowerBound,
            options
          );
        if (
          message.lowerBoundValue != null &&
          message.hasOwnProperty('lowerBoundValue')
        )
          object.lowerBoundValue = message.lowerBoundValue;
        if (message.upperBound != null && message.hasOwnProperty('upperBound'))
          object.upperBound = $root.OracleJob.toObject(
            message.upperBound,
            options
          );
        if (
          message.upperBoundValue != null &&
          message.hasOwnProperty('upperBoundValue')
        )
          object.upperBoundValue = message.upperBoundValue;
        if (
          message.onExceedsUpperBound != null &&
          message.hasOwnProperty('onExceedsUpperBound')
        )
          object.onExceedsUpperBound = $root.OracleJob.toObject(
            message.onExceedsUpperBound,
            options
          );
        if (
          message.onExceedsUpperBoundValue != null &&
          message.hasOwnProperty('onExceedsUpperBoundValue')
        )
          object.onExceedsUpperBoundValue = message.onExceedsUpperBoundValue;
        if (
          message.onExceedsLowerBound != null &&
          message.hasOwnProperty('onExceedsLowerBound')
        )
          object.onExceedsLowerBound = $root.OracleJob.toObject(
            message.onExceedsLowerBound,
            options
          );
        if (
          message.onExceedsLowerBoundValue != null &&
          message.hasOwnProperty('onExceedsLowerBoundValue')
        )
          object.onExceedsLowerBoundValue = message.onExceedsLowerBoundValue;
        return object;
      };

      /**
       * Converts this BoundTask to JSON.
       * @function toJSON
       * @memberof OracleJob.BoundTask
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      BoundTask.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for BoundTask
       * @function getTypeUrl
       * @memberof OracleJob.BoundTask
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      BoundTask.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.BoundTask';
      };

      return BoundTask;
    })();

    OracleJob.Task = (function () {
      /**
       * Properties of a Task.
       * @memberof OracleJob
       * @interface ITask
       * @property {OracleJob.IHttpTask|null} [httpTask] The adapter will report the text body of a successful HTTP request to the
       * specified url, or return an error if the response status code is greater
       * than or equal to 400.
       *
       * _**Input**_: None
       *
       * _**Returns**_: String representation of the http response.
       *
       * _**Example**_: Basic HttpTask
       *
       * ```json
       * {"httpTask": {"url": "https://mywebsite.org/path"} }
       * ```
       *
       * _**Example**_: HttpTask example with headers
       *
       * ```json
       * { "httpTask": { "url": "https://mywebsite.org/path", "method": "METHOD_POST", "headers": [ { "key": "MY_HEADER_KEY", "value": "MY_HEADER_VALUE" } ], "body": "{\"MY_BODY_KEY\":\"MY_BODY_VALUE\"}" } }
       * ```
       * @property {OracleJob.IJsonParseTask|null} [jsonParseTask] The adapter walks the path specified and returns the value found at that result. If returning
       * JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the response.
       *
       * _**Input**_: String representation of a JSON object.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Parses the price field from a JSON object
       *
       * ```json
       * {"jsonParse": {"path": "$.price"} }
       * ```
       * @property {OracleJob.IMedianTask|null} [medianTask] Returns the median (middle) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the median numerical result of 3 tasks.
       *
       * ```json
       * {"medianTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the median numerical result of 3 jobs.
       *
       * ```json
       * {"medianTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @property {OracleJob.IMeanTask|null} [meanTask] Returns the mean (average) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the mean numerical result of 3 tasks.
       *
       * ```json
       * {"meanTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the mean numerical result of 3 jobs.
       *
       * ```json
       * {"meanTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @property {OracleJob.IWebsocketTask|null} [websocketTask] Opens and maintains a websocket for light speed data retrieval.
       *
       * _**Input**_: None
       *
       * _**Returns**_: String representation of the websocket subscription message.
       *
       * _**Example**_: Opens a coinbase websocket
       *
       * ```json
       * { "websocketTask": { "url": "wss://ws-feed.pro.coinbase.com", "subscription": "{\"type\":\"subscribe\",\"product_ids\":[\"BTC-USD\"],\"channels\":[\"ticker\",{\"name\":\"ticker\",\"product_ids\":[\"BTC-USD\"]}]}", "maxDataAgeSeconds": 15, "filter": "$[?(@.type == 'ticker' && @.product_id == 'BTC-USD')]" } }
       * ```
       * @property {OracleJob.IDivideTask|null} [divideTask] This task will divide a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by dividing by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by dividing by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by dividing by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"divideTask":{"big":"${TEN}"}}]}
       * ```
       * @property {OracleJob.IMultiplyTask|null} [multiplyTask] This task will multiply a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by multiplying by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"multiplyTask":{"big":"${TEN}"}}]}
       * ```
       * @property {OracleJob.ILpTokenPriceTask|null} [lpTokenPriceTask] Fetch LP token price info from a number of supported exchanges.
       *
       * See our blog post on [Fair LP Token Oracles](/blog/2022/01/20/Fair-LP-Token-Oracles)
       *
       * *NOTE**: This is not the swap price but the price of the underlying LP token.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The price of an LP token for a given AMM pool.
       *
       * _**Example**_: Fetch the Orca LP token price of the SOL/USDC pool
       *
       * ```json
       * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
       * ```
       *
       * _**Example**_: Fetch the fair price Orca LP token price of the SOL/USDC pool
       *
       * ```json
       * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9", "useFairPrice": true, "priceFeedAddresses": [ "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
       * ```
       *
       * _**Example**_: Fetch the fair price Raydium LP token price of the SOL/USDC pool
       *
       * ```json
       * { "lpTokenPriceTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "useFairPrice": true,"priceFeedAddresses": ["GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR","BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
       * ```
       * @property {OracleJob.ILpExchangeRateTask|null} [lpExchangeRateTask] Fetch the current swap price for a given liquidity pool
       *
       * _**Input**_: None
       *
       * _**Returns**_: The swap price for a given AMM pool.
       *
       * _**Example**_: Fetch the exchange rate from the Orca SOL/USDC pool
       *
       * ```json
       * { "lpExchangeRateTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
       * ```
       *
       * _**Example**_: Fetch the exchange rate from the Raydium SOL/USDC pool
       *
       * ```json
       * { "lpExchangeRateTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2" } }
       * ```
       * @property {OracleJob.IConditionalTask|null} [conditionalTask] This task will run the `attempt` on the subtasks in an effort to produce a valid numerical result. If `attempt`. fails to produce an acceptable result, `on_failure` subtasks will be run instead.
       *
       * _**Input**_: The current running numerical result output from a task.
       *
       * _**Returns**_: A numerical result, else run `on_failure` subtasks.
       *
       * _**Example**_: Returns the numerical result from the conditionalTask's subtasks, else `on_failure` returns the numerical result from its subtasks.
       *
       * ```json
       * {"conditionalTask":{"attempt":[{"tasks":[{"jupiterSwapTask":{"inTokenAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outTokenAddress":"DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ"}}]}],"onFailure":[{"lpExchangeRateTask":{"orcaPoolAddress":"7yJ4gMRJhEoCR48aPE3EAWRmCoygakik81ZS1sajaTnE"}}]}}
       * ```
       * @property {OracleJob.IValueTask|null} [valueTask] Returns a specified value.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the value 10
       *
       * ```json
       * {"valueTask": {"value": 10} }
       * ```
       *
       * _**Example**_: Returns the currentRound result of an aggregator
       *
       * ```json
       * {"valueTask": {"aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"} }
       * ```
       *
       * _**Example**_: Returns the value stored in a CacheTask variable
       *
       * ```json
       * {"valueTask": {"big": "${ONE}"} }
       * ```
       * @property {OracleJob.IMaxTask|null} [maxTask] Returns the maximum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the maximum numerical result from 3 tasks.
       *
       * ```json
       * {"maxTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the minimum numerical result from 3 jobs.
       *
       * ```json
       * {"maxTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @property {OracleJob.IRegexExtractTask|null} [regexExtractTask] Task regexExtractTask
       * @property {OracleJob.IXStepPriceTask|null} [xstepPriceTask] Task xstepPriceTask
       * @property {OracleJob.IAddTask|null} [addTask] This task will add a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by adding by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"addTask":{"big":"${TEN}"}}]}
       * ```
       * @property {OracleJob.ISubtractTask|null} [subtractTask] This task will subtract a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by subtracting by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"subtractTask":{"big":"${TEN}"}}]}
       * ```
       * @property {OracleJob.ITwapTask|null} [twapTask] Takes a twap over a set period for a certain aggregator. Aggregators have an optional history buffer account storing the last N accepted results. The TwapTask will iterate over an aggregators history buffer and calculate the time weighted average of the samples within a given time period.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The time weighted average of an aggregator over a given time period.
       *
       * _**Example**_: The 1hr Twap of the SOL/USD Aggregator, requiring at least 60 samples.
       *
       * ```json
       * { "twapTask": { "aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "period": 3600, "minSamples": 60, "weightByPropagationTime": true  } }
       * ```
       * @property {OracleJob.ISerumSwapTask|null} [serumSwapTask] Task serumSwapTask
       * @property {OracleJob.IPowTask|null} [powTask] Round the current running result to an exponential power.
       *
       * _**Input**_: The current running numerical result.
       *
       * _**Returns**_: The input raised to an exponential power.
       *
       * _**Example**_: Raise 2 to the power of 3, 2^3
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":2}},{"powTask":{"scalar":3}}]}
       * ```
       * @property {OracleJob.ILendingRateTask|null} [lendingRateTask] Task lendingRateTask
       * @property {OracleJob.IMangoPerpMarketTask|null} [mangoPerpMarketTask] Task mangoPerpMarketTask
       * @property {OracleJob.IJupiterSwapTask|null} [jupiterSwapTask] Fetch the simulated price for a swap on JupiterSwap.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The swap price on Jupiter for a given input and output token mint address.
       *
       * _**Example**_: Fetch the JupiterSwap price for exchanging 1 SOL into USDC.
       *
       * ```json
       * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" } }
       * ```
       *
       * _**Example**_: Fetch the JupiterSwap price for exchanging 1000 SOL into USDC.
       *
       * ```json
       * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "baseAmount": "1000" } }
       * ```
       * @property {OracleJob.IPerpMarketTask|null} [perpMarketTask] Task perpMarketTask
       * @property {OracleJob.IOracleTask|null} [oracleTask] Fetch the current price of a Solana oracle protocol.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The current price of an on-chain oracle.
       *
       * _**Example**_: The Switchboard SOL/USD oracle price.
       *
       * ```json
       * { "oracleTask": { "switchboardAddress": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR" } }
       * ```
       *
       * _**Example**_: The Pyth SOL/USD oracle price.
       *
       * ```json
       * { "oracleTask": { "pythAddress": "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG" } }
       * ```
       *
       * _**Example**_: The Chainlink SOL/USD oracle price.
       *
       * ```json
       * { "oracleTask": { "chainlinkAddress": "CcPVS9bqyXbD9cLnTbhhHazLsrua8QMFUHTutPtjyDzq" } }
       * ```
       * @property {OracleJob.IAnchorFetchTask|null} [anchorFetchTask] Task anchorFetchTask
       * @property {OracleJob.IDefiKingdomsTask|null} [defiKingdomsTask] Task defiKingdomsTask
       * @property {OracleJob.ITpsTask|null} [tpsTask] Task tpsTask
       * @property {OracleJob.ISplStakePoolTask|null} [splStakePoolTask] Task splStakePoolTask
       * @property {OracleJob.ISplTokenParseTask|null} [splTokenParseTask] Task splTokenParseTask
       * @property {OracleJob.IUniswapExchangeRateTask|null} [uniswapExchangeRateTask] Task uniswapExchangeRateTask
       * @property {OracleJob.ISushiswapExchangeRateTask|null} [sushiswapExchangeRateTask] Task sushiswapExchangeRateTask
       * @property {OracleJob.IPancakeswapExchangeRateTask|null} [pancakeswapExchangeRateTask] Task pancakeswapExchangeRateTask
       * @property {OracleJob.ICacheTask|null} [cacheTask] Execute a job and store the result in a variable to reference later.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The input
       *
       * _**Example**_: CacheTask storing ${ONE} = 1
       *
       * ```json
       * { "cacheTask": { "cacheItems": [ { "variableName": "ONE", "job": { "tasks": [ { "valueTask": { "value": 1 } } ] } } ] } }
       * ```
       * @property {OracleJob.ISysclockOffsetTask|null} [sysclockOffsetTask] Task sysclockOffsetTask
       * @property {OracleJob.IMarinadeStateTask|null} [marinadeStateTask] Task marinadeStateTask
       * @property {OracleJob.ISolanaAccountDataFetchTask|null} [solanaAccountDataFetchTask] Task solanaAccountDataFetchTask
       * @property {OracleJob.IBufferLayoutParseTask|null} [bufferLayoutParseTask] Task bufferLayoutParseTask
       * @property {OracleJob.ICronParseTask|null} [cronParseTask] Return a timestamp from a crontab instruction.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A timestamp
       *
       * _**Example**_: Return the unix timestamp for the on-chain SYSCLOCK
       *
       * ```json
       * {"cronParseTask":{"cronPattern":"* * * * * *","clockOffset":0,"clock":"SYSCLOCK"}}
       * ```
       *
       * _**Example**_: Return the unix timestamp for next friday at 5pm UTC
       *
       * ```json
       * {"cronParseTask":{"cronPattern":"0 17 * * 5","clockOffset":0,"clock":0}}
       * ```
       * @property {OracleJob.IMinTask|null} [minTask] Returns the minimum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the minimum numerical result from 3 tasks.
       *
       * ```json
       * {"minTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the minimum numerical result from 3 jobs.
       *
       * ```json
       * {"minTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @property {OracleJob.IHistoryFunctionTask|null} [historyFunctionTask] Task historyFunctionTask
       * @property {OracleJob.IVwapTask|null} [vwapTask] Task vwapTask
       * @property {OracleJob.IEwmaTask|null} [ewmaTask] Task ewmaTask
       * @property {OracleJob.IComparisonTask|null} [comparisonTask] Task comparisonTask
       * @property {OracleJob.IRoundTask|null} [roundTask] Round the current running result to a set number of decimal places.
       *
       * _**Input**_: The current running numerical result.
       *
       * _**Returns**_: The running result rounded to a set number of decimal places.
       *
       * _**Example**_: Round down the running resul to 8 decimal places
       *
       * ```json
       * { "roundTask": { "method": "METHOD_ROUND_DOWN", "decimals": 8 } }
       * ```
       * @property {OracleJob.IBoundTask|null} [boundTask] Bound the running result to an upper/lower bound. This is typically the last task in an OracleJob.
       *
       * _**Input**_: The current running numerical result.
       *
       * _**Returns**_: The running result bounded to an upper or lower bound if it exceeds a given threshold.
       *
       * _**Example**_: Bound the running result to a value between 0.90 and 1.10
       *
       * ```json
       * { "boundTask": { "lowerBoundValue": "0.90","onExceedsLowerBoundValue": "0.90","upperBoundValue": "1.10","onExceedsUpperBoundValue": "1.10" } }
       * ```
       */

      /**
       * Constructs a new Task.
       * @memberof OracleJob
       * @classdesc Represents a singular operation performed by an oracle to yield an eventual numerical result.
       * @implements ITask
       * @constructor
       * @param {OracleJob.ITask=} [properties] Properties to set
       */
      function Task(properties) {
        if (properties)
          for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
            if (properties[keys[i]] != null)
              this[keys[i]] = properties[keys[i]];
      }

      /**
       * The adapter will report the text body of a successful HTTP request to the
       * specified url, or return an error if the response status code is greater
       * than or equal to 400.
       *
       * _**Input**_: None
       *
       * _**Returns**_: String representation of the http response.
       *
       * _**Example**_: Basic HttpTask
       *
       * ```json
       * {"httpTask": {"url": "https://mywebsite.org/path"} }
       * ```
       *
       * _**Example**_: HttpTask example with headers
       *
       * ```json
       * { "httpTask": { "url": "https://mywebsite.org/path", "method": "METHOD_POST", "headers": [ { "key": "MY_HEADER_KEY", "value": "MY_HEADER_VALUE" } ], "body": "{\"MY_BODY_KEY\":\"MY_BODY_VALUE\"}" } }
       * ```
       * @member {OracleJob.IHttpTask|null|undefined} httpTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.httpTask = null;

      /**
       * The adapter walks the path specified and returns the value found at that result. If returning
       * JSON data from the HttpGet or HttpPost adapters, you must use this adapter to parse the response.
       *
       * _**Input**_: String representation of a JSON object.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Parses the price field from a JSON object
       *
       * ```json
       * {"jsonParse": {"path": "$.price"} }
       * ```
       * @member {OracleJob.IJsonParseTask|null|undefined} jsonParseTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.jsonParseTask = null;

      /**
       * Returns the median (middle) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the median numerical result of 3 tasks.
       *
       * ```json
       * {"medianTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the median numerical result of 3 jobs.
       *
       * ```json
       * {"medianTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @member {OracleJob.IMedianTask|null|undefined} medianTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.medianTask = null;

      /**
       * Returns the mean (average) of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the mean numerical result of 3 tasks.
       *
       * ```json
       * {"meanTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the mean numerical result of 3 jobs.
       *
       * ```json
       * {"meanTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @member {OracleJob.IMeanTask|null|undefined} meanTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.meanTask = null;

      /**
       * Opens and maintains a websocket for light speed data retrieval.
       *
       * _**Input**_: None
       *
       * _**Returns**_: String representation of the websocket subscription message.
       *
       * _**Example**_: Opens a coinbase websocket
       *
       * ```json
       * { "websocketTask": { "url": "wss://ws-feed.pro.coinbase.com", "subscription": "{\"type\":\"subscribe\",\"product_ids\":[\"BTC-USD\"],\"channels\":[\"ticker\",{\"name\":\"ticker\",\"product_ids\":[\"BTC-USD\"]}]}", "maxDataAgeSeconds": 15, "filter": "$[?(@.type == 'ticker' && @.product_id == 'BTC-USD')]" } }
       * ```
       * @member {OracleJob.IWebsocketTask|null|undefined} websocketTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.websocketTask = null;

      /**
       * This task will divide a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by dividing by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by dividing by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"divideTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by dividing by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"divideTask":{"big":"${TEN}"}}]}
       * ```
       * @member {OracleJob.IDivideTask|null|undefined} divideTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.divideTask = null;

      /**
       * This task will multiply a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by multiplying by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"multiplyTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"multiplyTask":{"big":"${TEN}"}}]}
       * ```
       * @member {OracleJob.IMultiplyTask|null|undefined} multiplyTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.multiplyTask = null;

      /**
       * Fetch LP token price info from a number of supported exchanges.
       *
       * See our blog post on [Fair LP Token Oracles](/blog/2022/01/20/Fair-LP-Token-Oracles)
       *
       * *NOTE**: This is not the swap price but the price of the underlying LP token.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The price of an LP token for a given AMM pool.
       *
       * _**Example**_: Fetch the Orca LP token price of the SOL/USDC pool
       *
       * ```json
       * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
       * ```
       *
       * _**Example**_: Fetch the fair price Orca LP token price of the SOL/USDC pool
       *
       * ```json
       * { "lpTokenPriceTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9", "useFairPrice": true, "priceFeedAddresses": [ "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
       * ```
       *
       * _**Example**_: Fetch the fair price Raydium LP token price of the SOL/USDC pool
       *
       * ```json
       * { "lpTokenPriceTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2", "useFairPrice": true,"priceFeedAddresses": ["GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR","BjUgj6YCnFBZ49wF54ddBVA9qu8TeqkFtkbqmZcee8uW" ] } }
       * ```
       * @member {OracleJob.ILpTokenPriceTask|null|undefined} lpTokenPriceTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.lpTokenPriceTask = null;

      /**
       * Fetch the current swap price for a given liquidity pool
       *
       * _**Input**_: None
       *
       * _**Returns**_: The swap price for a given AMM pool.
       *
       * _**Example**_: Fetch the exchange rate from the Orca SOL/USDC pool
       *
       * ```json
       * { "lpExchangeRateTask": { "orcaPoolAddress": "APDFRM3HMr8CAGXwKHiu2f5ePSpaiEJhaURwhsRrUUt9" } }
       * ```
       *
       * _**Example**_: Fetch the exchange rate from the Raydium SOL/USDC pool
       *
       * ```json
       * { "lpExchangeRateTask": { "raydiumPoolAddress": "58oQChx4yWmvKdwLLZzBi4ChoCc2fqCUWBkwMihLYQo2" } }
       * ```
       * @member {OracleJob.ILpExchangeRateTask|null|undefined} lpExchangeRateTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.lpExchangeRateTask = null;

      /**
       * This task will run the `attempt` on the subtasks in an effort to produce a valid numerical result. If `attempt`. fails to produce an acceptable result, `on_failure` subtasks will be run instead.
       *
       * _**Input**_: The current running numerical result output from a task.
       *
       * _**Returns**_: A numerical result, else run `on_failure` subtasks.
       *
       * _**Example**_: Returns the numerical result from the conditionalTask's subtasks, else `on_failure` returns the numerical result from its subtasks.
       *
       * ```json
       * {"conditionalTask":{"attempt":[{"tasks":[{"jupiterSwapTask":{"inTokenAddress":"EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v","outTokenAddress":"DUALa4FC2yREwZ59PHeu1un4wis36vHRv5hWVBmzykCJ"}}]}],"onFailure":[{"lpExchangeRateTask":{"orcaPoolAddress":"7yJ4gMRJhEoCR48aPE3EAWRmCoygakik81ZS1sajaTnE"}}]}}
       * ```
       * @member {OracleJob.IConditionalTask|null|undefined} conditionalTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.conditionalTask = null;

      /**
       * Returns a specified value.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the value 10
       *
       * ```json
       * {"valueTask": {"value": 10} }
       * ```
       *
       * _**Example**_: Returns the currentRound result of an aggregator
       *
       * ```json
       * {"valueTask": {"aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"} }
       * ```
       *
       * _**Example**_: Returns the value stored in a CacheTask variable
       *
       * ```json
       * {"valueTask": {"big": "${ONE}"} }
       * ```
       * @member {OracleJob.IValueTask|null|undefined} valueTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.valueTask = null;

      /**
       * Returns the maximum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the maximum numerical result from 3 tasks.
       *
       * ```json
       * {"maxTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the minimum numerical result from 3 jobs.
       *
       * ```json
       * {"maxTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @member {OracleJob.IMaxTask|null|undefined} maxTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.maxTask = null;

      /**
       * Task regexExtractTask.
       * @member {OracleJob.IRegexExtractTask|null|undefined} regexExtractTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.regexExtractTask = null;

      /**
       * Task xstepPriceTask.
       * @member {OracleJob.IXStepPriceTask|null|undefined} xstepPriceTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.xstepPriceTask = null;

      /**
       * This task will add a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by adding by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"addTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"addTask":{"big":"${TEN}"}}]}
       * ```
       * @member {OracleJob.IAddTask|null|undefined} addTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.addTask = null;

      /**
       * This task will subtract a numerical input by a scalar value from a job of subtasks, an aggregator, or a big.
       *
       * _**Input**_: The current running numerical result output from a scalar value, an aggregator, a job of subtasks or a big.
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the numerical result by subtracting by a job of subtasks.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"job":{"tasks":[{"valueTask":{"value":10}}]}}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by an aggregator.
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":100}},{"subtractTask":{"aggregatorPubkey":"GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR"}}]}
       * ```
       *
       * _**Example**_: Returns the numerical result by multiplying by a big.
       *
       * ```json
       * {"tasks":[{"cacheTask":{"cacheItems":[{"variableName":"TEN","job":{"tasks":[{"valueTask":{"value":10}}]}}]}},{"valueTask":{"value":100}},{"subtractTask":{"big":"${TEN}"}}]}
       * ```
       * @member {OracleJob.ISubtractTask|null|undefined} subtractTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.subtractTask = null;

      /**
       * Takes a twap over a set period for a certain aggregator. Aggregators have an optional history buffer account storing the last N accepted results. The TwapTask will iterate over an aggregators history buffer and calculate the time weighted average of the samples within a given time period.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The time weighted average of an aggregator over a given time period.
       *
       * _**Example**_: The 1hr Twap of the SOL/USD Aggregator, requiring at least 60 samples.
       *
       * ```json
       * { "twapTask": { "aggregatorPubkey": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR", "period": 3600, "minSamples": 60, "weightByPropagationTime": true  } }
       * ```
       * @member {OracleJob.ITwapTask|null|undefined} twapTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.twapTask = null;

      /**
       * Task serumSwapTask.
       * @member {OracleJob.ISerumSwapTask|null|undefined} serumSwapTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.serumSwapTask = null;

      /**
       * Round the current running result to an exponential power.
       *
       * _**Input**_: The current running numerical result.
       *
       * _**Returns**_: The input raised to an exponential power.
       *
       * _**Example**_: Raise 2 to the power of 3, 2^3
       *
       * ```json
       * {"tasks":[{"valueTask":{"value":2}},{"powTask":{"scalar":3}}]}
       * ```
       * @member {OracleJob.IPowTask|null|undefined} powTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.powTask = null;

      /**
       * Task lendingRateTask.
       * @member {OracleJob.ILendingRateTask|null|undefined} lendingRateTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.lendingRateTask = null;

      /**
       * Task mangoPerpMarketTask.
       * @member {OracleJob.IMangoPerpMarketTask|null|undefined} mangoPerpMarketTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.mangoPerpMarketTask = null;

      /**
       * Fetch the simulated price for a swap on JupiterSwap.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The swap price on Jupiter for a given input and output token mint address.
       *
       * _**Example**_: Fetch the JupiterSwap price for exchanging 1 SOL into USDC.
       *
       * ```json
       * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v" } }
       * ```
       *
       * _**Example**_: Fetch the JupiterSwap price for exchanging 1000 SOL into USDC.
       *
       * ```json
       * { "jupiterSwapTask": { "inTokenAddress": "So11111111111111111111111111111111111111112", "outTokenAddress": "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v", "baseAmount": "1000" } }
       * ```
       * @member {OracleJob.IJupiterSwapTask|null|undefined} jupiterSwapTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.jupiterSwapTask = null;

      /**
       * Task perpMarketTask.
       * @member {OracleJob.IPerpMarketTask|null|undefined} perpMarketTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.perpMarketTask = null;

      /**
       * Fetch the current price of a Solana oracle protocol.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The current price of an on-chain oracle.
       *
       * _**Example**_: The Switchboard SOL/USD oracle price.
       *
       * ```json
       * { "oracleTask": { "switchboardAddress": "GvDMxPzN1sCj7L26YDK2HnMRXEQmQ2aemov8YBtPS7vR" } }
       * ```
       *
       * _**Example**_: The Pyth SOL/USD oracle price.
       *
       * ```json
       * { "oracleTask": { "pythAddress": "H6ARHf6YXhGYeQfUzQNGk6rDNnLBQKrenN712K4AQJEG" } }
       * ```
       *
       * _**Example**_: The Chainlink SOL/USD oracle price.
       *
       * ```json
       * { "oracleTask": { "chainlinkAddress": "CcPVS9bqyXbD9cLnTbhhHazLsrua8QMFUHTutPtjyDzq" } }
       * ```
       * @member {OracleJob.IOracleTask|null|undefined} oracleTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.oracleTask = null;

      /**
       * Task anchorFetchTask.
       * @member {OracleJob.IAnchorFetchTask|null|undefined} anchorFetchTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.anchorFetchTask = null;

      /**
       * Task defiKingdomsTask.
       * @member {OracleJob.IDefiKingdomsTask|null|undefined} defiKingdomsTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.defiKingdomsTask = null;

      /**
       * Task tpsTask.
       * @member {OracleJob.ITpsTask|null|undefined} tpsTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.tpsTask = null;

      /**
       * Task splStakePoolTask.
       * @member {OracleJob.ISplStakePoolTask|null|undefined} splStakePoolTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.splStakePoolTask = null;

      /**
       * Task splTokenParseTask.
       * @member {OracleJob.ISplTokenParseTask|null|undefined} splTokenParseTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.splTokenParseTask = null;

      /**
       * Task uniswapExchangeRateTask.
       * @member {OracleJob.IUniswapExchangeRateTask|null|undefined} uniswapExchangeRateTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.uniswapExchangeRateTask = null;

      /**
       * Task sushiswapExchangeRateTask.
       * @member {OracleJob.ISushiswapExchangeRateTask|null|undefined} sushiswapExchangeRateTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.sushiswapExchangeRateTask = null;

      /**
       * Task pancakeswapExchangeRateTask.
       * @member {OracleJob.IPancakeswapExchangeRateTask|null|undefined} pancakeswapExchangeRateTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.pancakeswapExchangeRateTask = null;

      /**
       * Execute a job and store the result in a variable to reference later.
       *
       * _**Input**_: None
       *
       * _**Returns**_: The input
       *
       * _**Example**_: CacheTask storing ${ONE} = 1
       *
       * ```json
       * { "cacheTask": { "cacheItems": [ { "variableName": "ONE", "job": { "tasks": [ { "valueTask": { "value": 1 } } ] } } ] } }
       * ```
       * @member {OracleJob.ICacheTask|null|undefined} cacheTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.cacheTask = null;

      /**
       * Task sysclockOffsetTask.
       * @member {OracleJob.ISysclockOffsetTask|null|undefined} sysclockOffsetTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.sysclockOffsetTask = null;

      /**
       * Task marinadeStateTask.
       * @member {OracleJob.IMarinadeStateTask|null|undefined} marinadeStateTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.marinadeStateTask = null;

      /**
       * Task solanaAccountDataFetchTask.
       * @member {OracleJob.ISolanaAccountDataFetchTask|null|undefined} solanaAccountDataFetchTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.solanaAccountDataFetchTask = null;

      /**
       * Task bufferLayoutParseTask.
       * @member {OracleJob.IBufferLayoutParseTask|null|undefined} bufferLayoutParseTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.bufferLayoutParseTask = null;

      /**
       * Return a timestamp from a crontab instruction.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A timestamp
       *
       * _**Example**_: Return the unix timestamp for the on-chain SYSCLOCK
       *
       * ```json
       * {"cronParseTask":{"cronPattern":"* * * * * *","clockOffset":0,"clock":"SYSCLOCK"}}
       * ```
       *
       * _**Example**_: Return the unix timestamp for next friday at 5pm UTC
       *
       * ```json
       * {"cronParseTask":{"cronPattern":"0 17 * * 5","clockOffset":0,"clock":0}}
       * ```
       * @member {OracleJob.ICronParseTask|null|undefined} cronParseTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.cronParseTask = null;

      /**
       * Returns the minimum value of all the results returned by the provided subtasks and subjobs. Nested tasks or jobs must return a Number.
       *
       * _**Input**_: None
       *
       * _**Returns**_: A numerical result.
       *
       * _**Example**_: Returns the minimum numerical result from 3 tasks.
       *
       * ```json
       * {"minTask": {"tasks": [{"valueTask": {"value": 10}},{"valueTask": {"value": 20}},{"valueTask": {"value": 30}}]}}
       * ```
       *
       * _**Example**_: Returns the minimum numerical result from 3 jobs.
       *
       * ```json
       * {"minTask": {"jobs": [{"tasks": [{"httpTask": {"url": "https://www.binance.com/api/v3/ticker/price?symbol=SOLUSDT"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://www.binance.us/api/v3/ticker/price?symbol=SOLUSD"}},{"jsonParseTask": {"path": "$.price"}}]},{"tasks": [{"httpTask": {"url": "https://api-pub.bitfinex.com/v2/tickers?symbols=tSOLUSD"}},{"jsonParseTask": {"path": "$[0][7]"}}]}]}}
       * ```
       * @member {OracleJob.IMinTask|null|undefined} minTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.minTask = null;

      /**
       * Task historyFunctionTask.
       * @member {OracleJob.IHistoryFunctionTask|null|undefined} historyFunctionTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.historyFunctionTask = null;

      /**
       * Task vwapTask.
       * @member {OracleJob.IVwapTask|null|undefined} vwapTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.vwapTask = null;

      /**
       * Task ewmaTask.
       * @member {OracleJob.IEwmaTask|null|undefined} ewmaTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.ewmaTask = null;

      /**
       * Task comparisonTask.
       * @member {OracleJob.IComparisonTask|null|undefined} comparisonTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.comparisonTask = null;

      /**
       * Round the current running result to a set number of decimal places.
       *
       * _**Input**_: The current running numerical result.
       *
       * _**Returns**_: The running result rounded to a set number of decimal places.
       *
       * _**Example**_: Round down the running resul to 8 decimal places
       *
       * ```json
       * { "roundTask": { "method": "METHOD_ROUND_DOWN", "decimals": 8 } }
       * ```
       * @member {OracleJob.IRoundTask|null|undefined} roundTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.roundTask = null;

      /**
       * Bound the running result to an upper/lower bound. This is typically the last task in an OracleJob.
       *
       * _**Input**_: The current running numerical result.
       *
       * _**Returns**_: The running result bounded to an upper or lower bound if it exceeds a given threshold.
       *
       * _**Example**_: Bound the running result to a value between 0.90 and 1.10
       *
       * ```json
       * { "boundTask": { "lowerBoundValue": "0.90","onExceedsLowerBoundValue": "0.90","upperBoundValue": "1.10","onExceedsUpperBoundValue": "1.10" } }
       * ```
       * @member {OracleJob.IBoundTask|null|undefined} boundTask
       * @memberof OracleJob.Task
       * @instance
       */
      Task.prototype.boundTask = null;

      // OneOf field names bound to virtual getters and setters
      var $oneOfFields;

      /**
       * Task Task.
       * @member {"httpTask"|"jsonParseTask"|"medianTask"|"meanTask"|"websocketTask"|"divideTask"|"multiplyTask"|"lpTokenPriceTask"|"lpExchangeRateTask"|"conditionalTask"|"valueTask"|"maxTask"|"regexExtractTask"|"xstepPriceTask"|"addTask"|"subtractTask"|"twapTask"|"serumSwapTask"|"powTask"|"lendingRateTask"|"mangoPerpMarketTask"|"jupiterSwapTask"|"perpMarketTask"|"oracleTask"|"anchorFetchTask"|"defiKingdomsTask"|"tpsTask"|"splStakePoolTask"|"splTokenParseTask"|"uniswapExchangeRateTask"|"sushiswapExchangeRateTask"|"pancakeswapExchangeRateTask"|"cacheTask"|"sysclockOffsetTask"|"marinadeStateTask"|"solanaAccountDataFetchTask"|"bufferLayoutParseTask"|"cronParseTask"|"minTask"|"historyFunctionTask"|"vwapTask"|"ewmaTask"|"comparisonTask"|"roundTask"|"boundTask"|undefined} Task
       * @memberof OracleJob.Task
       * @instance
       */
      Object.defineProperty(Task.prototype, 'Task', {
        get: $util.oneOfGetter(
          ($oneOfFields = [
            'httpTask',
            'jsonParseTask',
            'medianTask',
            'meanTask',
            'websocketTask',
            'divideTask',
            'multiplyTask',
            'lpTokenPriceTask',
            'lpExchangeRateTask',
            'conditionalTask',
            'valueTask',
            'maxTask',
            'regexExtractTask',
            'xstepPriceTask',
            'addTask',
            'subtractTask',
            'twapTask',
            'serumSwapTask',
            'powTask',
            'lendingRateTask',
            'mangoPerpMarketTask',
            'jupiterSwapTask',
            'perpMarketTask',
            'oracleTask',
            'anchorFetchTask',
            'defiKingdomsTask',
            'tpsTask',
            'splStakePoolTask',
            'splTokenParseTask',
            'uniswapExchangeRateTask',
            'sushiswapExchangeRateTask',
            'pancakeswapExchangeRateTask',
            'cacheTask',
            'sysclockOffsetTask',
            'marinadeStateTask',
            'solanaAccountDataFetchTask',
            'bufferLayoutParseTask',
            'cronParseTask',
            'minTask',
            'historyFunctionTask',
            'vwapTask',
            'ewmaTask',
            'comparisonTask',
            'roundTask',
            'boundTask',
          ])
        ),
        set: $util.oneOfSetter($oneOfFields),
      });

      /**
       * Creates a new Task instance using the specified properties.
       * @function create
       * @memberof OracleJob.Task
       * @static
       * @param {OracleJob.ITask=} [properties] Properties to set
       * @returns {OracleJob.Task} Task instance
       */
      Task.create = function create(properties) {
        return new Task(properties);
      };

      /**
       * Encodes the specified Task message. Does not implicitly {@apilink OracleJob.Task.verify|verify} messages.
       * @function encode
       * @memberof OracleJob.Task
       * @static
       * @param {OracleJob.ITask} message Task message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Task.encode = function encode(message, writer) {
        if (!writer) writer = $Writer.create();
        if (
          message.httpTask != null &&
          Object.hasOwnProperty.call(message, 'httpTask')
        )
          $root.OracleJob.HttpTask.encode(
            message.httpTask,
            writer.uint32(/* id 1, wireType 2 =*/ 10).fork()
          ).ldelim();
        if (
          message.jsonParseTask != null &&
          Object.hasOwnProperty.call(message, 'jsonParseTask')
        )
          $root.OracleJob.JsonParseTask.encode(
            message.jsonParseTask,
            writer.uint32(/* id 2, wireType 2 =*/ 18).fork()
          ).ldelim();
        if (
          message.medianTask != null &&
          Object.hasOwnProperty.call(message, 'medianTask')
        )
          $root.OracleJob.MedianTask.encode(
            message.medianTask,
            writer.uint32(/* id 4, wireType 2 =*/ 34).fork()
          ).ldelim();
        if (
          message.meanTask != null &&
          Object.hasOwnProperty.call(message, 'meanTask')
        )
          $root.OracleJob.MeanTask.encode(
            message.meanTask,
            writer.uint32(/* id 5, wireType 2 =*/ 42).fork()
          ).ldelim();
        if (
          message.websocketTask != null &&
          Object.hasOwnProperty.call(message, 'websocketTask')
        )
          $root.OracleJob.WebsocketTask.encode(
            message.websocketTask,
            writer.uint32(/* id 6, wireType 2 =*/ 50).fork()
          ).ldelim();
        if (
          message.divideTask != null &&
          Object.hasOwnProperty.call(message, 'divideTask')
        )
          $root.OracleJob.DivideTask.encode(
            message.divideTask,
            writer.uint32(/* id 7, wireType 2 =*/ 58).fork()
          ).ldelim();
        if (
          message.multiplyTask != null &&
          Object.hasOwnProperty.call(message, 'multiplyTask')
        )
          $root.OracleJob.MultiplyTask.encode(
            message.multiplyTask,
            writer.uint32(/* id 8, wireType 2 =*/ 66).fork()
          ).ldelim();
        if (
          message.lpTokenPriceTask != null &&
          Object.hasOwnProperty.call(message, 'lpTokenPriceTask')
        )
          $root.OracleJob.LpTokenPriceTask.encode(
            message.lpTokenPriceTask,
            writer.uint32(/* id 9, wireType 2 =*/ 74).fork()
          ).ldelim();
        if (
          message.lpExchangeRateTask != null &&
          Object.hasOwnProperty.call(message, 'lpExchangeRateTask')
        )
          $root.OracleJob.LpExchangeRateTask.encode(
            message.lpExchangeRateTask,
            writer.uint32(/* id 10, wireType 2 =*/ 82).fork()
          ).ldelim();
        if (
          message.conditionalTask != null &&
          Object.hasOwnProperty.call(message, 'conditionalTask')
        )
          $root.OracleJob.ConditionalTask.encode(
            message.conditionalTask,
            writer.uint32(/* id 11, wireType 2 =*/ 90).fork()
          ).ldelim();
        if (
          message.valueTask != null &&
          Object.hasOwnProperty.call(message, 'valueTask')
        )
          $root.OracleJob.ValueTask.encode(
            message.valueTask,
            writer.uint32(/* id 12, wireType 2 =*/ 98).fork()
          ).ldelim();
        if (
          message.maxTask != null &&
          Object.hasOwnProperty.call(message, 'maxTask')
        )
          $root.OracleJob.MaxTask.encode(
            message.maxTask,
            writer.uint32(/* id 13, wireType 2 =*/ 106).fork()
          ).ldelim();
        if (
          message.regexExtractTask != null &&
          Object.hasOwnProperty.call(message, 'regexExtractTask')
        )
          $root.OracleJob.RegexExtractTask.encode(
            message.regexExtractTask,
            writer.uint32(/* id 14, wireType 2 =*/ 114).fork()
          ).ldelim();
        if (
          message.xstepPriceTask != null &&
          Object.hasOwnProperty.call(message, 'xstepPriceTask')
        )
          $root.OracleJob.XStepPriceTask.encode(
            message.xstepPriceTask,
            writer.uint32(/* id 15, wireType 2 =*/ 122).fork()
          ).ldelim();
        if (
          message.addTask != null &&
          Object.hasOwnProperty.call(message, 'addTask')
        )
          $root.OracleJob.AddTask.encode(
            message.addTask,
            writer.uint32(/* id 16, wireType 2 =*/ 130).fork()
          ).ldelim();
        if (
          message.subtractTask != null &&
          Object.hasOwnProperty.call(message, 'subtractTask')
        )
          $root.OracleJob.SubtractTask.encode(
            message.subtractTask,
            writer.uint32(/* id 17, wireType 2 =*/ 138).fork()
          ).ldelim();
        if (
          message.twapTask != null &&
          Object.hasOwnProperty.call(message, 'twapTask')
        )
          $root.OracleJob.TwapTask.encode(
            message.twapTask,
            writer.uint32(/* id 18, wireType 2 =*/ 146).fork()
          ).ldelim();
        if (
          message.serumSwapTask != null &&
          Object.hasOwnProperty.call(message, 'serumSwapTask')
        )
          $root.OracleJob.SerumSwapTask.encode(
            message.serumSwapTask,
            writer.uint32(/* id 19, wireType 2 =*/ 154).fork()
          ).ldelim();
        if (
          message.powTask != null &&
          Object.hasOwnProperty.call(message, 'powTask')
        )
          $root.OracleJob.PowTask.encode(
            message.powTask,
            writer.uint32(/* id 20, wireType 2 =*/ 162).fork()
          ).ldelim();
        if (
          message.lendingRateTask != null &&
          Object.hasOwnProperty.call(message, 'lendingRateTask')
        )
          $root.OracleJob.LendingRateTask.encode(
            message.lendingRateTask,
            writer.uint32(/* id 21, wireType 2 =*/ 170).fork()
          ).ldelim();
        if (
          message.mangoPerpMarketTask != null &&
          Object.hasOwnProperty.call(message, 'mangoPerpMarketTask')
        )
          $root.OracleJob.MangoPerpMarketTask.encode(
            message.mangoPerpMarketTask,
            writer.uint32(/* id 22, wireType 2 =*/ 178).fork()
          ).ldelim();
        if (
          message.jupiterSwapTask != null &&
          Object.hasOwnProperty.call(message, 'jupiterSwapTask')
        )
          $root.OracleJob.JupiterSwapTask.encode(
            message.jupiterSwapTask,
            writer.uint32(/* id 23, wireType 2 =*/ 186).fork()
          ).ldelim();
        if (
          message.perpMarketTask != null &&
          Object.hasOwnProperty.call(message, 'perpMarketTask')
        )
          $root.OracleJob.PerpMarketTask.encode(
            message.perpMarketTask,
            writer.uint32(/* id 24, wireType 2 =*/ 194).fork()
          ).ldelim();
        if (
          message.oracleTask != null &&
          Object.hasOwnProperty.call(message, 'oracleTask')
        )
          $root.OracleJob.OracleTask.encode(
            message.oracleTask,
            writer.uint32(/* id 25, wireType 2 =*/ 202).fork()
          ).ldelim();
        if (
          message.anchorFetchTask != null &&
          Object.hasOwnProperty.call(message, 'anchorFetchTask')
        )
          $root.OracleJob.AnchorFetchTask.encode(
            message.anchorFetchTask,
            writer.uint32(/* id 26, wireType 2 =*/ 210).fork()
          ).ldelim();
        if (
          message.defiKingdomsTask != null &&
          Object.hasOwnProperty.call(message, 'defiKingdomsTask')
        )
          $root.OracleJob.DefiKingdomsTask.encode(
            message.defiKingdomsTask,
            writer.uint32(/* id 27, wireType 2 =*/ 218).fork()
          ).ldelim();
        if (
          message.tpsTask != null &&
          Object.hasOwnProperty.call(message, 'tpsTask')
        )
          $root.OracleJob.TpsTask.encode(
            message.tpsTask,
            writer.uint32(/* id 28, wireType 2 =*/ 226).fork()
          ).ldelim();
        if (
          message.splStakePoolTask != null &&
          Object.hasOwnProperty.call(message, 'splStakePoolTask')
        )
          $root.OracleJob.SplStakePoolTask.encode(
            message.splStakePoolTask,
            writer.uint32(/* id 29, wireType 2 =*/ 234).fork()
          ).ldelim();
        if (
          message.splTokenParseTask != null &&
          Object.hasOwnProperty.call(message, 'splTokenParseTask')
        )
          $root.OracleJob.SplTokenParseTask.encode(
            message.splTokenParseTask,
            writer.uint32(/* id 30, wireType 2 =*/ 242).fork()
          ).ldelim();
        if (
          message.uniswapExchangeRateTask != null &&
          Object.hasOwnProperty.call(message, 'uniswapExchangeRateTask')
        )
          $root.OracleJob.UniswapExchangeRateTask.encode(
            message.uniswapExchangeRateTask,
            writer.uint32(/* id 31, wireType 2 =*/ 250).fork()
          ).ldelim();
        if (
          message.sushiswapExchangeRateTask != null &&
          Object.hasOwnProperty.call(message, 'sushiswapExchangeRateTask')
        )
          $root.OracleJob.SushiswapExchangeRateTask.encode(
            message.sushiswapExchangeRateTask,
            writer.uint32(/* id 32, wireType 2 =*/ 258).fork()
          ).ldelim();
        if (
          message.pancakeswapExchangeRateTask != null &&
          Object.hasOwnProperty.call(message, 'pancakeswapExchangeRateTask')
        )
          $root.OracleJob.PancakeswapExchangeRateTask.encode(
            message.pancakeswapExchangeRateTask,
            writer.uint32(/* id 33, wireType 2 =*/ 266).fork()
          ).ldelim();
        if (
          message.cacheTask != null &&
          Object.hasOwnProperty.call(message, 'cacheTask')
        )
          $root.OracleJob.CacheTask.encode(
            message.cacheTask,
            writer.uint32(/* id 34, wireType 2 =*/ 274).fork()
          ).ldelim();
        if (
          message.sysclockOffsetTask != null &&
          Object.hasOwnProperty.call(message, 'sysclockOffsetTask')
        )
          $root.OracleJob.SysclockOffsetTask.encode(
            message.sysclockOffsetTask,
            writer.uint32(/* id 35, wireType 2 =*/ 282).fork()
          ).ldelim();
        if (
          message.marinadeStateTask != null &&
          Object.hasOwnProperty.call(message, 'marinadeStateTask')
        )
          $root.OracleJob.MarinadeStateTask.encode(
            message.marinadeStateTask,
            writer.uint32(/* id 36, wireType 2 =*/ 290).fork()
          ).ldelim();
        if (
          message.solanaAccountDataFetchTask != null &&
          Object.hasOwnProperty.call(message, 'solanaAccountDataFetchTask')
        )
          $root.OracleJob.SolanaAccountDataFetchTask.encode(
            message.solanaAccountDataFetchTask,
            writer.uint32(/* id 37, wireType 2 =*/ 298).fork()
          ).ldelim();
        if (
          message.bufferLayoutParseTask != null &&
          Object.hasOwnProperty.call(message, 'bufferLayoutParseTask')
        )
          $root.OracleJob.BufferLayoutParseTask.encode(
            message.bufferLayoutParseTask,
            writer.uint32(/* id 38, wireType 2 =*/ 306).fork()
          ).ldelim();
        if (
          message.cronParseTask != null &&
          Object.hasOwnProperty.call(message, 'cronParseTask')
        )
          $root.OracleJob.CronParseTask.encode(
            message.cronParseTask,
            writer.uint32(/* id 39, wireType 2 =*/ 314).fork()
          ).ldelim();
        if (
          message.minTask != null &&
          Object.hasOwnProperty.call(message, 'minTask')
        )
          $root.OracleJob.MinTask.encode(
            message.minTask,
            writer.uint32(/* id 40, wireType 2 =*/ 322).fork()
          ).ldelim();
        if (
          message.historyFunctionTask != null &&
          Object.hasOwnProperty.call(message, 'historyFunctionTask')
        )
          $root.OracleJob.HistoryFunctionTask.encode(
            message.historyFunctionTask,
            writer.uint32(/* id 41, wireType 2 =*/ 330).fork()
          ).ldelim();
        if (
          message.vwapTask != null &&
          Object.hasOwnProperty.call(message, 'vwapTask')
        )
          $root.OracleJob.VwapTask.encode(
            message.vwapTask,
            writer.uint32(/* id 42, wireType 2 =*/ 338).fork()
          ).ldelim();
        if (
          message.ewmaTask != null &&
          Object.hasOwnProperty.call(message, 'ewmaTask')
        )
          $root.OracleJob.EwmaTask.encode(
            message.ewmaTask,
            writer.uint32(/* id 43, wireType 2 =*/ 346).fork()
          ).ldelim();
        if (
          message.comparisonTask != null &&
          Object.hasOwnProperty.call(message, 'comparisonTask')
        )
          $root.OracleJob.ComparisonTask.encode(
            message.comparisonTask,
            writer.uint32(/* id 44, wireType 2 =*/ 354).fork()
          ).ldelim();
        if (
          message.roundTask != null &&
          Object.hasOwnProperty.call(message, 'roundTask')
        )
          $root.OracleJob.RoundTask.encode(
            message.roundTask,
            writer.uint32(/* id 45, wireType 2 =*/ 362).fork()
          ).ldelim();
        if (
          message.boundTask != null &&
          Object.hasOwnProperty.call(message, 'boundTask')
        )
          $root.OracleJob.BoundTask.encode(
            message.boundTask,
            writer.uint32(/* id 46, wireType 2 =*/ 370).fork()
          ).ldelim();
        return writer;
      };

      /**
       * Encodes the specified Task message, length delimited. Does not implicitly {@apilink OracleJob.Task.verify|verify} messages.
       * @function encodeDelimited
       * @memberof OracleJob.Task
       * @static
       * @param {OracleJob.ITask} message Task message or plain object to encode
       * @param {$protobuf.Writer} [writer] Writer to encode to
       * @returns {$protobuf.Writer} Writer
       */
      Task.encodeDelimited = function encodeDelimited(message, writer) {
        return this.encode(message, writer).ldelim();
      };

      /**
       * Decodes a Task message from the specified reader or buffer.
       * @function decode
       * @memberof OracleJob.Task
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @param {number} [length] Message length if known beforehand
       * @returns {OracleJob.Task} Task
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Task.decode = function decode(reader, length) {
        if (!(reader instanceof $Reader)) reader = $Reader.create(reader);
        var end = length === undefined ? reader.len : reader.pos + length,
          message = new $root.OracleJob.Task();
        while (reader.pos < end) {
          var tag = reader.uint32();
          switch (tag >>> 3) {
            case 1: {
              message.httpTask = $root.OracleJob.HttpTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 2: {
              message.jsonParseTask = $root.OracleJob.JsonParseTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 4: {
              message.medianTask = $root.OracleJob.MedianTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 5: {
              message.meanTask = $root.OracleJob.MeanTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 6: {
              message.websocketTask = $root.OracleJob.WebsocketTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 7: {
              message.divideTask = $root.OracleJob.DivideTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 8: {
              message.multiplyTask = $root.OracleJob.MultiplyTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 9: {
              message.lpTokenPriceTask =
                $root.OracleJob.LpTokenPriceTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 10: {
              message.lpExchangeRateTask =
                $root.OracleJob.LpExchangeRateTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 11: {
              message.conditionalTask = $root.OracleJob.ConditionalTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 12: {
              message.valueTask = $root.OracleJob.ValueTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 13: {
              message.maxTask = $root.OracleJob.MaxTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 14: {
              message.regexExtractTask =
                $root.OracleJob.RegexExtractTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 15: {
              message.xstepPriceTask = $root.OracleJob.XStepPriceTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 16: {
              message.addTask = $root.OracleJob.AddTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 17: {
              message.subtractTask = $root.OracleJob.SubtractTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 18: {
              message.twapTask = $root.OracleJob.TwapTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 19: {
              message.serumSwapTask = $root.OracleJob.SerumSwapTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 20: {
              message.powTask = $root.OracleJob.PowTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 21: {
              message.lendingRateTask = $root.OracleJob.LendingRateTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 22: {
              message.mangoPerpMarketTask =
                $root.OracleJob.MangoPerpMarketTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 23: {
              message.jupiterSwapTask = $root.OracleJob.JupiterSwapTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 24: {
              message.perpMarketTask = $root.OracleJob.PerpMarketTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 25: {
              message.oracleTask = $root.OracleJob.OracleTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 26: {
              message.anchorFetchTask = $root.OracleJob.AnchorFetchTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 27: {
              message.defiKingdomsTask =
                $root.OracleJob.DefiKingdomsTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 28: {
              message.tpsTask = $root.OracleJob.TpsTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 29: {
              message.splStakePoolTask =
                $root.OracleJob.SplStakePoolTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 30: {
              message.splTokenParseTask =
                $root.OracleJob.SplTokenParseTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 31: {
              message.uniswapExchangeRateTask =
                $root.OracleJob.UniswapExchangeRateTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 32: {
              message.sushiswapExchangeRateTask =
                $root.OracleJob.SushiswapExchangeRateTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 33: {
              message.pancakeswapExchangeRateTask =
                $root.OracleJob.PancakeswapExchangeRateTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 34: {
              message.cacheTask = $root.OracleJob.CacheTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 35: {
              message.sysclockOffsetTask =
                $root.OracleJob.SysclockOffsetTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 36: {
              message.marinadeStateTask =
                $root.OracleJob.MarinadeStateTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 37: {
              message.solanaAccountDataFetchTask =
                $root.OracleJob.SolanaAccountDataFetchTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 38: {
              message.bufferLayoutParseTask =
                $root.OracleJob.BufferLayoutParseTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 39: {
              message.cronParseTask = $root.OracleJob.CronParseTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 40: {
              message.minTask = $root.OracleJob.MinTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 41: {
              message.historyFunctionTask =
                $root.OracleJob.HistoryFunctionTask.decode(
                  reader,
                  reader.uint32()
                );
              break;
            }
            case 42: {
              message.vwapTask = $root.OracleJob.VwapTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 43: {
              message.ewmaTask = $root.OracleJob.EwmaTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 44: {
              message.comparisonTask = $root.OracleJob.ComparisonTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 45: {
              message.roundTask = $root.OracleJob.RoundTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            case 46: {
              message.boundTask = $root.OracleJob.BoundTask.decode(
                reader,
                reader.uint32()
              );
              break;
            }
            default:
              reader.skipType(tag & 7);
              break;
          }
        }
        return message;
      };

      /**
       * Decodes a Task message from the specified reader or buffer, length delimited.
       * @function decodeDelimited
       * @memberof OracleJob.Task
       * @static
       * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
       * @returns {OracleJob.Task} Task
       * @throws {Error} If the payload is not a reader or valid buffer
       * @throws {$protobuf.util.ProtocolError} If required fields are missing
       */
      Task.decodeDelimited = function decodeDelimited(reader) {
        if (!(reader instanceof $Reader)) reader = new $Reader(reader);
        return this.decode(reader, reader.uint32());
      };

      /**
       * Verifies a Task message.
       * @function verify
       * @memberof OracleJob.Task
       * @static
       * @param {Object.<string,*>} message Plain object to verify
       * @returns {string|null} `null` if valid, otherwise the reason why it is not
       */
      Task.verify = function verify(message) {
        if (typeof message !== 'object' || message === null)
          return 'object expected';
        var properties = {};
        if (message.httpTask != null && message.hasOwnProperty('httpTask')) {
          properties.Task = 1;
          {
            var error = $root.OracleJob.HttpTask.verify(message.httpTask);
            if (error) return 'httpTask.' + error;
          }
        }
        if (
          message.jsonParseTask != null &&
          message.hasOwnProperty('jsonParseTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.JsonParseTask.verify(
              message.jsonParseTask
            );
            if (error) return 'jsonParseTask.' + error;
          }
        }
        if (
          message.medianTask != null &&
          message.hasOwnProperty('medianTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.MedianTask.verify(message.medianTask);
            if (error) return 'medianTask.' + error;
          }
        }
        if (message.meanTask != null && message.hasOwnProperty('meanTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.MeanTask.verify(message.meanTask);
            if (error) return 'meanTask.' + error;
          }
        }
        if (
          message.websocketTask != null &&
          message.hasOwnProperty('websocketTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.WebsocketTask.verify(
              message.websocketTask
            );
            if (error) return 'websocketTask.' + error;
          }
        }
        if (
          message.divideTask != null &&
          message.hasOwnProperty('divideTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.DivideTask.verify(message.divideTask);
            if (error) return 'divideTask.' + error;
          }
        }
        if (
          message.multiplyTask != null &&
          message.hasOwnProperty('multiplyTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.MultiplyTask.verify(
              message.multiplyTask
            );
            if (error) return 'multiplyTask.' + error;
          }
        }
        if (
          message.lpTokenPriceTask != null &&
          message.hasOwnProperty('lpTokenPriceTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.LpTokenPriceTask.verify(
              message.lpTokenPriceTask
            );
            if (error) return 'lpTokenPriceTask.' + error;
          }
        }
        if (
          message.lpExchangeRateTask != null &&
          message.hasOwnProperty('lpExchangeRateTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.LpExchangeRateTask.verify(
              message.lpExchangeRateTask
            );
            if (error) return 'lpExchangeRateTask.' + error;
          }
        }
        if (
          message.conditionalTask != null &&
          message.hasOwnProperty('conditionalTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.ConditionalTask.verify(
              message.conditionalTask
            );
            if (error) return 'conditionalTask.' + error;
          }
        }
        if (message.valueTask != null && message.hasOwnProperty('valueTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.ValueTask.verify(message.valueTask);
            if (error) return 'valueTask.' + error;
          }
        }
        if (message.maxTask != null && message.hasOwnProperty('maxTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.MaxTask.verify(message.maxTask);
            if (error) return 'maxTask.' + error;
          }
        }
        if (
          message.regexExtractTask != null &&
          message.hasOwnProperty('regexExtractTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.RegexExtractTask.verify(
              message.regexExtractTask
            );
            if (error) return 'regexExtractTask.' + error;
          }
        }
        if (
          message.xstepPriceTask != null &&
          message.hasOwnProperty('xstepPriceTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.XStepPriceTask.verify(
              message.xstepPriceTask
            );
            if (error) return 'xstepPriceTask.' + error;
          }
        }
        if (message.addTask != null && message.hasOwnProperty('addTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.AddTask.verify(message.addTask);
            if (error) return 'addTask.' + error;
          }
        }
        if (
          message.subtractTask != null &&
          message.hasOwnProperty('subtractTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.SubtractTask.verify(
              message.subtractTask
            );
            if (error) return 'subtractTask.' + error;
          }
        }
        if (message.twapTask != null && message.hasOwnProperty('twapTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.TwapTask.verify(message.twapTask);
            if (error) return 'twapTask.' + error;
          }
        }
        if (
          message.serumSwapTask != null &&
          message.hasOwnProperty('serumSwapTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.SerumSwapTask.verify(
              message.serumSwapTask
            );
            if (error) return 'serumSwapTask.' + error;
          }
        }
        if (message.powTask != null && message.hasOwnProperty('powTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.PowTask.verify(message.powTask);
            if (error) return 'powTask.' + error;
          }
        }
        if (
          message.lendingRateTask != null &&
          message.hasOwnProperty('lendingRateTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.LendingRateTask.verify(
              message.lendingRateTask
            );
            if (error) return 'lendingRateTask.' + error;
          }
        }
        if (
          message.mangoPerpMarketTask != null &&
          message.hasOwnProperty('mangoPerpMarketTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.MangoPerpMarketTask.verify(
              message.mangoPerpMarketTask
            );
            if (error) return 'mangoPerpMarketTask.' + error;
          }
        }
        if (
          message.jupiterSwapTask != null &&
          message.hasOwnProperty('jupiterSwapTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.JupiterSwapTask.verify(
              message.jupiterSwapTask
            );
            if (error) return 'jupiterSwapTask.' + error;
          }
        }
        if (
          message.perpMarketTask != null &&
          message.hasOwnProperty('perpMarketTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.PerpMarketTask.verify(
              message.perpMarketTask
            );
            if (error) return 'perpMarketTask.' + error;
          }
        }
        if (
          message.oracleTask != null &&
          message.hasOwnProperty('oracleTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.OracleTask.verify(message.oracleTask);
            if (error) return 'oracleTask.' + error;
          }
        }
        if (
          message.anchorFetchTask != null &&
          message.hasOwnProperty('anchorFetchTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.AnchorFetchTask.verify(
              message.anchorFetchTask
            );
            if (error) return 'anchorFetchTask.' + error;
          }
        }
        if (
          message.defiKingdomsTask != null &&
          message.hasOwnProperty('defiKingdomsTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.DefiKingdomsTask.verify(
              message.defiKingdomsTask
            );
            if (error) return 'defiKingdomsTask.' + error;
          }
        }
        if (message.tpsTask != null && message.hasOwnProperty('tpsTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.TpsTask.verify(message.tpsTask);
            if (error) return 'tpsTask.' + error;
          }
        }
        if (
          message.splStakePoolTask != null &&
          message.hasOwnProperty('splStakePoolTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.SplStakePoolTask.verify(
              message.splStakePoolTask
            );
            if (error) return 'splStakePoolTask.' + error;
          }
        }
        if (
          message.splTokenParseTask != null &&
          message.hasOwnProperty('splTokenParseTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.SplTokenParseTask.verify(
              message.splTokenParseTask
            );
            if (error) return 'splTokenParseTask.' + error;
          }
        }
        if (
          message.uniswapExchangeRateTask != null &&
          message.hasOwnProperty('uniswapExchangeRateTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.UniswapExchangeRateTask.verify(
              message.uniswapExchangeRateTask
            );
            if (error) return 'uniswapExchangeRateTask.' + error;
          }
        }
        if (
          message.sushiswapExchangeRateTask != null &&
          message.hasOwnProperty('sushiswapExchangeRateTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.SushiswapExchangeRateTask.verify(
              message.sushiswapExchangeRateTask
            );
            if (error) return 'sushiswapExchangeRateTask.' + error;
          }
        }
        if (
          message.pancakeswapExchangeRateTask != null &&
          message.hasOwnProperty('pancakeswapExchangeRateTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.PancakeswapExchangeRateTask.verify(
              message.pancakeswapExchangeRateTask
            );
            if (error) return 'pancakeswapExchangeRateTask.' + error;
          }
        }
        if (message.cacheTask != null && message.hasOwnProperty('cacheTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.CacheTask.verify(message.cacheTask);
            if (error) return 'cacheTask.' + error;
          }
        }
        if (
          message.sysclockOffsetTask != null &&
          message.hasOwnProperty('sysclockOffsetTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.SysclockOffsetTask.verify(
              message.sysclockOffsetTask
            );
            if (error) return 'sysclockOffsetTask.' + error;
          }
        }
        if (
          message.marinadeStateTask != null &&
          message.hasOwnProperty('marinadeStateTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.MarinadeStateTask.verify(
              message.marinadeStateTask
            );
            if (error) return 'marinadeStateTask.' + error;
          }
        }
        if (
          message.solanaAccountDataFetchTask != null &&
          message.hasOwnProperty('solanaAccountDataFetchTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.SolanaAccountDataFetchTask.verify(
              message.solanaAccountDataFetchTask
            );
            if (error) return 'solanaAccountDataFetchTask.' + error;
          }
        }
        if (
          message.bufferLayoutParseTask != null &&
          message.hasOwnProperty('bufferLayoutParseTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.BufferLayoutParseTask.verify(
              message.bufferLayoutParseTask
            );
            if (error) return 'bufferLayoutParseTask.' + error;
          }
        }
        if (
          message.cronParseTask != null &&
          message.hasOwnProperty('cronParseTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.CronParseTask.verify(
              message.cronParseTask
            );
            if (error) return 'cronParseTask.' + error;
          }
        }
        if (message.minTask != null && message.hasOwnProperty('minTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.MinTask.verify(message.minTask);
            if (error) return 'minTask.' + error;
          }
        }
        if (
          message.historyFunctionTask != null &&
          message.hasOwnProperty('historyFunctionTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.HistoryFunctionTask.verify(
              message.historyFunctionTask
            );
            if (error) return 'historyFunctionTask.' + error;
          }
        }
        if (message.vwapTask != null && message.hasOwnProperty('vwapTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.VwapTask.verify(message.vwapTask);
            if (error) return 'vwapTask.' + error;
          }
        }
        if (message.ewmaTask != null && message.hasOwnProperty('ewmaTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.EwmaTask.verify(message.ewmaTask);
            if (error) return 'ewmaTask.' + error;
          }
        }
        if (
          message.comparisonTask != null &&
          message.hasOwnProperty('comparisonTask')
        ) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.ComparisonTask.verify(
              message.comparisonTask
            );
            if (error) return 'comparisonTask.' + error;
          }
        }
        if (message.roundTask != null && message.hasOwnProperty('roundTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.RoundTask.verify(message.roundTask);
            if (error) return 'roundTask.' + error;
          }
        }
        if (message.boundTask != null && message.hasOwnProperty('boundTask')) {
          if (properties.Task === 1) return 'Task: multiple values';
          properties.Task = 1;
          {
            var error = $root.OracleJob.BoundTask.verify(message.boundTask);
            if (error) return 'boundTask.' + error;
          }
        }
        return null;
      };

      /**
       * Creates a Task message from a plain object. Also converts values to their respective internal types.
       * @function fromObject
       * @memberof OracleJob.Task
       * @static
       * @param {Object.<string,*>} object Plain object
       * @returns {OracleJob.Task} Task
       */
      Task.fromObject = function fromObject(object) {
        if (object instanceof $root.OracleJob.Task) return object;
        var message = new $root.OracleJob.Task();
        if (object.httpTask != null) {
          if (typeof object.httpTask !== 'object')
            throw TypeError('.OracleJob.Task.httpTask: object expected');
          message.httpTask = $root.OracleJob.HttpTask.fromObject(
            object.httpTask
          );
        }
        if (object.jsonParseTask != null) {
          if (typeof object.jsonParseTask !== 'object')
            throw TypeError('.OracleJob.Task.jsonParseTask: object expected');
          message.jsonParseTask = $root.OracleJob.JsonParseTask.fromObject(
            object.jsonParseTask
          );
        }
        if (object.medianTask != null) {
          if (typeof object.medianTask !== 'object')
            throw TypeError('.OracleJob.Task.medianTask: object expected');
          message.medianTask = $root.OracleJob.MedianTask.fromObject(
            object.medianTask
          );
        }
        if (object.meanTask != null) {
          if (typeof object.meanTask !== 'object')
            throw TypeError('.OracleJob.Task.meanTask: object expected');
          message.meanTask = $root.OracleJob.MeanTask.fromObject(
            object.meanTask
          );
        }
        if (object.websocketTask != null) {
          if (typeof object.websocketTask !== 'object')
            throw TypeError('.OracleJob.Task.websocketTask: object expected');
          message.websocketTask = $root.OracleJob.WebsocketTask.fromObject(
            object.websocketTask
          );
        }
        if (object.divideTask != null) {
          if (typeof object.divideTask !== 'object')
            throw TypeError('.OracleJob.Task.divideTask: object expected');
          message.divideTask = $root.OracleJob.DivideTask.fromObject(
            object.divideTask
          );
        }
        if (object.multiplyTask != null) {
          if (typeof object.multiplyTask !== 'object')
            throw TypeError('.OracleJob.Task.multiplyTask: object expected');
          message.multiplyTask = $root.OracleJob.MultiplyTask.fromObject(
            object.multiplyTask
          );
        }
        if (object.lpTokenPriceTask != null) {
          if (typeof object.lpTokenPriceTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.lpTokenPriceTask: object expected'
            );
          message.lpTokenPriceTask =
            $root.OracleJob.LpTokenPriceTask.fromObject(
              object.lpTokenPriceTask
            );
        }
        if (object.lpExchangeRateTask != null) {
          if (typeof object.lpExchangeRateTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.lpExchangeRateTask: object expected'
            );
          message.lpExchangeRateTask =
            $root.OracleJob.LpExchangeRateTask.fromObject(
              object.lpExchangeRateTask
            );
        }
        if (object.conditionalTask != null) {
          if (typeof object.conditionalTask !== 'object')
            throw TypeError('.OracleJob.Task.conditionalTask: object expected');
          message.conditionalTask = $root.OracleJob.ConditionalTask.fromObject(
            object.conditionalTask
          );
        }
        if (object.valueTask != null) {
          if (typeof object.valueTask !== 'object')
            throw TypeError('.OracleJob.Task.valueTask: object expected');
          message.valueTask = $root.OracleJob.ValueTask.fromObject(
            object.valueTask
          );
        }
        if (object.maxTask != null) {
          if (typeof object.maxTask !== 'object')
            throw TypeError('.OracleJob.Task.maxTask: object expected');
          message.maxTask = $root.OracleJob.MaxTask.fromObject(object.maxTask);
        }
        if (object.regexExtractTask != null) {
          if (typeof object.regexExtractTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.regexExtractTask: object expected'
            );
          message.regexExtractTask =
            $root.OracleJob.RegexExtractTask.fromObject(
              object.regexExtractTask
            );
        }
        if (object.xstepPriceTask != null) {
          if (typeof object.xstepPriceTask !== 'object')
            throw TypeError('.OracleJob.Task.xstepPriceTask: object expected');
          message.xstepPriceTask = $root.OracleJob.XStepPriceTask.fromObject(
            object.xstepPriceTask
          );
        }
        if (object.addTask != null) {
          if (typeof object.addTask !== 'object')
            throw TypeError('.OracleJob.Task.addTask: object expected');
          message.addTask = $root.OracleJob.AddTask.fromObject(object.addTask);
        }
        if (object.subtractTask != null) {
          if (typeof object.subtractTask !== 'object')
            throw TypeError('.OracleJob.Task.subtractTask: object expected');
          message.subtractTask = $root.OracleJob.SubtractTask.fromObject(
            object.subtractTask
          );
        }
        if (object.twapTask != null) {
          if (typeof object.twapTask !== 'object')
            throw TypeError('.OracleJob.Task.twapTask: object expected');
          message.twapTask = $root.OracleJob.TwapTask.fromObject(
            object.twapTask
          );
        }
        if (object.serumSwapTask != null) {
          if (typeof object.serumSwapTask !== 'object')
            throw TypeError('.OracleJob.Task.serumSwapTask: object expected');
          message.serumSwapTask = $root.OracleJob.SerumSwapTask.fromObject(
            object.serumSwapTask
          );
        }
        if (object.powTask != null) {
          if (typeof object.powTask !== 'object')
            throw TypeError('.OracleJob.Task.powTask: object expected');
          message.powTask = $root.OracleJob.PowTask.fromObject(object.powTask);
        }
        if (object.lendingRateTask != null) {
          if (typeof object.lendingRateTask !== 'object')
            throw TypeError('.OracleJob.Task.lendingRateTask: object expected');
          message.lendingRateTask = $root.OracleJob.LendingRateTask.fromObject(
            object.lendingRateTask
          );
        }
        if (object.mangoPerpMarketTask != null) {
          if (typeof object.mangoPerpMarketTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.mangoPerpMarketTask: object expected'
            );
          message.mangoPerpMarketTask =
            $root.OracleJob.MangoPerpMarketTask.fromObject(
              object.mangoPerpMarketTask
            );
        }
        if (object.jupiterSwapTask != null) {
          if (typeof object.jupiterSwapTask !== 'object')
            throw TypeError('.OracleJob.Task.jupiterSwapTask: object expected');
          message.jupiterSwapTask = $root.OracleJob.JupiterSwapTask.fromObject(
            object.jupiterSwapTask
          );
        }
        if (object.perpMarketTask != null) {
          if (typeof object.perpMarketTask !== 'object')
            throw TypeError('.OracleJob.Task.perpMarketTask: object expected');
          message.perpMarketTask = $root.OracleJob.PerpMarketTask.fromObject(
            object.perpMarketTask
          );
        }
        if (object.oracleTask != null) {
          if (typeof object.oracleTask !== 'object')
            throw TypeError('.OracleJob.Task.oracleTask: object expected');
          message.oracleTask = $root.OracleJob.OracleTask.fromObject(
            object.oracleTask
          );
        }
        if (object.anchorFetchTask != null) {
          if (typeof object.anchorFetchTask !== 'object')
            throw TypeError('.OracleJob.Task.anchorFetchTask: object expected');
          message.anchorFetchTask = $root.OracleJob.AnchorFetchTask.fromObject(
            object.anchorFetchTask
          );
        }
        if (object.defiKingdomsTask != null) {
          if (typeof object.defiKingdomsTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.defiKingdomsTask: object expected'
            );
          message.defiKingdomsTask =
            $root.OracleJob.DefiKingdomsTask.fromObject(
              object.defiKingdomsTask
            );
        }
        if (object.tpsTask != null) {
          if (typeof object.tpsTask !== 'object')
            throw TypeError('.OracleJob.Task.tpsTask: object expected');
          message.tpsTask = $root.OracleJob.TpsTask.fromObject(object.tpsTask);
        }
        if (object.splStakePoolTask != null) {
          if (typeof object.splStakePoolTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.splStakePoolTask: object expected'
            );
          message.splStakePoolTask =
            $root.OracleJob.SplStakePoolTask.fromObject(
              object.splStakePoolTask
            );
        }
        if (object.splTokenParseTask != null) {
          if (typeof object.splTokenParseTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.splTokenParseTask: object expected'
            );
          message.splTokenParseTask =
            $root.OracleJob.SplTokenParseTask.fromObject(
              object.splTokenParseTask
            );
        }
        if (object.uniswapExchangeRateTask != null) {
          if (typeof object.uniswapExchangeRateTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.uniswapExchangeRateTask: object expected'
            );
          message.uniswapExchangeRateTask =
            $root.OracleJob.UniswapExchangeRateTask.fromObject(
              object.uniswapExchangeRateTask
            );
        }
        if (object.sushiswapExchangeRateTask != null) {
          if (typeof object.sushiswapExchangeRateTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.sushiswapExchangeRateTask: object expected'
            );
          message.sushiswapExchangeRateTask =
            $root.OracleJob.SushiswapExchangeRateTask.fromObject(
              object.sushiswapExchangeRateTask
            );
        }
        if (object.pancakeswapExchangeRateTask != null) {
          if (typeof object.pancakeswapExchangeRateTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.pancakeswapExchangeRateTask: object expected'
            );
          message.pancakeswapExchangeRateTask =
            $root.OracleJob.PancakeswapExchangeRateTask.fromObject(
              object.pancakeswapExchangeRateTask
            );
        }
        if (object.cacheTask != null) {
          if (typeof object.cacheTask !== 'object')
            throw TypeError('.OracleJob.Task.cacheTask: object expected');
          message.cacheTask = $root.OracleJob.CacheTask.fromObject(
            object.cacheTask
          );
        }
        if (object.sysclockOffsetTask != null) {
          if (typeof object.sysclockOffsetTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.sysclockOffsetTask: object expected'
            );
          message.sysclockOffsetTask =
            $root.OracleJob.SysclockOffsetTask.fromObject(
              object.sysclockOffsetTask
            );
        }
        if (object.marinadeStateTask != null) {
          if (typeof object.marinadeStateTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.marinadeStateTask: object expected'
            );
          message.marinadeStateTask =
            $root.OracleJob.MarinadeStateTask.fromObject(
              object.marinadeStateTask
            );
        }
        if (object.solanaAccountDataFetchTask != null) {
          if (typeof object.solanaAccountDataFetchTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.solanaAccountDataFetchTask: object expected'
            );
          message.solanaAccountDataFetchTask =
            $root.OracleJob.SolanaAccountDataFetchTask.fromObject(
              object.solanaAccountDataFetchTask
            );
        }
        if (object.bufferLayoutParseTask != null) {
          if (typeof object.bufferLayoutParseTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.bufferLayoutParseTask: object expected'
            );
          message.bufferLayoutParseTask =
            $root.OracleJob.BufferLayoutParseTask.fromObject(
              object.bufferLayoutParseTask
            );
        }
        if (object.cronParseTask != null) {
          if (typeof object.cronParseTask !== 'object')
            throw TypeError('.OracleJob.Task.cronParseTask: object expected');
          message.cronParseTask = $root.OracleJob.CronParseTask.fromObject(
            object.cronParseTask
          );
        }
        if (object.minTask != null) {
          if (typeof object.minTask !== 'object')
            throw TypeError('.OracleJob.Task.minTask: object expected');
          message.minTask = $root.OracleJob.MinTask.fromObject(object.minTask);
        }
        if (object.historyFunctionTask != null) {
          if (typeof object.historyFunctionTask !== 'object')
            throw TypeError(
              '.OracleJob.Task.historyFunctionTask: object expected'
            );
          message.historyFunctionTask =
            $root.OracleJob.HistoryFunctionTask.fromObject(
              object.historyFunctionTask
            );
        }
        if (object.vwapTask != null) {
          if (typeof object.vwapTask !== 'object')
            throw TypeError('.OracleJob.Task.vwapTask: object expected');
          message.vwapTask = $root.OracleJob.VwapTask.fromObject(
            object.vwapTask
          );
        }
        if (object.ewmaTask != null) {
          if (typeof object.ewmaTask !== 'object')
            throw TypeError('.OracleJob.Task.ewmaTask: object expected');
          message.ewmaTask = $root.OracleJob.EwmaTask.fromObject(
            object.ewmaTask
          );
        }
        if (object.comparisonTask != null) {
          if (typeof object.comparisonTask !== 'object')
            throw TypeError('.OracleJob.Task.comparisonTask: object expected');
          message.comparisonTask = $root.OracleJob.ComparisonTask.fromObject(
            object.comparisonTask
          );
        }
        if (object.roundTask != null) {
          if (typeof object.roundTask !== 'object')
            throw TypeError('.OracleJob.Task.roundTask: object expected');
          message.roundTask = $root.OracleJob.RoundTask.fromObject(
            object.roundTask
          );
        }
        if (object.boundTask != null) {
          if (typeof object.boundTask !== 'object')
            throw TypeError('.OracleJob.Task.boundTask: object expected');
          message.boundTask = $root.OracleJob.BoundTask.fromObject(
            object.boundTask
          );
        }
        return message;
      };

      /**
       * Creates a plain object from a Task message. Also converts values to other types if specified.
       * @function toObject
       * @memberof OracleJob.Task
       * @static
       * @param {OracleJob.Task} message Task
       * @param {$protobuf.IConversionOptions} [options] Conversion options
       * @returns {Object.<string,*>} Plain object
       */
      Task.toObject = function toObject(message, options) {
        if (!options) options = {};
        var object = {};
        if (message.httpTask != null && message.hasOwnProperty('httpTask')) {
          object.httpTask = $root.OracleJob.HttpTask.toObject(
            message.httpTask,
            options
          );
          if (options.oneofs) object.Task = 'httpTask';
        }
        if (
          message.jsonParseTask != null &&
          message.hasOwnProperty('jsonParseTask')
        ) {
          object.jsonParseTask = $root.OracleJob.JsonParseTask.toObject(
            message.jsonParseTask,
            options
          );
          if (options.oneofs) object.Task = 'jsonParseTask';
        }
        if (
          message.medianTask != null &&
          message.hasOwnProperty('medianTask')
        ) {
          object.medianTask = $root.OracleJob.MedianTask.toObject(
            message.medianTask,
            options
          );
          if (options.oneofs) object.Task = 'medianTask';
        }
        if (message.meanTask != null && message.hasOwnProperty('meanTask')) {
          object.meanTask = $root.OracleJob.MeanTask.toObject(
            message.meanTask,
            options
          );
          if (options.oneofs) object.Task = 'meanTask';
        }
        if (
          message.websocketTask != null &&
          message.hasOwnProperty('websocketTask')
        ) {
          object.websocketTask = $root.OracleJob.WebsocketTask.toObject(
            message.websocketTask,
            options
          );
          if (options.oneofs) object.Task = 'websocketTask';
        }
        if (
          message.divideTask != null &&
          message.hasOwnProperty('divideTask')
        ) {
          object.divideTask = $root.OracleJob.DivideTask.toObject(
            message.divideTask,
            options
          );
          if (options.oneofs) object.Task = 'divideTask';
        }
        if (
          message.multiplyTask != null &&
          message.hasOwnProperty('multiplyTask')
        ) {
          object.multiplyTask = $root.OracleJob.MultiplyTask.toObject(
            message.multiplyTask,
            options
          );
          if (options.oneofs) object.Task = 'multiplyTask';
        }
        if (
          message.lpTokenPriceTask != null &&
          message.hasOwnProperty('lpTokenPriceTask')
        ) {
          object.lpTokenPriceTask = $root.OracleJob.LpTokenPriceTask.toObject(
            message.lpTokenPriceTask,
            options
          );
          if (options.oneofs) object.Task = 'lpTokenPriceTask';
        }
        if (
          message.lpExchangeRateTask != null &&
          message.hasOwnProperty('lpExchangeRateTask')
        ) {
          object.lpExchangeRateTask =
            $root.OracleJob.LpExchangeRateTask.toObject(
              message.lpExchangeRateTask,
              options
            );
          if (options.oneofs) object.Task = 'lpExchangeRateTask';
        }
        if (
          message.conditionalTask != null &&
          message.hasOwnProperty('conditionalTask')
        ) {
          object.conditionalTask = $root.OracleJob.ConditionalTask.toObject(
            message.conditionalTask,
            options
          );
          if (options.oneofs) object.Task = 'conditionalTask';
        }
        if (message.valueTask != null && message.hasOwnProperty('valueTask')) {
          object.valueTask = $root.OracleJob.ValueTask.toObject(
            message.valueTask,
            options
          );
          if (options.oneofs) object.Task = 'valueTask';
        }
        if (message.maxTask != null && message.hasOwnProperty('maxTask')) {
          object.maxTask = $root.OracleJob.MaxTask.toObject(
            message.maxTask,
            options
          );
          if (options.oneofs) object.Task = 'maxTask';
        }
        if (
          message.regexExtractTask != null &&
          message.hasOwnProperty('regexExtractTask')
        ) {
          object.regexExtractTask = $root.OracleJob.RegexExtractTask.toObject(
            message.regexExtractTask,
            options
          );
          if (options.oneofs) object.Task = 'regexExtractTask';
        }
        if (
          message.xstepPriceTask != null &&
          message.hasOwnProperty('xstepPriceTask')
        ) {
          object.xstepPriceTask = $root.OracleJob.XStepPriceTask.toObject(
            message.xstepPriceTask,
            options
          );
          if (options.oneofs) object.Task = 'xstepPriceTask';
        }
        if (message.addTask != null && message.hasOwnProperty('addTask')) {
          object.addTask = $root.OracleJob.AddTask.toObject(
            message.addTask,
            options
          );
          if (options.oneofs) object.Task = 'addTask';
        }
        if (
          message.subtractTask != null &&
          message.hasOwnProperty('subtractTask')
        ) {
          object.subtractTask = $root.OracleJob.SubtractTask.toObject(
            message.subtractTask,
            options
          );
          if (options.oneofs) object.Task = 'subtractTask';
        }
        if (message.twapTask != null && message.hasOwnProperty('twapTask')) {
          object.twapTask = $root.OracleJob.TwapTask.toObject(
            message.twapTask,
            options
          );
          if (options.oneofs) object.Task = 'twapTask';
        }
        if (
          message.serumSwapTask != null &&
          message.hasOwnProperty('serumSwapTask')
        ) {
          object.serumSwapTask = $root.OracleJob.SerumSwapTask.toObject(
            message.serumSwapTask,
            options
          );
          if (options.oneofs) object.Task = 'serumSwapTask';
        }
        if (message.powTask != null && message.hasOwnProperty('powTask')) {
          object.powTask = $root.OracleJob.PowTask.toObject(
            message.powTask,
            options
          );
          if (options.oneofs) object.Task = 'powTask';
        }
        if (
          message.lendingRateTask != null &&
          message.hasOwnProperty('lendingRateTask')
        ) {
          object.lendingRateTask = $root.OracleJob.LendingRateTask.toObject(
            message.lendingRateTask,
            options
          );
          if (options.oneofs) object.Task = 'lendingRateTask';
        }
        if (
          message.mangoPerpMarketTask != null &&
          message.hasOwnProperty('mangoPerpMarketTask')
        ) {
          object.mangoPerpMarketTask =
            $root.OracleJob.MangoPerpMarketTask.toObject(
              message.mangoPerpMarketTask,
              options
            );
          if (options.oneofs) object.Task = 'mangoPerpMarketTask';
        }
        if (
          message.jupiterSwapTask != null &&
          message.hasOwnProperty('jupiterSwapTask')
        ) {
          object.jupiterSwapTask = $root.OracleJob.JupiterSwapTask.toObject(
            message.jupiterSwapTask,
            options
          );
          if (options.oneofs) object.Task = 'jupiterSwapTask';
        }
        if (
          message.perpMarketTask != null &&
          message.hasOwnProperty('perpMarketTask')
        ) {
          object.perpMarketTask = $root.OracleJob.PerpMarketTask.toObject(
            message.perpMarketTask,
            options
          );
          if (options.oneofs) object.Task = 'perpMarketTask';
        }
        if (
          message.oracleTask != null &&
          message.hasOwnProperty('oracleTask')
        ) {
          object.oracleTask = $root.OracleJob.OracleTask.toObject(
            message.oracleTask,
            options
          );
          if (options.oneofs) object.Task = 'oracleTask';
        }
        if (
          message.anchorFetchTask != null &&
          message.hasOwnProperty('anchorFetchTask')
        ) {
          object.anchorFetchTask = $root.OracleJob.AnchorFetchTask.toObject(
            message.anchorFetchTask,
            options
          );
          if (options.oneofs) object.Task = 'anchorFetchTask';
        }
        if (
          message.defiKingdomsTask != null &&
          message.hasOwnProperty('defiKingdomsTask')
        ) {
          object.defiKingdomsTask = $root.OracleJob.DefiKingdomsTask.toObject(
            message.defiKingdomsTask,
            options
          );
          if (options.oneofs) object.Task = 'defiKingdomsTask';
        }
        if (message.tpsTask != null && message.hasOwnProperty('tpsTask')) {
          object.tpsTask = $root.OracleJob.TpsTask.toObject(
            message.tpsTask,
            options
          );
          if (options.oneofs) object.Task = 'tpsTask';
        }
        if (
          message.splStakePoolTask != null &&
          message.hasOwnProperty('splStakePoolTask')
        ) {
          object.splStakePoolTask = $root.OracleJob.SplStakePoolTask.toObject(
            message.splStakePoolTask,
            options
          );
          if (options.oneofs) object.Task = 'splStakePoolTask';
        }
        if (
          message.splTokenParseTask != null &&
          message.hasOwnProperty('splTokenParseTask')
        ) {
          object.splTokenParseTask = $root.OracleJob.SplTokenParseTask.toObject(
            message.splTokenParseTask,
            options
          );
          if (options.oneofs) object.Task = 'splTokenParseTask';
        }
        if (
          message.uniswapExchangeRateTask != null &&
          message.hasOwnProperty('uniswapExchangeRateTask')
        ) {
          object.uniswapExchangeRateTask =
            $root.OracleJob.UniswapExchangeRateTask.toObject(
              message.uniswapExchangeRateTask,
              options
            );
          if (options.oneofs) object.Task = 'uniswapExchangeRateTask';
        }
        if (
          message.sushiswapExchangeRateTask != null &&
          message.hasOwnProperty('sushiswapExchangeRateTask')
        ) {
          object.sushiswapExchangeRateTask =
            $root.OracleJob.SushiswapExchangeRateTask.toObject(
              message.sushiswapExchangeRateTask,
              options
            );
          if (options.oneofs) object.Task = 'sushiswapExchangeRateTask';
        }
        if (
          message.pancakeswapExchangeRateTask != null &&
          message.hasOwnProperty('pancakeswapExchangeRateTask')
        ) {
          object.pancakeswapExchangeRateTask =
            $root.OracleJob.PancakeswapExchangeRateTask.toObject(
              message.pancakeswapExchangeRateTask,
              options
            );
          if (options.oneofs) object.Task = 'pancakeswapExchangeRateTask';
        }
        if (message.cacheTask != null && message.hasOwnProperty('cacheTask')) {
          object.cacheTask = $root.OracleJob.CacheTask.toObject(
            message.cacheTask,
            options
          );
          if (options.oneofs) object.Task = 'cacheTask';
        }
        if (
          message.sysclockOffsetTask != null &&
          message.hasOwnProperty('sysclockOffsetTask')
        ) {
          object.sysclockOffsetTask =
            $root.OracleJob.SysclockOffsetTask.toObject(
              message.sysclockOffsetTask,
              options
            );
          if (options.oneofs) object.Task = 'sysclockOffsetTask';
        }
        if (
          message.marinadeStateTask != null &&
          message.hasOwnProperty('marinadeStateTask')
        ) {
          object.marinadeStateTask = $root.OracleJob.MarinadeStateTask.toObject(
            message.marinadeStateTask,
            options
          );
          if (options.oneofs) object.Task = 'marinadeStateTask';
        }
        if (
          message.solanaAccountDataFetchTask != null &&
          message.hasOwnProperty('solanaAccountDataFetchTask')
        ) {
          object.solanaAccountDataFetchTask =
            $root.OracleJob.SolanaAccountDataFetchTask.toObject(
              message.solanaAccountDataFetchTask,
              options
            );
          if (options.oneofs) object.Task = 'solanaAccountDataFetchTask';
        }
        if (
          message.bufferLayoutParseTask != null &&
          message.hasOwnProperty('bufferLayoutParseTask')
        ) {
          object.bufferLayoutParseTask =
            $root.OracleJob.BufferLayoutParseTask.toObject(
              message.bufferLayoutParseTask,
              options
            );
          if (options.oneofs) object.Task = 'bufferLayoutParseTask';
        }
        if (
          message.cronParseTask != null &&
          message.hasOwnProperty('cronParseTask')
        ) {
          object.cronParseTask = $root.OracleJob.CronParseTask.toObject(
            message.cronParseTask,
            options
          );
          if (options.oneofs) object.Task = 'cronParseTask';
        }
        if (message.minTask != null && message.hasOwnProperty('minTask')) {
          object.minTask = $root.OracleJob.MinTask.toObject(
            message.minTask,
            options
          );
          if (options.oneofs) object.Task = 'minTask';
        }
        if (
          message.historyFunctionTask != null &&
          message.hasOwnProperty('historyFunctionTask')
        ) {
          object.historyFunctionTask =
            $root.OracleJob.HistoryFunctionTask.toObject(
              message.historyFunctionTask,
              options
            );
          if (options.oneofs) object.Task = 'historyFunctionTask';
        }
        if (message.vwapTask != null && message.hasOwnProperty('vwapTask')) {
          object.vwapTask = $root.OracleJob.VwapTask.toObject(
            message.vwapTask,
            options
          );
          if (options.oneofs) object.Task = 'vwapTask';
        }
        if (message.ewmaTask != null && message.hasOwnProperty('ewmaTask')) {
          object.ewmaTask = $root.OracleJob.EwmaTask.toObject(
            message.ewmaTask,
            options
          );
          if (options.oneofs) object.Task = 'ewmaTask';
        }
        if (
          message.comparisonTask != null &&
          message.hasOwnProperty('comparisonTask')
        ) {
          object.comparisonTask = $root.OracleJob.ComparisonTask.toObject(
            message.comparisonTask,
            options
          );
          if (options.oneofs) object.Task = 'comparisonTask';
        }
        if (message.roundTask != null && message.hasOwnProperty('roundTask')) {
          object.roundTask = $root.OracleJob.RoundTask.toObject(
            message.roundTask,
            options
          );
          if (options.oneofs) object.Task = 'roundTask';
        }
        if (message.boundTask != null && message.hasOwnProperty('boundTask')) {
          object.boundTask = $root.OracleJob.BoundTask.toObject(
            message.boundTask,
            options
          );
          if (options.oneofs) object.Task = 'boundTask';
        }
        return object;
      };

      /**
       * Converts this Task to JSON.
       * @function toJSON
       * @memberof OracleJob.Task
       * @instance
       * @returns {Object.<string,*>} JSON object
       */
      Task.prototype.toJSON = function toJSON() {
        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
      };

      /**
       * Gets the default type url for Task
       * @function getTypeUrl
       * @memberof OracleJob.Task
       * @static
       * @param {string} [typeUrlPrefix] your custom typeUrlPrefix(default "type.googleapis.com")
       * @returns {string} The default type url
       */
      Task.getTypeUrl = function getTypeUrl(typeUrlPrefix) {
        if (typeUrlPrefix === undefined) {
          typeUrlPrefix = 'type.googleapis.com';
        }
        return typeUrlPrefix + '/OracleJob.Task';
      };

      return Task;
    })();

    return OracleJob;
  })();

  return $root;
});
