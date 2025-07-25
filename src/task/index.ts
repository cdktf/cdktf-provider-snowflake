/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#abort_detached_query Task#abort_detached_query}
  */
  readonly abortDetachedQuery?: boolean | cdktf.IResolvable;
  /**
  * Specifies one or more predecessor tasks for the current task. Use this option to [create a DAG](https://docs.snowflake.com/en/user-guide/tasks-graphs.html#label-task-dag) of tasks or add this task to an existing DAG. A DAG is a series of tasks that starts with a scheduled root task and is linked together by dependencies. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#after Task#after}
  */
  readonly after?: string[];
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) By default, Snowflake ensures that only one instance of a particular DAG is allowed to run at a time, setting the parameter value to TRUE permits DAG runs to overlap. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#allow_overlapping_execution Task#allow_overlapping_execution}
  */
  readonly allowOverlappingExecution?: string;
  /**
  * Specifies whether autocommit is enabled for the session. Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#autocommit Task#autocommit}
  */
  readonly autocommit?: boolean | cdktf.IResolvable;
  /**
  * The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#binary_input_format Task#binary_input_format}
  */
  readonly binaryInputFormat?: string;
  /**
  * The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#binary_output_format Task#binary_output_format}
  */
  readonly binaryOutputFormat?: string;
  /**
  * Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#client_memory_limit Task#client_memory_limit}
  */
  readonly clientMemoryLimit?: number;
  /**
  * For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#client_metadata_request_use_connection_ctx Task#client_metadata_request_use_connection_ctx}
  */
  readonly clientMetadataRequestUseConnectionCtx?: boolean | cdktf.IResolvable;
  /**
  * Parameter that specifies the number of threads used by the client to pre-fetch large result sets. The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#client_prefetch_threads Task#client_prefetch_threads}
  */
  readonly clientPrefetchThreads?: number;
  /**
  * Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#client_result_chunk_size Task#client_result_chunk_size}
  */
  readonly clientResultChunkSize?: number;
  /**
  * Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#client_result_column_case_insensitive Task#client_result_column_case_insensitive}
  */
  readonly clientResultColumnCaseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#client_session_keep_alive Task#client_session_keep_alive}
  */
  readonly clientSessionKeepAlive?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#client_session_keep_alive_heartbeat_frequency Task#client_session_keep_alive_heartbeat_frequency}
  */
  readonly clientSessionKeepAliveHeartbeatFrequency?: number;
  /**
  * Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#client_timestamp_type_mapping Task#client_timestamp_type_mapping}
  */
  readonly clientTimestampTypeMapping?: string;
  /**
  * Specifies a comment for the task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#comment Task#comment}
  */
  readonly comment?: string;
  /**
  * Specifies a string representation of key value pairs that can be accessed by all tasks in the task graph. Must be in JSON format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#config Task#config}
  */
  readonly config?: string;
  /**
  * The database in which to create the task. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#database Task#database}
  */
  readonly database: string;
  /**
  * Specifies the input format for the DATE data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#date_input_format Task#date_input_format}
  */
  readonly dateInputFormat?: string;
  /**
  * Specifies the display format for the DATE data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#date_output_format Task#date_output_format}
  */
  readonly dateOutputFormat?: string;
  /**
  * Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#enable_unload_physical_type_optimization Task#enable_unload_physical_type_optimization}
  */
  readonly enableUnloadPhysicalTypeOptimization?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the notification integration used for error notifications. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information about this resource, see [docs](./notification_integration).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#error_integration Task#error_integration}
  */
  readonly errorIntegration?: string;
  /**
  * Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#error_on_nondeterministic_merge Task#error_on_nondeterministic_merge}
  */
  readonly errorOnNondeterministicMerge?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#error_on_nondeterministic_update Task#error_on_nondeterministic_update}
  */
  readonly errorOnNondeterministicUpdate?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of a root task that the finalizer task is associated with. Finalizer tasks run after all other tasks in the task graph run to completion. You can define the SQL of a finalizer task to handle notifications and the release and cleanup of resources that a task graph uses. For more information, see [Release and cleanup of task graphs](https://docs.snowflake.com/en/user-guide/tasks-graphs.html#label-finalizer-task). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#finalize Task#finalize}
  */
  readonly finalize?: string;
  /**
  * Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#geography_output_format Task#geography_output_format}
  */
  readonly geographyOutputFormat?: string;
  /**
  * Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#geometry_output_format Task#geometry_output_format}
  */
  readonly geometryOutputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#id Task#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies how JDBC processes TIMESTAMP_NTZ values. For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#jdbc_treat_timestamp_ntz_as_utc Task#jdbc_treat_timestamp_ntz_as_utc}
  */
  readonly jdbcTreatTimestampNtzAsUtc?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#jdbc_use_session_timezone Task#jdbc_use_session_timezone}
  */
  readonly jdbcUseSessionTimezone?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of blank spaces to indent each new element in JSON output in the session. Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#json_indent Task#json_indent}
  */
  readonly jsonIndent?: number;
  /**
  * Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#lock_timeout Task#lock_timeout}
  */
  readonly lockTimeout?: number;
  /**
  * Specifies the severity level of messages that should be ingested and made available in the active event table. Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting log level](https://docs.snowflake.com/en/developer-guide/logging-tracing/logging-log-level). For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#log_level Task#log_level}
  */
  readonly logLevel?: string;
  /**
  * Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#multi_statement_count Task#multi_statement_count}
  */
  readonly multiStatementCount?: number;
  /**
  * Specifies the identifier for the task; must be unique for the database and schema in which the task is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#name Task#name}
  */
  readonly name: string;
  /**
  * Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#noorder_sequence_as_default Task#noorder_sequence_as_default}
  */
  readonly noorderSequenceAsDefault?: boolean | cdktf.IResolvable;
  /**
  * Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#odbc_treat_decimal_as_int Task#odbc_treat_decimal_as_int}
  */
  readonly odbcTreatDecimalAsInt?: boolean | cdktf.IResolvable;
  /**
  * Optional string that can be used to tag queries and other SQL statements executed within a session. The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#query_tag Task#query_tag}
  */
  readonly queryTag?: string;
  /**
  * Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#quoted_identifiers_ignore_case Task#quoted_identifiers_ignore_case}
  */
  readonly quotedIdentifiersIgnoreCase?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum number of rows returned in a result set. A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#rows_per_resultset Task#rows_per_resultset}
  */
  readonly rowsPerResultset?: number;
  /**
  * Specifies the DNS name of an Amazon S3 interface endpoint. Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#s3_stage_vpce_dns_name Task#s3_stage_vpce_dns_name}
  */
  readonly s3StageVpceDnsName?: string;
  /**
  * The schema in which to create the task. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#schema Task#schema}
  */
  readonly schema: string;
  /**
  * Specifies the path to search to resolve unqualified object names in queries. For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#search_path Task#search_path}
  */
  readonly searchPath?: string;
  /**
  * Any single SQL statement, or a call to a stored procedure, executed when the task runs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#sql_statement Task#sql_statement}
  */
  readonly sqlStatement: string;
  /**
  * Specifies if the task should be started or suspended.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#started Task#started}
  */
  readonly started: boolean | cdktf.IResolvable;
  /**
  * Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#statement_queued_timeout_in_seconds Task#statement_queued_timeout_in_seconds}
  */
  readonly statementQueuedTimeoutInSeconds?: number;
  /**
  * Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#statement_timeout_in_seconds Task#statement_timeout_in_seconds}
  */
  readonly statementTimeoutInSeconds?: number;
  /**
  * This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#strict_json_output Task#strict_json_output}
  */
  readonly strictJsonOutput?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of consecutive failed task runs after which the current task is suspended automatically. The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#suspend_task_after_num_failures Task#suspend_task_after_num_failures}
  */
  readonly suspendTaskAfterNumFailures?: number;
  /**
  * Specifies the number of automatic task graph retry attempts. If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#task_auto_retry_attempts Task#task_auto_retry_attempts}
  */
  readonly taskAutoRetryAttempts?: number;
  /**
  * Specifies the input format for the TIME data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#time_input_format Task#time_input_format}
  */
  readonly timeInputFormat?: string;
  /**
  * Specifies the display format for the TIME data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#time_output_format Task#time_output_format}
  */
  readonly timeOutputFormat?: string;
  /**
  * Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#timestamp_day_is_always_24h Task#timestamp_day_is_always_24h}
  */
  readonly timestampDayIsAlways24H?: boolean | cdktf.IResolvable;
  /**
  * Specifies the input format for the TIMESTAMP data type alias. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#timestamp_input_format Task#timestamp_input_format}
  */
  readonly timestampInputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP_LTZ data type. If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#timestamp_ltz_output_format Task#timestamp_ltz_output_format}
  */
  readonly timestampLtzOutputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#timestamp_ntz_output_format Task#timestamp_ntz_output_format}
  */
  readonly timestampNtzOutputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP data type alias. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#timestamp_output_format Task#timestamp_output_format}
  */
  readonly timestampOutputFormat?: string;
  /**
  * Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#timestamp_type_mapping Task#timestamp_type_mapping}
  */
  readonly timestampTypeMapping?: string;
  /**
  * Specifies the display format for the TIMESTAMP_TZ data type. If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#timestamp_tz_output_format Task#timestamp_tz_output_format}
  */
  readonly timestampTzOutputFormat?: string;
  /**
  * Specifies the time zone for the session. You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#timezone Task#timezone}
  */
  readonly timezone?: string;
  /**
  * Controls how trace events are ingested into the event table. For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#trace_level Task#trace_level}
  */
  readonly traceLevel?: string;
  /**
  * Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#transaction_abort_on_error Task#transaction_abort_on_error}
  */
  readonly transactionAbortOnError?: boolean | cdktf.IResolvable;
  /**
  * Specifies the isolation level for transactions in the user session. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#transaction_default_isolation_level Task#transaction_default_isolation_level}
  */
  readonly transactionDefaultIsolationLevel?: string;
  /**
  * Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#two_digit_century_start Task#two_digit_century_start}
  */
  readonly twoDigitCenturyStart?: number;
  /**
  * Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#unsupported_ddl_action Task#unsupported_ddl_action}
  */
  readonly unsupportedDdlAction?: string;
  /**
  * Specifies whether to reuse persisted query results, if available, when a matching query is submitted. For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#use_cached_result Task#use_cached_result}
  */
  readonly useCachedResult?: boolean | cdktf.IResolvable;
  /**
  * Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): %s. (Conflicts with warehouse). For more information about warehouses, see [docs](./warehouse). For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#user_task_managed_initial_warehouse_size Task#user_task_managed_initial_warehouse_size}
  */
  readonly userTaskManagedInitialWarehouseSize?: string;
  /**
  * Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#user_task_minimum_trigger_interval_in_seconds Task#user_task_minimum_trigger_interval_in_seconds}
  */
  readonly userTaskMinimumTriggerIntervalInSeconds?: number;
  /**
  * Specifies the time limit on a single run of the task before it times out (in milliseconds). For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#user_task_timeout_ms Task#user_task_timeout_ms}
  */
  readonly userTaskTimeoutMs?: number;
  /**
  * The warehouse the task will use. Omit this parameter to use Snowflake-managed compute resources for runs of this task. Due to Snowflake limitations warehouse identifier can consist of only upper-cased letters. (Conflicts with user_task_managed_initial_warehouse_size) For more information about this resource, see [docs](./warehouse).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#warehouse Task#warehouse}
  */
  readonly warehouse?: string;
  /**
  * Specifies how the weeks in a given year are computed. `0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#week_of_year_policy Task#week_of_year_policy}
  */
  readonly weekOfYearPolicy?: number;
  /**
  * Specifies the first day of the week (used by week-related date functions). `0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#week_start Task#week_start}
  */
  readonly weekStart?: number;
  /**
  * Specifies a Boolean SQL expression; multiple conditions joined with AND/OR are supported. When a task is triggered (based on its SCHEDULE or AFTER setting), it validates the conditions of the expression to determine whether to execute. If the conditions of the expression are not met, then the task skips the current run. Any tasks that identify this task as a predecessor also don’t run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#when Task#when}
  */
  readonly when?: string;
  /**
  * schedule block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#schedule Task#schedule}
  */
  readonly schedule?: TaskSchedule;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#timeouts Task#timeouts}
  */
  readonly timeouts?: TaskTimeouts;
}
export interface TaskParametersAbortDetachedQuery {
}

