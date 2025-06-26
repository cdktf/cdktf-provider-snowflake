# `currentAccount` Submodule <a name="`currentAccount` Submodule" id="@cdktf/provider-snowflake.currentAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurrentAccount <a name="CurrentAccount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account snowflake_current_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import current_account

currentAccount.CurrentAccount(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  abort_detached_query: typing.Union[bool, IResolvable] = None,
  active_python_profiler: str = None,
  allow_client_mfa_caching: typing.Union[bool, IResolvable] = None,
  allow_id_token: typing.Union[bool, IResolvable] = None,
  authentication_policy: str = None,
  autocommit: typing.Union[bool, IResolvable] = None,
  base_location_prefix: str = None,
  binary_input_format: str = None,
  binary_output_format: str = None,
  catalog: str = None,
  catalog_sync: str = None,
  client_enable_log_info_statement_parameters: typing.Union[bool, IResolvable] = None,
  client_encryption_key_size: typing.Union[int, float] = None,
  client_memory_limit: typing.Union[int, float] = None,
  client_metadata_request_use_connection_ctx: typing.Union[bool, IResolvable] = None,
  client_metadata_use_session_database: typing.Union[bool, IResolvable] = None,
  client_prefetch_threads: typing.Union[int, float] = None,
  client_result_chunk_size: typing.Union[int, float] = None,
  client_result_column_case_insensitive: typing.Union[bool, IResolvable] = None,
  client_session_keep_alive: typing.Union[bool, IResolvable] = None,
  client_session_keep_alive_heartbeat_frequency: typing.Union[int, float] = None,
  client_timestamp_type_mapping: str = None,
  cortex_enabled_cross_region: str = None,
  cortex_models_allowlist: str = None,
  csv_timestamp_format: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  date_input_format: str = None,
  date_output_format: str = None,
  default_ddl_collation: str = None,
  default_notebook_compute_pool_cpu: str = None,
  default_notebook_compute_pool_gpu: str = None,
  default_null_ordering: str = None,
  default_streamlit_notebook_warehouse: str = None,
  disable_ui_download_button: typing.Union[bool, IResolvable] = None,
  disable_user_privilege_grants: typing.Union[bool, IResolvable] = None,
  enable_automatic_sensitive_data_classification_log: typing.Union[bool, IResolvable] = None,
  enable_egress_cost_optimizer: typing.Union[bool, IResolvable] = None,
  enable_identifier_first_login: typing.Union[bool, IResolvable] = None,
  enable_internal_stages_privatelink: typing.Union[bool, IResolvable] = None,
  enable_tri_secret_and_rekey_opt_out_for_image_repository: typing.Union[bool, IResolvable] = None,
  enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage: typing.Union[bool, IResolvable] = None,
  enable_unhandled_exceptions_reporting: typing.Union[bool, IResolvable] = None,
  enable_unload_physical_type_optimization: typing.Union[bool, IResolvable] = None,
  enable_unredacted_query_syntax_error: typing.Union[bool, IResolvable] = None,
  enable_unredacted_secure_object_error: typing.Union[bool, IResolvable] = None,
  enforce_network_rules_for_internal_stages: typing.Union[bool, IResolvable] = None,
  error_on_nondeterministic_merge: typing.Union[bool, IResolvable] = None,
  error_on_nondeterministic_update: typing.Union[bool, IResolvable] = None,
  event_table: str = None,
  external_oauth_add_privileged_roles_to_blocked_list: typing.Union[bool, IResolvable] = None,
  external_volume: str = None,
  feature_policy: str = None,
  geography_output_format: str = None,
  geometry_output_format: str = None,
  hybrid_table_lock_timeout: typing.Union[int, float] = None,
  id: str = None,
  initial_replication_size_limit_in_tb: str = None,
  jdbc_treat_decimal_as_int: typing.Union[bool, IResolvable] = None,
  jdbc_treat_timestamp_ntz_as_utc: typing.Union[bool, IResolvable] = None,
  jdbc_use_session_timezone: typing.Union[bool, IResolvable] = None,
  json_indent: typing.Union[int, float] = None,
  js_treat_integer_as_bigint: typing.Union[bool, IResolvable] = None,
  listing_auto_fulfillment_replication_refresh_schedule: str = None,
  lock_timeout: typing.Union[int, float] = None,
  log_level: str = None,
  max_concurrency_level: typing.Union[int, float] = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  metric_level: str = None,
  min_data_retention_time_in_days: typing.Union[int, float] = None,
  multi_statement_count: typing.Union[int, float] = None,
  network_policy: str = None,
  noorder_sequence_as_default: typing.Union[bool, IResolvable] = None,
  oauth_add_privileged_roles_to_blocked_list: typing.Union[bool, IResolvable] = None,
  odbc_treat_decimal_as_int: typing.Union[bool, IResolvable] = None,
  packages_policy: str = None,
  password_policy: str = None,
  periodic_data_rekeying: typing.Union[bool, IResolvable] = None,
  pipe_execution_paused: typing.Union[bool, IResolvable] = None,
  prevent_unload_to_inline_url: typing.Union[bool, IResolvable] = None,
  prevent_unload_to_internal_stages: typing.Union[bool, IResolvable] = None,
  python_profiler_modules: str = None,
  python_profiler_target_stage: str = None,
  query_tag: str = None,
  quoted_identifiers_ignore_case: typing.Union[bool, IResolvable] = None,
  replace_invalid_characters: typing.Union[bool, IResolvable] = None,
  require_storage_integration_for_stage_creation: typing.Union[bool, IResolvable] = None,
  require_storage_integration_for_stage_operation: typing.Union[bool, IResolvable] = None,
  resource_monitor: str = None,
  rows_per_resultset: typing.Union[int, float] = None,
  s3_stage_vpce_dns_name: str = None,
  saml_identity_provider: str = None,
  search_path: str = None,
  serverless_task_max_statement_size: str = None,
  serverless_task_min_statement_size: str = None,
  session_policy: str = None,
  simulated_data_sharing_consumer: str = None,
  sso_login_page: typing.Union[bool, IResolvable] = None,
  statement_queued_timeout_in_seconds: typing.Union[int, float] = None,
  statement_timeout_in_seconds: typing.Union[int, float] = None,
  storage_serialization_policy: str = None,
  strict_json_output: typing.Union[bool, IResolvable] = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  task_auto_retry_attempts: typing.Union[int, float] = None,
  time_input_format: str = None,
  time_output_format: str = None,
  timeouts: CurrentAccountTimeouts = None,
  timestamp_day_is_always24_h: typing.Union[bool, IResolvable] = None,
  timestamp_input_format: str = None,
  timestamp_ltz_output_format: str = None,
  timestamp_ntz_output_format: str = None,
  timestamp_output_format: str = None,
  timestamp_type_mapping: str = None,
  timestamp_tz_output_format: str = None,
  timezone: str = None,
  trace_level: str = None,
  transaction_abort_on_error: typing.Union[bool, IResolvable] = None,
  transaction_default_isolation_level: str = None,
  two_digit_century_start: typing.Union[int, float] = None,
  unsupported_ddl_action: str = None,
  use_cached_result: typing.Union[bool, IResolvable] = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float] = None,
  user_task_timeout_ms: typing.Union[int, float] = None,
  week_of_year_policy: typing.Union[int, float] = None,
  week_start: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.abortDetachedQuery">abort_detached_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.activePythonProfiler">active_python_profiler</a></code> | <code>str</code> | Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` \| `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.allowClientMfaCaching">allow_client_mfa_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.allowIdToken">allow_id_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.autocommit">autocommit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether autocommit is enabled for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.baseLocationPrefix">base_location_prefix</a></code> | <code>str</code> | Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.binaryInputFormat">binary_input_format</a></code> | <code>str</code> | The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.binaryOutputFormat">binary_output_format</a></code> | <code>str</code> | The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.catalog">catalog</a></code> | <code>str</code> | Specifies the catalog for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.catalogSync">catalog_sync</a></code> | <code>str</code> | Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientEnableLogInfoStatementParameters">client_enable_log_info_statement_parameters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientEncryptionKeySize">client_encryption_key_size</a></code> | <code>typing.Union[int, float]</code> | Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMemoryLimit">client_memory_limit</a></code> | <code>typing.Union[int, float]</code> | Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMetadataRequestUseConnectionCtx">client_metadata_request_use_connection_ctx</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMetadataUseSessionDatabase">client_metadata_use_session_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientPrefetchThreads">client_prefetch_threads</a></code> | <code>typing.Union[int, float]</code> | Parameter that specifies the number of threads used by the client to pre-fetch large result sets. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientResultChunkSize">client_result_chunk_size</a></code> | <code>typing.Union[int, float]</code> | Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientResultColumnCaseInsensitive">client_result_column_case_insensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientSessionKeepAlive">client_session_keep_alive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientSessionKeepAliveHeartbeatFrequency">client_session_keep_alive_heartbeat_frequency</a></code> | <code>typing.Union[int, float]</code> | Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientTimestampTypeMapping">client_timestamp_type_mapping</a></code> | <code>str</code> | Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` \| `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.cortexEnabledCrossRegion">cortex_enabled_cross_region</a></code> | <code>str</code> | Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.cortexModelsAllowlist">cortex_models_allowlist</a></code> | <code>str</code> | Specifies the models that users in the account can access. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.csvTimestampFormat">csv_timestamp_format</a></code> | <code>str</code> | Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dateInputFormat">date_input_format</a></code> | <code>str</code> | Specifies the input format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dateOutputFormat">date_output_format</a></code> | <code>str</code> | Specifies the display format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNotebookComputePoolCpu">default_notebook_compute_pool_cpu</a></code> | <code>str</code> | Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNotebookComputePoolGpu">default_notebook_compute_pool_gpu</a></code> | <code>str</code> | Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNullOrdering">default_null_ordering</a></code> | <code>str</code> | Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` \| `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultStreamlitNotebookWarehouse">default_streamlit_notebook_warehouse</a></code> | <code>str</code> | Specifies the name of the default warehouse to use when creating a notebook. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.disableUiDownloadButton">disable_ui_download_button</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.disableUserPrivilegeGrants">disable_user_privilege_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether users in an account can grant privileges directly to other users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableAutomaticSensitiveDataClassificationLog">enable_automatic_sensitive_data_classification_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableEgressCostOptimizer">enable_egress_cost_optimizer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableIdentifierFirstLogin">enable_identifier_first_login</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines the login flow for users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableInternalStagesPrivatelink">enable_internal_stages_privatelink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForImageRepository">enable_tri_secret_and_rekey_opt_out_for_image_repository</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnhandledExceptionsReporting">enable_unhandled_exceptions_reporting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnloadPhysicalTypeOptimization">enable_unload_physical_type_optimization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnredactedQuerySyntaxError">enable_unredacted_query_syntax_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnredactedSecureObjectError">enable_unredacted_secure_object_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether error messages related to secure objects are redacted in metadata. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enforceNetworkRulesForInternalStages">enforce_network_rules_for_internal_stages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.errorOnNondeterministicMerge">error_on_nondeterministic_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.errorOnNondeterministicUpdate">error_on_nondeterministic_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.eventTable">event_table</a></code> | <code>str</code> | Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.externalOauthAddPrivilegedRolesToBlockedList">external_oauth_add_privileged_roles_to_blocked_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the external volume for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.featurePolicy">feature_policy</a></code> | <code>str</code> | Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.geographyOutputFormat">geography_output_format</a></code> | <code>str</code> | Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.geometryOutputFormat">geometry_output_format</a></code> | <code>str</code> | Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.hybridTableLockTimeout">hybrid_table_lock_timeout</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#id CurrentAccount#id}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.initialReplicationSizeLimitInTb">initial_replication_size_limit_in_tb</a></code> | <code>str</code> | Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcTreatDecimalAsInt">jdbc_treat_decimal_as_int</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcTreatTimestampNtzAsUtc">jdbc_treat_timestamp_ntz_as_utc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcUseSessionTimezone">jdbc_use_session_timezone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jsonIndent">json_indent</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of blank spaces to indent each new element in JSON output in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jsTreatIntegerAsBigint">js_treat_integer_as_bigint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.listingAutoFulfillmentReplicationRefreshSchedule">listing_auto_fulfillment_replication_refresh_schedule</a></code> | <code>str</code> | Sets the time interval used to refresh the application package based data products to other regions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.lockTimeout">lock_timeout</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.logLevel">log_level</a></code> | <code>str</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.maxConcurrencyLevel">max_concurrency_level</a></code> | <code>typing.Union[int, float]</code> | Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.metricLevel">metric_level</a></code> | <code>str</code> | Controls how metrics data is ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.minDataRetentionTimeInDays">min_data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.multiStatementCount">multi_statement_count</a></code> | <code>typing.Union[int, float]</code> | Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.networkPolicy">network_policy</a></code> | <code>str</code> | Specifies the network policy to enforce for your account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.noorderSequenceAsDefault">noorder_sequence_as_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.oauthAddPrivilegedRolesToBlockedList">oauth_add_privileged_roles_to_blocked_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.odbcTreatDecimalAsInt">odbc_treat_decimal_as_int</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.packagesPolicy">packages_policy</a></code> | <code>str</code> | Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.passwordPolicy">password_policy</a></code> | <code>str</code> | Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.periodicDataRekeying">periodic_data_rekeying</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pipeExecutionPaused">pipe_execution_paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.preventUnloadToInlineUrl">prevent_unload_to_inline_url</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.preventUnloadToInternalStages">prevent_unload_to_internal_stages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pythonProfilerModules">python_profiler_modules</a></code> | <code>str</code> | Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pythonProfilerTargetStage">python_profiler_target_stage</a></code> | <code>str</code> | Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.queryTag">query_tag</a></code> | <code>str</code> | Optional string that can be used to tag queries and other SQL statements executed within a session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.requireStorageIntegrationForStageCreation">require_storage_integration_for_stage_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.requireStorageIntegrationForStageOperation">require_storage_integration_for_stage_operation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.resourceMonitor">resource_monitor</a></code> | <code>str</code> | Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.rowsPerResultset">rows_per_resultset</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of rows returned in a result set. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.s3StageVpceDnsName">s3_stage_vpce_dns_name</a></code> | <code>str</code> | Specifies the DNS name of an Amazon S3 interface endpoint. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.samlIdentityProvider">saml_identity_provider</a></code> | <code>str</code> | Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.searchPath">search_path</a></code> | <code>str</code> | Specifies the path to search to resolve unqualified object names in queries. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.serverlessTaskMaxStatementSize">serverless_task_max_statement_size</a></code> | <code>str</code> | Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.serverlessTaskMinStatementSize">serverless_task_min_statement_size</a></code> | <code>str</code> | Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.sessionPolicy">session_policy</a></code> | <code>str</code> | Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.simulatedDataSharingConsumer">simulated_data_sharing_consumer</a></code> | <code>str</code> | Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.ssoLoginPage">sso_login_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` \| `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.strictJsonOutput">strict_json_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of automatic task graph retry attempts. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeInputFormat">time_input_format</a></code> | <code>str</code> | Specifies the input format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeOutputFormat">time_output_format</a></code> | <code>str</code> | Specifies the display format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampDayIsAlways24H">timestamp_day_is_always24_h</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampInputFormat">timestamp_input_format</a></code> | <code>str</code> | Specifies the input format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampLtzOutputFormat">timestamp_ltz_output_format</a></code> | <code>str</code> | Specifies the display format for the TIMESTAMP_LTZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampNtzOutputFormat">timestamp_ntz_output_format</a></code> | <code>str</code> | Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampOutputFormat">timestamp_output_format</a></code> | <code>str</code> | Specifies the display format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampTypeMapping">timestamp_type_mapping</a></code> | <code>str</code> | Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampTzOutputFormat">timestamp_tz_output_format</a></code> | <code>str</code> | Specifies the display format for the TIMESTAMP_TZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timezone">timezone</a></code> | <code>str</code> | Specifies the time zone for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.traceLevel">trace_level</a></code> | <code>str</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.transactionAbortOnError">transaction_abort_on_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.transactionDefaultIsolationLevel">transaction_default_isolation_level</a></code> | <code>str</code> | Specifies the isolation level for transactions in the user session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.twoDigitCenturyStart">two_digit_century_start</a></code> | <code>typing.Union[int, float]</code> | Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.unsupportedDdlAction">unsupported_ddl_action</a></code> | <code>str</code> | Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.useCachedResult">use_cached_result</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to reuse persisted query results, if available, when a matching query is submitted. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.weekOfYearPolicy">week_of_year_policy</a></code> | <code>typing.Union[int, float]</code> | Specifies how the weeks in a given year are computed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.weekStart">week_start</a></code> | <code>typing.Union[int, float]</code> | Specifies the first day of the week (used by week-related date functions). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abort_detached_query`<sup>Optional</sup> <a name="abort_detached_query" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.abortDetachedQuery"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#abort_detached_query CurrentAccount#abort_detached_query}

---

##### `active_python_profiler`<sup>Optional</sup> <a name="active_python_profiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.activePythonProfiler"></a>

- *Type:* str

Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#active_python_profiler CurrentAccount#active_python_profiler}

---

##### `allow_client_mfa_caching`<sup>Optional</sup> <a name="allow_client_mfa_caching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.allowClientMfaCaching"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#allow_client_mfa_caching CurrentAccount#allow_client_mfa_caching}

---

##### `allow_id_token`<sup>Optional</sup> <a name="allow_id_token" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.allowIdToken"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#allow_id_token CurrentAccount#allow_id_token}

---

##### `authentication_policy`<sup>Optional</sup> <a name="authentication_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.authenticationPolicy"></a>

- *Type:* str

Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#authentication_policy CurrentAccount#authentication_policy}

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.autocommit"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether autocommit is enabled for the session.

Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#autocommit CurrentAccount#autocommit}

---

##### `base_location_prefix`<sup>Optional</sup> <a name="base_location_prefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.baseLocationPrefix"></a>

- *Type:* str

Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables.

For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#base_location_prefix CurrentAccount#base_location_prefix}

---

##### `binary_input_format`<sup>Optional</sup> <a name="binary_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.binaryInputFormat"></a>

- *Type:* str

The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#binary_input_format CurrentAccount#binary_input_format}

---

##### `binary_output_format`<sup>Optional</sup> <a name="binary_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.binaryOutputFormat"></a>

- *Type:* str

The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#binary_output_format CurrentAccount#binary_output_format}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.catalog"></a>

- *Type:* str

Specifies the catalog for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#catalog CurrentAccount#catalog}

---

##### `catalog_sync`<sup>Optional</sup> <a name="catalog_sync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.catalogSync"></a>

- *Type:* str

Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#catalog_sync CurrentAccount#catalog_sync}

---

##### `client_enable_log_info_statement_parameters`<sup>Optional</sup> <a name="client_enable_log_info_statement_parameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientEnableLogInfoStatementParameters"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_enable_log_info_statement_parameters CurrentAccount#client_enable_log_info_statement_parameters}

---

##### `client_encryption_key_size`<sup>Optional</sup> <a name="client_encryption_key_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientEncryptionKeySize"></a>

- *Type:* typing.Union[int, float]

Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type.

For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_encryption_key_size CurrentAccount#client_encryption_key_size}

---

##### `client_memory_limit`<sup>Optional</sup> <a name="client_memory_limit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMemoryLimit"></a>

- *Type:* typing.Union[int, float]

Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB).

For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_memory_limit CurrentAccount#client_memory_limit}

---

##### `client_metadata_request_use_connection_ctx`<sup>Optional</sup> <a name="client_metadata_request_use_connection_ctx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMetadataRequestUseConnectionCtx"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema.

The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_metadata_request_use_connection_ctx CurrentAccount#client_metadata_request_use_connection_ctx}

---

##### `client_metadata_use_session_database`<sup>Optional</sup> <a name="client_metadata_use_session_database" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMetadataUseSessionDatabase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database.

The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_metadata_use_session_database CurrentAccount#client_metadata_use_session_database}

---

##### `client_prefetch_threads`<sup>Optional</sup> <a name="client_prefetch_threads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientPrefetchThreads"></a>

- *Type:* typing.Union[int, float]

Parameter that specifies the number of threads used by the client to pre-fetch large result sets.

The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_prefetch_threads CurrentAccount#client_prefetch_threads}

---

##### `client_result_chunk_size`<sup>Optional</sup> <a name="client_result_chunk_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientResultChunkSize"></a>

- *Type:* typing.Union[int, float]

Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB).

The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_result_chunk_size CurrentAccount#client_result_chunk_size}

---

##### `client_result_column_case_insensitive`<sup>Optional</sup> <a name="client_result_column_case_insensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientResultColumnCaseInsensitive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_result_column_case_insensitive CurrentAccount#client_result_column_case_insensitive}

---

##### `client_session_keep_alive`<sup>Optional</sup> <a name="client_session_keep_alive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientSessionKeepAlive"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Parameter that indicates whether to force a user to log in again after a period of inactivity in the session.

For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_session_keep_alive CurrentAccount#client_session_keep_alive}

---

##### `client_session_keep_alive_heartbeat_frequency`<sup>Optional</sup> <a name="client_session_keep_alive_heartbeat_frequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientSessionKeepAliveHeartbeatFrequency"></a>

- *Type:* typing.Union[int, float]

Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_session_keep_alive_heartbeat_frequency CurrentAccount#client_session_keep_alive_heartbeat_frequency}

---

##### `client_timestamp_type_mapping`<sup>Optional</sup> <a name="client_timestamp_type_mapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientTimestampTypeMapping"></a>

- *Type:* str

Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_timestamp_type_mapping CurrentAccount#client_timestamp_type_mapping}

---

##### `cortex_enabled_cross_region`<sup>Optional</sup> <a name="cortex_enabled_cross_region" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.cortexEnabledCrossRegion"></a>

