# `currentAccount` Submodule <a name="`currentAccount` Submodule" id="@cdktf/provider-snowflake.currentAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurrentAccount <a name="CurrentAccount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account snowflake_current_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_account.CurrentAccount;

CurrentAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .abortDetachedQuery(java.lang.Boolean|IResolvable)
//  .activePythonProfiler(java.lang.String)
//  .allowClientMfaCaching(java.lang.Boolean|IResolvable)
//  .allowIdToken(java.lang.Boolean|IResolvable)
//  .authenticationPolicy(java.lang.String)
//  .autocommit(java.lang.Boolean|IResolvable)
//  .baseLocationPrefix(java.lang.String)
//  .binaryInputFormat(java.lang.String)
//  .binaryOutputFormat(java.lang.String)
//  .catalog(java.lang.String)
//  .catalogSync(java.lang.String)
//  .clientEnableLogInfoStatementParameters(java.lang.Boolean|IResolvable)
//  .clientEncryptionKeySize(java.lang.Number)
//  .clientMemoryLimit(java.lang.Number)
//  .clientMetadataRequestUseConnectionCtx(java.lang.Boolean|IResolvable)
//  .clientMetadataUseSessionDatabase(java.lang.Boolean|IResolvable)
//  .clientPrefetchThreads(java.lang.Number)
//  .clientResultChunkSize(java.lang.Number)
//  .clientResultColumnCaseInsensitive(java.lang.Boolean|IResolvable)
//  .clientSessionKeepAlive(java.lang.Boolean|IResolvable)
//  .clientSessionKeepAliveHeartbeatFrequency(java.lang.Number)
//  .clientTimestampTypeMapping(java.lang.String)
//  .cortexEnabledCrossRegion(java.lang.String)
//  .cortexModelsAllowlist(java.lang.String)
//  .csvTimestampFormat(java.lang.String)
//  .dataRetentionTimeInDays(java.lang.Number)
//  .dateInputFormat(java.lang.String)
//  .dateOutputFormat(java.lang.String)
//  .defaultDdlCollation(java.lang.String)
//  .defaultNotebookComputePoolCpu(java.lang.String)
//  .defaultNotebookComputePoolGpu(java.lang.String)
//  .defaultNullOrdering(java.lang.String)
//  .defaultStreamlitNotebookWarehouse(java.lang.String)
//  .disableUiDownloadButton(java.lang.Boolean|IResolvable)
//  .disableUserPrivilegeGrants(java.lang.Boolean|IResolvable)
//  .enableAutomaticSensitiveDataClassificationLog(java.lang.Boolean|IResolvable)
//  .enableEgressCostOptimizer(java.lang.Boolean|IResolvable)
//  .enableIdentifierFirstLogin(java.lang.Boolean|IResolvable)
//  .enableInternalStagesPrivatelink(java.lang.Boolean|IResolvable)
//  .enableTriSecretAndRekeyOptOutForImageRepository(java.lang.Boolean|IResolvable)
//  .enableTriSecretAndRekeyOptOutForSpcsBlockStorage(java.lang.Boolean|IResolvable)
//  .enableUnhandledExceptionsReporting(java.lang.Boolean|IResolvable)
//  .enableUnloadPhysicalTypeOptimization(java.lang.Boolean|IResolvable)
//  .enableUnredactedQuerySyntaxError(java.lang.Boolean|IResolvable)
//  .enableUnredactedSecureObjectError(java.lang.Boolean|IResolvable)
//  .enforceNetworkRulesForInternalStages(java.lang.Boolean|IResolvable)
//  .errorOnNondeterministicMerge(java.lang.Boolean|IResolvable)
//  .errorOnNondeterministicUpdate(java.lang.Boolean|IResolvable)
//  .eventTable(java.lang.String)
//  .externalOauthAddPrivilegedRolesToBlockedList(java.lang.Boolean|IResolvable)
//  .externalVolume(java.lang.String)
//  .featurePolicy(java.lang.String)
//  .geographyOutputFormat(java.lang.String)
//  .geometryOutputFormat(java.lang.String)
//  .hybridTableLockTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .initialReplicationSizeLimitInTb(java.lang.String)
//  .jdbcTreatDecimalAsInt(java.lang.Boolean|IResolvable)
//  .jdbcTreatTimestampNtzAsUtc(java.lang.Boolean|IResolvable)
//  .jdbcUseSessionTimezone(java.lang.Boolean|IResolvable)
//  .jsonIndent(java.lang.Number)
//  .jsTreatIntegerAsBigint(java.lang.Boolean|IResolvable)
//  .listingAutoFulfillmentReplicationRefreshSchedule(java.lang.String)
//  .lockTimeout(java.lang.Number)
//  .logLevel(java.lang.String)
//  .maxConcurrencyLevel(java.lang.Number)
//  .maxDataExtensionTimeInDays(java.lang.Number)
//  .metricLevel(java.lang.String)
//  .minDataRetentionTimeInDays(java.lang.Number)
//  .multiStatementCount(java.lang.Number)
//  .networkPolicy(java.lang.String)
//  .noorderSequenceAsDefault(java.lang.Boolean|IResolvable)
//  .oauthAddPrivilegedRolesToBlockedList(java.lang.Boolean|IResolvable)
//  .odbcTreatDecimalAsInt(java.lang.Boolean|IResolvable)
//  .packagesPolicy(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .periodicDataRekeying(java.lang.Boolean|IResolvable)
//  .pipeExecutionPaused(java.lang.Boolean|IResolvable)
//  .preventUnloadToInlineUrl(java.lang.Boolean|IResolvable)
//  .preventUnloadToInternalStages(java.lang.Boolean|IResolvable)
//  .pythonProfilerModules(java.lang.String)
//  .pythonProfilerTargetStage(java.lang.String)
//  .queryTag(java.lang.String)
//  .quotedIdentifiersIgnoreCase(java.lang.Boolean|IResolvable)
//  .replaceInvalidCharacters(java.lang.Boolean|IResolvable)
//  .requireStorageIntegrationForStageCreation(java.lang.Boolean|IResolvable)
//  .requireStorageIntegrationForStageOperation(java.lang.Boolean|IResolvable)
//  .resourceMonitor(java.lang.String)
//  .rowsPerResultset(java.lang.Number)
//  .s3StageVpceDnsName(java.lang.String)
//  .samlIdentityProvider(java.lang.String)
//  .searchPath(java.lang.String)
//  .serverlessTaskMaxStatementSize(java.lang.String)
//  .serverlessTaskMinStatementSize(java.lang.String)
//  .sessionPolicy(java.lang.String)
//  .simulatedDataSharingConsumer(java.lang.String)
//  .ssoLoginPage(java.lang.Boolean|IResolvable)
//  .statementQueuedTimeoutInSeconds(java.lang.Number)
//  .statementTimeoutInSeconds(java.lang.Number)
//  .storageSerializationPolicy(java.lang.String)
//  .strictJsonOutput(java.lang.Boolean|IResolvable)
//  .suspendTaskAfterNumFailures(java.lang.Number)
//  .taskAutoRetryAttempts(java.lang.Number)
//  .timeInputFormat(java.lang.String)
//  .timeOutputFormat(java.lang.String)
//  .timeouts(CurrentAccountTimeouts)
//  .timestampDayIsAlways24H(java.lang.Boolean|IResolvable)
//  .timestampInputFormat(java.lang.String)
//  .timestampLtzOutputFormat(java.lang.String)
//  .timestampNtzOutputFormat(java.lang.String)
//  .timestampOutputFormat(java.lang.String)
//  .timestampTypeMapping(java.lang.String)
//  .timestampTzOutputFormat(java.lang.String)
//  .timezone(java.lang.String)
//  .traceLevel(java.lang.String)
//  .transactionAbortOnError(java.lang.Boolean|IResolvable)
//  .transactionDefaultIsolationLevel(java.lang.String)
//  .twoDigitCenturyStart(java.lang.Number)
//  .unsupportedDdlAction(java.lang.String)
//  .useCachedResult(java.lang.Boolean|IResolvable)
//  .userTaskManagedInitialWarehouseSize(java.lang.String)
//  .userTaskMinimumTriggerIntervalInSeconds(java.lang.Number)
//  .userTaskTimeoutMs(java.lang.Number)
//  .weekOfYearPolicy(java.lang.Number)
//  .weekStart(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.abortDetachedQuery">abortDetachedQuery</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.activePythonProfiler">activePythonProfiler</a></code> | <code>java.lang.String</code> | Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` \| `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.allowClientMfaCaching">allowClientMfaCaching</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.allowIdToken">allowIdToken</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account. For more information about this resource, see [docs](./authentication_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.autocommit">autocommit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether autocommit is enabled for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.baseLocationPrefix">baseLocationPrefix</a></code> | <code>java.lang.String</code> | Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.binaryInputFormat">binaryInputFormat</a></code> | <code>java.lang.String</code> | The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.binaryOutputFormat">binaryOutputFormat</a></code> | <code>java.lang.String</code> | The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the catalog for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.catalogSync">catalogSync</a></code> | <code>java.lang.String</code> | Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientEnableLogInfoStatementParameters">clientEnableLogInfoStatementParameters</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientEncryptionKeySize">clientEncryptionKeySize</a></code> | <code>java.lang.Number</code> | Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMemoryLimit">clientMemoryLimit</a></code> | <code>java.lang.Number</code> | Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMetadataRequestUseConnectionCtx">clientMetadataRequestUseConnectionCtx</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMetadataUseSessionDatabase">clientMetadataUseSessionDatabase</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientPrefetchThreads">clientPrefetchThreads</a></code> | <code>java.lang.Number</code> | Parameter that specifies the number of threads used by the client to pre-fetch large result sets. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientResultChunkSize">clientResultChunkSize</a></code> | <code>java.lang.Number</code> | Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientResultColumnCaseInsensitive">clientResultColumnCaseInsensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientSessionKeepAlive">clientSessionKeepAlive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientSessionKeepAliveHeartbeatFrequency">clientSessionKeepAliveHeartbeatFrequency</a></code> | <code>java.lang.Number</code> | Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientTimestampTypeMapping">clientTimestampTypeMapping</a></code> | <code>java.lang.String</code> | Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` \| `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.cortexEnabledCrossRegion">cortexEnabledCrossRegion</a></code> | <code>java.lang.String</code> | Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.cortexModelsAllowlist">cortexModelsAllowlist</a></code> | <code>java.lang.String</code> | Specifies the models that users in the account can access. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.csvTimestampFormat">csvTimestampFormat</a></code> | <code>java.lang.String</code> | Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dateInputFormat">dateInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dateOutputFormat">dateOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultDdlCollation">defaultDdlCollation</a></code> | <code>java.lang.String</code> | Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNotebookComputePoolCpu">defaultNotebookComputePoolCpu</a></code> | <code>java.lang.String</code> | Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNotebookComputePoolGpu">defaultNotebookComputePoolGpu</a></code> | <code>java.lang.String</code> | Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNullOrdering">defaultNullOrdering</a></code> | <code>java.lang.String</code> | Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` \| `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultStreamlitNotebookWarehouse">defaultStreamlitNotebookWarehouse</a></code> | <code>java.lang.String</code> | Specifies the name of the default warehouse to use when creating a notebook. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.disableUiDownloadButton">disableUiDownloadButton</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.disableUserPrivilegeGrants">disableUserPrivilegeGrants</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether users in an account can grant privileges directly to other users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableAutomaticSensitiveDataClassificationLog">enableAutomaticSensitiveDataClassificationLog</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableEgressCostOptimizer">enableEgressCostOptimizer</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableIdentifierFirstLogin">enableIdentifierFirstLogin</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determines the login flow for users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableInternalStagesPrivatelink">enableInternalStagesPrivatelink</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForImageRepository">enableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnhandledExceptionsReporting">enableUnhandledExceptionsReporting</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnloadPhysicalTypeOptimization">enableUnloadPhysicalTypeOptimization</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnredactedQuerySyntaxError">enableUnredactedQuerySyntaxError</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnredactedSecureObjectError">enableUnredactedSecureObjectError</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether error messages related to secure objects are redacted in metadata. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enforceNetworkRulesForInternalStages">enforceNetworkRulesForInternalStages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.errorOnNondeterministicMerge">errorOnNondeterministicMerge</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.errorOnNondeterministicUpdate">errorOnNondeterministicUpdate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.eventTable">eventTable</a></code> | <code>java.lang.String</code> | Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the external volume for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.featurePolicy">featurePolicy</a></code> | <code>java.lang.String</code> | Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.geographyOutputFormat">geographyOutputFormat</a></code> | <code>java.lang.String</code> | Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.geometryOutputFormat">geometryOutputFormat</a></code> | <code>java.lang.String</code> | Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.hybridTableLockTimeout">hybridTableLockTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#id CurrentAccount#id}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.initialReplicationSizeLimitInTb">initialReplicationSizeLimitInTb</a></code> | <code>java.lang.String</code> | Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcTreatDecimalAsInt">jdbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcTreatTimestampNtzAsUtc">jdbcTreatTimestampNtzAsUtc</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcUseSessionTimezone">jdbcUseSessionTimezone</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jsonIndent">jsonIndent</a></code> | <code>java.lang.Number</code> | Specifies the number of blank spaces to indent each new element in JSON output in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jsTreatIntegerAsBigint">jsTreatIntegerAsBigint</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.listingAutoFulfillmentReplicationRefreshSchedule">listingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>java.lang.String</code> | Sets the time interval used to refresh the application package based data products to other regions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.lockTimeout">lockTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>java.lang.Number</code> | Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | Controls how metrics data is ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.minDataRetentionTimeInDays">minDataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.multiStatementCount">multiStatementCount</a></code> | <code>java.lang.Number</code> | Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | Specifies the network policy to enforce for your account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.noorderSequenceAsDefault">noorderSequenceAsDefault</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.oauthAddPrivilegedRolesToBlockedList">oauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.odbcTreatDecimalAsInt">odbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.packagesPolicy">packagesPolicy</a></code> | <code>java.lang.String</code> | Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.periodicDataRekeying">periodicDataRekeying</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pipeExecutionPaused">pipeExecutionPaused</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.preventUnloadToInlineUrl">preventUnloadToInlineUrl</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.preventUnloadToInternalStages">preventUnloadToInternalStages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pythonProfilerModules">pythonProfilerModules</a></code> | <code>java.lang.String</code> | Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pythonProfilerTargetStage">pythonProfilerTargetStage</a></code> | <code>java.lang.String</code> | Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.queryTag">queryTag</a></code> | <code>java.lang.String</code> | Optional string that can be used to tag queries and other SQL statements executed within a session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.requireStorageIntegrationForStageCreation">requireStorageIntegrationForStageCreation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.requireStorageIntegrationForStageOperation">requireStorageIntegrationForStageOperation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.rowsPerResultset">rowsPerResultset</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of rows returned in a result set. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.s3StageVpceDnsName">s3StageVpceDnsName</a></code> | <code>java.lang.String</code> | Specifies the DNS name of an Amazon S3 interface endpoint. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.samlIdentityProvider">samlIdentityProvider</a></code> | <code>java.lang.String</code> | Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.searchPath">searchPath</a></code> | <code>java.lang.String</code> | Specifies the path to search to resolve unqualified object names in queries. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.serverlessTaskMaxStatementSize">serverlessTaskMaxStatementSize</a></code> | <code>java.lang.String</code> | Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.serverlessTaskMinStatementSize">serverlessTaskMinStatementSize</a></code> | <code>java.lang.String</code> | Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.simulatedDataSharingConsumer">simulatedDataSharingConsumer</a></code> | <code>java.lang.String</code> | Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.ssoLoginPage">ssoLoginPage</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` \| `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.strictJsonOutput">strictJsonOutput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>java.lang.Number</code> | Specifies the number of automatic task graph retry attempts. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeInputFormat">timeInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeOutputFormat">timeOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampDayIsAlways24H">timestampDayIsAlways24H</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampInputFormat">timestampInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampLtzOutputFormat">timestampLtzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_LTZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampNtzOutputFormat">timestampNtzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampOutputFormat">timestampOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampTypeMapping">timestampTypeMapping</a></code> | <code>java.lang.String</code> | Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampTzOutputFormat">timestampTzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_TZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | Specifies the time zone for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.transactionAbortOnError">transactionAbortOnError</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.transactionDefaultIsolationLevel">transactionDefaultIsolationLevel</a></code> | <code>java.lang.String</code> | Specifies the isolation level for transactions in the user session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.twoDigitCenturyStart">twoDigitCenturyStart</a></code> | <code>java.lang.Number</code> | Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.unsupportedDdlAction">unsupportedDdlAction</a></code> | <code>java.lang.String</code> | Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.useCachedResult">useCachedResult</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to reuse persisted query results, if available, when a matching query is submitted. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.weekOfYearPolicy">weekOfYearPolicy</a></code> | <code>java.lang.Number</code> | Specifies how the weeks in a given year are computed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.weekStart">weekStart</a></code> | <code>java.lang.Number</code> | Specifies the first day of the week (used by week-related date functions). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `abortDetachedQuery`<sup>Optional</sup> <a name="abortDetachedQuery" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.abortDetachedQuery"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#abort_detached_query CurrentAccount#abort_detached_query}

---

##### `activePythonProfiler`<sup>Optional</sup> <a name="activePythonProfiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.activePythonProfiler"></a>

- *Type:* java.lang.String

Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#active_python_profiler CurrentAccount#active_python_profiler}

---

##### `allowClientMfaCaching`<sup>Optional</sup> <a name="allowClientMfaCaching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.allowClientMfaCaching"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#allow_client_mfa_caching CurrentAccount#allow_client_mfa_caching}

---

##### `allowIdToken`<sup>Optional</sup> <a name="allowIdToken" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.allowIdToken"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#allow_id_token CurrentAccount#allow_id_token}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.authenticationPolicy"></a>

- *Type:* java.lang.String

Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account. For more information about this resource, see [docs](./authentication_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#authentication_policy CurrentAccount#authentication_policy}

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.autocommit"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether autocommit is enabled for the session.

Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#autocommit CurrentAccount#autocommit}

---

##### `baseLocationPrefix`<sup>Optional</sup> <a name="baseLocationPrefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.baseLocationPrefix"></a>

- *Type:* java.lang.String

Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables.

For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#base_location_prefix CurrentAccount#base_location_prefix}

---

##### `binaryInputFormat`<sup>Optional</sup> <a name="binaryInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.binaryInputFormat"></a>

- *Type:* java.lang.String

The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#binary_input_format CurrentAccount#binary_input_format}

---

##### `binaryOutputFormat`<sup>Optional</sup> <a name="binaryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.binaryOutputFormat"></a>

- *Type:* java.lang.String

The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#binary_output_format CurrentAccount#binary_output_format}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Specifies the catalog for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#catalog CurrentAccount#catalog}

---

##### `catalogSync`<sup>Optional</sup> <a name="catalogSync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.catalogSync"></a>

- *Type:* java.lang.String

Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#catalog_sync CurrentAccount#catalog_sync}

---

##### `clientEnableLogInfoStatementParameters`<sup>Optional</sup> <a name="clientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientEnableLogInfoStatementParameters"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_enable_log_info_statement_parameters CurrentAccount#client_enable_log_info_statement_parameters}

---

##### `clientEncryptionKeySize`<sup>Optional</sup> <a name="clientEncryptionKeySize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientEncryptionKeySize"></a>

- *Type:* java.lang.Number

Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type.

For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_encryption_key_size CurrentAccount#client_encryption_key_size}

---

##### `clientMemoryLimit`<sup>Optional</sup> <a name="clientMemoryLimit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMemoryLimit"></a>

- *Type:* java.lang.Number

Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB).

For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_memory_limit CurrentAccount#client_memory_limit}

---

##### `clientMetadataRequestUseConnectionCtx`<sup>Optional</sup> <a name="clientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMetadataRequestUseConnectionCtx"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema.

The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_metadata_request_use_connection_ctx CurrentAccount#client_metadata_request_use_connection_ctx}

---

##### `clientMetadataUseSessionDatabase`<sup>Optional</sup> <a name="clientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientMetadataUseSessionDatabase"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database.

The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_metadata_use_session_database CurrentAccount#client_metadata_use_session_database}

---

##### `clientPrefetchThreads`<sup>Optional</sup> <a name="clientPrefetchThreads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientPrefetchThreads"></a>

- *Type:* java.lang.Number

Parameter that specifies the number of threads used by the client to pre-fetch large result sets.

The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_prefetch_threads CurrentAccount#client_prefetch_threads}

---

##### `clientResultChunkSize`<sup>Optional</sup> <a name="clientResultChunkSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientResultChunkSize"></a>

- *Type:* java.lang.Number

Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB).

The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_result_chunk_size CurrentAccount#client_result_chunk_size}

---

##### `clientResultColumnCaseInsensitive`<sup>Optional</sup> <a name="clientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientResultColumnCaseInsensitive"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_result_column_case_insensitive CurrentAccount#client_result_column_case_insensitive}

---

##### `clientSessionKeepAlive`<sup>Optional</sup> <a name="clientSessionKeepAlive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientSessionKeepAlive"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Parameter that indicates whether to force a user to log in again after a period of inactivity in the session.

For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_session_keep_alive CurrentAccount#client_session_keep_alive}

---

##### `clientSessionKeepAliveHeartbeatFrequency`<sup>Optional</sup> <a name="clientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientSessionKeepAliveHeartbeatFrequency"></a>