export function taskParametersAbortDetachedQueryToTerraform(struct?: TaskParametersAbortDetachedQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersAbortDetachedQueryToHclTerraform(struct?: TaskParametersAbortDetachedQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersAbortDetachedQueryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersAbortDetachedQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersAbortDetachedQuery | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersAbortDetachedQueryList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersAbortDetachedQueryOutputReference {
    return new TaskParametersAbortDetachedQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersAutocommit {
}

export function taskParametersAutocommitToTerraform(struct?: TaskParametersAutocommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersAutocommitToHclTerraform(struct?: TaskParametersAutocommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersAutocommitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersAutocommit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersAutocommit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersAutocommitList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersAutocommitOutputReference {
    return new TaskParametersAutocommitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersBinaryInputFormat {
}

export function taskParametersBinaryInputFormatToTerraform(struct?: TaskParametersBinaryInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersBinaryInputFormatToHclTerraform(struct?: TaskParametersBinaryInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersBinaryInputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersBinaryInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersBinaryInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersBinaryInputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersBinaryInputFormatOutputReference {
    return new TaskParametersBinaryInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersBinaryOutputFormat {
}

export function taskParametersBinaryOutputFormatToTerraform(struct?: TaskParametersBinaryOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersBinaryOutputFormatToHclTerraform(struct?: TaskParametersBinaryOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersBinaryOutputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersBinaryOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersBinaryOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersBinaryOutputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersBinaryOutputFormatOutputReference {
    return new TaskParametersBinaryOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersClientMemoryLimit {
}

export function taskParametersClientMemoryLimitToTerraform(struct?: TaskParametersClientMemoryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersClientMemoryLimitToHclTerraform(struct?: TaskParametersClientMemoryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersClientMemoryLimitOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersClientMemoryLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersClientMemoryLimit | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersClientMemoryLimitList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersClientMemoryLimitOutputReference {
    return new TaskParametersClientMemoryLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersClientMetadataRequestUseConnectionCtx {
}

export function taskParametersClientMetadataRequestUseConnectionCtxToTerraform(struct?: TaskParametersClientMetadataRequestUseConnectionCtx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersClientMetadataRequestUseConnectionCtxToHclTerraform(struct?: TaskParametersClientMetadataRequestUseConnectionCtx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersClientMetadataRequestUseConnectionCtxOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersClientMetadataRequestUseConnectionCtx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersClientMetadataRequestUseConnectionCtx | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersClientMetadataRequestUseConnectionCtxList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersClientMetadataRequestUseConnectionCtxOutputReference {
    return new TaskParametersClientMetadataRequestUseConnectionCtxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersClientPrefetchThreads {
}

export function taskParametersClientPrefetchThreadsToTerraform(struct?: TaskParametersClientPrefetchThreads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersClientPrefetchThreadsToHclTerraform(struct?: TaskParametersClientPrefetchThreads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersClientPrefetchThreadsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersClientPrefetchThreads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersClientPrefetchThreads | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersClientPrefetchThreadsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersClientPrefetchThreadsOutputReference {
    return new TaskParametersClientPrefetchThreadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersClientResultChunkSize {
}

export function taskParametersClientResultChunkSizeToTerraform(struct?: TaskParametersClientResultChunkSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersClientResultChunkSizeToHclTerraform(struct?: TaskParametersClientResultChunkSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersClientResultChunkSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersClientResultChunkSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersClientResultChunkSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersClientResultChunkSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersClientResultChunkSizeOutputReference {
    return new TaskParametersClientResultChunkSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersClientResultColumnCaseInsensitive {
}

export function taskParametersClientResultColumnCaseInsensitiveToTerraform(struct?: TaskParametersClientResultColumnCaseInsensitive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersClientResultColumnCaseInsensitiveToHclTerraform(struct?: TaskParametersClientResultColumnCaseInsensitive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersClientResultColumnCaseInsensitiveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersClientResultColumnCaseInsensitive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersClientResultColumnCaseInsensitive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersClientResultColumnCaseInsensitiveList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersClientResultColumnCaseInsensitiveOutputReference {
    return new TaskParametersClientResultColumnCaseInsensitiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersClientSessionKeepAlive {
}

export function taskParametersClientSessionKeepAliveToTerraform(struct?: TaskParametersClientSessionKeepAlive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersClientSessionKeepAliveToHclTerraform(struct?: TaskParametersClientSessionKeepAlive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersClientSessionKeepAliveOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersClientSessionKeepAlive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersClientSessionKeepAlive | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersClientSessionKeepAliveList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersClientSessionKeepAliveOutputReference {
    return new TaskParametersClientSessionKeepAliveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersClientSessionKeepAliveHeartbeatFrequency {
}

export function taskParametersClientSessionKeepAliveHeartbeatFrequencyToTerraform(struct?: TaskParametersClientSessionKeepAliveHeartbeatFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersClientSessionKeepAliveHeartbeatFrequencyToHclTerraform(struct?: TaskParametersClientSessionKeepAliveHeartbeatFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersClientSessionKeepAliveHeartbeatFrequencyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersClientSessionKeepAliveHeartbeatFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersClientSessionKeepAliveHeartbeatFrequency | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersClientSessionKeepAliveHeartbeatFrequencyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersClientSessionKeepAliveHeartbeatFrequencyOutputReference {
    return new TaskParametersClientSessionKeepAliveHeartbeatFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersClientTimestampTypeMapping {
}

export function taskParametersClientTimestampTypeMappingToTerraform(struct?: TaskParametersClientTimestampTypeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersClientTimestampTypeMappingToHclTerraform(struct?: TaskParametersClientTimestampTypeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersClientTimestampTypeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersClientTimestampTypeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersClientTimestampTypeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersClientTimestampTypeMappingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersClientTimestampTypeMappingOutputReference {
    return new TaskParametersClientTimestampTypeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersDateInputFormat {
}

export function taskParametersDateInputFormatToTerraform(struct?: TaskParametersDateInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersDateInputFormatToHclTerraform(struct?: TaskParametersDateInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersDateInputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersDateInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersDateInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersDateInputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersDateInputFormatOutputReference {
    return new TaskParametersDateInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersDateOutputFormat {
}

export function taskParametersDateOutputFormatToTerraform(struct?: TaskParametersDateOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersDateOutputFormatToHclTerraform(struct?: TaskParametersDateOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersDateOutputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersDateOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersDateOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersDateOutputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersDateOutputFormatOutputReference {
    return new TaskParametersDateOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersEnableUnloadPhysicalTypeOptimization {
}

export function taskParametersEnableUnloadPhysicalTypeOptimizationToTerraform(struct?: TaskParametersEnableUnloadPhysicalTypeOptimization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersEnableUnloadPhysicalTypeOptimizationToHclTerraform(struct?: TaskParametersEnableUnloadPhysicalTypeOptimization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersEnableUnloadPhysicalTypeOptimizationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersEnableUnloadPhysicalTypeOptimization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersEnableUnloadPhysicalTypeOptimization | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersEnableUnloadPhysicalTypeOptimizationList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersEnableUnloadPhysicalTypeOptimizationOutputReference {
    return new TaskParametersEnableUnloadPhysicalTypeOptimizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersErrorOnNondeterministicMerge {
}

export function taskParametersErrorOnNondeterministicMergeToTerraform(struct?: TaskParametersErrorOnNondeterministicMerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersErrorOnNondeterministicMergeToHclTerraform(struct?: TaskParametersErrorOnNondeterministicMerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersErrorOnNondeterministicMergeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersErrorOnNondeterministicMerge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersErrorOnNondeterministicMerge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersErrorOnNondeterministicMergeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersErrorOnNondeterministicMergeOutputReference {
    return new TaskParametersErrorOnNondeterministicMergeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersErrorOnNondeterministicUpdate {
}

export function taskParametersErrorOnNondeterministicUpdateToTerraform(struct?: TaskParametersErrorOnNondeterministicUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersErrorOnNondeterministicUpdateToHclTerraform(struct?: TaskParametersErrorOnNondeterministicUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersErrorOnNondeterministicUpdateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersErrorOnNondeterministicUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersErrorOnNondeterministicUpdate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersErrorOnNondeterministicUpdateList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersErrorOnNondeterministicUpdateOutputReference {
    return new TaskParametersErrorOnNondeterministicUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersGeographyOutputFormat {
}

export function taskParametersGeographyOutputFormatToTerraform(struct?: TaskParametersGeographyOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersGeographyOutputFormatToHclTerraform(struct?: TaskParametersGeographyOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersGeographyOutputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersGeographyOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersGeographyOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersGeographyOutputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersGeographyOutputFormatOutputReference {
    return new TaskParametersGeographyOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersGeometryOutputFormat {
}

export function taskParametersGeometryOutputFormatToTerraform(struct?: TaskParametersGeometryOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersGeometryOutputFormatToHclTerraform(struct?: TaskParametersGeometryOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersGeometryOutputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersGeometryOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersGeometryOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersGeometryOutputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersGeometryOutputFormatOutputReference {
    return new TaskParametersGeometryOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersJdbcTreatTimestampNtzAsUtc {
}

export function taskParametersJdbcTreatTimestampNtzAsUtcToTerraform(struct?: TaskParametersJdbcTreatTimestampNtzAsUtc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersJdbcTreatTimestampNtzAsUtcToHclTerraform(struct?: TaskParametersJdbcTreatTimestampNtzAsUtc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersJdbcTreatTimestampNtzAsUtcOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersJdbcTreatTimestampNtzAsUtc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersJdbcTreatTimestampNtzAsUtc | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersJdbcTreatTimestampNtzAsUtcList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersJdbcTreatTimestampNtzAsUtcOutputReference {
    return new TaskParametersJdbcTreatTimestampNtzAsUtcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersJdbcUseSessionTimezone {
}

export function taskParametersJdbcUseSessionTimezoneToTerraform(struct?: TaskParametersJdbcUseSessionTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersJdbcUseSessionTimezoneToHclTerraform(struct?: TaskParametersJdbcUseSessionTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersJdbcUseSessionTimezoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersJdbcUseSessionTimezone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersJdbcUseSessionTimezone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersJdbcUseSessionTimezoneList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersJdbcUseSessionTimezoneOutputReference {
    return new TaskParametersJdbcUseSessionTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersJsonIndent {
}

export function taskParametersJsonIndentToTerraform(struct?: TaskParametersJsonIndent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersJsonIndentToHclTerraform(struct?: TaskParametersJsonIndent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersJsonIndentOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersJsonIndent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersJsonIndent | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersJsonIndentList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersJsonIndentOutputReference {
    return new TaskParametersJsonIndentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersLockTimeout {
}

export function taskParametersLockTimeoutToTerraform(struct?: TaskParametersLockTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersLockTimeoutToHclTerraform(struct?: TaskParametersLockTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersLockTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersLockTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersLockTimeout | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersLockTimeoutList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersLockTimeoutOutputReference {
    return new TaskParametersLockTimeoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersLogLevel {
}

export function taskParametersLogLevelToTerraform(struct?: TaskParametersLogLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersLogLevelToHclTerraform(struct?: TaskParametersLogLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersLogLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersLogLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersLogLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersLogLevelList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersLogLevelOutputReference {
    return new TaskParametersLogLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersMultiStatementCount {
}

export function taskParametersMultiStatementCountToTerraform(struct?: TaskParametersMultiStatementCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersMultiStatementCountToHclTerraform(struct?: TaskParametersMultiStatementCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersMultiStatementCountOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersMultiStatementCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersMultiStatementCount | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersMultiStatementCountList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersMultiStatementCountOutputReference {
    return new TaskParametersMultiStatementCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersNoorderSequenceAsDefault {
}

export function taskParametersNoorderSequenceAsDefaultToTerraform(struct?: TaskParametersNoorderSequenceAsDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersNoorderSequenceAsDefaultToHclTerraform(struct?: TaskParametersNoorderSequenceAsDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersNoorderSequenceAsDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersNoorderSequenceAsDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersNoorderSequenceAsDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersNoorderSequenceAsDefaultList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersNoorderSequenceAsDefaultOutputReference {
    return new TaskParametersNoorderSequenceAsDefaultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersOdbcTreatDecimalAsInt {
}

export function taskParametersOdbcTreatDecimalAsIntToTerraform(struct?: TaskParametersOdbcTreatDecimalAsInt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersOdbcTreatDecimalAsIntToHclTerraform(struct?: TaskParametersOdbcTreatDecimalAsInt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersOdbcTreatDecimalAsIntOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersOdbcTreatDecimalAsInt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersOdbcTreatDecimalAsInt | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersOdbcTreatDecimalAsIntList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersOdbcTreatDecimalAsIntOutputReference {
    return new TaskParametersOdbcTreatDecimalAsIntOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersQueryTag {
}

export function taskParametersQueryTagToTerraform(struct?: TaskParametersQueryTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersQueryTagToHclTerraform(struct?: TaskParametersQueryTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersQueryTagOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersQueryTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersQueryTag | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersQueryTagList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersQueryTagOutputReference {
    return new TaskParametersQueryTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersQuotedIdentifiersIgnoreCase {
}

export function taskParametersQuotedIdentifiersIgnoreCaseToTerraform(struct?: TaskParametersQuotedIdentifiersIgnoreCase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersQuotedIdentifiersIgnoreCaseToHclTerraform(struct?: TaskParametersQuotedIdentifiersIgnoreCase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersQuotedIdentifiersIgnoreCaseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersQuotedIdentifiersIgnoreCase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersQuotedIdentifiersIgnoreCase | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersQuotedIdentifiersIgnoreCaseList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersQuotedIdentifiersIgnoreCaseOutputReference {
    return new TaskParametersQuotedIdentifiersIgnoreCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersRowsPerResultset {
}

export function taskParametersRowsPerResultsetToTerraform(struct?: TaskParametersRowsPerResultset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersRowsPerResultsetToHclTerraform(struct?: TaskParametersRowsPerResultset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersRowsPerResultsetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersRowsPerResultset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersRowsPerResultset | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersRowsPerResultsetList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersRowsPerResultsetOutputReference {
    return new TaskParametersRowsPerResultsetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersS3StageVpceDnsName {
}

export function taskParametersS3StageVpceDnsNameToTerraform(struct?: TaskParametersS3StageVpceDnsName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersS3StageVpceDnsNameToHclTerraform(struct?: TaskParametersS3StageVpceDnsName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersS3StageVpceDnsNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersS3StageVpceDnsName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersS3StageVpceDnsName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersS3StageVpceDnsNameList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersS3StageVpceDnsNameOutputReference {
    return new TaskParametersS3StageVpceDnsNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersSearchPath {
}

export function taskParametersSearchPathToTerraform(struct?: TaskParametersSearchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersSearchPathToHclTerraform(struct?: TaskParametersSearchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersSearchPathOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersSearchPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersSearchPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersSearchPathList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersSearchPathOutputReference {
    return new TaskParametersSearchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersStatementQueuedTimeoutInSeconds {
}

export function taskParametersStatementQueuedTimeoutInSecondsToTerraform(struct?: TaskParametersStatementQueuedTimeoutInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersStatementQueuedTimeoutInSecondsToHclTerraform(struct?: TaskParametersStatementQueuedTimeoutInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersStatementQueuedTimeoutInSecondsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersStatementQueuedTimeoutInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersStatementQueuedTimeoutInSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersStatementQueuedTimeoutInSecondsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersStatementQueuedTimeoutInSecondsOutputReference {
    return new TaskParametersStatementQueuedTimeoutInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersStatementTimeoutInSeconds {
}

export function taskParametersStatementTimeoutInSecondsToTerraform(struct?: TaskParametersStatementTimeoutInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersStatementTimeoutInSecondsToHclTerraform(struct?: TaskParametersStatementTimeoutInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersStatementTimeoutInSecondsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersStatementTimeoutInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersStatementTimeoutInSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersStatementTimeoutInSecondsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersStatementTimeoutInSecondsOutputReference {
    return new TaskParametersStatementTimeoutInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersStrictJsonOutput {
}

export function taskParametersStrictJsonOutputToTerraform(struct?: TaskParametersStrictJsonOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersStrictJsonOutputToHclTerraform(struct?: TaskParametersStrictJsonOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersStrictJsonOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersStrictJsonOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersStrictJsonOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersStrictJsonOutputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersStrictJsonOutputOutputReference {
    return new TaskParametersStrictJsonOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersSuspendTaskAfterNumFailures {
}

export function taskParametersSuspendTaskAfterNumFailuresToTerraform(struct?: TaskParametersSuspendTaskAfterNumFailures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersSuspendTaskAfterNumFailuresToHclTerraform(struct?: TaskParametersSuspendTaskAfterNumFailures): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersSuspendTaskAfterNumFailuresOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersSuspendTaskAfterNumFailures | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersSuspendTaskAfterNumFailures | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersSuspendTaskAfterNumFailuresList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersSuspendTaskAfterNumFailuresOutputReference {
    return new TaskParametersSuspendTaskAfterNumFailuresOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTaskAutoRetryAttempts {
}

export function taskParametersTaskAutoRetryAttemptsToTerraform(struct?: TaskParametersTaskAutoRetryAttempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTaskAutoRetryAttemptsToHclTerraform(struct?: TaskParametersTaskAutoRetryAttempts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTaskAutoRetryAttemptsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTaskAutoRetryAttempts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTaskAutoRetryAttempts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTaskAutoRetryAttemptsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTaskAutoRetryAttemptsOutputReference {
    return new TaskParametersTaskAutoRetryAttemptsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimeInputFormat {
}

export function taskParametersTimeInputFormatToTerraform(struct?: TaskParametersTimeInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimeInputFormatToHclTerraform(struct?: TaskParametersTimeInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimeInputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimeInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimeInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimeInputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimeInputFormatOutputReference {
    return new TaskParametersTimeInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimeOutputFormat {
}

export function taskParametersTimeOutputFormatToTerraform(struct?: TaskParametersTimeOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimeOutputFormatToHclTerraform(struct?: TaskParametersTimeOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimeOutputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimeOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimeOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimeOutputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimeOutputFormatOutputReference {
    return new TaskParametersTimeOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimestampDayIsAlways24H {
}

export function taskParametersTimestampDayIsAlways24HToTerraform(struct?: TaskParametersTimestampDayIsAlways24H): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimestampDayIsAlways24HToHclTerraform(struct?: TaskParametersTimestampDayIsAlways24H): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimestampDayIsAlways24HOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimestampDayIsAlways24H | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimestampDayIsAlways24H | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimestampDayIsAlways24HList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimestampDayIsAlways24HOutputReference {
    return new TaskParametersTimestampDayIsAlways24HOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimestampInputFormat {
}

export function taskParametersTimestampInputFormatToTerraform(struct?: TaskParametersTimestampInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimestampInputFormatToHclTerraform(struct?: TaskParametersTimestampInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimestampInputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimestampInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimestampInputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimestampInputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimestampInputFormatOutputReference {
    return new TaskParametersTimestampInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimestampLtzOutputFormat {
}

export function taskParametersTimestampLtzOutputFormatToTerraform(struct?: TaskParametersTimestampLtzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimestampLtzOutputFormatToHclTerraform(struct?: TaskParametersTimestampLtzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimestampLtzOutputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimestampLtzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimestampLtzOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimestampLtzOutputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimestampLtzOutputFormatOutputReference {
    return new TaskParametersTimestampLtzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimestampNtzOutputFormat {
}

export function taskParametersTimestampNtzOutputFormatToTerraform(struct?: TaskParametersTimestampNtzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimestampNtzOutputFormatToHclTerraform(struct?: TaskParametersTimestampNtzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimestampNtzOutputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimestampNtzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimestampNtzOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimestampNtzOutputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimestampNtzOutputFormatOutputReference {
    return new TaskParametersTimestampNtzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimestampOutputFormat {
}

export function taskParametersTimestampOutputFormatToTerraform(struct?: TaskParametersTimestampOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimestampOutputFormatToHclTerraform(struct?: TaskParametersTimestampOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimestampOutputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimestampOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimestampOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimestampOutputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimestampOutputFormatOutputReference {
    return new TaskParametersTimestampOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimestampTypeMapping {
}

export function taskParametersTimestampTypeMappingToTerraform(struct?: TaskParametersTimestampTypeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimestampTypeMappingToHclTerraform(struct?: TaskParametersTimestampTypeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimestampTypeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimestampTypeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimestampTypeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimestampTypeMappingList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimestampTypeMappingOutputReference {
    return new TaskParametersTimestampTypeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimestampTzOutputFormat {
}

export function taskParametersTimestampTzOutputFormatToTerraform(struct?: TaskParametersTimestampTzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimestampTzOutputFormatToHclTerraform(struct?: TaskParametersTimestampTzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimestampTzOutputFormatOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimestampTzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimestampTzOutputFormat | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimestampTzOutputFormatList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimestampTzOutputFormatOutputReference {
    return new TaskParametersTimestampTzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTimezone {
}

export function taskParametersTimezoneToTerraform(struct?: TaskParametersTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTimezoneToHclTerraform(struct?: TaskParametersTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTimezoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTimezone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTimezone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTimezoneList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTimezoneOutputReference {
    return new TaskParametersTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTraceLevel {
}

export function taskParametersTraceLevelToTerraform(struct?: TaskParametersTraceLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTraceLevelToHclTerraform(struct?: TaskParametersTraceLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTraceLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTraceLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTraceLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTraceLevelList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTraceLevelOutputReference {
    return new TaskParametersTraceLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTransactionAbortOnError {
}

export function taskParametersTransactionAbortOnErrorToTerraform(struct?: TaskParametersTransactionAbortOnError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTransactionAbortOnErrorToHclTerraform(struct?: TaskParametersTransactionAbortOnError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTransactionAbortOnErrorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTransactionAbortOnError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTransactionAbortOnError | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTransactionAbortOnErrorList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTransactionAbortOnErrorOutputReference {
    return new TaskParametersTransactionAbortOnErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTransactionDefaultIsolationLevel {
}

export function taskParametersTransactionDefaultIsolationLevelToTerraform(struct?: TaskParametersTransactionDefaultIsolationLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTransactionDefaultIsolationLevelToHclTerraform(struct?: TaskParametersTransactionDefaultIsolationLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTransactionDefaultIsolationLevelOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTransactionDefaultIsolationLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTransactionDefaultIsolationLevel | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTransactionDefaultIsolationLevelList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTransactionDefaultIsolationLevelOutputReference {
    return new TaskParametersTransactionDefaultIsolationLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersTwoDigitCenturyStart {
}

export function taskParametersTwoDigitCenturyStartToTerraform(struct?: TaskParametersTwoDigitCenturyStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersTwoDigitCenturyStartToHclTerraform(struct?: TaskParametersTwoDigitCenturyStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersTwoDigitCenturyStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersTwoDigitCenturyStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersTwoDigitCenturyStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersTwoDigitCenturyStartList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersTwoDigitCenturyStartOutputReference {
    return new TaskParametersTwoDigitCenturyStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersUnsupportedDdlAction {
}

export function taskParametersUnsupportedDdlActionToTerraform(struct?: TaskParametersUnsupportedDdlAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersUnsupportedDdlActionToHclTerraform(struct?: TaskParametersUnsupportedDdlAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersUnsupportedDdlActionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersUnsupportedDdlAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersUnsupportedDdlAction | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersUnsupportedDdlActionList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersUnsupportedDdlActionOutputReference {
    return new TaskParametersUnsupportedDdlActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersUseCachedResult {
}

export function taskParametersUseCachedResultToTerraform(struct?: TaskParametersUseCachedResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersUseCachedResultToHclTerraform(struct?: TaskParametersUseCachedResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersUseCachedResultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersUseCachedResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersUseCachedResult | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersUseCachedResultList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersUseCachedResultOutputReference {
    return new TaskParametersUseCachedResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersUserTaskManagedInitialWarehouseSize {
}

export function taskParametersUserTaskManagedInitialWarehouseSizeToTerraform(struct?: TaskParametersUserTaskManagedInitialWarehouseSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersUserTaskManagedInitialWarehouseSizeToHclTerraform(struct?: TaskParametersUserTaskManagedInitialWarehouseSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersUserTaskManagedInitialWarehouseSizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersUserTaskManagedInitialWarehouseSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersUserTaskManagedInitialWarehouseSize | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersUserTaskManagedInitialWarehouseSizeList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersUserTaskManagedInitialWarehouseSizeOutputReference {
    return new TaskParametersUserTaskManagedInitialWarehouseSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersUserTaskMinimumTriggerIntervalInSeconds {
}

export function taskParametersUserTaskMinimumTriggerIntervalInSecondsToTerraform(struct?: TaskParametersUserTaskMinimumTriggerIntervalInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersUserTaskMinimumTriggerIntervalInSecondsToHclTerraform(struct?: TaskParametersUserTaskMinimumTriggerIntervalInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersUserTaskMinimumTriggerIntervalInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersUserTaskMinimumTriggerIntervalInSeconds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersUserTaskMinimumTriggerIntervalInSecondsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference {
    return new TaskParametersUserTaskMinimumTriggerIntervalInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersUserTaskTimeoutMs {
}

export function taskParametersUserTaskTimeoutMsToTerraform(struct?: TaskParametersUserTaskTimeoutMs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersUserTaskTimeoutMsToHclTerraform(struct?: TaskParametersUserTaskTimeoutMs): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersUserTaskTimeoutMsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersUserTaskTimeoutMs | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersUserTaskTimeoutMs | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersUserTaskTimeoutMsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersUserTaskTimeoutMsOutputReference {
    return new TaskParametersUserTaskTimeoutMsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersWeekOfYearPolicy {
}

export function taskParametersWeekOfYearPolicyToTerraform(struct?: TaskParametersWeekOfYearPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersWeekOfYearPolicyToHclTerraform(struct?: TaskParametersWeekOfYearPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersWeekOfYearPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersWeekOfYearPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersWeekOfYearPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersWeekOfYearPolicyList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersWeekOfYearPolicyOutputReference {
    return new TaskParametersWeekOfYearPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParametersWeekStart {
}

export function taskParametersWeekStartToTerraform(struct?: TaskParametersWeekStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersWeekStartToHclTerraform(struct?: TaskParametersWeekStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersWeekStartOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParametersWeekStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParametersWeekStart | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getStringAttribute('default');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // level - computed: true, optional: false, required: false
  public get level() {
    return this.getStringAttribute('level');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class TaskParametersWeekStartList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersWeekStartOutputReference {
    return new TaskParametersWeekStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskParameters {
}

export function taskParametersToTerraform(struct?: TaskParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskParametersToHclTerraform(struct?: TaskParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_detached_query - computed: true, optional: false, required: false
  private _abortDetachedQuery = new TaskParametersAbortDetachedQueryList(this, "abort_detached_query", false);
  public get abortDetachedQuery() {
    return this._abortDetachedQuery;
  }

  // autocommit - computed: true, optional: false, required: false
  private _autocommit = new TaskParametersAutocommitList(this, "autocommit", false);
  public get autocommit() {
    return this._autocommit;
  }

  // binary_input_format - computed: true, optional: false, required: false
  private _binaryInputFormat = new TaskParametersBinaryInputFormatList(this, "binary_input_format", false);
  public get binaryInputFormat() {
    return this._binaryInputFormat;
  }

  // binary_output_format - computed: true, optional: false, required: false
  private _binaryOutputFormat = new TaskParametersBinaryOutputFormatList(this, "binary_output_format", false);
  public get binaryOutputFormat() {
    return this._binaryOutputFormat;
  }

  // client_memory_limit - computed: true, optional: false, required: false
  private _clientMemoryLimit = new TaskParametersClientMemoryLimitList(this, "client_memory_limit", false);
  public get clientMemoryLimit() {
    return this._clientMemoryLimit;
  }

  // client_metadata_request_use_connection_ctx - computed: true, optional: false, required: false
  private _clientMetadataRequestUseConnectionCtx = new TaskParametersClientMetadataRequestUseConnectionCtxList(this, "client_metadata_request_use_connection_ctx", false);
  public get clientMetadataRequestUseConnectionCtx() {
    return this._clientMetadataRequestUseConnectionCtx;
  }

  // client_prefetch_threads - computed: true, optional: false, required: false
  private _clientPrefetchThreads = new TaskParametersClientPrefetchThreadsList(this, "client_prefetch_threads", false);
  public get clientPrefetchThreads() {
    return this._clientPrefetchThreads;
  }

  // client_result_chunk_size - computed: true, optional: false, required: false
  private _clientResultChunkSize = new TaskParametersClientResultChunkSizeList(this, "client_result_chunk_size", false);
  public get clientResultChunkSize() {
    return this._clientResultChunkSize;
  }

  // client_result_column_case_insensitive - computed: true, optional: false, required: false
  private _clientResultColumnCaseInsensitive = new TaskParametersClientResultColumnCaseInsensitiveList(this, "client_result_column_case_insensitive", false);
  public get clientResultColumnCaseInsensitive() {
    return this._clientResultColumnCaseInsensitive;
  }

  // client_session_keep_alive - computed: true, optional: false, required: false
  private _clientSessionKeepAlive = new TaskParametersClientSessionKeepAliveList(this, "client_session_keep_alive", false);
  public get clientSessionKeepAlive() {
    return this._clientSessionKeepAlive;
  }

  // client_session_keep_alive_heartbeat_frequency - computed: true, optional: false, required: false
  private _clientSessionKeepAliveHeartbeatFrequency = new TaskParametersClientSessionKeepAliveHeartbeatFrequencyList(this, "client_session_keep_alive_heartbeat_frequency", false);
  public get clientSessionKeepAliveHeartbeatFrequency() {
    return this._clientSessionKeepAliveHeartbeatFrequency;
  }

  // client_timestamp_type_mapping - computed: true, optional: false, required: false
  private _clientTimestampTypeMapping = new TaskParametersClientTimestampTypeMappingList(this, "client_timestamp_type_mapping", false);
  public get clientTimestampTypeMapping() {
    return this._clientTimestampTypeMapping;
  }

  // date_input_format - computed: true, optional: false, required: false
  private _dateInputFormat = new TaskParametersDateInputFormatList(this, "date_input_format", false);
  public get dateInputFormat() {
    return this._dateInputFormat;
  }

  // date_output_format - computed: true, optional: false, required: false
  private _dateOutputFormat = new TaskParametersDateOutputFormatList(this, "date_output_format", false);
  public get dateOutputFormat() {
    return this._dateOutputFormat;
  }

  // enable_unload_physical_type_optimization - computed: true, optional: false, required: false
  private _enableUnloadPhysicalTypeOptimization = new TaskParametersEnableUnloadPhysicalTypeOptimizationList(this, "enable_unload_physical_type_optimization", false);
  public get enableUnloadPhysicalTypeOptimization() {
    return this._enableUnloadPhysicalTypeOptimization;
  }

  // error_on_nondeterministic_merge - computed: true, optional: false, required: false
  private _errorOnNondeterministicMerge = new TaskParametersErrorOnNondeterministicMergeList(this, "error_on_nondeterministic_merge", false);
  public get errorOnNondeterministicMerge() {
    return this._errorOnNondeterministicMerge;
  }

  // error_on_nondeterministic_update - computed: true, optional: false, required: false
  private _errorOnNondeterministicUpdate = new TaskParametersErrorOnNondeterministicUpdateList(this, "error_on_nondeterministic_update", false);
  public get errorOnNondeterministicUpdate() {
    return this._errorOnNondeterministicUpdate;
  }

  // geography_output_format - computed: true, optional: false, required: false
  private _geographyOutputFormat = new TaskParametersGeographyOutputFormatList(this, "geography_output_format", false);
  public get geographyOutputFormat() {
    return this._geographyOutputFormat;
  }

  // geometry_output_format - computed: true, optional: false, required: false
  private _geometryOutputFormat = new TaskParametersGeometryOutputFormatList(this, "geometry_output_format", false);
  public get geometryOutputFormat() {
    return this._geometryOutputFormat;
  }

  // jdbc_treat_timestamp_ntz_as_utc - computed: true, optional: false, required: false
  private _jdbcTreatTimestampNtzAsUtc = new TaskParametersJdbcTreatTimestampNtzAsUtcList(this, "jdbc_treat_timestamp_ntz_as_utc", false);
  public get jdbcTreatTimestampNtzAsUtc() {
    return this._jdbcTreatTimestampNtzAsUtc;
  }

  // jdbc_use_session_timezone - computed: true, optional: false, required: false
  private _jdbcUseSessionTimezone = new TaskParametersJdbcUseSessionTimezoneList(this, "jdbc_use_session_timezone", false);
  public get jdbcUseSessionTimezone() {
    return this._jdbcUseSessionTimezone;
  }

  // json_indent - computed: true, optional: false, required: false
  private _jsonIndent = new TaskParametersJsonIndentList(this, "json_indent", false);
  public get jsonIndent() {
    return this._jsonIndent;
  }

  // lock_timeout - computed: true, optional: false, required: false
  private _lockTimeout = new TaskParametersLockTimeoutList(this, "lock_timeout", false);
  public get lockTimeout() {
    return this._lockTimeout;
  }

  // log_level - computed: true, optional: false, required: false
  private _logLevel = new TaskParametersLogLevelList(this, "log_level", false);
  public get logLevel() {
    return this._logLevel;
  }

  // multi_statement_count - computed: true, optional: false, required: false
  private _multiStatementCount = new TaskParametersMultiStatementCountList(this, "multi_statement_count", false);
  public get multiStatementCount() {
    return this._multiStatementCount;
  }

  // noorder_sequence_as_default - computed: true, optional: false, required: false
  private _noorderSequenceAsDefault = new TaskParametersNoorderSequenceAsDefaultList(this, "noorder_sequence_as_default", false);
  public get noorderSequenceAsDefault() {
    return this._noorderSequenceAsDefault;
  }

  // odbc_treat_decimal_as_int - computed: true, optional: false, required: false
  private _odbcTreatDecimalAsInt = new TaskParametersOdbcTreatDecimalAsIntList(this, "odbc_treat_decimal_as_int", false);
  public get odbcTreatDecimalAsInt() {
    return this._odbcTreatDecimalAsInt;
  }

  // query_tag - computed: true, optional: false, required: false
  private _queryTag = new TaskParametersQueryTagList(this, "query_tag", false);
  public get queryTag() {
    return this._queryTag;
  }

  // quoted_identifiers_ignore_case - computed: true, optional: false, required: false
  private _quotedIdentifiersIgnoreCase = new TaskParametersQuotedIdentifiersIgnoreCaseList(this, "quoted_identifiers_ignore_case", false);
  public get quotedIdentifiersIgnoreCase() {
    return this._quotedIdentifiersIgnoreCase;
  }

  // rows_per_resultset - computed: true, optional: false, required: false
  private _rowsPerResultset = new TaskParametersRowsPerResultsetList(this, "rows_per_resultset", false);
  public get rowsPerResultset() {
    return this._rowsPerResultset;
  }

  // s3_stage_vpce_dns_name - computed: true, optional: false, required: false
  private _s3StageVpceDnsName = new TaskParametersS3StageVpceDnsNameList(this, "s3_stage_vpce_dns_name", false);
  public get s3StageVpceDnsName() {
    return this._s3StageVpceDnsName;
  }

  // search_path - computed: true, optional: false, required: false
  private _searchPath = new TaskParametersSearchPathList(this, "search_path", false);
  public get searchPath() {
    return this._searchPath;
  }

  // statement_queued_timeout_in_seconds - computed: true, optional: false, required: false
  private _statementQueuedTimeoutInSeconds = new TaskParametersStatementQueuedTimeoutInSecondsList(this, "statement_queued_timeout_in_seconds", false);
  public get statementQueuedTimeoutInSeconds() {
    return this._statementQueuedTimeoutInSeconds;
  }

  // statement_timeout_in_seconds - computed: true, optional: false, required: false
  private _statementTimeoutInSeconds = new TaskParametersStatementTimeoutInSecondsList(this, "statement_timeout_in_seconds", false);
  public get statementTimeoutInSeconds() {
    return this._statementTimeoutInSeconds;
  }

  // strict_json_output - computed: true, optional: false, required: false
  private _strictJsonOutput = new TaskParametersStrictJsonOutputList(this, "strict_json_output", false);
  public get strictJsonOutput() {
    return this._strictJsonOutput;
  }

  // suspend_task_after_num_failures - computed: true, optional: false, required: false
  private _suspendTaskAfterNumFailures = new TaskParametersSuspendTaskAfterNumFailuresList(this, "suspend_task_after_num_failures", false);
  public get suspendTaskAfterNumFailures() {
    return this._suspendTaskAfterNumFailures;
  }

  // task_auto_retry_attempts - computed: true, optional: false, required: false
  private _taskAutoRetryAttempts = new TaskParametersTaskAutoRetryAttemptsList(this, "task_auto_retry_attempts", false);
  public get taskAutoRetryAttempts() {
    return this._taskAutoRetryAttempts;
  }

  // time_input_format - computed: true, optional: false, required: false
  private _timeInputFormat = new TaskParametersTimeInputFormatList(this, "time_input_format", false);
  public get timeInputFormat() {
    return this._timeInputFormat;
  }

  // time_output_format - computed: true, optional: false, required: false
  private _timeOutputFormat = new TaskParametersTimeOutputFormatList(this, "time_output_format", false);
  public get timeOutputFormat() {
    return this._timeOutputFormat;
  }

  // timestamp_day_is_always_24h - computed: true, optional: false, required: false
  private _timestampDayIsAlways24H = new TaskParametersTimestampDayIsAlways24HList(this, "timestamp_day_is_always_24h", false);
  public get timestampDayIsAlways24H() {
    return this._timestampDayIsAlways24H;
  }

  // timestamp_input_format - computed: true, optional: false, required: false
  private _timestampInputFormat = new TaskParametersTimestampInputFormatList(this, "timestamp_input_format", false);
  public get timestampInputFormat() {
    return this._timestampInputFormat;
  }

  // timestamp_ltz_output_format - computed: true, optional: false, required: false
  private _timestampLtzOutputFormat = new TaskParametersTimestampLtzOutputFormatList(this, "timestamp_ltz_output_format", false);
  public get timestampLtzOutputFormat() {
    return this._timestampLtzOutputFormat;
  }

  // timestamp_ntz_output_format - computed: true, optional: false, required: false
  private _timestampNtzOutputFormat = new TaskParametersTimestampNtzOutputFormatList(this, "timestamp_ntz_output_format", false);
  public get timestampNtzOutputFormat() {
    return this._timestampNtzOutputFormat;
  }

  // timestamp_output_format - computed: true, optional: false, required: false
  private _timestampOutputFormat = new TaskParametersTimestampOutputFormatList(this, "timestamp_output_format", false);
  public get timestampOutputFormat() {
    return this._timestampOutputFormat;
  }

  // timestamp_type_mapping - computed: true, optional: false, required: false
  private _timestampTypeMapping = new TaskParametersTimestampTypeMappingList(this, "timestamp_type_mapping", false);
  public get timestampTypeMapping() {
    return this._timestampTypeMapping;
  }

  // timestamp_tz_output_format - computed: true, optional: false, required: false
  private _timestampTzOutputFormat = new TaskParametersTimestampTzOutputFormatList(this, "timestamp_tz_output_format", false);
  public get timestampTzOutputFormat() {
    return this._timestampTzOutputFormat;
  }

  // timezone - computed: true, optional: false, required: false
  private _timezone = new TaskParametersTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }

  // trace_level - computed: true, optional: false, required: false
  private _traceLevel = new TaskParametersTraceLevelList(this, "trace_level", false);
  public get traceLevel() {
    return this._traceLevel;
  }

  // transaction_abort_on_error - computed: true, optional: false, required: false
  private _transactionAbortOnError = new TaskParametersTransactionAbortOnErrorList(this, "transaction_abort_on_error", false);
  public get transactionAbortOnError() {
    return this._transactionAbortOnError;
  }

  // transaction_default_isolation_level - computed: true, optional: false, required: false
  private _transactionDefaultIsolationLevel = new TaskParametersTransactionDefaultIsolationLevelList(this, "transaction_default_isolation_level", false);
  public get transactionDefaultIsolationLevel() {
    return this._transactionDefaultIsolationLevel;
  }

  // two_digit_century_start - computed: true, optional: false, required: false
  private _twoDigitCenturyStart = new TaskParametersTwoDigitCenturyStartList(this, "two_digit_century_start", false);
  public get twoDigitCenturyStart() {
    return this._twoDigitCenturyStart;
  }

  // unsupported_ddl_action - computed: true, optional: false, required: false
  private _unsupportedDdlAction = new TaskParametersUnsupportedDdlActionList(this, "unsupported_ddl_action", false);
  public get unsupportedDdlAction() {
    return this._unsupportedDdlAction;
  }

  // use_cached_result - computed: true, optional: false, required: false
  private _useCachedResult = new TaskParametersUseCachedResultList(this, "use_cached_result", false);
  public get useCachedResult() {
    return this._useCachedResult;
  }

  // user_task_managed_initial_warehouse_size - computed: true, optional: false, required: false
  private _userTaskManagedInitialWarehouseSize = new TaskParametersUserTaskManagedInitialWarehouseSizeList(this, "user_task_managed_initial_warehouse_size", false);
  public get userTaskManagedInitialWarehouseSize() {
    return this._userTaskManagedInitialWarehouseSize;
  }

  // user_task_minimum_trigger_interval_in_seconds - computed: true, optional: false, required: false
  private _userTaskMinimumTriggerIntervalInSeconds = new TaskParametersUserTaskMinimumTriggerIntervalInSecondsList(this, "user_task_minimum_trigger_interval_in_seconds", false);
  public get userTaskMinimumTriggerIntervalInSeconds() {
    return this._userTaskMinimumTriggerIntervalInSeconds;
  }

  // user_task_timeout_ms - computed: true, optional: false, required: false
  private _userTaskTimeoutMs = new TaskParametersUserTaskTimeoutMsList(this, "user_task_timeout_ms", false);
  public get userTaskTimeoutMs() {
    return this._userTaskTimeoutMs;
  }

  // week_of_year_policy - computed: true, optional: false, required: false
  private _weekOfYearPolicy = new TaskParametersWeekOfYearPolicyList(this, "week_of_year_policy", false);
  public get weekOfYearPolicy() {
    return this._weekOfYearPolicy;
  }

  // week_start - computed: true, optional: false, required: false
  private _weekStart = new TaskParametersWeekStartList(this, "week_start", false);
  public get weekStart() {
    return this._weekStart;
  }
}

export class TaskParametersList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskParametersOutputReference {
    return new TaskParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskShowOutputTaskRelations {
}

export function taskShowOutputTaskRelationsToTerraform(struct?: TaskShowOutputTaskRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskShowOutputTaskRelationsToHclTerraform(struct?: TaskShowOutputTaskRelations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskShowOutputTaskRelationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskShowOutputTaskRelations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskShowOutputTaskRelations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // finalized_root_task - computed: true, optional: false, required: false
  public get finalizedRootTask() {
    return this.getStringAttribute('finalized_root_task');
  }

  // finalizer - computed: true, optional: false, required: false
  public get finalizer() {
    return this.getStringAttribute('finalizer');
  }

  // predecessors - computed: true, optional: false, required: false
  public get predecessors() {
    return this.getListAttribute('predecessors');
  }
}

export class TaskShowOutputTaskRelationsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskShowOutputTaskRelationsOutputReference {
    return new TaskShowOutputTaskRelationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskShowOutput {
}

export function taskShowOutputToTerraform(struct?: TaskShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function taskShowOutputToHclTerraform(struct?: TaskShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class TaskShowOutputOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): TaskShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allow_overlapping_execution - computed: true, optional: false, required: false
  public get allowOverlappingExecution() {
    return this.getBooleanAttribute('allow_overlapping_execution');
  }

  // budget - computed: true, optional: false, required: false
  public get budget() {
    return this.getStringAttribute('budget');
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // database_name - computed: true, optional: false, required: false
  public get databaseName() {
    return this.getStringAttribute('database_name');
  }

  // definition - computed: true, optional: false, required: false
  public get definition() {
    return this.getStringAttribute('definition');
  }

  // error_integration - computed: true, optional: false, required: false
  public get errorIntegration() {
    return this.getStringAttribute('error_integration');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_committed_on - computed: true, optional: false, required: false
  public get lastCommittedOn() {
    return this.getStringAttribute('last_committed_on');
  }

  // last_suspended_on - computed: true, optional: false, required: false
  public get lastSuspendedOn() {
    return this.getStringAttribute('last_suspended_on');
  }

  // last_suspended_reason - computed: true, optional: false, required: false
  public get lastSuspendedReason() {
    return this.getStringAttribute('last_suspended_reason');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // owner_role_type - computed: true, optional: false, required: false
  public get ownerRoleType() {
    return this.getStringAttribute('owner_role_type');
  }

  // predecessors - computed: true, optional: false, required: false
  public get predecessors() {
    return cdktf.Fn.tolist(this.getListAttribute('predecessors'));
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // schema_name - computed: true, optional: false, required: false
  public get schemaName() {
    return this.getStringAttribute('schema_name');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // task_relations - computed: true, optional: false, required: false
  private _taskRelations = new TaskShowOutputTaskRelationsList(this, "task_relations", false);
  public get taskRelations() {
    return this._taskRelations;
  }

  // warehouse - computed: true, optional: false, required: false
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
}

export class TaskShowOutputList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): TaskShowOutputOutputReference {
    return new TaskShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TaskSchedule {
  /**
  * Specifies an interval (in minutes) of wait time inserted between runs of the task. Accepts positive integers only. (conflicts with `using_cron`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#minutes Task#minutes}
  */
  readonly minutes?: number;
  /**
  * Specifies a cron expression and time zone for periodically running the task. Supports a subset of standard cron utility syntax. (conflicts with `minutes`)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#using_cron Task#using_cron}
  */
  readonly usingCron?: string;
}

export function taskScheduleToTerraform(struct?: TaskScheduleOutputReference | TaskSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    minutes: cdktf.numberToTerraform(struct!.minutes),
    using_cron: cdktf.stringToTerraform(struct!.usingCron),
  }
}


export function taskScheduleToHclTerraform(struct?: TaskScheduleOutputReference | TaskSchedule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    minutes: {
      value: cdktf.numberToHclTerraform(struct!.minutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    using_cron: {
      value: cdktf.stringToHclTerraform(struct!.usingCron),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TaskScheduleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TaskSchedule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._minutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.minutes = this._minutes;
    }
    if (this._usingCron !== undefined) {
      hasAnyValues = true;
      internalValueResult.usingCron = this._usingCron;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskSchedule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._minutes = undefined;
      this._usingCron = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._minutes = value.minutes;
      this._usingCron = value.usingCron;
    }
  }

  // minutes - computed: false, optional: true, required: false
  private _minutes?: number; 
  public get minutes() {
    return this.getNumberAttribute('minutes');
  }
  public set minutes(value: number) {
    this._minutes = value;
  }
  public resetMinutes() {
    this._minutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minutesInput() {
    return this._minutes;
  }

  // using_cron - computed: false, optional: true, required: false
  private _usingCron?: string; 
  public get usingCron() {
    return this.getStringAttribute('using_cron');
  }
  public set usingCron(value: string) {
    this._usingCron = value;
  }
  public resetUsingCron() {
    this._usingCron = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usingCronInput() {
    return this._usingCron;
  }
}
export interface TaskTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#create Task#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#delete Task#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#read Task#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#update Task#update}
  */
  readonly update?: string;
}

export function taskTimeoutsToTerraform(struct?: TaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function taskTimeoutsToHclTerraform(struct?: TaskTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TaskTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): TaskTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TaskTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task snowflake_task}
*/
export class Task extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Task resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Task to import
  * @param importFromId The id of the existing Task that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Task to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/task snowflake_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TaskConfig
  */
  public constructor(scope: Construct, id: string, config: TaskConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_task',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.4.0',
        providerVersionConstraint: ' ~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._abortDetachedQuery = config.abortDetachedQuery;
    this._after = config.after;
    this._allowOverlappingExecution = config.allowOverlappingExecution;
    this._autocommit = config.autocommit;
    this._binaryInputFormat = config.binaryInputFormat;
    this._binaryOutputFormat = config.binaryOutputFormat;
    this._clientMemoryLimit = config.clientMemoryLimit;
    this._clientMetadataRequestUseConnectionCtx = config.clientMetadataRequestUseConnectionCtx;
    this._clientPrefetchThreads = config.clientPrefetchThreads;
    this._clientResultChunkSize = config.clientResultChunkSize;
    this._clientResultColumnCaseInsensitive = config.clientResultColumnCaseInsensitive;
    this._clientSessionKeepAlive = config.clientSessionKeepAlive;
    this._clientSessionKeepAliveHeartbeatFrequency = config.clientSessionKeepAliveHeartbeatFrequency;
    this._clientTimestampTypeMapping = config.clientTimestampTypeMapping;
    this._comment = config.comment;
    this._config = config.config;
    this._database = config.database;
    this._dateInputFormat = config.dateInputFormat;
    this._dateOutputFormat = config.dateOutputFormat;
    this._enableUnloadPhysicalTypeOptimization = config.enableUnloadPhysicalTypeOptimization;
    this._errorIntegration = config.errorIntegration;
    this._errorOnNondeterministicMerge = config.errorOnNondeterministicMerge;
    this._errorOnNondeterministicUpdate = config.errorOnNondeterministicUpdate;
    this._finalize = config.finalize;
    this._geographyOutputFormat = config.geographyOutputFormat;
    this._geometryOutputFormat = config.geometryOutputFormat;
    this._id = config.id;
    this._jdbcTreatTimestampNtzAsUtc = config.jdbcTreatTimestampNtzAsUtc;
    this._jdbcUseSessionTimezone = config.jdbcUseSessionTimezone;
    this._jsonIndent = config.jsonIndent;
    this._lockTimeout = config.lockTimeout;
    this._logLevel = config.logLevel;
    this._multiStatementCount = config.multiStatementCount;
    this._name = config.name;
    this._noorderSequenceAsDefault = config.noorderSequenceAsDefault;
    this._odbcTreatDecimalAsInt = config.odbcTreatDecimalAsInt;
    this._queryTag = config.queryTag;
    this._quotedIdentifiersIgnoreCase = config.quotedIdentifiersIgnoreCase;
    this._rowsPerResultset = config.rowsPerResultset;
    this._s3StageVpceDnsName = config.s3StageVpceDnsName;
    this._schema = config.schema;
    this._searchPath = config.searchPath;
    this._sqlStatement = config.sqlStatement;
    this._started = config.started;
    this._statementQueuedTimeoutInSeconds = config.statementQueuedTimeoutInSeconds;
    this._statementTimeoutInSeconds = config.statementTimeoutInSeconds;
    this._strictJsonOutput = config.strictJsonOutput;
    this._suspendTaskAfterNumFailures = config.suspendTaskAfterNumFailures;
    this._taskAutoRetryAttempts = config.taskAutoRetryAttempts;
    this._timeInputFormat = config.timeInputFormat;
    this._timeOutputFormat = config.timeOutputFormat;
    this._timestampDayIsAlways24H = config.timestampDayIsAlways24H;
    this._timestampInputFormat = config.timestampInputFormat;
    this._timestampLtzOutputFormat = config.timestampLtzOutputFormat;
    this._timestampNtzOutputFormat = config.timestampNtzOutputFormat;
    this._timestampOutputFormat = config.timestampOutputFormat;
    this._timestampTypeMapping = config.timestampTypeMapping;
    this._timestampTzOutputFormat = config.timestampTzOutputFormat;
    this._timezone = config.timezone;
    this._traceLevel = config.traceLevel;
    this._transactionAbortOnError = config.transactionAbortOnError;
    this._transactionDefaultIsolationLevel = config.transactionDefaultIsolationLevel;
    this._twoDigitCenturyStart = config.twoDigitCenturyStart;
    this._unsupportedDdlAction = config.unsupportedDdlAction;
    this._useCachedResult = config.useCachedResult;
    this._userTaskManagedInitialWarehouseSize = config.userTaskManagedInitialWarehouseSize;
    this._userTaskMinimumTriggerIntervalInSeconds = config.userTaskMinimumTriggerIntervalInSeconds;
    this._userTaskTimeoutMs = config.userTaskTimeoutMs;
    this._warehouse = config.warehouse;
    this._weekOfYearPolicy = config.weekOfYearPolicy;
    this._weekStart = config.weekStart;
    this._when = config.when;
    this._schedule.internalValue = config.schedule;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // abort_detached_query - computed: true, optional: true, required: false
  private _abortDetachedQuery?: boolean | cdktf.IResolvable; 
  public get abortDetachedQuery() {
    return this.getBooleanAttribute('abort_detached_query');
  }
  public set abortDetachedQuery(value: boolean | cdktf.IResolvable) {
    this._abortDetachedQuery = value;
  }
  public resetAbortDetachedQuery() {
    this._abortDetachedQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get abortDetachedQueryInput() {
    return this._abortDetachedQuery;
  }

  // after - computed: false, optional: true, required: false
  private _after?: string[]; 
  public get after() {
    return cdktf.Fn.tolist(this.getListAttribute('after'));
  }
  public set after(value: string[]) {
    this._after = value;
  }
  public resetAfter() {
    this._after = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get afterInput() {
    return this._after;
  }

  // allow_overlapping_execution - computed: false, optional: true, required: false
  private _allowOverlappingExecution?: string; 
  public get allowOverlappingExecution() {
    return this.getStringAttribute('allow_overlapping_execution');
  }
  public set allowOverlappingExecution(value: string) {
    this._allowOverlappingExecution = value;
  }
  public resetAllowOverlappingExecution() {
    this._allowOverlappingExecution = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOverlappingExecutionInput() {
    return this._allowOverlappingExecution;
  }

  // autocommit - computed: true, optional: true, required: false
  private _autocommit?: boolean | cdktf.IResolvable; 
  public get autocommit() {
    return this.getBooleanAttribute('autocommit');
  }
  public set autocommit(value: boolean | cdktf.IResolvable) {
    this._autocommit = value;
  }
  public resetAutocommit() {
    this._autocommit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autocommitInput() {
    return this._autocommit;
  }

  // binary_input_format - computed: true, optional: true, required: false
  private _binaryInputFormat?: string; 
  public get binaryInputFormat() {
    return this.getStringAttribute('binary_input_format');
  }
  public set binaryInputFormat(value: string) {
    this._binaryInputFormat = value;
  }
  public resetBinaryInputFormat() {
    this._binaryInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryInputFormatInput() {
    return this._binaryInputFormat;
  }

  // binary_output_format - computed: true, optional: true, required: false
  private _binaryOutputFormat?: string; 
  public get binaryOutputFormat() {
    return this.getStringAttribute('binary_output_format');
  }
  public set binaryOutputFormat(value: string) {
    this._binaryOutputFormat = value;
  }
  public resetBinaryOutputFormat() {
    this._binaryOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get binaryOutputFormatInput() {
    return this._binaryOutputFormat;
  }

  // client_memory_limit - computed: true, optional: true, required: false
  private _clientMemoryLimit?: number; 
  public get clientMemoryLimit() {
    return this.getNumberAttribute('client_memory_limit');
  }
  public set clientMemoryLimit(value: number) {
    this._clientMemoryLimit = value;
  }
  public resetClientMemoryLimit() {
    this._clientMemoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMemoryLimitInput() {
    return this._clientMemoryLimit;
  }

  // client_metadata_request_use_connection_ctx - computed: true, optional: true, required: false
  private _clientMetadataRequestUseConnectionCtx?: boolean | cdktf.IResolvable; 
  public get clientMetadataRequestUseConnectionCtx() {
    return this.getBooleanAttribute('client_metadata_request_use_connection_ctx');
  }
  public set clientMetadataRequestUseConnectionCtx(value: boolean | cdktf.IResolvable) {
    this._clientMetadataRequestUseConnectionCtx = value;
  }
  public resetClientMetadataRequestUseConnectionCtx() {
    this._clientMetadataRequestUseConnectionCtx = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMetadataRequestUseConnectionCtxInput() {
    return this._clientMetadataRequestUseConnectionCtx;
  }

  // client_prefetch_threads - computed: true, optional: true, required: false
  private _clientPrefetchThreads?: number; 
  public get clientPrefetchThreads() {
    return this.getNumberAttribute('client_prefetch_threads');
  }
  public set clientPrefetchThreads(value: number) {
    this._clientPrefetchThreads = value;
  }
  public resetClientPrefetchThreads() {
    this._clientPrefetchThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientPrefetchThreadsInput() {
    return this._clientPrefetchThreads;
  }

  // client_result_chunk_size - computed: true, optional: true, required: false
  private _clientResultChunkSize?: number; 
  public get clientResultChunkSize() {
    return this.getNumberAttribute('client_result_chunk_size');
  }
  public set clientResultChunkSize(value: number) {
    this._clientResultChunkSize = value;
  }
  public resetClientResultChunkSize() {
    this._clientResultChunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResultChunkSizeInput() {
    return this._clientResultChunkSize;
  }

  // client_result_column_case_insensitive - computed: true, optional: true, required: false
  private _clientResultColumnCaseInsensitive?: boolean | cdktf.IResolvable; 
  public get clientResultColumnCaseInsensitive() {
    return this.getBooleanAttribute('client_result_column_case_insensitive');
  }
  public set clientResultColumnCaseInsensitive(value: boolean | cdktf.IResolvable) {
    this._clientResultColumnCaseInsensitive = value;
  }
  public resetClientResultColumnCaseInsensitive() {
    this._clientResultColumnCaseInsensitive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientResultColumnCaseInsensitiveInput() {
    return this._clientResultColumnCaseInsensitive;
  }

  // client_session_keep_alive - computed: true, optional: true, required: false
  private _clientSessionKeepAlive?: boolean | cdktf.IResolvable; 
  public get clientSessionKeepAlive() {
    return this.getBooleanAttribute('client_session_keep_alive');
  }
  public set clientSessionKeepAlive(value: boolean | cdktf.IResolvable) {
    this._clientSessionKeepAlive = value;
  }
  public resetClientSessionKeepAlive() {
    this._clientSessionKeepAlive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSessionKeepAliveInput() {
    return this._clientSessionKeepAlive;
  }

  // client_session_keep_alive_heartbeat_frequency - computed: true, optional: true, required: false
  private _clientSessionKeepAliveHeartbeatFrequency?: number; 
  public get clientSessionKeepAliveHeartbeatFrequency() {
    return this.getNumberAttribute('client_session_keep_alive_heartbeat_frequency');
  }
  public set clientSessionKeepAliveHeartbeatFrequency(value: number) {
    this._clientSessionKeepAliveHeartbeatFrequency = value;
  }
  public resetClientSessionKeepAliveHeartbeatFrequency() {
    this._clientSessionKeepAliveHeartbeatFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSessionKeepAliveHeartbeatFrequencyInput() {
    return this._clientSessionKeepAliveHeartbeatFrequency;
  }

  // client_timestamp_type_mapping - computed: true, optional: true, required: false
  private _clientTimestampTypeMapping?: string; 
  public get clientTimestampTypeMapping() {
    return this.getStringAttribute('client_timestamp_type_mapping');
  }
  public set clientTimestampTypeMapping(value: string) {
    this._clientTimestampTypeMapping = value;
  }
  public resetClientTimestampTypeMapping() {
    this._clientTimestampTypeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientTimestampTypeMappingInput() {
    return this._clientTimestampTypeMapping;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // database - computed: false, optional: false, required: true
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
  }

  // date_input_format - computed: true, optional: true, required: false
  private _dateInputFormat?: string; 
  public get dateInputFormat() {
    return this.getStringAttribute('date_input_format');
  }
  public set dateInputFormat(value: string) {
    this._dateInputFormat = value;
  }
  public resetDateInputFormat() {
    this._dateInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateInputFormatInput() {
    return this._dateInputFormat;
  }

  // date_output_format - computed: true, optional: true, required: false
  private _dateOutputFormat?: string; 
  public get dateOutputFormat() {
    return this.getStringAttribute('date_output_format');
  }
  public set dateOutputFormat(value: string) {
    this._dateOutputFormat = value;
  }
  public resetDateOutputFormat() {
    this._dateOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dateOutputFormatInput() {
    return this._dateOutputFormat;
  }

  // enable_unload_physical_type_optimization - computed: true, optional: true, required: false
  private _enableUnloadPhysicalTypeOptimization?: boolean | cdktf.IResolvable; 
  public get enableUnloadPhysicalTypeOptimization() {
    return this.getBooleanAttribute('enable_unload_physical_type_optimization');
  }
  public set enableUnloadPhysicalTypeOptimization(value: boolean | cdktf.IResolvable) {
    this._enableUnloadPhysicalTypeOptimization = value;
  }
  public resetEnableUnloadPhysicalTypeOptimization() {
    this._enableUnloadPhysicalTypeOptimization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnloadPhysicalTypeOptimizationInput() {
    return this._enableUnloadPhysicalTypeOptimization;
  }

  // error_integration - computed: false, optional: true, required: false
  private _errorIntegration?: string; 
  public get errorIntegration() {
    return this.getStringAttribute('error_integration');
  }
  public set errorIntegration(value: string) {
    this._errorIntegration = value;
  }
  public resetErrorIntegration() {
    this._errorIntegration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorIntegrationInput() {
    return this._errorIntegration;
  }

  // error_on_nondeterministic_merge - computed: true, optional: true, required: false
  private _errorOnNondeterministicMerge?: boolean | cdktf.IResolvable; 
  public get errorOnNondeterministicMerge() {
    return this.getBooleanAttribute('error_on_nondeterministic_merge');
  }
  public set errorOnNondeterministicMerge(value: boolean | cdktf.IResolvable) {
    this._errorOnNondeterministicMerge = value;
  }
  public resetErrorOnNondeterministicMerge() {
    this._errorOnNondeterministicMerge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnNondeterministicMergeInput() {
    return this._errorOnNondeterministicMerge;
  }

  // error_on_nondeterministic_update - computed: true, optional: true, required: false
  private _errorOnNondeterministicUpdate?: boolean | cdktf.IResolvable; 
  public get errorOnNondeterministicUpdate() {
    return this.getBooleanAttribute('error_on_nondeterministic_update');
  }
  public set errorOnNondeterministicUpdate(value: boolean | cdktf.IResolvable) {
    this._errorOnNondeterministicUpdate = value;
  }
  public resetErrorOnNondeterministicUpdate() {
    this._errorOnNondeterministicUpdate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorOnNondeterministicUpdateInput() {
    return this._errorOnNondeterministicUpdate;
  }

  // finalize - computed: false, optional: true, required: false
  private _finalize?: string; 
  public get finalize() {
    return this.getStringAttribute('finalize');
  }
  public set finalize(value: string) {
    this._finalize = value;
  }
  public resetFinalize() {
    this._finalize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finalizeInput() {
    return this._finalize;
  }

  // fully_qualified_name - computed: true, optional: false, required: false
  public get fullyQualifiedName() {
    return this.getStringAttribute('fully_qualified_name');
  }

  // geography_output_format - computed: true, optional: true, required: false
  private _geographyOutputFormat?: string; 
  public get geographyOutputFormat() {
    return this.getStringAttribute('geography_output_format');
  }
  public set geographyOutputFormat(value: string) {
    this._geographyOutputFormat = value;
  }
  public resetGeographyOutputFormat() {
    this._geographyOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geographyOutputFormatInput() {
    return this._geographyOutputFormat;
  }

  // geometry_output_format - computed: true, optional: true, required: false
  private _geometryOutputFormat?: string; 
  public get geometryOutputFormat() {
    return this.getStringAttribute('geometry_output_format');
  }
  public set geometryOutputFormat(value: string) {
    this._geometryOutputFormat = value;
  }
  public resetGeometryOutputFormat() {
    this._geometryOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get geometryOutputFormatInput() {
    return this._geometryOutputFormat;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // jdbc_treat_timestamp_ntz_as_utc - computed: true, optional: true, required: false
  private _jdbcTreatTimestampNtzAsUtc?: boolean | cdktf.IResolvable; 
  public get jdbcTreatTimestampNtzAsUtc() {
    return this.getBooleanAttribute('jdbc_treat_timestamp_ntz_as_utc');
  }
  public set jdbcTreatTimestampNtzAsUtc(value: boolean | cdktf.IResolvable) {
    this._jdbcTreatTimestampNtzAsUtc = value;
  }
  public resetJdbcTreatTimestampNtzAsUtc() {
    this._jdbcTreatTimestampNtzAsUtc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcTreatTimestampNtzAsUtcInput() {
    return this._jdbcTreatTimestampNtzAsUtc;
  }

  // jdbc_use_session_timezone - computed: true, optional: true, required: false
  private _jdbcUseSessionTimezone?: boolean | cdktf.IResolvable; 
  public get jdbcUseSessionTimezone() {
    return this.getBooleanAttribute('jdbc_use_session_timezone');
  }
  public set jdbcUseSessionTimezone(value: boolean | cdktf.IResolvable) {
    this._jdbcUseSessionTimezone = value;
  }
  public resetJdbcUseSessionTimezone() {
    this._jdbcUseSessionTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcUseSessionTimezoneInput() {
    return this._jdbcUseSessionTimezone;
  }

  // json_indent - computed: true, optional: true, required: false
  private _jsonIndent?: number; 
  public get jsonIndent() {
    return this.getNumberAttribute('json_indent');
  }
  public set jsonIndent(value: number) {
    this._jsonIndent = value;
  }
  public resetJsonIndent() {
    this._jsonIndent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonIndentInput() {
    return this._jsonIndent;
  }

  // lock_timeout - computed: true, optional: true, required: false
  private _lockTimeout?: number; 
  public get lockTimeout() {
    return this.getNumberAttribute('lock_timeout');
  }
  public set lockTimeout(value: number) {
    this._lockTimeout = value;
  }
  public resetLockTimeout() {
    this._lockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockTimeoutInput() {
    return this._lockTimeout;
  }

  // log_level - computed: true, optional: true, required: false
  private _logLevel?: string; 
  public get logLevel() {
    return this.getStringAttribute('log_level');
  }
  public set logLevel(value: string) {
    this._logLevel = value;
  }
  public resetLogLevel() {
    this._logLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInput() {
    return this._logLevel;
  }

  // multi_statement_count - computed: true, optional: true, required: false
  private _multiStatementCount?: number; 
  public get multiStatementCount() {
    return this.getNumberAttribute('multi_statement_count');
  }
  public set multiStatementCount(value: number) {
    this._multiStatementCount = value;
  }
  public resetMultiStatementCount() {
    this._multiStatementCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiStatementCountInput() {
    return this._multiStatementCount;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // noorder_sequence_as_default - computed: true, optional: true, required: false
  private _noorderSequenceAsDefault?: boolean | cdktf.IResolvable; 
  public get noorderSequenceAsDefault() {
    return this.getBooleanAttribute('noorder_sequence_as_default');
  }
  public set noorderSequenceAsDefault(value: boolean | cdktf.IResolvable) {
    this._noorderSequenceAsDefault = value;
  }
  public resetNoorderSequenceAsDefault() {
    this._noorderSequenceAsDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noorderSequenceAsDefaultInput() {
    return this._noorderSequenceAsDefault;
  }

  // odbc_treat_decimal_as_int - computed: true, optional: true, required: false
  private _odbcTreatDecimalAsInt?: boolean | cdktf.IResolvable; 
  public get odbcTreatDecimalAsInt() {
    return this.getBooleanAttribute('odbc_treat_decimal_as_int');
  }
  public set odbcTreatDecimalAsInt(value: boolean | cdktf.IResolvable) {
    this._odbcTreatDecimalAsInt = value;
  }
  public resetOdbcTreatDecimalAsInt() {
    this._odbcTreatDecimalAsInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get odbcTreatDecimalAsIntInput() {
    return this._odbcTreatDecimalAsInt;
  }

  // parameters - computed: true, optional: false, required: false
  private _parameters = new TaskParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // query_tag - computed: true, optional: true, required: false
  private _queryTag?: string; 
  public get queryTag() {
    return this.getStringAttribute('query_tag');
  }
  public set queryTag(value: string) {
    this._queryTag = value;
  }
  public resetQueryTag() {
    this._queryTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get queryTagInput() {
    return this._queryTag;
  }

  // quoted_identifiers_ignore_case - computed: true, optional: true, required: false
  private _quotedIdentifiersIgnoreCase?: boolean | cdktf.IResolvable; 
  public get quotedIdentifiersIgnoreCase() {
    return this.getBooleanAttribute('quoted_identifiers_ignore_case');
  }
  public set quotedIdentifiersIgnoreCase(value: boolean | cdktf.IResolvable) {
    this._quotedIdentifiersIgnoreCase = value;
  }
  public resetQuotedIdentifiersIgnoreCase() {
    this._quotedIdentifiersIgnoreCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get quotedIdentifiersIgnoreCaseInput() {
    return this._quotedIdentifiersIgnoreCase;
  }

  // rows_per_resultset - computed: true, optional: true, required: false
  private _rowsPerResultset?: number; 
  public get rowsPerResultset() {
    return this.getNumberAttribute('rows_per_resultset');
  }
  public set rowsPerResultset(value: number) {
    this._rowsPerResultset = value;
  }
  public resetRowsPerResultset() {
    this._rowsPerResultset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rowsPerResultsetInput() {
    return this._rowsPerResultset;
  }

  // s3_stage_vpce_dns_name - computed: true, optional: true, required: false
  private _s3StageVpceDnsName?: string; 
  public get s3StageVpceDnsName() {
    return this.getStringAttribute('s3_stage_vpce_dns_name');
  }
  public set s3StageVpceDnsName(value: string) {
    this._s3StageVpceDnsName = value;
  }
  public resetS3StageVpceDnsName() {
    this._s3StageVpceDnsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3StageVpceDnsNameInput() {
    return this._s3StageVpceDnsName;
  }

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // search_path - computed: true, optional: true, required: false
  private _searchPath?: string; 
  public get searchPath() {
    return this.getStringAttribute('search_path');
  }
  public set searchPath(value: string) {
    this._searchPath = value;
  }
  public resetSearchPath() {
    this._searchPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get searchPathInput() {
    return this._searchPath;
  }

  // show_output - computed: true, optional: false, required: false
  private _showOutput = new TaskShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // sql_statement - computed: false, optional: false, required: true
  private _sqlStatement?: string; 
  public get sqlStatement() {
    return this.getStringAttribute('sql_statement');
  }
  public set sqlStatement(value: string) {
    this._sqlStatement = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlStatementInput() {
    return this._sqlStatement;
  }

  // started - computed: false, optional: false, required: true
  private _started?: boolean | cdktf.IResolvable; 
  public get started() {
    return this.getBooleanAttribute('started');
  }
  public set started(value: boolean | cdktf.IResolvable) {
    this._started = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startedInput() {
    return this._started;
  }

  // statement_queued_timeout_in_seconds - computed: true, optional: true, required: false
  private _statementQueuedTimeoutInSeconds?: number; 
  public get statementQueuedTimeoutInSeconds() {
    return this.getNumberAttribute('statement_queued_timeout_in_seconds');
  }
  public set statementQueuedTimeoutInSeconds(value: number) {
    this._statementQueuedTimeoutInSeconds = value;
  }
  public resetStatementQueuedTimeoutInSeconds() {
    this._statementQueuedTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementQueuedTimeoutInSecondsInput() {
    return this._statementQueuedTimeoutInSeconds;
  }

  // statement_timeout_in_seconds - computed: true, optional: true, required: false
  private _statementTimeoutInSeconds?: number; 
  public get statementTimeoutInSeconds() {
    return this.getNumberAttribute('statement_timeout_in_seconds');
  }
  public set statementTimeoutInSeconds(value: number) {
    this._statementTimeoutInSeconds = value;
  }
  public resetStatementTimeoutInSeconds() {
    this._statementTimeoutInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statementTimeoutInSecondsInput() {
    return this._statementTimeoutInSeconds;
  }

  // strict_json_output - computed: true, optional: true, required: false
  private _strictJsonOutput?: boolean | cdktf.IResolvable; 
  public get strictJsonOutput() {
    return this.getBooleanAttribute('strict_json_output');
  }
  public set strictJsonOutput(value: boolean | cdktf.IResolvable) {
    this._strictJsonOutput = value;
  }
  public resetStrictJsonOutput() {
    this._strictJsonOutput = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strictJsonOutputInput() {
    return this._strictJsonOutput;
  }

  // suspend_task_after_num_failures - computed: true, optional: true, required: false
  private _suspendTaskAfterNumFailures?: number; 
  public get suspendTaskAfterNumFailures() {
    return this.getNumberAttribute('suspend_task_after_num_failures');
  }
  public set suspendTaskAfterNumFailures(value: number) {
    this._suspendTaskAfterNumFailures = value;
  }
  public resetSuspendTaskAfterNumFailures() {
    this._suspendTaskAfterNumFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suspendTaskAfterNumFailuresInput() {
    return this._suspendTaskAfterNumFailures;
  }

  // task_auto_retry_attempts - computed: true, optional: true, required: false
  private _taskAutoRetryAttempts?: number; 
  public get taskAutoRetryAttempts() {
    return this.getNumberAttribute('task_auto_retry_attempts');
  }
  public set taskAutoRetryAttempts(value: number) {
    this._taskAutoRetryAttempts = value;
  }
  public resetTaskAutoRetryAttempts() {
    this._taskAutoRetryAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAutoRetryAttemptsInput() {
    return this._taskAutoRetryAttempts;
  }

  // time_input_format - computed: true, optional: true, required: false
  private _timeInputFormat?: string; 
  public get timeInputFormat() {
    return this.getStringAttribute('time_input_format');
  }
  public set timeInputFormat(value: string) {
    this._timeInputFormat = value;
  }
  public resetTimeInputFormat() {
    this._timeInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeInputFormatInput() {
    return this._timeInputFormat;
  }

  // time_output_format - computed: true, optional: true, required: false
  private _timeOutputFormat?: string; 
  public get timeOutputFormat() {
    return this.getStringAttribute('time_output_format');
  }
  public set timeOutputFormat(value: string) {
    this._timeOutputFormat = value;
  }
  public resetTimeOutputFormat() {
    this._timeOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeOutputFormatInput() {
    return this._timeOutputFormat;
  }

  // timestamp_day_is_always_24h - computed: true, optional: true, required: false
  private _timestampDayIsAlways24H?: boolean | cdktf.IResolvable; 
  public get timestampDayIsAlways24H() {
    return this.getBooleanAttribute('timestamp_day_is_always_24h');
  }
  public set timestampDayIsAlways24H(value: boolean | cdktf.IResolvable) {
    this._timestampDayIsAlways24H = value;
  }
  public resetTimestampDayIsAlways24H() {
    this._timestampDayIsAlways24H = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampDayIsAlways24HInput() {
    return this._timestampDayIsAlways24H;
  }

  // timestamp_input_format - computed: true, optional: true, required: false
  private _timestampInputFormat?: string; 
  public get timestampInputFormat() {
    return this.getStringAttribute('timestamp_input_format');
  }
  public set timestampInputFormat(value: string) {
    this._timestampInputFormat = value;
  }
  public resetTimestampInputFormat() {
    this._timestampInputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampInputFormatInput() {
    return this._timestampInputFormat;
  }

  // timestamp_ltz_output_format - computed: true, optional: true, required: false
  private _timestampLtzOutputFormat?: string; 
  public get timestampLtzOutputFormat() {
    return this.getStringAttribute('timestamp_ltz_output_format');
  }
  public set timestampLtzOutputFormat(value: string) {
    this._timestampLtzOutputFormat = value;
  }
  public resetTimestampLtzOutputFormat() {
    this._timestampLtzOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampLtzOutputFormatInput() {
    return this._timestampLtzOutputFormat;
  }

  // timestamp_ntz_output_format - computed: true, optional: true, required: false
  private _timestampNtzOutputFormat?: string; 
  public get timestampNtzOutputFormat() {
    return this.getStringAttribute('timestamp_ntz_output_format');
  }
  public set timestampNtzOutputFormat(value: string) {
    this._timestampNtzOutputFormat = value;
  }
  public resetTimestampNtzOutputFormat() {
    this._timestampNtzOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampNtzOutputFormatInput() {
    return this._timestampNtzOutputFormat;
  }

  // timestamp_output_format - computed: true, optional: true, required: false
  private _timestampOutputFormat?: string; 
  public get timestampOutputFormat() {
    return this.getStringAttribute('timestamp_output_format');
  }
  public set timestampOutputFormat(value: string) {
    this._timestampOutputFormat = value;
  }
  public resetTimestampOutputFormat() {
    this._timestampOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampOutputFormatInput() {
    return this._timestampOutputFormat;
  }

  // timestamp_type_mapping - computed: true, optional: true, required: false
  private _timestampTypeMapping?: string; 
  public get timestampTypeMapping() {
    return this.getStringAttribute('timestamp_type_mapping');
  }
  public set timestampTypeMapping(value: string) {
    this._timestampTypeMapping = value;
  }
  public resetTimestampTypeMapping() {
    this._timestampTypeMapping = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTypeMappingInput() {
    return this._timestampTypeMapping;
  }

  // timestamp_tz_output_format - computed: true, optional: true, required: false
  private _timestampTzOutputFormat?: string; 
  public get timestampTzOutputFormat() {
    return this.getStringAttribute('timestamp_tz_output_format');
  }
  public set timestampTzOutputFormat(value: string) {
    this._timestampTzOutputFormat = value;
  }
  public resetTimestampTzOutputFormat() {
    this._timestampTzOutputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampTzOutputFormatInput() {
    return this._timestampTzOutputFormat;
  }

  // timezone - computed: true, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // trace_level - computed: true, optional: true, required: false
  private _traceLevel?: string; 
  public get traceLevel() {
    return this.getStringAttribute('trace_level');
  }
  public set traceLevel(value: string) {
    this._traceLevel = value;
  }
  public resetTraceLevel() {
    this._traceLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get traceLevelInput() {
    return this._traceLevel;
  }

  // transaction_abort_on_error - computed: true, optional: true, required: false
  private _transactionAbortOnError?: boolean | cdktf.IResolvable; 
  public get transactionAbortOnError() {
    return this.getBooleanAttribute('transaction_abort_on_error');
  }
  public set transactionAbortOnError(value: boolean | cdktf.IResolvable) {
    this._transactionAbortOnError = value;
  }
  public resetTransactionAbortOnError() {
    this._transactionAbortOnError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionAbortOnErrorInput() {
    return this._transactionAbortOnError;
  }

  // transaction_default_isolation_level - computed: true, optional: true, required: false
  private _transactionDefaultIsolationLevel?: string; 
  public get transactionDefaultIsolationLevel() {
    return this.getStringAttribute('transaction_default_isolation_level');
  }
  public set transactionDefaultIsolationLevel(value: string) {
    this._transactionDefaultIsolationLevel = value;
  }
  public resetTransactionDefaultIsolationLevel() {
    this._transactionDefaultIsolationLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionDefaultIsolationLevelInput() {
    return this._transactionDefaultIsolationLevel;
  }

  // two_digit_century_start - computed: true, optional: true, required: false
  private _twoDigitCenturyStart?: number; 
  public get twoDigitCenturyStart() {
    return this.getNumberAttribute('two_digit_century_start');
  }
  public set twoDigitCenturyStart(value: number) {
    this._twoDigitCenturyStart = value;
  }
  public resetTwoDigitCenturyStart() {
    this._twoDigitCenturyStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoDigitCenturyStartInput() {
    return this._twoDigitCenturyStart;
  }

  // unsupported_ddl_action - computed: true, optional: true, required: false
  private _unsupportedDdlAction?: string; 
  public get unsupportedDdlAction() {
    return this.getStringAttribute('unsupported_ddl_action');
  }
  public set unsupportedDdlAction(value: string) {
    this._unsupportedDdlAction = value;
  }
  public resetUnsupportedDdlAction() {
    this._unsupportedDdlAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsupportedDdlActionInput() {
    return this._unsupportedDdlAction;
  }

  // use_cached_result - computed: true, optional: true, required: false
  private _useCachedResult?: boolean | cdktf.IResolvable; 
  public get useCachedResult() {
    return this.getBooleanAttribute('use_cached_result');
  }
  public set useCachedResult(value: boolean | cdktf.IResolvable) {
    this._useCachedResult = value;
  }
  public resetUseCachedResult() {
    this._useCachedResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCachedResultInput() {
    return this._useCachedResult;
  }

  // user_task_managed_initial_warehouse_size - computed: true, optional: true, required: false
  private _userTaskManagedInitialWarehouseSize?: string; 
  public get userTaskManagedInitialWarehouseSize() {
    return this.getStringAttribute('user_task_managed_initial_warehouse_size');
  }
  public set userTaskManagedInitialWarehouseSize(value: string) {
    this._userTaskManagedInitialWarehouseSize = value;
  }
  public resetUserTaskManagedInitialWarehouseSize() {
    this._userTaskManagedInitialWarehouseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskManagedInitialWarehouseSizeInput() {
    return this._userTaskManagedInitialWarehouseSize;
  }

  // user_task_minimum_trigger_interval_in_seconds - computed: true, optional: true, required: false
  private _userTaskMinimumTriggerIntervalInSeconds?: number; 
  public get userTaskMinimumTriggerIntervalInSeconds() {
    return this.getNumberAttribute('user_task_minimum_trigger_interval_in_seconds');
  }
  public set userTaskMinimumTriggerIntervalInSeconds(value: number) {
    this._userTaskMinimumTriggerIntervalInSeconds = value;
  }
  public resetUserTaskMinimumTriggerIntervalInSeconds() {
    this._userTaskMinimumTriggerIntervalInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskMinimumTriggerIntervalInSecondsInput() {
    return this._userTaskMinimumTriggerIntervalInSeconds;
  }

  // user_task_timeout_ms - computed: true, optional: true, required: false
  private _userTaskTimeoutMs?: number; 
  public get userTaskTimeoutMs() {
    return this.getNumberAttribute('user_task_timeout_ms');
  }
  public set userTaskTimeoutMs(value: number) {
    this._userTaskTimeoutMs = value;
  }
  public resetUserTaskTimeoutMs() {
    this._userTaskTimeoutMs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTaskTimeoutMsInput() {
    return this._userTaskTimeoutMs;
  }

  // warehouse - computed: false, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }

  // week_of_year_policy - computed: true, optional: true, required: false
  private _weekOfYearPolicy?: number; 
  public get weekOfYearPolicy() {
    return this.getNumberAttribute('week_of_year_policy');
  }
  public set weekOfYearPolicy(value: number) {
    this._weekOfYearPolicy = value;
  }
  public resetWeekOfYearPolicy() {
    this._weekOfYearPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekOfYearPolicyInput() {
    return this._weekOfYearPolicy;
  }

  // week_start - computed: true, optional: true, required: false
  private _weekStart?: number; 
  public get weekStart() {
    return this.getNumberAttribute('week_start');
  }
  public set weekStart(value: number) {
    this._weekStart = value;
  }
  public resetWeekStart() {
    this._weekStart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get weekStartInput() {
    return this._weekStart;
  }

  // when - computed: false, optional: true, required: false
  private _when?: string; 
  public get when() {
    return this.getStringAttribute('when');
  }
  public set when(value: string) {
    this._when = value;
  }
  public resetWhen() {
    this._when = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whenInput() {
    return this._when;
  }

  // schedule - computed: false, optional: true, required: false
  private _schedule = new TaskScheduleOutputReference(this, "schedule");
  public get schedule() {
    return this._schedule;
  }
  public putSchedule(value: TaskSchedule) {
    this._schedule.internalValue = value;
  }
  public resetSchedule() {
    this._schedule.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new TaskTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: TaskTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      abort_detached_query: cdktf.booleanToTerraform(this._abortDetachedQuery),
      after: cdktf.listMapper(cdktf.stringToTerraform, false)(this._after),
      allow_overlapping_execution: cdktf.stringToTerraform(this._allowOverlappingExecution),
      autocommit: cdktf.booleanToTerraform(this._autocommit),
      binary_input_format: cdktf.stringToTerraform(this._binaryInputFormat),
      binary_output_format: cdktf.stringToTerraform(this._binaryOutputFormat),
      client_memory_limit: cdktf.numberToTerraform(this._clientMemoryLimit),
      client_metadata_request_use_connection_ctx: cdktf.booleanToTerraform(this._clientMetadataRequestUseConnectionCtx),
      client_prefetch_threads: cdktf.numberToTerraform(this._clientPrefetchThreads),
      client_result_chunk_size: cdktf.numberToTerraform(this._clientResultChunkSize),
      client_result_column_case_insensitive: cdktf.booleanToTerraform(this._clientResultColumnCaseInsensitive),
      client_session_keep_alive: cdktf.booleanToTerraform(this._clientSessionKeepAlive),
      client_session_keep_alive_heartbeat_frequency: cdktf.numberToTerraform(this._clientSessionKeepAliveHeartbeatFrequency),
      client_timestamp_type_mapping: cdktf.stringToTerraform(this._clientTimestampTypeMapping),
      comment: cdktf.stringToTerraform(this._comment),
      config: cdktf.stringToTerraform(this._config),
      database: cdktf.stringToTerraform(this._database),
      date_input_format: cdktf.stringToTerraform(this._dateInputFormat),
      date_output_format: cdktf.stringToTerraform(this._dateOutputFormat),
      enable_unload_physical_type_optimization: cdktf.booleanToTerraform(this._enableUnloadPhysicalTypeOptimization),
      error_integration: cdktf.stringToTerraform(this._errorIntegration),
      error_on_nondeterministic_merge: cdktf.booleanToTerraform(this._errorOnNondeterministicMerge),
      error_on_nondeterministic_update: cdktf.booleanToTerraform(this._errorOnNondeterministicUpdate),
      finalize: cdktf.stringToTerraform(this._finalize),
      geography_output_format: cdktf.stringToTerraform(this._geographyOutputFormat),
      geometry_output_format: cdktf.stringToTerraform(this._geometryOutputFormat),
      id: cdktf.stringToTerraform(this._id),
      jdbc_treat_timestamp_ntz_as_utc: cdktf.booleanToTerraform(this._jdbcTreatTimestampNtzAsUtc),
      jdbc_use_session_timezone: cdktf.booleanToTerraform(this._jdbcUseSessionTimezone),
      json_indent: cdktf.numberToTerraform(this._jsonIndent),
      lock_timeout: cdktf.numberToTerraform(this._lockTimeout),
      log_level: cdktf.stringToTerraform(this._logLevel),
      multi_statement_count: cdktf.numberToTerraform(this._multiStatementCount),
      name: cdktf.stringToTerraform(this._name),
      noorder_sequence_as_default: cdktf.booleanToTerraform(this._noorderSequenceAsDefault),
      odbc_treat_decimal_as_int: cdktf.booleanToTerraform(this._odbcTreatDecimalAsInt),
      query_tag: cdktf.stringToTerraform(this._queryTag),
      quoted_identifiers_ignore_case: cdktf.booleanToTerraform(this._quotedIdentifiersIgnoreCase),
      rows_per_resultset: cdktf.numberToTerraform(this._rowsPerResultset),
      s3_stage_vpce_dns_name: cdktf.stringToTerraform(this._s3StageVpceDnsName),
      schema: cdktf.stringToTerraform(this._schema),
      search_path: cdktf.stringToTerraform(this._searchPath),
      sql_statement: cdktf.stringToTerraform(this._sqlStatement),
      started: cdktf.booleanToTerraform(this._started),
      statement_queued_timeout_in_seconds: cdktf.numberToTerraform(this._statementQueuedTimeoutInSeconds),
      statement_timeout_in_seconds: cdktf.numberToTerraform(this._statementTimeoutInSeconds),
      strict_json_output: cdktf.booleanToTerraform(this._strictJsonOutput),
      suspend_task_after_num_failures: cdktf.numberToTerraform(this._suspendTaskAfterNumFailures),
      task_auto_retry_attempts: cdktf.numberToTerraform(this._taskAutoRetryAttempts),
      time_input_format: cdktf.stringToTerraform(this._timeInputFormat),
      time_output_format: cdktf.stringToTerraform(this._timeOutputFormat),
      timestamp_day_is_always_24h: cdktf.booleanToTerraform(this._timestampDayIsAlways24H),
      timestamp_input_format: cdktf.stringToTerraform(this._timestampInputFormat),
      timestamp_ltz_output_format: cdktf.stringToTerraform(this._timestampLtzOutputFormat),
      timestamp_ntz_output_format: cdktf.stringToTerraform(this._timestampNtzOutputFormat),
      timestamp_output_format: cdktf.stringToTerraform(this._timestampOutputFormat),
      timestamp_type_mapping: cdktf.stringToTerraform(this._timestampTypeMapping),
      timestamp_tz_output_format: cdktf.stringToTerraform(this._timestampTzOutputFormat),
      timezone: cdktf.stringToTerraform(this._timezone),
      trace_level: cdktf.stringToTerraform(this._traceLevel),
      transaction_abort_on_error: cdktf.booleanToTerraform(this._transactionAbortOnError),
      transaction_default_isolation_level: cdktf.stringToTerraform(this._transactionDefaultIsolationLevel),
      two_digit_century_start: cdktf.numberToTerraform(this._twoDigitCenturyStart),
      unsupported_ddl_action: cdktf.stringToTerraform(this._unsupportedDdlAction),
      use_cached_result: cdktf.booleanToTerraform(this._useCachedResult),
      user_task_managed_initial_warehouse_size: cdktf.stringToTerraform(this._userTaskManagedInitialWarehouseSize),
      user_task_minimum_trigger_interval_in_seconds: cdktf.numberToTerraform(this._userTaskMinimumTriggerIntervalInSeconds),
      user_task_timeout_ms: cdktf.numberToTerraform(this._userTaskTimeoutMs),
      warehouse: cdktf.stringToTerraform(this._warehouse),
      week_of_year_policy: cdktf.numberToTerraform(this._weekOfYearPolicy),
      week_start: cdktf.numberToTerraform(this._weekStart),
      when: cdktf.stringToTerraform(this._when),
      schedule: taskScheduleToTerraform(this._schedule.internalValue),
      timeouts: taskTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      abort_detached_query: {
        value: cdktf.booleanToHclTerraform(this._abortDetachedQuery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      after: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._after),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      allow_overlapping_execution: {
        value: cdktf.stringToHclTerraform(this._allowOverlappingExecution),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      autocommit: {
        value: cdktf.booleanToHclTerraform(this._autocommit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      binary_input_format: {
        value: cdktf.stringToHclTerraform(this._binaryInputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      binary_output_format: {
        value: cdktf.stringToHclTerraform(this._binaryOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_memory_limit: {
        value: cdktf.numberToHclTerraform(this._clientMemoryLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_metadata_request_use_connection_ctx: {
        value: cdktf.booleanToHclTerraform(this._clientMetadataRequestUseConnectionCtx),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_prefetch_threads: {
        value: cdktf.numberToHclTerraform(this._clientPrefetchThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_result_chunk_size: {
        value: cdktf.numberToHclTerraform(this._clientResultChunkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_result_column_case_insensitive: {
        value: cdktf.booleanToHclTerraform(this._clientResultColumnCaseInsensitive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_session_keep_alive: {
        value: cdktf.booleanToHclTerraform(this._clientSessionKeepAlive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_session_keep_alive_heartbeat_frequency: {
        value: cdktf.numberToHclTerraform(this._clientSessionKeepAliveHeartbeatFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      client_timestamp_type_mapping: {
        value: cdktf.stringToHclTerraform(this._clientTimestampTypeMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_input_format: {
        value: cdktf.stringToHclTerraform(this._dateInputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      date_output_format: {
        value: cdktf.stringToHclTerraform(this._dateOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_unload_physical_type_optimization: {
        value: cdktf.booleanToHclTerraform(this._enableUnloadPhysicalTypeOptimization),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_integration: {
        value: cdktf.stringToHclTerraform(this._errorIntegration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      error_on_nondeterministic_merge: {
        value: cdktf.booleanToHclTerraform(this._errorOnNondeterministicMerge),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      error_on_nondeterministic_update: {
        value: cdktf.booleanToHclTerraform(this._errorOnNondeterministicUpdate),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      finalize: {
        value: cdktf.stringToHclTerraform(this._finalize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geography_output_format: {
        value: cdktf.stringToHclTerraform(this._geographyOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      geometry_output_format: {
        value: cdktf.stringToHclTerraform(this._geometryOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      jdbc_treat_timestamp_ntz_as_utc: {
        value: cdktf.booleanToHclTerraform(this._jdbcTreatTimestampNtzAsUtc),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jdbc_use_session_timezone: {
        value: cdktf.booleanToHclTerraform(this._jdbcUseSessionTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      json_indent: {
        value: cdktf.numberToHclTerraform(this._jsonIndent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      lock_timeout: {
        value: cdktf.numberToHclTerraform(this._lockTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      log_level: {
        value: cdktf.stringToHclTerraform(this._logLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_statement_count: {
        value: cdktf.numberToHclTerraform(this._multiStatementCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      noorder_sequence_as_default: {
        value: cdktf.booleanToHclTerraform(this._noorderSequenceAsDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      odbc_treat_decimal_as_int: {
        value: cdktf.booleanToHclTerraform(this._odbcTreatDecimalAsInt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      query_tag: {
        value: cdktf.stringToHclTerraform(this._queryTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      quoted_identifiers_ignore_case: {
        value: cdktf.booleanToHclTerraform(this._quotedIdentifiersIgnoreCase),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      rows_per_resultset: {
        value: cdktf.numberToHclTerraform(this._rowsPerResultset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      s3_stage_vpce_dns_name: {
        value: cdktf.stringToHclTerraform(this._s3StageVpceDnsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      search_path: {
        value: cdktf.stringToHclTerraform(this._searchPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sql_statement: {
        value: cdktf.stringToHclTerraform(this._sqlStatement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      started: {
        value: cdktf.booleanToHclTerraform(this._started),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      statement_queued_timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._statementQueuedTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      statement_timeout_in_seconds: {
        value: cdktf.numberToHclTerraform(this._statementTimeoutInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      strict_json_output: {
        value: cdktf.booleanToHclTerraform(this._strictJsonOutput),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      suspend_task_after_num_failures: {
        value: cdktf.numberToHclTerraform(this._suspendTaskAfterNumFailures),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      task_auto_retry_attempts: {
        value: cdktf.numberToHclTerraform(this._taskAutoRetryAttempts),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_input_format: {
        value: cdktf.stringToHclTerraform(this._timeInputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_output_format: {
        value: cdktf.stringToHclTerraform(this._timeOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_day_is_always_24h: {
        value: cdktf.booleanToHclTerraform(this._timestampDayIsAlways24H),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamp_input_format: {
        value: cdktf.stringToHclTerraform(this._timestampInputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_ltz_output_format: {
        value: cdktf.stringToHclTerraform(this._timestampLtzOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_ntz_output_format: {
        value: cdktf.stringToHclTerraform(this._timestampNtzOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_output_format: {
        value: cdktf.stringToHclTerraform(this._timestampOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_type_mapping: {
        value: cdktf.stringToHclTerraform(this._timestampTypeMapping),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timestamp_tz_output_format: {
        value: cdktf.stringToHclTerraform(this._timestampTzOutputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trace_level: {
        value: cdktf.stringToHclTerraform(this._traceLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      transaction_abort_on_error: {
        value: cdktf.booleanToHclTerraform(this._transactionAbortOnError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      transaction_default_isolation_level: {
        value: cdktf.stringToHclTerraform(this._transactionDefaultIsolationLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      two_digit_century_start: {
        value: cdktf.numberToHclTerraform(this._twoDigitCenturyStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      unsupported_ddl_action: {
        value: cdktf.stringToHclTerraform(this._unsupportedDdlAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_cached_result: {
        value: cdktf.booleanToHclTerraform(this._useCachedResult),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user_task_managed_initial_warehouse_size: {
        value: cdktf.stringToHclTerraform(this._userTaskManagedInitialWarehouseSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_task_minimum_trigger_interval_in_seconds: {
        value: cdktf.numberToHclTerraform(this._userTaskMinimumTriggerIntervalInSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user_task_timeout_ms: {
        value: cdktf.numberToHclTerraform(this._userTaskTimeoutMs),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      warehouse: {
        value: cdktf.stringToHclTerraform(this._warehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      week_of_year_policy: {
        value: cdktf.numberToHclTerraform(this._weekOfYearPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      week_start: {
        value: cdktf.numberToHclTerraform(this._weekStart),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      when: {
        value: cdktf.stringToHclTerraform(this._when),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schedule: {
        value: taskScheduleToHclTerraform(this._schedule.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TaskScheduleList",
      },
      timeouts: {
        value: taskTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "TaskTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
