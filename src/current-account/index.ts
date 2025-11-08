/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CurrentAccountConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#abort_detached_query CurrentAccount#abort_detached_query}
  */
  readonly abortDetachedQuery?: boolean | cdktf.IResolvable;
  /**
  * Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#active_python_profiler CurrentAccount#active_python_profiler}
  */
  readonly activePythonProfiler?: string;
  /**
  * Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#allow_client_mfa_caching CurrentAccount#allow_client_mfa_caching}
  */
  readonly allowClientMfaCaching?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#allow_id_token CurrentAccount#allow_id_token}
  */
  readonly allowIdToken?: boolean | cdktf.IResolvable;
  /**
  * Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account. For more information about this resource, see [docs](./authentication_policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#authentication_policy CurrentAccount#authentication_policy}
  */
  readonly authenticationPolicy?: string;
  /**
  * Specifies whether autocommit is enabled for the session. Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#autocommit CurrentAccount#autocommit}
  */
  readonly autocommit?: boolean | cdktf.IResolvable;
  /**
  * Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#base_location_prefix CurrentAccount#base_location_prefix}
  */
  readonly baseLocationPrefix?: string;
  /**
  * The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#binary_input_format CurrentAccount#binary_input_format}
  */
  readonly binaryInputFormat?: string;
  /**
  * The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#binary_output_format CurrentAccount#binary_output_format}
  */
  readonly binaryOutputFormat?: string;
  /**
  * Specifies the catalog for Apache Iceberg™ tables. For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#catalog CurrentAccount#catalog}
  */
  readonly catalog?: string;
  /**
  * Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#catalog_sync CurrentAccount#catalog_sync}
  */
  readonly catalogSync?: string;
  /**
  * Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_enable_log_info_statement_parameters CurrentAccount#client_enable_log_info_statement_parameters}
  */
  readonly clientEnableLogInfoStatementParameters?: boolean | cdktf.IResolvable;
  /**
  * Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_encryption_key_size CurrentAccount#client_encryption_key_size}
  */
  readonly clientEncryptionKeySize?: number;
  /**
  * Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_memory_limit CurrentAccount#client_memory_limit}
  */
  readonly clientMemoryLimit?: number;
  /**
  * For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_metadata_request_use_connection_ctx CurrentAccount#client_metadata_request_use_connection_ctx}
  */
  readonly clientMetadataRequestUseConnectionCtx?: boolean | cdktf.IResolvable;
  /**
  * For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_metadata_use_session_database CurrentAccount#client_metadata_use_session_database}
  */
  readonly clientMetadataUseSessionDatabase?: boolean | cdktf.IResolvable;
  /**
  * Parameter that specifies the number of threads used by the client to pre-fetch large result sets. The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_prefetch_threads CurrentAccount#client_prefetch_threads}
  */
  readonly clientPrefetchThreads?: number;
  /**
  * Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_result_chunk_size CurrentAccount#client_result_chunk_size}
  */
  readonly clientResultChunkSize?: number;
  /**
  * Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_result_column_case_insensitive CurrentAccount#client_result_column_case_insensitive}
  */
  readonly clientResultColumnCaseInsensitive?: boolean | cdktf.IResolvable;
  /**
  * Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_session_keep_alive CurrentAccount#client_session_keep_alive}
  */
  readonly clientSessionKeepAlive?: boolean | cdktf.IResolvable;
  /**
  * Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_session_keep_alive_heartbeat_frequency CurrentAccount#client_session_keep_alive_heartbeat_frequency}
  */
  readonly clientSessionKeepAliveHeartbeatFrequency?: number;
  /**
  * Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#client_timestamp_type_mapping CurrentAccount#client_timestamp_type_mapping}
  */
  readonly clientTimestampTypeMapping?: string;
  /**
  * Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#cortex_enabled_cross_region CurrentAccount#cortex_enabled_cross_region}
  */
  readonly cortexEnabledCrossRegion?: string;
  /**
  * Specifies the models that users in the account can access. Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#cortex_models_allowlist CurrentAccount#cortex_models_allowlist}
  */
  readonly cortexModelsAllowlist?: string;
  /**
  * Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#csv_timestamp_format CurrentAccount#csv_timestamp_format}
  */
  readonly csvTimestampFormat?: string;
  /**
  * Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#data_retention_time_in_days CurrentAccount#data_retention_time_in_days}
  */
  readonly dataRetentionTimeInDays?: number;
  /**
  * Specifies the input format for the DATE data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#date_input_format CurrentAccount#date_input_format}
  */
  readonly dateInputFormat?: string;
  /**
  * Specifies the display format for the DATE data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#date_output_format CurrentAccount#date_output_format}
  */
  readonly dateOutputFormat?: string;
  /**
  * Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#default_ddl_collation CurrentAccount#default_ddl_collation}
  */
  readonly defaultDdlCollation?: string;
  /**
  * Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#default_notebook_compute_pool_cpu CurrentAccount#default_notebook_compute_pool_cpu}
  */
  readonly defaultNotebookComputePoolCpu?: string;
  /**
  * Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#default_notebook_compute_pool_gpu CurrentAccount#default_notebook_compute_pool_gpu}
  */
  readonly defaultNotebookComputePoolGpu?: string;
  /**
  * Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#default_null_ordering CurrentAccount#default_null_ordering}
  */
  readonly defaultNullOrdering?: string;
  /**
  * Specifies the name of the default warehouse to use when creating a notebook. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#default_streamlit_notebook_warehouse CurrentAccount#default_streamlit_notebook_warehouse}
  */
  readonly defaultStreamlitNotebookWarehouse?: string;
  /**
  * Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#disable_ui_download_button CurrentAccount#disable_ui_download_button}
  */
  readonly disableUiDownloadButton?: boolean | cdktf.IResolvable;
  /**
  * Controls whether users in an account can grant privileges directly to other users. Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#disable_user_privilege_grants CurrentAccount#disable_user_privilege_grants}
  */
  readonly disableUserPrivilegeGrants?: boolean | cdktf.IResolvable;
  /**
  * Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_automatic_sensitive_data_classification_log CurrentAccount#enable_automatic_sensitive_data_classification_log}
  */
  readonly enableAutomaticSensitiveDataClassificationLog?: boolean | cdktf.IResolvable;
  /**
  * Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_egress_cost_optimizer CurrentAccount#enable_egress_cost_optimizer}
  */
  readonly enableEgressCostOptimizer?: boolean | cdktf.IResolvable;
  /**
  * Determines the login flow for users. When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_identifier_first_login CurrentAccount#enable_identifier_first_login}
  */
  readonly enableIdentifierFirstLogin?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_internal_stages_privatelink CurrentAccount#enable_internal_stages_privatelink}
  */
  readonly enableInternalStagesPrivatelink?: boolean | cdktf.IResolvable;
  /**
  * Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}
  */
  readonly enableTriSecretAndRekeyOptOutForImageRepository?: boolean | cdktf.IResolvable;
  /**
  * Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}
  */
  readonly enableTriSecretAndRekeyOptOutForSpcsBlockStorage?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_unhandled_exceptions_reporting CurrentAccount#enable_unhandled_exceptions_reporting}
  */
  readonly enableUnhandledExceptionsReporting?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_unload_physical_type_optimization CurrentAccount#enable_unload_physical_type_optimization}
  */
  readonly enableUnloadPhysicalTypeOptimization?: boolean | cdktf.IResolvable;
  /**
  * Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_unredacted_query_syntax_error CurrentAccount#enable_unredacted_query_syntax_error}
  */
  readonly enableUnredactedQuerySyntaxError?: boolean | cdktf.IResolvable;
  /**
  * Controls whether error messages related to secure objects are redacted in metadata. For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enable_unredacted_secure_object_error CurrentAccount#enable_unredacted_secure_object_error}
  */
  readonly enableUnredactedSecureObjectError?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#enforce_network_rules_for_internal_stages CurrentAccount#enforce_network_rules_for_internal_stages}
  */
  readonly enforceNetworkRulesForInternalStages?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#error_on_nondeterministic_merge CurrentAccount#error_on_nondeterministic_merge}
  */
  readonly errorOnNondeterministicMerge?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#error_on_nondeterministic_update CurrentAccount#error_on_nondeterministic_update}
  */
  readonly errorOnNondeterministicUpdate?: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#event_table CurrentAccount#event_table}
  */
  readonly eventTable?: string;
  /**
  * Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#external_oauth_add_privileged_roles_to_blocked_list CurrentAccount#external_oauth_add_privileged_roles_to_blocked_list}
  */
  readonly externalOauthAddPrivilegedRolesToBlockedList?: boolean | cdktf.IResolvable;
  /**
  * Specifies the external volume for Apache Iceberg™ tables. For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#external_volume CurrentAccount#external_volume}
  */
  readonly externalVolume?: string;
  /**
  * Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#feature_policy CurrentAccount#feature_policy}
  */
  readonly featurePolicy?: string;
  /**
  * Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#geography_output_format CurrentAccount#geography_output_format}
  */
  readonly geographyOutputFormat?: string;
  /**
  * Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#geometry_output_format CurrentAccount#geometry_output_format}
  */
  readonly geometryOutputFormat?: string;
  /**
  * Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#hybrid_table_lock_timeout CurrentAccount#hybrid_table_lock_timeout}
  */
  readonly hybridTableLockTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#id CurrentAccount#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#initial_replication_size_limit_in_tb CurrentAccount#initial_replication_size_limit_in_tb}
  */
  readonly initialReplicationSizeLimitInTb?: string;
  /**
  * Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#jdbc_treat_decimal_as_int CurrentAccount#jdbc_treat_decimal_as_int}
  */
  readonly jdbcTreatDecimalAsInt?: boolean | cdktf.IResolvable;
  /**
  * Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#jdbc_treat_timestamp_ntz_as_utc CurrentAccount#jdbc_treat_timestamp_ntz_as_utc}
  */
  readonly jdbcTreatTimestampNtzAsUtc?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#jdbc_use_session_timezone CurrentAccount#jdbc_use_session_timezone}
  */
  readonly jdbcUseSessionTimezone?: boolean | cdktf.IResolvable;
  /**
  * Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#js_treat_integer_as_bigint CurrentAccount#js_treat_integer_as_bigint}
  */
  readonly jsTreatIntegerAsBigint?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of blank spaces to indent each new element in JSON output in the session. Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#json_indent CurrentAccount#json_indent}
  */
  readonly jsonIndent?: number;
  /**
  * Sets the time interval used to refresh the application package based data products to other regions. For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#listing_auto_fulfillment_replication_refresh_schedule CurrentAccount#listing_auto_fulfillment_replication_refresh_schedule}
  */
  readonly listingAutoFulfillmentReplicationRefreshSchedule?: string;
  /**
  * Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#lock_timeout CurrentAccount#lock_timeout}
  */
  readonly lockTimeout?: number;
  /**
  * Specifies the severity level of messages that should be ingested and made available in the active event table. Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#log_level CurrentAccount#log_level}
  */
  readonly logLevel?: string;
  /**
  * Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#max_concurrency_level CurrentAccount#max_concurrency_level}
  */
  readonly maxConcurrencyLevel?: number;
  /**
  * Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#max_data_extension_time_in_days CurrentAccount#max_data_extension_time_in_days}
  */
  readonly maxDataExtensionTimeInDays?: number;
  /**
  * Controls how metrics data is ingested into the event table. For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#metric_level CurrentAccount#metric_level}
  */
  readonly metricLevel?: string;
  /**
  * Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#min_data_retention_time_in_days CurrentAccount#min_data_retention_time_in_days}
  */
  readonly minDataRetentionTimeInDays?: number;
  /**
  * Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#multi_statement_count CurrentAccount#multi_statement_count}
  */
  readonly multiStatementCount?: number;
  /**
  * Specifies the network policy to enforce for your account. Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#network_policy CurrentAccount#network_policy}
  */
  readonly networkPolicy?: string;
  /**
  * Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#noorder_sequence_as_default CurrentAccount#noorder_sequence_as_default}
  */
  readonly noorderSequenceAsDefault?: boolean | cdktf.IResolvable;
  /**
  * Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#oauth_add_privileged_roles_to_blocked_list CurrentAccount#oauth_add_privileged_roles_to_blocked_list}
  */
  readonly oauthAddPrivilegedRolesToBlockedList?: boolean | cdktf.IResolvable;
  /**
  * Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#odbc_treat_decimal_as_int CurrentAccount#odbc_treat_decimal_as_int}
  */
  readonly odbcTreatDecimalAsInt?: boolean | cdktf.IResolvable;
  /**
  * Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#packages_policy CurrentAccount#packages_policy}
  */
  readonly packagesPolicy?: string;
  /**
  * Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#password_policy CurrentAccount#password_policy}
  */
  readonly passwordPolicy?: string;
  /**
  * It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#periodic_data_rekeying CurrentAccount#periodic_data_rekeying}
  */
  readonly periodicDataRekeying?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#pipe_execution_paused CurrentAccount#pipe_execution_paused}
  */
  readonly pipeExecutionPaused?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#prevent_unload_to_inline_url CurrentAccount#prevent_unload_to_inline_url}
  */
  readonly preventUnloadToInlineUrl?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#prevent_unload_to_internal_stages CurrentAccount#prevent_unload_to_internal_stages}
  */
  readonly preventUnloadToInternalStages?: boolean | cdktf.IResolvable;
  /**
  * Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#python_profiler_modules CurrentAccount#python_profiler_modules}
  */
  readonly pythonProfilerModules?: string;
  /**
  * Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#python_profiler_target_stage CurrentAccount#python_profiler_target_stage}
  */
  readonly pythonProfilerTargetStage?: string;
  /**
  * Optional string that can be used to tag queries and other SQL statements executed within a session. The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#query_tag CurrentAccount#query_tag}
  */
  readonly queryTag?: string;
  /**
  * Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#quoted_identifiers_ignore_case CurrentAccount#quoted_identifiers_ignore_case}
  */
  readonly quotedIdentifiersIgnoreCase?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#replace_invalid_characters CurrentAccount#replace_invalid_characters}
  */
  readonly replaceInvalidCharacters?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#require_storage_integration_for_stage_creation CurrentAccount#require_storage_integration_for_stage_creation}
  */
  readonly requireStorageIntegrationForStageCreation?: boolean | cdktf.IResolvable;
  /**
  * Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#require_storage_integration_for_stage_operation CurrentAccount#require_storage_integration_for_stage_operation}
  */
  readonly requireStorageIntegrationForStageOperation?: boolean | cdktf.IResolvable;
  /**
  * Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#resource_monitor CurrentAccount#resource_monitor}
  */
  readonly resourceMonitor?: string;
  /**
  * Specifies the maximum number of rows returned in a result set. A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#rows_per_resultset CurrentAccount#rows_per_resultset}
  */
  readonly rowsPerResultset?: number;
  /**
  * Specifies the DNS name of an Amazon S3 interface endpoint. Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#s3_stage_vpce_dns_name CurrentAccount#s3_stage_vpce_dns_name}
  */
  readonly s3StageVpceDnsName?: string;
  /**
  * Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#saml_identity_provider CurrentAccount#saml_identity_provider}
  */
  readonly samlIdentityProvider?: string;
  /**
  * Specifies the path to search to resolve unqualified object names in queries. For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#search_path CurrentAccount#search_path}
  */
  readonly searchPath?: string;
  /**
  * Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#serverless_task_max_statement_size CurrentAccount#serverless_task_max_statement_size}
  */
  readonly serverlessTaskMaxStatementSize?: string;
  /**
  * Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#serverless_task_min_statement_size CurrentAccount#serverless_task_min_statement_size}
  */
  readonly serverlessTaskMinStatementSize?: string;
  /**
  * Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#session_policy CurrentAccount#session_policy}
  */
  readonly sessionPolicy?: string;
  /**
  * Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#simulated_data_sharing_consumer CurrentAccount#simulated_data_sharing_consumer}
  */
  readonly simulatedDataSharingConsumer?: string;
  /**
  * This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#sso_login_page CurrentAccount#sso_login_page}
  */
  readonly ssoLoginPage?: boolean | cdktf.IResolvable;
  /**
  * Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#statement_queued_timeout_in_seconds CurrentAccount#statement_queued_timeout_in_seconds}
  */
  readonly statementQueuedTimeoutInSeconds?: number;
  /**
  * Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#statement_timeout_in_seconds CurrentAccount#statement_timeout_in_seconds}
  */
  readonly statementTimeoutInSeconds?: number;
  /**
  * Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#storage_serialization_policy CurrentAccount#storage_serialization_policy}
  */
  readonly storageSerializationPolicy?: string;
  /**
  * This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#strict_json_output CurrentAccount#strict_json_output}
  */
  readonly strictJsonOutput?: boolean | cdktf.IResolvable;
  /**
  * Specifies the number of consecutive failed task runs after which the current task is suspended automatically. The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#suspend_task_after_num_failures CurrentAccount#suspend_task_after_num_failures}
  */
  readonly suspendTaskAfterNumFailures?: number;
  /**
  * Specifies the number of automatic task graph retry attempts. If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#task_auto_retry_attempts CurrentAccount#task_auto_retry_attempts}
  */
  readonly taskAutoRetryAttempts?: number;
  /**
  * Specifies the input format for the TIME data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#time_input_format CurrentAccount#time_input_format}
  */
  readonly timeInputFormat?: string;
  /**
  * Specifies the display format for the TIME data type. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#time_output_format CurrentAccount#time_output_format}
  */
  readonly timeOutputFormat?: string;
  /**
  * Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#timestamp_day_is_always_24h CurrentAccount#timestamp_day_is_always_24h}
  */
  readonly timestampDayIsAlways24H?: boolean | cdktf.IResolvable;
  /**
  * Specifies the input format for the TIMESTAMP data type alias. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#timestamp_input_format CurrentAccount#timestamp_input_format}
  */
  readonly timestampInputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP_LTZ data type. If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#timestamp_ltz_output_format CurrentAccount#timestamp_ltz_output_format}
  */
  readonly timestampLtzOutputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#timestamp_ntz_output_format CurrentAccount#timestamp_ntz_output_format}
  */
  readonly timestampNtzOutputFormat?: string;
  /**
  * Specifies the display format for the TIMESTAMP data type alias. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#timestamp_output_format CurrentAccount#timestamp_output_format}
  */
  readonly timestampOutputFormat?: string;
  /**
  * Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#timestamp_type_mapping CurrentAccount#timestamp_type_mapping}
  */
  readonly timestampTypeMapping?: string;
  /**
  * Specifies the display format for the TIMESTAMP_TZ data type. If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#timestamp_tz_output_format CurrentAccount#timestamp_tz_output_format}
  */
  readonly timestampTzOutputFormat?: string;
  /**
  * Specifies the time zone for the session. You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#timezone CurrentAccount#timezone}
  */
  readonly timezone?: string;
  /**
  * Controls how trace events are ingested into the event table. For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#trace_level CurrentAccount#trace_level}
  */
  readonly traceLevel?: string;
  /**
  * Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#transaction_abort_on_error CurrentAccount#transaction_abort_on_error}
  */
  readonly transactionAbortOnError?: boolean | cdktf.IResolvable;
  /**
  * Specifies the isolation level for transactions in the user session. Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#transaction_default_isolation_level CurrentAccount#transaction_default_isolation_level}
  */
  readonly transactionDefaultIsolationLevel?: string;
  /**
  * Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#two_digit_century_start CurrentAccount#two_digit_century_start}
  */
  readonly twoDigitCenturyStart?: number;
  /**
  * Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#unsupported_ddl_action CurrentAccount#unsupported_ddl_action}
  */
  readonly unsupportedDdlAction?: string;
  /**
  * Specifies whether to reuse persisted query results, if available, when a matching query is submitted. For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#use_cached_result CurrentAccount#use_cached_result}
  */
  readonly useCachedResult?: boolean | cdktf.IResolvable;
  /**
  * Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#user_task_managed_initial_warehouse_size CurrentAccount#user_task_managed_initial_warehouse_size}
  */
  readonly userTaskManagedInitialWarehouseSize?: string;
  /**
  * Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#user_task_minimum_trigger_interval_in_seconds CurrentAccount#user_task_minimum_trigger_interval_in_seconds}
  */
  readonly userTaskMinimumTriggerIntervalInSeconds?: number;
  /**
  * Specifies the time limit on a single run of the task before it times out (in milliseconds). For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#user_task_timeout_ms CurrentAccount#user_task_timeout_ms}
  */
  readonly userTaskTimeoutMs?: number;
  /**
  * Specifies how the weeks in a given year are computed. `0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#week_of_year_policy CurrentAccount#week_of_year_policy}
  */
  readonly weekOfYearPolicy?: number;
  /**
  * Specifies the first day of the week (used by week-related date functions). `0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#week_start CurrentAccount#week_start}
  */
  readonly weekStart?: number;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#timeouts CurrentAccount#timeouts}
  */
  readonly timeouts?: CurrentAccountTimeouts;
}
export interface CurrentAccountTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#create CurrentAccount#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#delete CurrentAccount#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#read CurrentAccount#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#update CurrentAccount#update}
  */
  readonly update?: string;
}