- *Type:* java.lang.Number

Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_session_keep_alive_heartbeat_frequency CurrentAccount#client_session_keep_alive_heartbeat_frequency}

---

##### `clientTimestampTypeMapping`<sup>Optional</sup> <a name="clientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.clientTimestampTypeMapping"></a>

- *Type:* java.lang.String

Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_timestamp_type_mapping CurrentAccount#client_timestamp_type_mapping}

---

##### `cortexEnabledCrossRegion`<sup>Optional</sup> <a name="cortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.cortexEnabledCrossRegion"></a>

- *Type:* java.lang.String

Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed.

Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#cortex_enabled_cross_region CurrentAccount#cortex_enabled_cross_region}

---

##### `cortexModelsAllowlist`<sup>Optional</sup> <a name="cortexModelsAllowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.cortexModelsAllowlist"></a>

- *Type:* java.lang.String

Specifies the models that users in the account can access.

Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#cortex_models_allowlist CurrentAccount#cortex_models_allowlist}

---

##### `csvTimestampFormat`<sup>Optional</sup> <a name="csvTimestampFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.csvTimestampFormat"></a>

- *Type:* java.lang.String

Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight.

If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#csv_timestamp_format CurrentAccount#csv_timestamp_format}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* java.lang.Number

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#data_retention_time_in_days CurrentAccount#data_retention_time_in_days}

---

##### `dateInputFormat`<sup>Optional</sup> <a name="dateInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dateInputFormat"></a>

- *Type:* java.lang.String

Specifies the input format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#date_input_format CurrentAccount#date_input_format}

---

##### `dateOutputFormat`<sup>Optional</sup> <a name="dateOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.dateOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#date_output_format CurrentAccount#date_output_format}

---

##### `defaultDdlCollation`<sup>Optional</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultDdlCollation"></a>

- *Type:* java.lang.String

Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_ddl_collation CurrentAccount#default_ddl_collation}

---

##### `defaultNotebookComputePoolCpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNotebookComputePoolCpu"></a>

- *Type:* java.lang.String

Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_notebook_compute_pool_cpu CurrentAccount#default_notebook_compute_pool_cpu}

---

##### `defaultNotebookComputePoolGpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNotebookComputePoolGpu"></a>

- *Type:* java.lang.String

Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_notebook_compute_pool_gpu CurrentAccount#default_notebook_compute_pool_gpu}

---

##### `defaultNullOrdering`<sup>Optional</sup> <a name="defaultNullOrdering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultNullOrdering"></a>

- *Type:* java.lang.String

Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_null_ordering CurrentAccount#default_null_ordering}

---

##### `defaultStreamlitNotebookWarehouse`<sup>Optional</sup> <a name="defaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.defaultStreamlitNotebookWarehouse"></a>

- *Type:* java.lang.String

Specifies the name of the default warehouse to use when creating a notebook.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_streamlit_notebook_warehouse CurrentAccount#default_streamlit_notebook_warehouse}

---

##### `disableUiDownloadButton`<sup>Optional</sup> <a name="disableUiDownloadButton" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.disableUiDownloadButton"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet.

If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#disable_ui_download_button CurrentAccount#disable_ui_download_button}

---

##### `disableUserPrivilegeGrants`<sup>Optional</sup> <a name="disableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.disableUserPrivilegeGrants"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether users in an account can grant privileges directly to other users.

Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#disable_user_privilege_grants CurrentAccount#disable_user_privilege_grants}

---

##### `enableAutomaticSensitiveDataClassificationLog`<sup>Optional</sup> <a name="enableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableAutomaticSensitiveDataClassificationLog"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_automatic_sensitive_data_classification_log CurrentAccount#enable_automatic_sensitive_data_classification_log}

---

##### `enableEgressCostOptimizer`<sup>Optional</sup> <a name="enableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableEgressCostOptimizer"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_egress_cost_optimizer CurrentAccount#enable_egress_cost_optimizer}

---

##### `enableIdentifierFirstLogin`<sup>Optional</sup> <a name="enableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableIdentifierFirstLogin"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determines the login flow for users.

When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_identifier_first_login CurrentAccount#enable_identifier_first_login}

---

##### `enableInternalStagesPrivatelink`<sup>Optional</sup> <a name="enableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableInternalStagesPrivatelink"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_internal_stages_privatelink CurrentAccount#enable_internal_stages_privatelink}

---

##### `enableTriSecretAndRekeyOptOutForImageRepository`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForImageRepository"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}

---

##### `enableUnhandledExceptionsReporting`<sup>Optional</sup> <a name="enableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnhandledExceptionsReporting"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code.

For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_unhandled_exceptions_reporting CurrentAccount#enable_unhandled_exceptions_reporting}

---

##### `enableUnloadPhysicalTypeOptimization`<sup>Optional</sup> <a name="enableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnloadPhysicalTypeOptimization"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_unload_physical_type_optimization CurrentAccount#enable_unload_physical_type_optimization}

---

##### `enableUnredactedQuerySyntaxError`<sup>Optional</sup> <a name="enableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnredactedQuerySyntaxError"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error.

If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_unredacted_query_syntax_error CurrentAccount#enable_unredacted_query_syntax_error}

---

##### `enableUnredactedSecureObjectError`<sup>Optional</sup> <a name="enableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enableUnredactedSecureObjectError"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether error messages related to secure objects are redacted in metadata.

For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_unredacted_secure_object_error CurrentAccount#enable_unredacted_secure_object_error}

---

##### `enforceNetworkRulesForInternalStages`<sup>Optional</sup> <a name="enforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.enforceNetworkRulesForInternalStages"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether a network policy that uses network rules can restrict access to AWS internal stages.

This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enforce_network_rules_for_internal_stages CurrentAccount#enforce_network_rules_for_internal_stages}

---

##### `errorOnNondeterministicMerge`<sup>Optional</sup> <a name="errorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.errorOnNondeterministicMerge"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#error_on_nondeterministic_merge CurrentAccount#error_on_nondeterministic_merge}

---

##### `errorOnNondeterministicUpdate`<sup>Optional</sup> <a name="errorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.errorOnNondeterministicUpdate"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#error_on_nondeterministic_update CurrentAccount#error_on_nondeterministic_update}

---

##### `eventTable`<sup>Optional</sup> <a name="eventTable" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.eventTable"></a>

- *Type:* java.lang.String

Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated.

Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#event_table CurrentAccount#event_table}

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.externalOauthAddPrivilegedRolesToBlockedList"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server.

For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#external_oauth_add_privileged_roles_to_blocked_list CurrentAccount#external_oauth_add_privileged_roles_to_blocked_list}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.externalVolume"></a>

- *Type:* java.lang.String

Specifies the external volume for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#external_volume CurrentAccount#external_volume}

---

##### `featurePolicy`<sup>Optional</sup> <a name="featurePolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.featurePolicy"></a>

- *Type:* java.lang.String

Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#feature_policy CurrentAccount#feature_policy}

---

##### `geographyOutputFormat`<sup>Optional</sup> <a name="geographyOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.geographyOutputFormat"></a>

- *Type:* java.lang.String

Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#geography_output_format CurrentAccount#geography_output_format}

---

##### `geometryOutputFormat`<sup>Optional</sup> <a name="geometryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.geometryOutputFormat"></a>

- *Type:* java.lang.String

Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#geometry_output_format CurrentAccount#geometry_output_format}

---

##### `hybridTableLockTimeout`<sup>Optional</sup> <a name="hybridTableLockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.hybridTableLockTimeout"></a>

- *Type:* java.lang.Number

Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement.

For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#hybrid_table_lock_timeout CurrentAccount#hybrid_table_lock_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#id CurrentAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialReplicationSizeLimitInTb`<sup>Optional</sup> <a name="initialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.initialReplicationSizeLimitInTb"></a>

- *Type:* java.lang.String

Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB).

Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#initial_replication_size_limit_in_tb CurrentAccount#initial_replication_size_limit_in_tb}

---

##### `jdbcTreatDecimalAsInt`<sup>Optional</sup> <a name="jdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcTreatDecimalAsInt"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#jdbc_treat_decimal_as_int CurrentAccount#jdbc_treat_decimal_as_int}

---

##### `jdbcTreatTimestampNtzAsUtc`<sup>Optional</sup> <a name="jdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcTreatTimestampNtzAsUtc"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#jdbc_treat_timestamp_ntz_as_utc CurrentAccount#jdbc_treat_timestamp_ntz_as_utc}

---

##### `jdbcUseSessionTimezone`<sup>Optional</sup> <a name="jdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jdbcUseSessionTimezone"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#jdbc_use_session_timezone CurrentAccount#jdbc_use_session_timezone}

---

##### `jsonIndent`<sup>Optional</sup> <a name="jsonIndent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jsonIndent"></a>

- *Type:* java.lang.Number

Specifies the number of blank spaces to indent each new element in JSON output in the session.

Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#json_indent CurrentAccount#json_indent}

---

##### `jsTreatIntegerAsBigint`<sup>Optional</sup> <a name="jsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.jsTreatIntegerAsBigint"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#js_treat_integer_as_bigint CurrentAccount#js_treat_integer_as_bigint}

---

##### `listingAutoFulfillmentReplicationRefreshSchedule`<sup>Optional</sup> <a name="listingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.listingAutoFulfillmentReplicationRefreshSchedule"></a>

- *Type:* java.lang.String

Sets the time interval used to refresh the application package based data products to other regions.

For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#listing_auto_fulfillment_replication_refresh_schedule CurrentAccount#listing_auto_fulfillment_replication_refresh_schedule}

---

##### `lockTimeout`<sup>Optional</sup> <a name="lockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.lockTimeout"></a>

- *Type:* java.lang.Number

Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement.

For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#lock_timeout CurrentAccount#lock_timeout}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.String

Specifies the severity level of messages that should be ingested and made available in the active event table.

Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#log_level CurrentAccount#log_level}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.maxConcurrencyLevel"></a>

- *Type:* java.lang.Number

Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#max_concurrency_level CurrentAccount#max_concurrency_level}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* java.lang.Number

Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale.

By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#max_data_extension_time_in_days CurrentAccount#max_data_extension_time_in_days}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.metricLevel"></a>

- *Type:* java.lang.String

Controls how metrics data is ingested into the event table.

For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#metric_level CurrentAccount#metric_level}

---

##### `minDataRetentionTimeInDays`<sup>Optional</sup> <a name="minDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.minDataRetentionTimeInDays"></a>

- *Type:* java.lang.Number

Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object.

If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#min_data_retention_time_in_days CurrentAccount#min_data_retention_time_in_days}

---

##### `multiStatementCount`<sup>Optional</sup> <a name="multiStatementCount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.multiStatementCount"></a>

- *Type:* java.lang.Number

Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#multi_statement_count CurrentAccount#multi_statement_count}

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.networkPolicy"></a>

- *Type:* java.lang.String

Specifies the network policy to enforce for your account.

Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#network_policy CurrentAccount#network_policy}

---

##### `noorderSequenceAsDefault`<sup>Optional</sup> <a name="noorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.noorderSequenceAsDefault"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column.

The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#noorder_sequence_as_default CurrentAccount#noorder_sequence_as_default}

---

##### `oauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="oauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.oauthAddPrivilegedRolesToBlockedList"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server.

For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#oauth_add_privileged_roles_to_blocked_list CurrentAccount#oauth_add_privileged_roles_to_blocked_list}

---

##### `odbcTreatDecimalAsInt`<sup>Optional</sup> <a name="odbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.odbcTreatDecimalAsInt"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#odbc_treat_decimal_as_int CurrentAccount#odbc_treat_decimal_as_int}

---

##### `packagesPolicy`<sup>Optional</sup> <a name="packagesPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.packagesPolicy"></a>

- *Type:* java.lang.String

Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#packages_policy CurrentAccount#packages_policy}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.passwordPolicy"></a>

- *Type:* java.lang.String

Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#password_policy CurrentAccount#password_policy}

---

##### `periodicDataRekeying`<sup>Optional</sup> <a name="periodicDataRekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.periodicDataRekeying"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#periodic_data_rekeying CurrentAccount#periodic_data_rekeying}

---

##### `pipeExecutionPaused`<sup>Optional</sup> <a name="pipeExecutionPaused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pipeExecutionPaused"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#pipe_execution_paused CurrentAccount#pipe_execution_paused}

---

##### `preventUnloadToInlineUrl`<sup>Optional</sup> <a name="preventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.preventUnloadToInlineUrl"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#prevent_unload_to_inline_url CurrentAccount#prevent_unload_to_inline_url}

---

##### `preventUnloadToInternalStages`<sup>Optional</sup> <a name="preventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.preventUnloadToInternalStages"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#prevent_unload_to_internal_stages CurrentAccount#prevent_unload_to_internal_stages}

---

##### `pythonProfilerModules`<sup>Optional</sup> <a name="pythonProfilerModules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pythonProfilerModules"></a>

- *Type:* java.lang.String

Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#python_profiler_modules CurrentAccount#python_profiler_modules}

---

##### `pythonProfilerTargetStage`<sup>Optional</sup> <a name="pythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.pythonProfilerTargetStage"></a>

- *Type:* java.lang.String

Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#python_profiler_target_stage CurrentAccount#python_profiler_target_stage}

---

##### `queryTag`<sup>Optional</sup> <a name="queryTag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.queryTag"></a>

- *Type:* java.lang.String

Optional string that can be used to tag queries and other SQL statements executed within a session.

The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#query_tag CurrentAccount#query_tag}

---

##### `quotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.quotedIdentifiersIgnoreCase"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters.

By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#quoted_identifiers_ignore_case CurrentAccount#quoted_identifiers_ignore_case}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#replace_invalid_characters CurrentAccount#replace_invalid_characters}

---

##### `requireStorageIntegrationForStageCreation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.requireStorageIntegrationForStageCreation"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#require_storage_integration_for_stage_creation CurrentAccount#require_storage_integration_for_stage_creation}

---

##### `requireStorageIntegrationForStageOperation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.requireStorageIntegrationForStageOperation"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location.

For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#require_storage_integration_for_stage_operation CurrentAccount#require_storage_integration_for_stage_operation}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.resourceMonitor"></a>

- *Type:* java.lang.String

Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#resource_monitor CurrentAccount#resource_monitor}

---

##### `rowsPerResultset`<sup>Optional</sup> <a name="rowsPerResultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.rowsPerResultset"></a>

- *Type:* java.lang.Number

Specifies the maximum number of rows returned in a result set.

A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#rows_per_resultset CurrentAccount#rows_per_resultset}

---

##### `s3StageVpceDnsName`<sup>Optional</sup> <a name="s3StageVpceDnsName" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.s3StageVpceDnsName"></a>

- *Type:* java.lang.String

Specifies the DNS name of an Amazon S3 interface endpoint.

Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#s3_stage_vpce_dns_name CurrentAccount#s3_stage_vpce_dns_name}

---

##### `samlIdentityProvider`<sup>Optional</sup> <a name="samlIdentityProvider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.samlIdentityProvider"></a>

- *Type:* java.lang.String

Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#saml_identity_provider CurrentAccount#saml_identity_provider}

---

##### `searchPath`<sup>Optional</sup> <a name="searchPath" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.searchPath"></a>

- *Type:* java.lang.String

Specifies the path to search to resolve unqualified object names in queries.

For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#search_path CurrentAccount#search_path}

---

##### `serverlessTaskMaxStatementSize`<sup>Optional</sup> <a name="serverlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.serverlessTaskMaxStatementSize"></a>

- *Type:* java.lang.String

Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#serverless_task_max_statement_size CurrentAccount#serverless_task_max_statement_size}

---

##### `serverlessTaskMinStatementSize`<sup>Optional</sup> <a name="serverlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.serverlessTaskMinStatementSize"></a>

- *Type:* java.lang.String

Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#serverless_task_min_statement_size CurrentAccount#serverless_task_min_statement_size}

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.sessionPolicy"></a>

- *Type:* java.lang.String

Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#session_policy CurrentAccount#session_policy}

---

##### `simulatedDataSharingConsumer`<sup>Optional</sup> <a name="simulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.simulatedDataSharingConsumer"></a>

- *Type:* java.lang.String

Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views.

When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#simulated_data_sharing_consumer CurrentAccount#simulated_data_sharing_consumer}

---

##### `ssoLoginPage`<sup>Optional</sup> <a name="ssoLoginPage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.ssoLoginPage"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users.

For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#sso_login_page CurrentAccount#sso_login_page}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.statementQueuedTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#statement_queued_timeout_in_seconds CurrentAccount#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.statementTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#statement_timeout_in_seconds CurrentAccount#statement_timeout_in_seconds}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* java.lang.String

Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#storage_serialization_policy CurrentAccount#storage_serialization_policy}

---

##### `strictJsonOutput`<sup>Optional</sup> <a name="strictJsonOutput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.strictJsonOutput"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#strict_json_output CurrentAccount#strict_json_output}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.suspendTaskAfterNumFailures"></a>

- *Type:* java.lang.Number

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#suspend_task_after_num_failures CurrentAccount#suspend_task_after_num_failures}

---

##### `taskAutoRetryAttempts`<sup>Optional</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.taskAutoRetryAttempts"></a>

- *Type:* java.lang.Number

Specifies the number of automatic task graph retry attempts.

If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#task_auto_retry_attempts CurrentAccount#task_auto_retry_attempts}

---

##### `timeInputFormat`<sup>Optional</sup> <a name="timeInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeInputFormat"></a>

- *Type:* java.lang.String

Specifies the input format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#time_input_format CurrentAccount#time_input_format}

---

##### `timeOutputFormat`<sup>Optional</sup> <a name="timeOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#time_output_format CurrentAccount#time_output_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timeouts CurrentAccount#timeouts}

---

##### `timestampDayIsAlways24H`<sup>Optional</sup> <a name="timestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampDayIsAlways24H"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_day_is_always_24h CurrentAccount#timestamp_day_is_always_24h}

---

##### `timestampInputFormat`<sup>Optional</sup> <a name="timestampInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampInputFormat"></a>

- *Type:* java.lang.String

Specifies the input format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_input_format CurrentAccount#timestamp_input_format}

---

##### `timestampLtzOutputFormat`<sup>Optional</sup> <a name="timestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampLtzOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_LTZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_ltz_output_format CurrentAccount#timestamp_ltz_output_format}

---

##### `timestampNtzOutputFormat`<sup>Optional</sup> <a name="timestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampNtzOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_ntz_output_format CurrentAccount#timestamp_ntz_output_format}

---

##### `timestampOutputFormat`<sup>Optional</sup> <a name="timestampOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_output_format CurrentAccount#timestamp_output_format}

---

##### `timestampTypeMapping`<sup>Optional</sup> <a name="timestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampTypeMapping"></a>

- *Type:* java.lang.String

Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to.

Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_type_mapping CurrentAccount#timestamp_type_mapping}

---

##### `timestampTzOutputFormat`<sup>Optional</sup> <a name="timestampTzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timestampTzOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_TZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_tz_output_format CurrentAccount#timestamp_tz_output_format}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

Specifies the time zone for the session.

You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timezone CurrentAccount#timezone}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.traceLevel"></a>

- *Type:* java.lang.String

Controls how trace events are ingested into the event table.

For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#trace_level CurrentAccount#trace_level}

---

##### `transactionAbortOnError`<sup>Optional</sup> <a name="transactionAbortOnError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.transactionAbortOnError"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error.

For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#transaction_abort_on_error CurrentAccount#transaction_abort_on_error}

---

##### `transactionDefaultIsolationLevel`<sup>Optional</sup> <a name="transactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.transactionDefaultIsolationLevel"></a>

- *Type:* java.lang.String

Specifies the isolation level for transactions in the user session.

Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#transaction_default_isolation_level CurrentAccount#transaction_default_isolation_level}

---

##### `twoDigitCenturyStart`<sup>Optional</sup> <a name="twoDigitCenturyStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.twoDigitCenturyStart"></a>

- *Type:* java.lang.Number

Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#two_digit_century_start CurrentAccount#two_digit_century_start}

---

##### `unsupportedDdlAction`<sup>Optional</sup> <a name="unsupportedDdlAction" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.unsupportedDdlAction"></a>

- *Type:* java.lang.String

Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#unsupported_ddl_action CurrentAccount#unsupported_ddl_action}

---

##### `useCachedResult`<sup>Optional</sup> <a name="useCachedResult" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.useCachedResult"></a>

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to reuse persisted query results, if available, when a matching query is submitted.

For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#use_cached_result CurrentAccount#use_cached_result}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskManagedInitialWarehouseSize"></a>

- *Type:* java.lang.String

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#user_task_managed_initial_warehouse_size CurrentAccount#user_task_managed_initial_warehouse_size}

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds"></a>

- *Type:* java.lang.Number

Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#user_task_minimum_trigger_interval_in_seconds CurrentAccount#user_task_minimum_trigger_interval_in_seconds}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.userTaskTimeoutMs"></a>

- *Type:* java.lang.Number

Specifies the time limit on a single run of the task before it times out (in milliseconds).

For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#user_task_timeout_ms CurrentAccount#user_task_timeout_ms}

---

##### `weekOfYearPolicy`<sup>Optional</sup> <a name="weekOfYearPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.weekOfYearPolicy"></a>

- *Type:* java.lang.Number

Specifies how the weeks in a given year are computed.

