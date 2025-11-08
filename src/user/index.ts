/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#abort_detached_query User#abort_detached_query}
  */
  readonly abortDetachedQuery?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether autocommit is enabled for the session. Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#autocommit User#autocommit}
  */
  readonly autocommit?: boolean | cdktf.IResolvable;
  /**
  * The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#binary_input_format User#binary_input_format}
  */
  readonly binaryInputFormat?: string;
  /**
  * The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#binary_output_format User#binary_output_format}
  */
  readonly binaryOutputFormat?: string;
  /**
  * Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#client_memory_limit User#client_memory_limit}
  */
  readonly clientMemoryLimit?: number;
  /**
  * For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#client_metadata_request_use_connection_ctx User#client_metadata_request_use_connection_ctx}
  */
  readonly clientMetadataRequestUseConnectionCtx?: boolean | cdktf.IResolvable;
  /**
  * Parameter that specifies the number of threads used by the client to pre-fetch large result sets. The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#client_prefetch_threads User#client_prefetch_threads}
  */
  readonly clientPrefetchThreads?: number;
  /**
  * Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#client_result_chunk_size User#client_result_chunk_size}
  */
  readonly clientResultChunkSize?: number;
  /**
  * Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#client_result_column_case_insensitive User#client_result_column_case_insensitive}
  */
  readonly clientResultColumnCaseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#client_session_keep_alive User#client_session_keep_alive}
  */
  readonly clientSessionKeepAlive?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#client_session_keep_alive_heartbeat_frequency User#client_session_keep_alive_heartbeat_frequency}
  */
  readonly clientSessionKeepAliveHeartbeatFrequency?: number;
  /**
  * Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#client_timestamp_type_mapping User#client_timestamp_type_mapping}
  */
  readonly clientTimestampTypeMapping?: string;
  /**
  * Specifies a comment for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#comment User#comment}
  */
  readonly comment?: string;
  /**
  * Specifies the input format for the DATE data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#date_input_format User#date_input_format}
  */
  readonly dateInputFormat?: string;
  /**
  * Specifies the display format for the DATE data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#date_output_format User#date_output_format}
  */
  readonly dateOutputFormat?: string;
  /**
  * Specifies the number of days after which the user status is set to `Expired` and the user is no longer allowed to log in. This is useful for defining temporary users (i.e. users who should only have access to Snowflake for a limited time period). In general, you should not set this property for [account administrators](https://docs.snowflake.com/en/user-guide/security-access-control-considerations.html#label-accountadmin-users) (i.e. users with the `ACCOUNTADMIN` role) because Snowflake locks them out when they become `Expired`. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#days_to_expiry User#days_to_expiry}
  */
  readonly daysToExpiry?: number;
  /**
  * Specifies the namespace (database only or database and schema) that is active by default for the user’s session upon login. Note that the CREATE USER operation does not verify that the namespace exists.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#default_namespace User#default_namespace}
  */
  readonly defaultNamespace?: string;
  /**
  * Specifies the role that is active by default for the user’s session upon login. Note that specifying a default role for a user does **not** grant the role to the user. The role must be granted explicitly to the user using the [GRANT ROLE](https://docs.snowflake.com/en/sql-reference/sql/grant-role) command. In addition, the CREATE USER operation does not verify that the role exists. For more information about this resource, see [docs](./account_role).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#default_role User#default_role}
  */
  readonly defaultRole?: string;
  /**
  * (Default: `DEFAULT`) Specifies the secondary roles that are active for the user’s session upon login. Valid values are (case-insensitive): `DEFAULT` | `NONE` | `ALL`. More information can be found in [doc](https://docs.snowflake.com/en/sql-reference/sql/create-user#optional-object-properties-objectproperties).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#default_secondary_roles_option User#default_secondary_roles_option}
  */
  readonly defaultSecondaryRolesOption?: string;
  /**
  * Specifies the virtual warehouse that is active by default for the user’s session upon login. Note that the CREATE USER operation does not verify that the warehouse exists. For more information about this resource, see [docs](./warehouse).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#default_warehouse User#default_warehouse}
  */
  readonly defaultWarehouse?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Allows enabling or disabling [multi-factor authentication](https://docs.snowflake.com/en/user-guide/security-mfa). Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#disable_mfa User#disable_mfa}
  */
  readonly disableMfa?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the user is disabled, which prevents logging in and aborts all the currently-running queries for the user. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#disabled User#disabled}
  */
  readonly disabled?: string;
  /**
  * Name displayed for the user in the Snowflake web interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#display_name User#display_name}
  */
  readonly displayName?: string;
  /**
  * Email address for the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#email User#email}
  */
  readonly email?: string;
  /**
  * Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#enable_unload_physical_type_optimization User#enable_unload_physical_type_optimization}
  */
  readonly enableUnloadPhysicalTypeOptimization?: boolean | cdktf.IResolvable;
  /**
  * Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. If `FALSE`, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to `TRUE` for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#enable_unredacted_query_syntax_error User#enable_unredacted_query_syntax_error}
  */
  readonly enableUnredactedQuerySyntaxError?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#error_on_nondeterministic_merge User#error_on_nondeterministic_merge}
  */
  readonly errorOnNondeterministicMerge?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#error_on_nondeterministic_update User#error_on_nondeterministic_update}
  */
  readonly errorOnNondeterministicUpdate?: boolean | cdktf.IResolvable;
  /**
  * First name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#first_name User#first_name}
  */
  readonly firstName?: string;
  /**
  * Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#geography_output_format User#geography_output_format}
  */
  readonly geographyOutputFormat?: string;
  /**
  * Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#geometry_output_format User#geometry_output_format}
  */
  readonly geometryOutputFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#id User#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#jdbc_treat_decimal_as_int User#jdbc_treat_decimal_as_int}
  */
  readonly jdbcTreatDecimalAsInt?: boolean | cdktf.IResolvable;
  /**
  * Specifies how JDBC processes TIMESTAMP_NTZ values. For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#jdbc_treat_timestamp_ntz_as_utc User#jdbc_treat_timestamp_ntz_as_utc}
  */
  readonly jdbcTreatTimestampNtzAsUtc?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#jdbc_use_session_timezone User#jdbc_use_session_timezone}
  */
  readonly jdbcUseSessionTimezone?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of blank spaces to indent each new element in JSON output in the session. Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#json_indent User#json_indent}
  */
  readonly jsonIndent?: number;
  /**
  * Last name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#last_name User#last_name}
  */
  readonly lastName?: string;
  /**
  * Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#lock_timeout User#lock_timeout}
  */
  readonly lockTimeout?: number;
  /**
  * Specifies the severity level of messages that should be ingested and made available in the active event table. Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting log level](https://docs.snowflake.com/en/developer-guide/logging-tracing/logging-log-level). For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#log_level User#log_level}
  */
  readonly logLevel?: string;
  /**
  * The name users use to log in. If not supplied, snowflake will use name instead. Login names are always case-insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#login_name User#login_name}
  */
  readonly loginName?: string;
  /**
  * Middle name of the user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#middle_name User#middle_name}
  */
  readonly middleName?: string;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of minutes to temporarily bypass MFA for the user. This property can be used to allow a MFA-enrolled user to temporarily bypass MFA during login in the event that their MFA device is not available. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#mins_to_bypass_mfa User#mins_to_bypass_mfa}
  */
  readonly minsToBypassMfa?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the number of minutes until the temporary lock on the user login is cleared. To protect against unauthorized user login, Snowflake places a temporary lock on a user after five consecutive unsuccessful login attempts. When creating a user, this property can be set to prevent them from logging in until the specified amount of time passes. To remove a lock immediately for a user, specify a value of 0 for this parameter. **Note** because this value changes continuously after setting it, the provider is currently NOT handling the external changes to it. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#mins_to_unlock User#mins_to_unlock}
  */
  readonly minsToUnlock?: number;
  /**
  * Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#multi_statement_count User#multi_statement_count}
  */
  readonly multiStatementCount?: number;
  /**
  * (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`default`)) Specifies whether the user is forced to change their password on next login (including their first/initial login) into the system. Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#must_change_password User#must_change_password}
  */
  readonly mustChangePassword?: string;
  /**
  * Name of the user. Note that if you do not supply login_name this will be used as login_name. Check the [docs](https://docs.snowflake.net/manuals/sql-reference/sql/create-user.html#required-parameters). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#name User#name}
  */
  readonly name: string;
  /**
  * Specifies the network policy to enforce for your account. Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Any existing network policy (created using [CREATE NETWORK POLICY](https://docs.snowflake.com/en/sql-reference/sql/create-network-policy)). For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#network_policy User#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#noorder_sequence_as_default User#noorder_sequence_as_default}
  */
  readonly noorderSequenceAsDefault?: boolean | cdktf.IResolvable;
  /**
  * Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#odbc_treat_decimal_as_int User#odbc_treat_decimal_as_int}
  */
  readonly odbcTreatDecimalAsInt?: boolean | cdktf.IResolvable;
  /**
  * Password for the user. **WARNING:** this will put the password in the terraform state file. Use carefully. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#password User#password}
  */
  readonly password?: string;
  /**
  * Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO <location>](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#prevent_unload_to_internal_stages User#prevent_unload_to_internal_stages}
  */
  readonly preventUnloadToInternalStages?: boolean | cdktf.IResolvable;
  /**
  * Optional string that can be used to tag queries and other SQL statements executed within a session. The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#query_tag User#query_tag}
  */
  readonly queryTag?: string;
  /**
  * Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#quoted_identifiers_ignore_case User#quoted_identifiers_ignore_case}
  */
  readonly quotedIdentifiersIgnoreCase?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum number of rows returned in a result set. A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#rows_per_resultset User#rows_per_resultset}
  */
  readonly rowsPerResultset?: number;
  /**
  * Specifies the user’s RSA public key; used for key-pair authentication. Must be on 1 line without header and trailer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#rsa_public_key User#rsa_public_key}
  */
  readonly rsaPublicKey?: string;
  /**
  * Specifies the user’s second RSA public key; used to rotate the public and private keys for key-pair authentication based on an expiration schedule set by your organization. Must be on 1 line without header and trailer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#rsa_public_key_2 User#rsa_public_key_2}
  */
  readonly rsaPublicKey2?: string;
  /**
  * Specifies the DNS name of an Amazon S3 interface endpoint. Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#s3_stage_vpce_dns_name User#s3_stage_vpce_dns_name}
  */
  readonly s3StageVpceDnsName?: string;
  /**
  * Specifies the path to search to resolve unqualified object names in queries. For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#search_path User#search_path}
  */
  readonly searchPath?: string;
  /**
  * Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, see [Introduction to Secure Data Sharing](https://docs.snowflake.com/en/user-guide/data-sharing-intro) and [Working with shares](https://docs.snowflake.com/en/user-guide/data-sharing-provider). For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#simulated_data_sharing_consumer User#simulated_data_sharing_consumer}
  */
  readonly simulatedDataSharingConsumer?: string;
  /**
  * Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#statement_queued_timeout_in_seconds User#statement_queued_timeout_in_seconds}
  */
  readonly statementQueuedTimeoutInSeconds?: number;
  /**
  * Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#statement_timeout_in_seconds User#statement_timeout_in_seconds}
  */
  readonly statementTimeoutInSeconds?: number;
  /**
  * This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#strict_json_output User#strict_json_output}
  */
  readonly strictJsonOutput?: boolean | cdktf.IResolvable;
  /**
  * Specifies the input format for the TIME data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#time_input_format User#time_input_format}
  */
  readonly timeInputFormat?: string;
  /**
  * Specifies the display format for the TIME data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#time_output_format User#time_output_format}
  */
  readonly timeOutputFormat?: string;
  /**
  * Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#timestamp_day_is_always_24h User#timestamp_day_is_always_24h}
  */
  readonly timestampDayIsAlways24H?: boolean | cdktf.IResolvable;
  /**
  * Specifies the input format for the TIMESTAMP data type alias. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#timestamp_input_format User#timestamp_input_format}
  */
  readonly timestampInputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP_LTZ data type. If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#timestamp_ltz_output_format User#timestamp_ltz_output_format}
  */
  readonly timestampLtzOutputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#timestamp_ntz_output_format User#timestamp_ntz_output_format}
  */
  readonly timestampNtzOutputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP data type alias. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#timestamp_output_format User#timestamp_output_format}
  */
  readonly timestampOutputFormat?: string;
  /**
  * Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#timestamp_type_mapping User#timestamp_type_mapping}
  */
  readonly timestampTypeMapping?: string;
  /**
  * Specifies the display format for the TIMESTAMP_TZ data type. If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#timestamp_tz_output_format User#timestamp_tz_output_format}
  */
  readonly timestampTzOutputFormat?: string;
  /**
  * Specifies the time zone for the session. You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#timezone User#timezone}
  */
  readonly timezone?: string;
  /**
  * Controls how trace events are ingested into the event table. For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#trace_level User#trace_level}
  */
  readonly traceLevel?: string;
  /**
  * Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#transaction_abort_on_error User#transaction_abort_on_error}
  */
  readonly transactionAbortOnError?: boolean | cdktf.IResolvable;
  /**
  * Specifies the isolation level for transactions in the user session. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#transaction_default_isolation_level User#transaction_default_isolation_level}
  */
  readonly transactionDefaultIsolationLevel?: string;
  /**
  * Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#two_digit_century_start User#two_digit_century_start}
  */
  readonly twoDigitCenturyStart?: number;
  /**
  * Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#unsupported_ddl_action User#unsupported_ddl_action}
  */
  readonly unsupportedDdlAction?: string;
  /**
  * Specifies whether to reuse persisted query results, if available, when a matching query is submitted. For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#use_cached_result User#use_cached_result}
  */
  readonly useCachedResult?: boolean | cdktf.IResolvable;
  /**
  * Specifies how the weeks in a given year are computed. `0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#week_of_year_policy User#week_of_year_policy}
  */
  readonly weekOfYearPolicy?: number;
  /**
  * Specifies the first day of the week (used by week-related date functions). `0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#week_start User#week_start}
  */
  readonly weekStart?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#timeouts User#timeouts}
  */
  readonly timeouts?: UserTimeouts;
}
export interface UserParametersAbortDetachedQuery {
}