export function currentAccountTimeoutsToTerraform(struct?: CurrentAccountTimeouts | cdktf.IResolvable): any {
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


export function currentAccountTimeoutsToHclTerraform(struct?: CurrentAccountTimeouts | cdktf.IResolvable): any {
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

export class CurrentAccountTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CurrentAccountTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CurrentAccountTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account snowflake_current_account}
*/
export class CurrentAccount extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_current_account";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CurrentAccount resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CurrentAccount to import
  * @param importFromId The id of the existing CurrentAccount that should be imported. Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CurrentAccount to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "snowflake_current_account", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.1/docs/resources/current_account snowflake_current_account} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CurrentAccountConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CurrentAccountConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'snowflake_current_account',
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
    this._activePythonProfiler = config.activePythonProfiler;
    this._allowClientMfaCaching = config.allowClientMfaCaching;
    this._allowIdToken = config.allowIdToken;
    this._authenticationPolicy = config.authenticationPolicy;
    this._autocommit = config.autocommit;
    this._baseLocationPrefix = config.baseLocationPrefix;
    this._binaryInputFormat = config.binaryInputFormat;
    this._binaryOutputFormat = config.binaryOutputFormat;
    this._catalog = config.catalog;
    this._catalogSync = config.catalogSync;
    this._clientEnableLogInfoStatementParameters = config.clientEnableLogInfoStatementParameters;
    this._clientEncryptionKeySize = config.clientEncryptionKeySize;
    this._clientMemoryLimit = config.clientMemoryLimit;
    this._clientMetadataRequestUseConnectionCtx = config.clientMetadataRequestUseConnectionCtx;
    this._clientMetadataUseSessionDatabase = config.clientMetadataUseSessionDatabase;
    this._clientPrefetchThreads = config.clientPrefetchThreads;
    this._clientResultChunkSize = config.clientResultChunkSize;
    this._clientResultColumnCaseInsensitive = config.clientResultColumnCaseInsensitive;
    this._clientSessionKeepAlive = config.clientSessionKeepAlive;
    this._clientSessionKeepAliveHeartbeatFrequency = config.clientSessionKeepAliveHeartbeatFrequency;
    this._clientTimestampTypeMapping = config.clientTimestampTypeMapping;
    this._cortexEnabledCrossRegion = config.cortexEnabledCrossRegion;
    this._cortexModelsAllowlist = config.cortexModelsAllowlist;
    this._csvTimestampFormat = config.csvTimestampFormat;
    this._dataRetentionTimeInDays = config.dataRetentionTimeInDays;
    this._dateInputFormat = config.dateInputFormat;
    this._dateOutputFormat = config.dateOutputFormat;
    this._defaultDdlCollation = config.defaultDdlCollation;
    this._defaultNotebookComputePoolCpu = config.defaultNotebookComputePoolCpu;
    this._defaultNotebookComputePoolGpu = config.defaultNotebookComputePoolGpu;
    this._defaultNullOrdering = config.defaultNullOrdering;
    this._defaultStreamlitNotebookWarehouse = config.defaultStreamlitNotebookWarehouse;
    this._disableUiDownloadButton = config.disableUiDownloadButton;
    this._disableUserPrivilegeGrants = config.disableUserPrivilegeGrants;
    this._enableAutomaticSensitiveDataClassificationLog = config.enableAutomaticSensitiveDataClassificationLog;
    this._enableEgressCostOptimizer = config.enableEgressCostOptimizer;
    this._enableIdentifierFirstLogin = config.enableIdentifierFirstLogin;
    this._enableInternalStagesPrivatelink = config.enableInternalStagesPrivatelink;
    this._enableTriSecretAndRekeyOptOutForImageRepository = config.enableTriSecretAndRekeyOptOutForImageRepository;
    this._enableTriSecretAndRekeyOptOutForSpcsBlockStorage = config.enableTriSecretAndRekeyOptOutForSpcsBlockStorage;
    this._enableUnhandledExceptionsReporting = config.enableUnhandledExceptionsReporting;
    this._enableUnloadPhysicalTypeOptimization = config.enableUnloadPhysicalTypeOptimization;
    this._enableUnredactedQuerySyntaxError = config.enableUnredactedQuerySyntaxError;
    this._enableUnredactedSecureObjectError = config.enableUnredactedSecureObjectError;
    this._enforceNetworkRulesForInternalStages = config.enforceNetworkRulesForInternalStages;
    this._errorOnNondeterministicMerge = config.errorOnNondeterministicMerge;
    this._errorOnNondeterministicUpdate = config.errorOnNondeterministicUpdate;
    this._eventTable = config.eventTable;
    this._externalOauthAddPrivilegedRolesToBlockedList = config.externalOauthAddPrivilegedRolesToBlockedList;
    this._externalVolume = config.externalVolume;
    this._featurePolicy = config.featurePolicy;
    this._geographyOutputFormat = config.geographyOutputFormat;
    this._geometryOutputFormat = config.geometryOutputFormat;
    this._hybridTableLockTimeout = config.hybridTableLockTimeout;
    this._id = config.id;
    this._initialReplicationSizeLimitInTb = config.initialReplicationSizeLimitInTb;
    this._jdbcTreatDecimalAsInt = config.jdbcTreatDecimalAsInt;
    this._jdbcTreatTimestampNtzAsUtc = config.jdbcTreatTimestampNtzAsUtc;
    this._jdbcUseSessionTimezone = config.jdbcUseSessionTimezone;
    this._jsTreatIntegerAsBigint = config.jsTreatIntegerAsBigint;
    this._jsonIndent = config.jsonIndent;
    this._listingAutoFulfillmentReplicationRefreshSchedule = config.listingAutoFulfillmentReplicationRefreshSchedule;
    this._lockTimeout = config.lockTimeout;
    this._logLevel = config.logLevel;
    this._maxConcurrencyLevel = config.maxConcurrencyLevel;
    this._maxDataExtensionTimeInDays = config.maxDataExtensionTimeInDays;
    this._metricLevel = config.metricLevel;
    this._minDataRetentionTimeInDays = config.minDataRetentionTimeInDays;
    this._multiStatementCount = config.multiStatementCount;
    this._networkPolicy = config.networkPolicy;
    this._noorderSequenceAsDefault = config.noorderSequenceAsDefault;
    this._oauthAddPrivilegedRolesToBlockedList = config.oauthAddPrivilegedRolesToBlockedList;
    this._odbcTreatDecimalAsInt = config.odbcTreatDecimalAsInt;
    this._packagesPolicy = config.packagesPolicy;
    this._passwordPolicy = config.passwordPolicy;
    this._periodicDataRekeying = config.periodicDataRekeying;
    this._pipeExecutionPaused = config.pipeExecutionPaused;
    this._preventUnloadToInlineUrl = config.preventUnloadToInlineUrl;
    this._preventUnloadToInternalStages = config.preventUnloadToInternalStages;
    this._pythonProfilerModules = config.pythonProfilerModules;
    this._pythonProfilerTargetStage = config.pythonProfilerTargetStage;
    this._queryTag = config.queryTag;
    this._quotedIdentifiersIgnoreCase = config.quotedIdentifiersIgnoreCase;
    this._replaceInvalidCharacters = config.replaceInvalidCharacters;
    this._requireStorageIntegrationForStageCreation = config.requireStorageIntegrationForStageCreation;
    this._requireStorageIntegrationForStageOperation = config.requireStorageIntegrationForStageOperation;
    this._resourceMonitor = config.resourceMonitor;
    this._rowsPerResultset = config.rowsPerResultset;
    this._s3StageVpceDnsName = config.s3StageVpceDnsName;
    this._samlIdentityProvider = config.samlIdentityProvider;
    this._searchPath = config.searchPath;
    this._serverlessTaskMaxStatementSize = config.serverlessTaskMaxStatementSize;
    this._serverlessTaskMinStatementSize = config.serverlessTaskMinStatementSize;
    this._sessionPolicy = config.sessionPolicy;
    this._simulatedDataSharingConsumer = config.simulatedDataSharingConsumer;
    this._ssoLoginPage = config.ssoLoginPage;
    this._statementQueuedTimeoutInSeconds = config.statementQueuedTimeoutInSeconds;
    this._statementTimeoutInSeconds = config.statementTimeoutInSeconds;
    this._storageSerializationPolicy = config.storageSerializationPolicy;
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

  // active_python_profiler - computed: true, optional: true, required: false
  private _activePythonProfiler?: string; 
  public get activePythonProfiler() {
    return this.getStringAttribute('active_python_profiler');
  }
  public set activePythonProfiler(value: string) {
    this._activePythonProfiler = value;
  }
  public resetActivePythonProfiler() {
    this._activePythonProfiler = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activePythonProfilerInput() {
    return this._activePythonProfiler;
  }

  // allow_client_mfa_caching - computed: true, optional: true, required: false
  private _allowClientMfaCaching?: boolean | cdktf.IResolvable; 
  public get allowClientMfaCaching() {
    return this.getBooleanAttribute('allow_client_mfa_caching');
  }
  public set allowClientMfaCaching(value: boolean | cdktf.IResolvable) {
    this._allowClientMfaCaching = value;
  }
  public resetAllowClientMfaCaching() {
    this._allowClientMfaCaching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowClientMfaCachingInput() {
    return this._allowClientMfaCaching;
  }

  // allow_id_token - computed: true, optional: true, required: false
  private _allowIdToken?: boolean | cdktf.IResolvable; 
  public get allowIdToken() {
    return this.getBooleanAttribute('allow_id_token');
  }
  public set allowIdToken(value: boolean | cdktf.IResolvable) {
    this._allowIdToken = value;
  }
  public resetAllowIdToken() {
    this._allowIdToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowIdTokenInput() {
    return this._allowIdToken;
  }

  // authentication_policy - computed: false, optional: true, required: false
  private _authenticationPolicy?: string; 
  public get authenticationPolicy() {
    return this.getStringAttribute('authentication_policy');
  }
  public set authenticationPolicy(value: string) {
    this._authenticationPolicy = value;
  }
  public resetAuthenticationPolicy() {
    this._authenticationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationPolicyInput() {
    return this._authenticationPolicy;
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

  // base_location_prefix - computed: true, optional: true, required: false
  private _baseLocationPrefix?: string; 
  public get baseLocationPrefix() {
    return this.getStringAttribute('base_location_prefix');
  }
  public set baseLocationPrefix(value: string) {
    this._baseLocationPrefix = value;
  }
  public resetBaseLocationPrefix() {
    this._baseLocationPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get baseLocationPrefixInput() {
    return this._baseLocationPrefix;
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

  // catalog - computed: true, optional: true, required: false
  private _catalog?: string; 
  public get catalog() {
    return this.getStringAttribute('catalog');
  }
  public set catalog(value: string) {
    this._catalog = value;
  }
  public resetCatalog() {
    this._catalog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogInput() {
    return this._catalog;
  }

  // catalog_sync - computed: true, optional: true, required: false
  private _catalogSync?: string; 
  public get catalogSync() {
    return this.getStringAttribute('catalog_sync');
  }
  public set catalogSync(value: string) {
    this._catalogSync = value;
  }
  public resetCatalogSync() {
    this._catalogSync = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get catalogSyncInput() {
    return this._catalogSync;
  }

  // client_enable_log_info_statement_parameters - computed: true, optional: true, required: false
  private _clientEnableLogInfoStatementParameters?: boolean | cdktf.IResolvable; 
  public get clientEnableLogInfoStatementParameters() {
    return this.getBooleanAttribute('client_enable_log_info_statement_parameters');
  }
  public set clientEnableLogInfoStatementParameters(value: boolean | cdktf.IResolvable) {
    this._clientEnableLogInfoStatementParameters = value;
  }
  public resetClientEnableLogInfoStatementParameters() {
    this._clientEnableLogInfoStatementParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEnableLogInfoStatementParametersInput() {
    return this._clientEnableLogInfoStatementParameters;
  }

  // client_encryption_key_size - computed: true, optional: true, required: false
  private _clientEncryptionKeySize?: number; 
  public get clientEncryptionKeySize() {
    return this.getNumberAttribute('client_encryption_key_size');
  }
  public set clientEncryptionKeySize(value: number) {
    this._clientEncryptionKeySize = value;
  }
  public resetClientEncryptionKeySize() {
    this._clientEncryptionKeySize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientEncryptionKeySizeInput() {
    return this._clientEncryptionKeySize;
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

  // client_metadata_use_session_database - computed: true, optional: true, required: false
  private _clientMetadataUseSessionDatabase?: boolean | cdktf.IResolvable; 
  public get clientMetadataUseSessionDatabase() {
    return this.getBooleanAttribute('client_metadata_use_session_database');
  }
  public set clientMetadataUseSessionDatabase(value: boolean | cdktf.IResolvable) {
    this._clientMetadataUseSessionDatabase = value;
  }
  public resetClientMetadataUseSessionDatabase() {
    this._clientMetadataUseSessionDatabase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientMetadataUseSessionDatabaseInput() {
    return this._clientMetadataUseSessionDatabase;
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

  // cortex_enabled_cross_region - computed: true, optional: true, required: false
  private _cortexEnabledCrossRegion?: string; 
  public get cortexEnabledCrossRegion() {
    return this.getStringAttribute('cortex_enabled_cross_region');
  }
  public set cortexEnabledCrossRegion(value: string) {
    this._cortexEnabledCrossRegion = value;
  }
  public resetCortexEnabledCrossRegion() {
    this._cortexEnabledCrossRegion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cortexEnabledCrossRegionInput() {
    return this._cortexEnabledCrossRegion;
  }

  // cortex_models_allowlist - computed: true, optional: true, required: false
  private _cortexModelsAllowlist?: string; 
  public get cortexModelsAllowlist() {
    return this.getStringAttribute('cortex_models_allowlist');
  }
  public set cortexModelsAllowlist(value: string) {
    this._cortexModelsAllowlist = value;
  }
  public resetCortexModelsAllowlist() {
    this._cortexModelsAllowlist = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cortexModelsAllowlistInput() {
    return this._cortexModelsAllowlist;
  }

  // csv_timestamp_format - computed: true, optional: true, required: false
  private _csvTimestampFormat?: string; 
  public get csvTimestampFormat() {
    return this.getStringAttribute('csv_timestamp_format');
  }
  public set csvTimestampFormat(value: string) {
    this._csvTimestampFormat = value;
  }
  public resetCsvTimestampFormat() {
    this._csvTimestampFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get csvTimestampFormatInput() {
    return this._csvTimestampFormat;
  }

  // data_retention_time_in_days - computed: true, optional: true, required: false
  private _dataRetentionTimeInDays?: number; 
  public get dataRetentionTimeInDays() {
    return this.getNumberAttribute('data_retention_time_in_days');
  }
  public set dataRetentionTimeInDays(value: number) {
    this._dataRetentionTimeInDays = value;
  }
  public resetDataRetentionTimeInDays() {
    this._dataRetentionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataRetentionTimeInDaysInput() {
    return this._dataRetentionTimeInDays;
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

  // default_ddl_collation - computed: true, optional: true, required: false
  private _defaultDdlCollation?: string; 
  public get defaultDdlCollation() {
    return this.getStringAttribute('default_ddl_collation');
  }
  public set defaultDdlCollation(value: string) {
    this._defaultDdlCollation = value;
  }
  public resetDefaultDdlCollation() {
    this._defaultDdlCollation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDdlCollationInput() {
    return this._defaultDdlCollation;
  }

  // default_notebook_compute_pool_cpu - computed: true, optional: true, required: false
  private _defaultNotebookComputePoolCpu?: string; 
  public get defaultNotebookComputePoolCpu() {
    return this.getStringAttribute('default_notebook_compute_pool_cpu');
  }
  public set defaultNotebookComputePoolCpu(value: string) {
    this._defaultNotebookComputePoolCpu = value;
  }
  public resetDefaultNotebookComputePoolCpu() {
    this._defaultNotebookComputePoolCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNotebookComputePoolCpuInput() {
    return this._defaultNotebookComputePoolCpu;
  }

  // default_notebook_compute_pool_gpu - computed: true, optional: true, required: false
  private _defaultNotebookComputePoolGpu?: string; 
  public get defaultNotebookComputePoolGpu() {
    return this.getStringAttribute('default_notebook_compute_pool_gpu');
  }
  public set defaultNotebookComputePoolGpu(value: string) {
    this._defaultNotebookComputePoolGpu = value;
  }
  public resetDefaultNotebookComputePoolGpu() {
    this._defaultNotebookComputePoolGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNotebookComputePoolGpuInput() {
    return this._defaultNotebookComputePoolGpu;
  }

  // default_null_ordering - computed: true, optional: true, required: false
  private _defaultNullOrdering?: string; 
  public get defaultNullOrdering() {
    return this.getStringAttribute('default_null_ordering');
  }
  public set defaultNullOrdering(value: string) {
    this._defaultNullOrdering = value;
  }
  public resetDefaultNullOrdering() {
    this._defaultNullOrdering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultNullOrderingInput() {
    return this._defaultNullOrdering;
  }

  // default_streamlit_notebook_warehouse - computed: true, optional: true, required: false
  private _defaultStreamlitNotebookWarehouse?: string; 
  public get defaultStreamlitNotebookWarehouse() {
    return this.getStringAttribute('default_streamlit_notebook_warehouse');
  }
  public set defaultStreamlitNotebookWarehouse(value: string) {
    this._defaultStreamlitNotebookWarehouse = value;
  }
  public resetDefaultStreamlitNotebookWarehouse() {
    this._defaultStreamlitNotebookWarehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultStreamlitNotebookWarehouseInput() {
    return this._defaultStreamlitNotebookWarehouse;
  }

  // disable_ui_download_button - computed: true, optional: true, required: false
  private _disableUiDownloadButton?: boolean | cdktf.IResolvable; 
  public get disableUiDownloadButton() {
    return this.getBooleanAttribute('disable_ui_download_button');
  }
  public set disableUiDownloadButton(value: boolean | cdktf.IResolvable) {
    this._disableUiDownloadButton = value;
  }
  public resetDisableUiDownloadButton() {
    this._disableUiDownloadButton = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUiDownloadButtonInput() {
    return this._disableUiDownloadButton;
  }

  // disable_user_privilege_grants - computed: true, optional: true, required: false
  private _disableUserPrivilegeGrants?: boolean | cdktf.IResolvable; 
  public get disableUserPrivilegeGrants() {
    return this.getBooleanAttribute('disable_user_privilege_grants');
  }
  public set disableUserPrivilegeGrants(value: boolean | cdktf.IResolvable) {
    this._disableUserPrivilegeGrants = value;
  }
  public resetDisableUserPrivilegeGrants() {
    this._disableUserPrivilegeGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableUserPrivilegeGrantsInput() {
    return this._disableUserPrivilegeGrants;
  }

  // enable_automatic_sensitive_data_classification_log - computed: true, optional: true, required: false
  private _enableAutomaticSensitiveDataClassificationLog?: boolean | cdktf.IResolvable; 
  public get enableAutomaticSensitiveDataClassificationLog() {
    return this.getBooleanAttribute('enable_automatic_sensitive_data_classification_log');
  }
  public set enableAutomaticSensitiveDataClassificationLog(value: boolean | cdktf.IResolvable) {
    this._enableAutomaticSensitiveDataClassificationLog = value;
  }
  public resetEnableAutomaticSensitiveDataClassificationLog() {
    this._enableAutomaticSensitiveDataClassificationLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAutomaticSensitiveDataClassificationLogInput() {
    return this._enableAutomaticSensitiveDataClassificationLog;
  }

  // enable_egress_cost_optimizer - computed: true, optional: true, required: false
  private _enableEgressCostOptimizer?: boolean | cdktf.IResolvable; 
  public get enableEgressCostOptimizer() {
    return this.getBooleanAttribute('enable_egress_cost_optimizer');
  }
  public set enableEgressCostOptimizer(value: boolean | cdktf.IResolvable) {
    this._enableEgressCostOptimizer = value;
  }
  public resetEnableEgressCostOptimizer() {
    this._enableEgressCostOptimizer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEgressCostOptimizerInput() {
    return this._enableEgressCostOptimizer;
  }

  // enable_identifier_first_login - computed: true, optional: true, required: false
  private _enableIdentifierFirstLogin?: boolean | cdktf.IResolvable; 
  public get enableIdentifierFirstLogin() {
    return this.getBooleanAttribute('enable_identifier_first_login');
  }
  public set enableIdentifierFirstLogin(value: boolean | cdktf.IResolvable) {
    this._enableIdentifierFirstLogin = value;
  }
  public resetEnableIdentifierFirstLogin() {
    this._enableIdentifierFirstLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIdentifierFirstLoginInput() {
    return this._enableIdentifierFirstLogin;
  }

  // enable_internal_stages_privatelink - computed: true, optional: true, required: false
  private _enableInternalStagesPrivatelink?: boolean | cdktf.IResolvable; 
  public get enableInternalStagesPrivatelink() {
    return this.getBooleanAttribute('enable_internal_stages_privatelink');
  }
  public set enableInternalStagesPrivatelink(value: boolean | cdktf.IResolvable) {
    this._enableInternalStagesPrivatelink = value;
  }
  public resetEnableInternalStagesPrivatelink() {
    this._enableInternalStagesPrivatelink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInternalStagesPrivatelinkInput() {
    return this._enableInternalStagesPrivatelink;
  }

  // enable_tri_secret_and_rekey_opt_out_for_image_repository - computed: true, optional: true, required: false
  private _enableTriSecretAndRekeyOptOutForImageRepository?: boolean | cdktf.IResolvable; 
  public get enableTriSecretAndRekeyOptOutForImageRepository() {
    return this.getBooleanAttribute('enable_tri_secret_and_rekey_opt_out_for_image_repository');
  }
  public set enableTriSecretAndRekeyOptOutForImageRepository(value: boolean | cdktf.IResolvable) {
    this._enableTriSecretAndRekeyOptOutForImageRepository = value;
  }
  public resetEnableTriSecretAndRekeyOptOutForImageRepository() {
    this._enableTriSecretAndRekeyOptOutForImageRepository = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTriSecretAndRekeyOptOutForImageRepositoryInput() {
    return this._enableTriSecretAndRekeyOptOutForImageRepository;
  }

  // enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage - computed: true, optional: true, required: false
  private _enableTriSecretAndRekeyOptOutForSpcsBlockStorage?: boolean | cdktf.IResolvable; 
  public get enableTriSecretAndRekeyOptOutForSpcsBlockStorage() {
    return this.getBooleanAttribute('enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage');
  }
  public set enableTriSecretAndRekeyOptOutForSpcsBlockStorage(value: boolean | cdktf.IResolvable) {
    this._enableTriSecretAndRekeyOptOutForSpcsBlockStorage = value;
  }
  public resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage() {
    this._enableTriSecretAndRekeyOptOutForSpcsBlockStorage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput() {
    return this._enableTriSecretAndRekeyOptOutForSpcsBlockStorage;
  }

  // enable_unhandled_exceptions_reporting - computed: true, optional: true, required: false
  private _enableUnhandledExceptionsReporting?: boolean | cdktf.IResolvable; 
  public get enableUnhandledExceptionsReporting() {
    return this.getBooleanAttribute('enable_unhandled_exceptions_reporting');
  }
  public set enableUnhandledExceptionsReporting(value: boolean | cdktf.IResolvable) {
    this._enableUnhandledExceptionsReporting = value;
  }
  public resetEnableUnhandledExceptionsReporting() {
    this._enableUnhandledExceptionsReporting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnhandledExceptionsReportingInput() {
    return this._enableUnhandledExceptionsReporting;
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

  // enable_unredacted_secure_object_error - computed: true, optional: true, required: false
  private _enableUnredactedSecureObjectError?: boolean | cdktf.IResolvable; 
  public get enableUnredactedSecureObjectError() {
    return this.getBooleanAttribute('enable_unredacted_secure_object_error');
  }
  public set enableUnredactedSecureObjectError(value: boolean | cdktf.IResolvable) {
    this._enableUnredactedSecureObjectError = value;
  }
  public resetEnableUnredactedSecureObjectError() {
    this._enableUnredactedSecureObjectError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableUnredactedSecureObjectErrorInput() {
    return this._enableUnredactedSecureObjectError;
  }

  // enforce_network_rules_for_internal_stages - computed: true, optional: true, required: false
  private _enforceNetworkRulesForInternalStages?: boolean | cdktf.IResolvable; 
  public get enforceNetworkRulesForInternalStages() {
    return this.getBooleanAttribute('enforce_network_rules_for_internal_stages');
  }
  public set enforceNetworkRulesForInternalStages(value: boolean | cdktf.IResolvable) {
    this._enforceNetworkRulesForInternalStages = value;
  }
  public resetEnforceNetworkRulesForInternalStages() {
    this._enforceNetworkRulesForInternalStages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceNetworkRulesForInternalStagesInput() {
    return this._enforceNetworkRulesForInternalStages;
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

  // event_table - computed: true, optional: true, required: false
  private _eventTable?: string; 
  public get eventTable() {
    return this.getStringAttribute('event_table');
  }
  public set eventTable(value: string) {
    this._eventTable = value;
  }
  public resetEventTable() {
    this._eventTable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventTableInput() {
    return this._eventTable;
  }

  // external_oauth_add_privileged_roles_to_blocked_list - computed: true, optional: true, required: false
  private _externalOauthAddPrivilegedRolesToBlockedList?: boolean | cdktf.IResolvable; 
  public get externalOauthAddPrivilegedRolesToBlockedList() {
    return this.getBooleanAttribute('external_oauth_add_privileged_roles_to_blocked_list');
  }
  public set externalOauthAddPrivilegedRolesToBlockedList(value: boolean | cdktf.IResolvable) {
    this._externalOauthAddPrivilegedRolesToBlockedList = value;
  }
  public resetExternalOauthAddPrivilegedRolesToBlockedList() {
    this._externalOauthAddPrivilegedRolesToBlockedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalOauthAddPrivilegedRolesToBlockedListInput() {
    return this._externalOauthAddPrivilegedRolesToBlockedList;
  }

  // external_volume - computed: true, optional: true, required: false
  private _externalVolume?: string; 
  public get externalVolume() {
    return this.getStringAttribute('external_volume');
  }
  public set externalVolume(value: string) {
    this._externalVolume = value;
  }
  public resetExternalVolume() {
    this._externalVolume = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalVolumeInput() {
    return this._externalVolume;
  }

  // feature_policy - computed: false, optional: true, required: false
  private _featurePolicy?: string; 
  public get featurePolicy() {
    return this.getStringAttribute('feature_policy');
  }
  public set featurePolicy(value: string) {
    this._featurePolicy = value;
  }
  public resetFeaturePolicy() {
    this._featurePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featurePolicyInput() {
    return this._featurePolicy;
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

  // hybrid_table_lock_timeout - computed: true, optional: true, required: false
  private _hybridTableLockTimeout?: number; 
  public get hybridTableLockTimeout() {
    return this.getNumberAttribute('hybrid_table_lock_timeout');
  }
  public set hybridTableLockTimeout(value: number) {
    this._hybridTableLockTimeout = value;
  }
  public resetHybridTableLockTimeout() {
    this._hybridTableLockTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hybridTableLockTimeoutInput() {
    return this._hybridTableLockTimeout;
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

  // initial_replication_size_limit_in_tb - computed: true, optional: true, required: false
  private _initialReplicationSizeLimitInTb?: string; 
  public get initialReplicationSizeLimitInTb() {
    return this.getStringAttribute('initial_replication_size_limit_in_tb');
  }
  public set initialReplicationSizeLimitInTb(value: string) {
    this._initialReplicationSizeLimitInTb = value;
  }
  public resetInitialReplicationSizeLimitInTb() {
    this._initialReplicationSizeLimitInTb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialReplicationSizeLimitInTbInput() {
    return this._initialReplicationSizeLimitInTb;
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

  // js_treat_integer_as_bigint - computed: true, optional: true, required: false
  private _jsTreatIntegerAsBigint?: boolean | cdktf.IResolvable; 
  public get jsTreatIntegerAsBigint() {
    return this.getBooleanAttribute('js_treat_integer_as_bigint');
  }
  public set jsTreatIntegerAsBigint(value: boolean | cdktf.IResolvable) {
    this._jsTreatIntegerAsBigint = value;
  }
  public resetJsTreatIntegerAsBigint() {
    this._jsTreatIntegerAsBigint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsTreatIntegerAsBigintInput() {
    return this._jsTreatIntegerAsBigint;
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

  // listing_auto_fulfillment_replication_refresh_schedule - computed: true, optional: true, required: false
  private _listingAutoFulfillmentReplicationRefreshSchedule?: string; 
  public get listingAutoFulfillmentReplicationRefreshSchedule() {
    return this.getStringAttribute('listing_auto_fulfillment_replication_refresh_schedule');
  }
  public set listingAutoFulfillmentReplicationRefreshSchedule(value: string) {
    this._listingAutoFulfillmentReplicationRefreshSchedule = value;
  }
  public resetListingAutoFulfillmentReplicationRefreshSchedule() {
    this._listingAutoFulfillmentReplicationRefreshSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listingAutoFulfillmentReplicationRefreshScheduleInput() {
    return this._listingAutoFulfillmentReplicationRefreshSchedule;
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

  // max_concurrency_level - computed: true, optional: true, required: false
  private _maxConcurrencyLevel?: number; 
  public get maxConcurrencyLevel() {
    return this.getNumberAttribute('max_concurrency_level');
  }
  public set maxConcurrencyLevel(value: number) {
    this._maxConcurrencyLevel = value;
  }
  public resetMaxConcurrencyLevel() {
    this._maxConcurrencyLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrencyLevelInput() {
    return this._maxConcurrencyLevel;
  }

  // max_data_extension_time_in_days - computed: true, optional: true, required: false
  private _maxDataExtensionTimeInDays?: number; 
  public get maxDataExtensionTimeInDays() {
    return this.getNumberAttribute('max_data_extension_time_in_days');
  }
  public set maxDataExtensionTimeInDays(value: number) {
    this._maxDataExtensionTimeInDays = value;
  }
  public resetMaxDataExtensionTimeInDays() {
    this._maxDataExtensionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDataExtensionTimeInDaysInput() {
    return this._maxDataExtensionTimeInDays;
  }

  // metric_level - computed: true, optional: true, required: false
  private _metricLevel?: string; 
  public get metricLevel() {
    return this.getStringAttribute('metric_level');
  }
  public set metricLevel(value: string) {
    this._metricLevel = value;
  }
  public resetMetricLevel() {
    this._metricLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricLevelInput() {
    return this._metricLevel;
  }

  // min_data_retention_time_in_days - computed: true, optional: true, required: false
  private _minDataRetentionTimeInDays?: number; 
  public get minDataRetentionTimeInDays() {
    return this.getNumberAttribute('min_data_retention_time_in_days');
  }
  public set minDataRetentionTimeInDays(value: number) {
    this._minDataRetentionTimeInDays = value;
  }
  public resetMinDataRetentionTimeInDays() {
    this._minDataRetentionTimeInDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minDataRetentionTimeInDaysInput() {
    return this._minDataRetentionTimeInDays;
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

  // oauth_add_privileged_roles_to_blocked_list - computed: true, optional: true, required: false
  private _oauthAddPrivilegedRolesToBlockedList?: boolean | cdktf.IResolvable; 
  public get oauthAddPrivilegedRolesToBlockedList() {
    return this.getBooleanAttribute('oauth_add_privileged_roles_to_blocked_list');
  }
  public set oauthAddPrivilegedRolesToBlockedList(value: boolean | cdktf.IResolvable) {
    this._oauthAddPrivilegedRolesToBlockedList = value;
  }
  public resetOauthAddPrivilegedRolesToBlockedList() {
    this._oauthAddPrivilegedRolesToBlockedList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthAddPrivilegedRolesToBlockedListInput() {
    return this._oauthAddPrivilegedRolesToBlockedList;
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

  // packages_policy - computed: false, optional: true, required: false
  private _packagesPolicy?: string; 
  public get packagesPolicy() {
    return this.getStringAttribute('packages_policy');
  }
  public set packagesPolicy(value: string) {
    this._packagesPolicy = value;
  }
  public resetPackagesPolicy() {
    this._packagesPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packagesPolicyInput() {
    return this._packagesPolicy;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy?: string; 
  public get passwordPolicy() {
    return this.getStringAttribute('password_policy');
  }
  public set passwordPolicy(value: string) {
    this._passwordPolicy = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy;
  }

  // periodic_data_rekeying - computed: true, optional: true, required: false
  private _periodicDataRekeying?: boolean | cdktf.IResolvable; 
  public get periodicDataRekeying() {
    return this.getBooleanAttribute('periodic_data_rekeying');
  }
  public set periodicDataRekeying(value: boolean | cdktf.IResolvable) {
    this._periodicDataRekeying = value;
  }
  public resetPeriodicDataRekeying() {
    this._periodicDataRekeying = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicDataRekeyingInput() {
    return this._periodicDataRekeying;
  }

  // pipe_execution_paused - computed: true, optional: true, required: false
  private _pipeExecutionPaused?: boolean | cdktf.IResolvable; 
  public get pipeExecutionPaused() {
    return this.getBooleanAttribute('pipe_execution_paused');
  }
  public set pipeExecutionPaused(value: boolean | cdktf.IResolvable) {
    this._pipeExecutionPaused = value;
  }
  public resetPipeExecutionPaused() {
    this._pipeExecutionPaused = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipeExecutionPausedInput() {
    return this._pipeExecutionPaused;
  }

  // prevent_unload_to_inline_url - computed: true, optional: true, required: false
  private _preventUnloadToInlineUrl?: boolean | cdktf.IResolvable; 
  public get preventUnloadToInlineUrl() {
    return this.getBooleanAttribute('prevent_unload_to_inline_url');
  }
  public set preventUnloadToInlineUrl(value: boolean | cdktf.IResolvable) {
    this._preventUnloadToInlineUrl = value;
  }
  public resetPreventUnloadToInlineUrl() {
    this._preventUnloadToInlineUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventUnloadToInlineUrlInput() {
    return this._preventUnloadToInlineUrl;
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

  // python_profiler_modules - computed: true, optional: true, required: false
  private _pythonProfilerModules?: string; 
  public get pythonProfilerModules() {
    return this.getStringAttribute('python_profiler_modules');
  }
  public set pythonProfilerModules(value: string) {
    this._pythonProfilerModules = value;
  }
  public resetPythonProfilerModules() {
    this._pythonProfilerModules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonProfilerModulesInput() {
    return this._pythonProfilerModules;
  }

  // python_profiler_target_stage - computed: true, optional: true, required: false
  private _pythonProfilerTargetStage?: string; 
  public get pythonProfilerTargetStage() {
    return this.getStringAttribute('python_profiler_target_stage');
  }
  public set pythonProfilerTargetStage(value: string) {
    this._pythonProfilerTargetStage = value;
  }
  public resetPythonProfilerTargetStage() {
    this._pythonProfilerTargetStage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pythonProfilerTargetStageInput() {
    return this._pythonProfilerTargetStage;
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

  // replace_invalid_characters - computed: true, optional: true, required: false
  private _replaceInvalidCharacters?: boolean | cdktf.IResolvable; 
  public get replaceInvalidCharacters() {
    return this.getBooleanAttribute('replace_invalid_characters');
  }
  public set replaceInvalidCharacters(value: boolean | cdktf.IResolvable) {
    this._replaceInvalidCharacters = value;
  }
  public resetReplaceInvalidCharacters() {
    this._replaceInvalidCharacters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replaceInvalidCharactersInput() {
    return this._replaceInvalidCharacters;
  }

  // require_storage_integration_for_stage_creation - computed: true, optional: true, required: false
  private _requireStorageIntegrationForStageCreation?: boolean | cdktf.IResolvable; 
  public get requireStorageIntegrationForStageCreation() {
    return this.getBooleanAttribute('require_storage_integration_for_stage_creation');
  }
  public set requireStorageIntegrationForStageCreation(value: boolean | cdktf.IResolvable) {
    this._requireStorageIntegrationForStageCreation = value;
  }
  public resetRequireStorageIntegrationForStageCreation() {
    this._requireStorageIntegrationForStageCreation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireStorageIntegrationForStageCreationInput() {
    return this._requireStorageIntegrationForStageCreation;
  }

  // require_storage_integration_for_stage_operation - computed: true, optional: true, required: false
  private _requireStorageIntegrationForStageOperation?: boolean | cdktf.IResolvable; 
  public get requireStorageIntegrationForStageOperation() {
    return this.getBooleanAttribute('require_storage_integration_for_stage_operation');
  }
  public set requireStorageIntegrationForStageOperation(value: boolean | cdktf.IResolvable) {
    this._requireStorageIntegrationForStageOperation = value;
  }
  public resetRequireStorageIntegrationForStageOperation() {
    this._requireStorageIntegrationForStageOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireStorageIntegrationForStageOperationInput() {
    return this._requireStorageIntegrationForStageOperation;
  }

  // resource_monitor - computed: false, optional: true, required: false
  private _resourceMonitor?: string; 
  public get resourceMonitor() {
    return this.getStringAttribute('resource_monitor');
  }
  public set resourceMonitor(value: string) {
    this._resourceMonitor = value;
  }
  public resetResourceMonitor() {
    this._resourceMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceMonitorInput() {
    return this._resourceMonitor;
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

  // saml_identity_provider - computed: true, optional: true, required: false
  private _samlIdentityProvider?: string; 
  public get samlIdentityProvider() {
    return this.getStringAttribute('saml_identity_provider');
  }
  public set samlIdentityProvider(value: string) {
    this._samlIdentityProvider = value;
  }
  public resetSamlIdentityProvider() {
    this._samlIdentityProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdentityProviderInput() {
    return this._samlIdentityProvider;
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

  // serverless_task_max_statement_size - computed: true, optional: true, required: false
  private _serverlessTaskMaxStatementSize?: string; 
  public get serverlessTaskMaxStatementSize() {
    return this.getStringAttribute('serverless_task_max_statement_size');
  }
  public set serverlessTaskMaxStatementSize(value: string) {
    this._serverlessTaskMaxStatementSize = value;
  }
  public resetServerlessTaskMaxStatementSize() {
    this._serverlessTaskMaxStatementSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessTaskMaxStatementSizeInput() {
    return this._serverlessTaskMaxStatementSize;
  }

  // serverless_task_min_statement_size - computed: true, optional: true, required: false
  private _serverlessTaskMinStatementSize?: string; 
  public get serverlessTaskMinStatementSize() {
    return this.getStringAttribute('serverless_task_min_statement_size');
  }
  public set serverlessTaskMinStatementSize(value: string) {
    this._serverlessTaskMinStatementSize = value;
  }
  public resetServerlessTaskMinStatementSize() {
    this._serverlessTaskMinStatementSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverlessTaskMinStatementSizeInput() {
    return this._serverlessTaskMinStatementSize;
  }

  // session_policy - computed: false, optional: true, required: false
  private _sessionPolicy?: string; 
  public get sessionPolicy() {
    return this.getStringAttribute('session_policy');
  }
  public set sessionPolicy(value: string) {
    this._sessionPolicy = value;
  }
  public resetSessionPolicy() {
    this._sessionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionPolicyInput() {
    return this._sessionPolicy;
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

  // sso_login_page - computed: true, optional: true, required: false
  private _ssoLoginPage?: boolean | cdktf.IResolvable; 
  public get ssoLoginPage() {
    return this.getBooleanAttribute('sso_login_page');
  }
  public set ssoLoginPage(value: boolean | cdktf.IResolvable) {
    this._ssoLoginPage = value;
  }
  public resetSsoLoginPage() {
    this._ssoLoginPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoLoginPageInput() {
    return this._ssoLoginPage;
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

  // storage_serialization_policy - computed: true, optional: true, required: false
  private _storageSerializationPolicy?: string; 
  public get storageSerializationPolicy() {
    return this.getStringAttribute('storage_serialization_policy');
  }
  public set storageSerializationPolicy(value: string) {
    this._storageSerializationPolicy = value;
  }
  public resetStorageSerializationPolicy() {
    this._storageSerializationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageSerializationPolicyInput() {
    return this._storageSerializationPolicy;
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
  private _timeouts = new CurrentAccountTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CurrentAccountTimeouts) {
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
      active_python_profiler: cdktf.stringToTerraform(this._activePythonProfiler),
      allow_client_mfa_caching: cdktf.booleanToTerraform(this._allowClientMfaCaching),
      allow_id_token: cdktf.booleanToTerraform(this._allowIdToken),
      authentication_policy: cdktf.stringToTerraform(this._authenticationPolicy),
      autocommit: cdktf.booleanToTerraform(this._autocommit),
      base_location_prefix: cdktf.stringToTerraform(this._baseLocationPrefix),
      binary_input_format: cdktf.stringToTerraform(this._binaryInputFormat),
      binary_output_format: cdktf.stringToTerraform(this._binaryOutputFormat),
      catalog: cdktf.stringToTerraform(this._catalog),
      catalog_sync: cdktf.stringToTerraform(this._catalogSync),
      client_enable_log_info_statement_parameters: cdktf.booleanToTerraform(this._clientEnableLogInfoStatementParameters),
      client_encryption_key_size: cdktf.numberToTerraform(this._clientEncryptionKeySize),
      client_memory_limit: cdktf.numberToTerraform(this._clientMemoryLimit),
      client_metadata_request_use_connection_ctx: cdktf.booleanToTerraform(this._clientMetadataRequestUseConnectionCtx),
      client_metadata_use_session_database: cdktf.booleanToTerraform(this._clientMetadataUseSessionDatabase),
      client_prefetch_threads: cdktf.numberToTerraform(this._clientPrefetchThreads),
      client_result_chunk_size: cdktf.numberToTerraform(this._clientResultChunkSize),
      client_result_column_case_insensitive: cdktf.booleanToTerraform(this._clientResultColumnCaseInsensitive),
      client_session_keep_alive: cdktf.booleanToTerraform(this._clientSessionKeepAlive),
      client_session_keep_alive_heartbeat_frequency: cdktf.numberToTerraform(this._clientSessionKeepAliveHeartbeatFrequency),
      client_timestamp_type_mapping: cdktf.stringToTerraform(this._clientTimestampTypeMapping),
      cortex_enabled_cross_region: cdktf.stringToTerraform(this._cortexEnabledCrossRegion),
      cortex_models_allowlist: cdktf.stringToTerraform(this._cortexModelsAllowlist),
      csv_timestamp_format: cdktf.stringToTerraform(this._csvTimestampFormat),
      data_retention_time_in_days: cdktf.numberToTerraform(this._dataRetentionTimeInDays),
      date_input_format: cdktf.stringToTerraform(this._dateInputFormat),
      date_output_format: cdktf.stringToTerraform(this._dateOutputFormat),
      default_ddl_collation: cdktf.stringToTerraform(this._defaultDdlCollation),
      default_notebook_compute_pool_cpu: cdktf.stringToTerraform(this._defaultNotebookComputePoolCpu),
      default_notebook_compute_pool_gpu: cdktf.stringToTerraform(this._defaultNotebookComputePoolGpu),
      default_null_ordering: cdktf.stringToTerraform(this._defaultNullOrdering),
      default_streamlit_notebook_warehouse: cdktf.stringToTerraform(this._defaultStreamlitNotebookWarehouse),
      disable_ui_download_button: cdktf.booleanToTerraform(this._disableUiDownloadButton),
      disable_user_privilege_grants: cdktf.booleanToTerraform(this._disableUserPrivilegeGrants),
      enable_automatic_sensitive_data_classification_log: cdktf.booleanToTerraform(this._enableAutomaticSensitiveDataClassificationLog),
      enable_egress_cost_optimizer: cdktf.booleanToTerraform(this._enableEgressCostOptimizer),
      enable_identifier_first_login: cdktf.booleanToTerraform(this._enableIdentifierFirstLogin),
      enable_internal_stages_privatelink: cdktf.booleanToTerraform(this._enableInternalStagesPrivatelink),
      enable_tri_secret_and_rekey_opt_out_for_image_repository: cdktf.booleanToTerraform(this._enableTriSecretAndRekeyOptOutForImageRepository),
      enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage: cdktf.booleanToTerraform(this._enableTriSecretAndRekeyOptOutForSpcsBlockStorage),
      enable_unhandled_exceptions_reporting: cdktf.booleanToTerraform(this._enableUnhandledExceptionsReporting),
      enable_unload_physical_type_optimization: cdktf.booleanToTerraform(this._enableUnloadPhysicalTypeOptimization),
      enable_unredacted_query_syntax_error: cdktf.booleanToTerraform(this._enableUnredactedQuerySyntaxError),
      enable_unredacted_secure_object_error: cdktf.booleanToTerraform(this._enableUnredactedSecureObjectError),
      enforce_network_rules_for_internal_stages: cdktf.booleanToTerraform(this._enforceNetworkRulesForInternalStages),
      error_on_nondeterministic_merge: cdktf.booleanToTerraform(this._errorOnNondeterministicMerge),
      error_on_nondeterministic_update: cdktf.booleanToTerraform(this._errorOnNondeterministicUpdate),
      event_table: cdktf.stringToTerraform(this._eventTable),
      external_oauth_add_privileged_roles_to_blocked_list: cdktf.booleanToTerraform(this._externalOauthAddPrivilegedRolesToBlockedList),
      external_volume: cdktf.stringToTerraform(this._externalVolume),
      feature_policy: cdktf.stringToTerraform(this._featurePolicy),
      geography_output_format: cdktf.stringToTerraform(this._geographyOutputFormat),
      geometry_output_format: cdktf.stringToTerraform(this._geometryOutputFormat),
      hybrid_table_lock_timeout: cdktf.numberToTerraform(this._hybridTableLockTimeout),
      id: cdktf.stringToTerraform(this._id),
      initial_replication_size_limit_in_tb: cdktf.stringToTerraform(this._initialReplicationSizeLimitInTb),
      jdbc_treat_decimal_as_int: cdktf.booleanToTerraform(this._jdbcTreatDecimalAsInt),
      jdbc_treat_timestamp_ntz_as_utc: cdktf.booleanToTerraform(this._jdbcTreatTimestampNtzAsUtc),
      jdbc_use_session_timezone: cdktf.booleanToTerraform(this._jdbcUseSessionTimezone),
      js_treat_integer_as_bigint: cdktf.booleanToTerraform(this._jsTreatIntegerAsBigint),
      json_indent: cdktf.numberToTerraform(this._jsonIndent),
      listing_auto_fulfillment_replication_refresh_schedule: cdktf.stringToTerraform(this._listingAutoFulfillmentReplicationRefreshSchedule),
      lock_timeout: cdktf.numberToTerraform(this._lockTimeout),
      log_level: cdktf.stringToTerraform(this._logLevel),
      max_concurrency_level: cdktf.numberToTerraform(this._maxConcurrencyLevel),
      max_data_extension_time_in_days: cdktf.numberToTerraform(this._maxDataExtensionTimeInDays),
      metric_level: cdktf.stringToTerraform(this._metricLevel),
      min_data_retention_time_in_days: cdktf.numberToTerraform(this._minDataRetentionTimeInDays),
      multi_statement_count: cdktf.numberToTerraform(this._multiStatementCount),
      network_policy: cdktf.stringToTerraform(this._networkPolicy),
      noorder_sequence_as_default: cdktf.booleanToTerraform(this._noorderSequenceAsDefault),
      oauth_add_privileged_roles_to_blocked_list: cdktf.booleanToTerraform(this._oauthAddPrivilegedRolesToBlockedList),
      odbc_treat_decimal_as_int: cdktf.booleanToTerraform(this._odbcTreatDecimalAsInt),
      packages_policy: cdktf.stringToTerraform(this._packagesPolicy),
      password_policy: cdktf.stringToTerraform(this._passwordPolicy),
      periodic_data_rekeying: cdktf.booleanToTerraform(this._periodicDataRekeying),
      pipe_execution_paused: cdktf.booleanToTerraform(this._pipeExecutionPaused),
      prevent_unload_to_inline_url: cdktf.booleanToTerraform(this._preventUnloadToInlineUrl),
      prevent_unload_to_internal_stages: cdktf.booleanToTerraform(this._preventUnloadToInternalStages),
      python_profiler_modules: cdktf.stringToTerraform(this._pythonProfilerModules),
      python_profiler_target_stage: cdktf.stringToTerraform(this._pythonProfilerTargetStage),
      query_tag: cdktf.stringToTerraform(this._queryTag),
      quoted_identifiers_ignore_case: cdktf.booleanToTerraform(this._quotedIdentifiersIgnoreCase),
      replace_invalid_characters: cdktf.booleanToTerraform(this._replaceInvalidCharacters),
      require_storage_integration_for_stage_creation: cdktf.booleanToTerraform(this._requireStorageIntegrationForStageCreation),
      require_storage_integration_for_stage_operation: cdktf.booleanToTerraform(this._requireStorageIntegrationForStageOperation),
      resource_monitor: cdktf.stringToTerraform(this._resourceMonitor),
      rows_per_resultset: cdktf.numberToTerraform(this._rowsPerResultset),
      s3_stage_vpce_dns_name: cdktf.stringToTerraform(this._s3StageVpceDnsName),
      saml_identity_provider: cdktf.stringToTerraform(this._samlIdentityProvider),
      search_path: cdktf.stringToTerraform(this._searchPath),
      serverless_task_max_statement_size: cdktf.stringToTerraform(this._serverlessTaskMaxStatementSize),
      serverless_task_min_statement_size: cdktf.stringToTerraform(this._serverlessTaskMinStatementSize),
      session_policy: cdktf.stringToTerraform(this._sessionPolicy),
      simulated_data_sharing_consumer: cdktf.stringToTerraform(this._simulatedDataSharingConsumer),
      sso_login_page: cdktf.booleanToTerraform(this._ssoLoginPage),
      statement_queued_timeout_in_seconds: cdktf.numberToTerraform(this._statementQueuedTimeoutInSeconds),
      statement_timeout_in_seconds: cdktf.numberToTerraform(this._statementTimeoutInSeconds),
      storage_serialization_policy: cdktf.stringToTerraform(this._storageSerializationPolicy),
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
      week_of_year_policy: cdktf.numberToTerraform(this._weekOfYearPolicy),
      week_start: cdktf.numberToTerraform(this._weekStart),
      timeouts: currentAccountTimeoutsToTerraform(this._timeouts.internalValue),
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
      active_python_profiler: {
        value: cdktf.stringToHclTerraform(this._activePythonProfiler),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_client_mfa_caching: {
        value: cdktf.booleanToHclTerraform(this._allowClientMfaCaching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_id_token: {
        value: cdktf.booleanToHclTerraform(this._allowIdToken),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      authentication_policy: {
        value: cdktf.stringToHclTerraform(this._authenticationPolicy),
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
      base_location_prefix: {
        value: cdktf.stringToHclTerraform(this._baseLocationPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      catalog: {
        value: cdktf.stringToHclTerraform(this._catalog),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      catalog_sync: {
        value: cdktf.stringToHclTerraform(this._catalogSync),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      client_enable_log_info_statement_parameters: {
        value: cdktf.booleanToHclTerraform(this._clientEnableLogInfoStatementParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      client_encryption_key_size: {
        value: cdktf.numberToHclTerraform(this._clientEncryptionKeySize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      client_metadata_use_session_database: {
        value: cdktf.booleanToHclTerraform(this._clientMetadataUseSessionDatabase),
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
      cortex_enabled_cross_region: {
        value: cdktf.stringToHclTerraform(this._cortexEnabledCrossRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cortex_models_allowlist: {
        value: cdktf.stringToHclTerraform(this._cortexModelsAllowlist),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csv_timestamp_format: {
        value: cdktf.stringToHclTerraform(this._csvTimestampFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      data_retention_time_in_days: {
        value: cdktf.numberToHclTerraform(this._dataRetentionTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
      default_ddl_collation: {
        value: cdktf.stringToHclTerraform(this._defaultDdlCollation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_notebook_compute_pool_cpu: {
        value: cdktf.stringToHclTerraform(this._defaultNotebookComputePoolCpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_notebook_compute_pool_gpu: {
        value: cdktf.stringToHclTerraform(this._defaultNotebookComputePoolGpu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_null_ordering: {
        value: cdktf.stringToHclTerraform(this._defaultNullOrdering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_streamlit_notebook_warehouse: {
        value: cdktf.stringToHclTerraform(this._defaultStreamlitNotebookWarehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_ui_download_button: {
        value: cdktf.booleanToHclTerraform(this._disableUiDownloadButton),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_user_privilege_grants: {
        value: cdktf.booleanToHclTerraform(this._disableUserPrivilegeGrants),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_automatic_sensitive_data_classification_log: {
        value: cdktf.booleanToHclTerraform(this._enableAutomaticSensitiveDataClassificationLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_egress_cost_optimizer: {
        value: cdktf.booleanToHclTerraform(this._enableEgressCostOptimizer),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_identifier_first_login: {
        value: cdktf.booleanToHclTerraform(this._enableIdentifierFirstLogin),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_internal_stages_privatelink: {
        value: cdktf.booleanToHclTerraform(this._enableInternalStagesPrivatelink),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tri_secret_and_rekey_opt_out_for_image_repository: {
        value: cdktf.booleanToHclTerraform(this._enableTriSecretAndRekeyOptOutForImageRepository),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage: {
        value: cdktf.booleanToHclTerraform(this._enableTriSecretAndRekeyOptOutForSpcsBlockStorage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_unhandled_exceptions_reporting: {
        value: cdktf.booleanToHclTerraform(this._enableUnhandledExceptionsReporting),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      enable_unredacted_secure_object_error: {
        value: cdktf.booleanToHclTerraform(this._enableUnredactedSecureObjectError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enforce_network_rules_for_internal_stages: {
        value: cdktf.booleanToHclTerraform(this._enforceNetworkRulesForInternalStages),
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
      event_table: {
        value: cdktf.stringToHclTerraform(this._eventTable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      external_oauth_add_privileged_roles_to_blocked_list: {
        value: cdktf.booleanToHclTerraform(this._externalOauthAddPrivilegedRolesToBlockedList),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      external_volume: {
        value: cdktf.stringToHclTerraform(this._externalVolume),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      feature_policy: {
        value: cdktf.stringToHclTerraform(this._featurePolicy),
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
      hybrid_table_lock_timeout: {
        value: cdktf.numberToHclTerraform(this._hybridTableLockTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      initial_replication_size_limit_in_tb: {
        value: cdktf.stringToHclTerraform(this._initialReplicationSizeLimitInTb),
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
      js_treat_integer_as_bigint: {
        value: cdktf.booleanToHclTerraform(this._jsTreatIntegerAsBigint),
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
      listing_auto_fulfillment_replication_refresh_schedule: {
        value: cdktf.stringToHclTerraform(this._listingAutoFulfillmentReplicationRefreshSchedule),
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
      max_concurrency_level: {
        value: cdktf.numberToHclTerraform(this._maxConcurrencyLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      max_data_extension_time_in_days: {
        value: cdktf.numberToHclTerraform(this._maxDataExtensionTimeInDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_level: {
        value: cdktf.stringToHclTerraform(this._metricLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_data_retention_time_in_days: {
        value: cdktf.numberToHclTerraform(this._minDataRetentionTimeInDays),
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
      oauth_add_privileged_roles_to_blocked_list: {
        value: cdktf.booleanToHclTerraform(this._oauthAddPrivilegedRolesToBlockedList),
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
      packages_policy: {
        value: cdktf.stringToHclTerraform(this._packagesPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_policy: {
        value: cdktf.stringToHclTerraform(this._passwordPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      periodic_data_rekeying: {
        value: cdktf.booleanToHclTerraform(this._periodicDataRekeying),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pipe_execution_paused: {
        value: cdktf.booleanToHclTerraform(this._pipeExecutionPaused),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_unload_to_inline_url: {
        value: cdktf.booleanToHclTerraform(this._preventUnloadToInlineUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      prevent_unload_to_internal_stages: {
        value: cdktf.booleanToHclTerraform(this._preventUnloadToInternalStages),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      python_profiler_modules: {
        value: cdktf.stringToHclTerraform(this._pythonProfilerModules),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      python_profiler_target_stage: {
        value: cdktf.stringToHclTerraform(this._pythonProfilerTargetStage),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      replace_invalid_characters: {
        value: cdktf.booleanToHclTerraform(this._replaceInvalidCharacters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_storage_integration_for_stage_creation: {
        value: cdktf.booleanToHclTerraform(this._requireStorageIntegrationForStageCreation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      require_storage_integration_for_stage_operation: {
        value: cdktf.booleanToHclTerraform(this._requireStorageIntegrationForStageOperation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      resource_monitor: {
        value: cdktf.stringToHclTerraform(this._resourceMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      saml_identity_provider: {
        value: cdktf.stringToHclTerraform(this._samlIdentityProvider),
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
      serverless_task_max_statement_size: {
        value: cdktf.stringToHclTerraform(this._serverlessTaskMaxStatementSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      serverless_task_min_statement_size: {
        value: cdktf.stringToHclTerraform(this._serverlessTaskMinStatementSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_policy: {
        value: cdktf.stringToHclTerraform(this._sessionPolicy),
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
      sso_login_page: {
        value: cdktf.booleanToHclTerraform(this._ssoLoginPage),
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
      storage_serialization_policy: {
        value: cdktf.stringToHclTerraform(this._storageSerializationPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
        value: currentAccountTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CurrentAccountTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