- *Type:* str

Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed.

Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#cortex_enabled_cross_region CurrentAccount#cortex_enabled_cross_region}

---

##### `cortex_models_allowlist`<sup>Optional</sup> <a name="cortex_models_allowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.cortexModelsAllowlist"></a>

- *Type:* str

Specifies the models that users in the account can access.

Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#cortex_models_allowlist CurrentAccount#cortex_models_allowlist}

---

##### `csv_timestamp_format`<sup>Optional</sup> <a name="csv_timestamp_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.csvTimestampFormat"></a>

- *Type:* str

Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight.

If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#csv_timestamp_format CurrentAccount#csv_timestamp_format}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#data_retention_time_in_days CurrentAccount#data_retention_time_in_days}

---

##### `date_input_format`<sup>Optional</sup> <a name="date_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dateInputFormat"></a>

- *Type:* str

Specifies the input format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#date_input_format CurrentAccount#date_input_format}

---

##### `date_output_format`<sup>Optional</sup> <a name="date_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dateOutputFormat"></a>

- *Type:* str

Specifies the display format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#date_output_format CurrentAccount#date_output_format}

---

##### `default_ddl_collation`<sup>Optional</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultDdlCollation"></a>

- *Type:* str

Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_ddl_collation CurrentAccount#default_ddl_collation}

---

##### `default_notebook_compute_pool_cpu`<sup>Optional</sup> <a name="default_notebook_compute_pool_cpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNotebookComputePoolCpu"></a>

- *Type:* str

Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_notebook_compute_pool_cpu CurrentAccount#default_notebook_compute_pool_cpu}

---

##### `default_notebook_compute_pool_gpu`<sup>Optional</sup> <a name="default_notebook_compute_pool_gpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNotebookComputePoolGpu"></a>

- *Type:* str

Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_notebook_compute_pool_gpu CurrentAccount#default_notebook_compute_pool_gpu}

---

##### `default_null_ordering`<sup>Optional</sup> <a name="default_null_ordering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNullOrdering"></a>

- *Type:* str

Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_null_ordering CurrentAccount#default_null_ordering}

---

##### `default_streamlit_notebook_warehouse`<sup>Optional</sup> <a name="default_streamlit_notebook_warehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultStreamlitNotebookWarehouse"></a>

- *Type:* str

Specifies the name of the default warehouse to use when creating a notebook.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_streamlit_notebook_warehouse CurrentAccount#default_streamlit_notebook_warehouse}

---

##### `disable_ui_download_button`<sup>Optional</sup> <a name="disable_ui_download_button" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.disableUiDownloadButton"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet.

If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#disable_ui_download_button CurrentAccount#disable_ui_download_button}

---

##### `disable_user_privilege_grants`<sup>Optional</sup> <a name="disable_user_privilege_grants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.disableUserPrivilegeGrants"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether users in an account can grant privileges directly to other users.

Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#disable_user_privilege_grants CurrentAccount#disable_user_privilege_grants}

---

##### `enable_automatic_sensitive_data_classification_log`<sup>Optional</sup> <a name="enable_automatic_sensitive_data_classification_log" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableAutomaticSensitiveDataClassificationLog"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_automatic_sensitive_data_classification_log CurrentAccount#enable_automatic_sensitive_data_classification_log}

---

##### `enable_egress_cost_optimizer`<sup>Optional</sup> <a name="enable_egress_cost_optimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableEgressCostOptimizer"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_egress_cost_optimizer CurrentAccount#enable_egress_cost_optimizer}

---

##### `enable_identifier_first_login`<sup>Optional</sup> <a name="enable_identifier_first_login" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableIdentifierFirstLogin"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the login flow for users.

When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_identifier_first_login CurrentAccount#enable_identifier_first_login}

---

##### `enable_internal_stages_privatelink`<sup>Optional</sup> <a name="enable_internal_stages_privatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableInternalStagesPrivatelink"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_internal_stages_privatelink CurrentAccount#enable_internal_stages_privatelink}

---

##### `enable_tri_secret_and_rekey_opt_out_for_image_repository`<sup>Optional</sup> <a name="enable_tri_secret_and_rekey_opt_out_for_image_repository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForImageRepository"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}

---

##### `enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage`<sup>Optional</sup> <a name="enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}

---

##### `enable_unhandled_exceptions_reporting`<sup>Optional</sup> <a name="enable_unhandled_exceptions_reporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnhandledExceptionsReporting"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code.

For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_unhandled_exceptions_reporting CurrentAccount#enable_unhandled_exceptions_reporting}

---

##### `enable_unload_physical_type_optimization`<sup>Optional</sup> <a name="enable_unload_physical_type_optimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnloadPhysicalTypeOptimization"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_unload_physical_type_optimization CurrentAccount#enable_unload_physical_type_optimization}

---

##### `enable_unredacted_query_syntax_error`<sup>Optional</sup> <a name="enable_unredacted_query_syntax_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnredactedQuerySyntaxError"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error.

If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_unredacted_query_syntax_error CurrentAccount#enable_unredacted_query_syntax_error}

---

##### `enable_unredacted_secure_object_error`<sup>Optional</sup> <a name="enable_unredacted_secure_object_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnredactedSecureObjectError"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether error messages related to secure objects are redacted in metadata.

For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_unredacted_secure_object_error CurrentAccount#enable_unredacted_secure_object_error}

---

##### `enforce_network_rules_for_internal_stages`<sup>Optional</sup> <a name="enforce_network_rules_for_internal_stages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enforceNetworkRulesForInternalStages"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether a network policy that uses network rules can restrict access to AWS internal stages.

This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enforce_network_rules_for_internal_stages CurrentAccount#enforce_network_rules_for_internal_stages}

---

##### `error_on_nondeterministic_merge`<sup>Optional</sup> <a name="error_on_nondeterministic_merge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.errorOnNondeterministicMerge"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#error_on_nondeterministic_merge CurrentAccount#error_on_nondeterministic_merge}

---

##### `error_on_nondeterministic_update`<sup>Optional</sup> <a name="error_on_nondeterministic_update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.errorOnNondeterministicUpdate"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#error_on_nondeterministic_update CurrentAccount#error_on_nondeterministic_update}

---

##### `event_table`<sup>Optional</sup> <a name="event_table" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.eventTable"></a>

- *Type:* str

Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated.

Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#event_table CurrentAccount#event_table}

---

##### `external_oauth_add_privileged_roles_to_blocked_list`<sup>Optional</sup> <a name="external_oauth_add_privileged_roles_to_blocked_list" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.externalOauthAddPrivilegedRolesToBlockedList"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server.

For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#external_oauth_add_privileged_roles_to_blocked_list CurrentAccount#external_oauth_add_privileged_roles_to_blocked_list}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.externalVolume"></a>

- *Type:* str

Specifies the external volume for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#external_volume CurrentAccount#external_volume}

---

##### `feature_policy`<sup>Optional</sup> <a name="feature_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.featurePolicy"></a>

- *Type:* str

Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#feature_policy CurrentAccount#feature_policy}

---

##### `geography_output_format`<sup>Optional</sup> <a name="geography_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.geographyOutputFormat"></a>

- *Type:* str

Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#geography_output_format CurrentAccount#geography_output_format}

---

##### `geometry_output_format`<sup>Optional</sup> <a name="geometry_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.geometryOutputFormat"></a>

- *Type:* str

Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#geometry_output_format CurrentAccount#geometry_output_format}

---

##### `hybrid_table_lock_timeout`<sup>Optional</sup> <a name="hybrid_table_lock_timeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.hybridTableLockTimeout"></a>

- *Type:* typing.Union[int, float]

Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement.

For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#hybrid_table_lock_timeout CurrentAccount#hybrid_table_lock_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#id CurrentAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_replication_size_limit_in_tb`<sup>Optional</sup> <a name="initial_replication_size_limit_in_tb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.initialReplicationSizeLimitInTb"></a>

- *Type:* str

Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB).

Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#initial_replication_size_limit_in_tb CurrentAccount#initial_replication_size_limit_in_tb}

---

##### `jdbc_treat_decimal_as_int`<sup>Optional</sup> <a name="jdbc_treat_decimal_as_int" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcTreatDecimalAsInt"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#jdbc_treat_decimal_as_int CurrentAccount#jdbc_treat_decimal_as_int}

---

##### `jdbc_treat_timestamp_ntz_as_utc`<sup>Optional</sup> <a name="jdbc_treat_timestamp_ntz_as_utc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcTreatTimestampNtzAsUtc"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#jdbc_treat_timestamp_ntz_as_utc CurrentAccount#jdbc_treat_timestamp_ntz_as_utc}

---

##### `jdbc_use_session_timezone`<sup>Optional</sup> <a name="jdbc_use_session_timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcUseSessionTimezone"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#jdbc_use_session_timezone CurrentAccount#jdbc_use_session_timezone}

---

##### `json_indent`<sup>Optional</sup> <a name="json_indent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jsonIndent"></a>

- *Type:* typing.Union[int, float]

Specifies the number of blank spaces to indent each new element in JSON output in the session.

Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#json_indent CurrentAccount#json_indent}

---

##### `js_treat_integer_as_bigint`<sup>Optional</sup> <a name="js_treat_integer_as_bigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jsTreatIntegerAsBigint"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#js_treat_integer_as_bigint CurrentAccount#js_treat_integer_as_bigint}

---

##### `listing_auto_fulfillment_replication_refresh_schedule`<sup>Optional</sup> <a name="listing_auto_fulfillment_replication_refresh_schedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.listingAutoFulfillmentReplicationRefreshSchedule"></a>

- *Type:* str

Sets the time interval used to refresh the application package based data products to other regions.

For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#listing_auto_fulfillment_replication_refresh_schedule CurrentAccount#listing_auto_fulfillment_replication_refresh_schedule}

---

##### `lock_timeout`<sup>Optional</sup> <a name="lock_timeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.lockTimeout"></a>

- *Type:* typing.Union[int, float]

Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement.

For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#lock_timeout CurrentAccount#lock_timeout}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.logLevel"></a>

- *Type:* str

Specifies the severity level of messages that should be ingested and made available in the active event table.

Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#log_level CurrentAccount#log_level}

---

##### `max_concurrency_level`<sup>Optional</sup> <a name="max_concurrency_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.maxConcurrencyLevel"></a>

- *Type:* typing.Union[int, float]

Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#max_concurrency_level CurrentAccount#max_concurrency_level}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale.

By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#max_data_extension_time_in_days CurrentAccount#max_data_extension_time_in_days}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.metricLevel"></a>

- *Type:* str

Controls how metrics data is ingested into the event table.

For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#metric_level CurrentAccount#metric_level}

---

##### `min_data_retention_time_in_days`<sup>Optional</sup> <a name="min_data_retention_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.minDataRetentionTimeInDays"></a>

- *Type:* typing.Union[int, float]

Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object.

If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#min_data_retention_time_in_days CurrentAccount#min_data_retention_time_in_days}

---

##### `multi_statement_count`<sup>Optional</sup> <a name="multi_statement_count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.multiStatementCount"></a>

- *Type:* typing.Union[int, float]

Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#multi_statement_count CurrentAccount#multi_statement_count}

---

##### `network_policy`<sup>Optional</sup> <a name="network_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.networkPolicy"></a>

- *Type:* str

Specifies the network policy to enforce for your account.

Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#network_policy CurrentAccount#network_policy}

---

##### `noorder_sequence_as_default`<sup>Optional</sup> <a name="noorder_sequence_as_default" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.noorderSequenceAsDefault"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column.

The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#noorder_sequence_as_default CurrentAccount#noorder_sequence_as_default}

---

##### `oauth_add_privileged_roles_to_blocked_list`<sup>Optional</sup> <a name="oauth_add_privileged_roles_to_blocked_list" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.oauthAddPrivilegedRolesToBlockedList"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server.

For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#oauth_add_privileged_roles_to_blocked_list CurrentAccount#oauth_add_privileged_roles_to_blocked_list}

---

##### `odbc_treat_decimal_as_int`<sup>Optional</sup> <a name="odbc_treat_decimal_as_int" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.odbcTreatDecimalAsInt"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#odbc_treat_decimal_as_int CurrentAccount#odbc_treat_decimal_as_int}

---

##### `packages_policy`<sup>Optional</sup> <a name="packages_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.packagesPolicy"></a>

- *Type:* str

Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#packages_policy CurrentAccount#packages_policy}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.passwordPolicy"></a>

- *Type:* str

Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#password_policy CurrentAccount#password_policy}

---

##### `periodic_data_rekeying`<sup>Optional</sup> <a name="periodic_data_rekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.periodicDataRekeying"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#periodic_data_rekeying CurrentAccount#periodic_data_rekeying}

---

##### `pipe_execution_paused`<sup>Optional</sup> <a name="pipe_execution_paused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pipeExecutionPaused"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#pipe_execution_paused CurrentAccount#pipe_execution_paused}

---

##### `prevent_unload_to_inline_url`<sup>Optional</sup> <a name="prevent_unload_to_inline_url" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.preventUnloadToInlineUrl"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#prevent_unload_to_inline_url CurrentAccount#prevent_unload_to_inline_url}

---

##### `prevent_unload_to_internal_stages`<sup>Optional</sup> <a name="prevent_unload_to_internal_stages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.preventUnloadToInternalStages"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#prevent_unload_to_internal_stages CurrentAccount#prevent_unload_to_internal_stages}

---

##### `python_profiler_modules`<sup>Optional</sup> <a name="python_profiler_modules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pythonProfilerModules"></a>

- *Type:* str

Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#python_profiler_modules CurrentAccount#python_profiler_modules}

---

##### `python_profiler_target_stage`<sup>Optional</sup> <a name="python_profiler_target_stage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pythonProfilerTargetStage"></a>

- *Type:* str

Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#python_profiler_target_stage CurrentAccount#python_profiler_target_stage}

---

##### `query_tag`<sup>Optional</sup> <a name="query_tag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.queryTag"></a>

- *Type:* str

Optional string that can be used to tag queries and other SQL statements executed within a session.

The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#query_tag CurrentAccount#query_tag}

---

##### `quoted_identifiers_ignore_case`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.quotedIdentifiersIgnoreCase"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters.

By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#quoted_identifiers_ignore_case CurrentAccount#quoted_identifiers_ignore_case}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#replace_invalid_characters CurrentAccount#replace_invalid_characters}

---

##### `require_storage_integration_for_stage_creation`<sup>Optional</sup> <a name="require_storage_integration_for_stage_creation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.requireStorageIntegrationForStageCreation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#require_storage_integration_for_stage_creation CurrentAccount#require_storage_integration_for_stage_creation}

---

##### `require_storage_integration_for_stage_operation`<sup>Optional</sup> <a name="require_storage_integration_for_stage_operation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.requireStorageIntegrationForStageOperation"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location.

For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#require_storage_integration_for_stage_operation CurrentAccount#require_storage_integration_for_stage_operation}

---

##### `resource_monitor`<sup>Optional</sup> <a name="resource_monitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.resourceMonitor"></a>

- *Type:* str

Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#resource_monitor CurrentAccount#resource_monitor}

---

##### `rows_per_resultset`<sup>Optional</sup> <a name="rows_per_resultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.rowsPerResultset"></a>

- *Type:* typing.Union[int, float]

Specifies the maximum number of rows returned in a result set.

A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#rows_per_resultset CurrentAccount#rows_per_resultset}

---

##### `s3_stage_vpce_dns_name`<sup>Optional</sup> <a name="s3_stage_vpce_dns_name" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.s3StageVpceDnsName"></a>

- *Type:* str

Specifies the DNS name of an Amazon S3 interface endpoint.

Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#s3_stage_vpce_dns_name CurrentAccount#s3_stage_vpce_dns_name}

---

##### `saml_identity_provider`<sup>Optional</sup> <a name="saml_identity_provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.samlIdentityProvider"></a>

- *Type:* str

Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#saml_identity_provider CurrentAccount#saml_identity_provider}

---

##### `search_path`<sup>Optional</sup> <a name="search_path" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.searchPath"></a>

- *Type:* str

Specifies the path to search to resolve unqualified object names in queries.

For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#search_path CurrentAccount#search_path}

---

##### `serverless_task_max_statement_size`<sup>Optional</sup> <a name="serverless_task_max_statement_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.serverlessTaskMaxStatementSize"></a>

- *Type:* str

Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#serverless_task_max_statement_size CurrentAccount#serverless_task_max_statement_size}

---

##### `serverless_task_min_statement_size`<sup>Optional</sup> <a name="serverless_task_min_statement_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.serverlessTaskMinStatementSize"></a>

- *Type:* str

Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#serverless_task_min_statement_size CurrentAccount#serverless_task_min_statement_size}

---

##### `session_policy`<sup>Optional</sup> <a name="session_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.sessionPolicy"></a>

- *Type:* str

Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#session_policy CurrentAccount#session_policy}

---

##### `simulated_data_sharing_consumer`<sup>Optional</sup> <a name="simulated_data_sharing_consumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.simulatedDataSharingConsumer"></a>

- *Type:* str

Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views.

When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#simulated_data_sharing_consumer CurrentAccount#simulated_data_sharing_consumer}

---

##### `sso_login_page`<sup>Optional</sup> <a name="sso_login_page" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.ssoLoginPage"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users.

For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#sso_login_page CurrentAccount#sso_login_page}

---

##### `statement_queued_timeout_in_seconds`<sup>Optional</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.statementQueuedTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#statement_queued_timeout_in_seconds CurrentAccount#statement_queued_timeout_in_seconds}

---

##### `statement_timeout_in_seconds`<sup>Optional</sup> <a name="statement_timeout_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.statementTimeoutInSeconds"></a>

- *Type:* typing.Union[int, float]

Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#statement_timeout_in_seconds CurrentAccount#statement_timeout_in_seconds}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* str

Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#storage_serialization_policy CurrentAccount#storage_serialization_policy}

---

##### `strict_json_output`<sup>Optional</sup> <a name="strict_json_output" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.strictJsonOutput"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#strict_json_output CurrentAccount#strict_json_output}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.suspendTaskAfterNumFailures"></a>

- *Type:* typing.Union[int, float]

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#suspend_task_after_num_failures CurrentAccount#suspend_task_after_num_failures}

---

##### `task_auto_retry_attempts`<sup>Optional</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.taskAutoRetryAttempts"></a>

- *Type:* typing.Union[int, float]

Specifies the number of automatic task graph retry attempts.

If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#task_auto_retry_attempts CurrentAccount#task_auto_retry_attempts}

---

##### `time_input_format`<sup>Optional</sup> <a name="time_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeInputFormat"></a>

- *Type:* str

Specifies the input format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#time_input_format CurrentAccount#time_input_format}

---

##### `time_output_format`<sup>Optional</sup> <a name="time_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeOutputFormat"></a>

- *Type:* str

Specifies the display format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#time_output_format CurrentAccount#time_output_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timeouts CurrentAccount#timeouts}

---

##### `timestamp_day_is_always24_h`<sup>Optional</sup> <a name="timestamp_day_is_always24_h" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampDayIsAlways24H"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_day_is_always_24h CurrentAccount#timestamp_day_is_always_24h}

---

##### `timestamp_input_format`<sup>Optional</sup> <a name="timestamp_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampInputFormat"></a>

- *Type:* str

Specifies the input format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_input_format CurrentAccount#timestamp_input_format}

---

##### `timestamp_ltz_output_format`<sup>Optional</sup> <a name="timestamp_ltz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampLtzOutputFormat"></a>

- *Type:* str

Specifies the display format for the TIMESTAMP_LTZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_ltz_output_format CurrentAccount#timestamp_ltz_output_format}

---

##### `timestamp_ntz_output_format`<sup>Optional</sup> <a name="timestamp_ntz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampNtzOutputFormat"></a>

- *Type:* str

Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_ntz_output_format CurrentAccount#timestamp_ntz_output_format}

---

##### `timestamp_output_format`<sup>Optional</sup> <a name="timestamp_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampOutputFormat"></a>

- *Type:* str

Specifies the display format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_output_format CurrentAccount#timestamp_output_format}

---

##### `timestamp_type_mapping`<sup>Optional</sup> <a name="timestamp_type_mapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampTypeMapping"></a>

- *Type:* str

Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to.

Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_type_mapping CurrentAccount#timestamp_type_mapping}

---

##### `timestamp_tz_output_format`<sup>Optional</sup> <a name="timestamp_tz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampTzOutputFormat"></a>

- *Type:* str

Specifies the display format for the TIMESTAMP_TZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_tz_output_format CurrentAccount#timestamp_tz_output_format}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timezone"></a>

- *Type:* str

Specifies the time zone for the session.

You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timezone CurrentAccount#timezone}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.traceLevel"></a>

- *Type:* str

Controls how trace events are ingested into the event table.

For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#trace_level CurrentAccount#trace_level}

---

##### `transaction_abort_on_error`<sup>Optional</sup> <a name="transaction_abort_on_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.transactionAbortOnError"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error.

For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#transaction_abort_on_error CurrentAccount#transaction_abort_on_error}

---

##### `transaction_default_isolation_level`<sup>Optional</sup> <a name="transaction_default_isolation_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.transactionDefaultIsolationLevel"></a>

- *Type:* str

Specifies the isolation level for transactions in the user session.

Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#transaction_default_isolation_level CurrentAccount#transaction_default_isolation_level}

---

##### `two_digit_century_start`<sup>Optional</sup> <a name="two_digit_century_start" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.twoDigitCenturyStart"></a>

- *Type:* typing.Union[int, float]

Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#two_digit_century_start CurrentAccount#two_digit_century_start}

---

##### `unsupported_ddl_action`<sup>Optional</sup> <a name="unsupported_ddl_action" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.unsupportedDdlAction"></a>

- *Type:* str

Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#unsupported_ddl_action CurrentAccount#unsupported_ddl_action}