export function userParametersAbortDetachedQueryToTerraform(struct?: UserParametersAbortDetachedQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersAbortDetachedQueryToHclTerraform(struct?: UserParametersAbortDetachedQuery): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersAbortDetachedQueryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersAbortDetachedQuery | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersAbortDetachedQuery | undefined) {
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

export class UserParametersAbortDetachedQueryList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersAbortDetachedQueryOutputReference {
    return new UserParametersAbortDetachedQueryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersAutocommit {
}

export function userParametersAutocommitToTerraform(struct?: UserParametersAutocommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersAutocommitToHclTerraform(struct?: UserParametersAutocommit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersAutocommitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersAutocommit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersAutocommit | undefined) {
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

export class UserParametersAutocommitList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersAutocommitOutputReference {
    return new UserParametersAutocommitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersBinaryInputFormat {
}

export function userParametersBinaryInputFormatToTerraform(struct?: UserParametersBinaryInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersBinaryInputFormatToHclTerraform(struct?: UserParametersBinaryInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersBinaryInputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersBinaryInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersBinaryInputFormat | undefined) {
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

export class UserParametersBinaryInputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersBinaryInputFormatOutputReference {
    return new UserParametersBinaryInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersBinaryOutputFormat {
}

export function userParametersBinaryOutputFormatToTerraform(struct?: UserParametersBinaryOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersBinaryOutputFormatToHclTerraform(struct?: UserParametersBinaryOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersBinaryOutputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersBinaryOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersBinaryOutputFormat | undefined) {
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

export class UserParametersBinaryOutputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersBinaryOutputFormatOutputReference {
    return new UserParametersBinaryOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersClientMemoryLimit {
}

export function userParametersClientMemoryLimitToTerraform(struct?: UserParametersClientMemoryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersClientMemoryLimitToHclTerraform(struct?: UserParametersClientMemoryLimit): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersClientMemoryLimitOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersClientMemoryLimit | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersClientMemoryLimit | undefined) {
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

export class UserParametersClientMemoryLimitList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersClientMemoryLimitOutputReference {
    return new UserParametersClientMemoryLimitOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersClientMetadataRequestUseConnectionCtx {
}

export function userParametersClientMetadataRequestUseConnectionCtxToTerraform(struct?: UserParametersClientMetadataRequestUseConnectionCtx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersClientMetadataRequestUseConnectionCtxToHclTerraform(struct?: UserParametersClientMetadataRequestUseConnectionCtx): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersClientMetadataRequestUseConnectionCtxOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersClientMetadataRequestUseConnectionCtx | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersClientMetadataRequestUseConnectionCtx | undefined) {
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

export class UserParametersClientMetadataRequestUseConnectionCtxList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersClientMetadataRequestUseConnectionCtxOutputReference {
    return new UserParametersClientMetadataRequestUseConnectionCtxOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersClientPrefetchThreads {
}

export function userParametersClientPrefetchThreadsToTerraform(struct?: UserParametersClientPrefetchThreads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersClientPrefetchThreadsToHclTerraform(struct?: UserParametersClientPrefetchThreads): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersClientPrefetchThreadsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersClientPrefetchThreads | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersClientPrefetchThreads | undefined) {
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

export class UserParametersClientPrefetchThreadsList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersClientPrefetchThreadsOutputReference {
    return new UserParametersClientPrefetchThreadsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersClientResultChunkSize {
}

export function userParametersClientResultChunkSizeToTerraform(struct?: UserParametersClientResultChunkSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersClientResultChunkSizeToHclTerraform(struct?: UserParametersClientResultChunkSize): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersClientResultChunkSizeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersClientResultChunkSize | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersClientResultChunkSize | undefined) {
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

export class UserParametersClientResultChunkSizeList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersClientResultChunkSizeOutputReference {
    return new UserParametersClientResultChunkSizeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersClientResultColumnCaseInsensitive {
}

export function userParametersClientResultColumnCaseInsensitiveToTerraform(struct?: UserParametersClientResultColumnCaseInsensitive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersClientResultColumnCaseInsensitiveToHclTerraform(struct?: UserParametersClientResultColumnCaseInsensitive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersClientResultColumnCaseInsensitiveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersClientResultColumnCaseInsensitive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersClientResultColumnCaseInsensitive | undefined) {
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

export class UserParametersClientResultColumnCaseInsensitiveList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersClientResultColumnCaseInsensitiveOutputReference {
    return new UserParametersClientResultColumnCaseInsensitiveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersClientSessionKeepAlive {
}

export function userParametersClientSessionKeepAliveToTerraform(struct?: UserParametersClientSessionKeepAlive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersClientSessionKeepAliveToHclTerraform(struct?: UserParametersClientSessionKeepAlive): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersClientSessionKeepAliveOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersClientSessionKeepAlive | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersClientSessionKeepAlive | undefined) {
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

export class UserParametersClientSessionKeepAliveList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersClientSessionKeepAliveOutputReference {
    return new UserParametersClientSessionKeepAliveOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersClientSessionKeepAliveHeartbeatFrequency {
}

export function userParametersClientSessionKeepAliveHeartbeatFrequencyToTerraform(struct?: UserParametersClientSessionKeepAliveHeartbeatFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersClientSessionKeepAliveHeartbeatFrequencyToHclTerraform(struct?: UserParametersClientSessionKeepAliveHeartbeatFrequency): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersClientSessionKeepAliveHeartbeatFrequencyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersClientSessionKeepAliveHeartbeatFrequency | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersClientSessionKeepAliveHeartbeatFrequency | undefined) {
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

export class UserParametersClientSessionKeepAliveHeartbeatFrequencyList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersClientSessionKeepAliveHeartbeatFrequencyOutputReference {
    return new UserParametersClientSessionKeepAliveHeartbeatFrequencyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersClientTimestampTypeMapping {
}

export function userParametersClientTimestampTypeMappingToTerraform(struct?: UserParametersClientTimestampTypeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersClientTimestampTypeMappingToHclTerraform(struct?: UserParametersClientTimestampTypeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersClientTimestampTypeMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersClientTimestampTypeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersClientTimestampTypeMapping | undefined) {
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

export class UserParametersClientTimestampTypeMappingList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersClientTimestampTypeMappingOutputReference {
    return new UserParametersClientTimestampTypeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersDateInputFormat {
}

export function userParametersDateInputFormatToTerraform(struct?: UserParametersDateInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersDateInputFormatToHclTerraform(struct?: UserParametersDateInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersDateInputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersDateInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersDateInputFormat | undefined) {
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

export class UserParametersDateInputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersDateInputFormatOutputReference {
    return new UserParametersDateInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersDateOutputFormat {
}

export function userParametersDateOutputFormatToTerraform(struct?: UserParametersDateOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersDateOutputFormatToHclTerraform(struct?: UserParametersDateOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersDateOutputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersDateOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersDateOutputFormat | undefined) {
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

export class UserParametersDateOutputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersDateOutputFormatOutputReference {
    return new UserParametersDateOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersEnableUnloadPhysicalTypeOptimization {
}

export function userParametersEnableUnloadPhysicalTypeOptimizationToTerraform(struct?: UserParametersEnableUnloadPhysicalTypeOptimization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersEnableUnloadPhysicalTypeOptimizationToHclTerraform(struct?: UserParametersEnableUnloadPhysicalTypeOptimization): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersEnableUnloadPhysicalTypeOptimizationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersEnableUnloadPhysicalTypeOptimization | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersEnableUnloadPhysicalTypeOptimization | undefined) {
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

export class UserParametersEnableUnloadPhysicalTypeOptimizationList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersEnableUnloadPhysicalTypeOptimizationOutputReference {
    return new UserParametersEnableUnloadPhysicalTypeOptimizationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersEnableUnredactedQuerySyntaxError {
}

export function userParametersEnableUnredactedQuerySyntaxErrorToTerraform(struct?: UserParametersEnableUnredactedQuerySyntaxError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersEnableUnredactedQuerySyntaxErrorToHclTerraform(struct?: UserParametersEnableUnredactedQuerySyntaxError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersEnableUnredactedQuerySyntaxErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersEnableUnredactedQuerySyntaxError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersEnableUnredactedQuerySyntaxError | undefined) {
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

export class UserParametersEnableUnredactedQuerySyntaxErrorList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersEnableUnredactedQuerySyntaxErrorOutputReference {
    return new UserParametersEnableUnredactedQuerySyntaxErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersErrorOnNondeterministicMerge {
}

export function userParametersErrorOnNondeterministicMergeToTerraform(struct?: UserParametersErrorOnNondeterministicMerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersErrorOnNondeterministicMergeToHclTerraform(struct?: UserParametersErrorOnNondeterministicMerge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersErrorOnNondeterministicMergeOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersErrorOnNondeterministicMerge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersErrorOnNondeterministicMerge | undefined) {
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

export class UserParametersErrorOnNondeterministicMergeList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersErrorOnNondeterministicMergeOutputReference {
    return new UserParametersErrorOnNondeterministicMergeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersErrorOnNondeterministicUpdate {
}

export function userParametersErrorOnNondeterministicUpdateToTerraform(struct?: UserParametersErrorOnNondeterministicUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersErrorOnNondeterministicUpdateToHclTerraform(struct?: UserParametersErrorOnNondeterministicUpdate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersErrorOnNondeterministicUpdateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersErrorOnNondeterministicUpdate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersErrorOnNondeterministicUpdate | undefined) {
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

export class UserParametersErrorOnNondeterministicUpdateList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersErrorOnNondeterministicUpdateOutputReference {
    return new UserParametersErrorOnNondeterministicUpdateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersGeographyOutputFormat {
}

export function userParametersGeographyOutputFormatToTerraform(struct?: UserParametersGeographyOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersGeographyOutputFormatToHclTerraform(struct?: UserParametersGeographyOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersGeographyOutputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersGeographyOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersGeographyOutputFormat | undefined) {
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

export class UserParametersGeographyOutputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersGeographyOutputFormatOutputReference {
    return new UserParametersGeographyOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersGeometryOutputFormat {
}

export function userParametersGeometryOutputFormatToTerraform(struct?: UserParametersGeometryOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersGeometryOutputFormatToHclTerraform(struct?: UserParametersGeometryOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersGeometryOutputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersGeometryOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersGeometryOutputFormat | undefined) {
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

export class UserParametersGeometryOutputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersGeometryOutputFormatOutputReference {
    return new UserParametersGeometryOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersJdbcTreatDecimalAsInt {
}

export function userParametersJdbcTreatDecimalAsIntToTerraform(struct?: UserParametersJdbcTreatDecimalAsInt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersJdbcTreatDecimalAsIntToHclTerraform(struct?: UserParametersJdbcTreatDecimalAsInt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersJdbcTreatDecimalAsIntOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersJdbcTreatDecimalAsInt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersJdbcTreatDecimalAsInt | undefined) {
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

export class UserParametersJdbcTreatDecimalAsIntList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersJdbcTreatDecimalAsIntOutputReference {
    return new UserParametersJdbcTreatDecimalAsIntOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersJdbcTreatTimestampNtzAsUtc {
}

export function userParametersJdbcTreatTimestampNtzAsUtcToTerraform(struct?: UserParametersJdbcTreatTimestampNtzAsUtc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersJdbcTreatTimestampNtzAsUtcToHclTerraform(struct?: UserParametersJdbcTreatTimestampNtzAsUtc): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersJdbcTreatTimestampNtzAsUtcOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersJdbcTreatTimestampNtzAsUtc | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersJdbcTreatTimestampNtzAsUtc | undefined) {
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

export class UserParametersJdbcTreatTimestampNtzAsUtcList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersJdbcTreatTimestampNtzAsUtcOutputReference {
    return new UserParametersJdbcTreatTimestampNtzAsUtcOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersJdbcUseSessionTimezone {
}

export function userParametersJdbcUseSessionTimezoneToTerraform(struct?: UserParametersJdbcUseSessionTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersJdbcUseSessionTimezoneToHclTerraform(struct?: UserParametersJdbcUseSessionTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersJdbcUseSessionTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersJdbcUseSessionTimezone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersJdbcUseSessionTimezone | undefined) {
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

export class UserParametersJdbcUseSessionTimezoneList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersJdbcUseSessionTimezoneOutputReference {
    return new UserParametersJdbcUseSessionTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersJsonIndent {
}

export function userParametersJsonIndentToTerraform(struct?: UserParametersJsonIndent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersJsonIndentToHclTerraform(struct?: UserParametersJsonIndent): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersJsonIndentOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersJsonIndent | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersJsonIndent | undefined) {
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

export class UserParametersJsonIndentList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersJsonIndentOutputReference {
    return new UserParametersJsonIndentOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersLockTimeout {
}

export function userParametersLockTimeoutToTerraform(struct?: UserParametersLockTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersLockTimeoutToHclTerraform(struct?: UserParametersLockTimeout): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersLockTimeoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersLockTimeout | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersLockTimeout | undefined) {
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

export class UserParametersLockTimeoutList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersLockTimeoutOutputReference {
    return new UserParametersLockTimeoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersLogLevel {
}

export function userParametersLogLevelToTerraform(struct?: UserParametersLogLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersLogLevelToHclTerraform(struct?: UserParametersLogLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersLogLevelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersLogLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersLogLevel | undefined) {
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

export class UserParametersLogLevelList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersLogLevelOutputReference {
    return new UserParametersLogLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersMultiStatementCount {
}

export function userParametersMultiStatementCountToTerraform(struct?: UserParametersMultiStatementCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersMultiStatementCountToHclTerraform(struct?: UserParametersMultiStatementCount): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersMultiStatementCountOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersMultiStatementCount | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersMultiStatementCount | undefined) {
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

export class UserParametersMultiStatementCountList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersMultiStatementCountOutputReference {
    return new UserParametersMultiStatementCountOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersNetworkPolicy {
}

export function userParametersNetworkPolicyToTerraform(struct?: UserParametersNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersNetworkPolicyToHclTerraform(struct?: UserParametersNetworkPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersNetworkPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersNetworkPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersNetworkPolicy | undefined) {
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

export class UserParametersNetworkPolicyList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersNetworkPolicyOutputReference {
    return new UserParametersNetworkPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersNoorderSequenceAsDefault {
}

export function userParametersNoorderSequenceAsDefaultToTerraform(struct?: UserParametersNoorderSequenceAsDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersNoorderSequenceAsDefaultToHclTerraform(struct?: UserParametersNoorderSequenceAsDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersNoorderSequenceAsDefaultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersNoorderSequenceAsDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersNoorderSequenceAsDefault | undefined) {
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

export class UserParametersNoorderSequenceAsDefaultList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersNoorderSequenceAsDefaultOutputReference {
    return new UserParametersNoorderSequenceAsDefaultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersOdbcTreatDecimalAsInt {
}

export function userParametersOdbcTreatDecimalAsIntToTerraform(struct?: UserParametersOdbcTreatDecimalAsInt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersOdbcTreatDecimalAsIntToHclTerraform(struct?: UserParametersOdbcTreatDecimalAsInt): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersOdbcTreatDecimalAsIntOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersOdbcTreatDecimalAsInt | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersOdbcTreatDecimalAsInt | undefined) {
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

export class UserParametersOdbcTreatDecimalAsIntList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersOdbcTreatDecimalAsIntOutputReference {
    return new UserParametersOdbcTreatDecimalAsIntOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersPreventUnloadToInternalStages {
}

export function userParametersPreventUnloadToInternalStagesToTerraform(struct?: UserParametersPreventUnloadToInternalStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersPreventUnloadToInternalStagesToHclTerraform(struct?: UserParametersPreventUnloadToInternalStages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersPreventUnloadToInternalStagesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersPreventUnloadToInternalStages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersPreventUnloadToInternalStages | undefined) {
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

export class UserParametersPreventUnloadToInternalStagesList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersPreventUnloadToInternalStagesOutputReference {
    return new UserParametersPreventUnloadToInternalStagesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersQueryTag {
}

export function userParametersQueryTagToTerraform(struct?: UserParametersQueryTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersQueryTagToHclTerraform(struct?: UserParametersQueryTag): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersQueryTagOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersQueryTag | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersQueryTag | undefined) {
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

export class UserParametersQueryTagList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersQueryTagOutputReference {
    return new UserParametersQueryTagOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersQuotedIdentifiersIgnoreCase {
}

export function userParametersQuotedIdentifiersIgnoreCaseToTerraform(struct?: UserParametersQuotedIdentifiersIgnoreCase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersQuotedIdentifiersIgnoreCaseToHclTerraform(struct?: UserParametersQuotedIdentifiersIgnoreCase): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersQuotedIdentifiersIgnoreCaseOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersQuotedIdentifiersIgnoreCase | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersQuotedIdentifiersIgnoreCase | undefined) {
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

export class UserParametersQuotedIdentifiersIgnoreCaseList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersQuotedIdentifiersIgnoreCaseOutputReference {
    return new UserParametersQuotedIdentifiersIgnoreCaseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersRowsPerResultset {
}

export function userParametersRowsPerResultsetToTerraform(struct?: UserParametersRowsPerResultset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersRowsPerResultsetToHclTerraform(struct?: UserParametersRowsPerResultset): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersRowsPerResultsetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersRowsPerResultset | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersRowsPerResultset | undefined) {
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

export class UserParametersRowsPerResultsetList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersRowsPerResultsetOutputReference {
    return new UserParametersRowsPerResultsetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersS3StageVpceDnsName {
}

export function userParametersS3StageVpceDnsNameToTerraform(struct?: UserParametersS3StageVpceDnsName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersS3StageVpceDnsNameToHclTerraform(struct?: UserParametersS3StageVpceDnsName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersS3StageVpceDnsNameOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersS3StageVpceDnsName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersS3StageVpceDnsName | undefined) {
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

export class UserParametersS3StageVpceDnsNameList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersS3StageVpceDnsNameOutputReference {
    return new UserParametersS3StageVpceDnsNameOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersSearchPath {
}

export function userParametersSearchPathToTerraform(struct?: UserParametersSearchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersSearchPathToHclTerraform(struct?: UserParametersSearchPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersSearchPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersSearchPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersSearchPath | undefined) {
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

export class UserParametersSearchPathList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersSearchPathOutputReference {
    return new UserParametersSearchPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersSimulatedDataSharingConsumer {
}

export function userParametersSimulatedDataSharingConsumerToTerraform(struct?: UserParametersSimulatedDataSharingConsumer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersSimulatedDataSharingConsumerToHclTerraform(struct?: UserParametersSimulatedDataSharingConsumer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersSimulatedDataSharingConsumerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersSimulatedDataSharingConsumer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersSimulatedDataSharingConsumer | undefined) {
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

export class UserParametersSimulatedDataSharingConsumerList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersSimulatedDataSharingConsumerOutputReference {
    return new UserParametersSimulatedDataSharingConsumerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersStatementQueuedTimeoutInSeconds {
}

export function userParametersStatementQueuedTimeoutInSecondsToTerraform(struct?: UserParametersStatementQueuedTimeoutInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersStatementQueuedTimeoutInSecondsToHclTerraform(struct?: UserParametersStatementQueuedTimeoutInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersStatementQueuedTimeoutInSecondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersStatementQueuedTimeoutInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersStatementQueuedTimeoutInSeconds | undefined) {
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

export class UserParametersStatementQueuedTimeoutInSecondsList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersStatementQueuedTimeoutInSecondsOutputReference {
    return new UserParametersStatementQueuedTimeoutInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersStatementTimeoutInSeconds {
}

export function userParametersStatementTimeoutInSecondsToTerraform(struct?: UserParametersStatementTimeoutInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersStatementTimeoutInSecondsToHclTerraform(struct?: UserParametersStatementTimeoutInSeconds): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersStatementTimeoutInSecondsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersStatementTimeoutInSeconds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersStatementTimeoutInSeconds | undefined) {
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

export class UserParametersStatementTimeoutInSecondsList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersStatementTimeoutInSecondsOutputReference {
    return new UserParametersStatementTimeoutInSecondsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersStrictJsonOutput {
}

export function userParametersStrictJsonOutputToTerraform(struct?: UserParametersStrictJsonOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersStrictJsonOutputToHclTerraform(struct?: UserParametersStrictJsonOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersStrictJsonOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersStrictJsonOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersStrictJsonOutput | undefined) {
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

export class UserParametersStrictJsonOutputList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersStrictJsonOutputOutputReference {
    return new UserParametersStrictJsonOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimeInputFormat {
}

export function userParametersTimeInputFormatToTerraform(struct?: UserParametersTimeInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimeInputFormatToHclTerraform(struct?: UserParametersTimeInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimeInputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimeInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimeInputFormat | undefined) {
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

export class UserParametersTimeInputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimeInputFormatOutputReference {
    return new UserParametersTimeInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimeOutputFormat {
}

export function userParametersTimeOutputFormatToTerraform(struct?: UserParametersTimeOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimeOutputFormatToHclTerraform(struct?: UserParametersTimeOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimeOutputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimeOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimeOutputFormat | undefined) {
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

export class UserParametersTimeOutputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimeOutputFormatOutputReference {
    return new UserParametersTimeOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimestampDayIsAlways24H {
}

export function userParametersTimestampDayIsAlways24HToTerraform(struct?: UserParametersTimestampDayIsAlways24H): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimestampDayIsAlways24HToHclTerraform(struct?: UserParametersTimestampDayIsAlways24H): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimestampDayIsAlways24HOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimestampDayIsAlways24H | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimestampDayIsAlways24H | undefined) {
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

export class UserParametersTimestampDayIsAlways24HList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimestampDayIsAlways24HOutputReference {
    return new UserParametersTimestampDayIsAlways24HOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimestampInputFormat {
}

export function userParametersTimestampInputFormatToTerraform(struct?: UserParametersTimestampInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimestampInputFormatToHclTerraform(struct?: UserParametersTimestampInputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimestampInputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimestampInputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimestampInputFormat | undefined) {
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

export class UserParametersTimestampInputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimestampInputFormatOutputReference {
    return new UserParametersTimestampInputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimestampLtzOutputFormat {
}

export function userParametersTimestampLtzOutputFormatToTerraform(struct?: UserParametersTimestampLtzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimestampLtzOutputFormatToHclTerraform(struct?: UserParametersTimestampLtzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimestampLtzOutputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimestampLtzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimestampLtzOutputFormat | undefined) {
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

export class UserParametersTimestampLtzOutputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimestampLtzOutputFormatOutputReference {
    return new UserParametersTimestampLtzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimestampNtzOutputFormat {
}

export function userParametersTimestampNtzOutputFormatToTerraform(struct?: UserParametersTimestampNtzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimestampNtzOutputFormatToHclTerraform(struct?: UserParametersTimestampNtzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimestampNtzOutputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimestampNtzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimestampNtzOutputFormat | undefined) {
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

export class UserParametersTimestampNtzOutputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimestampNtzOutputFormatOutputReference {
    return new UserParametersTimestampNtzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimestampOutputFormat {
}

export function userParametersTimestampOutputFormatToTerraform(struct?: UserParametersTimestampOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimestampOutputFormatToHclTerraform(struct?: UserParametersTimestampOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimestampOutputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimestampOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimestampOutputFormat | undefined) {
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

export class UserParametersTimestampOutputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimestampOutputFormatOutputReference {
    return new UserParametersTimestampOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimestampTypeMapping {
}

export function userParametersTimestampTypeMappingToTerraform(struct?: UserParametersTimestampTypeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimestampTypeMappingToHclTerraform(struct?: UserParametersTimestampTypeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimestampTypeMappingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimestampTypeMapping | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimestampTypeMapping | undefined) {
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

export class UserParametersTimestampTypeMappingList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimestampTypeMappingOutputReference {
    return new UserParametersTimestampTypeMappingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimestampTzOutputFormat {
}

export function userParametersTimestampTzOutputFormatToTerraform(struct?: UserParametersTimestampTzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimestampTzOutputFormatToHclTerraform(struct?: UserParametersTimestampTzOutputFormat): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimestampTzOutputFormatOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimestampTzOutputFormat | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimestampTzOutputFormat | undefined) {
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

export class UserParametersTimestampTzOutputFormatList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimestampTzOutputFormatOutputReference {
    return new UserParametersTimestampTzOutputFormatOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTimezone {
}

export function userParametersTimezoneToTerraform(struct?: UserParametersTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTimezoneToHclTerraform(struct?: UserParametersTimezone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTimezoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTimezone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTimezone | undefined) {
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

export class UserParametersTimezoneList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTimezoneOutputReference {
    return new UserParametersTimezoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTraceLevel {
}

export function userParametersTraceLevelToTerraform(struct?: UserParametersTraceLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTraceLevelToHclTerraform(struct?: UserParametersTraceLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTraceLevelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTraceLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTraceLevel | undefined) {
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

export class UserParametersTraceLevelList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTraceLevelOutputReference {
    return new UserParametersTraceLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTransactionAbortOnError {
}

export function userParametersTransactionAbortOnErrorToTerraform(struct?: UserParametersTransactionAbortOnError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTransactionAbortOnErrorToHclTerraform(struct?: UserParametersTransactionAbortOnError): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTransactionAbortOnErrorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTransactionAbortOnError | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTransactionAbortOnError | undefined) {
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

export class UserParametersTransactionAbortOnErrorList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTransactionAbortOnErrorOutputReference {
    return new UserParametersTransactionAbortOnErrorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTransactionDefaultIsolationLevel {
}

export function userParametersTransactionDefaultIsolationLevelToTerraform(struct?: UserParametersTransactionDefaultIsolationLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTransactionDefaultIsolationLevelToHclTerraform(struct?: UserParametersTransactionDefaultIsolationLevel): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTransactionDefaultIsolationLevelOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTransactionDefaultIsolationLevel | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTransactionDefaultIsolationLevel | undefined) {
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

export class UserParametersTransactionDefaultIsolationLevelList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTransactionDefaultIsolationLevelOutputReference {
    return new UserParametersTransactionDefaultIsolationLevelOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersTwoDigitCenturyStart {
}

export function userParametersTwoDigitCenturyStartToTerraform(struct?: UserParametersTwoDigitCenturyStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersTwoDigitCenturyStartToHclTerraform(struct?: UserParametersTwoDigitCenturyStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersTwoDigitCenturyStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersTwoDigitCenturyStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersTwoDigitCenturyStart | undefined) {
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

export class UserParametersTwoDigitCenturyStartList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersTwoDigitCenturyStartOutputReference {
    return new UserParametersTwoDigitCenturyStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersUnsupportedDdlAction {
}

export function userParametersUnsupportedDdlActionToTerraform(struct?: UserParametersUnsupportedDdlAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersUnsupportedDdlActionToHclTerraform(struct?: UserParametersUnsupportedDdlAction): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersUnsupportedDdlActionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersUnsupportedDdlAction | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersUnsupportedDdlAction | undefined) {
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

export class UserParametersUnsupportedDdlActionList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersUnsupportedDdlActionOutputReference {
    return new UserParametersUnsupportedDdlActionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersUseCachedResult {
}

export function userParametersUseCachedResultToTerraform(struct?: UserParametersUseCachedResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersUseCachedResultToHclTerraform(struct?: UserParametersUseCachedResult): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersUseCachedResultOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersUseCachedResult | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersUseCachedResult | undefined) {
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

export class UserParametersUseCachedResultList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersUseCachedResultOutputReference {
    return new UserParametersUseCachedResultOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersWeekOfYearPolicy {
}

export function userParametersWeekOfYearPolicyToTerraform(struct?: UserParametersWeekOfYearPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersWeekOfYearPolicyToHclTerraform(struct?: UserParametersWeekOfYearPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersWeekOfYearPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersWeekOfYearPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersWeekOfYearPolicy | undefined) {
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

export class UserParametersWeekOfYearPolicyList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersWeekOfYearPolicyOutputReference {
    return new UserParametersWeekOfYearPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParametersWeekStart {
}

export function userParametersWeekStartToTerraform(struct?: UserParametersWeekStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersWeekStartToHclTerraform(struct?: UserParametersWeekStart): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersWeekStartOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParametersWeekStart | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParametersWeekStart | undefined) {
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

export class UserParametersWeekStartList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersWeekStartOutputReference {
    return new UserParametersWeekStartOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserParameters {
}

export function userParametersToTerraform(struct?: UserParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userParametersToHclTerraform(struct?: UserParameters): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserParameters | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserParameters | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // abort_detached_query - computed: true, optional: false, required: false
  private _abortDetachedQuery = new UserParametersAbortDetachedQueryList(this, "abort_detached_query", false);
  public get abortDetachedQuery() {
    return this._abortDetachedQuery;
  }

  // autocommit - computed: true, optional: false, required: false
  private _autocommit = new UserParametersAutocommitList(this, "autocommit", false);
  public get autocommit() {
    return this._autocommit;
  }

  // binary_input_format - computed: true, optional: false, required: false
  private _binaryInputFormat = new UserParametersBinaryInputFormatList(this, "binary_input_format", false);
  public get binaryInputFormat() {
    return this._binaryInputFormat;
  }

  // binary_output_format - computed: true, optional: false, required: false
  private _binaryOutputFormat = new UserParametersBinaryOutputFormatList(this, "binary_output_format", false);
  public get binaryOutputFormat() {
    return this._binaryOutputFormat;
  }

  // client_memory_limit - computed: true, optional: false, required: false
  private _clientMemoryLimit = new UserParametersClientMemoryLimitList(this, "client_memory_limit", false);
  public get clientMemoryLimit() {
    return this._clientMemoryLimit;
  }

  // client_metadata_request_use_connection_ctx - computed: true, optional: false, required: false
  private _clientMetadataRequestUseConnectionCtx = new UserParametersClientMetadataRequestUseConnectionCtxList(this, "client_metadata_request_use_connection_ctx", false);
  public get clientMetadataRequestUseConnectionCtx() {
    return this._clientMetadataRequestUseConnectionCtx;
  }

  // client_prefetch_threads - computed: true, optional: false, required: false
  private _clientPrefetchThreads = new UserParametersClientPrefetchThreadsList(this, "client_prefetch_threads", false);
  public get clientPrefetchThreads() {
    return this._clientPrefetchThreads;
  }

  // client_result_chunk_size - computed: true, optional: false, required: false
  private _clientResultChunkSize = new UserParametersClientResultChunkSizeList(this, "client_result_chunk_size", false);
  public get clientResultChunkSize() {
    return this._clientResultChunkSize;
  }

  // client_result_column_case_insensitive - computed: true, optional: false, required: false
  private _clientResultColumnCaseInsensitive = new UserParametersClientResultColumnCaseInsensitiveList(this, "client_result_column_case_insensitive", false);
  public get clientResultColumnCaseInsensitive() {
    return this._clientResultColumnCaseInsensitive;
  }

  // client_session_keep_alive - computed: true, optional: false, required: false
  private _clientSessionKeepAlive = new UserParametersClientSessionKeepAliveList(this, "client_session_keep_alive", false);
  public get clientSessionKeepAlive() {
    return this._clientSessionKeepAlive;
  }

  // client_session_keep_alive_heartbeat_frequency - computed: true, optional: false, required: false
  private _clientSessionKeepAliveHeartbeatFrequency = new UserParametersClientSessionKeepAliveHeartbeatFrequencyList(this, "client_session_keep_alive_heartbeat_frequency", false);
  public get clientSessionKeepAliveHeartbeatFrequency() {
    return this._clientSessionKeepAliveHeartbeatFrequency;
  }

  // client_timestamp_type_mapping - computed: true, optional: false, required: false
  private _clientTimestampTypeMapping = new UserParametersClientTimestampTypeMappingList(this, "client_timestamp_type_mapping", false);
  public get clientTimestampTypeMapping() {
    return this._clientTimestampTypeMapping;
  }

  // date_input_format - computed: true, optional: false, required: false
  private _dateInputFormat = new UserParametersDateInputFormatList(this, "date_input_format", false);
  public get dateInputFormat() {
    return this._dateInputFormat;
  }

  // date_output_format - computed: true, optional: false, required: false
  private _dateOutputFormat = new UserParametersDateOutputFormatList(this, "date_output_format", false);
  public get dateOutputFormat() {
    return this._dateOutputFormat;
  }

  // enable_unload_physical_type_optimization - computed: true, optional: false, required: false
  private _enableUnloadPhysicalTypeOptimization = new UserParametersEnableUnloadPhysicalTypeOptimizationList(this, "enable_unload_physical_type_optimization", false);
  public get enableUnloadPhysicalTypeOptimization() {
    return this._enableUnloadPhysicalTypeOptimization;
  }

  // enable_unredacted_query_syntax_error - computed: true, optional: false, required: false
  private _enableUnredactedQuerySyntaxError = new UserParametersEnableUnredactedQuerySyntaxErrorList(this, "enable_unredacted_query_syntax_error", false);
  public get enableUnredactedQuerySyntaxError() {
    return this._enableUnredactedQuerySyntaxError;
  }

  // error_on_nondeterministic_merge - computed: true, optional: false, required: false
  private _errorOnNondeterministicMerge = new UserParametersErrorOnNondeterministicMergeList(this, "error_on_nondeterministic_merge", false);
  public get errorOnNondeterministicMerge() {
    return this._errorOnNondeterministicMerge;
  }

  // error_on_nondeterministic_update - computed: true, optional: false, required: false
  private _errorOnNondeterministicUpdate = new UserParametersErrorOnNondeterministicUpdateList(this, "error_on_nondeterministic_update", false);
  public get errorOnNondeterministicUpdate() {
    return this._errorOnNondeterministicUpdate;
  }

  // geography_output_format - computed: true, optional: false, required: false
  private _geographyOutputFormat = new UserParametersGeographyOutputFormatList(this, "geography_output_format", false);
  public get geographyOutputFormat() {
    return this._geographyOutputFormat;
  }

  // geometry_output_format - computed: true, optional: false, required: false
  private _geometryOutputFormat = new UserParametersGeometryOutputFormatList(this, "geometry_output_format", false);
  public get geometryOutputFormat() {
    return this._geometryOutputFormat;
  }

  // jdbc_treat_decimal_as_int - computed: true, optional: false, required: false
  private _jdbcTreatDecimalAsInt = new UserParametersJdbcTreatDecimalAsIntList(this, "jdbc_treat_decimal_as_int", false);
  public get jdbcTreatDecimalAsInt() {
    return this._jdbcTreatDecimalAsInt;
  }

  // jdbc_treat_timestamp_ntz_as_utc - computed: true, optional: false, required: false
  private _jdbcTreatTimestampNtzAsUtc = new UserParametersJdbcTreatTimestampNtzAsUtcList(this, "jdbc_treat_timestamp_ntz_as_utc", false);
  public get jdbcTreatTimestampNtzAsUtc() {
    return this._jdbcTreatTimestampNtzAsUtc;
  }

  // jdbc_use_session_timezone - computed: true, optional: false, required: false
  private _jdbcUseSessionTimezone = new UserParametersJdbcUseSessionTimezoneList(this, "jdbc_use_session_timezone", false);
  public get jdbcUseSessionTimezone() {
    return this._jdbcUseSessionTimezone;
  }

  // json_indent - computed: true, optional: false, required: false
  private _jsonIndent = new UserParametersJsonIndentList(this, "json_indent", false);
  public get jsonIndent() {
    return this._jsonIndent;
  }

  // lock_timeout - computed: true, optional: false, required: false
  private _lockTimeout = new UserParametersLockTimeoutList(this, "lock_timeout", false);
  public get lockTimeout() {
    return this._lockTimeout;
  }

  // log_level - computed: true, optional: false, required: false
  private _logLevel = new UserParametersLogLevelList(this, "log_level", false);
  public get logLevel() {
    return this._logLevel;
  }

  // multi_statement_count - computed: true, optional: false, required: false
  private _multiStatementCount = new UserParametersMultiStatementCountList(this, "multi_statement_count", false);
  public get multiStatementCount() {
    return this._multiStatementCount;
  }

  // network_policy - computed: true, optional: false, required: false
  private _networkPolicy = new UserParametersNetworkPolicyList(this, "network_policy", false);
  public get networkPolicy() {
    return this._networkPolicy;
  }

  // noorder_sequence_as_default - computed: true, optional: false, required: false
  private _noorderSequenceAsDefault = new UserParametersNoorderSequenceAsDefaultList(this, "noorder_sequence_as_default", false);
  public get noorderSequenceAsDefault() {
    return this._noorderSequenceAsDefault;
  }

  // odbc_treat_decimal_as_int - computed: true, optional: false, required: false
  private _odbcTreatDecimalAsInt = new UserParametersOdbcTreatDecimalAsIntList(this, "odbc_treat_decimal_as_int", false);
  public get odbcTreatDecimalAsInt() {
    return this._odbcTreatDecimalAsInt;
  }

  // prevent_unload_to_internal_stages - computed: true, optional: false, required: false
  private _preventUnloadToInternalStages = new UserParametersPreventUnloadToInternalStagesList(this, "prevent_unload_to_internal_stages", false);
  public get preventUnloadToInternalStages() {
    return this._preventUnloadToInternalStages;
  }

  // query_tag - computed: true, optional: false, required: false
  private _queryTag = new UserParametersQueryTagList(this, "query_tag", false);
  public get queryTag() {
    return this._queryTag;
  }

  // quoted_identifiers_ignore_case - computed: true, optional: false, required: false
  private _quotedIdentifiersIgnoreCase = new UserParametersQuotedIdentifiersIgnoreCaseList(this, "quoted_identifiers_ignore_case", false);
  public get quotedIdentifiersIgnoreCase() {
    return this._quotedIdentifiersIgnoreCase;
  }

  // rows_per_resultset - computed: true, optional: false, required: false
  private _rowsPerResultset = new UserParametersRowsPerResultsetList(this, "rows_per_resultset", false);
  public get rowsPerResultset() {
    return this._rowsPerResultset;
  }

  // s3_stage_vpce_dns_name - computed: true, optional: false, required: false
  private _s3StageVpceDnsName = new UserParametersS3StageVpceDnsNameList(this, "s3_stage_vpce_dns_name", false);
  public get s3StageVpceDnsName() {
    return this._s3StageVpceDnsName;
  }

  // search_path - computed: true, optional: false, required: false
  private _searchPath = new UserParametersSearchPathList(this, "search_path", false);
  public get searchPath() {
    return this._searchPath;
  }

  // simulated_data_sharing_consumer - computed: true, optional: false, required: false
  private _simulatedDataSharingConsumer = new UserParametersSimulatedDataSharingConsumerList(this, "simulated_data_sharing_consumer", false);
  public get simulatedDataSharingConsumer() {
    return this._simulatedDataSharingConsumer;
  }

  // statement_queued_timeout_in_seconds - computed: true, optional: false, required: false
  private _statementQueuedTimeoutInSeconds = new UserParametersStatementQueuedTimeoutInSecondsList(this, "statement_queued_timeout_in_seconds", false);
  public get statementQueuedTimeoutInSeconds() {
    return this._statementQueuedTimeoutInSeconds;
  }

  // statement_timeout_in_seconds - computed: true, optional: false, required: false
  private _statementTimeoutInSeconds = new UserParametersStatementTimeoutInSecondsList(this, "statement_timeout_in_seconds", false);
  public get statementTimeoutInSeconds() {
    return this._statementTimeoutInSeconds;
  }

  // strict_json_output - computed: true, optional: false, required: false
  private _strictJsonOutput = new UserParametersStrictJsonOutputList(this, "strict_json_output", false);
  public get strictJsonOutput() {
    return this._strictJsonOutput;
  }

  // time_input_format - computed: true, optional: false, required: false
  private _timeInputFormat = new UserParametersTimeInputFormatList(this, "time_input_format", false);
  public get timeInputFormat() {
    return this._timeInputFormat;
  }

  // time_output_format - computed: true, optional: false, required: false
  private _timeOutputFormat = new UserParametersTimeOutputFormatList(this, "time_output_format", false);
  public get timeOutputFormat() {
    return this._timeOutputFormat;
  }

  // timestamp_day_is_always_24h - computed: true, optional: false, required: false
  private _timestampDayIsAlways24H = new UserParametersTimestampDayIsAlways24HList(this, "timestamp_day_is_always_24h", false);
  public get timestampDayIsAlways24H() {
    return this._timestampDayIsAlways24H;
  }

  // timestamp_input_format - computed: true, optional: false, required: false
  private _timestampInputFormat = new UserParametersTimestampInputFormatList(this, "timestamp_input_format", false);
  public get timestampInputFormat() {
    return this._timestampInputFormat;
  }

  // timestamp_ltz_output_format - computed: true, optional: false, required: false
  private _timestampLtzOutputFormat = new UserParametersTimestampLtzOutputFormatList(this, "timestamp_ltz_output_format", false);
  public get timestampLtzOutputFormat() {
    return this._timestampLtzOutputFormat;
  }

  // timestamp_ntz_output_format - computed: true, optional: false, required: false
  private _timestampNtzOutputFormat = new UserParametersTimestampNtzOutputFormatList(this, "timestamp_ntz_output_format", false);
  public get timestampNtzOutputFormat() {
    return this._timestampNtzOutputFormat;
  }

  // timestamp_output_format - computed: true, optional: false, required: false
  private _timestampOutputFormat = new UserParametersTimestampOutputFormatList(this, "timestamp_output_format", false);
  public get timestampOutputFormat() {
    return this._timestampOutputFormat;
  }

  // timestamp_type_mapping - computed: true, optional: false, required: false
  private _timestampTypeMapping = new UserParametersTimestampTypeMappingList(this, "timestamp_type_mapping", false);
  public get timestampTypeMapping() {
    return this._timestampTypeMapping;
  }

  // timestamp_tz_output_format - computed: true, optional: false, required: false
  private _timestampTzOutputFormat = new UserParametersTimestampTzOutputFormatList(this, "timestamp_tz_output_format", false);
  public get timestampTzOutputFormat() {
    return this._timestampTzOutputFormat;
  }

  // timezone - computed: true, optional: false, required: false
  private _timezone = new UserParametersTimezoneList(this, "timezone", false);
  public get timezone() {
    return this._timezone;
  }

  // trace_level - computed: true, optional: false, required: false
  private _traceLevel = new UserParametersTraceLevelList(this, "trace_level", false);
  public get traceLevel() {
    return this._traceLevel;
  }

  // transaction_abort_on_error - computed: true, optional: false, required: false
  private _transactionAbortOnError = new UserParametersTransactionAbortOnErrorList(this, "transaction_abort_on_error", false);
  public get transactionAbortOnError() {
    return this._transactionAbortOnError;
  }

  // transaction_default_isolation_level - computed: true, optional: false, required: false
  private _transactionDefaultIsolationLevel = new UserParametersTransactionDefaultIsolationLevelList(this, "transaction_default_isolation_level", false);
  public get transactionDefaultIsolationLevel() {
    return this._transactionDefaultIsolationLevel;
  }

  // two_digit_century_start - computed: true, optional: false, required: false
  private _twoDigitCenturyStart = new UserParametersTwoDigitCenturyStartList(this, "two_digit_century_start", false);
  public get twoDigitCenturyStart() {
    return this._twoDigitCenturyStart;
  }

  // unsupported_ddl_action - computed: true, optional: false, required: false
  private _unsupportedDdlAction = new UserParametersUnsupportedDdlActionList(this, "unsupported_ddl_action", false);
  public get unsupportedDdlAction() {
    return this._unsupportedDdlAction;
  }

  // use_cached_result - computed: true, optional: false, required: false
  private _useCachedResult = new UserParametersUseCachedResultList(this, "use_cached_result", false);
  public get useCachedResult() {
    return this._useCachedResult;
  }

  // week_of_year_policy - computed: true, optional: false, required: false
  private _weekOfYearPolicy = new UserParametersWeekOfYearPolicyList(this, "week_of_year_policy", false);
  public get weekOfYearPolicy() {
    return this._weekOfYearPolicy;
  }

  // week_start - computed: true, optional: false, required: false
  private _weekStart = new UserParametersWeekStartList(this, "week_start", false);
  public get weekStart() {
    return this._weekStart;
  }
}

export class UserParametersList extends cdktf.ComplexList {

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
  public get(index: number): UserParametersOutputReference {
    return new UserParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserShowOutput {
}

export function userShowOutputToTerraform(struct?: UserShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function userShowOutputToHclTerraform(struct?: UserShowOutput): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class UserShowOutputOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): UserShowOutput | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: UserShowOutput | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // comment - computed: true, optional: false, required: false
  public get comment() {
    return this.getStringAttribute('comment');
  }

  // created_on - computed: true, optional: false, required: false
  public get createdOn() {
    return this.getStringAttribute('created_on');
  }

  // days_to_expiry - computed: true, optional: false, required: false
  public get daysToExpiry() {
    return this.getStringAttribute('days_to_expiry');
  }

  // default_namespace - computed: true, optional: false, required: false
  public get defaultNamespace() {
    return this.getStringAttribute('default_namespace');
  }

  // default_role - computed: true, optional: false, required: false
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }

  // default_secondary_roles - computed: true, optional: false, required: false
  public get defaultSecondaryRoles() {
    return this.getStringAttribute('default_secondary_roles');
  }

  // default_warehouse - computed: true, optional: false, required: false
  public get defaultWarehouse() {
    return this.getStringAttribute('default_warehouse');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // email - computed: true, optional: false, required: false
  public get email() {
    return this.getStringAttribute('email');
  }

  // expires_at_time - computed: true, optional: false, required: false
  public get expiresAtTime() {
    return this.getStringAttribute('expires_at_time');
  }

  // ext_authn_duo - computed: true, optional: false, required: false
  public get extAuthnDuo() {
    return this.getBooleanAttribute('ext_authn_duo');
  }

  // ext_authn_uid - computed: true, optional: false, required: false
  public get extAuthnUid() {
    return this.getStringAttribute('ext_authn_uid');
  }

  // first_name - computed: true, optional: false, required: false
  public get firstName() {
    return this.getStringAttribute('first_name');
  }

  // has_mfa - computed: true, optional: false, required: false
  public get hasMfa() {
    return this.getBooleanAttribute('has_mfa');
  }

  // has_password - computed: true, optional: false, required: false
  public get hasPassword() {
    return this.getBooleanAttribute('has_password');
  }

  // has_rsa_public_key - computed: true, optional: false, required: false
  public get hasRsaPublicKey() {
    return this.getBooleanAttribute('has_rsa_public_key');
  }

  // last_name - computed: true, optional: false, required: false
  public get lastName() {
    return this.getStringAttribute('last_name');
  }

  // last_success_login - computed: true, optional: false, required: false
  public get lastSuccessLogin() {
    return this.getStringAttribute('last_success_login');
  }

  // locked_until_time - computed: true, optional: false, required: false
  public get lockedUntilTime() {
    return this.getStringAttribute('locked_until_time');
  }

  // login_name - computed: true, optional: false, required: false
  public get loginName() {
    return this.getStringAttribute('login_name');
  }

  // mins_to_bypass_mfa - computed: true, optional: false, required: false
  public get minsToBypassMfa() {
    return this.getStringAttribute('mins_to_bypass_mfa');
  }

  // mins_to_unlock - computed: true, optional: false, required: false
  public get minsToUnlock() {
    return this.getStringAttribute('mins_to_unlock');
  }

  // must_change_password - computed: true, optional: false, required: false
  public get mustChangePassword() {
    return this.getBooleanAttribute('must_change_password');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // owner - computed: true, optional: false, required: false
  public get owner() {
    return this.getStringAttribute('owner');
  }

  // snowflake_lock - computed: true, optional: false, required: false
  public get snowflakeLock() {
    return this.getBooleanAttribute('snowflake_lock');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class UserShowOutputList extends cdktf.ComplexList {

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
  public get(index: number): UserShowOutputOutputReference {
    return new UserShowOutputOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface UserTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#create User#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#delete User#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#read User#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#update User#update}
  */
  readonly update?: string;
}

export function userTimeoutsToTerraform(struct?: UserTimeouts | cdktf.IResolvable): any {
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


export function userTimeoutsToHclTerraform(struct?: UserTimeouts | cdktf.IResolvable): any {
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

export class UserTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): UserTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: UserTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user snowflake_user}
*/
export class User extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_user";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a User resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the User to import
  * @param importFromId The id of the existing User that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the User to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_user", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/user snowflake_user} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserConfig
  */
  public constructor(scope: Construct, id: string, config: UserConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_user',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '2.10.1',
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
    this._dateInputFormat = config.dateInputFormat;
    this._dateOutputFormat = config.dateOutputFormat;
    this._daysToExpiry = config.daysToExpiry;
    this._defaultNamespace = config.defaultNamespace;
    this._defaultRole = config.defaultRole;
    this._defaultSecondaryRolesOption = config.defaultSecondaryRolesOption;
    this._defaultWarehouse = config.defaultWarehouse;
    this._disableMfa = config.disableMfa;
    this._disabled = config.disabled;
    this._displayName = config.displayName;
    this._email = config.email;
    this._enableUnloadPhysicalTypeOptimization = config.enableUnloadPhysicalTypeOptimization;
    this._enableUnredactedQuerySyntaxError = config.enableUnredactedQuerySyntaxError;
    this._errorOnNondeterministicMerge = config.errorOnNondeterministicMerge;
    this._errorOnNondeterministicUpdate = config.errorOnNondeterministicUpdate;
    this._firstName = config.firstName;
    this._geographyOutputFormat = config.geographyOutputFormat;
    this._geometryOutputFormat = config.geometryOutputFormat;
    this._id = config.id;
    this._jdbcTreatDecimalAsInt = config.jdbcTreatDecimalAsInt;
    this._jdbcTreatTimestampNtzAsUtc = config.jdbcTreatTimestampNtzAsUtc;
    this._jdbcUseSessionTimezone = config.jdbcUseSessionTimezone;
    this._jsonIndent = config.jsonIndent;
    this._lastName = config.lastName;
    this._lockTimeout = config.lockTimeout;
    this._logLevel = config.logLevel;
    this._loginName = config.loginName;
    this._middleName = config.middleName;
    this._minsToBypassMfa = config.minsToBypassMfa;
    this._minsToUnlock = config.minsToUnlock;
    this._multiStatementCount = config.multiStatementCount;
    this._mustChangePassword = config.mustChangePassword;
    this._name = config.name;
    this._networkPolicy = config.networkPolicy;
    this._noorderSequenceAsDefault = config.noorderSequenceAsDefault;
    this._odbcTreatDecimalAsInt = config.odbcTreatDecimalAsInt;
    this._password = config.password;
    this._preventUnloadToInternalStages = config.preventUnloadToInternalStages;
    this._queryTag = config.queryTag;
    this._quotedIdentifiersIgnoreCase = config.quotedIdentifiersIgnoreCase;
    this._rowsPerResultset = config.rowsPerResultset;
    this._rsaPublicKey = config.rsaPublicKey;
    this._rsaPublicKey2 = config.rsaPublicKey2;
    this._s3StageVpceDnsName = config.s3StageVpceDnsName;
    this._searchPath = config.searchPath;
    this._simulatedDataSharingConsumer = config.simulatedDataSharingConsumer;
    this._statementQueuedTimeoutInSeconds = config.statementQueuedTimeoutInSeconds;
    this._statementTimeoutInSeconds = config.statementTimeoutInSeconds;
    this._strictJsonOutput = config.strictJsonOutput;
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
    this._weekOfYearPolicy = config.weekOfYearPolicy;
    this._weekStart = config.weekStart;
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

  // days_to_expiry - computed: false, optional: true, required: false
  private _daysToExpiry?: number; 
  public get daysToExpiry() {
    return this.getNumberAttribute('days_to_expiry');
  }
  public set daysToExpiry(value: number) {
    this._daysToExpiry = value;
  }
  public resetDaysToExpiry() {
    this._daysToExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysToExpiryInput() {
    return this._daysToExpiry;
  }

  // default_namespace - computed: false, optional: true, required: false
  private _defaultNamespace?: string; 
  public get defaultNamespace() {
    return this.getStringAttribute('default_namespace');
  }
  public set defaultNamespace(value: string) {
    this._defaultNamespace = value;
  }
  public resetDefaultNamespace() {
    this._defaultNamespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNamespaceInput() {
    return this._defaultNamespace;
  }

  // default_role - computed: false, optional: true, required: false
  private _defaultRole?: string; 
  public get defaultRole() {
    return this.getStringAttribute('default_role');
  }
  public set defaultRole(value: string) {
    this._defaultRole = value;
  }
  public resetDefaultRole() {
    this._defaultRole = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultRoleInput() {
    return this._defaultRole;
  }

  // default_secondary_roles_option - computed: false, optional: true, required: false
  private _defaultSecondaryRolesOption?: string; 
  public get defaultSecondaryRolesOption() {
    return this.getStringAttribute('default_secondary_roles_option');
  }
  public set defaultSecondaryRolesOption(value: string) {
    this._defaultSecondaryRolesOption = value;
  }
  public resetDefaultSecondaryRolesOption() {
    this._defaultSecondaryRolesOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSecondaryRolesOptionInput() {
    return this._defaultSecondaryRolesOption;
  }

  // default_warehouse - computed: false, optional: true, required: false
  private _defaultWarehouse?: string; 
  public get defaultWarehouse() {
    return this.getStringAttribute('default_warehouse');
  }
  public set defaultWarehouse(value: string) {
    this._defaultWarehouse = value;
  }
  public resetDefaultWarehouse() {
    this._defaultWarehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultWarehouseInput() {
    return this._defaultWarehouse;
  }

  // disable_mfa - computed: false, optional: true, required: false
  private _disableMfa?: string; 
  public get disableMfa() {
    return this.getStringAttribute('disable_mfa');
  }
  public set disableMfa(value: string) {
    this._disableMfa = value;
  }
  public resetDisableMfa() {
    this._disableMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableMfaInput() {
    return this._disableMfa;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: string; 
  public get disabled() {
    return this.getStringAttribute('disabled');
  }
  public set disabled(value: string) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // email - computed: false, optional: true, required: false
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
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

  // enable_unredacted_query_syntax_error - computed: true, optional: true, required: false
  private _enableUnredactedQuerySyntaxError?: boolean | cdktf.IResolvable; 
  public get enableUnredactedQuerySyntaxError() {
    return this.getBooleanAttribute('enable_unredacted_query_syntax_error');
  }
  public set enableUnredactedQuerySyntaxError(value: boolean | cdktf.IResolvable) {
    this._enableUnredactedQuerySyntaxError = value;
  }
  public resetEnableUnredactedQuerySyntaxError() {
    this._enableUnredactedQuerySyntaxError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnredactedQuerySyntaxErrorInput() {
    return this._enableUnredactedQuerySyntaxError;
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

  // first_name - computed: false, optional: true, required: false
  private _firstName?: string; 
  public get firstName() {
    return this.getStringAttribute('first_name');
  }
  public set firstName(value: string) {
    this._firstName = value;
  }
  public resetFirstName() {
    this._firstName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName;
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

  // jdbc_treat_decimal_as_int - computed: true, optional: true, required: false
  private _jdbcTreatDecimalAsInt?: boolean | cdktf.IResolvable; 
  public get jdbcTreatDecimalAsInt() {
    return this.getBooleanAttribute('jdbc_treat_decimal_as_int');
  }
  public set jdbcTreatDecimalAsInt(value: boolean | cdktf.IResolvable) {
    this._jdbcTreatDecimalAsInt = value;
  }
  public resetJdbcTreatDecimalAsInt() {
    this._jdbcTreatDecimalAsInt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jdbcTreatDecimalAsIntInput() {
    return this._jdbcTreatDecimalAsInt;
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

  // last_name - computed: false, optional: true, required: false
  private _lastName?: string; 
  public get lastName() {
    return this.getStringAttribute('last_name');
  }
  public set lastName(value: string) {
    this._lastName = value;
  }
  public resetLastName() {
    this._lastName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName;
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

  // login_name - computed: false, optional: true, required: false
  private _loginName?: string; 
  public get loginName() {
    return this.getStringAttribute('login_name');
  }
  public set loginName(value: string) {
    this._loginName = value;
  }
  public resetLoginName() {
    this._loginName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameInput() {
    return this._loginName;
  }

  // middle_name - computed: false, optional: true, required: false
  private _middleName?: string; 
  public get middleName() {
    return this.getStringAttribute('middle_name');
  }
  public set middleName(value: string) {
    this._middleName = value;
  }
  public resetMiddleName() {
    this._middleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName;
  }

  // mins_to_bypass_mfa - computed: false, optional: true, required: false
  private _minsToBypassMfa?: number; 
  public get minsToBypassMfa() {
    return this.getNumberAttribute('mins_to_bypass_mfa');
  }
  public set minsToBypassMfa(value: number) {
    this._minsToBypassMfa = value;
  }
  public resetMinsToBypassMfa() {
    this._minsToBypassMfa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minsToBypassMfaInput() {
    return this._minsToBypassMfa;
  }

  // mins_to_unlock - computed: false, optional: true, required: false
  private _minsToUnlock?: number; 
  public get minsToUnlock() {
    return this.getNumberAttribute('mins_to_unlock');
  }
  public set minsToUnlock(value: number) {
    this._minsToUnlock = value;
  }
  public resetMinsToUnlock() {
    this._minsToUnlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minsToUnlockInput() {
    return this._minsToUnlock;
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

  // must_change_password - computed: false, optional: true, required: false
  private _mustChangePassword?: string; 
  public get mustChangePassword() {
    return this.getStringAttribute('must_change_password');
  }
  public set mustChangePassword(value: string) {
    this._mustChangePassword = value;
  }
  public resetMustChangePassword() {
    this._mustChangePassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mustChangePasswordInput() {
    return this._mustChangePassword;
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

  // network_policy - computed: true, optional: true, required: false
  private _networkPolicy?: string; 
  public get networkPolicy() {
    return this.getStringAttribute('network_policy');
  }
  public set networkPolicy(value: string) {
    this._networkPolicy = value;
  }
  public resetNetworkPolicy() {
    this._networkPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPolicyInput() {
    return this._networkPolicy;
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
  private _parameters = new UserParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // prevent_unload_to_internal_stages - computed: true, optional: true, required: false
  private _preventUnloadToInternalStages?: boolean | cdktf.IResolvable; 
  public get preventUnloadToInternalStages() {
    return this.getBooleanAttribute('prevent_unload_to_internal_stages');
  }
  public set preventUnloadToInternalStages(value: boolean | cdktf.IResolvable) {
    this._preventUnloadToInternalStages = value;
  }
  public resetPreventUnloadToInternalStages() {
    this._preventUnloadToInternalStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUnloadToInternalStagesInput() {
    return this._preventUnloadToInternalStages;
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

  // rsa_public_key - computed: false, optional: true, required: false
  private _rsaPublicKey?: string; 
  public get rsaPublicKey() {
    return this.getStringAttribute('rsa_public_key');
  }
  public set rsaPublicKey(value: string) {
    this._rsaPublicKey = value;
  }
  public resetRsaPublicKey() {
    this._rsaPublicKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublicKeyInput() {
    return this._rsaPublicKey;
  }

  // rsa_public_key_2 - computed: false, optional: true, required: false
  private _rsaPublicKey2?: string; 
  public get rsaPublicKey2() {
    return this.getStringAttribute('rsa_public_key_2');
  }
  public set rsaPublicKey2(value: string) {
    this._rsaPublicKey2 = value;
  }
  public resetRsaPublicKey2() {
    this._rsaPublicKey2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rsaPublicKey2Input() {
    return this._rsaPublicKey2;
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
  private _showOutput = new UserShowOutputList(this, "show_output", false);
  public get showOutput() {
    return this._showOutput;
  }

  // simulated_data_sharing_consumer - computed: true, optional: true, required: false
  private _simulatedDataSharingConsumer?: string; 
  public get simulatedDataSharingConsumer() {
    return this.getStringAttribute('simulated_data_sharing_consumer');
  }
  public set simulatedDataSharingConsumer(value: string) {
    this._simulatedDataSharingConsumer = value;
  }
  public resetSimulatedDataSharingConsumer() {
    this._simulatedDataSharingConsumer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get simulatedDataSharingConsumerInput() {
    return this._simulatedDataSharingConsumer;
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

  // user_type - computed: true, optional: false, required: false
  public get userType() {
    return this.getStringAttribute('user_type');
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

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new UserTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: UserTimeouts) {
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
      date_input_format: cdktf.stringToTerraform(this._dateInputFormat),
      date_output_format: cdktf.stringToTerraform(this._dateOutputFormat),
      days_to_expiry: cdktf.numberToTerraform(this._daysToExpiry),
      default_namespace: cdktf.stringToTerraform(this._defaultNamespace),
      default_role: cdktf.stringToTerraform(this._defaultRole),
      default_secondary_roles_option: cdktf.stringToTerraform(this._defaultSecondaryRolesOption),
      default_warehouse: cdktf.stringToTerraform(this._defaultWarehouse),
      disable_mfa: cdktf.stringToTerraform(this._disableMfa),
      disabled: cdktf.stringToTerraform(this._disabled),
      display_name: cdktf.stringToTerraform(this._displayName),
      email: cdktf.stringToTerraform(this._email),
      enable_unload_physical_type_optimization: cdktf.booleanToTerraform(this._enableUnloadPhysicalTypeOptimization),
      enable_unredacted_query_syntax_error: cdktf.booleanToTerraform(this._enableUnredactedQuerySyntaxError),
      error_on_nondeterministic_merge: cdktf.booleanToTerraform(this._errorOnNondeterministicMerge),
      error_on_nondeterministic_update: cdktf.booleanToTerraform(this._errorOnNondeterministicUpdate),
      first_name: cdktf.stringToTerraform(this._firstName),
      geography_output_format: cdktf.stringToTerraform(this._geographyOutputFormat),
      geometry_output_format: cdktf.stringToTerraform(this._geometryOutputFormat),
      id: cdktf.stringToTerraform(this._id),
      jdbc_treat_decimal_as_int: cdktf.booleanToTerraform(this._jdbcTreatDecimalAsInt),
      jdbc_treat_timestamp_ntz_as_utc: cdktf.booleanToTerraform(this._jdbcTreatTimestampNtzAsUtc),
      jdbc_use_session_timezone: cdktf.booleanToTerraform(this._jdbcUseSessionTimezone),
      json_indent: cdktf.numberToTerraform(this._jsonIndent),
      last_name: cdktf.stringToTerraform(this._lastName),
      lock_timeout: cdktf.numberToTerraform(this._lockTimeout),
      log_level: cdktf.stringToTerraform(this._logLevel),
      login_name: cdktf.stringToTerraform(this._loginName),
      middle_name: cdktf.stringToTerraform(this._middleName),
      mins_to_bypass_mfa: cdktf.numberToTerraform(this._minsToBypassMfa),
      mins_to_unlock: cdktf.numberToTerraform(this._minsToUnlock),
      multi_statement_count: cdktf.numberToTerraform(this._multiStatementCount),
      must_change_password: cdktf.stringToTerraform(this._mustChangePassword),
      name: cdktf.stringToTerraform(this._name),
      network_policy: cdktf.stringToTerraform(this._networkPolicy),
      noorder_sequence_as_default: cdktf.booleanToTerraform(this._noorderSequenceAsDefault),
      odbc_treat_decimal_as_int: cdktf.booleanToTerraform(this._odbcTreatDecimalAsInt),
      password: cdktf.stringToTerraform(this._password),
      prevent_unload_to_internal_stages: cdktf.booleanToTerraform(this._preventUnloadToInternalStages),
      query_tag: cdktf.stringToTerraform(this._queryTag),
      quoted_identifiers_ignore_case: cdktf.booleanToTerraform(this._quotedIdentifiersIgnoreCase),
      rows_per_resultset: cdktf.numberToTerraform(this._rowsPerResultset),
      rsa_public_key: cdktf.stringToTerraform(this._rsaPublicKey),
      rsa_public_key_2: cdktf.stringToTerraform(this._rsaPublicKey2),
      s3_stage_vpce_dns_name: cdktf.stringToTerraform(this._s3StageVpceDnsName),
      search_path: cdktf.stringToTerraform(this._searchPath),
      simulated_data_sharing_consumer: cdktf.stringToTerraform(this._simulatedDataSharingConsumer),
      statement_queued_timeout_in_seconds: cdktf.numberToTerraform(this._statementQueuedTimeoutInSeconds),
      statement_timeout_in_seconds: cdktf.numberToTerraform(this._statementTimeoutInSeconds),
      strict_json_output: cdktf.booleanToTerraform(this._strictJsonOutput),
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
      week_of_year_policy: cdktf.numberToTerraform(this._weekOfYearPolicy),
      week_start: cdktf.numberToTerraform(this._weekStart),
      timeouts: userTimeoutsToTerraform(this._timeouts.internalValue),
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
      days_to_expiry: {
        value: cdktf.numberToHclTerraform(this._daysToExpiry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_namespace: {
        value: cdktf.stringToHclTerraform(this._defaultNamespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_role: {
        value: cdktf.stringToHclTerraform(this._defaultRole),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_secondary_roles_option: {
        value: cdktf.stringToHclTerraform(this._defaultSecondaryRolesOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_warehouse: {
        value: cdktf.stringToHclTerraform(this._defaultWarehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_mfa: {
        value: cdktf.stringToHclTerraform(this._disableMfa),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disabled: {
        value: cdktf.stringToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      enable_unredacted_query_syntax_error: {
        value: cdktf.booleanToHclTerraform(this._enableUnredactedQuerySyntaxError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      first_name: {
        value: cdktf.stringToHclTerraform(this._firstName),
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
      jdbc_treat_decimal_as_int: {
        value: cdktf.booleanToHclTerraform(this._jdbcTreatDecimalAsInt),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      last_name: {
        value: cdktf.stringToHclTerraform(this._lastName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      login_name: {
        value: cdktf.stringToHclTerraform(this._loginName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      middle_name: {
        value: cdktf.stringToHclTerraform(this._middleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mins_to_bypass_mfa: {
        value: cdktf.numberToHclTerraform(this._minsToBypassMfa),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mins_to_unlock: {
        value: cdktf.numberToHclTerraform(this._minsToUnlock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multi_statement_count: {
        value: cdktf.numberToHclTerraform(this._multiStatementCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      must_change_password: {
        value: cdktf.stringToHclTerraform(this._mustChangePassword),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      network_policy: {
        value: cdktf.stringToHclTerraform(this._networkPolicy),
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
      password: {
        value: cdktf.stringToHclTerraform(this._password),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prevent_unload_to_internal_stages: {
        value: cdktf.booleanToHclTerraform(this._preventUnloadToInternalStages),
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
      rsa_public_key: {
        value: cdktf.stringToHclTerraform(this._rsaPublicKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rsa_public_key_2: {
        value: cdktf.stringToHclTerraform(this._rsaPublicKey2),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      s3_stage_vpce_dns_name: {
        value: cdktf.stringToHclTerraform(this._s3StageVpceDnsName),
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
      simulated_data_sharing_consumer: {
        value: cdktf.stringToHclTerraform(this._simulatedDataSharingConsumer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      timeouts: {
        value: userTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "UserTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
