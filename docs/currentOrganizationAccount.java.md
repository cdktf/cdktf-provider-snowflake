# `currentOrganizationAccount` Submodule <a name="`currentOrganizationAccount` Submodule" id="@cdktf/provider-snowflake.currentOrganizationAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurrentOrganizationAccount <a name="CurrentOrganizationAccount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account snowflake_current_organization_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccount;

CurrentOrganizationAccount.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .abortDetachedQuery(java.lang.Boolean)
//  .abortDetachedQuery(IResolvable)
//  .activePythonProfiler(java.lang.String)
//  .allowClientMfaCaching(java.lang.Boolean)
//  .allowClientMfaCaching(IResolvable)
//  .allowIdToken(java.lang.Boolean)
//  .allowIdToken(IResolvable)
//  .autocommit(java.lang.Boolean)
//  .autocommit(IResolvable)
//  .baseLocationPrefix(java.lang.String)
//  .binaryInputFormat(java.lang.String)
//  .binaryOutputFormat(java.lang.String)
//  .catalog(java.lang.String)
//  .catalogSync(java.lang.String)
//  .clientEnableLogInfoStatementParameters(java.lang.Boolean)
//  .clientEnableLogInfoStatementParameters(IResolvable)
//  .clientEncryptionKeySize(java.lang.Number)
//  .clientMemoryLimit(java.lang.Number)
//  .clientMetadataRequestUseConnectionCtx(java.lang.Boolean)
//  .clientMetadataRequestUseConnectionCtx(IResolvable)
//  .clientMetadataUseSessionDatabase(java.lang.Boolean)
//  .clientMetadataUseSessionDatabase(IResolvable)
//  .clientPrefetchThreads(java.lang.Number)
//  .clientResultChunkSize(java.lang.Number)
//  .clientResultColumnCaseInsensitive(java.lang.Boolean)
//  .clientResultColumnCaseInsensitive(IResolvable)
//  .clientSessionKeepAlive(java.lang.Boolean)
//  .clientSessionKeepAlive(IResolvable)
//  .clientSessionKeepAliveHeartbeatFrequency(java.lang.Number)
//  .clientTimestampTypeMapping(java.lang.String)
//  .comment(java.lang.String)
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
//  .disableUiDownloadButton(java.lang.Boolean)
//  .disableUiDownloadButton(IResolvable)
//  .disableUserPrivilegeGrants(java.lang.Boolean)
//  .disableUserPrivilegeGrants(IResolvable)
//  .enableAutomaticSensitiveDataClassificationLog(java.lang.Boolean)
//  .enableAutomaticSensitiveDataClassificationLog(IResolvable)
//  .enableEgressCostOptimizer(java.lang.Boolean)
//  .enableEgressCostOptimizer(IResolvable)
//  .enableIdentifierFirstLogin(java.lang.Boolean)
//  .enableIdentifierFirstLogin(IResolvable)
//  .enableInternalStagesPrivatelink(java.lang.Boolean)
//  .enableInternalStagesPrivatelink(IResolvable)
//  .enableTriSecretAndRekeyOptOutForImageRepository(java.lang.Boolean)
//  .enableTriSecretAndRekeyOptOutForImageRepository(IResolvable)
//  .enableTriSecretAndRekeyOptOutForSpcsBlockStorage(java.lang.Boolean)
//  .enableTriSecretAndRekeyOptOutForSpcsBlockStorage(IResolvable)
//  .enableUnhandledExceptionsReporting(java.lang.Boolean)
//  .enableUnhandledExceptionsReporting(IResolvable)
//  .enableUnloadPhysicalTypeOptimization(java.lang.Boolean)
//  .enableUnloadPhysicalTypeOptimization(IResolvable)
//  .enableUnredactedQuerySyntaxError(java.lang.Boolean)
//  .enableUnredactedQuerySyntaxError(IResolvable)
//  .enableUnredactedSecureObjectError(java.lang.Boolean)
//  .enableUnredactedSecureObjectError(IResolvable)
//  .enforceNetworkRulesForInternalStages(java.lang.Boolean)
//  .enforceNetworkRulesForInternalStages(IResolvable)
//  .errorOnNondeterministicMerge(java.lang.Boolean)
//  .errorOnNondeterministicMerge(IResolvable)
//  .errorOnNondeterministicUpdate(java.lang.Boolean)
//  .errorOnNondeterministicUpdate(IResolvable)
//  .eventTable(java.lang.String)
//  .externalOauthAddPrivilegedRolesToBlockedList(java.lang.Boolean)
//  .externalOauthAddPrivilegedRolesToBlockedList(IResolvable)
//  .externalVolume(java.lang.String)
//  .geographyOutputFormat(java.lang.String)
//  .geometryOutputFormat(java.lang.String)
//  .hybridTableLockTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .initialReplicationSizeLimitInTb(java.lang.String)
//  .jdbcTreatDecimalAsInt(java.lang.Boolean)
//  .jdbcTreatDecimalAsInt(IResolvable)
//  .jdbcTreatTimestampNtzAsUtc(java.lang.Boolean)
//  .jdbcTreatTimestampNtzAsUtc(IResolvable)
//  .jdbcUseSessionTimezone(java.lang.Boolean)
//  .jdbcUseSessionTimezone(IResolvable)
//  .jsonIndent(java.lang.Number)
//  .jsTreatIntegerAsBigint(java.lang.Boolean)
//  .jsTreatIntegerAsBigint(IResolvable)
//  .listingAutoFulfillmentReplicationRefreshSchedule(java.lang.String)
//  .lockTimeout(java.lang.Number)
//  .logLevel(java.lang.String)
//  .maxConcurrencyLevel(java.lang.Number)
//  .maxDataExtensionTimeInDays(java.lang.Number)
//  .metricLevel(java.lang.String)
//  .minDataRetentionTimeInDays(java.lang.Number)
//  .multiStatementCount(java.lang.Number)
//  .networkPolicy(java.lang.String)
//  .noorderSequenceAsDefault(java.lang.Boolean)
//  .noorderSequenceAsDefault(IResolvable)
//  .oauthAddPrivilegedRolesToBlockedList(java.lang.Boolean)
//  .oauthAddPrivilegedRolesToBlockedList(IResolvable)
//  .odbcTreatDecimalAsInt(java.lang.Boolean)
//  .odbcTreatDecimalAsInt(IResolvable)
//  .passwordPolicy(java.lang.String)
//  .periodicDataRekeying(java.lang.Boolean)
//  .periodicDataRekeying(IResolvable)
//  .pipeExecutionPaused(java.lang.Boolean)
//  .pipeExecutionPaused(IResolvable)
//  .preventUnloadToInlineUrl(java.lang.Boolean)
//  .preventUnloadToInlineUrl(IResolvable)
//  .preventUnloadToInternalStages(java.lang.Boolean)
//  .preventUnloadToInternalStages(IResolvable)
//  .pythonProfilerModules(java.lang.String)
//  .pythonProfilerTargetStage(java.lang.String)
//  .queryTag(java.lang.String)
//  .quotedIdentifiersIgnoreCase(java.lang.Boolean)
//  .quotedIdentifiersIgnoreCase(IResolvable)
//  .replaceInvalidCharacters(java.lang.Boolean)
//  .replaceInvalidCharacters(IResolvable)
//  .requireStorageIntegrationForStageCreation(java.lang.Boolean)
//  .requireStorageIntegrationForStageCreation(IResolvable)
//  .requireStorageIntegrationForStageOperation(java.lang.Boolean)
//  .requireStorageIntegrationForStageOperation(IResolvable)
//  .resourceMonitor(java.lang.String)
//  .rowsPerResultset(java.lang.Number)
//  .s3StageVpceDnsName(java.lang.String)
//  .samlIdentityProvider(java.lang.String)
//  .searchPath(java.lang.String)
//  .serverlessTaskMaxStatementSize(java.lang.String)
//  .serverlessTaskMinStatementSize(java.lang.String)
//  .sessionPolicy(java.lang.String)
//  .simulatedDataSharingConsumer(java.lang.String)
//  .ssoLoginPage(java.lang.Boolean)
//  .ssoLoginPage(IResolvable)
//  .statementQueuedTimeoutInSeconds(java.lang.Number)
//  .statementTimeoutInSeconds(java.lang.Number)
//  .storageSerializationPolicy(java.lang.String)
//  .strictJsonOutput(java.lang.Boolean)
//  .strictJsonOutput(IResolvable)
//  .suspendTaskAfterNumFailures(java.lang.Number)
//  .taskAutoRetryAttempts(java.lang.Number)
//  .timeInputFormat(java.lang.String)
//  .timeOutputFormat(java.lang.String)
//  .timeouts(CurrentOrganizationAccountTimeouts)
//  .timestampDayIsAlways24H(java.lang.Boolean)
//  .timestampDayIsAlways24H(IResolvable)
//  .timestampInputFormat(java.lang.String)
//  .timestampLtzOutputFormat(java.lang.String)
//  .timestampNtzOutputFormat(java.lang.String)
//  .timestampOutputFormat(java.lang.String)
//  .timestampTypeMapping(java.lang.String)
//  .timestampTzOutputFormat(java.lang.String)
//  .timezone(java.lang.String)
//  .traceLevel(java.lang.String)
//  .transactionAbortOnError(java.lang.Boolean)
//  .transactionAbortOnError(IResolvable)
//  .transactionDefaultIsolationLevel(java.lang.String)
//  .twoDigitCenturyStart(java.lang.Number)
//  .unsupportedDdlAction(java.lang.String)
//  .useCachedResult(java.lang.Boolean)
//  .useCachedResult(IResolvable)
//  .userTaskManagedInitialWarehouseSize(java.lang.String)
//  .userTaskMinimumTriggerIntervalInSeconds(java.lang.Number)
//  .userTaskTimeoutMs(java.lang.Number)
//  .weekOfYearPolicy(java.lang.Number)
//  .weekStart(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The identifier (i.e. name) for the organization account within currently used organization. The field name is validated during import and create operations to ensure that it matches the current organization account name. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.abortDetachedQuery">abortDetachedQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.activePythonProfiler">activePythonProfiler</a></code> | <code>java.lang.String</code> | Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` \| `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.allowClientMfaCaching">allowClientMfaCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.allowIdToken">allowIdToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.autocommit">autocommit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether autocommit is enabled for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.baseLocationPrefix">baseLocationPrefix</a></code> | <code>java.lang.String</code> | Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.binaryInputFormat">binaryInputFormat</a></code> | <code>java.lang.String</code> | The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.binaryOutputFormat">binaryOutputFormat</a></code> | <code>java.lang.String</code> | The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the catalog for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.catalogSync">catalogSync</a></code> | <code>java.lang.String</code> | Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientEnableLogInfoStatementParameters">clientEnableLogInfoStatementParameters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientEncryptionKeySize">clientEncryptionKeySize</a></code> | <code>java.lang.Number</code> | Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientMemoryLimit">clientMemoryLimit</a></code> | <code>java.lang.Number</code> | Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientMetadataRequestUseConnectionCtx">clientMetadataRequestUseConnectionCtx</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientMetadataUseSessionDatabase">clientMetadataUseSessionDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientPrefetchThreads">clientPrefetchThreads</a></code> | <code>java.lang.Number</code> | Parameter that specifies the number of threads used by the client to pre-fetch large result sets. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientResultChunkSize">clientResultChunkSize</a></code> | <code>java.lang.Number</code> | Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientResultColumnCaseInsensitive">clientResultColumnCaseInsensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientSessionKeepAlive">clientSessionKeepAlive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientSessionKeepAliveHeartbeatFrequency">clientSessionKeepAliveHeartbeatFrequency</a></code> | <code>java.lang.Number</code> | Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientTimestampTypeMapping">clientTimestampTypeMapping</a></code> | <code>java.lang.String</code> | Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` \| `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the organization account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.cortexEnabledCrossRegion">cortexEnabledCrossRegion</a></code> | <code>java.lang.String</code> | Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.cortexModelsAllowlist">cortexModelsAllowlist</a></code> | <code>java.lang.String</code> | Specifies the models that users in the account can access. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.csvTimestampFormat">csvTimestampFormat</a></code> | <code>java.lang.String</code> | Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.dateInputFormat">dateInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.dateOutputFormat">dateOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultDdlCollation">defaultDdlCollation</a></code> | <code>java.lang.String</code> | Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultNotebookComputePoolCpu">defaultNotebookComputePoolCpu</a></code> | <code>java.lang.String</code> | Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultNotebookComputePoolGpu">defaultNotebookComputePoolGpu</a></code> | <code>java.lang.String</code> | Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultNullOrdering">defaultNullOrdering</a></code> | <code>java.lang.String</code> | Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` \| `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultStreamlitNotebookWarehouse">defaultStreamlitNotebookWarehouse</a></code> | <code>java.lang.String</code> | Specifies the name of the default warehouse to use when creating a notebook. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.disableUiDownloadButton">disableUiDownloadButton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.disableUserPrivilegeGrants">disableUserPrivilegeGrants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether users in an account can grant privileges directly to other users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableAutomaticSensitiveDataClassificationLog">enableAutomaticSensitiveDataClassificationLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableEgressCostOptimizer">enableEgressCostOptimizer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableIdentifierFirstLogin">enableIdentifierFirstLogin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines the login flow for users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableInternalStagesPrivatelink">enableInternalStagesPrivatelink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForImageRepository">enableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableUnhandledExceptionsReporting">enableUnhandledExceptionsReporting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableUnloadPhysicalTypeOptimization">enableUnloadPhysicalTypeOptimization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableUnredactedQuerySyntaxError">enableUnredactedQuerySyntaxError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableUnredactedSecureObjectError">enableUnredactedSecureObjectError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether error messages related to secure objects are redacted in metadata. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enforceNetworkRulesForInternalStages">enforceNetworkRulesForInternalStages</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.errorOnNondeterministicMerge">errorOnNondeterministicMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.errorOnNondeterministicUpdate">errorOnNondeterministicUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.eventTable">eventTable</a></code> | <code>java.lang.String</code> | Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the external volume for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.geographyOutputFormat">geographyOutputFormat</a></code> | <code>java.lang.String</code> | Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.geometryOutputFormat">geometryOutputFormat</a></code> | <code>java.lang.String</code> | Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.hybridTableLockTimeout">hybridTableLockTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#id CurrentOrganizationAccount#id}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.initialReplicationSizeLimitInTb">initialReplicationSizeLimitInTb</a></code> | <code>java.lang.String</code> | Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jdbcTreatDecimalAsInt">jdbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jdbcTreatTimestampNtzAsUtc">jdbcTreatTimestampNtzAsUtc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jdbcUseSessionTimezone">jdbcUseSessionTimezone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jsonIndent">jsonIndent</a></code> | <code>java.lang.Number</code> | Specifies the number of blank spaces to indent each new element in JSON output in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jsTreatIntegerAsBigint">jsTreatIntegerAsBigint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.listingAutoFulfillmentReplicationRefreshSchedule">listingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>java.lang.String</code> | Sets the time interval used to refresh the application package based data products to other regions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.lockTimeout">lockTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>java.lang.Number</code> | Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | Controls how metrics data is ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.minDataRetentionTimeInDays">minDataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.multiStatementCount">multiStatementCount</a></code> | <code>java.lang.Number</code> | Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | Specifies the network policy to enforce for your account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.noorderSequenceAsDefault">noorderSequenceAsDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.oauthAddPrivilegedRolesToBlockedList">oauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.odbcTreatDecimalAsInt">odbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.periodicDataRekeying">periodicDataRekeying</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.pipeExecutionPaused">pipeExecutionPaused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.preventUnloadToInlineUrl">preventUnloadToInlineUrl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.preventUnloadToInternalStages">preventUnloadToInternalStages</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.pythonProfilerModules">pythonProfilerModules</a></code> | <code>java.lang.String</code> | Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.pythonProfilerTargetStage">pythonProfilerTargetStage</a></code> | <code>java.lang.String</code> | Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.queryTag">queryTag</a></code> | <code>java.lang.String</code> | Optional string that can be used to tag queries and other SQL statements executed within a session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.requireStorageIntegrationForStageCreation">requireStorageIntegrationForStageCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.requireStorageIntegrationForStageOperation">requireStorageIntegrationForStageOperation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.rowsPerResultset">rowsPerResultset</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of rows returned in a result set. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.s3StageVpceDnsName">s3StageVpceDnsName</a></code> | <code>java.lang.String</code> | Specifies the DNS name of an Amazon S3 interface endpoint. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.samlIdentityProvider">samlIdentityProvider</a></code> | <code>java.lang.String</code> | Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.searchPath">searchPath</a></code> | <code>java.lang.String</code> | Specifies the path to search to resolve unqualified object names in queries. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.serverlessTaskMaxStatementSize">serverlessTaskMaxStatementSize</a></code> | <code>java.lang.String</code> | Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.serverlessTaskMinStatementSize">serverlessTaskMinStatementSize</a></code> | <code>java.lang.String</code> | Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.simulatedDataSharingConsumer">simulatedDataSharingConsumer</a></code> | <code>java.lang.String</code> | Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.ssoLoginPage">ssoLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` \| `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.strictJsonOutput">strictJsonOutput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>java.lang.Number</code> | Specifies the number of automatic task graph retry attempts. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timeInputFormat">timeInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timeOutputFormat">timeOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampDayIsAlways24H">timestampDayIsAlways24H</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampInputFormat">timestampInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampLtzOutputFormat">timestampLtzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_LTZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampNtzOutputFormat">timestampNtzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampOutputFormat">timestampOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampTypeMapping">timestampTypeMapping</a></code> | <code>java.lang.String</code> | Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampTzOutputFormat">timestampTzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_TZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timezone">timezone</a></code> | <code>java.lang.String</code> | Specifies the time zone for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.transactionAbortOnError">transactionAbortOnError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.transactionDefaultIsolationLevel">transactionDefaultIsolationLevel</a></code> | <code>java.lang.String</code> | Specifies the isolation level for transactions in the user session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.twoDigitCenturyStart">twoDigitCenturyStart</a></code> | <code>java.lang.Number</code> | Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.unsupportedDdlAction">unsupportedDdlAction</a></code> | <code>java.lang.String</code> | Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.useCachedResult">useCachedResult</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to reuse persisted query results, if available, when a matching query is submitted. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.weekOfYearPolicy">weekOfYearPolicy</a></code> | <code>java.lang.Number</code> | Specifies how the weeks in a given year are computed. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.weekStart">weekStart</a></code> | <code>java.lang.Number</code> | Specifies the first day of the week (used by week-related date functions). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The identifier (i.e. name) for the organization account within currently used organization. The field name is validated during import and create operations to ensure that it matches the current organization account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#name CurrentOrganizationAccount#name}

---

##### `abortDetachedQuery`<sup>Optional</sup> <a name="abortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.abortDetachedQuery"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#abort_detached_query CurrentOrganizationAccount#abort_detached_query}

---

##### `activePythonProfiler`<sup>Optional</sup> <a name="activePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.activePythonProfiler"></a>

- *Type:* java.lang.String

Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#active_python_profiler CurrentOrganizationAccount#active_python_profiler}

---

##### `allowClientMfaCaching`<sup>Optional</sup> <a name="allowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.allowClientMfaCaching"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#allow_client_mfa_caching CurrentOrganizationAccount#allow_client_mfa_caching}

---

##### `allowIdToken`<sup>Optional</sup> <a name="allowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.allowIdToken"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#allow_id_token CurrentOrganizationAccount#allow_id_token}

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.autocommit"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether autocommit is enabled for the session.

Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#autocommit CurrentOrganizationAccount#autocommit}

---

##### `baseLocationPrefix`<sup>Optional</sup> <a name="baseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.baseLocationPrefix"></a>

- *Type:* java.lang.String

Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables.

For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#base_location_prefix CurrentOrganizationAccount#base_location_prefix}

---

##### `binaryInputFormat`<sup>Optional</sup> <a name="binaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.binaryInputFormat"></a>

- *Type:* java.lang.String

The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#binary_input_format CurrentOrganizationAccount#binary_input_format}

---

##### `binaryOutputFormat`<sup>Optional</sup> <a name="binaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.binaryOutputFormat"></a>

- *Type:* java.lang.String

The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#binary_output_format CurrentOrganizationAccount#binary_output_format}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.catalog"></a>

- *Type:* java.lang.String

Specifies the catalog for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#catalog CurrentOrganizationAccount#catalog}

---

##### `catalogSync`<sup>Optional</sup> <a name="catalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.catalogSync"></a>

- *Type:* java.lang.String

Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#catalog_sync CurrentOrganizationAccount#catalog_sync}

---

##### `clientEnableLogInfoStatementParameters`<sup>Optional</sup> <a name="clientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientEnableLogInfoStatementParameters"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_enable_log_info_statement_parameters CurrentOrganizationAccount#client_enable_log_info_statement_parameters}

---

##### `clientEncryptionKeySize`<sup>Optional</sup> <a name="clientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientEncryptionKeySize"></a>

- *Type:* java.lang.Number

Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type.

For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_encryption_key_size CurrentOrganizationAccount#client_encryption_key_size}

---

##### `clientMemoryLimit`<sup>Optional</sup> <a name="clientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientMemoryLimit"></a>

- *Type:* java.lang.Number

Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB).

For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_memory_limit CurrentOrganizationAccount#client_memory_limit}

---

##### `clientMetadataRequestUseConnectionCtx`<sup>Optional</sup> <a name="clientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientMetadataRequestUseConnectionCtx"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema.

The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_metadata_request_use_connection_ctx CurrentOrganizationAccount#client_metadata_request_use_connection_ctx}

---

##### `clientMetadataUseSessionDatabase`<sup>Optional</sup> <a name="clientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientMetadataUseSessionDatabase"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database.

The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_metadata_use_session_database CurrentOrganizationAccount#client_metadata_use_session_database}

---

##### `clientPrefetchThreads`<sup>Optional</sup> <a name="clientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientPrefetchThreads"></a>

- *Type:* java.lang.Number

Parameter that specifies the number of threads used by the client to pre-fetch large result sets.

The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_prefetch_threads CurrentOrganizationAccount#client_prefetch_threads}

---

##### `clientResultChunkSize`<sup>Optional</sup> <a name="clientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientResultChunkSize"></a>

- *Type:* java.lang.Number

Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB).

The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_result_chunk_size CurrentOrganizationAccount#client_result_chunk_size}

---

##### `clientResultColumnCaseInsensitive`<sup>Optional</sup> <a name="clientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientResultColumnCaseInsensitive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_result_column_case_insensitive CurrentOrganizationAccount#client_result_column_case_insensitive}