---

##### `use_cached_result`<sup>Optional</sup> <a name="use_cached_result" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.useCachedResult"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to reuse persisted query results, if available, when a matching query is submitted.

For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#use_cached_result CurrentAccount#use_cached_result}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskManagedInitialWarehouseSize"></a>

- *Type:* str

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#user_task_managed_initial_warehouse_size CurrentAccount#user_task_managed_initial_warehouse_size}

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds"></a>

- *Type:* typing.Union[int, float]

Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#user_task_minimum_trigger_interval_in_seconds CurrentAccount#user_task_minimum_trigger_interval_in_seconds}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskTimeoutMs"></a>

- *Type:* typing.Union[int, float]

Specifies the time limit on a single run of the task before it times out (in milliseconds).

For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#user_task_timeout_ms CurrentAccount#user_task_timeout_ms}

---

##### `week_of_year_policy`<sup>Optional</sup> <a name="week_of_year_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.weekOfYearPolicy"></a>

- *Type:* typing.Union[int, float]

Specifies how the weeks in a given year are computed.

`0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#week_of_year_policy CurrentAccount#week_of_year_policy}

---

##### `week_start`<sup>Optional</sup> <a name="week_start" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.weekStart"></a>

- *Type:* typing.Union[int, float]

Specifies the first day of the week (used by week-related date functions).

`0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#week_start CurrentAccount#week_start}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAbortDetachedQuery">reset_abort_detached_query</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetActivePythonProfiler">reset_active_python_profiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowClientMfaCaching">reset_allow_client_mfa_caching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowIdToken">reset_allow_id_token</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAuthenticationPolicy">reset_authentication_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAutocommit">reset_autocommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBaseLocationPrefix">reset_base_location_prefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryInputFormat">reset_binary_input_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryOutputFormat">reset_binary_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalog">reset_catalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalogSync">reset_catalog_sync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEnableLogInfoStatementParameters">reset_client_enable_log_info_statement_parameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEncryptionKeySize">reset_client_encryption_key_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMemoryLimit">reset_client_memory_limit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataRequestUseConnectionCtx">reset_client_metadata_request_use_connection_ctx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataUseSessionDatabase">reset_client_metadata_use_session_database</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientPrefetchThreads">reset_client_prefetch_threads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultChunkSize">reset_client_result_chunk_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultColumnCaseInsensitive">reset_client_result_column_case_insensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAlive">reset_client_session_keep_alive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAliveHeartbeatFrequency">reset_client_session_keep_alive_heartbeat_frequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientTimestampTypeMapping">reset_client_timestamp_type_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexEnabledCrossRegion">reset_cortex_enabled_cross_region</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexModelsAllowlist">reset_cortex_models_allowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCsvTimestampFormat">reset_csv_timestamp_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDataRetentionTimeInDays">reset_data_retention_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateInputFormat">reset_date_input_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateOutputFormat">reset_date_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultDdlCollation">reset_default_ddl_collation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolCpu">reset_default_notebook_compute_pool_cpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolGpu">reset_default_notebook_compute_pool_gpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNullOrdering">reset_default_null_ordering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultStreamlitNotebookWarehouse">reset_default_streamlit_notebook_warehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUiDownloadButton">reset_disable_ui_download_button</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUserPrivilegeGrants">reset_disable_user_privilege_grants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableAutomaticSensitiveDataClassificationLog">reset_enable_automatic_sensitive_data_classification_log</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableEgressCostOptimizer">reset_enable_egress_cost_optimizer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableIdentifierFirstLogin">reset_enable_identifier_first_login</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableInternalStagesPrivatelink">reset_enable_internal_stages_privatelink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository">reset_enable_tri_secret_and_rekey_opt_out_for_image_repository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage">reset_enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnhandledExceptionsReporting">reset_enable_unhandled_exceptions_reporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnloadPhysicalTypeOptimization">reset_enable_unload_physical_type_optimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedQuerySyntaxError">reset_enable_unredacted_query_syntax_error</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedSecureObjectError">reset_enable_unredacted_secure_object_error</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnforceNetworkRulesForInternalStages">reset_enforce_network_rules_for_internal_stages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicMerge">reset_error_on_nondeterministic_merge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicUpdate">reset_error_on_nondeterministic_update</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEventTable">reset_event_table</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalOauthAddPrivilegedRolesToBlockedList">reset_external_oauth_add_privileged_roles_to_blocked_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalVolume">reset_external_volume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetFeaturePolicy">reset_feature_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeographyOutputFormat">reset_geography_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeometryOutputFormat">reset_geometry_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetHybridTableLockTimeout">reset_hybrid_table_lock_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetInitialReplicationSizeLimitInTb">reset_initial_replication_size_limit_in_tb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatDecimalAsInt">reset_jdbc_treat_decimal_as_int</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatTimestampNtzAsUtc">reset_jdbc_treat_timestamp_ntz_as_utc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcUseSessionTimezone">reset_jdbc_use_session_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsonIndent">reset_json_indent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsTreatIntegerAsBigint">reset_js_treat_integer_as_bigint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetListingAutoFulfillmentReplicationRefreshSchedule">reset_listing_auto_fulfillment_replication_refresh_schedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLockTimeout">reset_lock_timeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLogLevel">reset_log_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxConcurrencyLevel">reset_max_concurrency_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxDataExtensionTimeInDays">reset_max_data_extension_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMetricLevel">reset_metric_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMinDataRetentionTimeInDays">reset_min_data_retention_time_in_days</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMultiStatementCount">reset_multi_statement_count</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNetworkPolicy">reset_network_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNoorderSequenceAsDefault">reset_noorder_sequence_as_default</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOauthAddPrivilegedRolesToBlockedList">reset_oauth_add_privileged_roles_to_blocked_list</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOdbcTreatDecimalAsInt">reset_odbc_treat_decimal_as_int</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPackagesPolicy">reset_packages_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPasswordPolicy">reset_password_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPeriodicDataRekeying">reset_periodic_data_rekeying</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPipeExecutionPaused">reset_pipe_execution_paused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInlineUrl">reset_prevent_unload_to_inline_url</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInternalStages">reset_prevent_unload_to_internal_stages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerModules">reset_python_profiler_modules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerTargetStage">reset_python_profiler_target_stage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQueryTag">reset_query_tag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQuotedIdentifiersIgnoreCase">reset_quoted_identifiers_ignore_case</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetReplaceInvalidCharacters">reset_replace_invalid_characters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageCreation">reset_require_storage_integration_for_stage_creation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageOperation">reset_require_storage_integration_for_stage_operation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetResourceMonitor">reset_resource_monitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRowsPerResultset">reset_rows_per_resultset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetS3StageVpceDnsName">reset_s3_stage_vpce_dns_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSamlIdentityProvider">reset_saml_identity_provider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSearchPath">reset_search_path</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMaxStatementSize">reset_serverless_task_max_statement_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMinStatementSize">reset_serverless_task_min_statement_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSessionPolicy">reset_session_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSimulatedDataSharingConsumer">reset_simulated_data_sharing_consumer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSsoLoginPage">reset_sso_login_page</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementQueuedTimeoutInSeconds">reset_statement_queued_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementTimeoutInSeconds">reset_statement_timeout_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStorageSerializationPolicy">reset_storage_serialization_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStrictJsonOutput">reset_strict_json_output</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSuspendTaskAfterNumFailures">reset_suspend_task_after_num_failures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTaskAutoRetryAttempts">reset_task_auto_retry_attempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeInputFormat">reset_time_input_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeOutputFormat">reset_time_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampDayIsAlways24H">reset_timestamp_day_is_always24_h</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampInputFormat">reset_timestamp_input_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampLtzOutputFormat">reset_timestamp_ltz_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampNtzOutputFormat">reset_timestamp_ntz_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampOutputFormat">reset_timestamp_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTypeMapping">reset_timestamp_type_mapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTzOutputFormat">reset_timestamp_tz_output_format</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimezone">reset_timezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTraceLevel">reset_trace_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionAbortOnError">reset_transaction_abort_on_error</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionDefaultIsolationLevel">reset_transaction_default_isolation_level</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTwoDigitCenturyStart">reset_two_digit_century_start</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUnsupportedDdlAction">reset_unsupported_ddl_action</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUseCachedResult">reset_use_cached_result</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskManagedInitialWarehouseSize">reset_user_task_managed_initial_warehouse_size</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskMinimumTriggerIntervalInSeconds">reset_user_task_minimum_trigger_interval_in_seconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskTimeoutMs">reset_user_task_timeout_ms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekOfYearPolicy">reset_week_of_year_policy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekStart">reset_week_start</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#create CurrentAccount#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#delete CurrentAccount#delete}.

---

###### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts.parameter.read"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#read CurrentAccount#read}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#update CurrentAccount#update}.

---

##### `reset_abort_detached_query` <a name="reset_abort_detached_query" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAbortDetachedQuery"></a>

```python
def reset_abort_detached_query() -> None
```

##### `reset_active_python_profiler` <a name="reset_active_python_profiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetActivePythonProfiler"></a>

```python
def reset_active_python_profiler() -> None
```

##### `reset_allow_client_mfa_caching` <a name="reset_allow_client_mfa_caching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowClientMfaCaching"></a>

```python
def reset_allow_client_mfa_caching() -> None
```

##### `reset_allow_id_token` <a name="reset_allow_id_token" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowIdToken"></a>

```python
def reset_allow_id_token() -> None
```

##### `reset_authentication_policy` <a name="reset_authentication_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAuthenticationPolicy"></a>

```python
def reset_authentication_policy() -> None
```

##### `reset_autocommit` <a name="reset_autocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAutocommit"></a>

```python
def reset_autocommit() -> None
```

##### `reset_base_location_prefix` <a name="reset_base_location_prefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBaseLocationPrefix"></a>

```python
def reset_base_location_prefix() -> None
```

##### `reset_binary_input_format` <a name="reset_binary_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryInputFormat"></a>

```python
def reset_binary_input_format() -> None
```

##### `reset_binary_output_format` <a name="reset_binary_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryOutputFormat"></a>

```python
def reset_binary_output_format() -> None
```

##### `reset_catalog` <a name="reset_catalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalog"></a>

```python
def reset_catalog() -> None
```

##### `reset_catalog_sync` <a name="reset_catalog_sync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalogSync"></a>

```python
def reset_catalog_sync() -> None
```

##### `reset_client_enable_log_info_statement_parameters` <a name="reset_client_enable_log_info_statement_parameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEnableLogInfoStatementParameters"></a>

```python
def reset_client_enable_log_info_statement_parameters() -> None
```

##### `reset_client_encryption_key_size` <a name="reset_client_encryption_key_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEncryptionKeySize"></a>

```python
def reset_client_encryption_key_size() -> None
```

##### `reset_client_memory_limit` <a name="reset_client_memory_limit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMemoryLimit"></a>

```python
def reset_client_memory_limit() -> None
```

##### `reset_client_metadata_request_use_connection_ctx` <a name="reset_client_metadata_request_use_connection_ctx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataRequestUseConnectionCtx"></a>

```python
def reset_client_metadata_request_use_connection_ctx() -> None
```

##### `reset_client_metadata_use_session_database` <a name="reset_client_metadata_use_session_database" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataUseSessionDatabase"></a>

```python
def reset_client_metadata_use_session_database() -> None
```

##### `reset_client_prefetch_threads` <a name="reset_client_prefetch_threads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientPrefetchThreads"></a>

```python
def reset_client_prefetch_threads() -> None
```

##### `reset_client_result_chunk_size` <a name="reset_client_result_chunk_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultChunkSize"></a>

```python
def reset_client_result_chunk_size() -> None
```

##### `reset_client_result_column_case_insensitive` <a name="reset_client_result_column_case_insensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultColumnCaseInsensitive"></a>

```python
def reset_client_result_column_case_insensitive() -> None
```

##### `reset_client_session_keep_alive` <a name="reset_client_session_keep_alive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAlive"></a>

```python
def reset_client_session_keep_alive() -> None
```

##### `reset_client_session_keep_alive_heartbeat_frequency` <a name="reset_client_session_keep_alive_heartbeat_frequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAliveHeartbeatFrequency"></a>

```python
def reset_client_session_keep_alive_heartbeat_frequency() -> None
```

##### `reset_client_timestamp_type_mapping` <a name="reset_client_timestamp_type_mapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientTimestampTypeMapping"></a>

```python
def reset_client_timestamp_type_mapping() -> None
```

##### `reset_cortex_enabled_cross_region` <a name="reset_cortex_enabled_cross_region" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexEnabledCrossRegion"></a>

```python
def reset_cortex_enabled_cross_region() -> None
```

##### `reset_cortex_models_allowlist` <a name="reset_cortex_models_allowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexModelsAllowlist"></a>

```python
def reset_cortex_models_allowlist() -> None
```

##### `reset_csv_timestamp_format` <a name="reset_csv_timestamp_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCsvTimestampFormat"></a>

```python
def reset_csv_timestamp_format() -> None
```

##### `reset_data_retention_time_in_days` <a name="reset_data_retention_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDataRetentionTimeInDays"></a>

```python
def reset_data_retention_time_in_days() -> None
```

##### `reset_date_input_format` <a name="reset_date_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateInputFormat"></a>

```python
def reset_date_input_format() -> None
```

##### `reset_date_output_format` <a name="reset_date_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateOutputFormat"></a>

```python
def reset_date_output_format() -> None
```

##### `reset_default_ddl_collation` <a name="reset_default_ddl_collation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultDdlCollation"></a>

```python
def reset_default_ddl_collation() -> None
```

##### `reset_default_notebook_compute_pool_cpu` <a name="reset_default_notebook_compute_pool_cpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolCpu"></a>

```python
def reset_default_notebook_compute_pool_cpu() -> None
```

##### `reset_default_notebook_compute_pool_gpu` <a name="reset_default_notebook_compute_pool_gpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolGpu"></a>

```python
def reset_default_notebook_compute_pool_gpu() -> None
```

##### `reset_default_null_ordering` <a name="reset_default_null_ordering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNullOrdering"></a>

```python
def reset_default_null_ordering() -> None
```

##### `reset_default_streamlit_notebook_warehouse` <a name="reset_default_streamlit_notebook_warehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultStreamlitNotebookWarehouse"></a>

```python
def reset_default_streamlit_notebook_warehouse() -> None
```

##### `reset_disable_ui_download_button` <a name="reset_disable_ui_download_button" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUiDownloadButton"></a>

```python
def reset_disable_ui_download_button() -> None
```

##### `reset_disable_user_privilege_grants` <a name="reset_disable_user_privilege_grants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUserPrivilegeGrants"></a>

```python
def reset_disable_user_privilege_grants() -> None
```

##### `reset_enable_automatic_sensitive_data_classification_log` <a name="reset_enable_automatic_sensitive_data_classification_log" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableAutomaticSensitiveDataClassificationLog"></a>

```python
def reset_enable_automatic_sensitive_data_classification_log() -> None
```

##### `reset_enable_egress_cost_optimizer` <a name="reset_enable_egress_cost_optimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableEgressCostOptimizer"></a>

```python
def reset_enable_egress_cost_optimizer() -> None
```

##### `reset_enable_identifier_first_login` <a name="reset_enable_identifier_first_login" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableIdentifierFirstLogin"></a>

```python
def reset_enable_identifier_first_login() -> None
```

##### `reset_enable_internal_stages_privatelink` <a name="reset_enable_internal_stages_privatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableInternalStagesPrivatelink"></a>

```python
def reset_enable_internal_stages_privatelink() -> None
```

##### `reset_enable_tri_secret_and_rekey_opt_out_for_image_repository` <a name="reset_enable_tri_secret_and_rekey_opt_out_for_image_repository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository"></a>

```python
def reset_enable_tri_secret_and_rekey_opt_out_for_image_repository() -> None
```