`0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#week_of_year_policy CurrentAccount#week_of_year_policy}

---

##### `weekStart`<sup>Optional</sup> <a name="weekStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.weekStart"></a>

- *Type:* java.lang.Number

Specifies the first day of the week (used by week-related date functions).

`0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#week_start CurrentAccount#week_start}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAbortDetachedQuery">resetAbortDetachedQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetActivePythonProfiler">resetActivePythonProfiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowClientMfaCaching">resetAllowClientMfaCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowIdToken">resetAllowIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAuthenticationPolicy">resetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAutocommit">resetAutocommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBaseLocationPrefix">resetBaseLocationPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryInputFormat">resetBinaryInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryOutputFormat">resetBinaryOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalogSync">resetCatalogSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEnableLogInfoStatementParameters">resetClientEnableLogInfoStatementParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEncryptionKeySize">resetClientEncryptionKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMemoryLimit">resetClientMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataRequestUseConnectionCtx">resetClientMetadataRequestUseConnectionCtx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataUseSessionDatabase">resetClientMetadataUseSessionDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientPrefetchThreads">resetClientPrefetchThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultChunkSize">resetClientResultChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultColumnCaseInsensitive">resetClientResultColumnCaseInsensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAlive">resetClientSessionKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAliveHeartbeatFrequency">resetClientSessionKeepAliveHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientTimestampTypeMapping">resetClientTimestampTypeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexEnabledCrossRegion">resetCortexEnabledCrossRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexModelsAllowlist">resetCortexModelsAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCsvTimestampFormat">resetCsvTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateInputFormat">resetDateInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateOutputFormat">resetDateOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultDdlCollation">resetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolCpu">resetDefaultNotebookComputePoolCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolGpu">resetDefaultNotebookComputePoolGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNullOrdering">resetDefaultNullOrdering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultStreamlitNotebookWarehouse">resetDefaultStreamlitNotebookWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUiDownloadButton">resetDisableUiDownloadButton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUserPrivilegeGrants">resetDisableUserPrivilegeGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableAutomaticSensitiveDataClassificationLog">resetEnableAutomaticSensitiveDataClassificationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableEgressCostOptimizer">resetEnableEgressCostOptimizer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableIdentifierFirstLogin">resetEnableIdentifierFirstLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableInternalStagesPrivatelink">resetEnableInternalStagesPrivatelink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository">resetEnableTriSecretAndRekeyOptOutForImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage">resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnhandledExceptionsReporting">resetEnableUnhandledExceptionsReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnloadPhysicalTypeOptimization">resetEnableUnloadPhysicalTypeOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedQuerySyntaxError">resetEnableUnredactedQuerySyntaxError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedSecureObjectError">resetEnableUnredactedSecureObjectError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnforceNetworkRulesForInternalStages">resetEnforceNetworkRulesForInternalStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicMerge">resetErrorOnNondeterministicMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicUpdate">resetErrorOnNondeterministicUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEventTable">resetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalOauthAddPrivilegedRolesToBlockedList">resetExternalOauthAddPrivilegedRolesToBlockedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetFeaturePolicy">resetFeaturePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeographyOutputFormat">resetGeographyOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeometryOutputFormat">resetGeometryOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetHybridTableLockTimeout">resetHybridTableLockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetInitialReplicationSizeLimitInTb">resetInitialReplicationSizeLimitInTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatDecimalAsInt">resetJdbcTreatDecimalAsInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatTimestampNtzAsUtc">resetJdbcTreatTimestampNtzAsUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcUseSessionTimezone">resetJdbcUseSessionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsonIndent">resetJsonIndent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsTreatIntegerAsBigint">resetJsTreatIntegerAsBigint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetListingAutoFulfillmentReplicationRefreshSchedule">resetListingAutoFulfillmentReplicationRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLockTimeout">resetLockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxConcurrencyLevel">resetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxDataExtensionTimeInDays">resetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMetricLevel">resetMetricLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMinDataRetentionTimeInDays">resetMinDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMultiStatementCount">resetMultiStatementCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNetworkPolicy">resetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNoorderSequenceAsDefault">resetNoorderSequenceAsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOauthAddPrivilegedRolesToBlockedList">resetOauthAddPrivilegedRolesToBlockedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOdbcTreatDecimalAsInt">resetOdbcTreatDecimalAsInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPackagesPolicy">resetPackagesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPeriodicDataRekeying">resetPeriodicDataRekeying</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPipeExecutionPaused">resetPipeExecutionPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInlineUrl">resetPreventUnloadToInlineUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInternalStages">resetPreventUnloadToInternalStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerModules">resetPythonProfilerModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerTargetStage">resetPythonProfilerTargetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQueryTag">resetQueryTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQuotedIdentifiersIgnoreCase">resetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageCreation">resetRequireStorageIntegrationForStageCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageOperation">resetRequireStorageIntegrationForStageOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetResourceMonitor">resetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRowsPerResultset">resetRowsPerResultset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetS3StageVpceDnsName">resetS3StageVpceDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSamlIdentityProvider">resetSamlIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSearchPath">resetSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMaxStatementSize">resetServerlessTaskMaxStatementSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMinStatementSize">resetServerlessTaskMinStatementSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSessionPolicy">resetSessionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSimulatedDataSharingConsumer">resetSimulatedDataSharingConsumer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSsoLoginPage">resetSsoLoginPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementQueuedTimeoutInSeconds">resetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementTimeoutInSeconds">resetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStorageSerializationPolicy">resetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStrictJsonOutput">resetStrictJsonOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSuspendTaskAfterNumFailures">resetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTaskAutoRetryAttempts">resetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeInputFormat">resetTimeInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeOutputFormat">resetTimeOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampDayIsAlways24H">resetTimestampDayIsAlways24H</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampInputFormat">resetTimestampInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampLtzOutputFormat">resetTimestampLtzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampNtzOutputFormat">resetTimestampNtzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampOutputFormat">resetTimestampOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTypeMapping">resetTimestampTypeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTzOutputFormat">resetTimestampTzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTraceLevel">resetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionAbortOnError">resetTransactionAbortOnError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionDefaultIsolationLevel">resetTransactionDefaultIsolationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTwoDigitCenturyStart">resetTwoDigitCenturyStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUnsupportedDdlAction">resetUnsupportedDdlAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUseCachedResult">resetUseCachedResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskManagedInitialWarehouseSize">resetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskMinimumTriggerIntervalInSeconds">resetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskTimeoutMs">resetUserTaskTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekOfYearPolicy">resetWeekOfYearPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekStart">resetWeekStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts"></a>

```java
public void putTimeouts(CurrentAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>

---

##### `resetAbortDetachedQuery` <a name="resetAbortDetachedQuery" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAbortDetachedQuery"></a>

```java
public void resetAbortDetachedQuery()
```

##### `resetActivePythonProfiler` <a name="resetActivePythonProfiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetActivePythonProfiler"></a>

```java
public void resetActivePythonProfiler()
```

##### `resetAllowClientMfaCaching` <a name="resetAllowClientMfaCaching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowClientMfaCaching"></a>

```java
public void resetAllowClientMfaCaching()
```

##### `resetAllowIdToken` <a name="resetAllowIdToken" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowIdToken"></a>

```java
public void resetAllowIdToken()
```

##### `resetAuthenticationPolicy` <a name="resetAuthenticationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAuthenticationPolicy"></a>

```java
public void resetAuthenticationPolicy()
```

##### `resetAutocommit` <a name="resetAutocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAutocommit"></a>

```java
public void resetAutocommit()
```

##### `resetBaseLocationPrefix` <a name="resetBaseLocationPrefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBaseLocationPrefix"></a>

```java
public void resetBaseLocationPrefix()
```

##### `resetBinaryInputFormat` <a name="resetBinaryInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryInputFormat"></a>

```java
public void resetBinaryInputFormat()
```

##### `resetBinaryOutputFormat` <a name="resetBinaryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryOutputFormat"></a>

```java
public void resetBinaryOutputFormat()
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetCatalogSync` <a name="resetCatalogSync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalogSync"></a>

```java
public void resetCatalogSync()
```

##### `resetClientEnableLogInfoStatementParameters` <a name="resetClientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEnableLogInfoStatementParameters"></a>

```java
public void resetClientEnableLogInfoStatementParameters()
```

##### `resetClientEncryptionKeySize` <a name="resetClientEncryptionKeySize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEncryptionKeySize"></a>

```java
public void resetClientEncryptionKeySize()
```

##### `resetClientMemoryLimit` <a name="resetClientMemoryLimit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMemoryLimit"></a>

```java
public void resetClientMemoryLimit()
```

##### `resetClientMetadataRequestUseConnectionCtx` <a name="resetClientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataRequestUseConnectionCtx"></a>

```java
public void resetClientMetadataRequestUseConnectionCtx()
```

##### `resetClientMetadataUseSessionDatabase` <a name="resetClientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataUseSessionDatabase"></a>

```java
public void resetClientMetadataUseSessionDatabase()
```

##### `resetClientPrefetchThreads` <a name="resetClientPrefetchThreads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientPrefetchThreads"></a>

```java
public void resetClientPrefetchThreads()
```

##### `resetClientResultChunkSize` <a name="resetClientResultChunkSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultChunkSize"></a>

```java
public void resetClientResultChunkSize()
```

##### `resetClientResultColumnCaseInsensitive` <a name="resetClientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultColumnCaseInsensitive"></a>

```java
public void resetClientResultColumnCaseInsensitive()
```

##### `resetClientSessionKeepAlive` <a name="resetClientSessionKeepAlive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAlive"></a>

```java
public void resetClientSessionKeepAlive()
```

##### `resetClientSessionKeepAliveHeartbeatFrequency` <a name="resetClientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAliveHeartbeatFrequency"></a>

```java
public void resetClientSessionKeepAliveHeartbeatFrequency()
```

##### `resetClientTimestampTypeMapping` <a name="resetClientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientTimestampTypeMapping"></a>

```java
public void resetClientTimestampTypeMapping()
```

##### `resetCortexEnabledCrossRegion` <a name="resetCortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexEnabledCrossRegion"></a>

```java
public void resetCortexEnabledCrossRegion()
```

##### `resetCortexModelsAllowlist` <a name="resetCortexModelsAllowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexModelsAllowlist"></a>

```java
public void resetCortexModelsAllowlist()
```

##### `resetCsvTimestampFormat` <a name="resetCsvTimestampFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCsvTimestampFormat"></a>

```java
public void resetCsvTimestampFormat()
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDataRetentionTimeInDays"></a>

```java
public void resetDataRetentionTimeInDays()
```

##### `resetDateInputFormat` <a name="resetDateInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateInputFormat"></a>

```java
public void resetDateInputFormat()
```

##### `resetDateOutputFormat` <a name="resetDateOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateOutputFormat"></a>

```java
public void resetDateOutputFormat()
```

##### `resetDefaultDdlCollation` <a name="resetDefaultDdlCollation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultDdlCollation"></a>

```java
public void resetDefaultDdlCollation()
```

##### `resetDefaultNotebookComputePoolCpu` <a name="resetDefaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolCpu"></a>

```java
public void resetDefaultNotebookComputePoolCpu()
```

##### `resetDefaultNotebookComputePoolGpu` <a name="resetDefaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolGpu"></a>

```java
public void resetDefaultNotebookComputePoolGpu()
```

##### `resetDefaultNullOrdering` <a name="resetDefaultNullOrdering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNullOrdering"></a>

```java
public void resetDefaultNullOrdering()
```

##### `resetDefaultStreamlitNotebookWarehouse` <a name="resetDefaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultStreamlitNotebookWarehouse"></a>

```java
public void resetDefaultStreamlitNotebookWarehouse()
```

##### `resetDisableUiDownloadButton` <a name="resetDisableUiDownloadButton" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUiDownloadButton"></a>

```java
public void resetDisableUiDownloadButton()
```

##### `resetDisableUserPrivilegeGrants` <a name="resetDisableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUserPrivilegeGrants"></a>

```java
public void resetDisableUserPrivilegeGrants()
```

##### `resetEnableAutomaticSensitiveDataClassificationLog` <a name="resetEnableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableAutomaticSensitiveDataClassificationLog"></a>

```java
public void resetEnableAutomaticSensitiveDataClassificationLog()
```

##### `resetEnableEgressCostOptimizer` <a name="resetEnableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableEgressCostOptimizer"></a>

```java
public void resetEnableEgressCostOptimizer()
```

##### `resetEnableIdentifierFirstLogin` <a name="resetEnableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableIdentifierFirstLogin"></a>

```java
public void resetEnableIdentifierFirstLogin()
```

##### `resetEnableInternalStagesPrivatelink` <a name="resetEnableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableInternalStagesPrivatelink"></a>

```java
public void resetEnableInternalStagesPrivatelink()
```

##### `resetEnableTriSecretAndRekeyOptOutForImageRepository` <a name="resetEnableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository"></a>

```java
public void resetEnableTriSecretAndRekeyOptOutForImageRepository()
```

##### `resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage` <a name="resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```java
public void resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage()
```

##### `resetEnableUnhandledExceptionsReporting` <a name="resetEnableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnhandledExceptionsReporting"></a>

```java
public void resetEnableUnhandledExceptionsReporting()
```

##### `resetEnableUnloadPhysicalTypeOptimization` <a name="resetEnableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnloadPhysicalTypeOptimization"></a>

```java
public void resetEnableUnloadPhysicalTypeOptimization()
```

##### `resetEnableUnredactedQuerySyntaxError` <a name="resetEnableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedQuerySyntaxError"></a>

```java
public void resetEnableUnredactedQuerySyntaxError()
```

##### `resetEnableUnredactedSecureObjectError` <a name="resetEnableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedSecureObjectError"></a>

```java
public void resetEnableUnredactedSecureObjectError()
```

##### `resetEnforceNetworkRulesForInternalStages` <a name="resetEnforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnforceNetworkRulesForInternalStages"></a>

```java
public void resetEnforceNetworkRulesForInternalStages()
```

##### `resetErrorOnNondeterministicMerge` <a name="resetErrorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicMerge"></a>

```java
public void resetErrorOnNondeterministicMerge()
```

##### `resetErrorOnNondeterministicUpdate` <a name="resetErrorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicUpdate"></a>

```java
public void resetErrorOnNondeterministicUpdate()
```

##### `resetEventTable` <a name="resetEventTable" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEventTable"></a>

```java
public void resetEventTable()
```

##### `resetExternalOauthAddPrivilegedRolesToBlockedList` <a name="resetExternalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalOauthAddPrivilegedRolesToBlockedList"></a>

```java
public void resetExternalOauthAddPrivilegedRolesToBlockedList()
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalVolume"></a>

```java
public void resetExternalVolume()
```

##### `resetFeaturePolicy` <a name="resetFeaturePolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetFeaturePolicy"></a>

```java
public void resetFeaturePolicy()
```

##### `resetGeographyOutputFormat` <a name="resetGeographyOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeographyOutputFormat"></a>

```java
public void resetGeographyOutputFormat()
```

##### `resetGeometryOutputFormat` <a name="resetGeometryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeometryOutputFormat"></a>

```java
public void resetGeometryOutputFormat()
```

##### `resetHybridTableLockTimeout` <a name="resetHybridTableLockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetHybridTableLockTimeout"></a>

```java
public void resetHybridTableLockTimeout()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetId"></a>

```java
public void resetId()
```

##### `resetInitialReplicationSizeLimitInTb` <a name="resetInitialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetInitialReplicationSizeLimitInTb"></a>

```java
public void resetInitialReplicationSizeLimitInTb()
```

##### `resetJdbcTreatDecimalAsInt` <a name="resetJdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatDecimalAsInt"></a>

```java
public void resetJdbcTreatDecimalAsInt()
```

##### `resetJdbcTreatTimestampNtzAsUtc` <a name="resetJdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatTimestampNtzAsUtc"></a>

```java
public void resetJdbcTreatTimestampNtzAsUtc()
```

##### `resetJdbcUseSessionTimezone` <a name="resetJdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcUseSessionTimezone"></a>

```java
public void resetJdbcUseSessionTimezone()
```

##### `resetJsonIndent` <a name="resetJsonIndent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsonIndent"></a>

```java
public void resetJsonIndent()
```

##### `resetJsTreatIntegerAsBigint` <a name="resetJsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsTreatIntegerAsBigint"></a>

```java
public void resetJsTreatIntegerAsBigint()
```

##### `resetListingAutoFulfillmentReplicationRefreshSchedule` <a name="resetListingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetListingAutoFulfillmentReplicationRefreshSchedule"></a>

```java
public void resetListingAutoFulfillmentReplicationRefreshSchedule()
```

##### `resetLockTimeout` <a name="resetLockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLockTimeout"></a>

```java
public void resetLockTimeout()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMaxConcurrencyLevel` <a name="resetMaxConcurrencyLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxConcurrencyLevel"></a>

```java
public void resetMaxConcurrencyLevel()
```

##### `resetMaxDataExtensionTimeInDays` <a name="resetMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxDataExtensionTimeInDays"></a>

```java
public void resetMaxDataExtensionTimeInDays()
```

##### `resetMetricLevel` <a name="resetMetricLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMetricLevel"></a>

```java
public void resetMetricLevel()
```

##### `resetMinDataRetentionTimeInDays` <a name="resetMinDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMinDataRetentionTimeInDays"></a>

```java
public void resetMinDataRetentionTimeInDays()
```

##### `resetMultiStatementCount` <a name="resetMultiStatementCount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMultiStatementCount"></a>

```java
public void resetMultiStatementCount()
```

##### `resetNetworkPolicy` <a name="resetNetworkPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNetworkPolicy"></a>

```java
public void resetNetworkPolicy()
```

##### `resetNoorderSequenceAsDefault` <a name="resetNoorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNoorderSequenceAsDefault"></a>

```java
public void resetNoorderSequenceAsDefault()
```

##### `resetOauthAddPrivilegedRolesToBlockedList` <a name="resetOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOauthAddPrivilegedRolesToBlockedList"></a>

```java
public void resetOauthAddPrivilegedRolesToBlockedList()
```

##### `resetOdbcTreatDecimalAsInt` <a name="resetOdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOdbcTreatDecimalAsInt"></a>

```java
public void resetOdbcTreatDecimalAsInt()
```

##### `resetPackagesPolicy` <a name="resetPackagesPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPackagesPolicy"></a>

```java
public void resetPackagesPolicy()
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPasswordPolicy"></a>

```java
public void resetPasswordPolicy()
```

##### `resetPeriodicDataRekeying` <a name="resetPeriodicDataRekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPeriodicDataRekeying"></a>

```java
public void resetPeriodicDataRekeying()
```

##### `resetPipeExecutionPaused` <a name="resetPipeExecutionPaused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPipeExecutionPaused"></a>

```java
public void resetPipeExecutionPaused()
```

##### `resetPreventUnloadToInlineUrl` <a name="resetPreventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInlineUrl"></a>

```java
public void resetPreventUnloadToInlineUrl()
```

##### `resetPreventUnloadToInternalStages` <a name="resetPreventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInternalStages"></a>

```java
public void resetPreventUnloadToInternalStages()
```

##### `resetPythonProfilerModules` <a name="resetPythonProfilerModules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerModules"></a>

```java
public void resetPythonProfilerModules()
```

##### `resetPythonProfilerTargetStage` <a name="resetPythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerTargetStage"></a>

```java
public void resetPythonProfilerTargetStage()
```

##### `resetQueryTag` <a name="resetQueryTag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQueryTag"></a>

```java
public void resetQueryTag()
```

##### `resetQuotedIdentifiersIgnoreCase` <a name="resetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQuotedIdentifiersIgnoreCase"></a>

```java
public void resetQuotedIdentifiersIgnoreCase()
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetReplaceInvalidCharacters"></a>

```java
public void resetReplaceInvalidCharacters()
```

##### `resetRequireStorageIntegrationForStageCreation` <a name="resetRequireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageCreation"></a>

```java
public void resetRequireStorageIntegrationForStageCreation()
```

##### `resetRequireStorageIntegrationForStageOperation` <a name="resetRequireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageOperation"></a>

```java
public void resetRequireStorageIntegrationForStageOperation()
```

##### `resetResourceMonitor` <a name="resetResourceMonitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetResourceMonitor"></a>

```java
public void resetResourceMonitor()
```

##### `resetRowsPerResultset` <a name="resetRowsPerResultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRowsPerResultset"></a>

```java
public void resetRowsPerResultset()
```

##### `resetS3StageVpceDnsName` <a name="resetS3StageVpceDnsName" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetS3StageVpceDnsName"></a>

```java
public void resetS3StageVpceDnsName()
```

##### `resetSamlIdentityProvider` <a name="resetSamlIdentityProvider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSamlIdentityProvider"></a>

```java
public void resetSamlIdentityProvider()
```

##### `resetSearchPath` <a name="resetSearchPath" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSearchPath"></a>

```java
public void resetSearchPath()
```

##### `resetServerlessTaskMaxStatementSize` <a name="resetServerlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMaxStatementSize"></a>

```java
public void resetServerlessTaskMaxStatementSize()
```

##### `resetServerlessTaskMinStatementSize` <a name="resetServerlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMinStatementSize"></a>

```java
public void resetServerlessTaskMinStatementSize()
```

##### `resetSessionPolicy` <a name="resetSessionPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSessionPolicy"></a>

```java
public void resetSessionPolicy()
```

##### `resetSimulatedDataSharingConsumer` <a name="resetSimulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSimulatedDataSharingConsumer"></a>

```java
public void resetSimulatedDataSharingConsumer()
```

##### `resetSsoLoginPage` <a name="resetSsoLoginPage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSsoLoginPage"></a>

```java
public void resetSsoLoginPage()
```

##### `resetStatementQueuedTimeoutInSeconds` <a name="resetStatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementQueuedTimeoutInSeconds"></a>

```java
public void resetStatementQueuedTimeoutInSeconds()
```

##### `resetStatementTimeoutInSeconds` <a name="resetStatementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementTimeoutInSeconds"></a>

```java
public void resetStatementTimeoutInSeconds()
```

##### `resetStorageSerializationPolicy` <a name="resetStorageSerializationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStorageSerializationPolicy"></a>

```java
public void resetStorageSerializationPolicy()
```

##### `resetStrictJsonOutput` <a name="resetStrictJsonOutput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStrictJsonOutput"></a>

```java
public void resetStrictJsonOutput()
```

##### `resetSuspendTaskAfterNumFailures` <a name="resetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSuspendTaskAfterNumFailures"></a>

```java
public void resetSuspendTaskAfterNumFailures()
```

##### `resetTaskAutoRetryAttempts` <a name="resetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTaskAutoRetryAttempts"></a>

```java
public void resetTaskAutoRetryAttempts()
```

##### `resetTimeInputFormat` <a name="resetTimeInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeInputFormat"></a>

```java
public void resetTimeInputFormat()
```

##### `resetTimeOutputFormat` <a name="resetTimeOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeOutputFormat"></a>

```java
public void resetTimeOutputFormat()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimestampDayIsAlways24H` <a name="resetTimestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampDayIsAlways24H"></a>

```java
public void resetTimestampDayIsAlways24H()
```

##### `resetTimestampInputFormat` <a name="resetTimestampInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampInputFormat"></a>

```java
public void resetTimestampInputFormat()
```

##### `resetTimestampLtzOutputFormat` <a name="resetTimestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampLtzOutputFormat"></a>

```java
public void resetTimestampLtzOutputFormat()
```

##### `resetTimestampNtzOutputFormat` <a name="resetTimestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampNtzOutputFormat"></a>

```java
public void resetTimestampNtzOutputFormat()
```

##### `resetTimestampOutputFormat` <a name="resetTimestampOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampOutputFormat"></a>

```java
public void resetTimestampOutputFormat()
```

##### `resetTimestampTypeMapping` <a name="resetTimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTypeMapping"></a>

```java
public void resetTimestampTypeMapping()
```

##### `resetTimestampTzOutputFormat` <a name="resetTimestampTzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTzOutputFormat"></a>

```java
public void resetTimestampTzOutputFormat()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetTraceLevel` <a name="resetTraceLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTraceLevel"></a>

```java
public void resetTraceLevel()
```

##### `resetTransactionAbortOnError` <a name="resetTransactionAbortOnError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionAbortOnError"></a>

```java
public void resetTransactionAbortOnError()
```

##### `resetTransactionDefaultIsolationLevel` <a name="resetTransactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionDefaultIsolationLevel"></a>

```java
public void resetTransactionDefaultIsolationLevel()
```

##### `resetTwoDigitCenturyStart` <a name="resetTwoDigitCenturyStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTwoDigitCenturyStart"></a>

```java
public void resetTwoDigitCenturyStart()
```

##### `resetUnsupportedDdlAction` <a name="resetUnsupportedDdlAction" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUnsupportedDdlAction"></a>

```java
public void resetUnsupportedDdlAction()
```

##### `resetUseCachedResult` <a name="resetUseCachedResult" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUseCachedResult"></a>

```java
public void resetUseCachedResult()
```

##### `resetUserTaskManagedInitialWarehouseSize` <a name="resetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskManagedInitialWarehouseSize"></a>

```java
public void resetUserTaskManagedInitialWarehouseSize()
```

##### `resetUserTaskMinimumTriggerIntervalInSeconds` <a name="resetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```java
public void resetUserTaskMinimumTriggerIntervalInSeconds()
```

##### `resetUserTaskTimeoutMs` <a name="resetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskTimeoutMs"></a>

```java
public void resetUserTaskTimeoutMs()
```

##### `resetWeekOfYearPolicy` <a name="resetWeekOfYearPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekOfYearPolicy"></a>

```java
public void resetWeekOfYearPolicy()
```

##### `resetWeekStart` <a name="resetWeekStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekStart"></a>

```java
public void resetWeekStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CurrentAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_account.CurrentAccount;

CurrentAccount.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_account.CurrentAccount;

CurrentAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_account.CurrentAccount;

CurrentAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_account.CurrentAccount;

CurrentAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CurrentAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CurrentAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CurrentAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CurrentAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CurrentAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference">CurrentAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQueryInput">abortDetachedQueryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfilerInput">activePythonProfilerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCachingInput">allowClientMfaCachingInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdTokenInput">allowIdTokenInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicyInput">authenticationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommitInput">autocommitInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefixInput">baseLocationPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormatInput">binaryInputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormatInput">binaryOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSyncInput">catalogSyncInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParametersInput">clientEnableLogInfoStatementParametersInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySizeInput">clientEncryptionKeySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimitInput">clientMemoryLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtxInput">clientMetadataRequestUseConnectionCtxInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabaseInput">clientMetadataUseSessionDatabaseInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreadsInput">clientPrefetchThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSizeInput">clientResultChunkSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitiveInput">clientResultColumnCaseInsensitiveInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput">clientSessionKeepAliveHeartbeatFrequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveInput">clientSessionKeepAliveInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMappingInput">clientTimestampTypeMappingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegionInput">cortexEnabledCrossRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlistInput">cortexModelsAllowlistInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormatInput">csvTimestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormatInput">dateInputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormatInput">dateOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollationInput">defaultDdlCollationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpuInput">defaultNotebookComputePoolCpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpuInput">defaultNotebookComputePoolGpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrderingInput">defaultNullOrderingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouseInput">defaultStreamlitNotebookWarehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButtonInput">disableUiDownloadButtonInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrantsInput">disableUserPrivilegeGrantsInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLogInput">enableAutomaticSensitiveDataClassificationLogInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizerInput">enableEgressCostOptimizerInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLoginInput">enableIdentifierFirstLoginInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelinkInput">enableInternalStagesPrivatelinkInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput">enableTriSecretAndRekeyOptOutForImageRepositoryInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput">enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReportingInput">enableUnhandledExceptionsReportingInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimizationInput">enableUnloadPhysicalTypeOptimizationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxErrorInput">enableUnredactedQuerySyntaxErrorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectErrorInput">enableUnredactedSecureObjectErrorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStagesInput">enforceNetworkRulesForInternalStagesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMergeInput">errorOnNondeterministicMergeInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdateInput">errorOnNondeterministicUpdateInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTableInput">eventTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput">externalOauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolumeInput">externalVolumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicyInput">featurePolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormatInput">geographyOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormatInput">geometryOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeoutInput">hybridTableLockTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTbInput">initialReplicationSizeLimitInTbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsIntInput">jdbcTreatDecimalAsIntInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtcInput">jdbcTreatTimestampNtzAsUtcInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezoneInput">jdbcUseSessionTimezoneInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndentInput">jsonIndentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigintInput">jsTreatIntegerAsBigintInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput">listingAutoFulfillmentReplicationRefreshScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeoutInput">lockTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevelInput">maxConcurrencyLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDaysInput">maxDataExtensionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevelInput">metricLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDaysInput">minDataRetentionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCountInput">multiStatementCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicyInput">networkPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefaultInput">noorderSequenceAsDefaultInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedListInput">oauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsIntInput">odbcTreatDecimalAsIntInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicyInput">packagesPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeyingInput">periodicDataRekeyingInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPausedInput">pipeExecutionPausedInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrlInput">preventUnloadToInlineUrlInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStagesInput">preventUnloadToInternalStagesInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModulesInput">pythonProfilerModulesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStageInput">pythonProfilerTargetStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTagInput">queryTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCaseInput">quotedIdentifiersIgnoreCaseInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreationInput">requireStorageIntegrationForStageCreationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperationInput">requireStorageIntegrationForStageOperationInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitorInput">resourceMonitorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultsetInput">rowsPerResultsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsNameInput">s3StageVpceDnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProviderInput">samlIdentityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPathInput">searchPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSizeInput">serverlessTaskMaxStatementSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSizeInput">serverlessTaskMinStatementSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicyInput">sessionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumerInput">simulatedDataSharingConsumerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPageInput">ssoLoginPageInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSecondsInput">statementQueuedTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSecondsInput">statementTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicyInput">storageSerializationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutputInput">strictJsonOutputInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailuresInput">suspendTaskAfterNumFailuresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttemptsInput">taskAutoRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormatInput">timeInputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormatInput">timeOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24HInput">timestampDayIsAlways24HInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormatInput">timestampInputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormatInput">timestampLtzOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormatInput">timestampNtzOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormatInput">timestampOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMappingInput">timestampTypeMappingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormatInput">timestampTzOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevelInput">traceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnErrorInput">transactionAbortOnErrorInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevelInput">transactionDefaultIsolationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStartInput">twoDigitCenturyStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlActionInput">unsupportedDdlActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResultInput">useCachedResultInput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSizeInput">userTaskManagedInitialWarehouseSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSecondsInput">userTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMsInput">userTaskTimeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicyInput">weekOfYearPolicyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStartInput">weekStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQuery">abortDetachedQuery</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfiler">activePythonProfiler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCaching">allowClientMfaCaching</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdToken">allowIdToken</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommit">autocommit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefix">baseLocationPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormat">binaryInputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormat">binaryOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSync">catalogSync</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParameters">clientEnableLogInfoStatementParameters</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySize">clientEncryptionKeySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimit">clientMemoryLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtx">clientMetadataRequestUseConnectionCtx</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabase">clientMetadataUseSessionDatabase</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreads">clientPrefetchThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSize">clientResultChunkSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitive">clientResultColumnCaseInsensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAlive">clientSessionKeepAlive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequency">clientSessionKeepAliveHeartbeatFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMapping">clientTimestampTypeMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegion">cortexEnabledCrossRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlist">cortexModelsAllowlist</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormat">csvTimestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormat">dateInputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormat">dateOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpu">defaultNotebookComputePoolCpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpu">defaultNotebookComputePoolGpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrdering">defaultNullOrdering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouse">defaultStreamlitNotebookWarehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButton">disableUiDownloadButton</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrants">disableUserPrivilegeGrants</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLog">enableAutomaticSensitiveDataClassificationLog</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizer">enableEgressCostOptimizer</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLogin">enableIdentifierFirstLogin</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelink">enableInternalStagesPrivatelink</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepository">enableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReporting">enableUnhandledExceptionsReporting</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimization">enableUnloadPhysicalTypeOptimization</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxError">enableUnredactedQuerySyntaxError</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectError">enableUnredactedSecureObjectError</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStages">enforceNetworkRulesForInternalStages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMerge">errorOnNondeterministicMerge</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdate">errorOnNondeterministicUpdate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTable">eventTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicy">featurePolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormat">geographyOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormat">geometryOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeout">hybridTableLockTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTb">initialReplicationSizeLimitInTb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsInt">jdbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtc">jdbcTreatTimestampNtzAsUtc</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezone">jdbcUseSessionTimezone</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndent">jsonIndent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigint">jsTreatIntegerAsBigint</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshSchedule">listingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeout">lockTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDays">minDataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCount">multiStatementCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefault">noorderSequenceAsDefault</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedList">oauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsInt">odbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicy">packagesPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeying">periodicDataRekeying</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPaused">pipeExecutionPaused</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrl">preventUnloadToInlineUrl</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStages">preventUnloadToInternalStages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModules">pythonProfilerModules</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStage">pythonProfilerTargetStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTag">queryTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreation">requireStorageIntegrationForStageCreation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperation">requireStorageIntegrationForStageOperation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultset">rowsPerResultset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsName">s3StageVpceDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProvider">samlIdentityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPath">searchPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSize">serverlessTaskMaxStatementSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSize">serverlessTaskMinStatementSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumer">simulatedDataSharingConsumer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPage">ssoLoginPage</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutput">strictJsonOutput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormat">timeInputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormat">timeOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24H">timestampDayIsAlways24H</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormat">timestampInputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormat">timestampLtzOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormat">timestampNtzOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormat">timestampOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMapping">timestampTypeMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormat">timestampTzOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnError">transactionAbortOnError</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevel">transactionDefaultIsolationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStart">twoDigitCenturyStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlAction">unsupportedDdlAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResult">useCachedResult</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicy">weekOfYearPolicy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStart">weekStart</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeouts"></a>

```java
public CurrentAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference">CurrentAccountTimeoutsOutputReference</a>

---

##### `abortDetachedQueryInput`<sup>Optional</sup> <a name="abortDetachedQueryInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQueryInput"></a>

```java
public java.lang.Boolean|IResolvable getAbortDetachedQueryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `activePythonProfilerInput`<sup>Optional</sup> <a name="activePythonProfilerInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfilerInput"></a>

```java
public java.lang.String getActivePythonProfilerInput();
```

- *Type:* java.lang.String

---

##### `allowClientMfaCachingInput`<sup>Optional</sup> <a name="allowClientMfaCachingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCachingInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowClientMfaCachingInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowIdTokenInput`<sup>Optional</sup> <a name="allowIdTokenInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdTokenInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowIdTokenInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `authenticationPolicyInput`<sup>Optional</sup> <a name="authenticationPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicyInput"></a>

```java
public java.lang.String getAuthenticationPolicyInput();
```

- *Type:* java.lang.String

---

##### `autocommitInput`<sup>Optional</sup> <a name="autocommitInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommitInput"></a>

```java
public java.lang.Boolean|IResolvable getAutocommitInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `baseLocationPrefixInput`<sup>Optional</sup> <a name="baseLocationPrefixInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefixInput"></a>

```java
public java.lang.String getBaseLocationPrefixInput();
```

- *Type:* java.lang.String

---

##### `binaryInputFormatInput`<sup>Optional</sup> <a name="binaryInputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormatInput"></a>

```java
public java.lang.String getBinaryInputFormatInput();
```

- *Type:* java.lang.String

---

##### `binaryOutputFormatInput`<sup>Optional</sup> <a name="binaryOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormatInput"></a>

```java
public java.lang.String getBinaryOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `catalogSyncInput`<sup>Optional</sup> <a name="catalogSyncInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSyncInput"></a>

```java
public java.lang.String getCatalogSyncInput();
```

- *Type:* java.lang.String

---

##### `clientEnableLogInfoStatementParametersInput`<sup>Optional</sup> <a name="clientEnableLogInfoStatementParametersInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParametersInput"></a>

```java
public java.lang.Boolean|IResolvable getClientEnableLogInfoStatementParametersInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientEncryptionKeySizeInput`<sup>Optional</sup> <a name="clientEncryptionKeySizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySizeInput"></a>

```java
public java.lang.Number getClientEncryptionKeySizeInput();
```

- *Type:* java.lang.Number

---

##### `clientMemoryLimitInput`<sup>Optional</sup> <a name="clientMemoryLimitInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimitInput"></a>

```java
public java.lang.Number getClientMemoryLimitInput();
```

- *Type:* java.lang.Number

---

##### `clientMetadataRequestUseConnectionCtxInput`<sup>Optional</sup> <a name="clientMetadataRequestUseConnectionCtxInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtxInput"></a>

```java
public java.lang.Boolean|IResolvable getClientMetadataRequestUseConnectionCtxInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientMetadataUseSessionDatabaseInput`<sup>Optional</sup> <a name="clientMetadataUseSessionDatabaseInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabaseInput"></a>

```java
public java.lang.Boolean|IResolvable getClientMetadataUseSessionDatabaseInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientPrefetchThreadsInput`<sup>Optional</sup> <a name="clientPrefetchThreadsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreadsInput"></a>

```java
public java.lang.Number getClientPrefetchThreadsInput();
```

- *Type:* java.lang.Number

---

##### `clientResultChunkSizeInput`<sup>Optional</sup> <a name="clientResultChunkSizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSizeInput"></a>

```java
public java.lang.Number getClientResultChunkSizeInput();
```

- *Type:* java.lang.Number

---

##### `clientResultColumnCaseInsensitiveInput`<sup>Optional</sup> <a name="clientResultColumnCaseInsensitiveInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitiveInput"></a>

```java
public java.lang.Boolean|IResolvable getClientResultColumnCaseInsensitiveInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientSessionKeepAliveHeartbeatFrequencyInput`<sup>Optional</sup> <a name="clientSessionKeepAliveHeartbeatFrequencyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput"></a>

```java
public java.lang.Number getClientSessionKeepAliveHeartbeatFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `clientSessionKeepAliveInput`<sup>Optional</sup> <a name="clientSessionKeepAliveInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveInput"></a>

```java
public java.lang.Boolean|IResolvable getClientSessionKeepAliveInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientTimestampTypeMappingInput`<sup>Optional</sup> <a name="clientTimestampTypeMappingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMappingInput"></a>

```java
public java.lang.String getClientTimestampTypeMappingInput();
```

- *Type:* java.lang.String

---

##### `cortexEnabledCrossRegionInput`<sup>Optional</sup> <a name="cortexEnabledCrossRegionInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegionInput"></a>

```java
public java.lang.String getCortexEnabledCrossRegionInput();
```

- *Type:* java.lang.String

---

##### `cortexModelsAllowlistInput`<sup>Optional</sup> <a name="cortexModelsAllowlistInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlistInput"></a>

```java
public java.lang.String getCortexModelsAllowlistInput();
```

- *Type:* java.lang.String

---

##### `csvTimestampFormatInput`<sup>Optional</sup> <a name="csvTimestampFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormatInput"></a>

```java
public java.lang.String getCsvTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDaysInput"></a>

```java
public java.lang.Number getDataRetentionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `dateInputFormatInput`<sup>Optional</sup> <a name="dateInputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormatInput"></a>

```java
public java.lang.String getDateInputFormatInput();
```

- *Type:* java.lang.String

---

##### `dateOutputFormatInput`<sup>Optional</sup> <a name="dateOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormatInput"></a>

```java
public java.lang.String getDateOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `defaultDdlCollationInput`<sup>Optional</sup> <a name="defaultDdlCollationInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollationInput"></a>

```java
public java.lang.String getDefaultDdlCollationInput();
```

- *Type:* java.lang.String

---

##### `defaultNotebookComputePoolCpuInput`<sup>Optional</sup> <a name="defaultNotebookComputePoolCpuInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpuInput"></a>

```java
public java.lang.String getDefaultNotebookComputePoolCpuInput();
```

- *Type:* java.lang.String

---

##### `defaultNotebookComputePoolGpuInput`<sup>Optional</sup> <a name="defaultNotebookComputePoolGpuInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpuInput"></a>

```java
public java.lang.String getDefaultNotebookComputePoolGpuInput();
```

- *Type:* java.lang.String

---

##### `defaultNullOrderingInput`<sup>Optional</sup> <a name="defaultNullOrderingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrderingInput"></a>

```java
public java.lang.String getDefaultNullOrderingInput();
```

- *Type:* java.lang.String

---

##### `defaultStreamlitNotebookWarehouseInput`<sup>Optional</sup> <a name="defaultStreamlitNotebookWarehouseInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouseInput"></a>

```java
public java.lang.String getDefaultStreamlitNotebookWarehouseInput();
```

- *Type:* java.lang.String

---

##### `disableUiDownloadButtonInput`<sup>Optional</sup> <a name="disableUiDownloadButtonInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButtonInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableUiDownloadButtonInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `disableUserPrivilegeGrantsInput`<sup>Optional</sup> <a name="disableUserPrivilegeGrantsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrantsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisableUserPrivilegeGrantsInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableAutomaticSensitiveDataClassificationLogInput`<sup>Optional</sup> <a name="enableAutomaticSensitiveDataClassificationLogInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLogInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutomaticSensitiveDataClassificationLogInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableEgressCostOptimizerInput`<sup>Optional</sup> <a name="enableEgressCostOptimizerInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizerInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableEgressCostOptimizerInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableIdentifierFirstLoginInput`<sup>Optional</sup> <a name="enableIdentifierFirstLoginInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLoginInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableIdentifierFirstLoginInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableInternalStagesPrivatelinkInput`<sup>Optional</sup> <a name="enableInternalStagesPrivatelinkInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelinkInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableInternalStagesPrivatelinkInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForImageRepositoryInput`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepositoryInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableTriSecretAndRekeyOptOutForImageRepositoryInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableUnhandledExceptionsReportingInput`<sup>Optional</sup> <a name="enableUnhandledExceptionsReportingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReportingInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnhandledExceptionsReportingInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableUnloadPhysicalTypeOptimizationInput`<sup>Optional</sup> <a name="enableUnloadPhysicalTypeOptimizationInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimizationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnloadPhysicalTypeOptimizationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableUnredactedQuerySyntaxErrorInput`<sup>Optional</sup> <a name="enableUnredactedQuerySyntaxErrorInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxErrorInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnredactedQuerySyntaxErrorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableUnredactedSecureObjectErrorInput`<sup>Optional</sup> <a name="enableUnredactedSecureObjectErrorInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectErrorInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnredactedSecureObjectErrorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enforceNetworkRulesForInternalStagesInput`<sup>Optional</sup> <a name="enforceNetworkRulesForInternalStagesInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStagesInput"></a>