---

##### `clientSessionKeepAlive`<sup>Optional</sup> <a name="clientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientSessionKeepAlive"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Parameter that indicates whether to force a user to log in again after a period of inactivity in the session.

For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_session_keep_alive CurrentOrganizationAccount#client_session_keep_alive}

---

##### `clientSessionKeepAliveHeartbeatFrequency`<sup>Optional</sup> <a name="clientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientSessionKeepAliveHeartbeatFrequency"></a>

- *Type:* java.lang.Number

Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_session_keep_alive_heartbeat_frequency CurrentOrganizationAccount#client_session_keep_alive_heartbeat_frequency}

---

##### `clientTimestampTypeMapping`<sup>Optional</sup> <a name="clientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.clientTimestampTypeMapping"></a>

- *Type:* java.lang.String

Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_timestamp_type_mapping CurrentOrganizationAccount#client_timestamp_type_mapping}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.comment"></a>

- *Type:* java.lang.String

Specifies a comment for the organization account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#comment CurrentOrganizationAccount#comment}

---

##### `cortexEnabledCrossRegion`<sup>Optional</sup> <a name="cortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.cortexEnabledCrossRegion"></a>

- *Type:* java.lang.String

Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed.

Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#cortex_enabled_cross_region CurrentOrganizationAccount#cortex_enabled_cross_region}

---

##### `cortexModelsAllowlist`<sup>Optional</sup> <a name="cortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.cortexModelsAllowlist"></a>

- *Type:* java.lang.String

Specifies the models that users in the account can access.

Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#cortex_models_allowlist CurrentOrganizationAccount#cortex_models_allowlist}

---

##### `csvTimestampFormat`<sup>Optional</sup> <a name="csvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.csvTimestampFormat"></a>

- *Type:* java.lang.String

Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight.

If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#csv_timestamp_format CurrentOrganizationAccount#csv_timestamp_format}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.dataRetentionTimeInDays"></a>

- *Type:* java.lang.Number

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#data_retention_time_in_days CurrentOrganizationAccount#data_retention_time_in_days}

---

##### `dateInputFormat`<sup>Optional</sup> <a name="dateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.dateInputFormat"></a>

- *Type:* java.lang.String

Specifies the input format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#date_input_format CurrentOrganizationAccount#date_input_format}

---

##### `dateOutputFormat`<sup>Optional</sup> <a name="dateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.dateOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#date_output_format CurrentOrganizationAccount#date_output_format}

---

##### `defaultDdlCollation`<sup>Optional</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultDdlCollation"></a>

- *Type:* java.lang.String

Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_ddl_collation CurrentOrganizationAccount#default_ddl_collation}

---

##### `defaultNotebookComputePoolCpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultNotebookComputePoolCpu"></a>

- *Type:* java.lang.String

Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_notebook_compute_pool_cpu CurrentOrganizationAccount#default_notebook_compute_pool_cpu}

---

##### `defaultNotebookComputePoolGpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultNotebookComputePoolGpu"></a>

- *Type:* java.lang.String

Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_notebook_compute_pool_gpu CurrentOrganizationAccount#default_notebook_compute_pool_gpu}

---

##### `defaultNullOrdering`<sup>Optional</sup> <a name="defaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultNullOrdering"></a>

- *Type:* java.lang.String

Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_null_ordering CurrentOrganizationAccount#default_null_ordering}

---

##### `defaultStreamlitNotebookWarehouse`<sup>Optional</sup> <a name="defaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.defaultStreamlitNotebookWarehouse"></a>

- *Type:* java.lang.String

Specifies the name of the default warehouse to use when creating a notebook.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_streamlit_notebook_warehouse CurrentOrganizationAccount#default_streamlit_notebook_warehouse}

---

##### `disableUiDownloadButton`<sup>Optional</sup> <a name="disableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.disableUiDownloadButton"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet.

If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#disable_ui_download_button CurrentOrganizationAccount#disable_ui_download_button}

---

##### `disableUserPrivilegeGrants`<sup>Optional</sup> <a name="disableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.disableUserPrivilegeGrants"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether users in an account can grant privileges directly to other users.

Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#disable_user_privilege_grants CurrentOrganizationAccount#disable_user_privilege_grants}

---

##### `enableAutomaticSensitiveDataClassificationLog`<sup>Optional</sup> <a name="enableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableAutomaticSensitiveDataClassificationLog"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_automatic_sensitive_data_classification_log CurrentOrganizationAccount#enable_automatic_sensitive_data_classification_log}

---

##### `enableEgressCostOptimizer`<sup>Optional</sup> <a name="enableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableEgressCostOptimizer"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_egress_cost_optimizer CurrentOrganizationAccount#enable_egress_cost_optimizer}

---

##### `enableIdentifierFirstLogin`<sup>Optional</sup> <a name="enableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableIdentifierFirstLogin"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines the login flow for users.

When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_identifier_first_login CurrentOrganizationAccount#enable_identifier_first_login}

---

##### `enableInternalStagesPrivatelink`<sup>Optional</sup> <a name="enableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableInternalStagesPrivatelink"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_internal_stages_privatelink CurrentOrganizationAccount#enable_internal_stages_privatelink}

---

##### `enableTriSecretAndRekeyOptOutForImageRepository`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForImageRepository"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentOrganizationAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentOrganizationAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}

---

##### `enableUnhandledExceptionsReporting`<sup>Optional</sup> <a name="enableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableUnhandledExceptionsReporting"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code.

For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unhandled_exceptions_reporting CurrentOrganizationAccount#enable_unhandled_exceptions_reporting}

---

##### `enableUnloadPhysicalTypeOptimization`<sup>Optional</sup> <a name="enableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableUnloadPhysicalTypeOptimization"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unload_physical_type_optimization CurrentOrganizationAccount#enable_unload_physical_type_optimization}

---

##### `enableUnredactedQuerySyntaxError`<sup>Optional</sup> <a name="enableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableUnredactedQuerySyntaxError"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error.

If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unredacted_query_syntax_error CurrentOrganizationAccount#enable_unredacted_query_syntax_error}

---

##### `enableUnredactedSecureObjectError`<sup>Optional</sup> <a name="enableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enableUnredactedSecureObjectError"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether error messages related to secure objects are redacted in metadata.

For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unredacted_secure_object_error CurrentOrganizationAccount#enable_unredacted_secure_object_error}

---

##### `enforceNetworkRulesForInternalStages`<sup>Optional</sup> <a name="enforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.enforceNetworkRulesForInternalStages"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether a network policy that uses network rules can restrict access to AWS internal stages.

This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enforce_network_rules_for_internal_stages CurrentOrganizationAccount#enforce_network_rules_for_internal_stages}

---

##### `errorOnNondeterministicMerge`<sup>Optional</sup> <a name="errorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.errorOnNondeterministicMerge"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#error_on_nondeterministic_merge CurrentOrganizationAccount#error_on_nondeterministic_merge}

---

##### `errorOnNondeterministicUpdate`<sup>Optional</sup> <a name="errorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.errorOnNondeterministicUpdate"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#error_on_nondeterministic_update CurrentOrganizationAccount#error_on_nondeterministic_update}

---

##### `eventTable`<sup>Optional</sup> <a name="eventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.eventTable"></a>

- *Type:* java.lang.String

Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated.

Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#event_table CurrentOrganizationAccount#event_table}

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.externalOauthAddPrivilegedRolesToBlockedList"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server.

For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#external_oauth_add_privileged_roles_to_blocked_list CurrentOrganizationAccount#external_oauth_add_privileged_roles_to_blocked_list}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.externalVolume"></a>

- *Type:* java.lang.String

Specifies the external volume for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#external_volume CurrentOrganizationAccount#external_volume}

---

##### `geographyOutputFormat`<sup>Optional</sup> <a name="geographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.geographyOutputFormat"></a>

- *Type:* java.lang.String

Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#geography_output_format CurrentOrganizationAccount#geography_output_format}

---

##### `geometryOutputFormat`<sup>Optional</sup> <a name="geometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.geometryOutputFormat"></a>

- *Type:* java.lang.String

Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#geometry_output_format CurrentOrganizationAccount#geometry_output_format}

---

##### `hybridTableLockTimeout`<sup>Optional</sup> <a name="hybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.hybridTableLockTimeout"></a>

- *Type:* java.lang.Number

Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement.

For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#hybrid_table_lock_timeout CurrentOrganizationAccount#hybrid_table_lock_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#id CurrentOrganizationAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialReplicationSizeLimitInTb`<sup>Optional</sup> <a name="initialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.initialReplicationSizeLimitInTb"></a>

- *Type:* java.lang.String

Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB).

Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#initial_replication_size_limit_in_tb CurrentOrganizationAccount#initial_replication_size_limit_in_tb}

---

##### `jdbcTreatDecimalAsInt`<sup>Optional</sup> <a name="jdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jdbcTreatDecimalAsInt"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#jdbc_treat_decimal_as_int CurrentOrganizationAccount#jdbc_treat_decimal_as_int}

---

##### `jdbcTreatTimestampNtzAsUtc`<sup>Optional</sup> <a name="jdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jdbcTreatTimestampNtzAsUtc"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#jdbc_treat_timestamp_ntz_as_utc CurrentOrganizationAccount#jdbc_treat_timestamp_ntz_as_utc}

---

##### `jdbcUseSessionTimezone`<sup>Optional</sup> <a name="jdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jdbcUseSessionTimezone"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#jdbc_use_session_timezone CurrentOrganizationAccount#jdbc_use_session_timezone}

---

##### `jsonIndent`<sup>Optional</sup> <a name="jsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jsonIndent"></a>

- *Type:* java.lang.Number

Specifies the number of blank spaces to indent each new element in JSON output in the session.

Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#json_indent CurrentOrganizationAccount#json_indent}

---

##### `jsTreatIntegerAsBigint`<sup>Optional</sup> <a name="jsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.jsTreatIntegerAsBigint"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#js_treat_integer_as_bigint CurrentOrganizationAccount#js_treat_integer_as_bigint}

---

##### `listingAutoFulfillmentReplicationRefreshSchedule`<sup>Optional</sup> <a name="listingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.listingAutoFulfillmentReplicationRefreshSchedule"></a>

- *Type:* java.lang.String

Sets the time interval used to refresh the application package based data products to other regions.

For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#listing_auto_fulfillment_replication_refresh_schedule CurrentOrganizationAccount#listing_auto_fulfillment_replication_refresh_schedule}

---

##### `lockTimeout`<sup>Optional</sup> <a name="lockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.lockTimeout"></a>

- *Type:* java.lang.Number

Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement.

For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#lock_timeout CurrentOrganizationAccount#lock_timeout}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.logLevel"></a>

- *Type:* java.lang.String

Specifies the severity level of messages that should be ingested and made available in the active event table.

Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#log_level CurrentOrganizationAccount#log_level}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.maxConcurrencyLevel"></a>

- *Type:* java.lang.Number

Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#max_concurrency_level CurrentOrganizationAccount#max_concurrency_level}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.maxDataExtensionTimeInDays"></a>

- *Type:* java.lang.Number

Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale.

By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#max_data_extension_time_in_days CurrentOrganizationAccount#max_data_extension_time_in_days}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.metricLevel"></a>

- *Type:* java.lang.String

Controls how metrics data is ingested into the event table.

For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#metric_level CurrentOrganizationAccount#metric_level}

---

##### `minDataRetentionTimeInDays`<sup>Optional</sup> <a name="minDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.minDataRetentionTimeInDays"></a>

- *Type:* java.lang.Number

Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object.

If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#min_data_retention_time_in_days CurrentOrganizationAccount#min_data_retention_time_in_days}

---

##### `multiStatementCount`<sup>Optional</sup> <a name="multiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.multiStatementCount"></a>

- *Type:* java.lang.Number

Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#multi_statement_count CurrentOrganizationAccount#multi_statement_count}

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.networkPolicy"></a>

- *Type:* java.lang.String

Specifies the network policy to enforce for your account.

Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#network_policy CurrentOrganizationAccount#network_policy}

---

##### `noorderSequenceAsDefault`<sup>Optional</sup> <a name="noorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.noorderSequenceAsDefault"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column.

The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#noorder_sequence_as_default CurrentOrganizationAccount#noorder_sequence_as_default}

---

##### `oauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="oauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.oauthAddPrivilegedRolesToBlockedList"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server.

For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#oauth_add_privileged_roles_to_blocked_list CurrentOrganizationAccount#oauth_add_privileged_roles_to_blocked_list}

---

##### `odbcTreatDecimalAsInt`<sup>Optional</sup> <a name="odbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.odbcTreatDecimalAsInt"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#odbc_treat_decimal_as_int CurrentOrganizationAccount#odbc_treat_decimal_as_int}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.passwordPolicy"></a>

- *Type:* java.lang.String

Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#password_policy CurrentOrganizationAccount#password_policy}

---

##### `periodicDataRekeying`<sup>Optional</sup> <a name="periodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.periodicDataRekeying"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#periodic_data_rekeying CurrentOrganizationAccount#periodic_data_rekeying}

---

##### `pipeExecutionPaused`<sup>Optional</sup> <a name="pipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.pipeExecutionPaused"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#pipe_execution_paused CurrentOrganizationAccount#pipe_execution_paused}

---

##### `preventUnloadToInlineUrl`<sup>Optional</sup> <a name="preventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.preventUnloadToInlineUrl"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#prevent_unload_to_inline_url CurrentOrganizationAccount#prevent_unload_to_inline_url}

---

##### `preventUnloadToInternalStages`<sup>Optional</sup> <a name="preventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.preventUnloadToInternalStages"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#prevent_unload_to_internal_stages CurrentOrganizationAccount#prevent_unload_to_internal_stages}

---

##### `pythonProfilerModules`<sup>Optional</sup> <a name="pythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.pythonProfilerModules"></a>

- *Type:* java.lang.String

Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#python_profiler_modules CurrentOrganizationAccount#python_profiler_modules}

---

##### `pythonProfilerTargetStage`<sup>Optional</sup> <a name="pythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.pythonProfilerTargetStage"></a>

- *Type:* java.lang.String

Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#python_profiler_target_stage CurrentOrganizationAccount#python_profiler_target_stage}

---

##### `queryTag`<sup>Optional</sup> <a name="queryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.queryTag"></a>

- *Type:* java.lang.String

Optional string that can be used to tag queries and other SQL statements executed within a session.

The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#query_tag CurrentOrganizationAccount#query_tag}

---

##### `quotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.quotedIdentifiersIgnoreCase"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters.

By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#quoted_identifiers_ignore_case CurrentOrganizationAccount#quoted_identifiers_ignore_case}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.replaceInvalidCharacters"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#replace_invalid_characters CurrentOrganizationAccount#replace_invalid_characters}

---

##### `requireStorageIntegrationForStageCreation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.requireStorageIntegrationForStageCreation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#require_storage_integration_for_stage_creation CurrentOrganizationAccount#require_storage_integration_for_stage_creation}

---

##### `requireStorageIntegrationForStageOperation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.requireStorageIntegrationForStageOperation"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location.

For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#require_storage_integration_for_stage_operation CurrentOrganizationAccount#require_storage_integration_for_stage_operation}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.resourceMonitor"></a>

- *Type:* java.lang.String

Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#resource_monitor CurrentOrganizationAccount#resource_monitor}

---

##### `rowsPerResultset`<sup>Optional</sup> <a name="rowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.rowsPerResultset"></a>

- *Type:* java.lang.Number

Specifies the maximum number of rows returned in a result set.

A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#rows_per_resultset CurrentOrganizationAccount#rows_per_resultset}

---

##### `s3StageVpceDnsName`<sup>Optional</sup> <a name="s3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.s3StageVpceDnsName"></a>

- *Type:* java.lang.String

Specifies the DNS name of an Amazon S3 interface endpoint.

Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#s3_stage_vpce_dns_name CurrentOrganizationAccount#s3_stage_vpce_dns_name}

---

##### `samlIdentityProvider`<sup>Optional</sup> <a name="samlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.samlIdentityProvider"></a>

- *Type:* java.lang.String

Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#saml_identity_provider CurrentOrganizationAccount#saml_identity_provider}

---

##### `searchPath`<sup>Optional</sup> <a name="searchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.searchPath"></a>

- *Type:* java.lang.String

Specifies the path to search to resolve unqualified object names in queries.

For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#search_path CurrentOrganizationAccount#search_path}

---

##### `serverlessTaskMaxStatementSize`<sup>Optional</sup> <a name="serverlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.serverlessTaskMaxStatementSize"></a>

- *Type:* java.lang.String

Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#serverless_task_max_statement_size CurrentOrganizationAccount#serverless_task_max_statement_size}

---

##### `serverlessTaskMinStatementSize`<sup>Optional</sup> <a name="serverlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.serverlessTaskMinStatementSize"></a>

- *Type:* java.lang.String

Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#serverless_task_min_statement_size CurrentOrganizationAccount#serverless_task_min_statement_size}

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.sessionPolicy"></a>

- *Type:* java.lang.String

Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#session_policy CurrentOrganizationAccount#session_policy}

---

##### `simulatedDataSharingConsumer`<sup>Optional</sup> <a name="simulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.simulatedDataSharingConsumer"></a>

- *Type:* java.lang.String

Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views.

When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#simulated_data_sharing_consumer CurrentOrganizationAccount#simulated_data_sharing_consumer}

---

##### `ssoLoginPage`<sup>Optional</sup> <a name="ssoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.ssoLoginPage"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users.

For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#sso_login_page CurrentOrganizationAccount#sso_login_page}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.statementQueuedTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#statement_queued_timeout_in_seconds CurrentOrganizationAccount#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.statementTimeoutInSeconds"></a>

- *Type:* java.lang.Number

Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#statement_timeout_in_seconds CurrentOrganizationAccount#statement_timeout_in_seconds}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.storageSerializationPolicy"></a>

- *Type:* java.lang.String

Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#storage_serialization_policy CurrentOrganizationAccount#storage_serialization_policy}

---

##### `strictJsonOutput`<sup>Optional</sup> <a name="strictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.strictJsonOutput"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#strict_json_output CurrentOrganizationAccount#strict_json_output}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.suspendTaskAfterNumFailures"></a>

- *Type:* java.lang.Number

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#suspend_task_after_num_failures CurrentOrganizationAccount#suspend_task_after_num_failures}

---

##### `taskAutoRetryAttempts`<sup>Optional</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.taskAutoRetryAttempts"></a>

- *Type:* java.lang.Number

Specifies the number of automatic task graph retry attempts.

If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#task_auto_retry_attempts CurrentOrganizationAccount#task_auto_retry_attempts}

---

##### `timeInputFormat`<sup>Optional</sup> <a name="timeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timeInputFormat"></a>

- *Type:* java.lang.String

Specifies the input format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#time_input_format CurrentOrganizationAccount#time_input_format}

---

##### `timeOutputFormat`<sup>Optional</sup> <a name="timeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timeOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#time_output_format CurrentOrganizationAccount#time_output_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timeouts CurrentOrganizationAccount#timeouts}

---

##### `timestampDayIsAlways24H`<sup>Optional</sup> <a name="timestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampDayIsAlways24H"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_day_is_always_24h CurrentOrganizationAccount#timestamp_day_is_always_24h}

---

##### `timestampInputFormat`<sup>Optional</sup> <a name="timestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampInputFormat"></a>

- *Type:* java.lang.String

Specifies the input format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_input_format CurrentOrganizationAccount#timestamp_input_format}

---

##### `timestampLtzOutputFormat`<sup>Optional</sup> <a name="timestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampLtzOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_LTZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_ltz_output_format CurrentOrganizationAccount#timestamp_ltz_output_format}

---

##### `timestampNtzOutputFormat`<sup>Optional</sup> <a name="timestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampNtzOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_ntz_output_format CurrentOrganizationAccount#timestamp_ntz_output_format}

---

##### `timestampOutputFormat`<sup>Optional</sup> <a name="timestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_output_format CurrentOrganizationAccount#timestamp_output_format}

---

##### `timestampTypeMapping`<sup>Optional</sup> <a name="timestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampTypeMapping"></a>

- *Type:* java.lang.String

Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to.

Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_type_mapping CurrentOrganizationAccount#timestamp_type_mapping}

---

##### `timestampTzOutputFormat`<sup>Optional</sup> <a name="timestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timestampTzOutputFormat"></a>

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_TZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_tz_output_format CurrentOrganizationAccount#timestamp_tz_output_format}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.timezone"></a>

- *Type:* java.lang.String

Specifies the time zone for the session.

You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timezone CurrentOrganizationAccount#timezone}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.traceLevel"></a>

- *Type:* java.lang.String

Controls how trace events are ingested into the event table.

For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#trace_level CurrentOrganizationAccount#trace_level}

---

##### `transactionAbortOnError`<sup>Optional</sup> <a name="transactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.transactionAbortOnError"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error.

For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#transaction_abort_on_error CurrentOrganizationAccount#transaction_abort_on_error}

---

##### `transactionDefaultIsolationLevel`<sup>Optional</sup> <a name="transactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.transactionDefaultIsolationLevel"></a>

- *Type:* java.lang.String

Specifies the isolation level for transactions in the user session.

Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#transaction_default_isolation_level CurrentOrganizationAccount#transaction_default_isolation_level}

---

##### `twoDigitCenturyStart`<sup>Optional</sup> <a name="twoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.twoDigitCenturyStart"></a>

- *Type:* java.lang.Number

Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#two_digit_century_start CurrentOrganizationAccount#two_digit_century_start}

---

##### `unsupportedDdlAction`<sup>Optional</sup> <a name="unsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.unsupportedDdlAction"></a>

- *Type:* java.lang.String

Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#unsupported_ddl_action CurrentOrganizationAccount#unsupported_ddl_action}

---

##### `useCachedResult`<sup>Optional</sup> <a name="useCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.useCachedResult"></a>

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to reuse persisted query results, if available, when a matching query is submitted.

For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#use_cached_result CurrentOrganizationAccount#use_cached_result}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.userTaskManagedInitialWarehouseSize"></a>

- *Type:* java.lang.String

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#user_task_managed_initial_warehouse_size CurrentOrganizationAccount#user_task_managed_initial_warehouse_size}

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.userTaskMinimumTriggerIntervalInSeconds"></a>

- *Type:* java.lang.Number

Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#user_task_minimum_trigger_interval_in_seconds CurrentOrganizationAccount#user_task_minimum_trigger_interval_in_seconds}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.userTaskTimeoutMs"></a>

- *Type:* java.lang.Number

Specifies the time limit on a single run of the task before it times out (in milliseconds).

For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#user_task_timeout_ms CurrentOrganizationAccount#user_task_timeout_ms}