##### `reset_enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage` <a name="reset_enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```python
def reset_enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage() -> None
```

##### `reset_enable_unhandled_exceptions_reporting` <a name="reset_enable_unhandled_exceptions_reporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnhandledExceptionsReporting"></a>

```python
def reset_enable_unhandled_exceptions_reporting() -> None
```

##### `reset_enable_unload_physical_type_optimization` <a name="reset_enable_unload_physical_type_optimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnloadPhysicalTypeOptimization"></a>

```python
def reset_enable_unload_physical_type_optimization() -> None
```

##### `reset_enable_unredacted_query_syntax_error` <a name="reset_enable_unredacted_query_syntax_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedQuerySyntaxError"></a>

```python
def reset_enable_unredacted_query_syntax_error() -> None
```

##### `reset_enable_unredacted_secure_object_error` <a name="reset_enable_unredacted_secure_object_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedSecureObjectError"></a>

```python
def reset_enable_unredacted_secure_object_error() -> None
```

##### `reset_enforce_network_rules_for_internal_stages` <a name="reset_enforce_network_rules_for_internal_stages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnforceNetworkRulesForInternalStages"></a>

```python
def reset_enforce_network_rules_for_internal_stages() -> None
```

##### `reset_error_on_nondeterministic_merge` <a name="reset_error_on_nondeterministic_merge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicMerge"></a>

```python
def reset_error_on_nondeterministic_merge() -> None
```

##### `reset_error_on_nondeterministic_update` <a name="reset_error_on_nondeterministic_update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicUpdate"></a>

```python
def reset_error_on_nondeterministic_update() -> None
```

##### `reset_event_table` <a name="reset_event_table" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEventTable"></a>

```python
def reset_event_table() -> None
```

##### `reset_external_oauth_add_privileged_roles_to_blocked_list` <a name="reset_external_oauth_add_privileged_roles_to_blocked_list" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalOauthAddPrivilegedRolesToBlockedList"></a>

```python
def reset_external_oauth_add_privileged_roles_to_blocked_list() -> None
```

##### `reset_external_volume` <a name="reset_external_volume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalVolume"></a>

```python
def reset_external_volume() -> None
```

##### `reset_feature_policy` <a name="reset_feature_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetFeaturePolicy"></a>

```python
def reset_feature_policy() -> None
```

##### `reset_geography_output_format` <a name="reset_geography_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeographyOutputFormat"></a>

```python
def reset_geography_output_format() -> None
```

##### `reset_geometry_output_format` <a name="reset_geometry_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeometryOutputFormat"></a>

```python
def reset_geometry_output_format() -> None
```

##### `reset_hybrid_table_lock_timeout` <a name="reset_hybrid_table_lock_timeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetHybridTableLockTimeout"></a>

```python
def reset_hybrid_table_lock_timeout() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_initial_replication_size_limit_in_tb` <a name="reset_initial_replication_size_limit_in_tb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetInitialReplicationSizeLimitInTb"></a>

```python
def reset_initial_replication_size_limit_in_tb() -> None
```

##### `reset_jdbc_treat_decimal_as_int` <a name="reset_jdbc_treat_decimal_as_int" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatDecimalAsInt"></a>

```python
def reset_jdbc_treat_decimal_as_int() -> None
```

##### `reset_jdbc_treat_timestamp_ntz_as_utc` <a name="reset_jdbc_treat_timestamp_ntz_as_utc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatTimestampNtzAsUtc"></a>

```python
def reset_jdbc_treat_timestamp_ntz_as_utc() -> None
```

##### `reset_jdbc_use_session_timezone` <a name="reset_jdbc_use_session_timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcUseSessionTimezone"></a>

```python
def reset_jdbc_use_session_timezone() -> None
```

##### `reset_json_indent` <a name="reset_json_indent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsonIndent"></a>

```python
def reset_json_indent() -> None
```

##### `reset_js_treat_integer_as_bigint` <a name="reset_js_treat_integer_as_bigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsTreatIntegerAsBigint"></a>

```python
def reset_js_treat_integer_as_bigint() -> None
```

##### `reset_listing_auto_fulfillment_replication_refresh_schedule` <a name="reset_listing_auto_fulfillment_replication_refresh_schedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetListingAutoFulfillmentReplicationRefreshSchedule"></a>

```python
def reset_listing_auto_fulfillment_replication_refresh_schedule() -> None
```

##### `reset_lock_timeout` <a name="reset_lock_timeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLockTimeout"></a>

```python
def reset_lock_timeout() -> None
```

##### `reset_log_level` <a name="reset_log_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLogLevel"></a>

```python
def reset_log_level() -> None
```

##### `reset_max_concurrency_level` <a name="reset_max_concurrency_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxConcurrencyLevel"></a>

```python
def reset_max_concurrency_level() -> None
```

##### `reset_max_data_extension_time_in_days` <a name="reset_max_data_extension_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxDataExtensionTimeInDays"></a>

```python
def reset_max_data_extension_time_in_days() -> None
```

##### `reset_metric_level` <a name="reset_metric_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMetricLevel"></a>

```python
def reset_metric_level() -> None
```

##### `reset_min_data_retention_time_in_days` <a name="reset_min_data_retention_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMinDataRetentionTimeInDays"></a>

```python
def reset_min_data_retention_time_in_days() -> None
```

##### `reset_multi_statement_count` <a name="reset_multi_statement_count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMultiStatementCount"></a>

```python
def reset_multi_statement_count() -> None
```

##### `reset_network_policy` <a name="reset_network_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNetworkPolicy"></a>

```python
def reset_network_policy() -> None
```

##### `reset_noorder_sequence_as_default` <a name="reset_noorder_sequence_as_default" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNoorderSequenceAsDefault"></a>

```python
def reset_noorder_sequence_as_default() -> None
```

##### `reset_oauth_add_privileged_roles_to_blocked_list` <a name="reset_oauth_add_privileged_roles_to_blocked_list" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOauthAddPrivilegedRolesToBlockedList"></a>

```python
def reset_oauth_add_privileged_roles_to_blocked_list() -> None
```

##### `reset_odbc_treat_decimal_as_int` <a name="reset_odbc_treat_decimal_as_int" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOdbcTreatDecimalAsInt"></a>

```python
def reset_odbc_treat_decimal_as_int() -> None
```

##### `reset_packages_policy` <a name="reset_packages_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPackagesPolicy"></a>

```python
def reset_packages_policy() -> None
```

##### `reset_password_policy` <a name="reset_password_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPasswordPolicy"></a>

```python
def reset_password_policy() -> None
```

##### `reset_periodic_data_rekeying` <a name="reset_periodic_data_rekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPeriodicDataRekeying"></a>

```python
def reset_periodic_data_rekeying() -> None
```

##### `reset_pipe_execution_paused` <a name="reset_pipe_execution_paused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPipeExecutionPaused"></a>

```python
def reset_pipe_execution_paused() -> None
```

##### `reset_prevent_unload_to_inline_url` <a name="reset_prevent_unload_to_inline_url" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInlineUrl"></a>

```python
def reset_prevent_unload_to_inline_url() -> None
```

##### `reset_prevent_unload_to_internal_stages` <a name="reset_prevent_unload_to_internal_stages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInternalStages"></a>

```python
def reset_prevent_unload_to_internal_stages() -> None
```

##### `reset_python_profiler_modules` <a name="reset_python_profiler_modules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerModules"></a>

```python
def reset_python_profiler_modules() -> None
```

##### `reset_python_profiler_target_stage` <a name="reset_python_profiler_target_stage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerTargetStage"></a>

```python
def reset_python_profiler_target_stage() -> None
```

##### `reset_query_tag` <a name="reset_query_tag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQueryTag"></a>

```python
def reset_query_tag() -> None
```

##### `reset_quoted_identifiers_ignore_case` <a name="reset_quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQuotedIdentifiersIgnoreCase"></a>

```python
def reset_quoted_identifiers_ignore_case() -> None
```

##### `reset_replace_invalid_characters` <a name="reset_replace_invalid_characters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetReplaceInvalidCharacters"></a>

```python
def reset_replace_invalid_characters() -> None
```

##### `reset_require_storage_integration_for_stage_creation` <a name="reset_require_storage_integration_for_stage_creation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageCreation"></a>

```python
def reset_require_storage_integration_for_stage_creation() -> None
```

##### `reset_require_storage_integration_for_stage_operation` <a name="reset_require_storage_integration_for_stage_operation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageOperation"></a>

```python
def reset_require_storage_integration_for_stage_operation() -> None
```

##### `reset_resource_monitor` <a name="reset_resource_monitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetResourceMonitor"></a>

```python
def reset_resource_monitor() -> None
```

##### `reset_rows_per_resultset` <a name="reset_rows_per_resultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRowsPerResultset"></a>

```python
def reset_rows_per_resultset() -> None
```

##### `reset_s3_stage_vpce_dns_name` <a name="reset_s3_stage_vpce_dns_name" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetS3StageVpceDnsName"></a>

```python
def reset_s3_stage_vpce_dns_name() -> None
```

##### `reset_saml_identity_provider` <a name="reset_saml_identity_provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSamlIdentityProvider"></a>

```python
def reset_saml_identity_provider() -> None
```

##### `reset_search_path` <a name="reset_search_path" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSearchPath"></a>

```python
def reset_search_path() -> None
```

##### `reset_serverless_task_max_statement_size` <a name="reset_serverless_task_max_statement_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMaxStatementSize"></a>

```python
def reset_serverless_task_max_statement_size() -> None
```

##### `reset_serverless_task_min_statement_size` <a name="reset_serverless_task_min_statement_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMinStatementSize"></a>

```python
def reset_serverless_task_min_statement_size() -> None
```

##### `reset_session_policy` <a name="reset_session_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSessionPolicy"></a>

```python
def reset_session_policy() -> None
```

##### `reset_simulated_data_sharing_consumer` <a name="reset_simulated_data_sharing_consumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSimulatedDataSharingConsumer"></a>

```python
def reset_simulated_data_sharing_consumer() -> None
```

##### `reset_sso_login_page` <a name="reset_sso_login_page" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSsoLoginPage"></a>

```python
def reset_sso_login_page() -> None
```

##### `reset_statement_queued_timeout_in_seconds` <a name="reset_statement_queued_timeout_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementQueuedTimeoutInSeconds"></a>

```python
def reset_statement_queued_timeout_in_seconds() -> None
```

##### `reset_statement_timeout_in_seconds` <a name="reset_statement_timeout_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementTimeoutInSeconds"></a>

```python
def reset_statement_timeout_in_seconds() -> None
```

##### `reset_storage_serialization_policy` <a name="reset_storage_serialization_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStorageSerializationPolicy"></a>

```python
def reset_storage_serialization_policy() -> None
```

##### `reset_strict_json_output` <a name="reset_strict_json_output" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStrictJsonOutput"></a>

```python
def reset_strict_json_output() -> None
```

##### `reset_suspend_task_after_num_failures` <a name="reset_suspend_task_after_num_failures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSuspendTaskAfterNumFailures"></a>

```python
def reset_suspend_task_after_num_failures() -> None
```

##### `reset_task_auto_retry_attempts` <a name="reset_task_auto_retry_attempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTaskAutoRetryAttempts"></a>

```python
def reset_task_auto_retry_attempts() -> None
```

##### `reset_time_input_format` <a name="reset_time_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeInputFormat"></a>

```python
def reset_time_input_format() -> None
```

##### `reset_time_output_format` <a name="reset_time_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeOutputFormat"></a>

```python
def reset_time_output_format() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_timestamp_day_is_always24_h` <a name="reset_timestamp_day_is_always24_h" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampDayIsAlways24H"></a>

```python
def reset_timestamp_day_is_always24_h() -> None
```

##### `reset_timestamp_input_format` <a name="reset_timestamp_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampInputFormat"></a>

```python
def reset_timestamp_input_format() -> None
```

##### `reset_timestamp_ltz_output_format` <a name="reset_timestamp_ltz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampLtzOutputFormat"></a>

```python
def reset_timestamp_ltz_output_format() -> None
```

##### `reset_timestamp_ntz_output_format` <a name="reset_timestamp_ntz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampNtzOutputFormat"></a>

```python
def reset_timestamp_ntz_output_format() -> None
```

##### `reset_timestamp_output_format` <a name="reset_timestamp_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampOutputFormat"></a>

```python
def reset_timestamp_output_format() -> None
```

##### `reset_timestamp_type_mapping` <a name="reset_timestamp_type_mapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTypeMapping"></a>

```python
def reset_timestamp_type_mapping() -> None
```

##### `reset_timestamp_tz_output_format` <a name="reset_timestamp_tz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTzOutputFormat"></a>

```python
def reset_timestamp_tz_output_format() -> None
```

##### `reset_timezone` <a name="reset_timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimezone"></a>

```python
def reset_timezone() -> None
```

##### `reset_trace_level` <a name="reset_trace_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTraceLevel"></a>

```python
def reset_trace_level() -> None
```

##### `reset_transaction_abort_on_error` <a name="reset_transaction_abort_on_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionAbortOnError"></a>

```python
def reset_transaction_abort_on_error() -> None
```

##### `reset_transaction_default_isolation_level` <a name="reset_transaction_default_isolation_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionDefaultIsolationLevel"></a>

```python
def reset_transaction_default_isolation_level() -> None
```

##### `reset_two_digit_century_start` <a name="reset_two_digit_century_start" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTwoDigitCenturyStart"></a>

```python
def reset_two_digit_century_start() -> None
```

##### `reset_unsupported_ddl_action` <a name="reset_unsupported_ddl_action" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUnsupportedDdlAction"></a>

```python
def reset_unsupported_ddl_action() -> None
```

##### `reset_use_cached_result` <a name="reset_use_cached_result" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUseCachedResult"></a>

```python
def reset_use_cached_result() -> None
```

##### `reset_user_task_managed_initial_warehouse_size` <a name="reset_user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskManagedInitialWarehouseSize"></a>

```python
def reset_user_task_managed_initial_warehouse_size() -> None
```

##### `reset_user_task_minimum_trigger_interval_in_seconds` <a name="reset_user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```python
def reset_user_task_minimum_trigger_interval_in_seconds() -> None
```

##### `reset_user_task_timeout_ms` <a name="reset_user_task_timeout_ms" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskTimeoutMs"></a>

```python
def reset_user_task_timeout_ms() -> None
```

##### `reset_week_of_year_policy` <a name="reset_week_of_year_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekOfYearPolicy"></a>

```python
def reset_week_of_year_policy() -> None
```

##### `reset_week_start` <a name="reset_week_start" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekStart"></a>

```python
def reset_week_start() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a CurrentAccount resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isConstruct"></a>

```python
from cdktf_cdktf_provider_snowflake import current_account

currentAccount.CurrentAccount.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_snowflake import current_account

currentAccount.CurrentAccount.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_snowflake import current_account

currentAccount.CurrentAccount.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_snowflake import current_account

currentAccount.CurrentAccount.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a CurrentAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CurrentAccount to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CurrentAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CurrentAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference">CurrentAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQueryInput">abort_detached_query_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfilerInput">active_python_profiler_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCachingInput">allow_client_mfa_caching_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdTokenInput">allow_id_token_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicyInput">authentication_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommitInput">autocommit_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefixInput">base_location_prefix_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormatInput">binary_input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormatInput">binary_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogInput">catalog_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSyncInput">catalog_sync_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParametersInput">client_enable_log_info_statement_parameters_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySizeInput">client_encryption_key_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimitInput">client_memory_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtxInput">client_metadata_request_use_connection_ctx_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabaseInput">client_metadata_use_session_database_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreadsInput">client_prefetch_threads_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSizeInput">client_result_chunk_size_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitiveInput">client_result_column_case_insensitive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput">client_session_keep_alive_heartbeat_frequency_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveInput">client_session_keep_alive_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMappingInput">client_timestamp_type_mapping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegionInput">cortex_enabled_cross_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlistInput">cortex_models_allowlist_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormatInput">csv_timestamp_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDaysInput">data_retention_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormatInput">date_input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormatInput">date_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollationInput">default_ddl_collation_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpuInput">default_notebook_compute_pool_cpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpuInput">default_notebook_compute_pool_gpu_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrderingInput">default_null_ordering_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouseInput">default_streamlit_notebook_warehouse_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButtonInput">disable_ui_download_button_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrantsInput">disable_user_privilege_grants_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLogInput">enable_automatic_sensitive_data_classification_log_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizerInput">enable_egress_cost_optimizer_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLoginInput">enable_identifier_first_login_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelinkInput">enable_internal_stages_privatelink_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput">enable_tri_secret_and_rekey_opt_out_for_image_repository_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput">enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReportingInput">enable_unhandled_exceptions_reporting_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimizationInput">enable_unload_physical_type_optimization_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxErrorInput">enable_unredacted_query_syntax_error_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectErrorInput">enable_unredacted_secure_object_error_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStagesInput">enforce_network_rules_for_internal_stages_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMergeInput">error_on_nondeterministic_merge_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdateInput">error_on_nondeterministic_update_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTableInput">event_table_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput">external_oauth_add_privileged_roles_to_blocked_list_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolumeInput">external_volume_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicyInput">feature_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormatInput">geography_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormatInput">geometry_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeoutInput">hybrid_table_lock_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTbInput">initial_replication_size_limit_in_tb_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsIntInput">jdbc_treat_decimal_as_int_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtcInput">jdbc_treat_timestamp_ntz_as_utc_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezoneInput">jdbc_use_session_timezone_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndentInput">json_indent_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigintInput">js_treat_integer_as_bigint_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput">listing_auto_fulfillment_replication_refresh_schedule_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeoutInput">lock_timeout_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevelInput">log_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevelInput">max_concurrency_level_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDaysInput">max_data_extension_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevelInput">metric_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDaysInput">min_data_retention_time_in_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCountInput">multi_statement_count_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicyInput">network_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefaultInput">noorder_sequence_as_default_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedListInput">oauth_add_privileged_roles_to_blocked_list_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsIntInput">odbc_treat_decimal_as_int_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicyInput">packages_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicyInput">password_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeyingInput">periodic_data_rekeying_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPausedInput">pipe_execution_paused_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrlInput">prevent_unload_to_inline_url_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStagesInput">prevent_unload_to_internal_stages_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModulesInput">python_profiler_modules_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStageInput">python_profiler_target_stage_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTagInput">query_tag_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCaseInput">quoted_identifiers_ignore_case_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharactersInput">replace_invalid_characters_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreationInput">require_storage_integration_for_stage_creation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperationInput">require_storage_integration_for_stage_operation_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitorInput">resource_monitor_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultsetInput">rows_per_resultset_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsNameInput">s3_stage_vpce_dns_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProviderInput">saml_identity_provider_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPathInput">search_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSizeInput">serverless_task_max_statement_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSizeInput">serverless_task_min_statement_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicyInput">session_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumerInput">simulated_data_sharing_consumer_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPageInput">sso_login_page_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSecondsInput">statement_queued_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSecondsInput">statement_timeout_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicyInput">storage_serialization_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutputInput">strict_json_output_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailuresInput">suspend_task_after_num_failures_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttemptsInput">task_auto_retry_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormatInput">time_input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormatInput">time_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24HInput">timestamp_day_is_always24_h_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormatInput">timestamp_input_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormatInput">timestamp_ltz_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormatInput">timestamp_ntz_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormatInput">timestamp_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMappingInput">timestamp_type_mapping_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormatInput">timestamp_tz_output_format_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezoneInput">timezone_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevelInput">trace_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnErrorInput">transaction_abort_on_error_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevelInput">transaction_default_isolation_level_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStartInput">two_digit_century_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlActionInput">unsupported_ddl_action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResultInput">use_cached_result_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSizeInput">user_task_managed_initial_warehouse_size_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSecondsInput">user_task_minimum_trigger_interval_in_seconds_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMsInput">user_task_timeout_ms_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicyInput">week_of_year_policy_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStartInput">week_start_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQuery">abort_detached_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfiler">active_python_profiler</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCaching">allow_client_mfa_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdToken">allow_id_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommit">autocommit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefix">base_location_prefix</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormat">binary_input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormat">binary_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalog">catalog</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSync">catalog_sync</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParameters">client_enable_log_info_statement_parameters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySize">client_encryption_key_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimit">client_memory_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtx">client_metadata_request_use_connection_ctx</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabase">client_metadata_use_session_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreads">client_prefetch_threads</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSize">client_result_chunk_size</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitive">client_result_column_case_insensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAlive">client_session_keep_alive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequency">client_session_keep_alive_heartbeat_frequency</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMapping">client_timestamp_type_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegion">cortex_enabled_cross_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlist">cortex_models_allowlist</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormat">csv_timestamp_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormat">date_input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormat">date_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpu">default_notebook_compute_pool_cpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpu">default_notebook_compute_pool_gpu</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrdering">default_null_ordering</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouse">default_streamlit_notebook_warehouse</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButton">disable_ui_download_button</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrants">disable_user_privilege_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLog">enable_automatic_sensitive_data_classification_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizer">enable_egress_cost_optimizer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLogin">enable_identifier_first_login</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelink">enable_internal_stages_privatelink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepository">enable_tri_secret_and_rekey_opt_out_for_image_repository</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReporting">enable_unhandled_exceptions_reporting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimization">enable_unload_physical_type_optimization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxError">enable_unredacted_query_syntax_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectError">enable_unredacted_secure_object_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStages">enforce_network_rules_for_internal_stages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMerge">error_on_nondeterministic_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdate">error_on_nondeterministic_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTable">event_table</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedList">external_oauth_add_privileged_roles_to_blocked_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolume">external_volume</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicy">feature_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormat">geography_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormat">geometry_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeout">hybrid_table_lock_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTb">initial_replication_size_limit_in_tb</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsInt">jdbc_treat_decimal_as_int</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtc">jdbc_treat_timestamp_ntz_as_utc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezone">jdbc_use_session_timezone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndent">json_indent</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigint">js_treat_integer_as_bigint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshSchedule">listing_auto_fulfillment_replication_refresh_schedule</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeout">lock_timeout</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevel">log_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevel">max_concurrency_level</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevel">metric_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDays">min_data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCount">multi_statement_count</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicy">network_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefault">noorder_sequence_as_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedList">oauth_add_privileged_roles_to_blocked_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsInt">odbc_treat_decimal_as_int</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicy">packages_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicy">password_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeying">periodic_data_rekeying</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPaused">pipe_execution_paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrl">prevent_unload_to_inline_url</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStages">prevent_unload_to_internal_stages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModules">python_profiler_modules</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStage">python_profiler_target_stage</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTag">query_tag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreation">require_storage_integration_for_stage_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperation">require_storage_integration_for_stage_operation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitor">resource_monitor</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultset">rows_per_resultset</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsName">s3_stage_vpce_dns_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProvider">saml_identity_provider</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPath">search_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSize">serverless_task_max_statement_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSize">serverless_task_min_statement_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicy">session_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumer">simulated_data_sharing_consumer</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPage">sso_login_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutput">strict_json_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormat">time_input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormat">time_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24H">timestamp_day_is_always24_h</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormat">timestamp_input_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormat">timestamp_ltz_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormat">timestamp_ntz_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormat">timestamp_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMapping">timestamp_type_mapping</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormat">timestamp_tz_output_format</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezone">timezone</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevel">trace_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnError">transaction_abort_on_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevel">transaction_default_isolation_level</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStart">two_digit_century_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlAction">unsupported_ddl_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResult">use_cached_result</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicy">week_of_year_policy</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStart">week_start</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeouts"></a>

```python
timeouts: CurrentAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference">CurrentAccountTimeoutsOutputReference</a>

---

##### `abort_detached_query_input`<sup>Optional</sup> <a name="abort_detached_query_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQueryInput"></a>

```python
abort_detached_query_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `active_python_profiler_input`<sup>Optional</sup> <a name="active_python_profiler_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfilerInput"></a>

```python
active_python_profiler_input: str
```

- *Type:* str

---

##### `allow_client_mfa_caching_input`<sup>Optional</sup> <a name="allow_client_mfa_caching_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCachingInput"></a>

```python
allow_client_mfa_caching_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_id_token_input`<sup>Optional</sup> <a name="allow_id_token_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdTokenInput"></a>

```python
allow_id_token_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authentication_policy_input`<sup>Optional</sup> <a name="authentication_policy_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicyInput"></a>

```python
authentication_policy_input: str
```

- *Type:* str

---

##### `autocommit_input`<sup>Optional</sup> <a name="autocommit_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommitInput"></a>

```python
autocommit_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `base_location_prefix_input`<sup>Optional</sup> <a name="base_location_prefix_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefixInput"></a>

```python
base_location_prefix_input: str
```

- *Type:* str

---

##### `binary_input_format_input`<sup>Optional</sup> <a name="binary_input_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormatInput"></a>

```python
binary_input_format_input: str
```

- *Type:* str

---

##### `binary_output_format_input`<sup>Optional</sup> <a name="binary_output_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormatInput"></a>

```python
binary_output_format_input: str
```

- *Type:* str

---

##### `catalog_input`<sup>Optional</sup> <a name="catalog_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogInput"></a>

```python
catalog_input: str
```

- *Type:* str

---

##### `catalog_sync_input`<sup>Optional</sup> <a name="catalog_sync_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSyncInput"></a>

```python
catalog_sync_input: str
```

- *Type:* str

---

##### `client_enable_log_info_statement_parameters_input`<sup>Optional</sup> <a name="client_enable_log_info_statement_parameters_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParametersInput"></a>

```python
client_enable_log_info_statement_parameters_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_encryption_key_size_input`<sup>Optional</sup> <a name="client_encryption_key_size_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySizeInput"></a>

```python
client_encryption_key_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_memory_limit_input`<sup>Optional</sup> <a name="client_memory_limit_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimitInput"></a>

```python
client_memory_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_metadata_request_use_connection_ctx_input`<sup>Optional</sup> <a name="client_metadata_request_use_connection_ctx_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtxInput"></a>

```python
client_metadata_request_use_connection_ctx_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_metadata_use_session_database_input`<sup>Optional</sup> <a name="client_metadata_use_session_database_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabaseInput"></a>

```python
client_metadata_use_session_database_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_prefetch_threads_input`<sup>Optional</sup> <a name="client_prefetch_threads_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreadsInput"></a>

```python
client_prefetch_threads_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_result_chunk_size_input`<sup>Optional</sup> <a name="client_result_chunk_size_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSizeInput"></a>

```python
client_result_chunk_size_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_result_column_case_insensitive_input`<sup>Optional</sup> <a name="client_result_column_case_insensitive_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitiveInput"></a>

```python
client_result_column_case_insensitive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_session_keep_alive_heartbeat_frequency_input`<sup>Optional</sup> <a name="client_session_keep_alive_heartbeat_frequency_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput"></a>

```python
client_session_keep_alive_heartbeat_frequency_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_session_keep_alive_input`<sup>Optional</sup> <a name="client_session_keep_alive_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveInput"></a>

```python
client_session_keep_alive_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_timestamp_type_mapping_input`<sup>Optional</sup> <a name="client_timestamp_type_mapping_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMappingInput"></a>

```python
client_timestamp_type_mapping_input: str
```

- *Type:* str

---

##### `cortex_enabled_cross_region_input`<sup>Optional</sup> <a name="cortex_enabled_cross_region_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegionInput"></a>

```python
cortex_enabled_cross_region_input: str
```