```java
public java.lang.Boolean|IResolvable getEnforceNetworkRulesForInternalStagesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `errorOnNondeterministicMergeInput`<sup>Optional</sup> <a name="errorOnNondeterministicMergeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMergeInput"></a>

```java
public java.lang.Boolean|IResolvable getErrorOnNondeterministicMergeInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `errorOnNondeterministicUpdateInput`<sup>Optional</sup> <a name="errorOnNondeterministicUpdateInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getErrorOnNondeterministicUpdateInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `eventTableInput`<sup>Optional</sup> <a name="eventTableInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTableInput"></a>

```java
public java.lang.String getEventTableInput();
```

- *Type:* java.lang.String

---

##### `externalOauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="externalOauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput"></a>

```java
public java.lang.Boolean|IResolvable getExternalOauthAddPrivilegedRolesToBlockedListInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolumeInput"></a>

```java
public java.lang.String getExternalVolumeInput();
```

- *Type:* java.lang.String

---

##### `featurePolicyInput`<sup>Optional</sup> <a name="featurePolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicyInput"></a>

```java
public java.lang.String getFeaturePolicyInput();
```

- *Type:* java.lang.String

---

##### `geographyOutputFormatInput`<sup>Optional</sup> <a name="geographyOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormatInput"></a>

```java
public java.lang.String getGeographyOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `geometryOutputFormatInput`<sup>Optional</sup> <a name="geometryOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormatInput"></a>

```java
public java.lang.String getGeometryOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `hybridTableLockTimeoutInput`<sup>Optional</sup> <a name="hybridTableLockTimeoutInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeoutInput"></a>

```java
public java.lang.Number getHybridTableLockTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialReplicationSizeLimitInTbInput`<sup>Optional</sup> <a name="initialReplicationSizeLimitInTbInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTbInput"></a>

```java
public java.lang.String getInitialReplicationSizeLimitInTbInput();
```

- *Type:* java.lang.String

---

##### `jdbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="jdbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsIntInput"></a>

```java
public java.lang.Boolean|IResolvable getJdbcTreatDecimalAsIntInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jdbcTreatTimestampNtzAsUtcInput`<sup>Optional</sup> <a name="jdbcTreatTimestampNtzAsUtcInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtcInput"></a>

```java
public java.lang.Boolean|IResolvable getJdbcTreatTimestampNtzAsUtcInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jdbcUseSessionTimezoneInput`<sup>Optional</sup> <a name="jdbcUseSessionTimezoneInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezoneInput"></a>

```java
public java.lang.Boolean|IResolvable getJdbcUseSessionTimezoneInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jsonIndentInput`<sup>Optional</sup> <a name="jsonIndentInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndentInput"></a>

```java
public java.lang.Number getJsonIndentInput();
```

- *Type:* java.lang.Number

---

##### `jsTreatIntegerAsBigintInput`<sup>Optional</sup> <a name="jsTreatIntegerAsBigintInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigintInput"></a>

```java
public java.lang.Boolean|IResolvable getJsTreatIntegerAsBigintInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `listingAutoFulfillmentReplicationRefreshScheduleInput`<sup>Optional</sup> <a name="listingAutoFulfillmentReplicationRefreshScheduleInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput"></a>

```java
public java.lang.String getListingAutoFulfillmentReplicationRefreshScheduleInput();
```

- *Type:* java.lang.String

---

##### `lockTimeoutInput`<sup>Optional</sup> <a name="lockTimeoutInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeoutInput"></a>

```java
public java.lang.Number getLockTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyLevelInput`<sup>Optional</sup> <a name="maxConcurrencyLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevelInput"></a>

```java
public java.lang.Number getMaxConcurrencyLevelInput();
```

- *Type:* java.lang.Number

---

##### `maxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="maxDataExtensionTimeInDaysInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDaysInput"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `metricLevelInput`<sup>Optional</sup> <a name="metricLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevelInput"></a>

```java
public java.lang.String getMetricLevelInput();
```

- *Type:* java.lang.String

---

##### `minDataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="minDataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDaysInput"></a>

```java
public java.lang.Number getMinDataRetentionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `multiStatementCountInput`<sup>Optional</sup> <a name="multiStatementCountInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCountInput"></a>

```java
public java.lang.Number getMultiStatementCountInput();
```

- *Type:* java.lang.Number

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicyInput"></a>

```java
public java.lang.String getNetworkPolicyInput();
```

- *Type:* java.lang.String

---

##### `noorderSequenceAsDefaultInput`<sup>Optional</sup> <a name="noorderSequenceAsDefaultInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefaultInput"></a>

```java
public java.lang.Boolean|IResolvable getNoorderSequenceAsDefaultInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `oauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="oauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedListInput"></a>

```java
public java.lang.Boolean|IResolvable getOauthAddPrivilegedRolesToBlockedListInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `odbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="odbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsIntInput"></a>

```java
public java.lang.Boolean|IResolvable getOdbcTreatDecimalAsIntInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `packagesPolicyInput`<sup>Optional</sup> <a name="packagesPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicyInput"></a>

```java
public java.lang.String getPackagesPolicyInput();
```

- *Type:* java.lang.String

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicyInput"></a>

```java
public java.lang.String getPasswordPolicyInput();
```

- *Type:* java.lang.String

---

##### `periodicDataRekeyingInput`<sup>Optional</sup> <a name="periodicDataRekeyingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeyingInput"></a>

```java
public java.lang.Boolean|IResolvable getPeriodicDataRekeyingInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pipeExecutionPausedInput`<sup>Optional</sup> <a name="pipeExecutionPausedInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPausedInput"></a>

```java
public java.lang.Boolean|IResolvable getPipeExecutionPausedInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventUnloadToInlineUrlInput`<sup>Optional</sup> <a name="preventUnloadToInlineUrlInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrlInput"></a>

```java
public java.lang.Boolean|IResolvable getPreventUnloadToInlineUrlInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventUnloadToInternalStagesInput`<sup>Optional</sup> <a name="preventUnloadToInternalStagesInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStagesInput"></a>

```java
public java.lang.Boolean|IResolvable getPreventUnloadToInternalStagesInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pythonProfilerModulesInput`<sup>Optional</sup> <a name="pythonProfilerModulesInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModulesInput"></a>

```java
public java.lang.String getPythonProfilerModulesInput();
```

- *Type:* java.lang.String

---

##### `pythonProfilerTargetStageInput`<sup>Optional</sup> <a name="pythonProfilerTargetStageInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStageInput"></a>

```java
public java.lang.String getPythonProfilerTargetStageInput();
```

- *Type:* java.lang.String

---

##### `queryTagInput`<sup>Optional</sup> <a name="queryTagInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTagInput"></a>

```java
public java.lang.String getQueryTagInput();
```

- *Type:* java.lang.String

---

##### `quotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCaseInput"></a>

```java
public java.lang.Boolean|IResolvable getQuotedIdentifiersIgnoreCaseInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharactersInput"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharactersInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireStorageIntegrationForStageCreationInput`<sup>Optional</sup> <a name="requireStorageIntegrationForStageCreationInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreationInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireStorageIntegrationForStageCreationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireStorageIntegrationForStageOperationInput`<sup>Optional</sup> <a name="requireStorageIntegrationForStageOperationInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperationInput"></a>

```java
public java.lang.Boolean|IResolvable getRequireStorageIntegrationForStageOperationInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `resourceMonitorInput`<sup>Optional</sup> <a name="resourceMonitorInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitorInput"></a>

```java
public java.lang.String getResourceMonitorInput();
```

- *Type:* java.lang.String

---

##### `rowsPerResultsetInput`<sup>Optional</sup> <a name="rowsPerResultsetInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultsetInput"></a>

```java
public java.lang.Number getRowsPerResultsetInput();
```

- *Type:* java.lang.Number

---

##### `s3StageVpceDnsNameInput`<sup>Optional</sup> <a name="s3StageVpceDnsNameInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsNameInput"></a>

```java
public java.lang.String getS3StageVpceDnsNameInput();
```

- *Type:* java.lang.String

---

##### `samlIdentityProviderInput`<sup>Optional</sup> <a name="samlIdentityProviderInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProviderInput"></a>

```java
public java.lang.String getSamlIdentityProviderInput();
```

- *Type:* java.lang.String

---

##### `searchPathInput`<sup>Optional</sup> <a name="searchPathInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPathInput"></a>

```java
public java.lang.String getSearchPathInput();
```

- *Type:* java.lang.String

---

##### `serverlessTaskMaxStatementSizeInput`<sup>Optional</sup> <a name="serverlessTaskMaxStatementSizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSizeInput"></a>

```java
public java.lang.String getServerlessTaskMaxStatementSizeInput();
```

- *Type:* java.lang.String

---

##### `serverlessTaskMinStatementSizeInput`<sup>Optional</sup> <a name="serverlessTaskMinStatementSizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSizeInput"></a>

```java
public java.lang.String getServerlessTaskMinStatementSizeInput();
```

- *Type:* java.lang.String

---

##### `sessionPolicyInput`<sup>Optional</sup> <a name="sessionPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicyInput"></a>

```java
public java.lang.String getSessionPolicyInput();
```

- *Type:* java.lang.String

---

##### `simulatedDataSharingConsumerInput`<sup>Optional</sup> <a name="simulatedDataSharingConsumerInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumerInput"></a>

```java
public java.lang.String getSimulatedDataSharingConsumerInput();
```

- *Type:* java.lang.String

---

##### `ssoLoginPageInput`<sup>Optional</sup> <a name="ssoLoginPageInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPageInput"></a>

```java
public java.lang.Boolean|IResolvable getSsoLoginPageInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `statementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementQueuedTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `statementTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStatementTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `storageSerializationPolicyInput`<sup>Optional</sup> <a name="storageSerializationPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicyInput"></a>

```java
public java.lang.String getStorageSerializationPolicyInput();
```

- *Type:* java.lang.String

---

##### `strictJsonOutputInput`<sup>Optional</sup> <a name="strictJsonOutputInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutputInput"></a>

```java
public java.lang.Boolean|IResolvable getStrictJsonOutputInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `suspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="suspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailuresInput"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailuresInput();
```

- *Type:* java.lang.Number

---

##### `taskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="taskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttemptsInput"></a>

```java
public java.lang.Number getTaskAutoRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `timeInputFormatInput`<sup>Optional</sup> <a name="timeInputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormatInput"></a>

```java
public java.lang.String getTimeInputFormatInput();
```

- *Type:* java.lang.String

---

##### `timeOutputFormatInput`<sup>Optional</sup> <a name="timeOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormatInput"></a>

```java
public java.lang.String getTimeOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeoutsInput"></a>

```java
public IResolvable|CurrentAccountTimeouts getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>

---

##### `timestampDayIsAlways24HInput`<sup>Optional</sup> <a name="timestampDayIsAlways24HInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24HInput"></a>

```java
public java.lang.Boolean|IResolvable getTimestampDayIsAlways24HInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timestampInputFormatInput`<sup>Optional</sup> <a name="timestampInputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormatInput"></a>

```java
public java.lang.String getTimestampInputFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampLtzOutputFormatInput`<sup>Optional</sup> <a name="timestampLtzOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormatInput"></a>

```java
public java.lang.String getTimestampLtzOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampNtzOutputFormatInput`<sup>Optional</sup> <a name="timestampNtzOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormatInput"></a>

```java
public java.lang.String getTimestampNtzOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampOutputFormatInput`<sup>Optional</sup> <a name="timestampOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormatInput"></a>

```java
public java.lang.String getTimestampOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampTypeMappingInput`<sup>Optional</sup> <a name="timestampTypeMappingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMappingInput"></a>

```java
public java.lang.String getTimestampTypeMappingInput();
```

- *Type:* java.lang.String

---

##### `timestampTzOutputFormatInput`<sup>Optional</sup> <a name="timestampTzOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormatInput"></a>

```java
public java.lang.String getTimestampTzOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `traceLevelInput`<sup>Optional</sup> <a name="traceLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevelInput"></a>

```java
public java.lang.String getTraceLevelInput();
```

- *Type:* java.lang.String

---

##### `transactionAbortOnErrorInput`<sup>Optional</sup> <a name="transactionAbortOnErrorInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnErrorInput"></a>

```java
public java.lang.Boolean|IResolvable getTransactionAbortOnErrorInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `transactionDefaultIsolationLevelInput`<sup>Optional</sup> <a name="transactionDefaultIsolationLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevelInput"></a>

```java
public java.lang.String getTransactionDefaultIsolationLevelInput();
```

- *Type:* java.lang.String

---

##### `twoDigitCenturyStartInput`<sup>Optional</sup> <a name="twoDigitCenturyStartInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStartInput"></a>

```java
public java.lang.Number getTwoDigitCenturyStartInput();
```

- *Type:* java.lang.Number

---

##### `unsupportedDdlActionInput`<sup>Optional</sup> <a name="unsupportedDdlActionInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlActionInput"></a>

```java
public java.lang.String getUnsupportedDdlActionInput();
```

- *Type:* java.lang.String

---

##### `useCachedResultInput`<sup>Optional</sup> <a name="useCachedResultInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResultInput"></a>

```java
public java.lang.Boolean|IResolvable getUseCachedResultInput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `userTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSizeInput"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSizeInput();
```

- *Type:* java.lang.String

---

##### `userTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```java
public java.lang.Number getUserTaskMinimumTriggerIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `userTaskTimeoutMsInput`<sup>Optional</sup> <a name="userTaskTimeoutMsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMsInput"></a>

```java
public java.lang.Number getUserTaskTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `weekOfYearPolicyInput`<sup>Optional</sup> <a name="weekOfYearPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicyInput"></a>

```java
public java.lang.Number getWeekOfYearPolicyInput();
```

- *Type:* java.lang.Number

---

##### `weekStartInput`<sup>Optional</sup> <a name="weekStartInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStartInput"></a>

```java
public java.lang.Number getWeekStartInput();
```

- *Type:* java.lang.Number

---

##### `abortDetachedQuery`<sup>Required</sup> <a name="abortDetachedQuery" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQuery"></a>

```java
public java.lang.Boolean|IResolvable getAbortDetachedQuery();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `activePythonProfiler`<sup>Required</sup> <a name="activePythonProfiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfiler"></a>

```java
public java.lang.String getActivePythonProfiler();
```

- *Type:* java.lang.String

---

##### `allowClientMfaCaching`<sup>Required</sup> <a name="allowClientMfaCaching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCaching"></a>

```java
public java.lang.Boolean|IResolvable getAllowClientMfaCaching();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `allowIdToken`<sup>Required</sup> <a name="allowIdToken" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdToken"></a>

```java
public java.lang.Boolean|IResolvable getAllowIdToken();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `authenticationPolicy`<sup>Required</sup> <a name="authenticationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommit"></a>

```java
public java.lang.Boolean|IResolvable getAutocommit();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `baseLocationPrefix`<sup>Required</sup> <a name="baseLocationPrefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefix"></a>

```java
public java.lang.String getBaseLocationPrefix();
```

- *Type:* java.lang.String

---

##### `binaryInputFormat`<sup>Required</sup> <a name="binaryInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormat"></a>

```java
public java.lang.String getBinaryInputFormat();
```

- *Type:* java.lang.String

---

##### `binaryOutputFormat`<sup>Required</sup> <a name="binaryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormat"></a>

```java
public java.lang.String getBinaryOutputFormat();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `catalogSync`<sup>Required</sup> <a name="catalogSync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSync"></a>

```java
public java.lang.String getCatalogSync();
```

- *Type:* java.lang.String

---

##### `clientEnableLogInfoStatementParameters`<sup>Required</sup> <a name="clientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParameters"></a>

```java
public java.lang.Boolean|IResolvable getClientEnableLogInfoStatementParameters();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientEncryptionKeySize`<sup>Required</sup> <a name="clientEncryptionKeySize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySize"></a>

```java
public java.lang.Number getClientEncryptionKeySize();
```

- *Type:* java.lang.Number

---

##### `clientMemoryLimit`<sup>Required</sup> <a name="clientMemoryLimit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimit"></a>

```java
public java.lang.Number getClientMemoryLimit();
```

- *Type:* java.lang.Number

---

##### `clientMetadataRequestUseConnectionCtx`<sup>Required</sup> <a name="clientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtx"></a>

```java
public java.lang.Boolean|IResolvable getClientMetadataRequestUseConnectionCtx();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientMetadataUseSessionDatabase`<sup>Required</sup> <a name="clientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabase"></a>

```java
public java.lang.Boolean|IResolvable getClientMetadataUseSessionDatabase();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientPrefetchThreads`<sup>Required</sup> <a name="clientPrefetchThreads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreads"></a>

```java
public java.lang.Number getClientPrefetchThreads();
```

- *Type:* java.lang.Number

---

##### `clientResultChunkSize`<sup>Required</sup> <a name="clientResultChunkSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSize"></a>

```java
public java.lang.Number getClientResultChunkSize();
```

- *Type:* java.lang.Number

---

##### `clientResultColumnCaseInsensitive`<sup>Required</sup> <a name="clientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitive"></a>

```java
public java.lang.Boolean|IResolvable getClientResultColumnCaseInsensitive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientSessionKeepAlive`<sup>Required</sup> <a name="clientSessionKeepAlive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAlive"></a>

```java
public java.lang.Boolean|IResolvable getClientSessionKeepAlive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `clientSessionKeepAliveHeartbeatFrequency`<sup>Required</sup> <a name="clientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```java
public java.lang.Number getClientSessionKeepAliveHeartbeatFrequency();
```

- *Type:* java.lang.Number

---

##### `clientTimestampTypeMapping`<sup>Required</sup> <a name="clientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMapping"></a>

```java
public java.lang.String getClientTimestampTypeMapping();
```

- *Type:* java.lang.String

---

##### `cortexEnabledCrossRegion`<sup>Required</sup> <a name="cortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegion"></a>

```java
public java.lang.String getCortexEnabledCrossRegion();
```

- *Type:* java.lang.String

---

##### `cortexModelsAllowlist`<sup>Required</sup> <a name="cortexModelsAllowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlist"></a>

```java
public java.lang.String getCortexModelsAllowlist();
```

- *Type:* java.lang.String

---

##### `csvTimestampFormat`<sup>Required</sup> <a name="csvTimestampFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormat"></a>

```java
public java.lang.String getCsvTimestampFormat();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `dateInputFormat`<sup>Required</sup> <a name="dateInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormat"></a>

```java
public java.lang.String getDateInputFormat();
```

- *Type:* java.lang.String

---

##### `dateOutputFormat`<sup>Required</sup> <a name="dateOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormat"></a>

```java
public java.lang.String getDateOutputFormat();
```

- *Type:* java.lang.String

---

##### `defaultDdlCollation`<sup>Required</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollation"></a>

```java
public java.lang.String getDefaultDdlCollation();
```

- *Type:* java.lang.String

---

##### `defaultNotebookComputePoolCpu`<sup>Required</sup> <a name="defaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpu"></a>

```java
public java.lang.String getDefaultNotebookComputePoolCpu();
```

- *Type:* java.lang.String

---

##### `defaultNotebookComputePoolGpu`<sup>Required</sup> <a name="defaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpu"></a>

```java
public java.lang.String getDefaultNotebookComputePoolGpu();
```

- *Type:* java.lang.String

---

##### `defaultNullOrdering`<sup>Required</sup> <a name="defaultNullOrdering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrdering"></a>

```java
public java.lang.String getDefaultNullOrdering();
```

- *Type:* java.lang.String

---

##### `defaultStreamlitNotebookWarehouse`<sup>Required</sup> <a name="defaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouse"></a>

```java
public java.lang.String getDefaultStreamlitNotebookWarehouse();
```

- *Type:* java.lang.String

---

##### `disableUiDownloadButton`<sup>Required</sup> <a name="disableUiDownloadButton" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButton"></a>

```java
public java.lang.Boolean|IResolvable getDisableUiDownloadButton();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `disableUserPrivilegeGrants`<sup>Required</sup> <a name="disableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrants"></a>

```java
public java.lang.Boolean|IResolvable getDisableUserPrivilegeGrants();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableAutomaticSensitiveDataClassificationLog`<sup>Required</sup> <a name="enableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLog"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutomaticSensitiveDataClassificationLog();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableEgressCostOptimizer`<sup>Required</sup> <a name="enableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizer"></a>

```java
public java.lang.Boolean|IResolvable getEnableEgressCostOptimizer();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableIdentifierFirstLogin`<sup>Required</sup> <a name="enableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLogin"></a>

```java
public java.lang.Boolean|IResolvable getEnableIdentifierFirstLogin();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableInternalStagesPrivatelink`<sup>Required</sup> <a name="enableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelink"></a>