---

##### `weekOfYearPolicy`<sup>Optional</sup> <a name="weekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.weekOfYearPolicy"></a>

- *Type:* java.lang.Number

Specifies how the weeks in a given year are computed.

`0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#week_of_year_policy CurrentOrganizationAccount#week_of_year_policy}

---

##### `weekStart`<sup>Optional</sup> <a name="weekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.weekStart"></a>

- *Type:* java.lang.Number

Specifies the first day of the week (used by week-related date functions).

`0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#week_start CurrentOrganizationAccount#week_start}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAbortDetachedQuery">resetAbortDetachedQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetActivePythonProfiler">resetActivePythonProfiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowClientMfaCaching">resetAllowClientMfaCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowIdToken">resetAllowIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAutocommit">resetAutocommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBaseLocationPrefix">resetBaseLocationPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryInputFormat">resetBinaryInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryOutputFormat">resetBinaryOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalog">resetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalogSync">resetCatalogSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEnableLogInfoStatementParameters">resetClientEnableLogInfoStatementParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEncryptionKeySize">resetClientEncryptionKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMemoryLimit">resetClientMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataRequestUseConnectionCtx">resetClientMetadataRequestUseConnectionCtx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataUseSessionDatabase">resetClientMetadataUseSessionDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientPrefetchThreads">resetClientPrefetchThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultChunkSize">resetClientResultChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultColumnCaseInsensitive">resetClientResultColumnCaseInsensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAlive">resetClientSessionKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAliveHeartbeatFrequency">resetClientSessionKeepAliveHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientTimestampTypeMapping">resetClientTimestampTypeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexEnabledCrossRegion">resetCortexEnabledCrossRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexModelsAllowlist">resetCortexModelsAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCsvTimestampFormat">resetCsvTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateInputFormat">resetDateInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateOutputFormat">resetDateOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultDdlCollation">resetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolCpu">resetDefaultNotebookComputePoolCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolGpu">resetDefaultNotebookComputePoolGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNullOrdering">resetDefaultNullOrdering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultStreamlitNotebookWarehouse">resetDefaultStreamlitNotebookWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUiDownloadButton">resetDisableUiDownloadButton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUserPrivilegeGrants">resetDisableUserPrivilegeGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableAutomaticSensitiveDataClassificationLog">resetEnableAutomaticSensitiveDataClassificationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableEgressCostOptimizer">resetEnableEgressCostOptimizer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableIdentifierFirstLogin">resetEnableIdentifierFirstLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableInternalStagesPrivatelink">resetEnableInternalStagesPrivatelink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository">resetEnableTriSecretAndRekeyOptOutForImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage">resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnhandledExceptionsReporting">resetEnableUnhandledExceptionsReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnloadPhysicalTypeOptimization">resetEnableUnloadPhysicalTypeOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedQuerySyntaxError">resetEnableUnredactedQuerySyntaxError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedSecureObjectError">resetEnableUnredactedSecureObjectError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnforceNetworkRulesForInternalStages">resetEnforceNetworkRulesForInternalStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicMerge">resetErrorOnNondeterministicMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicUpdate">resetErrorOnNondeterministicUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEventTable">resetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalOauthAddPrivilegedRolesToBlockedList">resetExternalOauthAddPrivilegedRolesToBlockedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalVolume">resetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeographyOutputFormat">resetGeographyOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeometryOutputFormat">resetGeometryOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetHybridTableLockTimeout">resetHybridTableLockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetInitialReplicationSizeLimitInTb">resetInitialReplicationSizeLimitInTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatDecimalAsInt">resetJdbcTreatDecimalAsInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatTimestampNtzAsUtc">resetJdbcTreatTimestampNtzAsUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcUseSessionTimezone">resetJdbcUseSessionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsonIndent">resetJsonIndent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsTreatIntegerAsBigint">resetJsTreatIntegerAsBigint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetListingAutoFulfillmentReplicationRefreshSchedule">resetListingAutoFulfillmentReplicationRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLockTimeout">resetLockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLogLevel">resetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxConcurrencyLevel">resetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxDataExtensionTimeInDays">resetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMetricLevel">resetMetricLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMinDataRetentionTimeInDays">resetMinDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMultiStatementCount">resetMultiStatementCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNetworkPolicy">resetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNoorderSequenceAsDefault">resetNoorderSequenceAsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOauthAddPrivilegedRolesToBlockedList">resetOauthAddPrivilegedRolesToBlockedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOdbcTreatDecimalAsInt">resetOdbcTreatDecimalAsInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPasswordPolicy">resetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPeriodicDataRekeying">resetPeriodicDataRekeying</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPipeExecutionPaused">resetPipeExecutionPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInlineUrl">resetPreventUnloadToInlineUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInternalStages">resetPreventUnloadToInternalStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerModules">resetPythonProfilerModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerTargetStage">resetPythonProfilerTargetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQueryTag">resetQueryTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQuotedIdentifiersIgnoreCase">resetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetReplaceInvalidCharacters">resetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageCreation">resetRequireStorageIntegrationForStageCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageOperation">resetRequireStorageIntegrationForStageOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetResourceMonitor">resetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRowsPerResultset">resetRowsPerResultset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetS3StageVpceDnsName">resetS3StageVpceDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSamlIdentityProvider">resetSamlIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSearchPath">resetSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMaxStatementSize">resetServerlessTaskMaxStatementSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMinStatementSize">resetServerlessTaskMinStatementSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSessionPolicy">resetSessionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSimulatedDataSharingConsumer">resetSimulatedDataSharingConsumer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSsoLoginPage">resetSsoLoginPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementQueuedTimeoutInSeconds">resetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementTimeoutInSeconds">resetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStorageSerializationPolicy">resetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStrictJsonOutput">resetStrictJsonOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSuspendTaskAfterNumFailures">resetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTaskAutoRetryAttempts">resetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeInputFormat">resetTimeInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeOutputFormat">resetTimeOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampDayIsAlways24H">resetTimestampDayIsAlways24H</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampInputFormat">resetTimestampInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampLtzOutputFormat">resetTimestampLtzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampNtzOutputFormat">resetTimestampNtzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampOutputFormat">resetTimestampOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTypeMapping">resetTimestampTypeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTzOutputFormat">resetTimestampTzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimezone">resetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTraceLevel">resetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionAbortOnError">resetTransactionAbortOnError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionDefaultIsolationLevel">resetTransactionDefaultIsolationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTwoDigitCenturyStart">resetTwoDigitCenturyStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUnsupportedDdlAction">resetUnsupportedDdlAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUseCachedResult">resetUseCachedResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskManagedInitialWarehouseSize">resetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskMinimumTriggerIntervalInSeconds">resetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskTimeoutMs">resetUserTaskTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekOfYearPolicy">resetWeekOfYearPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekStart">resetWeekStart</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.putTimeouts"></a>

```java
public void putTimeouts(CurrentOrganizationAccountTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

---

##### `resetAbortDetachedQuery` <a name="resetAbortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAbortDetachedQuery"></a>

```java
public void resetAbortDetachedQuery()
```

##### `resetActivePythonProfiler` <a name="resetActivePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetActivePythonProfiler"></a>

```java
public void resetActivePythonProfiler()
```

##### `resetAllowClientMfaCaching` <a name="resetAllowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowClientMfaCaching"></a>

```java
public void resetAllowClientMfaCaching()
```

##### `resetAllowIdToken` <a name="resetAllowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowIdToken"></a>

```java
public void resetAllowIdToken()
```

##### `resetAutocommit` <a name="resetAutocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAutocommit"></a>

```java
public void resetAutocommit()
```

##### `resetBaseLocationPrefix` <a name="resetBaseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBaseLocationPrefix"></a>

```java
public void resetBaseLocationPrefix()
```

##### `resetBinaryInputFormat` <a name="resetBinaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryInputFormat"></a>

```java
public void resetBinaryInputFormat()
```

##### `resetBinaryOutputFormat` <a name="resetBinaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryOutputFormat"></a>

```java
public void resetBinaryOutputFormat()
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalog"></a>

```java
public void resetCatalog()
```

##### `resetCatalogSync` <a name="resetCatalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalogSync"></a>

```java
public void resetCatalogSync()
```

##### `resetClientEnableLogInfoStatementParameters` <a name="resetClientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEnableLogInfoStatementParameters"></a>

```java
public void resetClientEnableLogInfoStatementParameters()
```

##### `resetClientEncryptionKeySize` <a name="resetClientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEncryptionKeySize"></a>

```java
public void resetClientEncryptionKeySize()
```

##### `resetClientMemoryLimit` <a name="resetClientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMemoryLimit"></a>

```java
public void resetClientMemoryLimit()
```

##### `resetClientMetadataRequestUseConnectionCtx` <a name="resetClientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataRequestUseConnectionCtx"></a>

```java
public void resetClientMetadataRequestUseConnectionCtx()
```

##### `resetClientMetadataUseSessionDatabase` <a name="resetClientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataUseSessionDatabase"></a>

```java
public void resetClientMetadataUseSessionDatabase()
```

##### `resetClientPrefetchThreads` <a name="resetClientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientPrefetchThreads"></a>

```java
public void resetClientPrefetchThreads()
```

##### `resetClientResultChunkSize` <a name="resetClientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultChunkSize"></a>

```java
public void resetClientResultChunkSize()
```

##### `resetClientResultColumnCaseInsensitive` <a name="resetClientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultColumnCaseInsensitive"></a>

```java
public void resetClientResultColumnCaseInsensitive()
```

##### `resetClientSessionKeepAlive` <a name="resetClientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAlive"></a>

```java
public void resetClientSessionKeepAlive()
```

##### `resetClientSessionKeepAliveHeartbeatFrequency` <a name="resetClientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAliveHeartbeatFrequency"></a>

```java
public void resetClientSessionKeepAliveHeartbeatFrequency()
```

##### `resetClientTimestampTypeMapping` <a name="resetClientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientTimestampTypeMapping"></a>

```java
public void resetClientTimestampTypeMapping()
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetComment"></a>

```java
public void resetComment()
```

##### `resetCortexEnabledCrossRegion` <a name="resetCortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexEnabledCrossRegion"></a>

```java
public void resetCortexEnabledCrossRegion()
```

##### `resetCortexModelsAllowlist` <a name="resetCortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexModelsAllowlist"></a>

```java
public void resetCortexModelsAllowlist()
```

##### `resetCsvTimestampFormat` <a name="resetCsvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCsvTimestampFormat"></a>

```java
public void resetCsvTimestampFormat()
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDataRetentionTimeInDays"></a>

```java
public void resetDataRetentionTimeInDays()
```

##### `resetDateInputFormat` <a name="resetDateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateInputFormat"></a>

```java
public void resetDateInputFormat()
```

##### `resetDateOutputFormat` <a name="resetDateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateOutputFormat"></a>

```java
public void resetDateOutputFormat()
```

##### `resetDefaultDdlCollation` <a name="resetDefaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultDdlCollation"></a>

```java
public void resetDefaultDdlCollation()
```

##### `resetDefaultNotebookComputePoolCpu` <a name="resetDefaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolCpu"></a>

```java
public void resetDefaultNotebookComputePoolCpu()
```

##### `resetDefaultNotebookComputePoolGpu` <a name="resetDefaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolGpu"></a>

```java
public void resetDefaultNotebookComputePoolGpu()
```

##### `resetDefaultNullOrdering` <a name="resetDefaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNullOrdering"></a>

```java
public void resetDefaultNullOrdering()
```

##### `resetDefaultStreamlitNotebookWarehouse` <a name="resetDefaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultStreamlitNotebookWarehouse"></a>

```java
public void resetDefaultStreamlitNotebookWarehouse()
```

##### `resetDisableUiDownloadButton` <a name="resetDisableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUiDownloadButton"></a>

```java
public void resetDisableUiDownloadButton()
```

##### `resetDisableUserPrivilegeGrants` <a name="resetDisableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUserPrivilegeGrants"></a>

```java
public void resetDisableUserPrivilegeGrants()
```

##### `resetEnableAutomaticSensitiveDataClassificationLog` <a name="resetEnableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableAutomaticSensitiveDataClassificationLog"></a>

```java
public void resetEnableAutomaticSensitiveDataClassificationLog()
```

##### `resetEnableEgressCostOptimizer` <a name="resetEnableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableEgressCostOptimizer"></a>

```java
public void resetEnableEgressCostOptimizer()
```

##### `resetEnableIdentifierFirstLogin` <a name="resetEnableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableIdentifierFirstLogin"></a>

```java
public void resetEnableIdentifierFirstLogin()
```

##### `resetEnableInternalStagesPrivatelink` <a name="resetEnableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableInternalStagesPrivatelink"></a>

```java
public void resetEnableInternalStagesPrivatelink()
```

##### `resetEnableTriSecretAndRekeyOptOutForImageRepository` <a name="resetEnableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository"></a>

```java
public void resetEnableTriSecretAndRekeyOptOutForImageRepository()
```

##### `resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage` <a name="resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```java
public void resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage()
```

##### `resetEnableUnhandledExceptionsReporting` <a name="resetEnableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnhandledExceptionsReporting"></a>

```java
public void resetEnableUnhandledExceptionsReporting()
```

##### `resetEnableUnloadPhysicalTypeOptimization` <a name="resetEnableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnloadPhysicalTypeOptimization"></a>

```java
public void resetEnableUnloadPhysicalTypeOptimization()
```

##### `resetEnableUnredactedQuerySyntaxError` <a name="resetEnableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedQuerySyntaxError"></a>

```java
public void resetEnableUnredactedQuerySyntaxError()
```

##### `resetEnableUnredactedSecureObjectError` <a name="resetEnableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedSecureObjectError"></a>

```java
public void resetEnableUnredactedSecureObjectError()
```

##### `resetEnforceNetworkRulesForInternalStages` <a name="resetEnforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnforceNetworkRulesForInternalStages"></a>

```java
public void resetEnforceNetworkRulesForInternalStages()
```

##### `resetErrorOnNondeterministicMerge` <a name="resetErrorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicMerge"></a>

```java
public void resetErrorOnNondeterministicMerge()
```

##### `resetErrorOnNondeterministicUpdate` <a name="resetErrorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicUpdate"></a>

```java
public void resetErrorOnNondeterministicUpdate()
```

##### `resetEventTable` <a name="resetEventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEventTable"></a>

```java
public void resetEventTable()
```

##### `resetExternalOauthAddPrivilegedRolesToBlockedList` <a name="resetExternalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalOauthAddPrivilegedRolesToBlockedList"></a>

```java
public void resetExternalOauthAddPrivilegedRolesToBlockedList()
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalVolume"></a>

```java
public void resetExternalVolume()
```

##### `resetGeographyOutputFormat` <a name="resetGeographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeographyOutputFormat"></a>

```java
public void resetGeographyOutputFormat()
```

##### `resetGeometryOutputFormat` <a name="resetGeometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeometryOutputFormat"></a>

```java
public void resetGeometryOutputFormat()
```

##### `resetHybridTableLockTimeout` <a name="resetHybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetHybridTableLockTimeout"></a>

```java
public void resetHybridTableLockTimeout()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetId"></a>

```java
public void resetId()
```

##### `resetInitialReplicationSizeLimitInTb` <a name="resetInitialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetInitialReplicationSizeLimitInTb"></a>

```java
public void resetInitialReplicationSizeLimitInTb()
```

##### `resetJdbcTreatDecimalAsInt` <a name="resetJdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatDecimalAsInt"></a>

```java
public void resetJdbcTreatDecimalAsInt()
```

##### `resetJdbcTreatTimestampNtzAsUtc` <a name="resetJdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatTimestampNtzAsUtc"></a>

```java
public void resetJdbcTreatTimestampNtzAsUtc()
```

##### `resetJdbcUseSessionTimezone` <a name="resetJdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcUseSessionTimezone"></a>

```java
public void resetJdbcUseSessionTimezone()
```

##### `resetJsonIndent` <a name="resetJsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsonIndent"></a>

```java
public void resetJsonIndent()
```

##### `resetJsTreatIntegerAsBigint` <a name="resetJsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsTreatIntegerAsBigint"></a>

```java
public void resetJsTreatIntegerAsBigint()
```

##### `resetListingAutoFulfillmentReplicationRefreshSchedule` <a name="resetListingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetListingAutoFulfillmentReplicationRefreshSchedule"></a>

```java
public void resetListingAutoFulfillmentReplicationRefreshSchedule()
```

##### `resetLockTimeout` <a name="resetLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLockTimeout"></a>

```java
public void resetLockTimeout()
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLogLevel"></a>

```java
public void resetLogLevel()
```

##### `resetMaxConcurrencyLevel` <a name="resetMaxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxConcurrencyLevel"></a>

```java
public void resetMaxConcurrencyLevel()
```

##### `resetMaxDataExtensionTimeInDays` <a name="resetMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxDataExtensionTimeInDays"></a>

```java
public void resetMaxDataExtensionTimeInDays()
```

##### `resetMetricLevel` <a name="resetMetricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMetricLevel"></a>

```java
public void resetMetricLevel()
```

##### `resetMinDataRetentionTimeInDays` <a name="resetMinDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMinDataRetentionTimeInDays"></a>

```java
public void resetMinDataRetentionTimeInDays()
```

##### `resetMultiStatementCount` <a name="resetMultiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMultiStatementCount"></a>

```java
public void resetMultiStatementCount()
```

##### `resetNetworkPolicy` <a name="resetNetworkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNetworkPolicy"></a>

```java
public void resetNetworkPolicy()
```

##### `resetNoorderSequenceAsDefault` <a name="resetNoorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNoorderSequenceAsDefault"></a>

```java
public void resetNoorderSequenceAsDefault()
```

##### `resetOauthAddPrivilegedRolesToBlockedList` <a name="resetOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOauthAddPrivilegedRolesToBlockedList"></a>

```java
public void resetOauthAddPrivilegedRolesToBlockedList()
```

##### `resetOdbcTreatDecimalAsInt` <a name="resetOdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOdbcTreatDecimalAsInt"></a>

```java
public void resetOdbcTreatDecimalAsInt()
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPasswordPolicy"></a>

```java
public void resetPasswordPolicy()
```

##### `resetPeriodicDataRekeying` <a name="resetPeriodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPeriodicDataRekeying"></a>

```java
public void resetPeriodicDataRekeying()
```

##### `resetPipeExecutionPaused` <a name="resetPipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPipeExecutionPaused"></a>

```java
public void resetPipeExecutionPaused()
```

##### `resetPreventUnloadToInlineUrl` <a name="resetPreventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInlineUrl"></a>

```java
public void resetPreventUnloadToInlineUrl()
```

##### `resetPreventUnloadToInternalStages` <a name="resetPreventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInternalStages"></a>

```java
public void resetPreventUnloadToInternalStages()
```

##### `resetPythonProfilerModules` <a name="resetPythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerModules"></a>

```java
public void resetPythonProfilerModules()
```

##### `resetPythonProfilerTargetStage` <a name="resetPythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerTargetStage"></a>

```java
public void resetPythonProfilerTargetStage()
```

##### `resetQueryTag` <a name="resetQueryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQueryTag"></a>

```java
public void resetQueryTag()
```

##### `resetQuotedIdentifiersIgnoreCase` <a name="resetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQuotedIdentifiersIgnoreCase"></a>

```java
public void resetQuotedIdentifiersIgnoreCase()
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetReplaceInvalidCharacters"></a>

```java
public void resetReplaceInvalidCharacters()
```

##### `resetRequireStorageIntegrationForStageCreation` <a name="resetRequireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageCreation"></a>

```java
public void resetRequireStorageIntegrationForStageCreation()
```

##### `resetRequireStorageIntegrationForStageOperation` <a name="resetRequireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageOperation"></a>

```java
public void resetRequireStorageIntegrationForStageOperation()
```

##### `resetResourceMonitor` <a name="resetResourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetResourceMonitor"></a>

```java
public void resetResourceMonitor()
```

##### `resetRowsPerResultset` <a name="resetRowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRowsPerResultset"></a>

```java
public void resetRowsPerResultset()
```

##### `resetS3StageVpceDnsName` <a name="resetS3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetS3StageVpceDnsName"></a>

```java
public void resetS3StageVpceDnsName()
```

##### `resetSamlIdentityProvider` <a name="resetSamlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSamlIdentityProvider"></a>

```java
public void resetSamlIdentityProvider()
```

##### `resetSearchPath` <a name="resetSearchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSearchPath"></a>

```java
public void resetSearchPath()
```

##### `resetServerlessTaskMaxStatementSize` <a name="resetServerlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMaxStatementSize"></a>

```java
public void resetServerlessTaskMaxStatementSize()
```

##### `resetServerlessTaskMinStatementSize` <a name="resetServerlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMinStatementSize"></a>

```java
public void resetServerlessTaskMinStatementSize()
```

##### `resetSessionPolicy` <a name="resetSessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSessionPolicy"></a>

```java
public void resetSessionPolicy()
```

##### `resetSimulatedDataSharingConsumer` <a name="resetSimulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSimulatedDataSharingConsumer"></a>

```java
public void resetSimulatedDataSharingConsumer()
```

##### `resetSsoLoginPage` <a name="resetSsoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSsoLoginPage"></a>

```java
public void resetSsoLoginPage()
```

##### `resetStatementQueuedTimeoutInSeconds` <a name="resetStatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementQueuedTimeoutInSeconds"></a>

```java
public void resetStatementQueuedTimeoutInSeconds()
```

##### `resetStatementTimeoutInSeconds` <a name="resetStatementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementTimeoutInSeconds"></a>

```java
public void resetStatementTimeoutInSeconds()
```

##### `resetStorageSerializationPolicy` <a name="resetStorageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStorageSerializationPolicy"></a>

```java
public void resetStorageSerializationPolicy()
```

##### `resetStrictJsonOutput` <a name="resetStrictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStrictJsonOutput"></a>

```java
public void resetStrictJsonOutput()
```

##### `resetSuspendTaskAfterNumFailures` <a name="resetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSuspendTaskAfterNumFailures"></a>

```java
public void resetSuspendTaskAfterNumFailures()
```

##### `resetTaskAutoRetryAttempts` <a name="resetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTaskAutoRetryAttempts"></a>

```java
public void resetTaskAutoRetryAttempts()
```

##### `resetTimeInputFormat` <a name="resetTimeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeInputFormat"></a>

```java
public void resetTimeInputFormat()
```