- *Type:* str

---

##### `cortex_models_allowlist_input`<sup>Optional</sup> <a name="cortex_models_allowlist_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlistInput"></a>

```python
cortex_models_allowlist_input: str
```

- *Type:* str

---

##### `csv_timestamp_format_input`<sup>Optional</sup> <a name="csv_timestamp_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormatInput"></a>

```python
csv_timestamp_format_input: str
```

- *Type:* str

---

##### `data_retention_time_in_days_input`<sup>Optional</sup> <a name="data_retention_time_in_days_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDaysInput"></a>

```python
data_retention_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_input_format_input`<sup>Optional</sup> <a name="date_input_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormatInput"></a>

```python
date_input_format_input: str
```

- *Type:* str

---

##### `date_output_format_input`<sup>Optional</sup> <a name="date_output_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormatInput"></a>

```python
date_output_format_input: str
```

- *Type:* str

---

##### `default_ddl_collation_input`<sup>Optional</sup> <a name="default_ddl_collation_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollationInput"></a>

```python
default_ddl_collation_input: str
```

- *Type:* str

---

##### `default_notebook_compute_pool_cpu_input`<sup>Optional</sup> <a name="default_notebook_compute_pool_cpu_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpuInput"></a>

```python
default_notebook_compute_pool_cpu_input: str
```

- *Type:* str

---

##### `default_notebook_compute_pool_gpu_input`<sup>Optional</sup> <a name="default_notebook_compute_pool_gpu_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpuInput"></a>

```python
default_notebook_compute_pool_gpu_input: str
```

- *Type:* str

---

##### `default_null_ordering_input`<sup>Optional</sup> <a name="default_null_ordering_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrderingInput"></a>

```python
default_null_ordering_input: str
```

- *Type:* str

---

##### `default_streamlit_notebook_warehouse_input`<sup>Optional</sup> <a name="default_streamlit_notebook_warehouse_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouseInput"></a>

```python
default_streamlit_notebook_warehouse_input: str
```

- *Type:* str

---

##### `disable_ui_download_button_input`<sup>Optional</sup> <a name="disable_ui_download_button_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButtonInput"></a>

```python
disable_ui_download_button_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_user_privilege_grants_input`<sup>Optional</sup> <a name="disable_user_privilege_grants_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrantsInput"></a>

```python
disable_user_privilege_grants_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_automatic_sensitive_data_classification_log_input`<sup>Optional</sup> <a name="enable_automatic_sensitive_data_classification_log_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLogInput"></a>

```python
enable_automatic_sensitive_data_classification_log_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_egress_cost_optimizer_input`<sup>Optional</sup> <a name="enable_egress_cost_optimizer_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizerInput"></a>

```python
enable_egress_cost_optimizer_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_identifier_first_login_input`<sup>Optional</sup> <a name="enable_identifier_first_login_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLoginInput"></a>

```python
enable_identifier_first_login_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_internal_stages_privatelink_input`<sup>Optional</sup> <a name="enable_internal_stages_privatelink_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelinkInput"></a>

```python
enable_internal_stages_privatelink_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tri_secret_and_rekey_opt_out_for_image_repository_input`<sup>Optional</sup> <a name="enable_tri_secret_and_rekey_opt_out_for_image_repository_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput"></a>

```python
enable_tri_secret_and_rekey_opt_out_for_image_repository_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage_input`<sup>Optional</sup> <a name="enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput"></a>

```python
enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_unhandled_exceptions_reporting_input`<sup>Optional</sup> <a name="enable_unhandled_exceptions_reporting_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReportingInput"></a>

```python
enable_unhandled_exceptions_reporting_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_unload_physical_type_optimization_input`<sup>Optional</sup> <a name="enable_unload_physical_type_optimization_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimizationInput"></a>

```python
enable_unload_physical_type_optimization_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_unredacted_query_syntax_error_input`<sup>Optional</sup> <a name="enable_unredacted_query_syntax_error_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxErrorInput"></a>

```python
enable_unredacted_query_syntax_error_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_unredacted_secure_object_error_input`<sup>Optional</sup> <a name="enable_unredacted_secure_object_error_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectErrorInput"></a>

```python
enable_unredacted_secure_object_error_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_network_rules_for_internal_stages_input`<sup>Optional</sup> <a name="enforce_network_rules_for_internal_stages_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStagesInput"></a>

```python
enforce_network_rules_for_internal_stages_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `error_on_nondeterministic_merge_input`<sup>Optional</sup> <a name="error_on_nondeterministic_merge_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMergeInput"></a>

```python
error_on_nondeterministic_merge_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `error_on_nondeterministic_update_input`<sup>Optional</sup> <a name="error_on_nondeterministic_update_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdateInput"></a>

```python
error_on_nondeterministic_update_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_table_input`<sup>Optional</sup> <a name="event_table_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTableInput"></a>

```python
event_table_input: str
```

- *Type:* str

---

##### `external_oauth_add_privileged_roles_to_blocked_list_input`<sup>Optional</sup> <a name="external_oauth_add_privileged_roles_to_blocked_list_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput"></a>

```python
external_oauth_add_privileged_roles_to_blocked_list_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_volume_input`<sup>Optional</sup> <a name="external_volume_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolumeInput"></a>

```python
external_volume_input: str
```

- *Type:* str

---

##### `feature_policy_input`<sup>Optional</sup> <a name="feature_policy_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicyInput"></a>

```python
feature_policy_input: str
```

- *Type:* str

---

##### `geography_output_format_input`<sup>Optional</sup> <a name="geography_output_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormatInput"></a>

```python
geography_output_format_input: str
```

- *Type:* str

---

##### `geometry_output_format_input`<sup>Optional</sup> <a name="geometry_output_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormatInput"></a>

```python
geometry_output_format_input: str
```

- *Type:* str

---

##### `hybrid_table_lock_timeout_input`<sup>Optional</sup> <a name="hybrid_table_lock_timeout_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeoutInput"></a>

```python
hybrid_table_lock_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `initial_replication_size_limit_in_tb_input`<sup>Optional</sup> <a name="initial_replication_size_limit_in_tb_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTbInput"></a>

```python
initial_replication_size_limit_in_tb_input: str
```

- *Type:* str

---

##### `jdbc_treat_decimal_as_int_input`<sup>Optional</sup> <a name="jdbc_treat_decimal_as_int_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsIntInput"></a>

```python
jdbc_treat_decimal_as_int_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jdbc_treat_timestamp_ntz_as_utc_input`<sup>Optional</sup> <a name="jdbc_treat_timestamp_ntz_as_utc_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtcInput"></a>

```python
jdbc_treat_timestamp_ntz_as_utc_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jdbc_use_session_timezone_input`<sup>Optional</sup> <a name="jdbc_use_session_timezone_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezoneInput"></a>

```python
jdbc_use_session_timezone_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_indent_input`<sup>Optional</sup> <a name="json_indent_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndentInput"></a>

```python
json_indent_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `js_treat_integer_as_bigint_input`<sup>Optional</sup> <a name="js_treat_integer_as_bigint_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigintInput"></a>

```python
js_treat_integer_as_bigint_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `listing_auto_fulfillment_replication_refresh_schedule_input`<sup>Optional</sup> <a name="listing_auto_fulfillment_replication_refresh_schedule_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput"></a>

```python
listing_auto_fulfillment_replication_refresh_schedule_input: str
```

- *Type:* str

---

##### `lock_timeout_input`<sup>Optional</sup> <a name="lock_timeout_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeoutInput"></a>

```python
lock_timeout_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_level_input`<sup>Optional</sup> <a name="log_level_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevelInput"></a>

```python
log_level_input: str
```

- *Type:* str

---

##### `max_concurrency_level_input`<sup>Optional</sup> <a name="max_concurrency_level_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevelInput"></a>

```python
max_concurrency_level_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_data_extension_time_in_days_input`<sup>Optional</sup> <a name="max_data_extension_time_in_days_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDaysInput"></a>

```python
max_data_extension_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_level_input`<sup>Optional</sup> <a name="metric_level_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevelInput"></a>

```python
metric_level_input: str
```

- *Type:* str

---

##### `min_data_retention_time_in_days_input`<sup>Optional</sup> <a name="min_data_retention_time_in_days_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDaysInput"></a>

```python
min_data_retention_time_in_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multi_statement_count_input`<sup>Optional</sup> <a name="multi_statement_count_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCountInput"></a>

```python
multi_statement_count_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_policy_input`<sup>Optional</sup> <a name="network_policy_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicyInput"></a>

```python
network_policy_input: str
```

- *Type:* str

---

##### `noorder_sequence_as_default_input`<sup>Optional</sup> <a name="noorder_sequence_as_default_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefaultInput"></a>

```python
noorder_sequence_as_default_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_add_privileged_roles_to_blocked_list_input`<sup>Optional</sup> <a name="oauth_add_privileged_roles_to_blocked_list_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedListInput"></a>

```python
oauth_add_privileged_roles_to_blocked_list_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `odbc_treat_decimal_as_int_input`<sup>Optional</sup> <a name="odbc_treat_decimal_as_int_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsIntInput"></a>

```python
odbc_treat_decimal_as_int_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `packages_policy_input`<sup>Optional</sup> <a name="packages_policy_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicyInput"></a>

```python
packages_policy_input: str
```

- *Type:* str

---

##### `password_policy_input`<sup>Optional</sup> <a name="password_policy_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicyInput"></a>

```python
password_policy_input: str
```

- *Type:* str

---

##### `periodic_data_rekeying_input`<sup>Optional</sup> <a name="periodic_data_rekeying_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeyingInput"></a>

```python
periodic_data_rekeying_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipe_execution_paused_input`<sup>Optional</sup> <a name="pipe_execution_paused_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPausedInput"></a>

```python
pipe_execution_paused_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_unload_to_inline_url_input`<sup>Optional</sup> <a name="prevent_unload_to_inline_url_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrlInput"></a>

```python
prevent_unload_to_inline_url_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_unload_to_internal_stages_input`<sup>Optional</sup> <a name="prevent_unload_to_internal_stages_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStagesInput"></a>

```python
prevent_unload_to_internal_stages_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `python_profiler_modules_input`<sup>Optional</sup> <a name="python_profiler_modules_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModulesInput"></a>

```python
python_profiler_modules_input: str
```

- *Type:* str

---

##### `python_profiler_target_stage_input`<sup>Optional</sup> <a name="python_profiler_target_stage_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStageInput"></a>

```python
python_profiler_target_stage_input: str
```

- *Type:* str

---

##### `query_tag_input`<sup>Optional</sup> <a name="query_tag_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTagInput"></a>

```python
query_tag_input: str
```

- *Type:* str

---

##### `quoted_identifiers_ignore_case_input`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCaseInput"></a>

```python
quoted_identifiers_ignore_case_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_invalid_characters_input`<sup>Optional</sup> <a name="replace_invalid_characters_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharactersInput"></a>

```python
replace_invalid_characters_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_storage_integration_for_stage_creation_input`<sup>Optional</sup> <a name="require_storage_integration_for_stage_creation_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreationInput"></a>

```python
require_storage_integration_for_stage_creation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_storage_integration_for_stage_operation_input`<sup>Optional</sup> <a name="require_storage_integration_for_stage_operation_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperationInput"></a>

```python
require_storage_integration_for_stage_operation_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_monitor_input`<sup>Optional</sup> <a name="resource_monitor_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitorInput"></a>

```python
resource_monitor_input: str
```

- *Type:* str

---

##### `rows_per_resultset_input`<sup>Optional</sup> <a name="rows_per_resultset_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultsetInput"></a>

```python
rows_per_resultset_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_stage_vpce_dns_name_input`<sup>Optional</sup> <a name="s3_stage_vpce_dns_name_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsNameInput"></a>

```python
s3_stage_vpce_dns_name_input: str
```

- *Type:* str

---

##### `saml_identity_provider_input`<sup>Optional</sup> <a name="saml_identity_provider_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProviderInput"></a>

```python
saml_identity_provider_input: str
```

- *Type:* str

---

##### `search_path_input`<sup>Optional</sup> <a name="search_path_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPathInput"></a>

```python
search_path_input: str
```

- *Type:* str

---

##### `serverless_task_max_statement_size_input`<sup>Optional</sup> <a name="serverless_task_max_statement_size_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSizeInput"></a>

```python
serverless_task_max_statement_size_input: str
```

- *Type:* str

---

##### `serverless_task_min_statement_size_input`<sup>Optional</sup> <a name="serverless_task_min_statement_size_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSizeInput"></a>

```python
serverless_task_min_statement_size_input: str
```

- *Type:* str

---

##### `session_policy_input`<sup>Optional</sup> <a name="session_policy_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicyInput"></a>

```python
session_policy_input: str
```

- *Type:* str

---

##### `simulated_data_sharing_consumer_input`<sup>Optional</sup> <a name="simulated_data_sharing_consumer_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumerInput"></a>

```python
simulated_data_sharing_consumer_input: str
```

- *Type:* str

---

##### `sso_login_page_input`<sup>Optional</sup> <a name="sso_login_page_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPageInput"></a>

```python
sso_login_page_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statement_queued_timeout_in_seconds_input`<sup>Optional</sup> <a name="statement_queued_timeout_in_seconds_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSecondsInput"></a>

```python
statement_queued_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement_timeout_in_seconds_input`<sup>Optional</sup> <a name="statement_timeout_in_seconds_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSecondsInput"></a>

```python
statement_timeout_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_serialization_policy_input`<sup>Optional</sup> <a name="storage_serialization_policy_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicyInput"></a>

```python
storage_serialization_policy_input: str
```

- *Type:* str

---

##### `strict_json_output_input`<sup>Optional</sup> <a name="strict_json_output_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutputInput"></a>

```python
strict_json_output_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suspend_task_after_num_failures_input`<sup>Optional</sup> <a name="suspend_task_after_num_failures_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailuresInput"></a>

```python
suspend_task_after_num_failures_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_auto_retry_attempts_input`<sup>Optional</sup> <a name="task_auto_retry_attempts_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttemptsInput"></a>

```python
task_auto_retry_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input_format_input`<sup>Optional</sup> <a name="time_input_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormatInput"></a>

```python
time_input_format_input: str
```

- *Type:* str

---

##### `time_output_format_input`<sup>Optional</sup> <a name="time_output_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormatInput"></a>

```python
time_output_format_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, CurrentAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>]

---

##### `timestamp_day_is_always24_h_input`<sup>Optional</sup> <a name="timestamp_day_is_always24_h_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24HInput"></a>

```python
timestamp_day_is_always24_h_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timestamp_input_format_input`<sup>Optional</sup> <a name="timestamp_input_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormatInput"></a>

```python
timestamp_input_format_input: str
```

- *Type:* str

---

##### `timestamp_ltz_output_format_input`<sup>Optional</sup> <a name="timestamp_ltz_output_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormatInput"></a>

```python
timestamp_ltz_output_format_input: str
```

- *Type:* str

---

##### `timestamp_ntz_output_format_input`<sup>Optional</sup> <a name="timestamp_ntz_output_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormatInput"></a>

```python
timestamp_ntz_output_format_input: str
```

- *Type:* str

---

##### `timestamp_output_format_input`<sup>Optional</sup> <a name="timestamp_output_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormatInput"></a>

```python
timestamp_output_format_input: str
```

- *Type:* str

---

##### `timestamp_type_mapping_input`<sup>Optional</sup> <a name="timestamp_type_mapping_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMappingInput"></a>

```python
timestamp_type_mapping_input: str
```

- *Type:* str

---

##### `timestamp_tz_output_format_input`<sup>Optional</sup> <a name="timestamp_tz_output_format_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormatInput"></a>

```python
timestamp_tz_output_format_input: str
```

- *Type:* str

---

##### `timezone_input`<sup>Optional</sup> <a name="timezone_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezoneInput"></a>

```python
timezone_input: str
```

- *Type:* str

---

##### `trace_level_input`<sup>Optional</sup> <a name="trace_level_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevelInput"></a>

```python
trace_level_input: str
```

- *Type:* str

---

##### `transaction_abort_on_error_input`<sup>Optional</sup> <a name="transaction_abort_on_error_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnErrorInput"></a>

```python
transaction_abort_on_error_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transaction_default_isolation_level_input`<sup>Optional</sup> <a name="transaction_default_isolation_level_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevelInput"></a>

```python
transaction_default_isolation_level_input: str
```

- *Type:* str

---

##### `two_digit_century_start_input`<sup>Optional</sup> <a name="two_digit_century_start_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStartInput"></a>

```python
two_digit_century_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unsupported_ddl_action_input`<sup>Optional</sup> <a name="unsupported_ddl_action_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlActionInput"></a>

```python
unsupported_ddl_action_input: str
```

- *Type:* str

---

##### `use_cached_result_input`<sup>Optional</sup> <a name="use_cached_result_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResultInput"></a>

```python
use_cached_result_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_task_managed_initial_warehouse_size_input`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSizeInput"></a>

```python
user_task_managed_initial_warehouse_size_input: str
```

- *Type:* str

---

##### `user_task_minimum_trigger_interval_in_seconds_input`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```python
user_task_minimum_trigger_interval_in_seconds_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_timeout_ms_input`<sup>Optional</sup> <a name="user_task_timeout_ms_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMsInput"></a>

```python
user_task_timeout_ms_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `week_of_year_policy_input`<sup>Optional</sup> <a name="week_of_year_policy_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicyInput"></a>

```python
week_of_year_policy_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `week_start_input`<sup>Optional</sup> <a name="week_start_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStartInput"></a>

```python
week_start_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `abort_detached_query`<sup>Required</sup> <a name="abort_detached_query" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQuery"></a>

```python
abort_detached_query: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `active_python_profiler`<sup>Required</sup> <a name="active_python_profiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfiler"></a>

```python
active_python_profiler: str
```

- *Type:* str

---

##### `allow_client_mfa_caching`<sup>Required</sup> <a name="allow_client_mfa_caching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCaching"></a>

```python
allow_client_mfa_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_id_token`<sup>Required</sup> <a name="allow_id_token" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdToken"></a>

```python
allow_id_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `authentication_policy`<sup>Required</sup> <a name="authentication_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommit"></a>

```python
autocommit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `base_location_prefix`<sup>Required</sup> <a name="base_location_prefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefix"></a>

```python
base_location_prefix: str
```

- *Type:* str

---

##### `binary_input_format`<sup>Required</sup> <a name="binary_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormat"></a>

```python
binary_input_format: str
```

- *Type:* str

---

##### `binary_output_format`<sup>Required</sup> <a name="binary_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormat"></a>

```python
binary_output_format: str
```

- *Type:* str

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

---

##### `catalog_sync`<sup>Required</sup> <a name="catalog_sync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSync"></a>

```python
catalog_sync: str
```

- *Type:* str

---

##### `client_enable_log_info_statement_parameters`<sup>Required</sup> <a name="client_enable_log_info_statement_parameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParameters"></a>

```python
client_enable_log_info_statement_parameters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_encryption_key_size`<sup>Required</sup> <a name="client_encryption_key_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySize"></a>

```python
client_encryption_key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_memory_limit`<sup>Required</sup> <a name="client_memory_limit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimit"></a>

```python
client_memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_metadata_request_use_connection_ctx`<sup>Required</sup> <a name="client_metadata_request_use_connection_ctx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtx"></a>

```python
client_metadata_request_use_connection_ctx: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_metadata_use_session_database`<sup>Required</sup> <a name="client_metadata_use_session_database" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabase"></a>

```python
client_metadata_use_session_database: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_prefetch_threads`<sup>Required</sup> <a name="client_prefetch_threads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreads"></a>

```python
client_prefetch_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_result_chunk_size`<sup>Required</sup> <a name="client_result_chunk_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSize"></a>

```python
client_result_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_result_column_case_insensitive`<sup>Required</sup> <a name="client_result_column_case_insensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitive"></a>

```python
client_result_column_case_insensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_session_keep_alive`<sup>Required</sup> <a name="client_session_keep_alive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAlive"></a>

```python
client_session_keep_alive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_session_keep_alive_heartbeat_frequency`<sup>Required</sup> <a name="client_session_keep_alive_heartbeat_frequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```python
client_session_keep_alive_heartbeat_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `client_timestamp_type_mapping`<sup>Required</sup> <a name="client_timestamp_type_mapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMapping"></a>

```python
client_timestamp_type_mapping: str
```

- *Type:* str

---

##### `cortex_enabled_cross_region`<sup>Required</sup> <a name="cortex_enabled_cross_region" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegion"></a>

```python
cortex_enabled_cross_region: str
```

- *Type:* str

---

##### `cortex_models_allowlist`<sup>Required</sup> <a name="cortex_models_allowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlist"></a>

```python
cortex_models_allowlist: str
```

- *Type:* str

---

##### `csv_timestamp_format`<sup>Required</sup> <a name="csv_timestamp_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormat"></a>

```python
csv_timestamp_format: str
```

- *Type:* str

---

##### `data_retention_time_in_days`<sup>Required</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `date_input_format`<sup>Required</sup> <a name="date_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormat"></a>

```python
date_input_format: str
```

- *Type:* str

---

##### `date_output_format`<sup>Required</sup> <a name="date_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormat"></a>

```python
date_output_format: str
```

- *Type:* str

---

##### `default_ddl_collation`<sup>Required</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollation"></a>

```python
default_ddl_collation: str
```

- *Type:* str

---

##### `default_notebook_compute_pool_cpu`<sup>Required</sup> <a name="default_notebook_compute_pool_cpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpu"></a>

```python
default_notebook_compute_pool_cpu: str
```

- *Type:* str

---

##### `default_notebook_compute_pool_gpu`<sup>Required</sup> <a name="default_notebook_compute_pool_gpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpu"></a>