```java
public java.lang.Boolean|IResolvable getEnableInternalStagesPrivatelink();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForImageRepository`<sup>Required</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```java
public java.lang.Boolean|IResolvable getEnableTriSecretAndRekeyOptOutForImageRepository();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Required</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```java
public java.lang.Boolean|IResolvable getEnableTriSecretAndRekeyOptOutForSpcsBlockStorage();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableUnhandledExceptionsReporting`<sup>Required</sup> <a name="enableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReporting"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnhandledExceptionsReporting();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableUnloadPhysicalTypeOptimization`<sup>Required</sup> <a name="enableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimization"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnloadPhysicalTypeOptimization();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableUnredactedQuerySyntaxError`<sup>Required</sup> <a name="enableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxError"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnredactedQuerySyntaxError();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enableUnredactedSecureObjectError`<sup>Required</sup> <a name="enableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectError"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnredactedSecureObjectError();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `enforceNetworkRulesForInternalStages`<sup>Required</sup> <a name="enforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStages"></a>

```java
public java.lang.Boolean|IResolvable getEnforceNetworkRulesForInternalStages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `errorOnNondeterministicMerge`<sup>Required</sup> <a name="errorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMerge"></a>

```java
public java.lang.Boolean|IResolvable getErrorOnNondeterministicMerge();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `errorOnNondeterministicUpdate`<sup>Required</sup> <a name="errorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdate"></a>

```java
public java.lang.Boolean|IResolvable getErrorOnNondeterministicUpdate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTable"></a>

```java
public java.lang.String getEventTable();
```

- *Type:* java.lang.String

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```java
public java.lang.Boolean|IResolvable getExternalOauthAddPrivilegedRolesToBlockedList();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

---

##### `featurePolicy`<sup>Required</sup> <a name="featurePolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicy"></a>

```java
public java.lang.String getFeaturePolicy();
```

- *Type:* java.lang.String

---

##### `geographyOutputFormat`<sup>Required</sup> <a name="geographyOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormat"></a>

```java
public java.lang.String getGeographyOutputFormat();
```

- *Type:* java.lang.String

---

##### `geometryOutputFormat`<sup>Required</sup> <a name="geometryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormat"></a>

```java
public java.lang.String getGeometryOutputFormat();
```

- *Type:* java.lang.String

---

##### `hybridTableLockTimeout`<sup>Required</sup> <a name="hybridTableLockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeout"></a>

```java
public java.lang.Number getHybridTableLockTimeout();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialReplicationSizeLimitInTb`<sup>Required</sup> <a name="initialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTb"></a>

```java
public java.lang.String getInitialReplicationSizeLimitInTb();
```

- *Type:* java.lang.String

---

##### `jdbcTreatDecimalAsInt`<sup>Required</sup> <a name="jdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsInt"></a>

```java
public java.lang.Boolean|IResolvable getJdbcTreatDecimalAsInt();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jdbcTreatTimestampNtzAsUtc`<sup>Required</sup> <a name="jdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtc"></a>

```java
public java.lang.Boolean|IResolvable getJdbcTreatTimestampNtzAsUtc();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jdbcUseSessionTimezone`<sup>Required</sup> <a name="jdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezone"></a>

```java
public java.lang.Boolean|IResolvable getJdbcUseSessionTimezone();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `jsonIndent`<sup>Required</sup> <a name="jsonIndent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndent"></a>

```java
public java.lang.Number getJsonIndent();
```

- *Type:* java.lang.Number

---

##### `jsTreatIntegerAsBigint`<sup>Required</sup> <a name="jsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigint"></a>

```java
public java.lang.Boolean|IResolvable getJsTreatIntegerAsBigint();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `listingAutoFulfillmentReplicationRefreshSchedule`<sup>Required</sup> <a name="listingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```java
public java.lang.String getListingAutoFulfillmentReplicationRefreshSchedule();
```

- *Type:* java.lang.String

---

##### `lockTimeout`<sup>Required</sup> <a name="lockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeout"></a>

```java
public java.lang.Number getLockTimeout();
```

- *Type:* java.lang.Number

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyLevel`<sup>Required</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevel"></a>

```java
public java.lang.Number getMaxConcurrencyLevel();
```

- *Type:* java.lang.Number

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDays"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `metricLevel`<sup>Required</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevel"></a>

```java
public java.lang.String getMetricLevel();
```

- *Type:* java.lang.String

---

##### `minDataRetentionTimeInDays`<sup>Required</sup> <a name="minDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDays"></a>

```java
public java.lang.Number getMinDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `multiStatementCount`<sup>Required</sup> <a name="multiStatementCount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCount"></a>

```java
public java.lang.Number getMultiStatementCount();
```

- *Type:* java.lang.Number

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

---

##### `noorderSequenceAsDefault`<sup>Required</sup> <a name="noorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefault"></a>

```java
public java.lang.Boolean|IResolvable getNoorderSequenceAsDefault();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `oauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="oauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedList"></a>

```java
public java.lang.Boolean|IResolvable getOauthAddPrivilegedRolesToBlockedList();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `odbcTreatDecimalAsInt`<sup>Required</sup> <a name="odbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsInt"></a>

```java
public java.lang.Boolean|IResolvable getOdbcTreatDecimalAsInt();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `packagesPolicy`<sup>Required</sup> <a name="packagesPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicy"></a>

```java
public java.lang.String getPackagesPolicy();
```

- *Type:* java.lang.String

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

---

##### `periodicDataRekeying`<sup>Required</sup> <a name="periodicDataRekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeying"></a>

```java
public java.lang.Boolean|IResolvable getPeriodicDataRekeying();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pipeExecutionPaused`<sup>Required</sup> <a name="pipeExecutionPaused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPaused"></a>

```java
public java.lang.Boolean|IResolvable getPipeExecutionPaused();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventUnloadToInlineUrl`<sup>Required</sup> <a name="preventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrl"></a>

```java
public java.lang.Boolean|IResolvable getPreventUnloadToInlineUrl();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `preventUnloadToInternalStages`<sup>Required</sup> <a name="preventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStages"></a>

```java
public java.lang.Boolean|IResolvable getPreventUnloadToInternalStages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `pythonProfilerModules`<sup>Required</sup> <a name="pythonProfilerModules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModules"></a>

```java
public java.lang.String getPythonProfilerModules();
```

- *Type:* java.lang.String

---

##### `pythonProfilerTargetStage`<sup>Required</sup> <a name="pythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStage"></a>

```java
public java.lang.String getPythonProfilerTargetStage();
```

- *Type:* java.lang.String

---

##### `queryTag`<sup>Required</sup> <a name="queryTag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTag"></a>

```java
public java.lang.String getQueryTag();
```

- *Type:* java.lang.String

---

##### `quotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCase"></a>

```java
public java.lang.Boolean|IResolvable getQuotedIdentifiersIgnoreCase();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharacters"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireStorageIntegrationForStageCreation`<sup>Required</sup> <a name="requireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreation"></a>

```java
public java.lang.Boolean|IResolvable getRequireStorageIntegrationForStageCreation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `requireStorageIntegrationForStageOperation`<sup>Required</sup> <a name="requireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperation"></a>

```java
public java.lang.Boolean|IResolvable getRequireStorageIntegrationForStageOperation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `resourceMonitor`<sup>Required</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitor"></a>

```java
public java.lang.String getResourceMonitor();
```

- *Type:* java.lang.String

---

##### `rowsPerResultset`<sup>Required</sup> <a name="rowsPerResultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultset"></a>

```java
public java.lang.Number getRowsPerResultset();
```

- *Type:* java.lang.Number

---

##### `s3StageVpceDnsName`<sup>Required</sup> <a name="s3StageVpceDnsName" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsName"></a>

```java
public java.lang.String getS3StageVpceDnsName();
```

- *Type:* java.lang.String

---

##### `samlIdentityProvider`<sup>Required</sup> <a name="samlIdentityProvider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProvider"></a>

```java
public java.lang.String getSamlIdentityProvider();
```

- *Type:* java.lang.String

---

##### `searchPath`<sup>Required</sup> <a name="searchPath" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPath"></a>

```java
public java.lang.String getSearchPath();
```

- *Type:* java.lang.String

---

##### `serverlessTaskMaxStatementSize`<sup>Required</sup> <a name="serverlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSize"></a>

```java
public java.lang.String getServerlessTaskMaxStatementSize();
```

- *Type:* java.lang.String

---

##### `serverlessTaskMinStatementSize`<sup>Required</sup> <a name="serverlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSize"></a>

```java
public java.lang.String getServerlessTaskMinStatementSize();
```

- *Type:* java.lang.String

---

##### `sessionPolicy`<sup>Required</sup> <a name="sessionPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicy"></a>

```java
public java.lang.String getSessionPolicy();
```

- *Type:* java.lang.String

---

##### `simulatedDataSharingConsumer`<sup>Required</sup> <a name="simulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumer"></a>

```java
public java.lang.String getSimulatedDataSharingConsumer();
```

- *Type:* java.lang.String

---

##### `ssoLoginPage`<sup>Required</sup> <a name="ssoLoginPage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPage"></a>

```java
public java.lang.Boolean|IResolvable getSsoLoginPage();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicy"></a>

```java
public java.lang.String getStorageSerializationPolicy();
```

- *Type:* java.lang.String

---

##### `strictJsonOutput`<sup>Required</sup> <a name="strictJsonOutput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutput"></a>

```java
public java.lang.Boolean|IResolvable getStrictJsonOutput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `suspendTaskAfterNumFailures`<sup>Required</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailures"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailures();
```

- *Type:* java.lang.Number

---

##### `taskAutoRetryAttempts`<sup>Required</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttempts"></a>

```java
public java.lang.Number getTaskAutoRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `timeInputFormat`<sup>Required</sup> <a name="timeInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormat"></a>

```java
public java.lang.String getTimeInputFormat();
```

- *Type:* java.lang.String

---

##### `timeOutputFormat`<sup>Required</sup> <a name="timeOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormat"></a>

```java
public java.lang.String getTimeOutputFormat();
```

- *Type:* java.lang.String

---

##### `timestampDayIsAlways24H`<sup>Required</sup> <a name="timestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24H"></a>

```java
public java.lang.Boolean|IResolvable getTimestampDayIsAlways24H();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `timestampInputFormat`<sup>Required</sup> <a name="timestampInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormat"></a>

```java
public java.lang.String getTimestampInputFormat();
```

- *Type:* java.lang.String

---

##### `timestampLtzOutputFormat`<sup>Required</sup> <a name="timestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormat"></a>

```java
public java.lang.String getTimestampLtzOutputFormat();
```

- *Type:* java.lang.String

---

##### `timestampNtzOutputFormat`<sup>Required</sup> <a name="timestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormat"></a>

```java
public java.lang.String getTimestampNtzOutputFormat();
```

- *Type:* java.lang.String

---

##### `timestampOutputFormat`<sup>Required</sup> <a name="timestampOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormat"></a>

```java
public java.lang.String getTimestampOutputFormat();
```

- *Type:* java.lang.String

---

##### `timestampTypeMapping`<sup>Required</sup> <a name="timestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMapping"></a>

```java
public java.lang.String getTimestampTypeMapping();
```

- *Type:* java.lang.String

---

##### `timestampTzOutputFormat`<sup>Required</sup> <a name="timestampTzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormat"></a>

```java
public java.lang.String getTimestampTzOutputFormat();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

---

##### `transactionAbortOnError`<sup>Required</sup> <a name="transactionAbortOnError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnError"></a>

```java
public java.lang.Boolean|IResolvable getTransactionAbortOnError();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `transactionDefaultIsolationLevel`<sup>Required</sup> <a name="transactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevel"></a>

```java
public java.lang.String getTransactionDefaultIsolationLevel();
```

- *Type:* java.lang.String

---

##### `twoDigitCenturyStart`<sup>Required</sup> <a name="twoDigitCenturyStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStart"></a>

```java
public java.lang.Number getTwoDigitCenturyStart();
```

- *Type:* java.lang.Number

---

##### `unsupportedDdlAction`<sup>Required</sup> <a name="unsupportedDdlAction" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlAction"></a>

```java
public java.lang.String getUnsupportedDdlAction();
```

- *Type:* java.lang.String

---

##### `useCachedResult`<sup>Required</sup> <a name="useCachedResult" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResult"></a>

```java
public java.lang.Boolean|IResolvable getUseCachedResult();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

---

##### `userTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSize"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSize();
```

- *Type:* java.lang.String

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```java
public java.lang.Number getUserTaskMinimumTriggerIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `userTaskTimeoutMs`<sup>Required</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMs"></a>

```java
public java.lang.Number getUserTaskTimeoutMs();
```

- *Type:* java.lang.Number

---

##### `weekOfYearPolicy`<sup>Required</sup> <a name="weekOfYearPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicy"></a>

```java
public java.lang.Number getWeekOfYearPolicy();
```

- *Type:* java.lang.Number

---

##### `weekStart`<sup>Required</sup> <a name="weekStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStart"></a>