##### `resetTimeOutputFormat` <a name="resetTimeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeOutputFormat"></a>

```java
public void resetTimeOutputFormat()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTimestampDayIsAlways24H` <a name="resetTimestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampDayIsAlways24H"></a>

```java
public void resetTimestampDayIsAlways24H()
```

##### `resetTimestampInputFormat` <a name="resetTimestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampInputFormat"></a>

```java
public void resetTimestampInputFormat()
```

##### `resetTimestampLtzOutputFormat` <a name="resetTimestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampLtzOutputFormat"></a>

```java
public void resetTimestampLtzOutputFormat()
```

##### `resetTimestampNtzOutputFormat` <a name="resetTimestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampNtzOutputFormat"></a>

```java
public void resetTimestampNtzOutputFormat()
```

##### `resetTimestampOutputFormat` <a name="resetTimestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampOutputFormat"></a>

```java
public void resetTimestampOutputFormat()
```

##### `resetTimestampTypeMapping` <a name="resetTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTypeMapping"></a>

```java
public void resetTimestampTypeMapping()
```

##### `resetTimestampTzOutputFormat` <a name="resetTimestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTzOutputFormat"></a>

```java
public void resetTimestampTzOutputFormat()
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimezone"></a>

```java
public void resetTimezone()
```

##### `resetTraceLevel` <a name="resetTraceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTraceLevel"></a>

```java
public void resetTraceLevel()
```

##### `resetTransactionAbortOnError` <a name="resetTransactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionAbortOnError"></a>

```java
public void resetTransactionAbortOnError()
```

##### `resetTransactionDefaultIsolationLevel` <a name="resetTransactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionDefaultIsolationLevel"></a>

```java
public void resetTransactionDefaultIsolationLevel()
```

##### `resetTwoDigitCenturyStart` <a name="resetTwoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTwoDigitCenturyStart"></a>

```java
public void resetTwoDigitCenturyStart()
```

##### `resetUnsupportedDdlAction` <a name="resetUnsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUnsupportedDdlAction"></a>

```java
public void resetUnsupportedDdlAction()
```

##### `resetUseCachedResult` <a name="resetUseCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUseCachedResult"></a>

```java
public void resetUseCachedResult()
```

##### `resetUserTaskManagedInitialWarehouseSize` <a name="resetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskManagedInitialWarehouseSize"></a>

```java
public void resetUserTaskManagedInitialWarehouseSize()
```

##### `resetUserTaskMinimumTriggerIntervalInSeconds` <a name="resetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```java
public void resetUserTaskMinimumTriggerIntervalInSeconds()
```

##### `resetUserTaskTimeoutMs` <a name="resetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskTimeoutMs"></a>

```java
public void resetUserTaskTimeoutMs()
```

##### `resetWeekOfYearPolicy` <a name="resetWeekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekOfYearPolicy"></a>

```java
public void resetWeekOfYearPolicy()
```

##### `resetWeekStart` <a name="resetWeekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekStart"></a>

```java
public void resetWeekStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CurrentOrganizationAccount resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccount;

CurrentOrganizationAccount.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccount;

CurrentOrganizationAccount.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccount;

CurrentOrganizationAccount.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccount;

CurrentOrganizationAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CurrentOrganizationAccount.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CurrentOrganizationAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CurrentOrganizationAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CurrentOrganizationAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CurrentOrganizationAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList">CurrentOrganizationAccountShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference">CurrentOrganizationAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQueryInput">abortDetachedQueryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfilerInput">activePythonProfilerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCachingInput">allowClientMfaCachingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdTokenInput">allowIdTokenInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommitInput">autocommitInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefixInput">baseLocationPrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormatInput">binaryInputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormatInput">binaryOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogInput">catalogInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSyncInput">catalogSyncInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParametersInput">clientEnableLogInfoStatementParametersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySizeInput">clientEncryptionKeySizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimitInput">clientMemoryLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtxInput">clientMetadataRequestUseConnectionCtxInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabaseInput">clientMetadataUseSessionDatabaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreadsInput">clientPrefetchThreadsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSizeInput">clientResultChunkSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitiveInput">clientResultColumnCaseInsensitiveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput">clientSessionKeepAliveHeartbeatFrequencyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveInput">clientSessionKeepAliveInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMappingInput">clientTimestampTypeMappingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegionInput">cortexEnabledCrossRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlistInput">cortexModelsAllowlistInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormatInput">csvTimestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormatInput">dateInputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormatInput">dateOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollationInput">defaultDdlCollationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpuInput">defaultNotebookComputePoolCpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpuInput">defaultNotebookComputePoolGpuInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrderingInput">defaultNullOrderingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouseInput">defaultStreamlitNotebookWarehouseInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButtonInput">disableUiDownloadButtonInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrantsInput">disableUserPrivilegeGrantsInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLogInput">enableAutomaticSensitiveDataClassificationLogInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizerInput">enableEgressCostOptimizerInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLoginInput">enableIdentifierFirstLoginInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelinkInput">enableInternalStagesPrivatelinkInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput">enableTriSecretAndRekeyOptOutForImageRepositoryInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput">enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReportingInput">enableUnhandledExceptionsReportingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimizationInput">enableUnloadPhysicalTypeOptimizationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxErrorInput">enableUnredactedQuerySyntaxErrorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectErrorInput">enableUnredactedSecureObjectErrorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStagesInput">enforceNetworkRulesForInternalStagesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMergeInput">errorOnNondeterministicMergeInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdateInput">errorOnNondeterministicUpdateInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTableInput">eventTableInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput">externalOauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolumeInput">externalVolumeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormatInput">geographyOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormatInput">geometryOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeoutInput">hybridTableLockTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTbInput">initialReplicationSizeLimitInTbInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsIntInput">jdbcTreatDecimalAsIntInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtcInput">jdbcTreatTimestampNtzAsUtcInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezoneInput">jdbcUseSessionTimezoneInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndentInput">jsonIndentInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigintInput">jsTreatIntegerAsBigintInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput">listingAutoFulfillmentReplicationRefreshScheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeoutInput">lockTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevelInput">logLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevelInput">maxConcurrencyLevelInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDaysInput">maxDataExtensionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevelInput">metricLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDaysInput">minDataRetentionTimeInDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCountInput">multiStatementCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicyInput">networkPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefaultInput">noorderSequenceAsDefaultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedListInput">oauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsIntInput">odbcTreatDecimalAsIntInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeyingInput">periodicDataRekeyingInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPausedInput">pipeExecutionPausedInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrlInput">preventUnloadToInlineUrlInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStagesInput">preventUnloadToInternalStagesInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModulesInput">pythonProfilerModulesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStageInput">pythonProfilerTargetStageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTagInput">queryTagInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCaseInput">quotedIdentifiersIgnoreCaseInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreationInput">requireStorageIntegrationForStageCreationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperationInput">requireStorageIntegrationForStageOperationInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitorInput">resourceMonitorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultsetInput">rowsPerResultsetInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsNameInput">s3StageVpceDnsNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProviderInput">samlIdentityProviderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPathInput">searchPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSizeInput">serverlessTaskMaxStatementSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSizeInput">serverlessTaskMinStatementSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicyInput">sessionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumerInput">simulatedDataSharingConsumerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPageInput">ssoLoginPageInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSecondsInput">statementQueuedTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSecondsInput">statementTimeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicyInput">storageSerializationPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutputInput">strictJsonOutputInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailuresInput">suspendTaskAfterNumFailuresInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttemptsInput">taskAutoRetryAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormatInput">timeInputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormatInput">timeOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24HInput">timestampDayIsAlways24HInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormatInput">timestampInputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormatInput">timestampLtzOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormatInput">timestampNtzOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormatInput">timestampOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMappingInput">timestampTypeMappingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormatInput">timestampTzOutputFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezoneInput">timezoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevelInput">traceLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnErrorInput">transactionAbortOnErrorInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevelInput">transactionDefaultIsolationLevelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStartInput">twoDigitCenturyStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlActionInput">unsupportedDdlActionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResultInput">useCachedResultInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSizeInput">userTaskManagedInitialWarehouseSizeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSecondsInput">userTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMsInput">userTaskTimeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicyInput">weekOfYearPolicyInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStartInput">weekStartInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQuery">abortDetachedQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfiler">activePythonProfiler</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCaching">allowClientMfaCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdToken">allowIdToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommit">autocommit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefix">baseLocationPrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormat">binaryInputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormat">binaryOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalog">catalog</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSync">catalogSync</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParameters">clientEnableLogInfoStatementParameters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySize">clientEncryptionKeySize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimit">clientMemoryLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtx">clientMetadataRequestUseConnectionCtx</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabase">clientMetadataUseSessionDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreads">clientPrefetchThreads</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSize">clientResultChunkSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitive">clientResultColumnCaseInsensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAlive">clientSessionKeepAlive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequency">clientSessionKeepAliveHeartbeatFrequency</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMapping">clientTimestampTypeMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegion">cortexEnabledCrossRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlist">cortexModelsAllowlist</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormat">csvTimestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormat">dateInputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormat">dateOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpu">defaultNotebookComputePoolCpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpu">defaultNotebookComputePoolGpu</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrdering">defaultNullOrdering</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouse">defaultStreamlitNotebookWarehouse</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButton">disableUiDownloadButton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrants">disableUserPrivilegeGrants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLog">enableAutomaticSensitiveDataClassificationLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizer">enableEgressCostOptimizer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLogin">enableIdentifierFirstLogin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelink">enableInternalStagesPrivatelink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepository">enableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReporting">enableUnhandledExceptionsReporting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimization">enableUnloadPhysicalTypeOptimization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxError">enableUnredactedQuerySyntaxError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectError">enableUnredactedSecureObjectError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStages">enforceNetworkRulesForInternalStages</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMerge">errorOnNondeterministicMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdate">errorOnNondeterministicUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTable">eventTable</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormat">geographyOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormat">geometryOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeout">hybridTableLockTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTb">initialReplicationSizeLimitInTb</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsInt">jdbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtc">jdbcTreatTimestampNtzAsUtc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezone">jdbcUseSessionTimezone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndent">jsonIndent</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigint">jsTreatIntegerAsBigint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshSchedule">listingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeout">lockTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDays">minDataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCount">multiStatementCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefault">noorderSequenceAsDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedList">oauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsInt">odbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeying">periodicDataRekeying</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPaused">pipeExecutionPaused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrl">preventUnloadToInlineUrl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStages">preventUnloadToInternalStages</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModules">pythonProfilerModules</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStage">pythonProfilerTargetStage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTag">queryTag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreation">requireStorageIntegrationForStageCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperation">requireStorageIntegrationForStageOperation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultset">rowsPerResultset</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsName">s3StageVpceDnsName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProvider">samlIdentityProvider</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPath">searchPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSize">serverlessTaskMaxStatementSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSize">serverlessTaskMinStatementSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumer">simulatedDataSharingConsumer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPage">ssoLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutput">strictJsonOutput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormat">timeInputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormat">timeOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24H">timestampDayIsAlways24H</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormat">timestampInputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormat">timestampLtzOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormat">timestampNtzOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormat">timestampOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMapping">timestampTypeMapping</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormat">timestampTzOutputFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezone">timezone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnError">transactionAbortOnError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevel">transactionDefaultIsolationLevel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStart">twoDigitCenturyStart</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlAction">unsupportedDdlAction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResult">useCachedResult</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicy">weekOfYearPolicy</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStart">weekStart</a></code> | <code>java.lang.Number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.showOutput"></a>

```java
public CurrentOrganizationAccountShowOutputList getShowOutput();
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList">CurrentOrganizationAccountShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeouts"></a>

```java
public CurrentOrganizationAccountTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference">CurrentOrganizationAccountTimeoutsOutputReference</a>

---

##### `abortDetachedQueryInput`<sup>Optional</sup> <a name="abortDetachedQueryInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQueryInput"></a>

```java
public java.lang.Object getAbortDetachedQueryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `activePythonProfilerInput`<sup>Optional</sup> <a name="activePythonProfilerInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfilerInput"></a>

```java
public java.lang.String getActivePythonProfilerInput();
```

- *Type:* java.lang.String

---

##### `allowClientMfaCachingInput`<sup>Optional</sup> <a name="allowClientMfaCachingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCachingInput"></a>

```java
public java.lang.Object getAllowClientMfaCachingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowIdTokenInput`<sup>Optional</sup> <a name="allowIdTokenInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdTokenInput"></a>

```java
public java.lang.Object getAllowIdTokenInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autocommitInput`<sup>Optional</sup> <a name="autocommitInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommitInput"></a>

```java
public java.lang.Object getAutocommitInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `baseLocationPrefixInput`<sup>Optional</sup> <a name="baseLocationPrefixInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefixInput"></a>

```java
public java.lang.String getBaseLocationPrefixInput();
```

- *Type:* java.lang.String

---

##### `binaryInputFormatInput`<sup>Optional</sup> <a name="binaryInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormatInput"></a>

```java
public java.lang.String getBinaryInputFormatInput();
```

- *Type:* java.lang.String

---

##### `binaryOutputFormatInput`<sup>Optional</sup> <a name="binaryOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormatInput"></a>

```java
public java.lang.String getBinaryOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogInput"></a>

```java
public java.lang.String getCatalogInput();
```

- *Type:* java.lang.String

---

##### `catalogSyncInput`<sup>Optional</sup> <a name="catalogSyncInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSyncInput"></a>

```java
public java.lang.String getCatalogSyncInput();
```

- *Type:* java.lang.String

---

##### `clientEnableLogInfoStatementParametersInput`<sup>Optional</sup> <a name="clientEnableLogInfoStatementParametersInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParametersInput"></a>

```java
public java.lang.Object getClientEnableLogInfoStatementParametersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientEncryptionKeySizeInput`<sup>Optional</sup> <a name="clientEncryptionKeySizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySizeInput"></a>

```java
public java.lang.Number getClientEncryptionKeySizeInput();
```

- *Type:* java.lang.Number

---

##### `clientMemoryLimitInput`<sup>Optional</sup> <a name="clientMemoryLimitInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimitInput"></a>

```java
public java.lang.Number getClientMemoryLimitInput();
```

- *Type:* java.lang.Number

---

##### `clientMetadataRequestUseConnectionCtxInput`<sup>Optional</sup> <a name="clientMetadataRequestUseConnectionCtxInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtxInput"></a>

```java
public java.lang.Object getClientMetadataRequestUseConnectionCtxInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientMetadataUseSessionDatabaseInput`<sup>Optional</sup> <a name="clientMetadataUseSessionDatabaseInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabaseInput"></a>

```java
public java.lang.Object getClientMetadataUseSessionDatabaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientPrefetchThreadsInput`<sup>Optional</sup> <a name="clientPrefetchThreadsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreadsInput"></a>

```java
public java.lang.Number getClientPrefetchThreadsInput();
```

- *Type:* java.lang.Number

---

##### `clientResultChunkSizeInput`<sup>Optional</sup> <a name="clientResultChunkSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSizeInput"></a>

```java
public java.lang.Number getClientResultChunkSizeInput();
```

- *Type:* java.lang.Number

---

##### `clientResultColumnCaseInsensitiveInput`<sup>Optional</sup> <a name="clientResultColumnCaseInsensitiveInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitiveInput"></a>

```java
public java.lang.Object getClientResultColumnCaseInsensitiveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientSessionKeepAliveHeartbeatFrequencyInput`<sup>Optional</sup> <a name="clientSessionKeepAliveHeartbeatFrequencyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput"></a>

```java
public java.lang.Number getClientSessionKeepAliveHeartbeatFrequencyInput();
```

- *Type:* java.lang.Number

---

##### `clientSessionKeepAliveInput`<sup>Optional</sup> <a name="clientSessionKeepAliveInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveInput"></a>

```java
public java.lang.Object getClientSessionKeepAliveInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientTimestampTypeMappingInput`<sup>Optional</sup> <a name="clientTimestampTypeMappingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMappingInput"></a>

```java
public java.lang.String getClientTimestampTypeMappingInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `cortexEnabledCrossRegionInput`<sup>Optional</sup> <a name="cortexEnabledCrossRegionInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegionInput"></a>

```java
public java.lang.String getCortexEnabledCrossRegionInput();
```

- *Type:* java.lang.String

---

##### `cortexModelsAllowlistInput`<sup>Optional</sup> <a name="cortexModelsAllowlistInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlistInput"></a>

```java
public java.lang.String getCortexModelsAllowlistInput();
```

- *Type:* java.lang.String

---

##### `csvTimestampFormatInput`<sup>Optional</sup> <a name="csvTimestampFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormatInput"></a>

```java
public java.lang.String getCsvTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDaysInput"></a>

```java
public java.lang.Number getDataRetentionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `dateInputFormatInput`<sup>Optional</sup> <a name="dateInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormatInput"></a>

```java
public java.lang.String getDateInputFormatInput();
```

- *Type:* java.lang.String

---

##### `dateOutputFormatInput`<sup>Optional</sup> <a name="dateOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormatInput"></a>

```java
public java.lang.String getDateOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `defaultDdlCollationInput`<sup>Optional</sup> <a name="defaultDdlCollationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollationInput"></a>

```java
public java.lang.String getDefaultDdlCollationInput();
```

- *Type:* java.lang.String

---

##### `defaultNotebookComputePoolCpuInput`<sup>Optional</sup> <a name="defaultNotebookComputePoolCpuInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpuInput"></a>

```java
public java.lang.String getDefaultNotebookComputePoolCpuInput();
```

- *Type:* java.lang.String

---

##### `defaultNotebookComputePoolGpuInput`<sup>Optional</sup> <a name="defaultNotebookComputePoolGpuInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpuInput"></a>

```java
public java.lang.String getDefaultNotebookComputePoolGpuInput();
```

- *Type:* java.lang.String

---

##### `defaultNullOrderingInput`<sup>Optional</sup> <a name="defaultNullOrderingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrderingInput"></a>

```java
public java.lang.String getDefaultNullOrderingInput();
```

- *Type:* java.lang.String

---

##### `defaultStreamlitNotebookWarehouseInput`<sup>Optional</sup> <a name="defaultStreamlitNotebookWarehouseInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouseInput"></a>

```java
public java.lang.String getDefaultStreamlitNotebookWarehouseInput();
```

- *Type:* java.lang.String

---

##### `disableUiDownloadButtonInput`<sup>Optional</sup> <a name="disableUiDownloadButtonInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButtonInput"></a>

```java
public java.lang.Object getDisableUiDownloadButtonInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableUserPrivilegeGrantsInput`<sup>Optional</sup> <a name="disableUserPrivilegeGrantsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrantsInput"></a>

```java
public java.lang.Object getDisableUserPrivilegeGrantsInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableAutomaticSensitiveDataClassificationLogInput`<sup>Optional</sup> <a name="enableAutomaticSensitiveDataClassificationLogInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLogInput"></a>

```java
public java.lang.Object getEnableAutomaticSensitiveDataClassificationLogInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableEgressCostOptimizerInput`<sup>Optional</sup> <a name="enableEgressCostOptimizerInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizerInput"></a>

```java
public java.lang.Object getEnableEgressCostOptimizerInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIdentifierFirstLoginInput`<sup>Optional</sup> <a name="enableIdentifierFirstLoginInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLoginInput"></a>

```java
public java.lang.Object getEnableIdentifierFirstLoginInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableInternalStagesPrivatelinkInput`<sup>Optional</sup> <a name="enableInternalStagesPrivatelinkInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelinkInput"></a>

```java
public java.lang.Object getEnableInternalStagesPrivatelinkInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForImageRepositoryInput`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepositoryInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput"></a>

```java
public java.lang.Object getEnableTriSecretAndRekeyOptOutForImageRepositoryInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput"></a>

```java
public java.lang.Object getEnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUnhandledExceptionsReportingInput`<sup>Optional</sup> <a name="enableUnhandledExceptionsReportingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReportingInput"></a>

```java
public java.lang.Object getEnableUnhandledExceptionsReportingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUnloadPhysicalTypeOptimizationInput`<sup>Optional</sup> <a name="enableUnloadPhysicalTypeOptimizationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimizationInput"></a>

```java
public java.lang.Object getEnableUnloadPhysicalTypeOptimizationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUnredactedQuerySyntaxErrorInput`<sup>Optional</sup> <a name="enableUnredactedQuerySyntaxErrorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxErrorInput"></a>

```java
public java.lang.Object getEnableUnredactedQuerySyntaxErrorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUnredactedSecureObjectErrorInput`<sup>Optional</sup> <a name="enableUnredactedSecureObjectErrorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectErrorInput"></a>

```java
public java.lang.Object getEnableUnredactedSecureObjectErrorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforceNetworkRulesForInternalStagesInput`<sup>Optional</sup> <a name="enforceNetworkRulesForInternalStagesInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStagesInput"></a>

```java
public java.lang.Object getEnforceNetworkRulesForInternalStagesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `errorOnNondeterministicMergeInput`<sup>Optional</sup> <a name="errorOnNondeterministicMergeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMergeInput"></a>

```java
public java.lang.Object getErrorOnNondeterministicMergeInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `errorOnNondeterministicUpdateInput`<sup>Optional</sup> <a name="errorOnNondeterministicUpdateInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdateInput"></a>

```java
public java.lang.Object getErrorOnNondeterministicUpdateInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventTableInput`<sup>Optional</sup> <a name="eventTableInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTableInput"></a>

```java
public java.lang.String getEventTableInput();
```

- *Type:* java.lang.String

---

##### `externalOauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="externalOauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput"></a>

```java
public java.lang.Object getExternalOauthAddPrivilegedRolesToBlockedListInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolumeInput"></a>

```java
public java.lang.String getExternalVolumeInput();
```

- *Type:* java.lang.String

---

##### `geographyOutputFormatInput`<sup>Optional</sup> <a name="geographyOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormatInput"></a>

```java
public java.lang.String getGeographyOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `geometryOutputFormatInput`<sup>Optional</sup> <a name="geometryOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormatInput"></a>

```java
public java.lang.String getGeometryOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `hybridTableLockTimeoutInput`<sup>Optional</sup> <a name="hybridTableLockTimeoutInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeoutInput"></a>

```java
public java.lang.Number getHybridTableLockTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `initialReplicationSizeLimitInTbInput`<sup>Optional</sup> <a name="initialReplicationSizeLimitInTbInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTbInput"></a>