```python
default_notebook_compute_pool_gpu: str
```

- *Type:* str

---

##### `default_null_ordering`<sup>Required</sup> <a name="default_null_ordering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrdering"></a>

```python
default_null_ordering: str
```

- *Type:* str

---

##### `default_streamlit_notebook_warehouse`<sup>Required</sup> <a name="default_streamlit_notebook_warehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouse"></a>

```python
default_streamlit_notebook_warehouse: str
```

- *Type:* str

---

##### `disable_ui_download_button`<sup>Required</sup> <a name="disable_ui_download_button" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButton"></a>

```python
disable_ui_download_button: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `disable_user_privilege_grants`<sup>Required</sup> <a name="disable_user_privilege_grants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrants"></a>

```python
disable_user_privilege_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_automatic_sensitive_data_classification_log`<sup>Required</sup> <a name="enable_automatic_sensitive_data_classification_log" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLog"></a>

```python
enable_automatic_sensitive_data_classification_log: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_egress_cost_optimizer`<sup>Required</sup> <a name="enable_egress_cost_optimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizer"></a>

```python
enable_egress_cost_optimizer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_identifier_first_login`<sup>Required</sup> <a name="enable_identifier_first_login" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLogin"></a>

```python
enable_identifier_first_login: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_internal_stages_privatelink`<sup>Required</sup> <a name="enable_internal_stages_privatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelink"></a>

```python
enable_internal_stages_privatelink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tri_secret_and_rekey_opt_out_for_image_repository`<sup>Required</sup> <a name="enable_tri_secret_and_rekey_opt_out_for_image_repository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```python
enable_tri_secret_and_rekey_opt_out_for_image_repository: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage`<sup>Required</sup> <a name="enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```python
enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_unhandled_exceptions_reporting`<sup>Required</sup> <a name="enable_unhandled_exceptions_reporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReporting"></a>

```python
enable_unhandled_exceptions_reporting: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_unload_physical_type_optimization`<sup>Required</sup> <a name="enable_unload_physical_type_optimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimization"></a>

```python
enable_unload_physical_type_optimization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_unredacted_query_syntax_error`<sup>Required</sup> <a name="enable_unredacted_query_syntax_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxError"></a>

```python
enable_unredacted_query_syntax_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enable_unredacted_secure_object_error`<sup>Required</sup> <a name="enable_unredacted_secure_object_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectError"></a>

```python
enable_unredacted_secure_object_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `enforce_network_rules_for_internal_stages`<sup>Required</sup> <a name="enforce_network_rules_for_internal_stages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStages"></a>

```python
enforce_network_rules_for_internal_stages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `error_on_nondeterministic_merge`<sup>Required</sup> <a name="error_on_nondeterministic_merge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMerge"></a>

```python
error_on_nondeterministic_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `error_on_nondeterministic_update`<sup>Required</sup> <a name="error_on_nondeterministic_update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdate"></a>

```python
error_on_nondeterministic_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `event_table`<sup>Required</sup> <a name="event_table" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTable"></a>

```python
event_table: str
```

- *Type:* str

---

##### `external_oauth_add_privileged_roles_to_blocked_list`<sup>Required</sup> <a name="external_oauth_add_privileged_roles_to_blocked_list" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```python
external_oauth_add_privileged_roles_to_blocked_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `external_volume`<sup>Required</sup> <a name="external_volume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

---

##### `feature_policy`<sup>Required</sup> <a name="feature_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicy"></a>

```python
feature_policy: str
```

- *Type:* str

---

##### `geography_output_format`<sup>Required</sup> <a name="geography_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormat"></a>

```python
geography_output_format: str
```

- *Type:* str

---

##### `geometry_output_format`<sup>Required</sup> <a name="geometry_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormat"></a>

```python
geometry_output_format: str
```

- *Type:* str

---

##### `hybrid_table_lock_timeout`<sup>Required</sup> <a name="hybrid_table_lock_timeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeout"></a>

```python
hybrid_table_lock_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `initial_replication_size_limit_in_tb`<sup>Required</sup> <a name="initial_replication_size_limit_in_tb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTb"></a>

```python
initial_replication_size_limit_in_tb: str
```

- *Type:* str

---

##### `jdbc_treat_decimal_as_int`<sup>Required</sup> <a name="jdbc_treat_decimal_as_int" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsInt"></a>

```python
jdbc_treat_decimal_as_int: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jdbc_treat_timestamp_ntz_as_utc`<sup>Required</sup> <a name="jdbc_treat_timestamp_ntz_as_utc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtc"></a>

```python
jdbc_treat_timestamp_ntz_as_utc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `jdbc_use_session_timezone`<sup>Required</sup> <a name="jdbc_use_session_timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezone"></a>

```python
jdbc_use_session_timezone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `json_indent`<sup>Required</sup> <a name="json_indent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndent"></a>

```python
json_indent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `js_treat_integer_as_bigint`<sup>Required</sup> <a name="js_treat_integer_as_bigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigint"></a>

```python
js_treat_integer_as_bigint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `listing_auto_fulfillment_replication_refresh_schedule`<sup>Required</sup> <a name="listing_auto_fulfillment_replication_refresh_schedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```python
listing_auto_fulfillment_replication_refresh_schedule: str
```

- *Type:* str

---

##### `lock_timeout`<sup>Required</sup> <a name="lock_timeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeout"></a>

```python
lock_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_level`<sup>Required</sup> <a name="log_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

---

##### `max_concurrency_level`<sup>Required</sup> <a name="max_concurrency_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevel"></a>

```python
max_concurrency_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `max_data_extension_time_in_days`<sup>Required</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `metric_level`<sup>Required</sup> <a name="metric_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

---

##### `min_data_retention_time_in_days`<sup>Required</sup> <a name="min_data_retention_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDays"></a>

```python
min_data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `multi_statement_count`<sup>Required</sup> <a name="multi_statement_count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCount"></a>

```python
multi_statement_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `network_policy`<sup>Required</sup> <a name="network_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

---

##### `noorder_sequence_as_default`<sup>Required</sup> <a name="noorder_sequence_as_default" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefault"></a>

```python
noorder_sequence_as_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `oauth_add_privileged_roles_to_blocked_list`<sup>Required</sup> <a name="oauth_add_privileged_roles_to_blocked_list" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedList"></a>

```python
oauth_add_privileged_roles_to_blocked_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `odbc_treat_decimal_as_int`<sup>Required</sup> <a name="odbc_treat_decimal_as_int" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsInt"></a>

```python
odbc_treat_decimal_as_int: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `packages_policy`<sup>Required</sup> <a name="packages_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicy"></a>

```python
packages_policy: str
```

- *Type:* str

---

##### `password_policy`<sup>Required</sup> <a name="password_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

---

##### `periodic_data_rekeying`<sup>Required</sup> <a name="periodic_data_rekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeying"></a>

```python
periodic_data_rekeying: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `pipe_execution_paused`<sup>Required</sup> <a name="pipe_execution_paused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPaused"></a>

```python
pipe_execution_paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_unload_to_inline_url`<sup>Required</sup> <a name="prevent_unload_to_inline_url" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrl"></a>

```python
prevent_unload_to_inline_url: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `prevent_unload_to_internal_stages`<sup>Required</sup> <a name="prevent_unload_to_internal_stages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStages"></a>

```python
prevent_unload_to_internal_stages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `python_profiler_modules`<sup>Required</sup> <a name="python_profiler_modules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModules"></a>

```python
python_profiler_modules: str
```

- *Type:* str

---

##### `python_profiler_target_stage`<sup>Required</sup> <a name="python_profiler_target_stage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStage"></a>

```python
python_profiler_target_stage: str
```

- *Type:* str

---

##### `query_tag`<sup>Required</sup> <a name="query_tag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTag"></a>

```python
query_tag: str
```

- *Type:* str

---

##### `quoted_identifiers_ignore_case`<sup>Required</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCase"></a>

```python
quoted_identifiers_ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `replace_invalid_characters`<sup>Required</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_storage_integration_for_stage_creation`<sup>Required</sup> <a name="require_storage_integration_for_stage_creation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreation"></a>

```python
require_storage_integration_for_stage_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `require_storage_integration_for_stage_operation`<sup>Required</sup> <a name="require_storage_integration_for_stage_operation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperation"></a>

```python
require_storage_integration_for_stage_operation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `resource_monitor`<sup>Required</sup> <a name="resource_monitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitor"></a>

```python
resource_monitor: str
```

- *Type:* str

---

##### `rows_per_resultset`<sup>Required</sup> <a name="rows_per_resultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultset"></a>

```python
rows_per_resultset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `s3_stage_vpce_dns_name`<sup>Required</sup> <a name="s3_stage_vpce_dns_name" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsName"></a>

```python
s3_stage_vpce_dns_name: str
```

- *Type:* str

---

##### `saml_identity_provider`<sup>Required</sup> <a name="saml_identity_provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProvider"></a>

```python
saml_identity_provider: str
```

- *Type:* str

---

##### `search_path`<sup>Required</sup> <a name="search_path" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPath"></a>

```python
search_path: str
```

- *Type:* str

---

##### `serverless_task_max_statement_size`<sup>Required</sup> <a name="serverless_task_max_statement_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSize"></a>

```python
serverless_task_max_statement_size: str
```

- *Type:* str

---

##### `serverless_task_min_statement_size`<sup>Required</sup> <a name="serverless_task_min_statement_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSize"></a>

```python
serverless_task_min_statement_size: str
```

- *Type:* str

---

##### `session_policy`<sup>Required</sup> <a name="session_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicy"></a>

```python
session_policy: str
```

- *Type:* str

---

##### `simulated_data_sharing_consumer`<sup>Required</sup> <a name="simulated_data_sharing_consumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumer"></a>

```python
simulated_data_sharing_consumer: str
```

- *Type:* str

---

##### `sso_login_page`<sup>Required</sup> <a name="sso_login_page" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPage"></a>

```python
sso_login_page: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `statement_queued_timeout_in_seconds`<sup>Required</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSeconds"></a>

```python
statement_queued_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `statement_timeout_in_seconds`<sup>Required</sup> <a name="statement_timeout_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSeconds"></a>

```python
statement_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `storage_serialization_policy`<sup>Required</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

---

##### `strict_json_output`<sup>Required</sup> <a name="strict_json_output" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutput"></a>

```python
strict_json_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `suspend_task_after_num_failures`<sup>Required</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `task_auto_retry_attempts`<sup>Required</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttempts"></a>

```python
task_auto_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `time_input_format`<sup>Required</sup> <a name="time_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormat"></a>

```python
time_input_format: str
```

- *Type:* str

---

##### `time_output_format`<sup>Required</sup> <a name="time_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormat"></a>

```python
time_output_format: str
```

- *Type:* str

---

##### `timestamp_day_is_always24_h`<sup>Required</sup> <a name="timestamp_day_is_always24_h" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24H"></a>

```python
timestamp_day_is_always24_h: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `timestamp_input_format`<sup>Required</sup> <a name="timestamp_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormat"></a>

```python
timestamp_input_format: str
```

- *Type:* str

---

##### `timestamp_ltz_output_format`<sup>Required</sup> <a name="timestamp_ltz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormat"></a>

```python
timestamp_ltz_output_format: str
```

- *Type:* str

---

##### `timestamp_ntz_output_format`<sup>Required</sup> <a name="timestamp_ntz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormat"></a>

```python
timestamp_ntz_output_format: str
```

- *Type:* str

---

##### `timestamp_output_format`<sup>Required</sup> <a name="timestamp_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormat"></a>

```python
timestamp_output_format: str
```

- *Type:* str

---

##### `timestamp_type_mapping`<sup>Required</sup> <a name="timestamp_type_mapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMapping"></a>

```python
timestamp_type_mapping: str
```

- *Type:* str

---

##### `timestamp_tz_output_format`<sup>Required</sup> <a name="timestamp_tz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormat"></a>

```python
timestamp_tz_output_format: str
```

- *Type:* str

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

---

##### `trace_level`<sup>Required</sup> <a name="trace_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

---

##### `transaction_abort_on_error`<sup>Required</sup> <a name="transaction_abort_on_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnError"></a>

```python
transaction_abort_on_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `transaction_default_isolation_level`<sup>Required</sup> <a name="transaction_default_isolation_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevel"></a>

```python
transaction_default_isolation_level: str
```

- *Type:* str

---

##### `two_digit_century_start`<sup>Required</sup> <a name="two_digit_century_start" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStart"></a>

```python
two_digit_century_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `unsupported_ddl_action`<sup>Required</sup> <a name="unsupported_ddl_action" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlAction"></a>

```python
unsupported_ddl_action: str
```

- *Type:* str

---

##### `use_cached_result`<sup>Required</sup> <a name="use_cached_result" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResult"></a>

```python
use_cached_result: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `user_task_managed_initial_warehouse_size`<sup>Required</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Required</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```python
user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `user_task_timeout_ms`<sup>Required</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `week_of_year_policy`<sup>Required</sup> <a name="week_of_year_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicy"></a>

```python
week_of_year_policy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `week_start`<sup>Required</sup> <a name="week_start" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStart"></a>