```java
public java.lang.Number getWeekStart();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CurrentAccountConfig <a name="CurrentAccountConfig" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_account.CurrentAccountConfig;

CurrentAccountConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .abortDetachedQuery(java.lang.Boolean|IResolvable)
//  .activePythonProfiler(java.lang.String)
//  .allowClientMfaCaching(java.lang.Boolean|IResolvable)
//  .allowIdToken(java.lang.Boolean|IResolvable)
//  .authenticationPolicy(java.lang.String)
//  .autocommit(java.lang.Boolean|IResolvable)
//  .baseLocationPrefix(java.lang.String)
//  .binaryInputFormat(java.lang.String)
//  .binaryOutputFormat(java.lang.String)
//  .catalog(java.lang.String)
//  .catalogSync(java.lang.String)
//  .clientEnableLogInfoStatementParameters(java.lang.Boolean|IResolvable)
//  .clientEncryptionKeySize(java.lang.Number)
//  .clientMemoryLimit(java.lang.Number)
//  .clientMetadataRequestUseConnectionCtx(java.lang.Boolean|IResolvable)
//  .clientMetadataUseSessionDatabase(java.lang.Boolean|IResolvable)
//  .clientPrefetchThreads(java.lang.Number)
//  .clientResultChunkSize(java.lang.Number)
//  .clientResultColumnCaseInsensitive(java.lang.Boolean|IResolvable)
//  .clientSessionKeepAlive(java.lang.Boolean|IResolvable)
//  .clientSessionKeepAliveHeartbeatFrequency(java.lang.Number)
//  .clientTimestampTypeMapping(java.lang.String)
//  .cortexEnabledCrossRegion(java.lang.String)
//  .cortexModelsAllowlist(java.lang.String)
//  .csvTimestampFormat(java.lang.String)
//  .dataRetentionTimeInDays(java.lang.Number)
//  .dateInputFormat(java.lang.String)
//  .dateOutputFormat(java.lang.String)
//  .defaultDdlCollation(java.lang.String)
//  .defaultNotebookComputePoolCpu(java.lang.String)
//  .defaultNotebookComputePoolGpu(java.lang.String)
//  .defaultNullOrdering(java.lang.String)
//  .defaultStreamlitNotebookWarehouse(java.lang.String)
//  .disableUiDownloadButton(java.lang.Boolean|IResolvable)
//  .disableUserPrivilegeGrants(java.lang.Boolean|IResolvable)
//  .enableAutomaticSensitiveDataClassificationLog(java.lang.Boolean|IResolvable)
//  .enableEgressCostOptimizer(java.lang.Boolean|IResolvable)
//  .enableIdentifierFirstLogin(java.lang.Boolean|IResolvable)
//  .enableInternalStagesPrivatelink(java.lang.Boolean|IResolvable)
//  .enableTriSecretAndRekeyOptOutForImageRepository(java.lang.Boolean|IResolvable)
//  .enableTriSecretAndRekeyOptOutForSpcsBlockStorage(java.lang.Boolean|IResolvable)
//  .enableUnhandledExceptionsReporting(java.lang.Boolean|IResolvable)
//  .enableUnloadPhysicalTypeOptimization(java.lang.Boolean|IResolvable)
//  .enableUnredactedQuerySyntaxError(java.lang.Boolean|IResolvable)
//  .enableUnredactedSecureObjectError(java.lang.Boolean|IResolvable)
//  .enforceNetworkRulesForInternalStages(java.lang.Boolean|IResolvable)
//  .errorOnNondeterministicMerge(java.lang.Boolean|IResolvable)
//  .errorOnNondeterministicUpdate(java.lang.Boolean|IResolvable)
//  .eventTable(java.lang.String)
//  .externalOauthAddPrivilegedRolesToBlockedList(java.lang.Boolean|IResolvable)
//  .externalVolume(java.lang.String)
//  .featurePolicy(java.lang.String)
//  .geographyOutputFormat(java.lang.String)
//  .geometryOutputFormat(java.lang.String)
//  .hybridTableLockTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .initialReplicationSizeLimitInTb(java.lang.String)
//  .jdbcTreatDecimalAsInt(java.lang.Boolean|IResolvable)
//  .jdbcTreatTimestampNtzAsUtc(java.lang.Boolean|IResolvable)
//  .jdbcUseSessionTimezone(java.lang.Boolean|IResolvable)
//  .jsonIndent(java.lang.Number)
//  .jsTreatIntegerAsBigint(java.lang.Boolean|IResolvable)
//  .listingAutoFulfillmentReplicationRefreshSchedule(java.lang.String)
//  .lockTimeout(java.lang.Number)
//  .logLevel(java.lang.String)
//  .maxConcurrencyLevel(java.lang.Number)
//  .maxDataExtensionTimeInDays(java.lang.Number)
//  .metricLevel(java.lang.String)
//  .minDataRetentionTimeInDays(java.lang.Number)
//  .multiStatementCount(java.lang.Number)
//  .networkPolicy(java.lang.String)
//  .noorderSequenceAsDefault(java.lang.Boolean|IResolvable)
//  .oauthAddPrivilegedRolesToBlockedList(java.lang.Boolean|IResolvable)
//  .odbcTreatDecimalAsInt(java.lang.Boolean|IResolvable)
//  .packagesPolicy(java.lang.String)
//  .passwordPolicy(java.lang.String)
//  .periodicDataRekeying(java.lang.Boolean|IResolvable)
//  .pipeExecutionPaused(java.lang.Boolean|IResolvable)
//  .preventUnloadToInlineUrl(java.lang.Boolean|IResolvable)
//  .preventUnloadToInternalStages(java.lang.Boolean|IResolvable)
//  .pythonProfilerModules(java.lang.String)
//  .pythonProfilerTargetStage(java.lang.String)
//  .queryTag(java.lang.String)
//  .quotedIdentifiersIgnoreCase(java.lang.Boolean|IResolvable)
//  .replaceInvalidCharacters(java.lang.Boolean|IResolvable)
//  .requireStorageIntegrationForStageCreation(java.lang.Boolean|IResolvable)
//  .requireStorageIntegrationForStageOperation(java.lang.Boolean|IResolvable)
//  .resourceMonitor(java.lang.String)
//  .rowsPerResultset(java.lang.Number)
//  .s3StageVpceDnsName(java.lang.String)
//  .samlIdentityProvider(java.lang.String)
//  .searchPath(java.lang.String)
//  .serverlessTaskMaxStatementSize(java.lang.String)
//  .serverlessTaskMinStatementSize(java.lang.String)
//  .sessionPolicy(java.lang.String)
//  .simulatedDataSharingConsumer(java.lang.String)
//  .ssoLoginPage(java.lang.Boolean|IResolvable)
//  .statementQueuedTimeoutInSeconds(java.lang.Number)
//  .statementTimeoutInSeconds(java.lang.Number)
//  .storageSerializationPolicy(java.lang.String)
//  .strictJsonOutput(java.lang.Boolean|IResolvable)
//  .suspendTaskAfterNumFailures(java.lang.Number)
//  .taskAutoRetryAttempts(java.lang.Number)
//  .timeInputFormat(java.lang.String)
//  .timeOutputFormat(java.lang.String)
//  .timeouts(CurrentAccountTimeouts)
//  .timestampDayIsAlways24H(java.lang.Boolean|IResolvable)
//  .timestampInputFormat(java.lang.String)
//  .timestampLtzOutputFormat(java.lang.String)
//  .timestampNtzOutputFormat(java.lang.String)
//  .timestampOutputFormat(java.lang.String)
//  .timestampTypeMapping(java.lang.String)
//  .timestampTzOutputFormat(java.lang.String)
//  .timezone(java.lang.String)
//  .traceLevel(java.lang.String)
//  .transactionAbortOnError(java.lang.Boolean|IResolvable)
//  .transactionDefaultIsolationLevel(java.lang.String)
//  .twoDigitCenturyStart(java.lang.Number)
//  .unsupportedDdlAction(java.lang.String)
//  .useCachedResult(java.lang.Boolean|IResolvable)
//  .userTaskManagedInitialWarehouseSize(java.lang.String)
//  .userTaskMinimumTriggerIntervalInSeconds(java.lang.Number)
//  .userTaskTimeoutMs(java.lang.Number)
//  .weekOfYearPolicy(java.lang.Number)
//  .weekStart(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection\|com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.count">count</a></code> | <code>java.lang.Number\|com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner\|com.hashicorp.cdktf.LocalExecProvisioner\|com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.abortDetachedQuery">abortDetachedQuery</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.activePythonProfiler">activePythonProfiler</a></code> | <code>java.lang.String</code> | Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` \| `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowClientMfaCaching">allowClientMfaCaching</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowIdToken">allowIdToken</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.authenticationPolicy">authenticationPolicy</a></code> | <code>java.lang.String</code> | Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account. For more information about this resource, see [docs](./authentication_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.autocommit">autocommit</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether autocommit is enabled for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.baseLocationPrefix">baseLocationPrefix</a></code> | <code>java.lang.String</code> | Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryInputFormat">binaryInputFormat</a></code> | <code>java.lang.String</code> | The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryOutputFormat">binaryOutputFormat</a></code> | <code>java.lang.String</code> | The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the catalog for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalogSync">catalogSync</a></code> | <code>java.lang.String</code> | Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEnableLogInfoStatementParameters">clientEnableLogInfoStatementParameters</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEncryptionKeySize">clientEncryptionKeySize</a></code> | <code>java.lang.Number</code> | Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMemoryLimit">clientMemoryLimit</a></code> | <code>java.lang.Number</code> | Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataRequestUseConnectionCtx">clientMetadataRequestUseConnectionCtx</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataUseSessionDatabase">clientMetadataUseSessionDatabase</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientPrefetchThreads">clientPrefetchThreads</a></code> | <code>java.lang.Number</code> | Parameter that specifies the number of threads used by the client to pre-fetch large result sets. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultChunkSize">clientResultChunkSize</a></code> | <code>java.lang.Number</code> | Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultColumnCaseInsensitive">clientResultColumnCaseInsensitive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAlive">clientSessionKeepAlive</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency">clientSessionKeepAliveHeartbeatFrequency</a></code> | <code>java.lang.Number</code> | Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientTimestampTypeMapping">clientTimestampTypeMapping</a></code> | <code>java.lang.String</code> | Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` \| `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexEnabledCrossRegion">cortexEnabledCrossRegion</a></code> | <code>java.lang.String</code> | Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexModelsAllowlist">cortexModelsAllowlist</a></code> | <code>java.lang.String</code> | Specifies the models that users in the account can access. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.csvTimestampFormat">csvTimestampFormat</a></code> | <code>java.lang.String</code> | Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateInputFormat">dateInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateOutputFormat">dateOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>java.lang.String</code> | Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolCpu">defaultNotebookComputePoolCpu</a></code> | <code>java.lang.String</code> | Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolGpu">defaultNotebookComputePoolGpu</a></code> | <code>java.lang.String</code> | Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNullOrdering">defaultNullOrdering</a></code> | <code>java.lang.String</code> | Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` \| `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultStreamlitNotebookWarehouse">defaultStreamlitNotebookWarehouse</a></code> | <code>java.lang.String</code> | Specifies the name of the default warehouse to use when creating a notebook. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUiDownloadButton">disableUiDownloadButton</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUserPrivilegeGrants">disableUserPrivilegeGrants</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether users in an account can grant privileges directly to other users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableAutomaticSensitiveDataClassificationLog">enableAutomaticSensitiveDataClassificationLog</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableEgressCostOptimizer">enableEgressCostOptimizer</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableIdentifierFirstLogin">enableIdentifierFirstLogin</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determines the login flow for users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableInternalStagesPrivatelink">enableInternalStagesPrivatelink</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository">enableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnhandledExceptionsReporting">enableUnhandledExceptionsReporting</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnloadPhysicalTypeOptimization">enableUnloadPhysicalTypeOptimization</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedQuerySyntaxError">enableUnredactedQuerySyntaxError</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedSecureObjectError">enableUnredactedSecureObjectError</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Controls whether error messages related to secure objects are redacted in metadata. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enforceNetworkRulesForInternalStages">enforceNetworkRulesForInternalStages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicMerge">errorOnNondeterministicMerge</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicUpdate">errorOnNondeterministicUpdate</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.eventTable">eventTable</a></code> | <code>java.lang.String</code> | Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the external volume for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.featurePolicy">featurePolicy</a></code> | <code>java.lang.String</code> | Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geographyOutputFormat">geographyOutputFormat</a></code> | <code>java.lang.String</code> | Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geometryOutputFormat">geometryOutputFormat</a></code> | <code>java.lang.String</code> | Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.hybridTableLockTimeout">hybridTableLockTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#id CurrentAccount#id}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.initialReplicationSizeLimitInTb">initialReplicationSizeLimitInTb</a></code> | <code>java.lang.String</code> | Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatDecimalAsInt">jdbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatTimestampNtzAsUtc">jdbcTreatTimestampNtzAsUtc</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcUseSessionTimezone">jdbcUseSessionTimezone</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsonIndent">jsonIndent</a></code> | <code>java.lang.Number</code> | Specifies the number of blank spaces to indent each new element in JSON output in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsTreatIntegerAsBigint">jsTreatIntegerAsBigint</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule">listingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>java.lang.String</code> | Sets the time interval used to refresh the application package based data products to other regions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lockTimeout">lockTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>java.lang.Number</code> | Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | Controls how metrics data is ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.minDataRetentionTimeInDays">minDataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.multiStatementCount">multiStatementCount</a></code> | <code>java.lang.Number</code> | Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | Specifies the network policy to enforce for your account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.noorderSequenceAsDefault">noorderSequenceAsDefault</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.oauthAddPrivilegedRolesToBlockedList">oauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.odbcTreatDecimalAsInt">odbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.packagesPolicy">packagesPolicy</a></code> | <code>java.lang.String</code> | Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.periodicDataRekeying">periodicDataRekeying</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pipeExecutionPaused">pipeExecutionPaused</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInlineUrl">preventUnloadToInlineUrl</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInternalStages">preventUnloadToInternalStages</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerModules">pythonProfilerModules</a></code> | <code>java.lang.String</code> | Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerTargetStage">pythonProfilerTargetStage</a></code> | <code>java.lang.String</code> | Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.queryTag">queryTag</a></code> | <code>java.lang.String</code> | Optional string that can be used to tag queries and other SQL statements executed within a session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageCreation">requireStorageIntegrationForStageCreation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageOperation">requireStorageIntegrationForStageOperation</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.rowsPerResultset">rowsPerResultset</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of rows returned in a result set. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.s3StageVpceDnsName">s3StageVpceDnsName</a></code> | <code>java.lang.String</code> | Specifies the DNS name of an Amazon S3 interface endpoint. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.samlIdentityProvider">samlIdentityProvider</a></code> | <code>java.lang.String</code> | Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.searchPath">searchPath</a></code> | <code>java.lang.String</code> | Specifies the path to search to resolve unqualified object names in queries. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMaxStatementSize">serverlessTaskMaxStatementSize</a></code> | <code>java.lang.String</code> | Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMinStatementSize">serverlessTaskMinStatementSize</a></code> | <code>java.lang.String</code> | Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.simulatedDataSharingConsumer">simulatedDataSharingConsumer</a></code> | <code>java.lang.String</code> | Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.ssoLoginPage">ssoLoginPage</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` \| `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.strictJsonOutput">strictJsonOutput</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>java.lang.Number</code> | Specifies the number of automatic task graph retry attempts. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeInputFormat">timeInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeOutputFormat">timeOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampDayIsAlways24H">timestampDayIsAlways24H</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampInputFormat">timestampInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampLtzOutputFormat">timestampLtzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_LTZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampNtzOutputFormat">timestampNtzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampOutputFormat">timestampOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTypeMapping">timestampTypeMapping</a></code> | <code>java.lang.String</code> | Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTzOutputFormat">timestampTzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_TZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Specifies the time zone for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionAbortOnError">transactionAbortOnError</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionDefaultIsolationLevel">transactionDefaultIsolationLevel</a></code> | <code>java.lang.String</code> | Specifies the isolation level for transactions in the user session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.twoDigitCenturyStart">twoDigitCenturyStart</a></code> | <code>java.lang.Number</code> | Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.unsupportedDdlAction">unsupportedDdlAction</a></code> | <code>java.lang.String</code> | Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.useCachedResult">useCachedResult</a></code> | <code>java.lang.Boolean\|com.hashicorp.cdktf.IResolvable</code> | Specifies whether to reuse persisted query results, if available, when a matching query is submitted. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekOfYearPolicy">weekOfYearPolicy</a></code> | <code>java.lang.Number</code> | Specifies how the weeks in a given year are computed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekStart">weekStart</a></code> | <code>java.lang.Number</code> | Specifies the first day of the week (used by week-related date functions). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection|com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner|com.hashicorp.cdktf.LocalExecProvisioner|com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `abortDetachedQuery`<sup>Optional</sup> <a name="abortDetachedQuery" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.abortDetachedQuery"></a>

```java
public java.lang.Boolean|IResolvable getAbortDetachedQuery();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#abort_detached_query CurrentAccount#abort_detached_query}

---

##### `activePythonProfiler`<sup>Optional</sup> <a name="activePythonProfiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.activePythonProfiler"></a>

```java
public java.lang.String getActivePythonProfiler();
```

- *Type:* java.lang.String

Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#active_python_profiler CurrentAccount#active_python_profiler}

---

##### `allowClientMfaCaching`<sup>Optional</sup> <a name="allowClientMfaCaching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowClientMfaCaching"></a>

```java
public java.lang.Boolean|IResolvable getAllowClientMfaCaching();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#allow_client_mfa_caching CurrentAccount#allow_client_mfa_caching}

---

##### `allowIdToken`<sup>Optional</sup> <a name="allowIdToken" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowIdToken"></a>

```java
public java.lang.Boolean|IResolvable getAllowIdToken();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#allow_id_token CurrentAccount#allow_id_token}

---

##### `authenticationPolicy`<sup>Optional</sup> <a name="authenticationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.authenticationPolicy"></a>

```java
public java.lang.String getAuthenticationPolicy();
```

- *Type:* java.lang.String

Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account. For more information about this resource, see [docs](./authentication_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#authentication_policy CurrentAccount#authentication_policy}

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.autocommit"></a>

```java
public java.lang.Boolean|IResolvable getAutocommit();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether autocommit is enabled for the session.

Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#autocommit CurrentAccount#autocommit}

---

##### `baseLocationPrefix`<sup>Optional</sup> <a name="baseLocationPrefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.baseLocationPrefix"></a>

```java
public java.lang.String getBaseLocationPrefix();
```

- *Type:* java.lang.String

Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables.

For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#base_location_prefix CurrentAccount#base_location_prefix}

---

##### `binaryInputFormat`<sup>Optional</sup> <a name="binaryInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryInputFormat"></a>

```java
public java.lang.String getBinaryInputFormat();
```

- *Type:* java.lang.String

The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#binary_input_format CurrentAccount#binary_input_format}

---

##### `binaryOutputFormat`<sup>Optional</sup> <a name="binaryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryOutputFormat"></a>

```java
public java.lang.String getBinaryOutputFormat();
```

- *Type:* java.lang.String

The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#binary_output_format CurrentAccount#binary_output_format}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Specifies the catalog for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#catalog CurrentAccount#catalog}

---

##### `catalogSync`<sup>Optional</sup> <a name="catalogSync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalogSync"></a>

```java
public java.lang.String getCatalogSync();
```

- *Type:* java.lang.String

Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#catalog_sync CurrentAccount#catalog_sync}

---

##### `clientEnableLogInfoStatementParameters`<sup>Optional</sup> <a name="clientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEnableLogInfoStatementParameters"></a>

```java
public java.lang.Boolean|IResolvable getClientEnableLogInfoStatementParameters();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_enable_log_info_statement_parameters CurrentAccount#client_enable_log_info_statement_parameters}

---

##### `clientEncryptionKeySize`<sup>Optional</sup> <a name="clientEncryptionKeySize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEncryptionKeySize"></a>

```java
public java.lang.Number getClientEncryptionKeySize();
```

- *Type:* java.lang.Number

Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type.

For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_encryption_key_size CurrentAccount#client_encryption_key_size}

---

##### `clientMemoryLimit`<sup>Optional</sup> <a name="clientMemoryLimit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMemoryLimit"></a>

```java
public java.lang.Number getClientMemoryLimit();
```

- *Type:* java.lang.Number

Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB).

For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_memory_limit CurrentAccount#client_memory_limit}

---

##### `clientMetadataRequestUseConnectionCtx`<sup>Optional</sup> <a name="clientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataRequestUseConnectionCtx"></a>

```java
public java.lang.Boolean|IResolvable getClientMetadataRequestUseConnectionCtx();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema.

The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_metadata_request_use_connection_ctx CurrentAccount#client_metadata_request_use_connection_ctx}

---

##### `clientMetadataUseSessionDatabase`<sup>Optional</sup> <a name="clientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataUseSessionDatabase"></a>

```java
public java.lang.Boolean|IResolvable getClientMetadataUseSessionDatabase();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database.

The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_metadata_use_session_database CurrentAccount#client_metadata_use_session_database}

---

##### `clientPrefetchThreads`<sup>Optional</sup> <a name="clientPrefetchThreads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientPrefetchThreads"></a>

```java
public java.lang.Number getClientPrefetchThreads();
```

- *Type:* java.lang.Number

Parameter that specifies the number of threads used by the client to pre-fetch large result sets.

The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_prefetch_threads CurrentAccount#client_prefetch_threads}

---

##### `clientResultChunkSize`<sup>Optional</sup> <a name="clientResultChunkSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultChunkSize"></a>

```java
public java.lang.Number getClientResultChunkSize();
```

- *Type:* java.lang.Number

Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB).

The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_result_chunk_size CurrentAccount#client_result_chunk_size}

---

##### `clientResultColumnCaseInsensitive`<sup>Optional</sup> <a name="clientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultColumnCaseInsensitive"></a>

```java
public java.lang.Boolean|IResolvable getClientResultColumnCaseInsensitive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_result_column_case_insensitive CurrentAccount#client_result_column_case_insensitive}

---

##### `clientSessionKeepAlive`<sup>Optional</sup> <a name="clientSessionKeepAlive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAlive"></a>

```java
public java.lang.Boolean|IResolvable getClientSessionKeepAlive();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Parameter that indicates whether to force a user to log in again after a period of inactivity in the session.

For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_session_keep_alive CurrentAccount#client_session_keep_alive}

---

##### `clientSessionKeepAliveHeartbeatFrequency`<sup>Optional</sup> <a name="clientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```java
public java.lang.Number getClientSessionKeepAliveHeartbeatFrequency();
```

- *Type:* java.lang.Number

Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_session_keep_alive_heartbeat_frequency CurrentAccount#client_session_keep_alive_heartbeat_frequency}

---

##### `clientTimestampTypeMapping`<sup>Optional</sup> <a name="clientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientTimestampTypeMapping"></a>

```java
public java.lang.String getClientTimestampTypeMapping();
```

- *Type:* java.lang.String

Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#client_timestamp_type_mapping CurrentAccount#client_timestamp_type_mapping}

---

##### `cortexEnabledCrossRegion`<sup>Optional</sup> <a name="cortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexEnabledCrossRegion"></a>

```java
public java.lang.String getCortexEnabledCrossRegion();
```

- *Type:* java.lang.String

Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed.

Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#cortex_enabled_cross_region CurrentAccount#cortex_enabled_cross_region}

---

##### `cortexModelsAllowlist`<sup>Optional</sup> <a name="cortexModelsAllowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexModelsAllowlist"></a>

```java
public java.lang.String getCortexModelsAllowlist();
```

- *Type:* java.lang.String

Specifies the models that users in the account can access.

Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#cortex_models_allowlist CurrentAccount#cortex_models_allowlist}

---

##### `csvTimestampFormat`<sup>Optional</sup> <a name="csvTimestampFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.csvTimestampFormat"></a>

```java
public java.lang.String getCsvTimestampFormat();
```

- *Type:* java.lang.String

Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight.

If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#csv_timestamp_format CurrentAccount#csv_timestamp_format}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#data_retention_time_in_days CurrentAccount#data_retention_time_in_days}

---

##### `dateInputFormat`<sup>Optional</sup> <a name="dateInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateInputFormat"></a>

```java
public java.lang.String getDateInputFormat();
```

- *Type:* java.lang.String

Specifies the input format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#date_input_format CurrentAccount#date_input_format}

---

##### `dateOutputFormat`<sup>Optional</sup> <a name="dateOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateOutputFormat"></a>

```java
public java.lang.String getDateOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#date_output_format CurrentAccount#date_output_format}

---

##### `defaultDdlCollation`<sup>Optional</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultDdlCollation"></a>

```java
public java.lang.String getDefaultDdlCollation();
```

- *Type:* java.lang.String

Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_ddl_collation CurrentAccount#default_ddl_collation}

---

##### `defaultNotebookComputePoolCpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolCpu"></a>

```java
public java.lang.String getDefaultNotebookComputePoolCpu();
```

- *Type:* java.lang.String

Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_notebook_compute_pool_cpu CurrentAccount#default_notebook_compute_pool_cpu}

---

##### `defaultNotebookComputePoolGpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolGpu"></a>

```java
public java.lang.String getDefaultNotebookComputePoolGpu();
```

- *Type:* java.lang.String

Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_notebook_compute_pool_gpu CurrentAccount#default_notebook_compute_pool_gpu}

---

##### `defaultNullOrdering`<sup>Optional</sup> <a name="defaultNullOrdering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNullOrdering"></a>

```java
public java.lang.String getDefaultNullOrdering();
```

- *Type:* java.lang.String

Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_null_ordering CurrentAccount#default_null_ordering}

---

##### `defaultStreamlitNotebookWarehouse`<sup>Optional</sup> <a name="defaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultStreamlitNotebookWarehouse"></a>

```java
public java.lang.String getDefaultStreamlitNotebookWarehouse();
```

- *Type:* java.lang.String

Specifies the name of the default warehouse to use when creating a notebook.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#default_streamlit_notebook_warehouse CurrentAccount#default_streamlit_notebook_warehouse}

---

##### `disableUiDownloadButton`<sup>Optional</sup> <a name="disableUiDownloadButton" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUiDownloadButton"></a>

```java
public java.lang.Boolean|IResolvable getDisableUiDownloadButton();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet.

If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#disable_ui_download_button CurrentAccount#disable_ui_download_button}

---

##### `disableUserPrivilegeGrants`<sup>Optional</sup> <a name="disableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUserPrivilegeGrants"></a>

```java
public java.lang.Boolean|IResolvable getDisableUserPrivilegeGrants();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether users in an account can grant privileges directly to other users.

Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#disable_user_privilege_grants CurrentAccount#disable_user_privilege_grants}

---

##### `enableAutomaticSensitiveDataClassificationLog`<sup>Optional</sup> <a name="enableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableAutomaticSensitiveDataClassificationLog"></a>

```java
public java.lang.Boolean|IResolvable getEnableAutomaticSensitiveDataClassificationLog();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_automatic_sensitive_data_classification_log CurrentAccount#enable_automatic_sensitive_data_classification_log}

---

##### `enableEgressCostOptimizer`<sup>Optional</sup> <a name="enableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableEgressCostOptimizer"></a>

```java
public java.lang.Boolean|IResolvable getEnableEgressCostOptimizer();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_egress_cost_optimizer CurrentAccount#enable_egress_cost_optimizer}

---

##### `enableIdentifierFirstLogin`<sup>Optional</sup> <a name="enableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableIdentifierFirstLogin"></a>

```java
public java.lang.Boolean|IResolvable getEnableIdentifierFirstLogin();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determines the login flow for users.

When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_identifier_first_login CurrentAccount#enable_identifier_first_login}

---

##### `enableInternalStagesPrivatelink`<sup>Optional</sup> <a name="enableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableInternalStagesPrivatelink"></a>

```java
public java.lang.Boolean|IResolvable getEnableInternalStagesPrivatelink();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_internal_stages_privatelink CurrentAccount#enable_internal_stages_privatelink}

---

##### `enableTriSecretAndRekeyOptOutForImageRepository`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```java
public java.lang.Boolean|IResolvable getEnableTriSecretAndRekeyOptOutForImageRepository();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```java
public java.lang.Boolean|IResolvable getEnableTriSecretAndRekeyOptOutForSpcsBlockStorage();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}

---

##### `enableUnhandledExceptionsReporting`<sup>Optional</sup> <a name="enableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnhandledExceptionsReporting"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnhandledExceptionsReporting();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code.

For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_unhandled_exceptions_reporting CurrentAccount#enable_unhandled_exceptions_reporting}

---

##### `enableUnloadPhysicalTypeOptimization`<sup>Optional</sup> <a name="enableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnloadPhysicalTypeOptimization"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnloadPhysicalTypeOptimization();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_unload_physical_type_optimization CurrentAccount#enable_unload_physical_type_optimization}

---

##### `enableUnredactedQuerySyntaxError`<sup>Optional</sup> <a name="enableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedQuerySyntaxError"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnredactedQuerySyntaxError();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error.

If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_unredacted_query_syntax_error CurrentAccount#enable_unredacted_query_syntax_error}

---

##### `enableUnredactedSecureObjectError`<sup>Optional</sup> <a name="enableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedSecureObjectError"></a>

```java
public java.lang.Boolean|IResolvable getEnableUnredactedSecureObjectError();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Controls whether error messages related to secure objects are redacted in metadata.

For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enable_unredacted_secure_object_error CurrentAccount#enable_unredacted_secure_object_error}

---

##### `enforceNetworkRulesForInternalStages`<sup>Optional</sup> <a name="enforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enforceNetworkRulesForInternalStages"></a>