```java
public java.lang.String getInitialReplicationSizeLimitInTbInput();
```

- *Type:* java.lang.String

---

##### `jdbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="jdbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsIntInput"></a>

```java
public java.lang.Object getJdbcTreatDecimalAsIntInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jdbcTreatTimestampNtzAsUtcInput`<sup>Optional</sup> <a name="jdbcTreatTimestampNtzAsUtcInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtcInput"></a>

```java
public java.lang.Object getJdbcTreatTimestampNtzAsUtcInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jdbcUseSessionTimezoneInput`<sup>Optional</sup> <a name="jdbcUseSessionTimezoneInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezoneInput"></a>

```java
public java.lang.Object getJdbcUseSessionTimezoneInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jsonIndentInput`<sup>Optional</sup> <a name="jsonIndentInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndentInput"></a>

```java
public java.lang.Number getJsonIndentInput();
```

- *Type:* java.lang.Number

---

##### `jsTreatIntegerAsBigintInput`<sup>Optional</sup> <a name="jsTreatIntegerAsBigintInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigintInput"></a>

```java
public java.lang.Object getJsTreatIntegerAsBigintInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `listingAutoFulfillmentReplicationRefreshScheduleInput`<sup>Optional</sup> <a name="listingAutoFulfillmentReplicationRefreshScheduleInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput"></a>

```java
public java.lang.String getListingAutoFulfillmentReplicationRefreshScheduleInput();
```

- *Type:* java.lang.String

---

##### `lockTimeoutInput`<sup>Optional</sup> <a name="lockTimeoutInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeoutInput"></a>

```java
public java.lang.Number getLockTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevelInput"></a>

```java
public java.lang.String getLogLevelInput();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyLevelInput`<sup>Optional</sup> <a name="maxConcurrencyLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevelInput"></a>

```java
public java.lang.Number getMaxConcurrencyLevelInput();
```

- *Type:* java.lang.Number

---

##### `maxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="maxDataExtensionTimeInDaysInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDaysInput"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `metricLevelInput`<sup>Optional</sup> <a name="metricLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevelInput"></a>

```java
public java.lang.String getMetricLevelInput();
```

- *Type:* java.lang.String

---

##### `minDataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="minDataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDaysInput"></a>

```java
public java.lang.Number getMinDataRetentionTimeInDaysInput();
```

- *Type:* java.lang.Number

---

##### `multiStatementCountInput`<sup>Optional</sup> <a name="multiStatementCountInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCountInput"></a>

```java
public java.lang.Number getMultiStatementCountInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicyInput"></a>

```java
public java.lang.String getNetworkPolicyInput();
```

- *Type:* java.lang.String

---

##### `noorderSequenceAsDefaultInput`<sup>Optional</sup> <a name="noorderSequenceAsDefaultInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefaultInput"></a>

```java
public java.lang.Object getNoorderSequenceAsDefaultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="oauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedListInput"></a>

```java
public java.lang.Object getOauthAddPrivilegedRolesToBlockedListInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `odbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="odbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsIntInput"></a>

```java
public java.lang.Object getOdbcTreatDecimalAsIntInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicyInput"></a>

```java
public java.lang.String getPasswordPolicyInput();
```

- *Type:* java.lang.String

---

##### `periodicDataRekeyingInput`<sup>Optional</sup> <a name="periodicDataRekeyingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeyingInput"></a>

```java
public java.lang.Object getPeriodicDataRekeyingInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipeExecutionPausedInput`<sup>Optional</sup> <a name="pipeExecutionPausedInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPausedInput"></a>

```java
public java.lang.Object getPipeExecutionPausedInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preventUnloadToInlineUrlInput`<sup>Optional</sup> <a name="preventUnloadToInlineUrlInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrlInput"></a>

```java
public java.lang.Object getPreventUnloadToInlineUrlInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preventUnloadToInternalStagesInput`<sup>Optional</sup> <a name="preventUnloadToInternalStagesInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStagesInput"></a>

```java
public java.lang.Object getPreventUnloadToInternalStagesInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pythonProfilerModulesInput`<sup>Optional</sup> <a name="pythonProfilerModulesInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModulesInput"></a>

```java
public java.lang.String getPythonProfilerModulesInput();
```

- *Type:* java.lang.String

---

##### `pythonProfilerTargetStageInput`<sup>Optional</sup> <a name="pythonProfilerTargetStageInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStageInput"></a>

```java
public java.lang.String getPythonProfilerTargetStageInput();
```

- *Type:* java.lang.String

---

##### `queryTagInput`<sup>Optional</sup> <a name="queryTagInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTagInput"></a>

```java
public java.lang.String getQueryTagInput();
```

- *Type:* java.lang.String

---

##### `quotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCaseInput"></a>

```java
public java.lang.Object getQuotedIdentifiersIgnoreCaseInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharactersInput"></a>

```java
public java.lang.Object getReplaceInvalidCharactersInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireStorageIntegrationForStageCreationInput`<sup>Optional</sup> <a name="requireStorageIntegrationForStageCreationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreationInput"></a>

```java
public java.lang.Object getRequireStorageIntegrationForStageCreationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireStorageIntegrationForStageOperationInput`<sup>Optional</sup> <a name="requireStorageIntegrationForStageOperationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperationInput"></a>

```java
public java.lang.Object getRequireStorageIntegrationForStageOperationInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceMonitorInput`<sup>Optional</sup> <a name="resourceMonitorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitorInput"></a>

```java
public java.lang.String getResourceMonitorInput();
```

- *Type:* java.lang.String

---

##### `rowsPerResultsetInput`<sup>Optional</sup> <a name="rowsPerResultsetInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultsetInput"></a>

```java
public java.lang.Number getRowsPerResultsetInput();
```

- *Type:* java.lang.Number

---

##### `s3StageVpceDnsNameInput`<sup>Optional</sup> <a name="s3StageVpceDnsNameInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsNameInput"></a>

```java
public java.lang.String getS3StageVpceDnsNameInput();
```

- *Type:* java.lang.String

---

##### `samlIdentityProviderInput`<sup>Optional</sup> <a name="samlIdentityProviderInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProviderInput"></a>

```java
public java.lang.String getSamlIdentityProviderInput();
```

- *Type:* java.lang.String

---

##### `searchPathInput`<sup>Optional</sup> <a name="searchPathInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPathInput"></a>

```java
public java.lang.String getSearchPathInput();
```

- *Type:* java.lang.String

---

##### `serverlessTaskMaxStatementSizeInput`<sup>Optional</sup> <a name="serverlessTaskMaxStatementSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSizeInput"></a>

```java
public java.lang.String getServerlessTaskMaxStatementSizeInput();
```

- *Type:* java.lang.String

---

##### `serverlessTaskMinStatementSizeInput`<sup>Optional</sup> <a name="serverlessTaskMinStatementSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSizeInput"></a>

```java
public java.lang.String getServerlessTaskMinStatementSizeInput();
```

- *Type:* java.lang.String

---

##### `sessionPolicyInput`<sup>Optional</sup> <a name="sessionPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicyInput"></a>

```java
public java.lang.String getSessionPolicyInput();
```

- *Type:* java.lang.String

---

##### `simulatedDataSharingConsumerInput`<sup>Optional</sup> <a name="simulatedDataSharingConsumerInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumerInput"></a>

```java
public java.lang.String getSimulatedDataSharingConsumerInput();
```

- *Type:* java.lang.String

---

##### `ssoLoginPageInput`<sup>Optional</sup> <a name="ssoLoginPageInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPageInput"></a>

```java
public java.lang.Object getSsoLoginPageInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementQueuedTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `statementTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSecondsInput"></a>

```java
public java.lang.Number getStatementTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `storageSerializationPolicyInput`<sup>Optional</sup> <a name="storageSerializationPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicyInput"></a>

```java
public java.lang.String getStorageSerializationPolicyInput();
```

- *Type:* java.lang.String

---

##### `strictJsonOutputInput`<sup>Optional</sup> <a name="strictJsonOutputInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutputInput"></a>

```java
public java.lang.Object getStrictJsonOutputInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="suspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailuresInput"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailuresInput();
```

- *Type:* java.lang.Number

---

##### `taskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="taskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttemptsInput"></a>

```java
public java.lang.Number getTaskAutoRetryAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `timeInputFormatInput`<sup>Optional</sup> <a name="timeInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormatInput"></a>

```java
public java.lang.String getTimeInputFormatInput();
```

- *Type:* java.lang.String

---

##### `timeOutputFormatInput`<sup>Optional</sup> <a name="timeOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormatInput"></a>

```java
public java.lang.String getTimeOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

---

##### `timestampDayIsAlways24HInput`<sup>Optional</sup> <a name="timestampDayIsAlways24HInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24HInput"></a>

```java
public java.lang.Object getTimestampDayIsAlways24HInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timestampInputFormatInput`<sup>Optional</sup> <a name="timestampInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormatInput"></a>

```java
public java.lang.String getTimestampInputFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampLtzOutputFormatInput`<sup>Optional</sup> <a name="timestampLtzOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormatInput"></a>

```java
public java.lang.String getTimestampLtzOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampNtzOutputFormatInput`<sup>Optional</sup> <a name="timestampNtzOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormatInput"></a>

```java
public java.lang.String getTimestampNtzOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampOutputFormatInput`<sup>Optional</sup> <a name="timestampOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormatInput"></a>

```java
public java.lang.String getTimestampOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timestampTypeMappingInput`<sup>Optional</sup> <a name="timestampTypeMappingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMappingInput"></a>

```java
public java.lang.String getTimestampTypeMappingInput();
```

- *Type:* java.lang.String

---

##### `timestampTzOutputFormatInput`<sup>Optional</sup> <a name="timestampTzOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormatInput"></a>

```java
public java.lang.String getTimestampTzOutputFormatInput();
```

- *Type:* java.lang.String

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezoneInput"></a>

```java
public java.lang.String getTimezoneInput();
```

- *Type:* java.lang.String

---

##### `traceLevelInput`<sup>Optional</sup> <a name="traceLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevelInput"></a>

```java
public java.lang.String getTraceLevelInput();
```

- *Type:* java.lang.String

---

##### `transactionAbortOnErrorInput`<sup>Optional</sup> <a name="transactionAbortOnErrorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnErrorInput"></a>

```java
public java.lang.Object getTransactionAbortOnErrorInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `transactionDefaultIsolationLevelInput`<sup>Optional</sup> <a name="transactionDefaultIsolationLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevelInput"></a>

```java
public java.lang.String getTransactionDefaultIsolationLevelInput();
```

- *Type:* java.lang.String

---

##### `twoDigitCenturyStartInput`<sup>Optional</sup> <a name="twoDigitCenturyStartInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStartInput"></a>

```java
public java.lang.Number getTwoDigitCenturyStartInput();
```

- *Type:* java.lang.Number

---

##### `unsupportedDdlActionInput`<sup>Optional</sup> <a name="unsupportedDdlActionInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlActionInput"></a>

```java
public java.lang.String getUnsupportedDdlActionInput();
```

- *Type:* java.lang.String

---

##### `useCachedResultInput`<sup>Optional</sup> <a name="useCachedResultInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResultInput"></a>

```java
public java.lang.Object getUseCachedResultInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSizeInput"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSizeInput();
```

- *Type:* java.lang.String

---

##### `userTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```java
public java.lang.Number getUserTaskMinimumTriggerIntervalInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `userTaskTimeoutMsInput`<sup>Optional</sup> <a name="userTaskTimeoutMsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMsInput"></a>

```java
public java.lang.Number getUserTaskTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `weekOfYearPolicyInput`<sup>Optional</sup> <a name="weekOfYearPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicyInput"></a>

```java
public java.lang.Number getWeekOfYearPolicyInput();
```

- *Type:* java.lang.Number

---

##### `weekStartInput`<sup>Optional</sup> <a name="weekStartInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStartInput"></a>

```java
public java.lang.Number getWeekStartInput();
```

- *Type:* java.lang.Number

---

##### `abortDetachedQuery`<sup>Required</sup> <a name="abortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQuery"></a>

```java
public java.lang.Object getAbortDetachedQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `activePythonProfiler`<sup>Required</sup> <a name="activePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfiler"></a>

```java
public java.lang.String getActivePythonProfiler();
```

- *Type:* java.lang.String

---

##### `allowClientMfaCaching`<sup>Required</sup> <a name="allowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCaching"></a>

```java
public java.lang.Object getAllowClientMfaCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `allowIdToken`<sup>Required</sup> <a name="allowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdToken"></a>

```java
public java.lang.Object getAllowIdToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommit"></a>

```java
public java.lang.Object getAutocommit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `baseLocationPrefix`<sup>Required</sup> <a name="baseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefix"></a>

```java
public java.lang.String getBaseLocationPrefix();
```

- *Type:* java.lang.String

---

##### `binaryInputFormat`<sup>Required</sup> <a name="binaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormat"></a>

```java
public java.lang.String getBinaryInputFormat();
```

- *Type:* java.lang.String

---

##### `binaryOutputFormat`<sup>Required</sup> <a name="binaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormat"></a>

```java
public java.lang.String getBinaryOutputFormat();
```

- *Type:* java.lang.String

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

---

##### `catalogSync`<sup>Required</sup> <a name="catalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSync"></a>

```java
public java.lang.String getCatalogSync();
```

- *Type:* java.lang.String

---

##### `clientEnableLogInfoStatementParameters`<sup>Required</sup> <a name="clientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParameters"></a>

```java
public java.lang.Object getClientEnableLogInfoStatementParameters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientEncryptionKeySize`<sup>Required</sup> <a name="clientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySize"></a>

```java
public java.lang.Number getClientEncryptionKeySize();
```

- *Type:* java.lang.Number

---

##### `clientMemoryLimit`<sup>Required</sup> <a name="clientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimit"></a>

```java
public java.lang.Number getClientMemoryLimit();
```

- *Type:* java.lang.Number

---

##### `clientMetadataRequestUseConnectionCtx`<sup>Required</sup> <a name="clientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtx"></a>

```java
public java.lang.Object getClientMetadataRequestUseConnectionCtx();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientMetadataUseSessionDatabase`<sup>Required</sup> <a name="clientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabase"></a>

```java
public java.lang.Object getClientMetadataUseSessionDatabase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientPrefetchThreads`<sup>Required</sup> <a name="clientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreads"></a>

```java
public java.lang.Number getClientPrefetchThreads();
```

- *Type:* java.lang.Number

---

##### `clientResultChunkSize`<sup>Required</sup> <a name="clientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSize"></a>

```java
public java.lang.Number getClientResultChunkSize();
```

- *Type:* java.lang.Number

---

##### `clientResultColumnCaseInsensitive`<sup>Required</sup> <a name="clientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitive"></a>

```java
public java.lang.Object getClientResultColumnCaseInsensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientSessionKeepAlive`<sup>Required</sup> <a name="clientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAlive"></a>

```java
public java.lang.Object getClientSessionKeepAlive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `clientSessionKeepAliveHeartbeatFrequency`<sup>Required</sup> <a name="clientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```java
public java.lang.Number getClientSessionKeepAliveHeartbeatFrequency();
```

- *Type:* java.lang.Number

---

##### `clientTimestampTypeMapping`<sup>Required</sup> <a name="clientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMapping"></a>

```java
public java.lang.String getClientTimestampTypeMapping();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `cortexEnabledCrossRegion`<sup>Required</sup> <a name="cortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegion"></a>

```java
public java.lang.String getCortexEnabledCrossRegion();
```

- *Type:* java.lang.String

---

##### `cortexModelsAllowlist`<sup>Required</sup> <a name="cortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlist"></a>

```java
public java.lang.String getCortexModelsAllowlist();
```

- *Type:* java.lang.String

---

##### `csvTimestampFormat`<sup>Required</sup> <a name="csvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormat"></a>

```java
public java.lang.String getCsvTimestampFormat();
```

- *Type:* java.lang.String

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `dateInputFormat`<sup>Required</sup> <a name="dateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormat"></a>

```java
public java.lang.String getDateInputFormat();
```

- *Type:* java.lang.String

---

##### `dateOutputFormat`<sup>Required</sup> <a name="dateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormat"></a>

```java
public java.lang.String getDateOutputFormat();
```

- *Type:* java.lang.String

---

##### `defaultDdlCollation`<sup>Required</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollation"></a>

```java
public java.lang.String getDefaultDdlCollation();
```

- *Type:* java.lang.String

---

##### `defaultNotebookComputePoolCpu`<sup>Required</sup> <a name="defaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpu"></a>

```java
public java.lang.String getDefaultNotebookComputePoolCpu();
```

- *Type:* java.lang.String

---

##### `defaultNotebookComputePoolGpu`<sup>Required</sup> <a name="defaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpu"></a>

```java
public java.lang.String getDefaultNotebookComputePoolGpu();
```

- *Type:* java.lang.String

---

##### `defaultNullOrdering`<sup>Required</sup> <a name="defaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrdering"></a>

```java
public java.lang.String getDefaultNullOrdering();
```

- *Type:* java.lang.String

---

##### `defaultStreamlitNotebookWarehouse`<sup>Required</sup> <a name="defaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouse"></a>

```java
public java.lang.String getDefaultStreamlitNotebookWarehouse();
```

- *Type:* java.lang.String

---

##### `disableUiDownloadButton`<sup>Required</sup> <a name="disableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButton"></a>

```java
public java.lang.Object getDisableUiDownloadButton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `disableUserPrivilegeGrants`<sup>Required</sup> <a name="disableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrants"></a>

```java
public java.lang.Object getDisableUserPrivilegeGrants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableAutomaticSensitiveDataClassificationLog`<sup>Required</sup> <a name="enableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLog"></a>

```java
public java.lang.Object getEnableAutomaticSensitiveDataClassificationLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableEgressCostOptimizer`<sup>Required</sup> <a name="enableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizer"></a>

```java
public java.lang.Object getEnableEgressCostOptimizer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableIdentifierFirstLogin`<sup>Required</sup> <a name="enableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLogin"></a>

```java
public java.lang.Object getEnableIdentifierFirstLogin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableInternalStagesPrivatelink`<sup>Required</sup> <a name="enableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelink"></a>

```java
public java.lang.Object getEnableInternalStagesPrivatelink();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForImageRepository`<sup>Required</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```java
public java.lang.Object getEnableTriSecretAndRekeyOptOutForImageRepository();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Required</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```java
public java.lang.Object getEnableTriSecretAndRekeyOptOutForSpcsBlockStorage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUnhandledExceptionsReporting`<sup>Required</sup> <a name="enableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReporting"></a>

```java
public java.lang.Object getEnableUnhandledExceptionsReporting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUnloadPhysicalTypeOptimization`<sup>Required</sup> <a name="enableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimization"></a>

```java
public java.lang.Object getEnableUnloadPhysicalTypeOptimization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUnredactedQuerySyntaxError`<sup>Required</sup> <a name="enableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxError"></a>

```java
public java.lang.Object getEnableUnredactedQuerySyntaxError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enableUnredactedSecureObjectError`<sup>Required</sup> <a name="enableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectError"></a>

```java
public java.lang.Object getEnableUnredactedSecureObjectError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `enforceNetworkRulesForInternalStages`<sup>Required</sup> <a name="enforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStages"></a>

```java
public java.lang.Object getEnforceNetworkRulesForInternalStages();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `errorOnNondeterministicMerge`<sup>Required</sup> <a name="errorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMerge"></a>

```java
public java.lang.Object getErrorOnNondeterministicMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `errorOnNondeterministicUpdate`<sup>Required</sup> <a name="errorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdate"></a>

```java
public java.lang.Object getErrorOnNondeterministicUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTable"></a>

```java
public java.lang.String getEventTable();
```

- *Type:* java.lang.String

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```java
public java.lang.Object getExternalOauthAddPrivilegedRolesToBlockedList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

---

##### `geographyOutputFormat`<sup>Required</sup> <a name="geographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormat"></a>

```java
public java.lang.String getGeographyOutputFormat();
```

- *Type:* java.lang.String

---

##### `geometryOutputFormat`<sup>Required</sup> <a name="geometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormat"></a>

```java
public java.lang.String getGeometryOutputFormat();
```

- *Type:* java.lang.String

---

##### `hybridTableLockTimeout`<sup>Required</sup> <a name="hybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeout"></a>

```java
public java.lang.Number getHybridTableLockTimeout();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `initialReplicationSizeLimitInTb`<sup>Required</sup> <a name="initialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTb"></a>

```java
public java.lang.String getInitialReplicationSizeLimitInTb();
```

- *Type:* java.lang.String

---

##### `jdbcTreatDecimalAsInt`<sup>Required</sup> <a name="jdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsInt"></a>

```java
public java.lang.Object getJdbcTreatDecimalAsInt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jdbcTreatTimestampNtzAsUtc`<sup>Required</sup> <a name="jdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtc"></a>

```java
public java.lang.Object getJdbcTreatTimestampNtzAsUtc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jdbcUseSessionTimezone`<sup>Required</sup> <a name="jdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezone"></a>

```java
public java.lang.Object getJdbcUseSessionTimezone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `jsonIndent`<sup>Required</sup> <a name="jsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndent"></a>

```java
public java.lang.Number getJsonIndent();
```

- *Type:* java.lang.Number

---

##### `jsTreatIntegerAsBigint`<sup>Required</sup> <a name="jsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigint"></a>

```java
public java.lang.Object getJsTreatIntegerAsBigint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `listingAutoFulfillmentReplicationRefreshSchedule`<sup>Required</sup> <a name="listingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```java
public java.lang.String getListingAutoFulfillmentReplicationRefreshSchedule();
```

- *Type:* java.lang.String

---

##### `lockTimeout`<sup>Required</sup> <a name="lockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeout"></a>

```java
public java.lang.Number getLockTimeout();
```

- *Type:* java.lang.Number

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

---

##### `maxConcurrencyLevel`<sup>Required</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevel"></a>

```java
public java.lang.Number getMaxConcurrencyLevel();
```

- *Type:* java.lang.Number

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDays"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `metricLevel`<sup>Required</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevel"></a>

```java
public java.lang.String getMetricLevel();
```

- *Type:* java.lang.String

---

##### `minDataRetentionTimeInDays`<sup>Required</sup> <a name="minDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDays"></a>

```java
public java.lang.Number getMinDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

---

##### `multiStatementCount`<sup>Required</sup> <a name="multiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCount"></a>