```python
week_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CurrentAccountConfig <a name="CurrentAccountConfig" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import current_account

currentAccount.CurrentAccountConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  abort_detached_query: typing.Union[bool, IResolvable] = None,
  active_python_profiler: str = None,
  allow_client_mfa_caching: typing.Union[bool, IResolvable] = None,
  allow_id_token: typing.Union[bool, IResolvable] = None,
  authentication_policy: str = None,
  autocommit: typing.Union[bool, IResolvable] = None,
  base_location_prefix: str = None,
  binary_input_format: str = None,
  binary_output_format: str = None,
  catalog: str = None,
  catalog_sync: str = None,
  client_enable_log_info_statement_parameters: typing.Union[bool, IResolvable] = None,
  client_encryption_key_size: typing.Union[int, float] = None,
  client_memory_limit: typing.Union[int, float] = None,
  client_metadata_request_use_connection_ctx: typing.Union[bool, IResolvable] = None,
  client_metadata_use_session_database: typing.Union[bool, IResolvable] = None,
  client_prefetch_threads: typing.Union[int, float] = None,
  client_result_chunk_size: typing.Union[int, float] = None,
  client_result_column_case_insensitive: typing.Union[bool, IResolvable] = None,
  client_session_keep_alive: typing.Union[bool, IResolvable] = None,
  client_session_keep_alive_heartbeat_frequency: typing.Union[int, float] = None,
  client_timestamp_type_mapping: str = None,
  cortex_enabled_cross_region: str = None,
  cortex_models_allowlist: str = None,
  csv_timestamp_format: str = None,
  data_retention_time_in_days: typing.Union[int, float] = None,
  date_input_format: str = None,
  date_output_format: str = None,
  default_ddl_collation: str = None,
  default_notebook_compute_pool_cpu: str = None,
  default_notebook_compute_pool_gpu: str = None,
  default_null_ordering: str = None,
  default_streamlit_notebook_warehouse: str = None,
  disable_ui_download_button: typing.Union[bool, IResolvable] = None,
  disable_user_privilege_grants: typing.Union[bool, IResolvable] = None,
  enable_automatic_sensitive_data_classification_log: typing.Union[bool, IResolvable] = None,
  enable_egress_cost_optimizer: typing.Union[bool, IResolvable] = None,
  enable_identifier_first_login: typing.Union[bool, IResolvable] = None,
  enable_internal_stages_privatelink: typing.Union[bool, IResolvable] = None,
  enable_tri_secret_and_rekey_opt_out_for_image_repository: typing.Union[bool, IResolvable] = None,
  enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage: typing.Union[bool, IResolvable] = None,
  enable_unhandled_exceptions_reporting: typing.Union[bool, IResolvable] = None,
  enable_unload_physical_type_optimization: typing.Union[bool, IResolvable] = None,
  enable_unredacted_query_syntax_error: typing.Union[bool, IResolvable] = None,
  enable_unredacted_secure_object_error: typing.Union[bool, IResolvable] = None,
  enforce_network_rules_for_internal_stages: typing.Union[bool, IResolvable] = None,
  error_on_nondeterministic_merge: typing.Union[bool, IResolvable] = None,
  error_on_nondeterministic_update: typing.Union[bool, IResolvable] = None,
  event_table: str = None,
  external_oauth_add_privileged_roles_to_blocked_list: typing.Union[bool, IResolvable] = None,
  external_volume: str = None,
  feature_policy: str = None,
  geography_output_format: str = None,
  geometry_output_format: str = None,
  hybrid_table_lock_timeout: typing.Union[int, float] = None,
  id: str = None,
  initial_replication_size_limit_in_tb: str = None,
  jdbc_treat_decimal_as_int: typing.Union[bool, IResolvable] = None,
  jdbc_treat_timestamp_ntz_as_utc: typing.Union[bool, IResolvable] = None,
  jdbc_use_session_timezone: typing.Union[bool, IResolvable] = None,
  json_indent: typing.Union[int, float] = None,
  js_treat_integer_as_bigint: typing.Union[bool, IResolvable] = None,
  listing_auto_fulfillment_replication_refresh_schedule: str = None,
  lock_timeout: typing.Union[int, float] = None,
  log_level: str = None,
  max_concurrency_level: typing.Union[int, float] = None,
  max_data_extension_time_in_days: typing.Union[int, float] = None,
  metric_level: str = None,
  min_data_retention_time_in_days: typing.Union[int, float] = None,
  multi_statement_count: typing.Union[int, float] = None,
  network_policy: str = None,
  noorder_sequence_as_default: typing.Union[bool, IResolvable] = None,
  oauth_add_privileged_roles_to_blocked_list: typing.Union[bool, IResolvable] = None,
  odbc_treat_decimal_as_int: typing.Union[bool, IResolvable] = None,
  packages_policy: str = None,
  password_policy: str = None,
  periodic_data_rekeying: typing.Union[bool, IResolvable] = None,
  pipe_execution_paused: typing.Union[bool, IResolvable] = None,
  prevent_unload_to_inline_url: typing.Union[bool, IResolvable] = None,
  prevent_unload_to_internal_stages: typing.Union[bool, IResolvable] = None,
  python_profiler_modules: str = None,
  python_profiler_target_stage: str = None,
  query_tag: str = None,
  quoted_identifiers_ignore_case: typing.Union[bool, IResolvable] = None,
  replace_invalid_characters: typing.Union[bool, IResolvable] = None,
  require_storage_integration_for_stage_creation: typing.Union[bool, IResolvable] = None,
  require_storage_integration_for_stage_operation: typing.Union[bool, IResolvable] = None,
  resource_monitor: str = None,
  rows_per_resultset: typing.Union[int, float] = None,
  s3_stage_vpce_dns_name: str = None,
  saml_identity_provider: str = None,
  search_path: str = None,
  serverless_task_max_statement_size: str = None,
  serverless_task_min_statement_size: str = None,
  session_policy: str = None,
  simulated_data_sharing_consumer: str = None,
  sso_login_page: typing.Union[bool, IResolvable] = None,
  statement_queued_timeout_in_seconds: typing.Union[int, float] = None,
  statement_timeout_in_seconds: typing.Union[int, float] = None,
  storage_serialization_policy: str = None,
  strict_json_output: typing.Union[bool, IResolvable] = None,
  suspend_task_after_num_failures: typing.Union[int, float] = None,
  task_auto_retry_attempts: typing.Union[int, float] = None,
  time_input_format: str = None,
  time_output_format: str = None,
  timeouts: CurrentAccountTimeouts = None,
  timestamp_day_is_always24_h: typing.Union[bool, IResolvable] = None,
  timestamp_input_format: str = None,
  timestamp_ltz_output_format: str = None,
  timestamp_ntz_output_format: str = None,
  timestamp_output_format: str = None,
  timestamp_type_mapping: str = None,
  timestamp_tz_output_format: str = None,
  timezone: str = None,
  trace_level: str = None,
  transaction_abort_on_error: typing.Union[bool, IResolvable] = None,
  transaction_default_isolation_level: str = None,
  two_digit_century_start: typing.Union[int, float] = None,
  unsupported_ddl_action: str = None,
  use_cached_result: typing.Union[bool, IResolvable] = None,
  user_task_managed_initial_warehouse_size: str = None,
  user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float] = None,
  user_task_timeout_ms: typing.Union[int, float] = None,
  week_of_year_policy: typing.Union[int, float] = None,
  week_start: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.abortDetachedQuery">abort_detached_query</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.activePythonProfiler">active_python_profiler</a></code> | <code>str</code> | Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` \| `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowClientMfaCaching">allow_client_mfa_caching</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowIdToken">allow_id_token</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.authenticationPolicy">authentication_policy</a></code> | <code>str</code> | Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.autocommit">autocommit</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether autocommit is enabled for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.baseLocationPrefix">base_location_prefix</a></code> | <code>str</code> | Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryInputFormat">binary_input_format</a></code> | <code>str</code> | The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryOutputFormat">binary_output_format</a></code> | <code>str</code> | The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalog">catalog</a></code> | <code>str</code> | Specifies the catalog for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalogSync">catalog_sync</a></code> | <code>str</code> | Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEnableLogInfoStatementParameters">client_enable_log_info_statement_parameters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEncryptionKeySize">client_encryption_key_size</a></code> | <code>typing.Union[int, float]</code> | Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMemoryLimit">client_memory_limit</a></code> | <code>typing.Union[int, float]</code> | Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataRequestUseConnectionCtx">client_metadata_request_use_connection_ctx</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataUseSessionDatabase">client_metadata_use_session_database</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientPrefetchThreads">client_prefetch_threads</a></code> | <code>typing.Union[int, float]</code> | Parameter that specifies the number of threads used by the client to pre-fetch large result sets. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultChunkSize">client_result_chunk_size</a></code> | <code>typing.Union[int, float]</code> | Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultColumnCaseInsensitive">client_result_column_case_insensitive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAlive">client_session_keep_alive</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency">client_session_keep_alive_heartbeat_frequency</a></code> | <code>typing.Union[int, float]</code> | Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientTimestampTypeMapping">client_timestamp_type_mapping</a></code> | <code>str</code> | Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` \| `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexEnabledCrossRegion">cortex_enabled_cross_region</a></code> | <code>str</code> | Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexModelsAllowlist">cortex_models_allowlist</a></code> | <code>str</code> | Specifies the models that users in the account can access. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.csvTimestampFormat">csv_timestamp_format</a></code> | <code>str</code> | Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dataRetentionTimeInDays">data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateInputFormat">date_input_format</a></code> | <code>str</code> | Specifies the input format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateOutputFormat">date_output_format</a></code> | <code>str</code> | Specifies the display format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultDdlCollation">default_ddl_collation</a></code> | <code>str</code> | Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolCpu">default_notebook_compute_pool_cpu</a></code> | <code>str</code> | Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolGpu">default_notebook_compute_pool_gpu</a></code> | <code>str</code> | Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNullOrdering">default_null_ordering</a></code> | <code>str</code> | Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` \| `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultStreamlitNotebookWarehouse">default_streamlit_notebook_warehouse</a></code> | <code>str</code> | Specifies the name of the default warehouse to use when creating a notebook. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUiDownloadButton">disable_ui_download_button</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUserPrivilegeGrants">disable_user_privilege_grants</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether users in an account can grant privileges directly to other users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableAutomaticSensitiveDataClassificationLog">enable_automatic_sensitive_data_classification_log</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableEgressCostOptimizer">enable_egress_cost_optimizer</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableIdentifierFirstLogin">enable_identifier_first_login</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines the login flow for users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableInternalStagesPrivatelink">enable_internal_stages_privatelink</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository">enable_tri_secret_and_rekey_opt_out_for_image_repository</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnhandledExceptionsReporting">enable_unhandled_exceptions_reporting</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnloadPhysicalTypeOptimization">enable_unload_physical_type_optimization</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedQuerySyntaxError">enable_unredacted_query_syntax_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedSecureObjectError">enable_unredacted_secure_object_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Controls whether error messages related to secure objects are redacted in metadata. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enforceNetworkRulesForInternalStages">enforce_network_rules_for_internal_stages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicMerge">error_on_nondeterministic_merge</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicUpdate">error_on_nondeterministic_update</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.eventTable">event_table</a></code> | <code>str</code> | Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList">external_oauth_add_privileged_roles_to_blocked_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalVolume">external_volume</a></code> | <code>str</code> | Specifies the external volume for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.featurePolicy">feature_policy</a></code> | <code>str</code> | Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geographyOutputFormat">geography_output_format</a></code> | <code>str</code> | Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geometryOutputFormat">geometry_output_format</a></code> | <code>str</code> | Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.hybridTableLockTimeout">hybrid_table_lock_timeout</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#id CurrentAccount#id}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.initialReplicationSizeLimitInTb">initial_replication_size_limit_in_tb</a></code> | <code>str</code> | Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatDecimalAsInt">jdbc_treat_decimal_as_int</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatTimestampNtzAsUtc">jdbc_treat_timestamp_ntz_as_utc</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcUseSessionTimezone">jdbc_use_session_timezone</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsonIndent">json_indent</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of blank spaces to indent each new element in JSON output in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsTreatIntegerAsBigint">js_treat_integer_as_bigint</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule">listing_auto_fulfillment_replication_refresh_schedule</a></code> | <code>str</code> | Sets the time interval used to refresh the application package based data products to other regions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lockTimeout">lock_timeout</a></code> | <code>typing.Union[int, float]</code> | Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.logLevel">log_level</a></code> | <code>str</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxConcurrencyLevel">max_concurrency_level</a></code> | <code>typing.Union[int, float]</code> | Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxDataExtensionTimeInDays">max_data_extension_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.metricLevel">metric_level</a></code> | <code>str</code> | Controls how metrics data is ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.minDataRetentionTimeInDays">min_data_retention_time_in_days</a></code> | <code>typing.Union[int, float]</code> | Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.multiStatementCount">multi_statement_count</a></code> | <code>typing.Union[int, float]</code> | Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.networkPolicy">network_policy</a></code> | <code>str</code> | Specifies the network policy to enforce for your account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.noorderSequenceAsDefault">noorder_sequence_as_default</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.oauthAddPrivilegedRolesToBlockedList">oauth_add_privileged_roles_to_blocked_list</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.odbcTreatDecimalAsInt">odbc_treat_decimal_as_int</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.packagesPolicy">packages_policy</a></code> | <code>str</code> | Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.passwordPolicy">password_policy</a></code> | <code>str</code> | Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.periodicDataRekeying">periodic_data_rekeying</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pipeExecutionPaused">pipe_execution_paused</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInlineUrl">prevent_unload_to_inline_url</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInternalStages">prevent_unload_to_internal_stages</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerModules">python_profiler_modules</a></code> | <code>str</code> | Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerTargetStage">python_profiler_target_stage</a></code> | <code>str</code> | Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.queryTag">query_tag</a></code> | <code>str</code> | Optional string that can be used to tag queries and other SQL statements executed within a session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.quotedIdentifiersIgnoreCase">quoted_identifiers_ignore_case</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.replaceInvalidCharacters">replace_invalid_characters</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageCreation">require_storage_integration_for_stage_creation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageOperation">require_storage_integration_for_stage_operation</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.resourceMonitor">resource_monitor</a></code> | <code>str</code> | Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.rowsPerResultset">rows_per_resultset</a></code> | <code>typing.Union[int, float]</code> | Specifies the maximum number of rows returned in a result set. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.s3StageVpceDnsName">s3_stage_vpce_dns_name</a></code> | <code>str</code> | Specifies the DNS name of an Amazon S3 interface endpoint. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.samlIdentityProvider">saml_identity_provider</a></code> | <code>str</code> | Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.searchPath">search_path</a></code> | <code>str</code> | Specifies the path to search to resolve unqualified object names in queries. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMaxStatementSize">serverless_task_max_statement_size</a></code> | <code>str</code> | Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMinStatementSize">serverless_task_min_statement_size</a></code> | <code>str</code> | Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.sessionPolicy">session_policy</a></code> | <code>str</code> | Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.simulatedDataSharingConsumer">simulated_data_sharing_consumer</a></code> | <code>str</code> | Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.ssoLoginPage">sso_login_page</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementQueuedTimeoutInSeconds">statement_queued_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementTimeoutInSeconds">statement_timeout_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.storageSerializationPolicy">storage_serialization_policy</a></code> | <code>str</code> | Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` \| `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.strictJsonOutput">strict_json_output</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.suspendTaskAfterNumFailures">suspend_task_after_num_failures</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.taskAutoRetryAttempts">task_auto_retry_attempts</a></code> | <code>typing.Union[int, float]</code> | Specifies the number of automatic task graph retry attempts. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeInputFormat">time_input_format</a></code> | <code>str</code> | Specifies the input format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeOutputFormat">time_output_format</a></code> | <code>str</code> | Specifies the display format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampDayIsAlways24H">timestamp_day_is_always24_h</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampInputFormat">timestamp_input_format</a></code> | <code>str</code> | Specifies the input format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampLtzOutputFormat">timestamp_ltz_output_format</a></code> | <code>str</code> | Specifies the display format for the TIMESTAMP_LTZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampNtzOutputFormat">timestamp_ntz_output_format</a></code> | <code>str</code> | Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampOutputFormat">timestamp_output_format</a></code> | <code>str</code> | Specifies the display format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTypeMapping">timestamp_type_mapping</a></code> | <code>str</code> | Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTzOutputFormat">timestamp_tz_output_format</a></code> | <code>str</code> | Specifies the display format for the TIMESTAMP_TZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timezone">timezone</a></code> | <code>str</code> | Specifies the time zone for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.traceLevel">trace_level</a></code> | <code>str</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionAbortOnError">transaction_abort_on_error</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionDefaultIsolationLevel">transaction_default_isolation_level</a></code> | <code>str</code> | Specifies the isolation level for transactions in the user session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.twoDigitCenturyStart">two_digit_century_start</a></code> | <code>typing.Union[int, float]</code> | Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.unsupportedDdlAction">unsupported_ddl_action</a></code> | <code>str</code> | Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.useCachedResult">use_cached_result</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Specifies whether to reuse persisted query results, if available, when a matching query is submitted. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskManagedInitialWarehouseSize">user_task_managed_initial_warehouse_size</a></code> | <code>str</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds">user_task_minimum_trigger_interval_in_seconds</a></code> | <code>typing.Union[int, float]</code> | Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskTimeoutMs">user_task_timeout_ms</a></code> | <code>typing.Union[int, float]</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekOfYearPolicy">week_of_year_policy</a></code> | <code>typing.Union[int, float]</code> | Specifies how the weeks in a given year are computed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekStart">week_start</a></code> | <code>typing.Union[int, float]</code> | Specifies the first day of the week (used by week-related date functions). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `abort_detached_query`<sup>Optional</sup> <a name="abort_detached_query" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.abortDetachedQuery"></a>

```python
abort_detached_query: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#abort_detached_query CurrentAccount#abort_detached_query}

---

##### `active_python_profiler`<sup>Optional</sup> <a name="active_python_profiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.activePythonProfiler"></a>

```python
active_python_profiler: str
```

- *Type:* str

Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#active_python_profiler CurrentAccount#active_python_profiler}

---

##### `allow_client_mfa_caching`<sup>Optional</sup> <a name="allow_client_mfa_caching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowClientMfaCaching"></a>

```python
allow_client_mfa_caching: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#allow_client_mfa_caching CurrentAccount#allow_client_mfa_caching}

---

##### `allow_id_token`<sup>Optional</sup> <a name="allow_id_token" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowIdToken"></a>

```python
allow_id_token: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#allow_id_token CurrentAccount#allow_id_token}

---

##### `authentication_policy`<sup>Optional</sup> <a name="authentication_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.authenticationPolicy"></a>

```python
authentication_policy: str
```

- *Type:* str

Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#authentication_policy CurrentAccount#authentication_policy}

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.autocommit"></a>

```python
autocommit: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether autocommit is enabled for the session.

Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#autocommit CurrentAccount#autocommit}

---

##### `base_location_prefix`<sup>Optional</sup> <a name="base_location_prefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.baseLocationPrefix"></a>

```python
base_location_prefix: str
```

- *Type:* str

Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables.

For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#base_location_prefix CurrentAccount#base_location_prefix}

---

##### `binary_input_format`<sup>Optional</sup> <a name="binary_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryInputFormat"></a>

```python
binary_input_format: str
```

- *Type:* str

The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#binary_input_format CurrentAccount#binary_input_format}

---

##### `binary_output_format`<sup>Optional</sup> <a name="binary_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryOutputFormat"></a>

```python
binary_output_format: str
```

- *Type:* str

The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#binary_output_format CurrentAccount#binary_output_format}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalog"></a>

```python
catalog: str
```

- *Type:* str

Specifies the catalog for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#catalog CurrentAccount#catalog}

---

##### `catalog_sync`<sup>Optional</sup> <a name="catalog_sync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalogSync"></a>

```python
catalog_sync: str
```

- *Type:* str

Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#catalog_sync CurrentAccount#catalog_sync}

---

##### `client_enable_log_info_statement_parameters`<sup>Optional</sup> <a name="client_enable_log_info_statement_parameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEnableLogInfoStatementParameters"></a>

```python
client_enable_log_info_statement_parameters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_enable_log_info_statement_parameters CurrentAccount#client_enable_log_info_statement_parameters}

---

##### `client_encryption_key_size`<sup>Optional</sup> <a name="client_encryption_key_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEncryptionKeySize"></a>

```python
client_encryption_key_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type.

For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_encryption_key_size CurrentAccount#client_encryption_key_size}

---

##### `client_memory_limit`<sup>Optional</sup> <a name="client_memory_limit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMemoryLimit"></a>

```python
client_memory_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB).

For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_memory_limit CurrentAccount#client_memory_limit}

---

##### `client_metadata_request_use_connection_ctx`<sup>Optional</sup> <a name="client_metadata_request_use_connection_ctx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataRequestUseConnectionCtx"></a>

```python
client_metadata_request_use_connection_ctx: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema.

The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_metadata_request_use_connection_ctx CurrentAccount#client_metadata_request_use_connection_ctx}

---

##### `client_metadata_use_session_database`<sup>Optional</sup> <a name="client_metadata_use_session_database" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataUseSessionDatabase"></a>

```python
client_metadata_use_session_database: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database.

The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_metadata_use_session_database CurrentAccount#client_metadata_use_session_database}

---

##### `client_prefetch_threads`<sup>Optional</sup> <a name="client_prefetch_threads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientPrefetchThreads"></a>

```python
client_prefetch_threads: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Parameter that specifies the number of threads used by the client to pre-fetch large result sets.

The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_prefetch_threads CurrentAccount#client_prefetch_threads}

---

##### `client_result_chunk_size`<sup>Optional</sup> <a name="client_result_chunk_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultChunkSize"></a>

```python
client_result_chunk_size: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB).

The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_result_chunk_size CurrentAccount#client_result_chunk_size}

---

##### `client_result_column_case_insensitive`<sup>Optional</sup> <a name="client_result_column_case_insensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultColumnCaseInsensitive"></a>

```python
client_result_column_case_insensitive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_result_column_case_insensitive CurrentAccount#client_result_column_case_insensitive}

---

##### `client_session_keep_alive`<sup>Optional</sup> <a name="client_session_keep_alive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAlive"></a>

```python
client_session_keep_alive: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Parameter that indicates whether to force a user to log in again after a period of inactivity in the session.

For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_session_keep_alive CurrentAccount#client_session_keep_alive}

---

##### `client_session_keep_alive_heartbeat_frequency`<sup>Optional</sup> <a name="client_session_keep_alive_heartbeat_frequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```python
client_session_keep_alive_heartbeat_frequency: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_session_keep_alive_heartbeat_frequency CurrentAccount#client_session_keep_alive_heartbeat_frequency}

---

##### `client_timestamp_type_mapping`<sup>Optional</sup> <a name="client_timestamp_type_mapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientTimestampTypeMapping"></a>

```python
client_timestamp_type_mapping: str
```

- *Type:* str

Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#client_timestamp_type_mapping CurrentAccount#client_timestamp_type_mapping}

---

##### `cortex_enabled_cross_region`<sup>Optional</sup> <a name="cortex_enabled_cross_region" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexEnabledCrossRegion"></a>

```python
cortex_enabled_cross_region: str
```

- *Type:* str

Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed.

Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#cortex_enabled_cross_region CurrentAccount#cortex_enabled_cross_region}

---

##### `cortex_models_allowlist`<sup>Optional</sup> <a name="cortex_models_allowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexModelsAllowlist"></a>

```python
cortex_models_allowlist: str
```

- *Type:* str

Specifies the models that users in the account can access.

Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#cortex_models_allowlist CurrentAccount#cortex_models_allowlist}

---

##### `csv_timestamp_format`<sup>Optional</sup> <a name="csv_timestamp_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.csvTimestampFormat"></a>

```python
csv_timestamp_format: str
```

- *Type:* str

Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight.

If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#csv_timestamp_format CurrentAccount#csv_timestamp_format}

---

##### `data_retention_time_in_days`<sup>Optional</sup> <a name="data_retention_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dataRetentionTimeInDays"></a>

```python
data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#data_retention_time_in_days CurrentAccount#data_retention_time_in_days}

---

##### `date_input_format`<sup>Optional</sup> <a name="date_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateInputFormat"></a>

```python
date_input_format: str
```

- *Type:* str

Specifies the input format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#date_input_format CurrentAccount#date_input_format}

---

##### `date_output_format`<sup>Optional</sup> <a name="date_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateOutputFormat"></a>

```python
date_output_format: str
```

- *Type:* str

Specifies the display format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#date_output_format CurrentAccount#date_output_format}

---

##### `default_ddl_collation`<sup>Optional</sup> <a name="default_ddl_collation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultDdlCollation"></a>

```python
default_ddl_collation: str
```

- *Type:* str

Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_ddl_collation CurrentAccount#default_ddl_collation}

---

##### `default_notebook_compute_pool_cpu`<sup>Optional</sup> <a name="default_notebook_compute_pool_cpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolCpu"></a>

```python
default_notebook_compute_pool_cpu: str
```

- *Type:* str

Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_notebook_compute_pool_cpu CurrentAccount#default_notebook_compute_pool_cpu}

---

##### `default_notebook_compute_pool_gpu`<sup>Optional</sup> <a name="default_notebook_compute_pool_gpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolGpu"></a>

```python
default_notebook_compute_pool_gpu: str
```

- *Type:* str

Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_notebook_compute_pool_gpu CurrentAccount#default_notebook_compute_pool_gpu}

---

##### `default_null_ordering`<sup>Optional</sup> <a name="default_null_ordering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNullOrdering"></a>

```python
default_null_ordering: str
```

- *Type:* str

Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_null_ordering CurrentAccount#default_null_ordering}

---

##### `default_streamlit_notebook_warehouse`<sup>Optional</sup> <a name="default_streamlit_notebook_warehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultStreamlitNotebookWarehouse"></a>

```python
default_streamlit_notebook_warehouse: str
```

- *Type:* str

Specifies the name of the default warehouse to use when creating a notebook.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#default_streamlit_notebook_warehouse CurrentAccount#default_streamlit_notebook_warehouse}

---

##### `disable_ui_download_button`<sup>Optional</sup> <a name="disable_ui_download_button" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUiDownloadButton"></a>

```python
disable_ui_download_button: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet.

If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#disable_ui_download_button CurrentAccount#disable_ui_download_button}

---

##### `disable_user_privilege_grants`<sup>Optional</sup> <a name="disable_user_privilege_grants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUserPrivilegeGrants"></a>

```python
disable_user_privilege_grants: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether users in an account can grant privileges directly to other users.

Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#disable_user_privilege_grants CurrentAccount#disable_user_privilege_grants}

---

##### `enable_automatic_sensitive_data_classification_log`<sup>Optional</sup> <a name="enable_automatic_sensitive_data_classification_log" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableAutomaticSensitiveDataClassificationLog"></a>

```python
enable_automatic_sensitive_data_classification_log: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_automatic_sensitive_data_classification_log CurrentAccount#enable_automatic_sensitive_data_classification_log}

---

##### `enable_egress_cost_optimizer`<sup>Optional</sup> <a name="enable_egress_cost_optimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableEgressCostOptimizer"></a>

```python
enable_egress_cost_optimizer: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_egress_cost_optimizer CurrentAccount#enable_egress_cost_optimizer}

---

##### `enable_identifier_first_login`<sup>Optional</sup> <a name="enable_identifier_first_login" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableIdentifierFirstLogin"></a>

```python
enable_identifier_first_login: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines the login flow for users.

When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_identifier_first_login CurrentAccount#enable_identifier_first_login}

---

##### `enable_internal_stages_privatelink`<sup>Optional</sup> <a name="enable_internal_stages_privatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableInternalStagesPrivatelink"></a>

```python
enable_internal_stages_privatelink: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_internal_stages_privatelink CurrentAccount#enable_internal_stages_privatelink}

---

##### `enable_tri_secret_and_rekey_opt_out_for_image_repository`<sup>Optional</sup> <a name="enable_tri_secret_and_rekey_opt_out_for_image_repository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```python
enable_tri_secret_and_rekey_opt_out_for_image_repository: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}

---

##### `enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage`<sup>Optional</sup> <a name="enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```python
enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}

---

##### `enable_unhandled_exceptions_reporting`<sup>Optional</sup> <a name="enable_unhandled_exceptions_reporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnhandledExceptionsReporting"></a>

```python
enable_unhandled_exceptions_reporting: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code.

For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_unhandled_exceptions_reporting CurrentAccount#enable_unhandled_exceptions_reporting}

---

##### `enable_unload_physical_type_optimization`<sup>Optional</sup> <a name="enable_unload_physical_type_optimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnloadPhysicalTypeOptimization"></a>

```python
enable_unload_physical_type_optimization: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_unload_physical_type_optimization CurrentAccount#enable_unload_physical_type_optimization}

---

##### `enable_unredacted_query_syntax_error`<sup>Optional</sup> <a name="enable_unredacted_query_syntax_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedQuerySyntaxError"></a>

```python
enable_unredacted_query_syntax_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error.

If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_unredacted_query_syntax_error CurrentAccount#enable_unredacted_query_syntax_error}

---

##### `enable_unredacted_secure_object_error`<sup>Optional</sup> <a name="enable_unredacted_secure_object_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedSecureObjectError"></a>

```python
enable_unredacted_secure_object_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Controls whether error messages related to secure objects are redacted in metadata.

For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enable_unredacted_secure_object_error CurrentAccount#enable_unredacted_secure_object_error}

---

##### `enforce_network_rules_for_internal_stages`<sup>Optional</sup> <a name="enforce_network_rules_for_internal_stages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enforceNetworkRulesForInternalStages"></a>

```python
enforce_network_rules_for_internal_stages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether a network policy that uses network rules can restrict access to AWS internal stages.

This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#enforce_network_rules_for_internal_stages CurrentAccount#enforce_network_rules_for_internal_stages}

---

##### `error_on_nondeterministic_merge`<sup>Optional</sup> <a name="error_on_nondeterministic_merge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicMerge"></a>

```python
error_on_nondeterministic_merge: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#error_on_nondeterministic_merge CurrentAccount#error_on_nondeterministic_merge}

---