```java
public java.lang.Boolean|IResolvable getEnforceNetworkRulesForInternalStages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether a network policy that uses network rules can restrict access to AWS internal stages.

This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#enforce_network_rules_for_internal_stages CurrentAccount#enforce_network_rules_for_internal_stages}

---

##### `errorOnNondeterministicMerge`<sup>Optional</sup> <a name="errorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicMerge"></a>

```java
public java.lang.Boolean|IResolvable getErrorOnNondeterministicMerge();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#error_on_nondeterministic_merge CurrentAccount#error_on_nondeterministic_merge}

---

##### `errorOnNondeterministicUpdate`<sup>Optional</sup> <a name="errorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicUpdate"></a>

```java
public java.lang.Boolean|IResolvable getErrorOnNondeterministicUpdate();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#error_on_nondeterministic_update CurrentAccount#error_on_nondeterministic_update}

---

##### `eventTable`<sup>Optional</sup> <a name="eventTable" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.eventTable"></a>

```java
public java.lang.String getEventTable();
```

- *Type:* java.lang.String

Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated.

Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#event_table CurrentAccount#event_table}

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```java
public java.lang.Boolean|IResolvable getExternalOauthAddPrivilegedRolesToBlockedList();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server.

For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#external_oauth_add_privileged_roles_to_blocked_list CurrentAccount#external_oauth_add_privileged_roles_to_blocked_list}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

Specifies the external volume for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#external_volume CurrentAccount#external_volume}

---

##### `featurePolicy`<sup>Optional</sup> <a name="featurePolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.featurePolicy"></a>

```java
public java.lang.String getFeaturePolicy();
```

- *Type:* java.lang.String

Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#feature_policy CurrentAccount#feature_policy}

---

##### `geographyOutputFormat`<sup>Optional</sup> <a name="geographyOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geographyOutputFormat"></a>

```java
public java.lang.String getGeographyOutputFormat();
```

- *Type:* java.lang.String

Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#geography_output_format CurrentAccount#geography_output_format}

---

##### `geometryOutputFormat`<sup>Optional</sup> <a name="geometryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geometryOutputFormat"></a>

```java
public java.lang.String getGeometryOutputFormat();
```

- *Type:* java.lang.String

Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#geometry_output_format CurrentAccount#geometry_output_format}

---

##### `hybridTableLockTimeout`<sup>Optional</sup> <a name="hybridTableLockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.hybridTableLockTimeout"></a>

```java
public java.lang.Number getHybridTableLockTimeout();
```

- *Type:* java.lang.Number

Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement.

For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#hybrid_table_lock_timeout CurrentAccount#hybrid_table_lock_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#id CurrentAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialReplicationSizeLimitInTb`<sup>Optional</sup> <a name="initialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.initialReplicationSizeLimitInTb"></a>

```java
public java.lang.String getInitialReplicationSizeLimitInTb();
```

- *Type:* java.lang.String

Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB).

Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#initial_replication_size_limit_in_tb CurrentAccount#initial_replication_size_limit_in_tb}

---

##### `jdbcTreatDecimalAsInt`<sup>Optional</sup> <a name="jdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatDecimalAsInt"></a>

```java
public java.lang.Boolean|IResolvable getJdbcTreatDecimalAsInt();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#jdbc_treat_decimal_as_int CurrentAccount#jdbc_treat_decimal_as_int}

---

##### `jdbcTreatTimestampNtzAsUtc`<sup>Optional</sup> <a name="jdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatTimestampNtzAsUtc"></a>

```java
public java.lang.Boolean|IResolvable getJdbcTreatTimestampNtzAsUtc();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#jdbc_treat_timestamp_ntz_as_utc CurrentAccount#jdbc_treat_timestamp_ntz_as_utc}

---

##### `jdbcUseSessionTimezone`<sup>Optional</sup> <a name="jdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcUseSessionTimezone"></a>

```java
public java.lang.Boolean|IResolvable getJdbcUseSessionTimezone();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#jdbc_use_session_timezone CurrentAccount#jdbc_use_session_timezone}

---

##### `jsonIndent`<sup>Optional</sup> <a name="jsonIndent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsonIndent"></a>

```java
public java.lang.Number getJsonIndent();
```

- *Type:* java.lang.Number

Specifies the number of blank spaces to indent each new element in JSON output in the session.

Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#json_indent CurrentAccount#json_indent}

---

##### `jsTreatIntegerAsBigint`<sup>Optional</sup> <a name="jsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsTreatIntegerAsBigint"></a>

```java
public java.lang.Boolean|IResolvable getJsTreatIntegerAsBigint();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#js_treat_integer_as_bigint CurrentAccount#js_treat_integer_as_bigint}

---

##### `listingAutoFulfillmentReplicationRefreshSchedule`<sup>Optional</sup> <a name="listingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```java
public java.lang.String getListingAutoFulfillmentReplicationRefreshSchedule();
```

- *Type:* java.lang.String

Sets the time interval used to refresh the application package based data products to other regions.

For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#listing_auto_fulfillment_replication_refresh_schedule CurrentAccount#listing_auto_fulfillment_replication_refresh_schedule}

---

##### `lockTimeout`<sup>Optional</sup> <a name="lockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lockTimeout"></a>

```java
public java.lang.Number getLockTimeout();
```

- *Type:* java.lang.Number

Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement.

For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#lock_timeout CurrentAccount#lock_timeout}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Specifies the severity level of messages that should be ingested and made available in the active event table.

Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#log_level CurrentAccount#log_level}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxConcurrencyLevel"></a>

```java
public java.lang.Number getMaxConcurrencyLevel();
```

- *Type:* java.lang.Number

Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#max_concurrency_level CurrentAccount#max_concurrency_level}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxDataExtensionTimeInDays"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDays();
```

- *Type:* java.lang.Number

Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale.

By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#max_data_extension_time_in_days CurrentAccount#max_data_extension_time_in_days}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.metricLevel"></a>

```java
public java.lang.String getMetricLevel();
```

- *Type:* java.lang.String

Controls how metrics data is ingested into the event table.

For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#metric_level CurrentAccount#metric_level}

---

##### `minDataRetentionTimeInDays`<sup>Optional</sup> <a name="minDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.minDataRetentionTimeInDays"></a>

```java
public java.lang.Number getMinDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object.

If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#min_data_retention_time_in_days CurrentAccount#min_data_retention_time_in_days}

---

##### `multiStatementCount`<sup>Optional</sup> <a name="multiStatementCount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.multiStatementCount"></a>

```java
public java.lang.Number getMultiStatementCount();
```

- *Type:* java.lang.Number

Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#multi_statement_count CurrentAccount#multi_statement_count}

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

Specifies the network policy to enforce for your account.

Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#network_policy CurrentAccount#network_policy}

---

##### `noorderSequenceAsDefault`<sup>Optional</sup> <a name="noorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.noorderSequenceAsDefault"></a>

```java
public java.lang.Boolean|IResolvable getNoorderSequenceAsDefault();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column.

The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#noorder_sequence_as_default CurrentAccount#noorder_sequence_as_default}

---

##### `oauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="oauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.oauthAddPrivilegedRolesToBlockedList"></a>

```java
public java.lang.Boolean|IResolvable getOauthAddPrivilegedRolesToBlockedList();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server.

For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#oauth_add_privileged_roles_to_blocked_list CurrentAccount#oauth_add_privileged_roles_to_blocked_list}

---

##### `odbcTreatDecimalAsInt`<sup>Optional</sup> <a name="odbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.odbcTreatDecimalAsInt"></a>

```java
public java.lang.Boolean|IResolvable getOdbcTreatDecimalAsInt();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#odbc_treat_decimal_as_int CurrentAccount#odbc_treat_decimal_as_int}

---

##### `packagesPolicy`<sup>Optional</sup> <a name="packagesPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.packagesPolicy"></a>

```java
public java.lang.String getPackagesPolicy();
```

- *Type:* java.lang.String

Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#packages_policy CurrentAccount#packages_policy}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#password_policy CurrentAccount#password_policy}

---

##### `periodicDataRekeying`<sup>Optional</sup> <a name="periodicDataRekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.periodicDataRekeying"></a>

```java
public java.lang.Boolean|IResolvable getPeriodicDataRekeying();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#periodic_data_rekeying CurrentAccount#periodic_data_rekeying}

---

##### `pipeExecutionPaused`<sup>Optional</sup> <a name="pipeExecutionPaused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pipeExecutionPaused"></a>

```java
public java.lang.Boolean|IResolvable getPipeExecutionPaused();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#pipe_execution_paused CurrentAccount#pipe_execution_paused}

---

##### `preventUnloadToInlineUrl`<sup>Optional</sup> <a name="preventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInlineUrl"></a>

```java
public java.lang.Boolean|IResolvable getPreventUnloadToInlineUrl();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#prevent_unload_to_inline_url CurrentAccount#prevent_unload_to_inline_url}

---

##### `preventUnloadToInternalStages`<sup>Optional</sup> <a name="preventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInternalStages"></a>

```java
public java.lang.Boolean|IResolvable getPreventUnloadToInternalStages();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#prevent_unload_to_internal_stages CurrentAccount#prevent_unload_to_internal_stages}

---

##### `pythonProfilerModules`<sup>Optional</sup> <a name="pythonProfilerModules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerModules"></a>

```java
public java.lang.String getPythonProfilerModules();
```

- *Type:* java.lang.String

Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#python_profiler_modules CurrentAccount#python_profiler_modules}

---

##### `pythonProfilerTargetStage`<sup>Optional</sup> <a name="pythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerTargetStage"></a>

```java
public java.lang.String getPythonProfilerTargetStage();
```

- *Type:* java.lang.String

Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#python_profiler_target_stage CurrentAccount#python_profiler_target_stage}

---

##### `queryTag`<sup>Optional</sup> <a name="queryTag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.queryTag"></a>

```java
public java.lang.String getQueryTag();
```

- *Type:* java.lang.String

Optional string that can be used to tag queries and other SQL statements executed within a session.

The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#query_tag CurrentAccount#query_tag}

---

##### `quotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.quotedIdentifiersIgnoreCase"></a>

```java
public java.lang.Boolean|IResolvable getQuotedIdentifiersIgnoreCase();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters.

By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#quoted_identifiers_ignore_case CurrentAccount#quoted_identifiers_ignore_case}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.replaceInvalidCharacters"></a>

```java
public java.lang.Boolean|IResolvable getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#replace_invalid_characters CurrentAccount#replace_invalid_characters}

---

##### `requireStorageIntegrationForStageCreation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageCreation"></a>

```java
public java.lang.Boolean|IResolvable getRequireStorageIntegrationForStageCreation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#require_storage_integration_for_stage_creation CurrentAccount#require_storage_integration_for_stage_creation}

---

##### `requireStorageIntegrationForStageOperation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageOperation"></a>

```java
public java.lang.Boolean|IResolvable getRequireStorageIntegrationForStageOperation();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location.

For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#require_storage_integration_for_stage_operation CurrentAccount#require_storage_integration_for_stage_operation}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.resourceMonitor"></a>

```java
public java.lang.String getResourceMonitor();
```

- *Type:* java.lang.String

Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#resource_monitor CurrentAccount#resource_monitor}

---

##### `rowsPerResultset`<sup>Optional</sup> <a name="rowsPerResultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.rowsPerResultset"></a>

```java
public java.lang.Number getRowsPerResultset();
```

- *Type:* java.lang.Number

Specifies the maximum number of rows returned in a result set.

A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#rows_per_resultset CurrentAccount#rows_per_resultset}

---

##### `s3StageVpceDnsName`<sup>Optional</sup> <a name="s3StageVpceDnsName" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.s3StageVpceDnsName"></a>

```java
public java.lang.String getS3StageVpceDnsName();
```

- *Type:* java.lang.String

Specifies the DNS name of an Amazon S3 interface endpoint.

Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#s3_stage_vpce_dns_name CurrentAccount#s3_stage_vpce_dns_name}

---

##### `samlIdentityProvider`<sup>Optional</sup> <a name="samlIdentityProvider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.samlIdentityProvider"></a>

```java
public java.lang.String getSamlIdentityProvider();
```

- *Type:* java.lang.String

Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#saml_identity_provider CurrentAccount#saml_identity_provider}

---

##### `searchPath`<sup>Optional</sup> <a name="searchPath" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.searchPath"></a>

```java
public java.lang.String getSearchPath();
```

- *Type:* java.lang.String

Specifies the path to search to resolve unqualified object names in queries.

For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#search_path CurrentAccount#search_path}

---

##### `serverlessTaskMaxStatementSize`<sup>Optional</sup> <a name="serverlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMaxStatementSize"></a>

```java
public java.lang.String getServerlessTaskMaxStatementSize();
```

- *Type:* java.lang.String

Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#serverless_task_max_statement_size CurrentAccount#serverless_task_max_statement_size}

---

##### `serverlessTaskMinStatementSize`<sup>Optional</sup> <a name="serverlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMinStatementSize"></a>

```java
public java.lang.String getServerlessTaskMinStatementSize();
```

- *Type:* java.lang.String

Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#serverless_task_min_statement_size CurrentAccount#serverless_task_min_statement_size}

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.sessionPolicy"></a>

```java
public java.lang.String getSessionPolicy();
```

- *Type:* java.lang.String

Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#session_policy CurrentAccount#session_policy}

---

##### `simulatedDataSharingConsumer`<sup>Optional</sup> <a name="simulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.simulatedDataSharingConsumer"></a>

```java
public java.lang.String getSimulatedDataSharingConsumer();
```

- *Type:* java.lang.String

Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views.

When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#simulated_data_sharing_consumer CurrentAccount#simulated_data_sharing_consumer}

---

##### `ssoLoginPage`<sup>Optional</sup> <a name="ssoLoginPage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.ssoLoginPage"></a>

```java
public java.lang.Boolean|IResolvable getSsoLoginPage();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users.

For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#sso_login_page CurrentAccount#sso_login_page}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementQueuedTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSeconds();
```

- *Type:* java.lang.Number

Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#statement_queued_timeout_in_seconds CurrentAccount#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementTimeoutInSeconds();
```

- *Type:* java.lang.Number

Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#statement_timeout_in_seconds CurrentAccount#statement_timeout_in_seconds}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.storageSerializationPolicy"></a>

```java
public java.lang.String getStorageSerializationPolicy();
```

- *Type:* java.lang.String

Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#storage_serialization_policy CurrentAccount#storage_serialization_policy}

---

##### `strictJsonOutput`<sup>Optional</sup> <a name="strictJsonOutput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.strictJsonOutput"></a>

```java
public java.lang.Boolean|IResolvable getStrictJsonOutput();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#strict_json_output CurrentAccount#strict_json_output}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.suspendTaskAfterNumFailures"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailures();
```

- *Type:* java.lang.Number

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#suspend_task_after_num_failures CurrentAccount#suspend_task_after_num_failures}

---

##### `taskAutoRetryAttempts`<sup>Optional</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.taskAutoRetryAttempts"></a>

```java
public java.lang.Number getTaskAutoRetryAttempts();
```

- *Type:* java.lang.Number

Specifies the number of automatic task graph retry attempts.

If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#task_auto_retry_attempts CurrentAccount#task_auto_retry_attempts}

---

##### `timeInputFormat`<sup>Optional</sup> <a name="timeInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeInputFormat"></a>

```java
public java.lang.String getTimeInputFormat();
```

- *Type:* java.lang.String

Specifies the input format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#time_input_format CurrentAccount#time_input_format}

---

##### `timeOutputFormat`<sup>Optional</sup> <a name="timeOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeOutputFormat"></a>

```java
public java.lang.String getTimeOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#time_output_format CurrentAccount#time_output_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeouts"></a>

```java
public CurrentAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timeouts CurrentAccount#timeouts}

---

##### `timestampDayIsAlways24H`<sup>Optional</sup> <a name="timestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampDayIsAlways24H"></a>

```java
public java.lang.Boolean|IResolvable getTimestampDayIsAlways24H();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_day_is_always_24h CurrentAccount#timestamp_day_is_always_24h}

---

##### `timestampInputFormat`<sup>Optional</sup> <a name="timestampInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampInputFormat"></a>

```java
public java.lang.String getTimestampInputFormat();
```

- *Type:* java.lang.String

Specifies the input format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_input_format CurrentAccount#timestamp_input_format}

---

##### `timestampLtzOutputFormat`<sup>Optional</sup> <a name="timestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampLtzOutputFormat"></a>

```java
public java.lang.String getTimestampLtzOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_LTZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_ltz_output_format CurrentAccount#timestamp_ltz_output_format}

---

##### `timestampNtzOutputFormat`<sup>Optional</sup> <a name="timestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampNtzOutputFormat"></a>

```java
public java.lang.String getTimestampNtzOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_ntz_output_format CurrentAccount#timestamp_ntz_output_format}

---

##### `timestampOutputFormat`<sup>Optional</sup> <a name="timestampOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampOutputFormat"></a>

```java
public java.lang.String getTimestampOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_output_format CurrentAccount#timestamp_output_format}

---

##### `timestampTypeMapping`<sup>Optional</sup> <a name="timestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTypeMapping"></a>

```java
public java.lang.String getTimestampTypeMapping();
```

- *Type:* java.lang.String

Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to.

Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_type_mapping CurrentAccount#timestamp_type_mapping}

---

##### `timestampTzOutputFormat`<sup>Optional</sup> <a name="timestampTzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTzOutputFormat"></a>

```java
public java.lang.String getTimestampTzOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_TZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timestamp_tz_output_format CurrentAccount#timestamp_tz_output_format}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Specifies the time zone for the session.

You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#timezone CurrentAccount#timezone}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

Controls how trace events are ingested into the event table.

For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#trace_level CurrentAccount#trace_level}

---

##### `transactionAbortOnError`<sup>Optional</sup> <a name="transactionAbortOnError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionAbortOnError"></a>

```java
public java.lang.Boolean|IResolvable getTransactionAbortOnError();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error.

For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#transaction_abort_on_error CurrentAccount#transaction_abort_on_error}

---

##### `transactionDefaultIsolationLevel`<sup>Optional</sup> <a name="transactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionDefaultIsolationLevel"></a>

```java
public java.lang.String getTransactionDefaultIsolationLevel();
```

- *Type:* java.lang.String

Specifies the isolation level for transactions in the user session.

Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#transaction_default_isolation_level CurrentAccount#transaction_default_isolation_level}

---

##### `twoDigitCenturyStart`<sup>Optional</sup> <a name="twoDigitCenturyStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.twoDigitCenturyStart"></a>

```java
public java.lang.Number getTwoDigitCenturyStart();
```

- *Type:* java.lang.Number

Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#two_digit_century_start CurrentAccount#two_digit_century_start}

---

##### `unsupportedDdlAction`<sup>Optional</sup> <a name="unsupportedDdlAction" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.unsupportedDdlAction"></a>

```java
public java.lang.String getUnsupportedDdlAction();
```

- *Type:* java.lang.String

Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#unsupported_ddl_action CurrentAccount#unsupported_ddl_action}

---

##### `useCachedResult`<sup>Optional</sup> <a name="useCachedResult" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.useCachedResult"></a>

```java
public java.lang.Boolean|IResolvable getUseCachedResult();
```

- *Type:* java.lang.Boolean|com.hashicorp.cdktf.IResolvable

Specifies whether to reuse persisted query results, if available, when a matching query is submitted.

For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#use_cached_result CurrentAccount#use_cached_result}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskManagedInitialWarehouseSize"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSize();
```

- *Type:* java.lang.String

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#user_task_managed_initial_warehouse_size CurrentAccount#user_task_managed_initial_warehouse_size}

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```java
public java.lang.Number getUserTaskMinimumTriggerIntervalInSeconds();
```

- *Type:* java.lang.Number

Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#user_task_minimum_trigger_interval_in_seconds CurrentAccount#user_task_minimum_trigger_interval_in_seconds}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskTimeoutMs"></a>

```java
public java.lang.Number getUserTaskTimeoutMs();
```

- *Type:* java.lang.Number

Specifies the time limit on a single run of the task before it times out (in milliseconds).

For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#user_task_timeout_ms CurrentAccount#user_task_timeout_ms}

---

##### `weekOfYearPolicy`<sup>Optional</sup> <a name="weekOfYearPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekOfYearPolicy"></a>

```java
public java.lang.Number getWeekOfYearPolicy();
```

- *Type:* java.lang.Number

Specifies how the weeks in a given year are computed.

`0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#week_of_year_policy CurrentAccount#week_of_year_policy}

---

##### `weekStart`<sup>Optional</sup> <a name="weekStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekStart"></a>

```java
public java.lang.Number getWeekStart();
```

- *Type:* java.lang.Number

Specifies the first day of the week (used by week-related date functions).

`0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#week_start CurrentAccount#week_start}

---

### CurrentAccountTimeouts <a name="CurrentAccountTimeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_account.CurrentAccountTimeouts;

CurrentAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#create CurrentAccount#create}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#delete CurrentAccount#delete}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#read CurrentAccount#read}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#update CurrentAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#create CurrentAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#delete CurrentAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#read CurrentAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.11.0/docs/resources/current_account#update CurrentAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CurrentAccountTimeoutsOutputReference <a name="CurrentAccountTimeoutsOutputReference" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_account.CurrentAccountTimeoutsOutputReference;

new CurrentAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable\|<a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CurrentAccountTimeouts getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable|<a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>

---