```java
public java.lang.Number getMultiStatementCount();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

---

##### `noorderSequenceAsDefault`<sup>Required</sup> <a name="noorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefault"></a>

```java
public java.lang.Object getNoorderSequenceAsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `oauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="oauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedList"></a>

```java
public java.lang.Object getOauthAddPrivilegedRolesToBlockedList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `odbcTreatDecimalAsInt`<sup>Required</sup> <a name="odbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsInt"></a>

```java
public java.lang.Object getOdbcTreatDecimalAsInt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

---

##### `periodicDataRekeying`<sup>Required</sup> <a name="periodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeying"></a>

```java
public java.lang.Object getPeriodicDataRekeying();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pipeExecutionPaused`<sup>Required</sup> <a name="pipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPaused"></a>

```java
public java.lang.Object getPipeExecutionPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preventUnloadToInlineUrl`<sup>Required</sup> <a name="preventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrl"></a>

```java
public java.lang.Object getPreventUnloadToInlineUrl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `preventUnloadToInternalStages`<sup>Required</sup> <a name="preventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStages"></a>

```java
public java.lang.Object getPreventUnloadToInternalStages();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `pythonProfilerModules`<sup>Required</sup> <a name="pythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModules"></a>

```java
public java.lang.String getPythonProfilerModules();
```

- *Type:* java.lang.String

---

##### `pythonProfilerTargetStage`<sup>Required</sup> <a name="pythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStage"></a>

```java
public java.lang.String getPythonProfilerTargetStage();
```

- *Type:* java.lang.String

---

##### `queryTag`<sup>Required</sup> <a name="queryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTag"></a>

```java
public java.lang.String getQueryTag();
```

- *Type:* java.lang.String

---

##### `quotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCase"></a>

```java
public java.lang.Object getQuotedIdentifiersIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharacters"></a>

```java
public java.lang.Object getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireStorageIntegrationForStageCreation`<sup>Required</sup> <a name="requireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreation"></a>

```java
public java.lang.Object getRequireStorageIntegrationForStageCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `requireStorageIntegrationForStageOperation`<sup>Required</sup> <a name="requireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperation"></a>

```java
public java.lang.Object getRequireStorageIntegrationForStageOperation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `resourceMonitor`<sup>Required</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitor"></a>

```java
public java.lang.String getResourceMonitor();
```

- *Type:* java.lang.String

---

##### `rowsPerResultset`<sup>Required</sup> <a name="rowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultset"></a>

```java
public java.lang.Number getRowsPerResultset();
```

- *Type:* java.lang.Number

---

##### `s3StageVpceDnsName`<sup>Required</sup> <a name="s3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsName"></a>

```java
public java.lang.String getS3StageVpceDnsName();
```

- *Type:* java.lang.String

---

##### `samlIdentityProvider`<sup>Required</sup> <a name="samlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProvider"></a>

```java
public java.lang.String getSamlIdentityProvider();
```

- *Type:* java.lang.String

---

##### `searchPath`<sup>Required</sup> <a name="searchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPath"></a>

```java
public java.lang.String getSearchPath();
```

- *Type:* java.lang.String

---

##### `serverlessTaskMaxStatementSize`<sup>Required</sup> <a name="serverlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSize"></a>

```java
public java.lang.String getServerlessTaskMaxStatementSize();
```

- *Type:* java.lang.String

---

##### `serverlessTaskMinStatementSize`<sup>Required</sup> <a name="serverlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSize"></a>

```java
public java.lang.String getServerlessTaskMinStatementSize();
```

- *Type:* java.lang.String

---

##### `sessionPolicy`<sup>Required</sup> <a name="sessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicy"></a>

```java
public java.lang.String getSessionPolicy();
```

- *Type:* java.lang.String

---

##### `simulatedDataSharingConsumer`<sup>Required</sup> <a name="simulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumer"></a>

```java
public java.lang.String getSimulatedDataSharingConsumer();
```

- *Type:* java.lang.String

---

##### `ssoLoginPage`<sup>Required</sup> <a name="ssoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPage"></a>

```java
public java.lang.Object getSsoLoginPage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicy"></a>

```java
public java.lang.String getStorageSerializationPolicy();
```

- *Type:* java.lang.String

---

##### `strictJsonOutput`<sup>Required</sup> <a name="strictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutput"></a>

```java
public java.lang.Object getStrictJsonOutput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `suspendTaskAfterNumFailures`<sup>Required</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailures"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailures();
```

- *Type:* java.lang.Number

---

##### `taskAutoRetryAttempts`<sup>Required</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttempts"></a>

```java
public java.lang.Number getTaskAutoRetryAttempts();
```

- *Type:* java.lang.Number

---

##### `timeInputFormat`<sup>Required</sup> <a name="timeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormat"></a>

```java
public java.lang.String getTimeInputFormat();
```

- *Type:* java.lang.String

---

##### `timeOutputFormat`<sup>Required</sup> <a name="timeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormat"></a>

```java
public java.lang.String getTimeOutputFormat();
```

- *Type:* java.lang.String

---

##### `timestampDayIsAlways24H`<sup>Required</sup> <a name="timestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24H"></a>

```java
public java.lang.Object getTimestampDayIsAlways24H();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `timestampInputFormat`<sup>Required</sup> <a name="timestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormat"></a>

```java
public java.lang.String getTimestampInputFormat();
```

- *Type:* java.lang.String

---

##### `timestampLtzOutputFormat`<sup>Required</sup> <a name="timestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormat"></a>

```java
public java.lang.String getTimestampLtzOutputFormat();
```

- *Type:* java.lang.String

---

##### `timestampNtzOutputFormat`<sup>Required</sup> <a name="timestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormat"></a>

```java
public java.lang.String getTimestampNtzOutputFormat();
```

- *Type:* java.lang.String

---

##### `timestampOutputFormat`<sup>Required</sup> <a name="timestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormat"></a>

```java
public java.lang.String getTimestampOutputFormat();
```

- *Type:* java.lang.String

---

##### `timestampTypeMapping`<sup>Required</sup> <a name="timestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMapping"></a>

```java
public java.lang.String getTimestampTypeMapping();
```

- *Type:* java.lang.String

---

##### `timestampTzOutputFormat`<sup>Required</sup> <a name="timestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormat"></a>

```java
public java.lang.String getTimestampTzOutputFormat();
```

- *Type:* java.lang.String

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

---

##### `transactionAbortOnError`<sup>Required</sup> <a name="transactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnError"></a>

```java
public java.lang.Object getTransactionAbortOnError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `transactionDefaultIsolationLevel`<sup>Required</sup> <a name="transactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevel"></a>

```java
public java.lang.String getTransactionDefaultIsolationLevel();
```

- *Type:* java.lang.String

---

##### `twoDigitCenturyStart`<sup>Required</sup> <a name="twoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStart"></a>

```java
public java.lang.Number getTwoDigitCenturyStart();
```

- *Type:* java.lang.Number

---

##### `unsupportedDdlAction`<sup>Required</sup> <a name="unsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlAction"></a>

```java
public java.lang.String getUnsupportedDdlAction();
```

- *Type:* java.lang.String

---

##### `useCachedResult`<sup>Required</sup> <a name="useCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResult"></a>

```java
public java.lang.Object getUseCachedResult();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `userTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSize"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSize();
```

- *Type:* java.lang.String

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```java
public java.lang.Number getUserTaskMinimumTriggerIntervalInSeconds();
```

- *Type:* java.lang.Number

---

##### `userTaskTimeoutMs`<sup>Required</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMs"></a>

```java
public java.lang.Number getUserTaskTimeoutMs();
```

- *Type:* java.lang.Number

---

##### `weekOfYearPolicy`<sup>Required</sup> <a name="weekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicy"></a>

```java
public java.lang.Number getWeekOfYearPolicy();
```

- *Type:* java.lang.Number

---

##### `weekStart`<sup>Required</sup> <a name="weekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStart"></a>

```java
public java.lang.Number getWeekStart();
```

- *Type:* java.lang.Number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CurrentOrganizationAccountConfig <a name="CurrentOrganizationAccountConfig" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccountConfig;

CurrentOrganizationAccountConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .name(java.lang.String)
//  .abortDetachedQuery(java.lang.Boolean)
//  .abortDetachedQuery(IResolvable)
//  .activePythonProfiler(java.lang.String)
//  .allowClientMfaCaching(java.lang.Boolean)
//  .allowClientMfaCaching(IResolvable)
//  .allowIdToken(java.lang.Boolean)
//  .allowIdToken(IResolvable)
//  .autocommit(java.lang.Boolean)
//  .autocommit(IResolvable)
//  .baseLocationPrefix(java.lang.String)
//  .binaryInputFormat(java.lang.String)
//  .binaryOutputFormat(java.lang.String)
//  .catalog(java.lang.String)
//  .catalogSync(java.lang.String)
//  .clientEnableLogInfoStatementParameters(java.lang.Boolean)
//  .clientEnableLogInfoStatementParameters(IResolvable)
//  .clientEncryptionKeySize(java.lang.Number)
//  .clientMemoryLimit(java.lang.Number)
//  .clientMetadataRequestUseConnectionCtx(java.lang.Boolean)
//  .clientMetadataRequestUseConnectionCtx(IResolvable)
//  .clientMetadataUseSessionDatabase(java.lang.Boolean)
//  .clientMetadataUseSessionDatabase(IResolvable)
//  .clientPrefetchThreads(java.lang.Number)
//  .clientResultChunkSize(java.lang.Number)
//  .clientResultColumnCaseInsensitive(java.lang.Boolean)
//  .clientResultColumnCaseInsensitive(IResolvable)
//  .clientSessionKeepAlive(java.lang.Boolean)
//  .clientSessionKeepAlive(IResolvable)
//  .clientSessionKeepAliveHeartbeatFrequency(java.lang.Number)
//  .clientTimestampTypeMapping(java.lang.String)
//  .comment(java.lang.String)
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
//  .disableUiDownloadButton(java.lang.Boolean)
//  .disableUiDownloadButton(IResolvable)
//  .disableUserPrivilegeGrants(java.lang.Boolean)
//  .disableUserPrivilegeGrants(IResolvable)
//  .enableAutomaticSensitiveDataClassificationLog(java.lang.Boolean)
//  .enableAutomaticSensitiveDataClassificationLog(IResolvable)
//  .enableEgressCostOptimizer(java.lang.Boolean)
//  .enableEgressCostOptimizer(IResolvable)
//  .enableIdentifierFirstLogin(java.lang.Boolean)
//  .enableIdentifierFirstLogin(IResolvable)
//  .enableInternalStagesPrivatelink(java.lang.Boolean)
//  .enableInternalStagesPrivatelink(IResolvable)
//  .enableTriSecretAndRekeyOptOutForImageRepository(java.lang.Boolean)
//  .enableTriSecretAndRekeyOptOutForImageRepository(IResolvable)
//  .enableTriSecretAndRekeyOptOutForSpcsBlockStorage(java.lang.Boolean)
//  .enableTriSecretAndRekeyOptOutForSpcsBlockStorage(IResolvable)
//  .enableUnhandledExceptionsReporting(java.lang.Boolean)
//  .enableUnhandledExceptionsReporting(IResolvable)
//  .enableUnloadPhysicalTypeOptimization(java.lang.Boolean)
//  .enableUnloadPhysicalTypeOptimization(IResolvable)
//  .enableUnredactedQuerySyntaxError(java.lang.Boolean)
//  .enableUnredactedQuerySyntaxError(IResolvable)
//  .enableUnredactedSecureObjectError(java.lang.Boolean)
//  .enableUnredactedSecureObjectError(IResolvable)
//  .enforceNetworkRulesForInternalStages(java.lang.Boolean)
//  .enforceNetworkRulesForInternalStages(IResolvable)
//  .errorOnNondeterministicMerge(java.lang.Boolean)
//  .errorOnNondeterministicMerge(IResolvable)
//  .errorOnNondeterministicUpdate(java.lang.Boolean)
//  .errorOnNondeterministicUpdate(IResolvable)
//  .eventTable(java.lang.String)
//  .externalOauthAddPrivilegedRolesToBlockedList(java.lang.Boolean)
//  .externalOauthAddPrivilegedRolesToBlockedList(IResolvable)
//  .externalVolume(java.lang.String)
//  .geographyOutputFormat(java.lang.String)
//  .geometryOutputFormat(java.lang.String)
//  .hybridTableLockTimeout(java.lang.Number)
//  .id(java.lang.String)
//  .initialReplicationSizeLimitInTb(java.lang.String)
//  .jdbcTreatDecimalAsInt(java.lang.Boolean)
//  .jdbcTreatDecimalAsInt(IResolvable)
//  .jdbcTreatTimestampNtzAsUtc(java.lang.Boolean)
//  .jdbcTreatTimestampNtzAsUtc(IResolvable)
//  .jdbcUseSessionTimezone(java.lang.Boolean)
//  .jdbcUseSessionTimezone(IResolvable)
//  .jsonIndent(java.lang.Number)
//  .jsTreatIntegerAsBigint(java.lang.Boolean)
//  .jsTreatIntegerAsBigint(IResolvable)
//  .listingAutoFulfillmentReplicationRefreshSchedule(java.lang.String)
//  .lockTimeout(java.lang.Number)
//  .logLevel(java.lang.String)
//  .maxConcurrencyLevel(java.lang.Number)
//  .maxDataExtensionTimeInDays(java.lang.Number)
//  .metricLevel(java.lang.String)
//  .minDataRetentionTimeInDays(java.lang.Number)
//  .multiStatementCount(java.lang.Number)
//  .networkPolicy(java.lang.String)
//  .noorderSequenceAsDefault(java.lang.Boolean)
//  .noorderSequenceAsDefault(IResolvable)
//  .oauthAddPrivilegedRolesToBlockedList(java.lang.Boolean)
//  .oauthAddPrivilegedRolesToBlockedList(IResolvable)
//  .odbcTreatDecimalAsInt(java.lang.Boolean)
//  .odbcTreatDecimalAsInt(IResolvable)
//  .passwordPolicy(java.lang.String)
//  .periodicDataRekeying(java.lang.Boolean)
//  .periodicDataRekeying(IResolvable)
//  .pipeExecutionPaused(java.lang.Boolean)
//  .pipeExecutionPaused(IResolvable)
//  .preventUnloadToInlineUrl(java.lang.Boolean)
//  .preventUnloadToInlineUrl(IResolvable)
//  .preventUnloadToInternalStages(java.lang.Boolean)
//  .preventUnloadToInternalStages(IResolvable)
//  .pythonProfilerModules(java.lang.String)
//  .pythonProfilerTargetStage(java.lang.String)
//  .queryTag(java.lang.String)
//  .quotedIdentifiersIgnoreCase(java.lang.Boolean)
//  .quotedIdentifiersIgnoreCase(IResolvable)
//  .replaceInvalidCharacters(java.lang.Boolean)
//  .replaceInvalidCharacters(IResolvable)
//  .requireStorageIntegrationForStageCreation(java.lang.Boolean)
//  .requireStorageIntegrationForStageCreation(IResolvable)
//  .requireStorageIntegrationForStageOperation(java.lang.Boolean)
//  .requireStorageIntegrationForStageOperation(IResolvable)
//  .resourceMonitor(java.lang.String)
//  .rowsPerResultset(java.lang.Number)
//  .s3StageVpceDnsName(java.lang.String)
//  .samlIdentityProvider(java.lang.String)
//  .searchPath(java.lang.String)
//  .serverlessTaskMaxStatementSize(java.lang.String)
//  .serverlessTaskMinStatementSize(java.lang.String)
//  .sessionPolicy(java.lang.String)
//  .simulatedDataSharingConsumer(java.lang.String)
//  .ssoLoginPage(java.lang.Boolean)
//  .ssoLoginPage(IResolvable)
//  .statementQueuedTimeoutInSeconds(java.lang.Number)
//  .statementTimeoutInSeconds(java.lang.Number)
//  .storageSerializationPolicy(java.lang.String)
//  .strictJsonOutput(java.lang.Boolean)
//  .strictJsonOutput(IResolvable)
//  .suspendTaskAfterNumFailures(java.lang.Number)
//  .taskAutoRetryAttempts(java.lang.Number)
//  .timeInputFormat(java.lang.String)
//  .timeOutputFormat(java.lang.String)
//  .timeouts(CurrentOrganizationAccountTimeouts)
//  .timestampDayIsAlways24H(java.lang.Boolean)
//  .timestampDayIsAlways24H(IResolvable)
//  .timestampInputFormat(java.lang.String)
//  .timestampLtzOutputFormat(java.lang.String)
//  .timestampNtzOutputFormat(java.lang.String)
//  .timestampOutputFormat(java.lang.String)
//  .timestampTypeMapping(java.lang.String)
//  .timestampTzOutputFormat(java.lang.String)
//  .timezone(java.lang.String)
//  .traceLevel(java.lang.String)
//  .transactionAbortOnError(java.lang.Boolean)
//  .transactionAbortOnError(IResolvable)
//  .transactionDefaultIsolationLevel(java.lang.String)
//  .twoDigitCenturyStart(java.lang.Number)
//  .unsupportedDdlAction(java.lang.String)
//  .useCachedResult(java.lang.Boolean)
//  .useCachedResult(IResolvable)
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
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.name">name</a></code> | <code>java.lang.String</code> | The identifier (i.e. name) for the organization account within currently used organization. The field name is validated during import and create operations to ensure that it matches the current organization account name. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.abortDetachedQuery">abortDetachedQuery</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.activePythonProfiler">activePythonProfiler</a></code> | <code>java.lang.String</code> | Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` \| `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowClientMfaCaching">allowClientMfaCaching</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowIdToken">allowIdToken</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.autocommit">autocommit</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether autocommit is enabled for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.baseLocationPrefix">baseLocationPrefix</a></code> | <code>java.lang.String</code> | Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryInputFormat">binaryInputFormat</a></code> | <code>java.lang.String</code> | The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryOutputFormat">binaryOutputFormat</a></code> | <code>java.lang.String</code> | The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalog">catalog</a></code> | <code>java.lang.String</code> | Specifies the catalog for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalogSync">catalogSync</a></code> | <code>java.lang.String</code> | Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEnableLogInfoStatementParameters">clientEnableLogInfoStatementParameters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEncryptionKeySize">clientEncryptionKeySize</a></code> | <code>java.lang.Number</code> | Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMemoryLimit">clientMemoryLimit</a></code> | <code>java.lang.Number</code> | Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataRequestUseConnectionCtx">clientMetadataRequestUseConnectionCtx</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataUseSessionDatabase">clientMetadataUseSessionDatabase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientPrefetchThreads">clientPrefetchThreads</a></code> | <code>java.lang.Number</code> | Parameter that specifies the number of threads used by the client to pre-fetch large result sets. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultChunkSize">clientResultChunkSize</a></code> | <code>java.lang.Number</code> | Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultColumnCaseInsensitive">clientResultColumnCaseInsensitive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAlive">clientSessionKeepAlive</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency">clientSessionKeepAliveHeartbeatFrequency</a></code> | <code>java.lang.Number</code> | Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientTimestampTypeMapping">clientTimestampTypeMapping</a></code> | <code>java.lang.String</code> | Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` \| `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | Specifies a comment for the organization account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexEnabledCrossRegion">cortexEnabledCrossRegion</a></code> | <code>java.lang.String</code> | Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexModelsAllowlist">cortexModelsAllowlist</a></code> | <code>java.lang.String</code> | Specifies the models that users in the account can access. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.csvTimestampFormat">csvTimestampFormat</a></code> | <code>java.lang.String</code> | Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateInputFormat">dateInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateOutputFormat">dateOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>java.lang.String</code> | Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolCpu">defaultNotebookComputePoolCpu</a></code> | <code>java.lang.String</code> | Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolGpu">defaultNotebookComputePoolGpu</a></code> | <code>java.lang.String</code> | Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNullOrdering">defaultNullOrdering</a></code> | <code>java.lang.String</code> | Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` \| `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultStreamlitNotebookWarehouse">defaultStreamlitNotebookWarehouse</a></code> | <code>java.lang.String</code> | Specifies the name of the default warehouse to use when creating a notebook. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUiDownloadButton">disableUiDownloadButton</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUserPrivilegeGrants">disableUserPrivilegeGrants</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether users in an account can grant privileges directly to other users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableAutomaticSensitiveDataClassificationLog">enableAutomaticSensitiveDataClassificationLog</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableEgressCostOptimizer">enableEgressCostOptimizer</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableIdentifierFirstLogin">enableIdentifierFirstLogin</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines the login flow for users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableInternalStagesPrivatelink">enableInternalStagesPrivatelink</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository">enableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnhandledExceptionsReporting">enableUnhandledExceptionsReporting</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnloadPhysicalTypeOptimization">enableUnloadPhysicalTypeOptimization</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedQuerySyntaxError">enableUnredactedQuerySyntaxError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedSecureObjectError">enableUnredactedSecureObjectError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Controls whether error messages related to secure objects are redacted in metadata. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enforceNetworkRulesForInternalStages">enforceNetworkRulesForInternalStages</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicMerge">errorOnNondeterministicMerge</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicUpdate">errorOnNondeterministicUpdate</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.eventTable">eventTable</a></code> | <code>java.lang.String</code> | Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalVolume">externalVolume</a></code> | <code>java.lang.String</code> | Specifies the external volume for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geographyOutputFormat">geographyOutputFormat</a></code> | <code>java.lang.String</code> | Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geometryOutputFormat">geometryOutputFormat</a></code> | <code>java.lang.String</code> | Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.hybridTableLockTimeout">hybridTableLockTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#id CurrentOrganizationAccount#id}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.initialReplicationSizeLimitInTb">initialReplicationSizeLimitInTb</a></code> | <code>java.lang.String</code> | Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatDecimalAsInt">jdbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatTimestampNtzAsUtc">jdbcTreatTimestampNtzAsUtc</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcUseSessionTimezone">jdbcUseSessionTimezone</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsonIndent">jsonIndent</a></code> | <code>java.lang.Number</code> | Specifies the number of blank spaces to indent each new element in JSON output in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsTreatIntegerAsBigint">jsTreatIntegerAsBigint</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule">listingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>java.lang.String</code> | Sets the time interval used to refresh the application package based data products to other regions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lockTimeout">lockTimeout</a></code> | <code>java.lang.Number</code> | Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.logLevel">logLevel</a></code> | <code>java.lang.String</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>java.lang.Number</code> | Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>java.lang.Number</code> | Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.metricLevel">metricLevel</a></code> | <code>java.lang.String</code> | Controls how metrics data is ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.minDataRetentionTimeInDays">minDataRetentionTimeInDays</a></code> | <code>java.lang.Number</code> | Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.multiStatementCount">multiStatementCount</a></code> | <code>java.lang.Number</code> | Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.networkPolicy">networkPolicy</a></code> | <code>java.lang.String</code> | Specifies the network policy to enforce for your account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.noorderSequenceAsDefault">noorderSequenceAsDefault</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.oauthAddPrivilegedRolesToBlockedList">oauthAddPrivilegedRolesToBlockedList</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.odbcTreatDecimalAsInt">odbcTreatDecimalAsInt</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>java.lang.String</code> | Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.periodicDataRekeying">periodicDataRekeying</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pipeExecutionPaused">pipeExecutionPaused</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInlineUrl">preventUnloadToInlineUrl</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInternalStages">preventUnloadToInternalStages</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerModules">pythonProfilerModules</a></code> | <code>java.lang.String</code> | Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerTargetStage">pythonProfilerTargetStage</a></code> | <code>java.lang.String</code> | Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.queryTag">queryTag</a></code> | <code>java.lang.String</code> | Optional string that can be used to tag queries and other SQL statements executed within a session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageCreation">requireStorageIntegrationForStageCreation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageOperation">requireStorageIntegrationForStageOperation</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.resourceMonitor">resourceMonitor</a></code> | <code>java.lang.String</code> | Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.rowsPerResultset">rowsPerResultset</a></code> | <code>java.lang.Number</code> | Specifies the maximum number of rows returned in a result set. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.s3StageVpceDnsName">s3StageVpceDnsName</a></code> | <code>java.lang.String</code> | Specifies the DNS name of an Amazon S3 interface endpoint. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.samlIdentityProvider">samlIdentityProvider</a></code> | <code>java.lang.String</code> | Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.searchPath">searchPath</a></code> | <code>java.lang.String</code> | Specifies the path to search to resolve unqualified object names in queries. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMaxStatementSize">serverlessTaskMaxStatementSize</a></code> | <code>java.lang.String</code> | Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMinStatementSize">serverlessTaskMinStatementSize</a></code> | <code>java.lang.String</code> | Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.sessionPolicy">sessionPolicy</a></code> | <code>java.lang.String</code> | Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.simulatedDataSharingConsumer">simulatedDataSharingConsumer</a></code> | <code>java.lang.String</code> | Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.ssoLoginPage">ssoLoginPage</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>java.lang.Number</code> | Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>java.lang.String</code> | Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` \| `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.strictJsonOutput">strictJsonOutput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>java.lang.Number</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>java.lang.Number</code> | Specifies the number of automatic task graph retry attempts. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeInputFormat">timeInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeOutputFormat">timeOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampDayIsAlways24H">timestampDayIsAlways24H</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampInputFormat">timestampInputFormat</a></code> | <code>java.lang.String</code> | Specifies the input format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampLtzOutputFormat">timestampLtzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_LTZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampNtzOutputFormat">timestampNtzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampOutputFormat">timestampOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTypeMapping">timestampTypeMapping</a></code> | <code>java.lang.String</code> | Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTzOutputFormat">timestampTzOutputFormat</a></code> | <code>java.lang.String</code> | Specifies the display format for the TIMESTAMP_TZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timezone">timezone</a></code> | <code>java.lang.String</code> | Specifies the time zone for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.traceLevel">traceLevel</a></code> | <code>java.lang.String</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionAbortOnError">transactionAbortOnError</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionDefaultIsolationLevel">transactionDefaultIsolationLevel</a></code> | <code>java.lang.String</code> | Specifies the isolation level for transactions in the user session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.twoDigitCenturyStart">twoDigitCenturyStart</a></code> | <code>java.lang.Number</code> | Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.unsupportedDdlAction">unsupportedDdlAction</a></code> | <code>java.lang.String</code> | Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.useCachedResult">useCachedResult</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Specifies whether to reuse persisted query results, if available, when a matching query is submitted. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>java.lang.String</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>java.lang.Number</code> | Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>java.lang.Number</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekOfYearPolicy">weekOfYearPolicy</a></code> | <code>java.lang.Number</code> | Specifies how the weeks in a given year are computed. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekStart">weekStart</a></code> | <code>java.lang.Number</code> | Specifies the first day of the week (used by week-related date functions). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The identifier (i.e. name) for the organization account within currently used organization. The field name is validated during import and create operations to ensure that it matches the current organization account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#name CurrentOrganizationAccount#name}

---

##### `abortDetachedQuery`<sup>Optional</sup> <a name="abortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.abortDetachedQuery"></a>

```java
public java.lang.Object getAbortDetachedQuery();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#abort_detached_query CurrentOrganizationAccount#abort_detached_query}