##### `error_on_nondeterministic_update`<sup>Optional</sup> <a name="error_on_nondeterministic_update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicUpdate"></a>

```python
error_on_nondeterministic_update: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#error_on_nondeterministic_update CurrentAccount#error_on_nondeterministic_update}

---

##### `event_table`<sup>Optional</sup> <a name="event_table" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.eventTable"></a>

```python
event_table: str
```

- *Type:* str

Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated.

Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#event_table CurrentAccount#event_table}

---

##### `external_oauth_add_privileged_roles_to_blocked_list`<sup>Optional</sup> <a name="external_oauth_add_privileged_roles_to_blocked_list" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```python
external_oauth_add_privileged_roles_to_blocked_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server.

For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#external_oauth_add_privileged_roles_to_blocked_list CurrentAccount#external_oauth_add_privileged_roles_to_blocked_list}

---

##### `external_volume`<sup>Optional</sup> <a name="external_volume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalVolume"></a>

```python
external_volume: str
```

- *Type:* str

Specifies the external volume for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#external_volume CurrentAccount#external_volume}

---

##### `feature_policy`<sup>Optional</sup> <a name="feature_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.featurePolicy"></a>

```python
feature_policy: str
```

- *Type:* str

Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#feature_policy CurrentAccount#feature_policy}

---

##### `geography_output_format`<sup>Optional</sup> <a name="geography_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geographyOutputFormat"></a>

```python
geography_output_format: str
```

- *Type:* str

Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#geography_output_format CurrentAccount#geography_output_format}

---

##### `geometry_output_format`<sup>Optional</sup> <a name="geometry_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geometryOutputFormat"></a>

```python
geometry_output_format: str
```

- *Type:* str

Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#geometry_output_format CurrentAccount#geometry_output_format}

---

##### `hybrid_table_lock_timeout`<sup>Optional</sup> <a name="hybrid_table_lock_timeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.hybridTableLockTimeout"></a>

```python
hybrid_table_lock_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement.

For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#hybrid_table_lock_timeout CurrentAccount#hybrid_table_lock_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#id CurrentAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initial_replication_size_limit_in_tb`<sup>Optional</sup> <a name="initial_replication_size_limit_in_tb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.initialReplicationSizeLimitInTb"></a>

```python
initial_replication_size_limit_in_tb: str
```

- *Type:* str

Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB).

Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#initial_replication_size_limit_in_tb CurrentAccount#initial_replication_size_limit_in_tb}

---

##### `jdbc_treat_decimal_as_int`<sup>Optional</sup> <a name="jdbc_treat_decimal_as_int" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatDecimalAsInt"></a>

```python
jdbc_treat_decimal_as_int: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#jdbc_treat_decimal_as_int CurrentAccount#jdbc_treat_decimal_as_int}

---

##### `jdbc_treat_timestamp_ntz_as_utc`<sup>Optional</sup> <a name="jdbc_treat_timestamp_ntz_as_utc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatTimestampNtzAsUtc"></a>

```python
jdbc_treat_timestamp_ntz_as_utc: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#jdbc_treat_timestamp_ntz_as_utc CurrentAccount#jdbc_treat_timestamp_ntz_as_utc}

---

##### `jdbc_use_session_timezone`<sup>Optional</sup> <a name="jdbc_use_session_timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcUseSessionTimezone"></a>

```python
jdbc_use_session_timezone: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#jdbc_use_session_timezone CurrentAccount#jdbc_use_session_timezone}

---

##### `json_indent`<sup>Optional</sup> <a name="json_indent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsonIndent"></a>

```python
json_indent: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of blank spaces to indent each new element in JSON output in the session.

Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#json_indent CurrentAccount#json_indent}

---

##### `js_treat_integer_as_bigint`<sup>Optional</sup> <a name="js_treat_integer_as_bigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsTreatIntegerAsBigint"></a>

```python
js_treat_integer_as_bigint: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#js_treat_integer_as_bigint CurrentAccount#js_treat_integer_as_bigint}

---

##### `listing_auto_fulfillment_replication_refresh_schedule`<sup>Optional</sup> <a name="listing_auto_fulfillment_replication_refresh_schedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```python
listing_auto_fulfillment_replication_refresh_schedule: str
```

- *Type:* str

Sets the time interval used to refresh the application package based data products to other regions.

For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#listing_auto_fulfillment_replication_refresh_schedule CurrentAccount#listing_auto_fulfillment_replication_refresh_schedule}

---

##### `lock_timeout`<sup>Optional</sup> <a name="lock_timeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lockTimeout"></a>

```python
lock_timeout: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement.

For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#lock_timeout CurrentAccount#lock_timeout}

---

##### `log_level`<sup>Optional</sup> <a name="log_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.logLevel"></a>

```python
log_level: str
```

- *Type:* str

Specifies the severity level of messages that should be ingested and made available in the active event table.

Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#log_level CurrentAccount#log_level}

---

##### `max_concurrency_level`<sup>Optional</sup> <a name="max_concurrency_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxConcurrencyLevel"></a>

```python
max_concurrency_level: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#max_concurrency_level CurrentAccount#max_concurrency_level}

---

##### `max_data_extension_time_in_days`<sup>Optional</sup> <a name="max_data_extension_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxDataExtensionTimeInDays"></a>

```python
max_data_extension_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale.

By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#max_data_extension_time_in_days CurrentAccount#max_data_extension_time_in_days}

---

##### `metric_level`<sup>Optional</sup> <a name="metric_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.metricLevel"></a>

```python
metric_level: str
```

- *Type:* str

Controls how metrics data is ingested into the event table.

For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#metric_level CurrentAccount#metric_level}

---

##### `min_data_retention_time_in_days`<sup>Optional</sup> <a name="min_data_retention_time_in_days" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.minDataRetentionTimeInDays"></a>

```python
min_data_retention_time_in_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object.

If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#min_data_retention_time_in_days CurrentAccount#min_data_retention_time_in_days}

---

##### `multi_statement_count`<sup>Optional</sup> <a name="multi_statement_count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.multiStatementCount"></a>

```python
multi_statement_count: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#multi_statement_count CurrentAccount#multi_statement_count}

---

##### `network_policy`<sup>Optional</sup> <a name="network_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.networkPolicy"></a>

```python
network_policy: str
```

- *Type:* str

Specifies the network policy to enforce for your account.

Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#network_policy CurrentAccount#network_policy}

---

##### `noorder_sequence_as_default`<sup>Optional</sup> <a name="noorder_sequence_as_default" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.noorderSequenceAsDefault"></a>

```python
noorder_sequence_as_default: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column.

The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#noorder_sequence_as_default CurrentAccount#noorder_sequence_as_default}

---

##### `oauth_add_privileged_roles_to_blocked_list`<sup>Optional</sup> <a name="oauth_add_privileged_roles_to_blocked_list" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.oauthAddPrivilegedRolesToBlockedList"></a>

```python
oauth_add_privileged_roles_to_blocked_list: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server.

For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#oauth_add_privileged_roles_to_blocked_list CurrentAccount#oauth_add_privileged_roles_to_blocked_list}

---

##### `odbc_treat_decimal_as_int`<sup>Optional</sup> <a name="odbc_treat_decimal_as_int" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.odbcTreatDecimalAsInt"></a>

```python
odbc_treat_decimal_as_int: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#odbc_treat_decimal_as_int CurrentAccount#odbc_treat_decimal_as_int}

---

##### `packages_policy`<sup>Optional</sup> <a name="packages_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.packagesPolicy"></a>

```python
packages_policy: str
```

- *Type:* str

Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#packages_policy CurrentAccount#packages_policy}

---

##### `password_policy`<sup>Optional</sup> <a name="password_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.passwordPolicy"></a>

```python
password_policy: str
```

- *Type:* str

Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#password_policy CurrentAccount#password_policy}

---

##### `periodic_data_rekeying`<sup>Optional</sup> <a name="periodic_data_rekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.periodicDataRekeying"></a>

```python
periodic_data_rekeying: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#periodic_data_rekeying CurrentAccount#periodic_data_rekeying}

---

##### `pipe_execution_paused`<sup>Optional</sup> <a name="pipe_execution_paused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pipeExecutionPaused"></a>

```python
pipe_execution_paused: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#pipe_execution_paused CurrentAccount#pipe_execution_paused}

---

##### `prevent_unload_to_inline_url`<sup>Optional</sup> <a name="prevent_unload_to_inline_url" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInlineUrl"></a>

```python
prevent_unload_to_inline_url: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#prevent_unload_to_inline_url CurrentAccount#prevent_unload_to_inline_url}

---

##### `prevent_unload_to_internal_stages`<sup>Optional</sup> <a name="prevent_unload_to_internal_stages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInternalStages"></a>

```python
prevent_unload_to_internal_stages: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#prevent_unload_to_internal_stages CurrentAccount#prevent_unload_to_internal_stages}

---

##### `python_profiler_modules`<sup>Optional</sup> <a name="python_profiler_modules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerModules"></a>

```python
python_profiler_modules: str
```

- *Type:* str

Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#python_profiler_modules CurrentAccount#python_profiler_modules}

---

##### `python_profiler_target_stage`<sup>Optional</sup> <a name="python_profiler_target_stage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerTargetStage"></a>

```python
python_profiler_target_stage: str
```

- *Type:* str

Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#python_profiler_target_stage CurrentAccount#python_profiler_target_stage}

---

##### `query_tag`<sup>Optional</sup> <a name="query_tag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.queryTag"></a>

```python
query_tag: str
```

- *Type:* str

Optional string that can be used to tag queries and other SQL statements executed within a session.

The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#query_tag CurrentAccount#query_tag}

---

##### `quoted_identifiers_ignore_case`<sup>Optional</sup> <a name="quoted_identifiers_ignore_case" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.quotedIdentifiersIgnoreCase"></a>

```python
quoted_identifiers_ignore_case: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters.

By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#quoted_identifiers_ignore_case CurrentAccount#quoted_identifiers_ignore_case}

---

##### `replace_invalid_characters`<sup>Optional</sup> <a name="replace_invalid_characters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.replaceInvalidCharacters"></a>

```python
replace_invalid_characters: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#replace_invalid_characters CurrentAccount#replace_invalid_characters}

---

##### `require_storage_integration_for_stage_creation`<sup>Optional</sup> <a name="require_storage_integration_for_stage_creation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageCreation"></a>

```python
require_storage_integration_for_stage_creation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#require_storage_integration_for_stage_creation CurrentAccount#require_storage_integration_for_stage_creation}

---

##### `require_storage_integration_for_stage_operation`<sup>Optional</sup> <a name="require_storage_integration_for_stage_operation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageOperation"></a>

```python
require_storage_integration_for_stage_operation: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location.

For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#require_storage_integration_for_stage_operation CurrentAccount#require_storage_integration_for_stage_operation}

---

##### `resource_monitor`<sup>Optional</sup> <a name="resource_monitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.resourceMonitor"></a>

```python
resource_monitor: str
```

- *Type:* str

Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#resource_monitor CurrentAccount#resource_monitor}

---

##### `rows_per_resultset`<sup>Optional</sup> <a name="rows_per_resultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.rowsPerResultset"></a>

```python
rows_per_resultset: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the maximum number of rows returned in a result set.

A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#rows_per_resultset CurrentAccount#rows_per_resultset}

---

##### `s3_stage_vpce_dns_name`<sup>Optional</sup> <a name="s3_stage_vpce_dns_name" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.s3StageVpceDnsName"></a>

```python
s3_stage_vpce_dns_name: str
```

- *Type:* str

Specifies the DNS name of an Amazon S3 interface endpoint.

Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#s3_stage_vpce_dns_name CurrentAccount#s3_stage_vpce_dns_name}

---

##### `saml_identity_provider`<sup>Optional</sup> <a name="saml_identity_provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.samlIdentityProvider"></a>

```python
saml_identity_provider: str
```

- *Type:* str

Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#saml_identity_provider CurrentAccount#saml_identity_provider}

---

##### `search_path`<sup>Optional</sup> <a name="search_path" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.searchPath"></a>

```python
search_path: str
```

- *Type:* str

Specifies the path to search to resolve unqualified object names in queries.

For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#search_path CurrentAccount#search_path}

---

##### `serverless_task_max_statement_size`<sup>Optional</sup> <a name="serverless_task_max_statement_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMaxStatementSize"></a>

```python
serverless_task_max_statement_size: str
```

- *Type:* str

Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#serverless_task_max_statement_size CurrentAccount#serverless_task_max_statement_size}

---

##### `serverless_task_min_statement_size`<sup>Optional</sup> <a name="serverless_task_min_statement_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMinStatementSize"></a>

```python
serverless_task_min_statement_size: str
```

- *Type:* str

Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#serverless_task_min_statement_size CurrentAccount#serverless_task_min_statement_size}

---

##### `session_policy`<sup>Optional</sup> <a name="session_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.sessionPolicy"></a>

```python
session_policy: str
```

- *Type:* str

Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#session_policy CurrentAccount#session_policy}

---

##### `simulated_data_sharing_consumer`<sup>Optional</sup> <a name="simulated_data_sharing_consumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.simulatedDataSharingConsumer"></a>

```python
simulated_data_sharing_consumer: str
```

- *Type:* str

Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views.

When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#simulated_data_sharing_consumer CurrentAccount#simulated_data_sharing_consumer}

---

##### `sso_login_page`<sup>Optional</sup> <a name="sso_login_page" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.ssoLoginPage"></a>

```python
sso_login_page: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users.

For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#sso_login_page CurrentAccount#sso_login_page}

---

##### `statement_queued_timeout_in_seconds`<sup>Optional</sup> <a name="statement_queued_timeout_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementQueuedTimeoutInSeconds"></a>

```python
statement_queued_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#statement_queued_timeout_in_seconds CurrentAccount#statement_queued_timeout_in_seconds}

---

##### `statement_timeout_in_seconds`<sup>Optional</sup> <a name="statement_timeout_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementTimeoutInSeconds"></a>

```python
statement_timeout_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#statement_timeout_in_seconds CurrentAccount#statement_timeout_in_seconds}

---

##### `storage_serialization_policy`<sup>Optional</sup> <a name="storage_serialization_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.storageSerializationPolicy"></a>

```python
storage_serialization_policy: str
```

- *Type:* str

Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#storage_serialization_policy CurrentAccount#storage_serialization_policy}

---

##### `strict_json_output`<sup>Optional</sup> <a name="strict_json_output" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.strictJsonOutput"></a>

```python
strict_json_output: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#strict_json_output CurrentAccount#strict_json_output}

---

##### `suspend_task_after_num_failures`<sup>Optional</sup> <a name="suspend_task_after_num_failures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.suspendTaskAfterNumFailures"></a>

```python
suspend_task_after_num_failures: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#suspend_task_after_num_failures CurrentAccount#suspend_task_after_num_failures}

---

##### `task_auto_retry_attempts`<sup>Optional</sup> <a name="task_auto_retry_attempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.taskAutoRetryAttempts"></a>

```python
task_auto_retry_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the number of automatic task graph retry attempts.

If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#task_auto_retry_attempts CurrentAccount#task_auto_retry_attempts}

---

##### `time_input_format`<sup>Optional</sup> <a name="time_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeInputFormat"></a>

```python
time_input_format: str
```

- *Type:* str

Specifies the input format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#time_input_format CurrentAccount#time_input_format}

---

##### `time_output_format`<sup>Optional</sup> <a name="time_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeOutputFormat"></a>

```python
time_output_format: str
```

- *Type:* str

Specifies the display format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#time_output_format CurrentAccount#time_output_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeouts"></a>

```python
timeouts: CurrentAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timeouts CurrentAccount#timeouts}

---

##### `timestamp_day_is_always24_h`<sup>Optional</sup> <a name="timestamp_day_is_always24_h" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampDayIsAlways24H"></a>

```python
timestamp_day_is_always24_h: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_day_is_always_24h CurrentAccount#timestamp_day_is_always_24h}

---

##### `timestamp_input_format`<sup>Optional</sup> <a name="timestamp_input_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampInputFormat"></a>

```python
timestamp_input_format: str
```

- *Type:* str

Specifies the input format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_input_format CurrentAccount#timestamp_input_format}

---

##### `timestamp_ltz_output_format`<sup>Optional</sup> <a name="timestamp_ltz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampLtzOutputFormat"></a>

```python
timestamp_ltz_output_format: str
```

- *Type:* str

Specifies the display format for the TIMESTAMP_LTZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_ltz_output_format CurrentAccount#timestamp_ltz_output_format}

---

##### `timestamp_ntz_output_format`<sup>Optional</sup> <a name="timestamp_ntz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampNtzOutputFormat"></a>

```python
timestamp_ntz_output_format: str
```

- *Type:* str

Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_ntz_output_format CurrentAccount#timestamp_ntz_output_format}

---

##### `timestamp_output_format`<sup>Optional</sup> <a name="timestamp_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampOutputFormat"></a>

```python
timestamp_output_format: str
```

- *Type:* str

Specifies the display format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_output_format CurrentAccount#timestamp_output_format}

---

##### `timestamp_type_mapping`<sup>Optional</sup> <a name="timestamp_type_mapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTypeMapping"></a>

```python
timestamp_type_mapping: str
```

- *Type:* str

Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to.

Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_type_mapping CurrentAccount#timestamp_type_mapping}

---

##### `timestamp_tz_output_format`<sup>Optional</sup> <a name="timestamp_tz_output_format" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTzOutputFormat"></a>

```python
timestamp_tz_output_format: str
```

- *Type:* str

Specifies the display format for the TIMESTAMP_TZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timestamp_tz_output_format CurrentAccount#timestamp_tz_output_format}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timezone"></a>

```python
timezone: str
```

- *Type:* str

Specifies the time zone for the session.

You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#timezone CurrentAccount#timezone}

---

##### `trace_level`<sup>Optional</sup> <a name="trace_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.traceLevel"></a>

```python
trace_level: str
```

- *Type:* str

Controls how trace events are ingested into the event table.

For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#trace_level CurrentAccount#trace_level}

---

##### `transaction_abort_on_error`<sup>Optional</sup> <a name="transaction_abort_on_error" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionAbortOnError"></a>

```python
transaction_abort_on_error: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error.

For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#transaction_abort_on_error CurrentAccount#transaction_abort_on_error}

---

##### `transaction_default_isolation_level`<sup>Optional</sup> <a name="transaction_default_isolation_level" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionDefaultIsolationLevel"></a>

```python
transaction_default_isolation_level: str
```

- *Type:* str

Specifies the isolation level for transactions in the user session.

Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#transaction_default_isolation_level CurrentAccount#transaction_default_isolation_level}

---

##### `two_digit_century_start`<sup>Optional</sup> <a name="two_digit_century_start" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.twoDigitCenturyStart"></a>

```python
two_digit_century_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#two_digit_century_start CurrentAccount#two_digit_century_start}

---

##### `unsupported_ddl_action`<sup>Optional</sup> <a name="unsupported_ddl_action" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.unsupportedDdlAction"></a>

```python
unsupported_ddl_action: str
```

- *Type:* str

Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#unsupported_ddl_action CurrentAccount#unsupported_ddl_action}

---

##### `use_cached_result`<sup>Optional</sup> <a name="use_cached_result" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.useCachedResult"></a>

```python
use_cached_result: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Specifies whether to reuse persisted query results, if available, when a matching query is submitted.

For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#use_cached_result CurrentAccount#use_cached_result}

---

##### `user_task_managed_initial_warehouse_size`<sup>Optional</sup> <a name="user_task_managed_initial_warehouse_size" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskManagedInitialWarehouseSize"></a>

```python
user_task_managed_initial_warehouse_size: str
```

- *Type:* str

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#user_task_managed_initial_warehouse_size CurrentAccount#user_task_managed_initial_warehouse_size}

---

##### `user_task_minimum_trigger_interval_in_seconds`<sup>Optional</sup> <a name="user_task_minimum_trigger_interval_in_seconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```python
user_task_minimum_trigger_interval_in_seconds: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#user_task_minimum_trigger_interval_in_seconds CurrentAccount#user_task_minimum_trigger_interval_in_seconds}

---

##### `user_task_timeout_ms`<sup>Optional</sup> <a name="user_task_timeout_ms" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskTimeoutMs"></a>

```python
user_task_timeout_ms: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the time limit on a single run of the task before it times out (in milliseconds).

For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#user_task_timeout_ms CurrentAccount#user_task_timeout_ms}

---

##### `week_of_year_policy`<sup>Optional</sup> <a name="week_of_year_policy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekOfYearPolicy"></a>

```python
week_of_year_policy: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies how the weeks in a given year are computed.

`0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#week_of_year_policy CurrentAccount#week_of_year_policy}

---

##### `week_start`<sup>Optional</sup> <a name="week_start" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekStart"></a>

```python
week_start: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Specifies the first day of the week (used by week-related date functions).

`0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#week_start CurrentAccount#week_start}

---

### CurrentAccountTimeouts <a name="CurrentAccountTimeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import current_account

currentAccount.CurrentAccountTimeouts(
  create: str = None,
  delete: str = None,
  read: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#create CurrentAccount#create}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#delete CurrentAccount#delete}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.read">read</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#read CurrentAccount#read}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#update CurrentAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#create CurrentAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#delete CurrentAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.read"></a>

```python
read: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#read CurrentAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.2.0/docs/resources/current_account#update CurrentAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CurrentAccountTimeoutsOutputReference <a name="CurrentAccountTimeoutsOutputReference" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_snowflake import current_account

currentAccount.CurrentAccountTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetRead">reset_read</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_read` <a name="reset_read" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetRead"></a>

```python
def reset_read() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.readInput">read_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.read">read</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `read_input`<sup>Optional</sup> <a name="read_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.readInput"></a>

```python
read_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.read"></a>

```python
read: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, CurrentAccountTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>]

---