---

##### `activePythonProfiler`<sup>Optional</sup> <a name="activePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.activePythonProfiler"></a>

```java
public java.lang.String getActivePythonProfiler();
```

- *Type:* java.lang.String

Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#active_python_profiler CurrentOrganizationAccount#active_python_profiler}

---

##### `allowClientMfaCaching`<sup>Optional</sup> <a name="allowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowClientMfaCaching"></a>

```java
public java.lang.Object getAllowClientMfaCaching();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#allow_client_mfa_caching CurrentOrganizationAccount#allow_client_mfa_caching}

---

##### `allowIdToken`<sup>Optional</sup> <a name="allowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowIdToken"></a>

```java
public java.lang.Object getAllowIdToken();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#allow_id_token CurrentOrganizationAccount#allow_id_token}

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.autocommit"></a>

```java
public java.lang.Object getAutocommit();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether autocommit is enabled for the session.

Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#autocommit CurrentOrganizationAccount#autocommit}

---

##### `baseLocationPrefix`<sup>Optional</sup> <a name="baseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.baseLocationPrefix"></a>

```java
public java.lang.String getBaseLocationPrefix();
```

- *Type:* java.lang.String

Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables.

For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#base_location_prefix CurrentOrganizationAccount#base_location_prefix}

---

##### `binaryInputFormat`<sup>Optional</sup> <a name="binaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryInputFormat"></a>

```java
public java.lang.String getBinaryInputFormat();
```

- *Type:* java.lang.String

The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#binary_input_format CurrentOrganizationAccount#binary_input_format}

---

##### `binaryOutputFormat`<sup>Optional</sup> <a name="binaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryOutputFormat"></a>

```java
public java.lang.String getBinaryOutputFormat();
```

- *Type:* java.lang.String

The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#binary_output_format CurrentOrganizationAccount#binary_output_format}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalog"></a>

```java
public java.lang.String getCatalog();
```

- *Type:* java.lang.String

Specifies the catalog for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#catalog CurrentOrganizationAccount#catalog}

---

##### `catalogSync`<sup>Optional</sup> <a name="catalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalogSync"></a>

```java
public java.lang.String getCatalogSync();
```

- *Type:* java.lang.String

Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#catalog_sync CurrentOrganizationAccount#catalog_sync}

---

##### `clientEnableLogInfoStatementParameters`<sup>Optional</sup> <a name="clientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEnableLogInfoStatementParameters"></a>

```java
public java.lang.Object getClientEnableLogInfoStatementParameters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_enable_log_info_statement_parameters CurrentOrganizationAccount#client_enable_log_info_statement_parameters}

---

##### `clientEncryptionKeySize`<sup>Optional</sup> <a name="clientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEncryptionKeySize"></a>

```java
public java.lang.Number getClientEncryptionKeySize();
```

- *Type:* java.lang.Number

Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type.

For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_encryption_key_size CurrentOrganizationAccount#client_encryption_key_size}

---

##### `clientMemoryLimit`<sup>Optional</sup> <a name="clientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMemoryLimit"></a>

```java
public java.lang.Number getClientMemoryLimit();
```

- *Type:* java.lang.Number

Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB).

For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_memory_limit CurrentOrganizationAccount#client_memory_limit}

---

##### `clientMetadataRequestUseConnectionCtx`<sup>Optional</sup> <a name="clientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataRequestUseConnectionCtx"></a>

```java
public java.lang.Object getClientMetadataRequestUseConnectionCtx();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema.

The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_metadata_request_use_connection_ctx CurrentOrganizationAccount#client_metadata_request_use_connection_ctx}

---

##### `clientMetadataUseSessionDatabase`<sup>Optional</sup> <a name="clientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataUseSessionDatabase"></a>

```java
public java.lang.Object getClientMetadataUseSessionDatabase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database.

The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_metadata_use_session_database CurrentOrganizationAccount#client_metadata_use_session_database}

---

##### `clientPrefetchThreads`<sup>Optional</sup> <a name="clientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientPrefetchThreads"></a>

```java
public java.lang.Number getClientPrefetchThreads();
```

- *Type:* java.lang.Number

Parameter that specifies the number of threads used by the client to pre-fetch large result sets.

The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_prefetch_threads CurrentOrganizationAccount#client_prefetch_threads}

---

##### `clientResultChunkSize`<sup>Optional</sup> <a name="clientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultChunkSize"></a>

```java
public java.lang.Number getClientResultChunkSize();
```

- *Type:* java.lang.Number

Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB).

The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_result_chunk_size CurrentOrganizationAccount#client_result_chunk_size}

---

##### `clientResultColumnCaseInsensitive`<sup>Optional</sup> <a name="clientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultColumnCaseInsensitive"></a>

```java
public java.lang.Object getClientResultColumnCaseInsensitive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_result_column_case_insensitive CurrentOrganizationAccount#client_result_column_case_insensitive}

---

##### `clientSessionKeepAlive`<sup>Optional</sup> <a name="clientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAlive"></a>

```java
public java.lang.Object getClientSessionKeepAlive();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Parameter that indicates whether to force a user to log in again after a period of inactivity in the session.

For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_session_keep_alive CurrentOrganizationAccount#client_session_keep_alive}

---

##### `clientSessionKeepAliveHeartbeatFrequency`<sup>Optional</sup> <a name="clientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```java
public java.lang.Number getClientSessionKeepAliveHeartbeatFrequency();
```

- *Type:* java.lang.Number

Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_session_keep_alive_heartbeat_frequency CurrentOrganizationAccount#client_session_keep_alive_heartbeat_frequency}

---

##### `clientTimestampTypeMapping`<sup>Optional</sup> <a name="clientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientTimestampTypeMapping"></a>

```java
public java.lang.String getClientTimestampTypeMapping();
```

- *Type:* java.lang.String

Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_timestamp_type_mapping CurrentOrganizationAccount#client_timestamp_type_mapping}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

Specifies a comment for the organization account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#comment CurrentOrganizationAccount#comment}

---

##### `cortexEnabledCrossRegion`<sup>Optional</sup> <a name="cortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexEnabledCrossRegion"></a>

```java
public java.lang.String getCortexEnabledCrossRegion();
```

- *Type:* java.lang.String

Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed.

Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#cortex_enabled_cross_region CurrentOrganizationAccount#cortex_enabled_cross_region}

---

##### `cortexModelsAllowlist`<sup>Optional</sup> <a name="cortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexModelsAllowlist"></a>

```java
public java.lang.String getCortexModelsAllowlist();
```

- *Type:* java.lang.String

Specifies the models that users in the account can access.

Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#cortex_models_allowlist CurrentOrganizationAccount#cortex_models_allowlist}

---

##### `csvTimestampFormat`<sup>Optional</sup> <a name="csvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.csvTimestampFormat"></a>

```java
public java.lang.String getCsvTimestampFormat();
```

- *Type:* java.lang.String

Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight.

If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#csv_timestamp_format CurrentOrganizationAccount#csv_timestamp_format}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dataRetentionTimeInDays"></a>

```java
public java.lang.Number getDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#data_retention_time_in_days CurrentOrganizationAccount#data_retention_time_in_days}

---

##### `dateInputFormat`<sup>Optional</sup> <a name="dateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateInputFormat"></a>

```java
public java.lang.String getDateInputFormat();
```

- *Type:* java.lang.String

Specifies the input format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#date_input_format CurrentOrganizationAccount#date_input_format}

---

##### `dateOutputFormat`<sup>Optional</sup> <a name="dateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateOutputFormat"></a>

```java
public java.lang.String getDateOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#date_output_format CurrentOrganizationAccount#date_output_format}

---

##### `defaultDdlCollation`<sup>Optional</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultDdlCollation"></a>

```java
public java.lang.String getDefaultDdlCollation();
```

- *Type:* java.lang.String

Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_ddl_collation CurrentOrganizationAccount#default_ddl_collation}

---

##### `defaultNotebookComputePoolCpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolCpu"></a>

```java
public java.lang.String getDefaultNotebookComputePoolCpu();
```

- *Type:* java.lang.String

Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_notebook_compute_pool_cpu CurrentOrganizationAccount#default_notebook_compute_pool_cpu}

---

##### `defaultNotebookComputePoolGpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolGpu"></a>

```java
public java.lang.String getDefaultNotebookComputePoolGpu();
```

- *Type:* java.lang.String

Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_notebook_compute_pool_gpu CurrentOrganizationAccount#default_notebook_compute_pool_gpu}

---

##### `defaultNullOrdering`<sup>Optional</sup> <a name="defaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNullOrdering"></a>

```java
public java.lang.String getDefaultNullOrdering();
```

- *Type:* java.lang.String

Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_null_ordering CurrentOrganizationAccount#default_null_ordering}

---

##### `defaultStreamlitNotebookWarehouse`<sup>Optional</sup> <a name="defaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultStreamlitNotebookWarehouse"></a>

```java
public java.lang.String getDefaultStreamlitNotebookWarehouse();
```

- *Type:* java.lang.String

Specifies the name of the default warehouse to use when creating a notebook.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_streamlit_notebook_warehouse CurrentOrganizationAccount#default_streamlit_notebook_warehouse}

---

##### `disableUiDownloadButton`<sup>Optional</sup> <a name="disableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUiDownloadButton"></a>

```java
public java.lang.Object getDisableUiDownloadButton();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet.

If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#disable_ui_download_button CurrentOrganizationAccount#disable_ui_download_button}

---

##### `disableUserPrivilegeGrants`<sup>Optional</sup> <a name="disableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUserPrivilegeGrants"></a>

```java
public java.lang.Object getDisableUserPrivilegeGrants();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether users in an account can grant privileges directly to other users.

Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#disable_user_privilege_grants CurrentOrganizationAccount#disable_user_privilege_grants}

---

##### `enableAutomaticSensitiveDataClassificationLog`<sup>Optional</sup> <a name="enableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableAutomaticSensitiveDataClassificationLog"></a>

```java
public java.lang.Object getEnableAutomaticSensitiveDataClassificationLog();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_automatic_sensitive_data_classification_log CurrentOrganizationAccount#enable_automatic_sensitive_data_classification_log}

---

##### `enableEgressCostOptimizer`<sup>Optional</sup> <a name="enableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableEgressCostOptimizer"></a>

```java
public java.lang.Object getEnableEgressCostOptimizer();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_egress_cost_optimizer CurrentOrganizationAccount#enable_egress_cost_optimizer}

---

##### `enableIdentifierFirstLogin`<sup>Optional</sup> <a name="enableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableIdentifierFirstLogin"></a>

```java
public java.lang.Object getEnableIdentifierFirstLogin();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines the login flow for users.

When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_identifier_first_login CurrentOrganizationAccount#enable_identifier_first_login}

---

##### `enableInternalStagesPrivatelink`<sup>Optional</sup> <a name="enableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableInternalStagesPrivatelink"></a>

```java
public java.lang.Object getEnableInternalStagesPrivatelink();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_internal_stages_privatelink CurrentOrganizationAccount#enable_internal_stages_privatelink}

---

##### `enableTriSecretAndRekeyOptOutForImageRepository`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```java
public java.lang.Object getEnableTriSecretAndRekeyOptOutForImageRepository();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentOrganizationAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```java
public java.lang.Object getEnableTriSecretAndRekeyOptOutForSpcsBlockStorage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentOrganizationAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}

---

##### `enableUnhandledExceptionsReporting`<sup>Optional</sup> <a name="enableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnhandledExceptionsReporting"></a>

```java
public java.lang.Object getEnableUnhandledExceptionsReporting();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code.

For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unhandled_exceptions_reporting CurrentOrganizationAccount#enable_unhandled_exceptions_reporting}

---

##### `enableUnloadPhysicalTypeOptimization`<sup>Optional</sup> <a name="enableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnloadPhysicalTypeOptimization"></a>

```java
public java.lang.Object getEnableUnloadPhysicalTypeOptimization();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unload_physical_type_optimization CurrentOrganizationAccount#enable_unload_physical_type_optimization}

---

##### `enableUnredactedQuerySyntaxError`<sup>Optional</sup> <a name="enableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedQuerySyntaxError"></a>

```java
public java.lang.Object getEnableUnredactedQuerySyntaxError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error.

If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unredacted_query_syntax_error CurrentOrganizationAccount#enable_unredacted_query_syntax_error}

---

##### `enableUnredactedSecureObjectError`<sup>Optional</sup> <a name="enableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedSecureObjectError"></a>

```java
public java.lang.Object getEnableUnredactedSecureObjectError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Controls whether error messages related to secure objects are redacted in metadata.

For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unredacted_secure_object_error CurrentOrganizationAccount#enable_unredacted_secure_object_error}

---

##### `enforceNetworkRulesForInternalStages`<sup>Optional</sup> <a name="enforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enforceNetworkRulesForInternalStages"></a>

```java
public java.lang.Object getEnforceNetworkRulesForInternalStages();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether a network policy that uses network rules can restrict access to AWS internal stages.

This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enforce_network_rules_for_internal_stages CurrentOrganizationAccount#enforce_network_rules_for_internal_stages}

---

##### `errorOnNondeterministicMerge`<sup>Optional</sup> <a name="errorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicMerge"></a>

```java
public java.lang.Object getErrorOnNondeterministicMerge();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#error_on_nondeterministic_merge CurrentOrganizationAccount#error_on_nondeterministic_merge}

---

##### `errorOnNondeterministicUpdate`<sup>Optional</sup> <a name="errorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicUpdate"></a>

```java
public java.lang.Object getErrorOnNondeterministicUpdate();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#error_on_nondeterministic_update CurrentOrganizationAccount#error_on_nondeterministic_update}

---

##### `eventTable`<sup>Optional</sup> <a name="eventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.eventTable"></a>

```java
public java.lang.String getEventTable();
```

- *Type:* java.lang.String

Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated.

Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#event_table CurrentOrganizationAccount#event_table}

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```java
public java.lang.Object getExternalOauthAddPrivilegedRolesToBlockedList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server.

For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#external_oauth_add_privileged_roles_to_blocked_list CurrentOrganizationAccount#external_oauth_add_privileged_roles_to_blocked_list}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalVolume"></a>

```java
public java.lang.String getExternalVolume();
```

- *Type:* java.lang.String

Specifies the external volume for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#external_volume CurrentOrganizationAccount#external_volume}

---

##### `geographyOutputFormat`<sup>Optional</sup> <a name="geographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geographyOutputFormat"></a>

```java
public java.lang.String getGeographyOutputFormat();
```

- *Type:* java.lang.String

Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#geography_output_format CurrentOrganizationAccount#geography_output_format}

---

##### `geometryOutputFormat`<sup>Optional</sup> <a name="geometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geometryOutputFormat"></a>

```java
public java.lang.String getGeometryOutputFormat();
```

- *Type:* java.lang.String

Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#geometry_output_format CurrentOrganizationAccount#geometry_output_format}

---

##### `hybridTableLockTimeout`<sup>Optional</sup> <a name="hybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.hybridTableLockTimeout"></a>

```java
public java.lang.Number getHybridTableLockTimeout();
```

- *Type:* java.lang.Number

Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement.

For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#hybrid_table_lock_timeout CurrentOrganizationAccount#hybrid_table_lock_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#id CurrentOrganizationAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialReplicationSizeLimitInTb`<sup>Optional</sup> <a name="initialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.initialReplicationSizeLimitInTb"></a>

```java
public java.lang.String getInitialReplicationSizeLimitInTb();
```

- *Type:* java.lang.String

Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB).

Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#initial_replication_size_limit_in_tb CurrentOrganizationAccount#initial_replication_size_limit_in_tb}

---

##### `jdbcTreatDecimalAsInt`<sup>Optional</sup> <a name="jdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatDecimalAsInt"></a>

```java
public java.lang.Object getJdbcTreatDecimalAsInt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#jdbc_treat_decimal_as_int CurrentOrganizationAccount#jdbc_treat_decimal_as_int}

---

##### `jdbcTreatTimestampNtzAsUtc`<sup>Optional</sup> <a name="jdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatTimestampNtzAsUtc"></a>

```java
public java.lang.Object getJdbcTreatTimestampNtzAsUtc();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#jdbc_treat_timestamp_ntz_as_utc CurrentOrganizationAccount#jdbc_treat_timestamp_ntz_as_utc}

---

##### `jdbcUseSessionTimezone`<sup>Optional</sup> <a name="jdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcUseSessionTimezone"></a>

```java
public java.lang.Object getJdbcUseSessionTimezone();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#jdbc_use_session_timezone CurrentOrganizationAccount#jdbc_use_session_timezone}

---

##### `jsonIndent`<sup>Optional</sup> <a name="jsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsonIndent"></a>

```java
public java.lang.Number getJsonIndent();
```

- *Type:* java.lang.Number

Specifies the number of blank spaces to indent each new element in JSON output in the session.

Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#json_indent CurrentOrganizationAccount#json_indent}

---

##### `jsTreatIntegerAsBigint`<sup>Optional</sup> <a name="jsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsTreatIntegerAsBigint"></a>

```java
public java.lang.Object getJsTreatIntegerAsBigint();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#js_treat_integer_as_bigint CurrentOrganizationAccount#js_treat_integer_as_bigint}

---

##### `listingAutoFulfillmentReplicationRefreshSchedule`<sup>Optional</sup> <a name="listingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```java
public java.lang.String getListingAutoFulfillmentReplicationRefreshSchedule();
```

- *Type:* java.lang.String

Sets the time interval used to refresh the application package based data products to other regions.

For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#listing_auto_fulfillment_replication_refresh_schedule CurrentOrganizationAccount#listing_auto_fulfillment_replication_refresh_schedule}

---

##### `lockTimeout`<sup>Optional</sup> <a name="lockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lockTimeout"></a>

```java
public java.lang.Number getLockTimeout();
```

- *Type:* java.lang.Number

Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement.

For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#lock_timeout CurrentOrganizationAccount#lock_timeout}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.logLevel"></a>

```java
public java.lang.String getLogLevel();
```

- *Type:* java.lang.String

Specifies the severity level of messages that should be ingested and made available in the active event table.

Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#log_level CurrentOrganizationAccount#log_level}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxConcurrencyLevel"></a>

```java
public java.lang.Number getMaxConcurrencyLevel();
```

- *Type:* java.lang.Number

Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#max_concurrency_level CurrentOrganizationAccount#max_concurrency_level}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxDataExtensionTimeInDays"></a>

```java
public java.lang.Number getMaxDataExtensionTimeInDays();
```

- *Type:* java.lang.Number

Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale.

By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#max_data_extension_time_in_days CurrentOrganizationAccount#max_data_extension_time_in_days}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.metricLevel"></a>

```java
public java.lang.String getMetricLevel();
```

- *Type:* java.lang.String

Controls how metrics data is ingested into the event table.

For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#metric_level CurrentOrganizationAccount#metric_level}

---

##### `minDataRetentionTimeInDays`<sup>Optional</sup> <a name="minDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.minDataRetentionTimeInDays"></a>

```java
public java.lang.Number getMinDataRetentionTimeInDays();
```

- *Type:* java.lang.Number

Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object.

If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#min_data_retention_time_in_days CurrentOrganizationAccount#min_data_retention_time_in_days}

---

##### `multiStatementCount`<sup>Optional</sup> <a name="multiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.multiStatementCount"></a>

```java
public java.lang.Number getMultiStatementCount();
```

- *Type:* java.lang.Number

Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#multi_statement_count CurrentOrganizationAccount#multi_statement_count}

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.networkPolicy"></a>

```java
public java.lang.String getNetworkPolicy();
```

- *Type:* java.lang.String

Specifies the network policy to enforce for your account.

Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#network_policy CurrentOrganizationAccount#network_policy}

---

##### `noorderSequenceAsDefault`<sup>Optional</sup> <a name="noorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.noorderSequenceAsDefault"></a>

```java
public java.lang.Object getNoorderSequenceAsDefault();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column.

The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#noorder_sequence_as_default CurrentOrganizationAccount#noorder_sequence_as_default}

---

##### `oauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="oauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.oauthAddPrivilegedRolesToBlockedList"></a>

```java
public java.lang.Object getOauthAddPrivilegedRolesToBlockedList();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server.

For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#oauth_add_privileged_roles_to_blocked_list CurrentOrganizationAccount#oauth_add_privileged_roles_to_blocked_list}

---

##### `odbcTreatDecimalAsInt`<sup>Optional</sup> <a name="odbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.odbcTreatDecimalAsInt"></a>

```java
public java.lang.Object getOdbcTreatDecimalAsInt();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#odbc_treat_decimal_as_int CurrentOrganizationAccount#odbc_treat_decimal_as_int}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.passwordPolicy"></a>

```java
public java.lang.String getPasswordPolicy();
```

- *Type:* java.lang.String

Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#password_policy CurrentOrganizationAccount#password_policy}

---

##### `periodicDataRekeying`<sup>Optional</sup> <a name="periodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.periodicDataRekeying"></a>

```java
public java.lang.Object getPeriodicDataRekeying();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#periodic_data_rekeying CurrentOrganizationAccount#periodic_data_rekeying}

---

##### `pipeExecutionPaused`<sup>Optional</sup> <a name="pipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pipeExecutionPaused"></a>

```java
public java.lang.Object getPipeExecutionPaused();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#pipe_execution_paused CurrentOrganizationAccount#pipe_execution_paused}

---

##### `preventUnloadToInlineUrl`<sup>Optional</sup> <a name="preventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInlineUrl"></a>

```java
public java.lang.Object getPreventUnloadToInlineUrl();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#prevent_unload_to_inline_url CurrentOrganizationAccount#prevent_unload_to_inline_url}

---

##### `preventUnloadToInternalStages`<sup>Optional</sup> <a name="preventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInternalStages"></a>

```java
public java.lang.Object getPreventUnloadToInternalStages();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#prevent_unload_to_internal_stages CurrentOrganizationAccount#prevent_unload_to_internal_stages}

---

##### `pythonProfilerModules`<sup>Optional</sup> <a name="pythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerModules"></a>

```java
public java.lang.String getPythonProfilerModules();
```

- *Type:* java.lang.String

Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#python_profiler_modules CurrentOrganizationAccount#python_profiler_modules}

---

##### `pythonProfilerTargetStage`<sup>Optional</sup> <a name="pythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerTargetStage"></a>

```java
public java.lang.String getPythonProfilerTargetStage();
```

- *Type:* java.lang.String

Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#python_profiler_target_stage CurrentOrganizationAccount#python_profiler_target_stage}

---

##### `queryTag`<sup>Optional</sup> <a name="queryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.queryTag"></a>

```java
public java.lang.String getQueryTag();
```

- *Type:* java.lang.String

Optional string that can be used to tag queries and other SQL statements executed within a session.

The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#query_tag CurrentOrganizationAccount#query_tag}

---

##### `quotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.quotedIdentifiersIgnoreCase"></a>

```java
public java.lang.Object getQuotedIdentifiersIgnoreCase();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters.

By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#quoted_identifiers_ignore_case CurrentOrganizationAccount#quoted_identifiers_ignore_case}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.replaceInvalidCharacters"></a>

```java
public java.lang.Object getReplaceInvalidCharacters();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#replace_invalid_characters CurrentOrganizationAccount#replace_invalid_characters}

---

##### `requireStorageIntegrationForStageCreation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageCreation"></a>

```java
public java.lang.Object getRequireStorageIntegrationForStageCreation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#require_storage_integration_for_stage_creation CurrentOrganizationAccount#require_storage_integration_for_stage_creation}

---

##### `requireStorageIntegrationForStageOperation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageOperation"></a>

```java
public java.lang.Object getRequireStorageIntegrationForStageOperation();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location.

For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#require_storage_integration_for_stage_operation CurrentOrganizationAccount#require_storage_integration_for_stage_operation}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.resourceMonitor"></a>

```java
public java.lang.String getResourceMonitor();
```

- *Type:* java.lang.String

Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#resource_monitor CurrentOrganizationAccount#resource_monitor}

---

##### `rowsPerResultset`<sup>Optional</sup> <a name="rowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.rowsPerResultset"></a>

```java
public java.lang.Number getRowsPerResultset();
```

- *Type:* java.lang.Number

Specifies the maximum number of rows returned in a result set.

A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#rows_per_resultset CurrentOrganizationAccount#rows_per_resultset}

---

##### `s3StageVpceDnsName`<sup>Optional</sup> <a name="s3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.s3StageVpceDnsName"></a>

```java
public java.lang.String getS3StageVpceDnsName();
```

- *Type:* java.lang.String

Specifies the DNS name of an Amazon S3 interface endpoint.

Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#s3_stage_vpce_dns_name CurrentOrganizationAccount#s3_stage_vpce_dns_name}

---

##### `samlIdentityProvider`<sup>Optional</sup> <a name="samlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.samlIdentityProvider"></a>

```java
public java.lang.String getSamlIdentityProvider();
```

- *Type:* java.lang.String

Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#saml_identity_provider CurrentOrganizationAccount#saml_identity_provider}

---

##### `searchPath`<sup>Optional</sup> <a name="searchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.searchPath"></a>

```java
public java.lang.String getSearchPath();
```

- *Type:* java.lang.String

Specifies the path to search to resolve unqualified object names in queries.

For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#search_path CurrentOrganizationAccount#search_path}

---

##### `serverlessTaskMaxStatementSize`<sup>Optional</sup> <a name="serverlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMaxStatementSize"></a>

```java
public java.lang.String getServerlessTaskMaxStatementSize();
```

- *Type:* java.lang.String

Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#serverless_task_max_statement_size CurrentOrganizationAccount#serverless_task_max_statement_size}

---

##### `serverlessTaskMinStatementSize`<sup>Optional</sup> <a name="serverlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMinStatementSize"></a>

```java
public java.lang.String getServerlessTaskMinStatementSize();
```

- *Type:* java.lang.String

Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#serverless_task_min_statement_size CurrentOrganizationAccount#serverless_task_min_statement_size}

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.sessionPolicy"></a>

```java
public java.lang.String getSessionPolicy();
```

- *Type:* java.lang.String

Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#session_policy CurrentOrganizationAccount#session_policy}

---

##### `simulatedDataSharingConsumer`<sup>Optional</sup> <a name="simulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.simulatedDataSharingConsumer"></a>

```java
public java.lang.String getSimulatedDataSharingConsumer();
```

- *Type:* java.lang.String

Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views.

When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#simulated_data_sharing_consumer CurrentOrganizationAccount#simulated_data_sharing_consumer}

---

##### `ssoLoginPage`<sup>Optional</sup> <a name="ssoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.ssoLoginPage"></a>

```java
public java.lang.Object getSsoLoginPage();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users.

For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#sso_login_page CurrentOrganizationAccount#sso_login_page}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementQueuedTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementQueuedTimeoutInSeconds();
```

- *Type:* java.lang.Number

Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#statement_queued_timeout_in_seconds CurrentOrganizationAccount#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementTimeoutInSeconds"></a>

```java
public java.lang.Number getStatementTimeoutInSeconds();
```

- *Type:* java.lang.Number

Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#statement_timeout_in_seconds CurrentOrganizationAccount#statement_timeout_in_seconds}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.storageSerializationPolicy"></a>

```java
public java.lang.String getStorageSerializationPolicy();
```

- *Type:* java.lang.String

Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#storage_serialization_policy CurrentOrganizationAccount#storage_serialization_policy}

---

##### `strictJsonOutput`<sup>Optional</sup> <a name="strictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.strictJsonOutput"></a>

```java
public java.lang.Object getStrictJsonOutput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#strict_json_output CurrentOrganizationAccount#strict_json_output}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.suspendTaskAfterNumFailures"></a>

```java
public java.lang.Number getSuspendTaskAfterNumFailures();
```

- *Type:* java.lang.Number

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#suspend_task_after_num_failures CurrentOrganizationAccount#suspend_task_after_num_failures}

---

##### `taskAutoRetryAttempts`<sup>Optional</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.taskAutoRetryAttempts"></a>

```java
public java.lang.Number getTaskAutoRetryAttempts();
```

- *Type:* java.lang.Number

Specifies the number of automatic task graph retry attempts.

If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#task_auto_retry_attempts CurrentOrganizationAccount#task_auto_retry_attempts}

---

##### `timeInputFormat`<sup>Optional</sup> <a name="timeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeInputFormat"></a>

```java
public java.lang.String getTimeInputFormat();
```

- *Type:* java.lang.String

Specifies the input format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#time_input_format CurrentOrganizationAccount#time_input_format}

---

##### `timeOutputFormat`<sup>Optional</sup> <a name="timeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeOutputFormat"></a>

```java
public java.lang.String getTimeOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#time_output_format CurrentOrganizationAccount#time_output_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeouts"></a>

```java
public CurrentOrganizationAccountTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timeouts CurrentOrganizationAccount#timeouts}

---

##### `timestampDayIsAlways24H`<sup>Optional</sup> <a name="timestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampDayIsAlways24H"></a>

```java
public java.lang.Object getTimestampDayIsAlways24H();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_day_is_always_24h CurrentOrganizationAccount#timestamp_day_is_always_24h}

---

##### `timestampInputFormat`<sup>Optional</sup> <a name="timestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampInputFormat"></a>

```java
public java.lang.String getTimestampInputFormat();
```

- *Type:* java.lang.String

Specifies the input format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_input_format CurrentOrganizationAccount#timestamp_input_format}

---

##### `timestampLtzOutputFormat`<sup>Optional</sup> <a name="timestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampLtzOutputFormat"></a>

```java
public java.lang.String getTimestampLtzOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_LTZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_ltz_output_format CurrentOrganizationAccount#timestamp_ltz_output_format}

---

##### `timestampNtzOutputFormat`<sup>Optional</sup> <a name="timestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampNtzOutputFormat"></a>

```java
public java.lang.String getTimestampNtzOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_ntz_output_format CurrentOrganizationAccount#timestamp_ntz_output_format}

---

##### `timestampOutputFormat`<sup>Optional</sup> <a name="timestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampOutputFormat"></a>

```java
public java.lang.String getTimestampOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_output_format CurrentOrganizationAccount#timestamp_output_format}

---

##### `timestampTypeMapping`<sup>Optional</sup> <a name="timestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTypeMapping"></a>

```java
public java.lang.String getTimestampTypeMapping();
```

- *Type:* java.lang.String

Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to.

Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_type_mapping CurrentOrganizationAccount#timestamp_type_mapping}

---

##### `timestampTzOutputFormat`<sup>Optional</sup> <a name="timestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTzOutputFormat"></a>

```java
public java.lang.String getTimestampTzOutputFormat();
```

- *Type:* java.lang.String

Specifies the display format for the TIMESTAMP_TZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_tz_output_format CurrentOrganizationAccount#timestamp_tz_output_format}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timezone"></a>

```java
public java.lang.String getTimezone();
```

- *Type:* java.lang.String

Specifies the time zone for the session.

You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timezone CurrentOrganizationAccount#timezone}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.traceLevel"></a>

```java
public java.lang.String getTraceLevel();
```

- *Type:* java.lang.String

Controls how trace events are ingested into the event table.

For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#trace_level CurrentOrganizationAccount#trace_level}

---

##### `transactionAbortOnError`<sup>Optional</sup> <a name="transactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionAbortOnError"></a>

```java
public java.lang.Object getTransactionAbortOnError();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error.

For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#transaction_abort_on_error CurrentOrganizationAccount#transaction_abort_on_error}

---

##### `transactionDefaultIsolationLevel`<sup>Optional</sup> <a name="transactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionDefaultIsolationLevel"></a>

```java
public java.lang.String getTransactionDefaultIsolationLevel();
```

- *Type:* java.lang.String

Specifies the isolation level for transactions in the user session.

Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#transaction_default_isolation_level CurrentOrganizationAccount#transaction_default_isolation_level}

---

##### `twoDigitCenturyStart`<sup>Optional</sup> <a name="twoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.twoDigitCenturyStart"></a>

```java
public java.lang.Number getTwoDigitCenturyStart();
```

- *Type:* java.lang.Number

Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#two_digit_century_start CurrentOrganizationAccount#two_digit_century_start}

---

##### `unsupportedDdlAction`<sup>Optional</sup> <a name="unsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.unsupportedDdlAction"></a>

```java
public java.lang.String getUnsupportedDdlAction();
```

- *Type:* java.lang.String

Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#unsupported_ddl_action CurrentOrganizationAccount#unsupported_ddl_action}

---

##### `useCachedResult`<sup>Optional</sup> <a name="useCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.useCachedResult"></a>

```java
public java.lang.Object getUseCachedResult();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Specifies whether to reuse persisted query results, if available, when a matching query is submitted.

For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#use_cached_result CurrentOrganizationAccount#use_cached_result}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskManagedInitialWarehouseSize"></a>

```java
public java.lang.String getUserTaskManagedInitialWarehouseSize();
```

- *Type:* java.lang.String

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#user_task_managed_initial_warehouse_size CurrentOrganizationAccount#user_task_managed_initial_warehouse_size}

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```java
public java.lang.Number getUserTaskMinimumTriggerIntervalInSeconds();
```

- *Type:* java.lang.Number

Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#user_task_minimum_trigger_interval_in_seconds CurrentOrganizationAccount#user_task_minimum_trigger_interval_in_seconds}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskTimeoutMs"></a>

```java
public java.lang.Number getUserTaskTimeoutMs();
```

- *Type:* java.lang.Number

Specifies the time limit on a single run of the task before it times out (in milliseconds).

For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#user_task_timeout_ms CurrentOrganizationAccount#user_task_timeout_ms}

---

##### `weekOfYearPolicy`<sup>Optional</sup> <a name="weekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekOfYearPolicy"></a>

```java
public java.lang.Number getWeekOfYearPolicy();
```

- *Type:* java.lang.Number

Specifies how the weeks in a given year are computed.

`0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#week_of_year_policy CurrentOrganizationAccount#week_of_year_policy}

---

##### `weekStart`<sup>Optional</sup> <a name="weekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekStart"></a>

```java
public java.lang.Number getWeekStart();
```

- *Type:* java.lang.Number

Specifies the first day of the week (used by week-related date functions).

`0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#week_start CurrentOrganizationAccount#week_start}

---

### CurrentOrganizationAccountShowOutput <a name="CurrentOrganizationAccountShowOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccountShowOutput;

CurrentOrganizationAccountShowOutput.builder()
    .build();
```


### CurrentOrganizationAccountTimeouts <a name="CurrentOrganizationAccountTimeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccountTimeouts;

CurrentOrganizationAccountTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .read(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#create CurrentOrganizationAccount#create}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#delete CurrentOrganizationAccount#delete}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.read">read</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#read CurrentOrganizationAccount#read}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#update CurrentOrganizationAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#create CurrentOrganizationAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#delete CurrentOrganizationAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#read CurrentOrganizationAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#update CurrentOrganizationAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CurrentOrganizationAccountShowOutputList <a name="CurrentOrganizationAccountShowOutputList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccountShowOutputList;

new CurrentOrganizationAccountShowOutputList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.get"></a>

```java
public CurrentOrganizationAccountShowOutputOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### CurrentOrganizationAccountShowOutputOutputReference <a name="CurrentOrganizationAccountShowOutputOutputReference" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccountShowOutputOutputReference;

new CurrentOrganizationAccountShowOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocator">accountLocator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocatorUrl">accountLocatorUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountName">accountName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlLastUsed">accountOldUrlLastUsed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlSavedOn">accountOldUrlSavedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountUrl">accountUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.consumptionBillingEntityName">consumptionBillingEntityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.edition">edition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isEventsAccount">isEventsAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrgAdmin">isOrgAdmin</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrganizationAccount">isOrganizationAccount</a></code> | <code>com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.managedAccounts">managedAccounts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName">marketplaceConsumerBillingEntityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName">marketplaceProviderBillingEntityName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.oldAccountUrl">oldAccountUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationName">organizationName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrl">organizationOldUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlLastUsed">organizationOldUrlLastUsed</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlSavedOn">organizationOldUrlSavedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.snowflakeRegion">snowflakeRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput">CurrentOrganizationAccountShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accountLocator`<sup>Required</sup> <a name="accountLocator" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocator"></a>

```java
public java.lang.String getAccountLocator();
```

- *Type:* java.lang.String

---

##### `accountLocatorUrl`<sup>Required</sup> <a name="accountLocatorUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocatorUrl"></a>

```java
public java.lang.String getAccountLocatorUrl();
```

- *Type:* java.lang.String

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountName"></a>

```java
public java.lang.String getAccountName();
```

- *Type:* java.lang.String

---

##### `accountOldUrlLastUsed`<sup>Required</sup> <a name="accountOldUrlLastUsed" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlLastUsed"></a>

```java
public java.lang.String getAccountOldUrlLastUsed();
```

- *Type:* java.lang.String

---

##### `accountOldUrlSavedOn`<sup>Required</sup> <a name="accountOldUrlSavedOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlSavedOn"></a>

```java
public java.lang.String getAccountOldUrlSavedOn();
```

- *Type:* java.lang.String

---

##### `accountUrl`<sup>Required</sup> <a name="accountUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountUrl"></a>

```java
public java.lang.String getAccountUrl();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `consumptionBillingEntityName`<sup>Required</sup> <a name="consumptionBillingEntityName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.consumptionBillingEntityName"></a>

```java
public java.lang.String getConsumptionBillingEntityName();
```

- *Type:* java.lang.String

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.edition"></a>

```java
public java.lang.String getEdition();
```

- *Type:* java.lang.String

---

##### `isEventsAccount`<sup>Required</sup> <a name="isEventsAccount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isEventsAccount"></a>

```java
public IResolvable getIsEventsAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOrgAdmin`<sup>Required</sup> <a name="isOrgAdmin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrgAdmin"></a>

```java
public IResolvable getIsOrgAdmin();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `isOrganizationAccount`<sup>Required</sup> <a name="isOrganizationAccount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrganizationAccount"></a>

```java
public IResolvable getIsOrganizationAccount();
```

- *Type:* com.hashicorp.cdktf.IResolvable

---

##### `managedAccounts`<sup>Required</sup> <a name="managedAccounts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.managedAccounts"></a>

```java
public java.lang.Number getManagedAccounts();
```

- *Type:* java.lang.Number

---

##### `marketplaceConsumerBillingEntityName`<sup>Required</sup> <a name="marketplaceConsumerBillingEntityName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName"></a>

```java
public java.lang.String getMarketplaceConsumerBillingEntityName();
```

- *Type:* java.lang.String

---

##### `marketplaceProviderBillingEntityName`<sup>Required</sup> <a name="marketplaceProviderBillingEntityName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName"></a>

```java
public java.lang.String getMarketplaceProviderBillingEntityName();
```

- *Type:* java.lang.String

---

##### `oldAccountUrl`<sup>Required</sup> <a name="oldAccountUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.oldAccountUrl"></a>

```java
public java.lang.String getOldAccountUrl();
```

- *Type:* java.lang.String

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationName"></a>

```java
public java.lang.String getOrganizationName();
```

- *Type:* java.lang.String

---

##### `organizationOldUrl`<sup>Required</sup> <a name="organizationOldUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrl"></a>

```java
public java.lang.String getOrganizationOldUrl();
```

- *Type:* java.lang.String

---

##### `organizationOldUrlLastUsed`<sup>Required</sup> <a name="organizationOldUrlLastUsed" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlLastUsed"></a>

```java
public java.lang.String getOrganizationOldUrlLastUsed();
```

- *Type:* java.lang.String

---

##### `organizationOldUrlSavedOn`<sup>Required</sup> <a name="organizationOldUrlSavedOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlSavedOn"></a>

```java
public java.lang.String getOrganizationOldUrlSavedOn();
```

- *Type:* java.lang.String

---

##### `snowflakeRegion`<sup>Required</sup> <a name="snowflakeRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.snowflakeRegion"></a>

```java
public java.lang.String getSnowflakeRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.internalValue"></a>

```java
public CurrentOrganizationAccountShowOutput getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput">CurrentOrganizationAccountShowOutput</a>

---


### CurrentOrganizationAccountTimeoutsOutputReference <a name="CurrentOrganizationAccountTimeoutsOutputReference" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.snowflake.current_organization_account.CurrentOrganizationAccountTimeoutsOutputReference;

new CurrentOrganizationAccountTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetRead"></a>

```java
public void resetRead()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.read">read</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.readInput"></a>

```java
public java.lang.String getReadInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.read"></a>

```java
public java.lang.String getRead();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

---



