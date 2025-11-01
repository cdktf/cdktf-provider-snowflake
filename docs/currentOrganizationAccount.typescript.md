# `currentOrganizationAccount` Submodule <a name="`currentOrganizationAccount` Submodule" id="@cdktf/provider-snowflake.currentOrganizationAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurrentOrganizationAccount <a name="CurrentOrganizationAccount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account snowflake_current_organization_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

new currentOrganizationAccount.CurrentOrganizationAccount(scope: Construct, id: string, config: CurrentOrganizationAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig">CurrentOrganizationAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig">CurrentOrganizationAccountConfig</a>

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

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: CurrentOrganizationAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

---

##### `resetAbortDetachedQuery` <a name="resetAbortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAbortDetachedQuery"></a>

```typescript
public resetAbortDetachedQuery(): void
```

##### `resetActivePythonProfiler` <a name="resetActivePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetActivePythonProfiler"></a>

```typescript
public resetActivePythonProfiler(): void
```

##### `resetAllowClientMfaCaching` <a name="resetAllowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowClientMfaCaching"></a>

```typescript
public resetAllowClientMfaCaching(): void
```

##### `resetAllowIdToken` <a name="resetAllowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowIdToken"></a>

```typescript
public resetAllowIdToken(): void
```

##### `resetAutocommit` <a name="resetAutocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAutocommit"></a>

```typescript
public resetAutocommit(): void
```

##### `resetBaseLocationPrefix` <a name="resetBaseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBaseLocationPrefix"></a>

```typescript
public resetBaseLocationPrefix(): void
```

##### `resetBinaryInputFormat` <a name="resetBinaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryInputFormat"></a>

```typescript
public resetBinaryInputFormat(): void
```

##### `resetBinaryOutputFormat` <a name="resetBinaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryOutputFormat"></a>

```typescript
public resetBinaryOutputFormat(): void
```

##### `resetCatalog` <a name="resetCatalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalog"></a>

```typescript
public resetCatalog(): void
```

##### `resetCatalogSync` <a name="resetCatalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalogSync"></a>

```typescript
public resetCatalogSync(): void
```

##### `resetClientEnableLogInfoStatementParameters` <a name="resetClientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEnableLogInfoStatementParameters"></a>

```typescript
public resetClientEnableLogInfoStatementParameters(): void
```

##### `resetClientEncryptionKeySize` <a name="resetClientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEncryptionKeySize"></a>

```typescript
public resetClientEncryptionKeySize(): void
```

##### `resetClientMemoryLimit` <a name="resetClientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMemoryLimit"></a>

```typescript
public resetClientMemoryLimit(): void
```

##### `resetClientMetadataRequestUseConnectionCtx` <a name="resetClientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataRequestUseConnectionCtx"></a>

```typescript
public resetClientMetadataRequestUseConnectionCtx(): void
```

##### `resetClientMetadataUseSessionDatabase` <a name="resetClientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataUseSessionDatabase"></a>

```typescript
public resetClientMetadataUseSessionDatabase(): void
```

##### `resetClientPrefetchThreads` <a name="resetClientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientPrefetchThreads"></a>

```typescript
public resetClientPrefetchThreads(): void
```

##### `resetClientResultChunkSize` <a name="resetClientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultChunkSize"></a>

```typescript
public resetClientResultChunkSize(): void
```

##### `resetClientResultColumnCaseInsensitive` <a name="resetClientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultColumnCaseInsensitive"></a>

```typescript
public resetClientResultColumnCaseInsensitive(): void
```

##### `resetClientSessionKeepAlive` <a name="resetClientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAlive"></a>

```typescript
public resetClientSessionKeepAlive(): void
```

##### `resetClientSessionKeepAliveHeartbeatFrequency` <a name="resetClientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAliveHeartbeatFrequency"></a>

```typescript
public resetClientSessionKeepAliveHeartbeatFrequency(): void
```

##### `resetClientTimestampTypeMapping` <a name="resetClientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientTimestampTypeMapping"></a>

```typescript
public resetClientTimestampTypeMapping(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCortexEnabledCrossRegion` <a name="resetCortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexEnabledCrossRegion"></a>

```typescript
public resetCortexEnabledCrossRegion(): void
```

##### `resetCortexModelsAllowlist` <a name="resetCortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexModelsAllowlist"></a>

```typescript
public resetCortexModelsAllowlist(): void
```

##### `resetCsvTimestampFormat` <a name="resetCsvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCsvTimestampFormat"></a>

```typescript
public resetCsvTimestampFormat(): void
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDataRetentionTimeInDays"></a>

```typescript
public resetDataRetentionTimeInDays(): void
```

##### `resetDateInputFormat` <a name="resetDateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateInputFormat"></a>

```typescript
public resetDateInputFormat(): void
```

##### `resetDateOutputFormat` <a name="resetDateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateOutputFormat"></a>

```typescript
public resetDateOutputFormat(): void
```

##### `resetDefaultDdlCollation` <a name="resetDefaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultDdlCollation"></a>

```typescript
public resetDefaultDdlCollation(): void
```

##### `resetDefaultNotebookComputePoolCpu` <a name="resetDefaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolCpu"></a>

```typescript
public resetDefaultNotebookComputePoolCpu(): void
```

##### `resetDefaultNotebookComputePoolGpu` <a name="resetDefaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolGpu"></a>

```typescript
public resetDefaultNotebookComputePoolGpu(): void
```

##### `resetDefaultNullOrdering` <a name="resetDefaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNullOrdering"></a>

```typescript
public resetDefaultNullOrdering(): void
```

##### `resetDefaultStreamlitNotebookWarehouse` <a name="resetDefaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultStreamlitNotebookWarehouse"></a>

```typescript
public resetDefaultStreamlitNotebookWarehouse(): void
```

##### `resetDisableUiDownloadButton` <a name="resetDisableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUiDownloadButton"></a>

```typescript
public resetDisableUiDownloadButton(): void
```

##### `resetDisableUserPrivilegeGrants` <a name="resetDisableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUserPrivilegeGrants"></a>

```typescript
public resetDisableUserPrivilegeGrants(): void
```

##### `resetEnableAutomaticSensitiveDataClassificationLog` <a name="resetEnableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableAutomaticSensitiveDataClassificationLog"></a>

```typescript
public resetEnableAutomaticSensitiveDataClassificationLog(): void
```

##### `resetEnableEgressCostOptimizer` <a name="resetEnableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableEgressCostOptimizer"></a>

```typescript
public resetEnableEgressCostOptimizer(): void
```

##### `resetEnableIdentifierFirstLogin` <a name="resetEnableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableIdentifierFirstLogin"></a>

```typescript
public resetEnableIdentifierFirstLogin(): void
```

##### `resetEnableInternalStagesPrivatelink` <a name="resetEnableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableInternalStagesPrivatelink"></a>

```typescript
public resetEnableInternalStagesPrivatelink(): void
```

##### `resetEnableTriSecretAndRekeyOptOutForImageRepository` <a name="resetEnableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository"></a>

```typescript
public resetEnableTriSecretAndRekeyOptOutForImageRepository(): void
```

##### `resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage` <a name="resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```typescript
public resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage(): void
```

##### `resetEnableUnhandledExceptionsReporting` <a name="resetEnableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnhandledExceptionsReporting"></a>

```typescript
public resetEnableUnhandledExceptionsReporting(): void
```

##### `resetEnableUnloadPhysicalTypeOptimization` <a name="resetEnableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnloadPhysicalTypeOptimization"></a>

```typescript
public resetEnableUnloadPhysicalTypeOptimization(): void
```

##### `resetEnableUnredactedQuerySyntaxError` <a name="resetEnableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedQuerySyntaxError"></a>

```typescript
public resetEnableUnredactedQuerySyntaxError(): void
```

##### `resetEnableUnredactedSecureObjectError` <a name="resetEnableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedSecureObjectError"></a>

```typescript
public resetEnableUnredactedSecureObjectError(): void
```

##### `resetEnforceNetworkRulesForInternalStages` <a name="resetEnforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnforceNetworkRulesForInternalStages"></a>

```typescript
public resetEnforceNetworkRulesForInternalStages(): void
```

##### `resetErrorOnNondeterministicMerge` <a name="resetErrorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicMerge"></a>

```typescript
public resetErrorOnNondeterministicMerge(): void
```

##### `resetErrorOnNondeterministicUpdate` <a name="resetErrorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicUpdate"></a>

```typescript
public resetErrorOnNondeterministicUpdate(): void
```

##### `resetEventTable` <a name="resetEventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEventTable"></a>

```typescript
public resetEventTable(): void
```

##### `resetExternalOauthAddPrivilegedRolesToBlockedList` <a name="resetExternalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalOauthAddPrivilegedRolesToBlockedList"></a>

```typescript
public resetExternalOauthAddPrivilegedRolesToBlockedList(): void
```

##### `resetExternalVolume` <a name="resetExternalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalVolume"></a>

```typescript
public resetExternalVolume(): void
```

##### `resetGeographyOutputFormat` <a name="resetGeographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeographyOutputFormat"></a>

```typescript
public resetGeographyOutputFormat(): void
```

##### `resetGeometryOutputFormat` <a name="resetGeometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeometryOutputFormat"></a>

```typescript
public resetGeometryOutputFormat(): void
```

##### `resetHybridTableLockTimeout` <a name="resetHybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetHybridTableLockTimeout"></a>

```typescript
public resetHybridTableLockTimeout(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialReplicationSizeLimitInTb` <a name="resetInitialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetInitialReplicationSizeLimitInTb"></a>

```typescript
public resetInitialReplicationSizeLimitInTb(): void
```

##### `resetJdbcTreatDecimalAsInt` <a name="resetJdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatDecimalAsInt"></a>

```typescript
public resetJdbcTreatDecimalAsInt(): void
```

##### `resetJdbcTreatTimestampNtzAsUtc` <a name="resetJdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatTimestampNtzAsUtc"></a>

```typescript
public resetJdbcTreatTimestampNtzAsUtc(): void
```

##### `resetJdbcUseSessionTimezone` <a name="resetJdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcUseSessionTimezone"></a>

```typescript
public resetJdbcUseSessionTimezone(): void
```

##### `resetJsonIndent` <a name="resetJsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsonIndent"></a>

```typescript
public resetJsonIndent(): void
```

##### `resetJsTreatIntegerAsBigint` <a name="resetJsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsTreatIntegerAsBigint"></a>

```typescript
public resetJsTreatIntegerAsBigint(): void
```

##### `resetListingAutoFulfillmentReplicationRefreshSchedule` <a name="resetListingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetListingAutoFulfillmentReplicationRefreshSchedule"></a>

```typescript
public resetListingAutoFulfillmentReplicationRefreshSchedule(): void
```

##### `resetLockTimeout` <a name="resetLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLockTimeout"></a>

```typescript
public resetLockTimeout(): void
```

##### `resetLogLevel` <a name="resetLogLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLogLevel"></a>

```typescript
public resetLogLevel(): void
```

##### `resetMaxConcurrencyLevel` <a name="resetMaxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxConcurrencyLevel"></a>

```typescript
public resetMaxConcurrencyLevel(): void
```

##### `resetMaxDataExtensionTimeInDays` <a name="resetMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxDataExtensionTimeInDays"></a>

```typescript
public resetMaxDataExtensionTimeInDays(): void
```

##### `resetMetricLevel` <a name="resetMetricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMetricLevel"></a>

```typescript
public resetMetricLevel(): void
```

##### `resetMinDataRetentionTimeInDays` <a name="resetMinDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMinDataRetentionTimeInDays"></a>

```typescript
public resetMinDataRetentionTimeInDays(): void
```

##### `resetMultiStatementCount` <a name="resetMultiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMultiStatementCount"></a>

```typescript
public resetMultiStatementCount(): void
```

##### `resetNetworkPolicy` <a name="resetNetworkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNetworkPolicy"></a>

```typescript
public resetNetworkPolicy(): void
```

##### `resetNoorderSequenceAsDefault` <a name="resetNoorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNoorderSequenceAsDefault"></a>

```typescript
public resetNoorderSequenceAsDefault(): void
```

##### `resetOauthAddPrivilegedRolesToBlockedList` <a name="resetOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOauthAddPrivilegedRolesToBlockedList"></a>

```typescript
public resetOauthAddPrivilegedRolesToBlockedList(): void
```

##### `resetOdbcTreatDecimalAsInt` <a name="resetOdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOdbcTreatDecimalAsInt"></a>

```typescript
public resetOdbcTreatDecimalAsInt(): void
```

##### `resetPasswordPolicy` <a name="resetPasswordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPasswordPolicy"></a>

```typescript
public resetPasswordPolicy(): void
```

##### `resetPeriodicDataRekeying` <a name="resetPeriodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPeriodicDataRekeying"></a>

```typescript
public resetPeriodicDataRekeying(): void
```

##### `resetPipeExecutionPaused` <a name="resetPipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPipeExecutionPaused"></a>

```typescript
public resetPipeExecutionPaused(): void
```

##### `resetPreventUnloadToInlineUrl` <a name="resetPreventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInlineUrl"></a>

```typescript
public resetPreventUnloadToInlineUrl(): void
```

##### `resetPreventUnloadToInternalStages` <a name="resetPreventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInternalStages"></a>

```typescript
public resetPreventUnloadToInternalStages(): void
```

##### `resetPythonProfilerModules` <a name="resetPythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerModules"></a>

```typescript
public resetPythonProfilerModules(): void
```

##### `resetPythonProfilerTargetStage` <a name="resetPythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerTargetStage"></a>

```typescript
public resetPythonProfilerTargetStage(): void
```

##### `resetQueryTag` <a name="resetQueryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQueryTag"></a>

```typescript
public resetQueryTag(): void
```

##### `resetQuotedIdentifiersIgnoreCase` <a name="resetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQuotedIdentifiersIgnoreCase"></a>

```typescript
public resetQuotedIdentifiersIgnoreCase(): void
```

##### `resetReplaceInvalidCharacters` <a name="resetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetReplaceInvalidCharacters"></a>

```typescript
public resetReplaceInvalidCharacters(): void
```

##### `resetRequireStorageIntegrationForStageCreation` <a name="resetRequireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageCreation"></a>

```typescript
public resetRequireStorageIntegrationForStageCreation(): void
```

##### `resetRequireStorageIntegrationForStageOperation` <a name="resetRequireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageOperation"></a>

```typescript
public resetRequireStorageIntegrationForStageOperation(): void
```

##### `resetResourceMonitor` <a name="resetResourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetResourceMonitor"></a>

```typescript
public resetResourceMonitor(): void
```

##### `resetRowsPerResultset` <a name="resetRowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRowsPerResultset"></a>

```typescript
public resetRowsPerResultset(): void
```

##### `resetS3StageVpceDnsName` <a name="resetS3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetS3StageVpceDnsName"></a>

```typescript
public resetS3StageVpceDnsName(): void
```

##### `resetSamlIdentityProvider` <a name="resetSamlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSamlIdentityProvider"></a>

```typescript
public resetSamlIdentityProvider(): void
```

##### `resetSearchPath` <a name="resetSearchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSearchPath"></a>

```typescript
public resetSearchPath(): void
```

##### `resetServerlessTaskMaxStatementSize` <a name="resetServerlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMaxStatementSize"></a>

```typescript
public resetServerlessTaskMaxStatementSize(): void
```

##### `resetServerlessTaskMinStatementSize` <a name="resetServerlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMinStatementSize"></a>

```typescript
public resetServerlessTaskMinStatementSize(): void
```

##### `resetSessionPolicy` <a name="resetSessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSessionPolicy"></a>

```typescript
public resetSessionPolicy(): void
```

##### `resetSimulatedDataSharingConsumer` <a name="resetSimulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSimulatedDataSharingConsumer"></a>

```typescript
public resetSimulatedDataSharingConsumer(): void
```

##### `resetSsoLoginPage` <a name="resetSsoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSsoLoginPage"></a>

```typescript
public resetSsoLoginPage(): void
```

##### `resetStatementQueuedTimeoutInSeconds` <a name="resetStatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementQueuedTimeoutInSeconds"></a>

```typescript
public resetStatementQueuedTimeoutInSeconds(): void
```

##### `resetStatementTimeoutInSeconds` <a name="resetStatementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementTimeoutInSeconds"></a>

```typescript
public resetStatementTimeoutInSeconds(): void
```

##### `resetStorageSerializationPolicy` <a name="resetStorageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStorageSerializationPolicy"></a>

```typescript
public resetStorageSerializationPolicy(): void
```

##### `resetStrictJsonOutput` <a name="resetStrictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStrictJsonOutput"></a>

```typescript
public resetStrictJsonOutput(): void
```

##### `resetSuspendTaskAfterNumFailures` <a name="resetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSuspendTaskAfterNumFailures"></a>

```typescript
public resetSuspendTaskAfterNumFailures(): void
```

##### `resetTaskAutoRetryAttempts` <a name="resetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTaskAutoRetryAttempts"></a>

```typescript
public resetTaskAutoRetryAttempts(): void
```

##### `resetTimeInputFormat` <a name="resetTimeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeInputFormat"></a>

```typescript
public resetTimeInputFormat(): void
```

##### `resetTimeOutputFormat` <a name="resetTimeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeOutputFormat"></a>

```typescript
public resetTimeOutputFormat(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimestampDayIsAlways24H` <a name="resetTimestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampDayIsAlways24H"></a>

```typescript
public resetTimestampDayIsAlways24H(): void
```

##### `resetTimestampInputFormat` <a name="resetTimestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampInputFormat"></a>

```typescript
public resetTimestampInputFormat(): void
```

##### `resetTimestampLtzOutputFormat` <a name="resetTimestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampLtzOutputFormat"></a>

```typescript
public resetTimestampLtzOutputFormat(): void
```

##### `resetTimestampNtzOutputFormat` <a name="resetTimestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampNtzOutputFormat"></a>

```typescript
public resetTimestampNtzOutputFormat(): void
```

##### `resetTimestampOutputFormat` <a name="resetTimestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampOutputFormat"></a>

```typescript
public resetTimestampOutputFormat(): void
```

##### `resetTimestampTypeMapping` <a name="resetTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTypeMapping"></a>

```typescript
public resetTimestampTypeMapping(): void
```

##### `resetTimestampTzOutputFormat` <a name="resetTimestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTzOutputFormat"></a>

```typescript
public resetTimestampTzOutputFormat(): void
```

##### `resetTimezone` <a name="resetTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimezone"></a>

```typescript
public resetTimezone(): void
```

##### `resetTraceLevel` <a name="resetTraceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTraceLevel"></a>

```typescript
public resetTraceLevel(): void
```

##### `resetTransactionAbortOnError` <a name="resetTransactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionAbortOnError"></a>

```typescript
public resetTransactionAbortOnError(): void
```

##### `resetTransactionDefaultIsolationLevel` <a name="resetTransactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionDefaultIsolationLevel"></a>

```typescript
public resetTransactionDefaultIsolationLevel(): void
```

##### `resetTwoDigitCenturyStart` <a name="resetTwoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTwoDigitCenturyStart"></a>

```typescript
public resetTwoDigitCenturyStart(): void
```

##### `resetUnsupportedDdlAction` <a name="resetUnsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUnsupportedDdlAction"></a>

```typescript
public resetUnsupportedDdlAction(): void
```

##### `resetUseCachedResult` <a name="resetUseCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUseCachedResult"></a>

```typescript
public resetUseCachedResult(): void
```

##### `resetUserTaskManagedInitialWarehouseSize` <a name="resetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskManagedInitialWarehouseSize"></a>

```typescript
public resetUserTaskManagedInitialWarehouseSize(): void
```

##### `resetUserTaskMinimumTriggerIntervalInSeconds` <a name="resetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```typescript
public resetUserTaskMinimumTriggerIntervalInSeconds(): void
```

##### `resetUserTaskTimeoutMs` <a name="resetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskTimeoutMs"></a>

```typescript
public resetUserTaskTimeoutMs(): void
```

##### `resetWeekOfYearPolicy` <a name="resetWeekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekOfYearPolicy"></a>

```typescript
public resetWeekOfYearPolicy(): void
```

##### `resetWeekStart` <a name="resetWeekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekStart"></a>

```typescript
public resetWeekStart(): void
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

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

currentOrganizationAccount.CurrentOrganizationAccount.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformElement"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

currentOrganizationAccount.CurrentOrganizationAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformResource"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

currentOrganizationAccount.CurrentOrganizationAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a CurrentOrganizationAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CurrentOrganizationAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CurrentOrganizationAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the CurrentOrganizationAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList">CurrentOrganizationAccountShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference">CurrentOrganizationAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQueryInput">abortDetachedQueryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfilerInput">activePythonProfilerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCachingInput">allowClientMfaCachingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdTokenInput">allowIdTokenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommitInput">autocommitInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefixInput">baseLocationPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormatInput">binaryInputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormatInput">binaryOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogInput">catalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSyncInput">catalogSyncInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParametersInput">clientEnableLogInfoStatementParametersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySizeInput">clientEncryptionKeySizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimitInput">clientMemoryLimitInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtxInput">clientMetadataRequestUseConnectionCtxInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabaseInput">clientMetadataUseSessionDatabaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreadsInput">clientPrefetchThreadsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSizeInput">clientResultChunkSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitiveInput">clientResultColumnCaseInsensitiveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput">clientSessionKeepAliveHeartbeatFrequencyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveInput">clientSessionKeepAliveInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMappingInput">clientTimestampTypeMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegionInput">cortexEnabledCrossRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlistInput">cortexModelsAllowlistInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormatInput">csvTimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormatInput">dateInputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormatInput">dateOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollationInput">defaultDdlCollationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpuInput">defaultNotebookComputePoolCpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpuInput">defaultNotebookComputePoolGpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrderingInput">defaultNullOrderingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouseInput">defaultStreamlitNotebookWarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButtonInput">disableUiDownloadButtonInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrantsInput">disableUserPrivilegeGrantsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLogInput">enableAutomaticSensitiveDataClassificationLogInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizerInput">enableEgressCostOptimizerInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLoginInput">enableIdentifierFirstLoginInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelinkInput">enableInternalStagesPrivatelinkInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput">enableTriSecretAndRekeyOptOutForImageRepositoryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput">enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReportingInput">enableUnhandledExceptionsReportingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimizationInput">enableUnloadPhysicalTypeOptimizationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxErrorInput">enableUnredactedQuerySyntaxErrorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectErrorInput">enableUnredactedSecureObjectErrorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStagesInput">enforceNetworkRulesForInternalStagesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMergeInput">errorOnNondeterministicMergeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdateInput">errorOnNondeterministicUpdateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTableInput">eventTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput">externalOauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolumeInput">externalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormatInput">geographyOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormatInput">geometryOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeoutInput">hybridTableLockTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTbInput">initialReplicationSizeLimitInTbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsIntInput">jdbcTreatDecimalAsIntInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtcInput">jdbcTreatTimestampNtzAsUtcInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezoneInput">jdbcUseSessionTimezoneInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndentInput">jsonIndentInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigintInput">jsTreatIntegerAsBigintInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput">listingAutoFulfillmentReplicationRefreshScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeoutInput">lockTimeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevelInput">logLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevelInput">maxConcurrencyLevelInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDaysInput">maxDataExtensionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevelInput">metricLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDaysInput">minDataRetentionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCountInput">multiStatementCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicyInput">networkPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefaultInput">noorderSequenceAsDefaultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedListInput">oauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsIntInput">odbcTreatDecimalAsIntInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicyInput">passwordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeyingInput">periodicDataRekeyingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPausedInput">pipeExecutionPausedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrlInput">preventUnloadToInlineUrlInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStagesInput">preventUnloadToInternalStagesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModulesInput">pythonProfilerModulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStageInput">pythonProfilerTargetStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTagInput">queryTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCaseInput">quotedIdentifiersIgnoreCaseInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharactersInput">replaceInvalidCharactersInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreationInput">requireStorageIntegrationForStageCreationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperationInput">requireStorageIntegrationForStageOperationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitorInput">resourceMonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultsetInput">rowsPerResultsetInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsNameInput">s3StageVpceDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProviderInput">samlIdentityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPathInput">searchPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSizeInput">serverlessTaskMaxStatementSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSizeInput">serverlessTaskMinStatementSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicyInput">sessionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumerInput">simulatedDataSharingConsumerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPageInput">ssoLoginPageInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSecondsInput">statementQueuedTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSecondsInput">statementTimeoutInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicyInput">storageSerializationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutputInput">strictJsonOutputInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailuresInput">suspendTaskAfterNumFailuresInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttemptsInput">taskAutoRetryAttemptsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormatInput">timeInputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormatInput">timeOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24HInput">timestampDayIsAlways24HInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormatInput">timestampInputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormatInput">timestampLtzOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormatInput">timestampNtzOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormatInput">timestampOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMappingInput">timestampTypeMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormatInput">timestampTzOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezoneInput">timezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevelInput">traceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnErrorInput">transactionAbortOnErrorInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevelInput">transactionDefaultIsolationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStartInput">twoDigitCenturyStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlActionInput">unsupportedDdlActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResultInput">useCachedResultInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSizeInput">userTaskManagedInitialWarehouseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSecondsInput">userTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMsInput">userTaskTimeoutMsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicyInput">weekOfYearPolicyInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStartInput">weekStartInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQuery">abortDetachedQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfiler">activePythonProfiler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCaching">allowClientMfaCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdToken">allowIdToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommit">autocommit</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefix">baseLocationPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormat">binaryInputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormat">binaryOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalog">catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSync">catalogSync</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParameters">clientEnableLogInfoStatementParameters</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySize">clientEncryptionKeySize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimit">clientMemoryLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtx">clientMetadataRequestUseConnectionCtx</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabase">clientMetadataUseSessionDatabase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreads">clientPrefetchThreads</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSize">clientResultChunkSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitive">clientResultColumnCaseInsensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAlive">clientSessionKeepAlive</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequency">clientSessionKeepAliveHeartbeatFrequency</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMapping">clientTimestampTypeMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegion">cortexEnabledCrossRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlist">cortexModelsAllowlist</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormat">csvTimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormat">dateInputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormat">dateOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpu">defaultNotebookComputePoolCpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpu">defaultNotebookComputePoolGpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrdering">defaultNullOrdering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouse">defaultStreamlitNotebookWarehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButton">disableUiDownloadButton</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrants">disableUserPrivilegeGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLog">enableAutomaticSensitiveDataClassificationLog</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizer">enableEgressCostOptimizer</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLogin">enableIdentifierFirstLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelink">enableInternalStagesPrivatelink</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepository">enableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReporting">enableUnhandledExceptionsReporting</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimization">enableUnloadPhysicalTypeOptimization</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxError">enableUnredactedQuerySyntaxError</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectError">enableUnredactedSecureObjectError</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStages">enforceNetworkRulesForInternalStages</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMerge">errorOnNondeterministicMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdate">errorOnNondeterministicUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTable">eventTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolume">externalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormat">geographyOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormat">geometryOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeout">hybridTableLockTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTb">initialReplicationSizeLimitInTb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsInt">jdbcTreatDecimalAsInt</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtc">jdbcTreatTimestampNtzAsUtc</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezone">jdbcUseSessionTimezone</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndent">jsonIndent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigint">jsTreatIntegerAsBigint</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshSchedule">listingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeout">lockTimeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevel">logLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevel">metricLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDays">minDataRetentionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCount">multiStatementCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicy">networkPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefault">noorderSequenceAsDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedList">oauthAddPrivilegedRolesToBlockedList</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsInt">odbcTreatDecimalAsInt</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeying">periodicDataRekeying</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPaused">pipeExecutionPaused</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrl">preventUnloadToInlineUrl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStages">preventUnloadToInternalStages</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModules">pythonProfilerModules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStage">pythonProfilerTargetStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTag">queryTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreation">requireStorageIntegrationForStageCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperation">requireStorageIntegrationForStageOperation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitor">resourceMonitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultset">rowsPerResultset</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsName">s3StageVpceDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProvider">samlIdentityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPath">searchPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSize">serverlessTaskMaxStatementSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSize">serverlessTaskMinStatementSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicy">sessionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumer">simulatedDataSharingConsumer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPage">ssoLoginPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutput">strictJsonOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormat">timeInputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormat">timeOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24H">timestampDayIsAlways24H</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormat">timestampInputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormat">timestampLtzOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormat">timestampNtzOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormat">timestampOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMapping">timestampTypeMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormat">timestampTzOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezone">timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevel">traceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnError">transactionAbortOnError</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevel">transactionDefaultIsolationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStart">twoDigitCenturyStart</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlAction">unsupportedDdlAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResult">useCachedResult</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicy">weekOfYearPolicy</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStart">weekStart</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.showOutput"></a>

```typescript
public readonly showOutput: CurrentOrganizationAccountShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList">CurrentOrganizationAccountShowOutputList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeouts"></a>

```typescript
public readonly timeouts: CurrentOrganizationAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference">CurrentOrganizationAccountTimeoutsOutputReference</a>

---

##### `abortDetachedQueryInput`<sup>Optional</sup> <a name="abortDetachedQueryInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQueryInput"></a>

```typescript
public readonly abortDetachedQueryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `activePythonProfilerInput`<sup>Optional</sup> <a name="activePythonProfilerInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfilerInput"></a>

```typescript
public readonly activePythonProfilerInput: string;
```

- *Type:* string

---

##### `allowClientMfaCachingInput`<sup>Optional</sup> <a name="allowClientMfaCachingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCachingInput"></a>

```typescript
public readonly allowClientMfaCachingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowIdTokenInput`<sup>Optional</sup> <a name="allowIdTokenInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdTokenInput"></a>

```typescript
public readonly allowIdTokenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autocommitInput`<sup>Optional</sup> <a name="autocommitInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommitInput"></a>

```typescript
public readonly autocommitInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `baseLocationPrefixInput`<sup>Optional</sup> <a name="baseLocationPrefixInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefixInput"></a>

```typescript
public readonly baseLocationPrefixInput: string;
```

- *Type:* string

---

##### `binaryInputFormatInput`<sup>Optional</sup> <a name="binaryInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormatInput"></a>

```typescript
public readonly binaryInputFormatInput: string;
```

- *Type:* string

---

##### `binaryOutputFormatInput`<sup>Optional</sup> <a name="binaryOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormatInput"></a>

```typescript
public readonly binaryOutputFormatInput: string;
```

- *Type:* string

---

##### `catalogInput`<sup>Optional</sup> <a name="catalogInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogInput"></a>

```typescript
public readonly catalogInput: string;
```

- *Type:* string

---

##### `catalogSyncInput`<sup>Optional</sup> <a name="catalogSyncInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSyncInput"></a>

```typescript
public readonly catalogSyncInput: string;
```

- *Type:* string

---

##### `clientEnableLogInfoStatementParametersInput`<sup>Optional</sup> <a name="clientEnableLogInfoStatementParametersInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParametersInput"></a>

```typescript
public readonly clientEnableLogInfoStatementParametersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientEncryptionKeySizeInput`<sup>Optional</sup> <a name="clientEncryptionKeySizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySizeInput"></a>

```typescript
public readonly clientEncryptionKeySizeInput: number;
```

- *Type:* number

---

##### `clientMemoryLimitInput`<sup>Optional</sup> <a name="clientMemoryLimitInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimitInput"></a>

```typescript
public readonly clientMemoryLimitInput: number;
```

- *Type:* number

---

##### `clientMetadataRequestUseConnectionCtxInput`<sup>Optional</sup> <a name="clientMetadataRequestUseConnectionCtxInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtxInput"></a>

```typescript
public readonly clientMetadataRequestUseConnectionCtxInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientMetadataUseSessionDatabaseInput`<sup>Optional</sup> <a name="clientMetadataUseSessionDatabaseInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabaseInput"></a>

```typescript
public readonly clientMetadataUseSessionDatabaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientPrefetchThreadsInput`<sup>Optional</sup> <a name="clientPrefetchThreadsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreadsInput"></a>

```typescript
public readonly clientPrefetchThreadsInput: number;
```

- *Type:* number

---

##### `clientResultChunkSizeInput`<sup>Optional</sup> <a name="clientResultChunkSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSizeInput"></a>

```typescript
public readonly clientResultChunkSizeInput: number;
```

- *Type:* number

---

##### `clientResultColumnCaseInsensitiveInput`<sup>Optional</sup> <a name="clientResultColumnCaseInsensitiveInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitiveInput"></a>

```typescript
public readonly clientResultColumnCaseInsensitiveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientSessionKeepAliveHeartbeatFrequencyInput`<sup>Optional</sup> <a name="clientSessionKeepAliveHeartbeatFrequencyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput"></a>

```typescript
public readonly clientSessionKeepAliveHeartbeatFrequencyInput: number;
```

- *Type:* number

---

##### `clientSessionKeepAliveInput`<sup>Optional</sup> <a name="clientSessionKeepAliveInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveInput"></a>

```typescript
public readonly clientSessionKeepAliveInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientTimestampTypeMappingInput`<sup>Optional</sup> <a name="clientTimestampTypeMappingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMappingInput"></a>

```typescript
public readonly clientTimestampTypeMappingInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `cortexEnabledCrossRegionInput`<sup>Optional</sup> <a name="cortexEnabledCrossRegionInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegionInput"></a>

```typescript
public readonly cortexEnabledCrossRegionInput: string;
```

- *Type:* string

---

##### `cortexModelsAllowlistInput`<sup>Optional</sup> <a name="cortexModelsAllowlistInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlistInput"></a>

```typescript
public readonly cortexModelsAllowlistInput: string;
```

- *Type:* string

---

##### `csvTimestampFormatInput`<sup>Optional</sup> <a name="csvTimestampFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormatInput"></a>

```typescript
public readonly csvTimestampFormatInput: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDaysInput"></a>

```typescript
public readonly dataRetentionTimeInDaysInput: number;
```

- *Type:* number

---

##### `dateInputFormatInput`<sup>Optional</sup> <a name="dateInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormatInput"></a>

```typescript
public readonly dateInputFormatInput: string;
```

- *Type:* string

---

##### `dateOutputFormatInput`<sup>Optional</sup> <a name="dateOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormatInput"></a>

```typescript
public readonly dateOutputFormatInput: string;
```

- *Type:* string

---

##### `defaultDdlCollationInput`<sup>Optional</sup> <a name="defaultDdlCollationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollationInput"></a>

```typescript
public readonly defaultDdlCollationInput: string;
```

- *Type:* string

---

##### `defaultNotebookComputePoolCpuInput`<sup>Optional</sup> <a name="defaultNotebookComputePoolCpuInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpuInput"></a>

```typescript
public readonly defaultNotebookComputePoolCpuInput: string;
```

- *Type:* string

---

##### `defaultNotebookComputePoolGpuInput`<sup>Optional</sup> <a name="defaultNotebookComputePoolGpuInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpuInput"></a>

```typescript
public readonly defaultNotebookComputePoolGpuInput: string;
```

- *Type:* string

---

##### `defaultNullOrderingInput`<sup>Optional</sup> <a name="defaultNullOrderingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrderingInput"></a>

```typescript
public readonly defaultNullOrderingInput: string;
```

- *Type:* string

---

##### `defaultStreamlitNotebookWarehouseInput`<sup>Optional</sup> <a name="defaultStreamlitNotebookWarehouseInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouseInput"></a>

```typescript
public readonly defaultStreamlitNotebookWarehouseInput: string;
```

- *Type:* string

---

##### `disableUiDownloadButtonInput`<sup>Optional</sup> <a name="disableUiDownloadButtonInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButtonInput"></a>

```typescript
public readonly disableUiDownloadButtonInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableUserPrivilegeGrantsInput`<sup>Optional</sup> <a name="disableUserPrivilegeGrantsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrantsInput"></a>

```typescript
public readonly disableUserPrivilegeGrantsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableAutomaticSensitiveDataClassificationLogInput`<sup>Optional</sup> <a name="enableAutomaticSensitiveDataClassificationLogInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLogInput"></a>

```typescript
public readonly enableAutomaticSensitiveDataClassificationLogInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableEgressCostOptimizerInput`<sup>Optional</sup> <a name="enableEgressCostOptimizerInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizerInput"></a>

```typescript
public readonly enableEgressCostOptimizerInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIdentifierFirstLoginInput`<sup>Optional</sup> <a name="enableIdentifierFirstLoginInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLoginInput"></a>

```typescript
public readonly enableIdentifierFirstLoginInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableInternalStagesPrivatelinkInput`<sup>Optional</sup> <a name="enableInternalStagesPrivatelinkInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelinkInput"></a>

```typescript
public readonly enableInternalStagesPrivatelinkInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForImageRepositoryInput`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepositoryInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput"></a>

```typescript
public readonly enableTriSecretAndRekeyOptOutForImageRepositoryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput"></a>

```typescript
public readonly enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUnhandledExceptionsReportingInput`<sup>Optional</sup> <a name="enableUnhandledExceptionsReportingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReportingInput"></a>

```typescript
public readonly enableUnhandledExceptionsReportingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUnloadPhysicalTypeOptimizationInput`<sup>Optional</sup> <a name="enableUnloadPhysicalTypeOptimizationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimizationInput"></a>

```typescript
public readonly enableUnloadPhysicalTypeOptimizationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUnredactedQuerySyntaxErrorInput`<sup>Optional</sup> <a name="enableUnredactedQuerySyntaxErrorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxErrorInput"></a>

```typescript
public readonly enableUnredactedQuerySyntaxErrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUnredactedSecureObjectErrorInput`<sup>Optional</sup> <a name="enableUnredactedSecureObjectErrorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectErrorInput"></a>

```typescript
public readonly enableUnredactedSecureObjectErrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceNetworkRulesForInternalStagesInput`<sup>Optional</sup> <a name="enforceNetworkRulesForInternalStagesInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStagesInput"></a>

```typescript
public readonly enforceNetworkRulesForInternalStagesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `errorOnNondeterministicMergeInput`<sup>Optional</sup> <a name="errorOnNondeterministicMergeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMergeInput"></a>

```typescript
public readonly errorOnNondeterministicMergeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `errorOnNondeterministicUpdateInput`<sup>Optional</sup> <a name="errorOnNondeterministicUpdateInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdateInput"></a>

```typescript
public readonly errorOnNondeterministicUpdateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventTableInput`<sup>Optional</sup> <a name="eventTableInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTableInput"></a>

```typescript
public readonly eventTableInput: string;
```

- *Type:* string

---

##### `externalOauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="externalOauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput"></a>

```typescript
public readonly externalOauthAddPrivilegedRolesToBlockedListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalVolumeInput`<sup>Optional</sup> <a name="externalVolumeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolumeInput"></a>

```typescript
public readonly externalVolumeInput: string;
```

- *Type:* string

---

##### `geographyOutputFormatInput`<sup>Optional</sup> <a name="geographyOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormatInput"></a>

```typescript
public readonly geographyOutputFormatInput: string;
```

- *Type:* string

---

##### `geometryOutputFormatInput`<sup>Optional</sup> <a name="geometryOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormatInput"></a>

```typescript
public readonly geometryOutputFormatInput: string;
```

- *Type:* string

---

##### `hybridTableLockTimeoutInput`<sup>Optional</sup> <a name="hybridTableLockTimeoutInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeoutInput"></a>

```typescript
public readonly hybridTableLockTimeoutInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initialReplicationSizeLimitInTbInput`<sup>Optional</sup> <a name="initialReplicationSizeLimitInTbInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTbInput"></a>

```typescript
public readonly initialReplicationSizeLimitInTbInput: string;
```

- *Type:* string

---

##### `jdbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="jdbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsIntInput"></a>

```typescript
public readonly jdbcTreatDecimalAsIntInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jdbcTreatTimestampNtzAsUtcInput`<sup>Optional</sup> <a name="jdbcTreatTimestampNtzAsUtcInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtcInput"></a>

```typescript
public readonly jdbcTreatTimestampNtzAsUtcInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jdbcUseSessionTimezoneInput`<sup>Optional</sup> <a name="jdbcUseSessionTimezoneInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezoneInput"></a>

```typescript
public readonly jdbcUseSessionTimezoneInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jsonIndentInput`<sup>Optional</sup> <a name="jsonIndentInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndentInput"></a>

```typescript
public readonly jsonIndentInput: number;
```

- *Type:* number

---

##### `jsTreatIntegerAsBigintInput`<sup>Optional</sup> <a name="jsTreatIntegerAsBigintInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigintInput"></a>

```typescript
public readonly jsTreatIntegerAsBigintInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `listingAutoFulfillmentReplicationRefreshScheduleInput`<sup>Optional</sup> <a name="listingAutoFulfillmentReplicationRefreshScheduleInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput"></a>

```typescript
public readonly listingAutoFulfillmentReplicationRefreshScheduleInput: string;
```

- *Type:* string

---

##### `lockTimeoutInput`<sup>Optional</sup> <a name="lockTimeoutInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeoutInput"></a>

```typescript
public readonly lockTimeoutInput: number;
```

- *Type:* number

---

##### `logLevelInput`<sup>Optional</sup> <a name="logLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevelInput"></a>

```typescript
public readonly logLevelInput: string;
```

- *Type:* string

---

##### `maxConcurrencyLevelInput`<sup>Optional</sup> <a name="maxConcurrencyLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevelInput"></a>

```typescript
public readonly maxConcurrencyLevelInput: number;
```

- *Type:* number

---

##### `maxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="maxDataExtensionTimeInDaysInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDaysInput"></a>

```typescript
public readonly maxDataExtensionTimeInDaysInput: number;
```

- *Type:* number

---

##### `metricLevelInput`<sup>Optional</sup> <a name="metricLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevelInput"></a>

```typescript
public readonly metricLevelInput: string;
```

- *Type:* string

---

##### `minDataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="minDataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDaysInput"></a>

```typescript
public readonly minDataRetentionTimeInDaysInput: number;
```

- *Type:* number

---

##### `multiStatementCountInput`<sup>Optional</sup> <a name="multiStatementCountInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCountInput"></a>

```typescript
public readonly multiStatementCountInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `networkPolicyInput`<sup>Optional</sup> <a name="networkPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicyInput"></a>

```typescript
public readonly networkPolicyInput: string;
```

- *Type:* string

---

##### `noorderSequenceAsDefaultInput`<sup>Optional</sup> <a name="noorderSequenceAsDefaultInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefaultInput"></a>

```typescript
public readonly noorderSequenceAsDefaultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="oauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedListInput"></a>

```typescript
public readonly oauthAddPrivilegedRolesToBlockedListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `odbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="odbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsIntInput"></a>

```typescript
public readonly odbcTreatDecimalAsIntInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordPolicyInput`<sup>Optional</sup> <a name="passwordPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicyInput"></a>

```typescript
public readonly passwordPolicyInput: string;
```

- *Type:* string

---

##### `periodicDataRekeyingInput`<sup>Optional</sup> <a name="periodicDataRekeyingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeyingInput"></a>

```typescript
public readonly periodicDataRekeyingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pipeExecutionPausedInput`<sup>Optional</sup> <a name="pipeExecutionPausedInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPausedInput"></a>

```typescript
public readonly pipeExecutionPausedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventUnloadToInlineUrlInput`<sup>Optional</sup> <a name="preventUnloadToInlineUrlInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrlInput"></a>

```typescript
public readonly preventUnloadToInlineUrlInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventUnloadToInternalStagesInput`<sup>Optional</sup> <a name="preventUnloadToInternalStagesInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStagesInput"></a>

```typescript
public readonly preventUnloadToInternalStagesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pythonProfilerModulesInput`<sup>Optional</sup> <a name="pythonProfilerModulesInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModulesInput"></a>

```typescript
public readonly pythonProfilerModulesInput: string;
```

- *Type:* string

---

##### `pythonProfilerTargetStageInput`<sup>Optional</sup> <a name="pythonProfilerTargetStageInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStageInput"></a>

```typescript
public readonly pythonProfilerTargetStageInput: string;
```

- *Type:* string

---

##### `queryTagInput`<sup>Optional</sup> <a name="queryTagInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTagInput"></a>

```typescript
public readonly queryTagInput: string;
```

- *Type:* string

---

##### `quotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCaseInput"></a>

```typescript
public readonly quotedIdentifiersIgnoreCaseInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replaceInvalidCharactersInput`<sup>Optional</sup> <a name="replaceInvalidCharactersInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharactersInput"></a>

```typescript
public readonly replaceInvalidCharactersInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireStorageIntegrationForStageCreationInput`<sup>Optional</sup> <a name="requireStorageIntegrationForStageCreationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreationInput"></a>

```typescript
public readonly requireStorageIntegrationForStageCreationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireStorageIntegrationForStageOperationInput`<sup>Optional</sup> <a name="requireStorageIntegrationForStageOperationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperationInput"></a>

```typescript
public readonly requireStorageIntegrationForStageOperationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceMonitorInput`<sup>Optional</sup> <a name="resourceMonitorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitorInput"></a>

```typescript
public readonly resourceMonitorInput: string;
```

- *Type:* string

---

##### `rowsPerResultsetInput`<sup>Optional</sup> <a name="rowsPerResultsetInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultsetInput"></a>

```typescript
public readonly rowsPerResultsetInput: number;
```

- *Type:* number

---

##### `s3StageVpceDnsNameInput`<sup>Optional</sup> <a name="s3StageVpceDnsNameInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsNameInput"></a>

```typescript
public readonly s3StageVpceDnsNameInput: string;
```

- *Type:* string

---

##### `samlIdentityProviderInput`<sup>Optional</sup> <a name="samlIdentityProviderInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProviderInput"></a>

```typescript
public readonly samlIdentityProviderInput: string;
```

- *Type:* string

---

##### `searchPathInput`<sup>Optional</sup> <a name="searchPathInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPathInput"></a>

```typescript
public readonly searchPathInput: string;
```

- *Type:* string

---

##### `serverlessTaskMaxStatementSizeInput`<sup>Optional</sup> <a name="serverlessTaskMaxStatementSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSizeInput"></a>

```typescript
public readonly serverlessTaskMaxStatementSizeInput: string;
```

- *Type:* string

---

##### `serverlessTaskMinStatementSizeInput`<sup>Optional</sup> <a name="serverlessTaskMinStatementSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSizeInput"></a>

```typescript
public readonly serverlessTaskMinStatementSizeInput: string;
```

- *Type:* string

---

##### `sessionPolicyInput`<sup>Optional</sup> <a name="sessionPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicyInput"></a>

```typescript
public readonly sessionPolicyInput: string;
```

- *Type:* string

---

##### `simulatedDataSharingConsumerInput`<sup>Optional</sup> <a name="simulatedDataSharingConsumerInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumerInput"></a>

```typescript
public readonly simulatedDataSharingConsumerInput: string;
```

- *Type:* string

---

##### `ssoLoginPageInput`<sup>Optional</sup> <a name="ssoLoginPageInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPageInput"></a>

```typescript
public readonly ssoLoginPageInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementQueuedTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSecondsInput"></a>

```typescript
public readonly statementQueuedTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `statementTimeoutInSecondsInput`<sup>Optional</sup> <a name="statementTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSecondsInput"></a>

```typescript
public readonly statementTimeoutInSecondsInput: number;
```

- *Type:* number

---

##### `storageSerializationPolicyInput`<sup>Optional</sup> <a name="storageSerializationPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicyInput"></a>

```typescript
public readonly storageSerializationPolicyInput: string;
```

- *Type:* string

---

##### `strictJsonOutputInput`<sup>Optional</sup> <a name="strictJsonOutputInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutputInput"></a>

```typescript
public readonly strictJsonOutputInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="suspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailuresInput"></a>

```typescript
public readonly suspendTaskAfterNumFailuresInput: number;
```

- *Type:* number

---

##### `taskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="taskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttemptsInput"></a>

```typescript
public readonly taskAutoRetryAttemptsInput: number;
```

- *Type:* number

---

##### `timeInputFormatInput`<sup>Optional</sup> <a name="timeInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormatInput"></a>

```typescript
public readonly timeInputFormatInput: string;
```

- *Type:* string

---

##### `timeOutputFormatInput`<sup>Optional</sup> <a name="timeOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormatInput"></a>

```typescript
public readonly timeOutputFormatInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CurrentOrganizationAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

---

##### `timestampDayIsAlways24HInput`<sup>Optional</sup> <a name="timestampDayIsAlways24HInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24HInput"></a>

```typescript
public readonly timestampDayIsAlways24HInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timestampInputFormatInput`<sup>Optional</sup> <a name="timestampInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormatInput"></a>

```typescript
public readonly timestampInputFormatInput: string;
```

- *Type:* string

---

##### `timestampLtzOutputFormatInput`<sup>Optional</sup> <a name="timestampLtzOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormatInput"></a>

```typescript
public readonly timestampLtzOutputFormatInput: string;
```

- *Type:* string

---

##### `timestampNtzOutputFormatInput`<sup>Optional</sup> <a name="timestampNtzOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormatInput"></a>

```typescript
public readonly timestampNtzOutputFormatInput: string;
```

- *Type:* string

---

##### `timestampOutputFormatInput`<sup>Optional</sup> <a name="timestampOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormatInput"></a>

```typescript
public readonly timestampOutputFormatInput: string;
```

- *Type:* string

---

##### `timestampTypeMappingInput`<sup>Optional</sup> <a name="timestampTypeMappingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMappingInput"></a>

```typescript
public readonly timestampTypeMappingInput: string;
```

- *Type:* string

---

##### `timestampTzOutputFormatInput`<sup>Optional</sup> <a name="timestampTzOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormatInput"></a>

```typescript
public readonly timestampTzOutputFormatInput: string;
```

- *Type:* string

---

##### `timezoneInput`<sup>Optional</sup> <a name="timezoneInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezoneInput"></a>

```typescript
public readonly timezoneInput: string;
```

- *Type:* string

---

##### `traceLevelInput`<sup>Optional</sup> <a name="traceLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevelInput"></a>

```typescript
public readonly traceLevelInput: string;
```

- *Type:* string

---

##### `transactionAbortOnErrorInput`<sup>Optional</sup> <a name="transactionAbortOnErrorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnErrorInput"></a>

```typescript
public readonly transactionAbortOnErrorInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transactionDefaultIsolationLevelInput`<sup>Optional</sup> <a name="transactionDefaultIsolationLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevelInput"></a>

```typescript
public readonly transactionDefaultIsolationLevelInput: string;
```

- *Type:* string

---

##### `twoDigitCenturyStartInput`<sup>Optional</sup> <a name="twoDigitCenturyStartInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStartInput"></a>

```typescript
public readonly twoDigitCenturyStartInput: number;
```

- *Type:* number

---

##### `unsupportedDdlActionInput`<sup>Optional</sup> <a name="unsupportedDdlActionInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlActionInput"></a>

```typescript
public readonly unsupportedDdlActionInput: string;
```

- *Type:* string

---

##### `useCachedResultInput`<sup>Optional</sup> <a name="useCachedResultInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResultInput"></a>

```typescript
public readonly useCachedResultInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSizeInput"></a>

```typescript
public readonly userTaskManagedInitialWarehouseSizeInput: string;
```

- *Type:* string

---

##### `userTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```typescript
public readonly userTaskMinimumTriggerIntervalInSecondsInput: number;
```

- *Type:* number

---

##### `userTaskTimeoutMsInput`<sup>Optional</sup> <a name="userTaskTimeoutMsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMsInput"></a>

```typescript
public readonly userTaskTimeoutMsInput: number;
```

- *Type:* number

---

##### `weekOfYearPolicyInput`<sup>Optional</sup> <a name="weekOfYearPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicyInput"></a>

```typescript
public readonly weekOfYearPolicyInput: number;
```

- *Type:* number

---

##### `weekStartInput`<sup>Optional</sup> <a name="weekStartInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStartInput"></a>

```typescript
public readonly weekStartInput: number;
```

- *Type:* number

---

##### `abortDetachedQuery`<sup>Required</sup> <a name="abortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQuery"></a>

```typescript
public readonly abortDetachedQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `activePythonProfiler`<sup>Required</sup> <a name="activePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfiler"></a>

```typescript
public readonly activePythonProfiler: string;
```

- *Type:* string

---

##### `allowClientMfaCaching`<sup>Required</sup> <a name="allowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCaching"></a>

```typescript
public readonly allowClientMfaCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `allowIdToken`<sup>Required</sup> <a name="allowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdToken"></a>

```typescript
public readonly allowIdToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `autocommit`<sup>Required</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommit"></a>

```typescript
public readonly autocommit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `baseLocationPrefix`<sup>Required</sup> <a name="baseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefix"></a>

```typescript
public readonly baseLocationPrefix: string;
```

- *Type:* string

---

##### `binaryInputFormat`<sup>Required</sup> <a name="binaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormat"></a>

```typescript
public readonly binaryInputFormat: string;
```

- *Type:* string

---

##### `binaryOutputFormat`<sup>Required</sup> <a name="binaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormat"></a>

```typescript
public readonly binaryOutputFormat: string;
```

- *Type:* string

---

##### `catalog`<sup>Required</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

---

##### `catalogSync`<sup>Required</sup> <a name="catalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSync"></a>

```typescript
public readonly catalogSync: string;
```

- *Type:* string

---

##### `clientEnableLogInfoStatementParameters`<sup>Required</sup> <a name="clientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParameters"></a>

```typescript
public readonly clientEnableLogInfoStatementParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientEncryptionKeySize`<sup>Required</sup> <a name="clientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySize"></a>

```typescript
public readonly clientEncryptionKeySize: number;
```

- *Type:* number

---

##### `clientMemoryLimit`<sup>Required</sup> <a name="clientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimit"></a>

```typescript
public readonly clientMemoryLimit: number;
```

- *Type:* number

---

##### `clientMetadataRequestUseConnectionCtx`<sup>Required</sup> <a name="clientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtx"></a>

```typescript
public readonly clientMetadataRequestUseConnectionCtx: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientMetadataUseSessionDatabase`<sup>Required</sup> <a name="clientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabase"></a>

```typescript
public readonly clientMetadataUseSessionDatabase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientPrefetchThreads`<sup>Required</sup> <a name="clientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreads"></a>

```typescript
public readonly clientPrefetchThreads: number;
```

- *Type:* number

---

##### `clientResultChunkSize`<sup>Required</sup> <a name="clientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSize"></a>

```typescript
public readonly clientResultChunkSize: number;
```

- *Type:* number

---

##### `clientResultColumnCaseInsensitive`<sup>Required</sup> <a name="clientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitive"></a>

```typescript
public readonly clientResultColumnCaseInsensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientSessionKeepAlive`<sup>Required</sup> <a name="clientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAlive"></a>

```typescript
public readonly clientSessionKeepAlive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clientSessionKeepAliveHeartbeatFrequency`<sup>Required</sup> <a name="clientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```typescript
public readonly clientSessionKeepAliveHeartbeatFrequency: number;
```

- *Type:* number

---

##### `clientTimestampTypeMapping`<sup>Required</sup> <a name="clientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMapping"></a>

```typescript
public readonly clientTimestampTypeMapping: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `cortexEnabledCrossRegion`<sup>Required</sup> <a name="cortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegion"></a>

```typescript
public readonly cortexEnabledCrossRegion: string;
```

- *Type:* string

---

##### `cortexModelsAllowlist`<sup>Required</sup> <a name="cortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlist"></a>

```typescript
public readonly cortexModelsAllowlist: string;
```

- *Type:* string

---

##### `csvTimestampFormat`<sup>Required</sup> <a name="csvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormat"></a>

```typescript
public readonly csvTimestampFormat: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

---

##### `dateInputFormat`<sup>Required</sup> <a name="dateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormat"></a>

```typescript
public readonly dateInputFormat: string;
```

- *Type:* string

---

##### `dateOutputFormat`<sup>Required</sup> <a name="dateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormat"></a>

```typescript
public readonly dateOutputFormat: string;
```

- *Type:* string

---

##### `defaultDdlCollation`<sup>Required</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollation"></a>

```typescript
public readonly defaultDdlCollation: string;
```

- *Type:* string

---

##### `defaultNotebookComputePoolCpu`<sup>Required</sup> <a name="defaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpu"></a>

```typescript
public readonly defaultNotebookComputePoolCpu: string;
```

- *Type:* string

---

##### `defaultNotebookComputePoolGpu`<sup>Required</sup> <a name="defaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpu"></a>

```typescript
public readonly defaultNotebookComputePoolGpu: string;
```

- *Type:* string

---

##### `defaultNullOrdering`<sup>Required</sup> <a name="defaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrdering"></a>

```typescript
public readonly defaultNullOrdering: string;
```

- *Type:* string

---

##### `defaultStreamlitNotebookWarehouse`<sup>Required</sup> <a name="defaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouse"></a>

```typescript
public readonly defaultStreamlitNotebookWarehouse: string;
```

- *Type:* string

---

##### `disableUiDownloadButton`<sup>Required</sup> <a name="disableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButton"></a>

```typescript
public readonly disableUiDownloadButton: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `disableUserPrivilegeGrants`<sup>Required</sup> <a name="disableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrants"></a>

```typescript
public readonly disableUserPrivilegeGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableAutomaticSensitiveDataClassificationLog`<sup>Required</sup> <a name="enableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLog"></a>

```typescript
public readonly enableAutomaticSensitiveDataClassificationLog: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableEgressCostOptimizer`<sup>Required</sup> <a name="enableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizer"></a>

```typescript
public readonly enableEgressCostOptimizer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableIdentifierFirstLogin`<sup>Required</sup> <a name="enableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLogin"></a>

```typescript
public readonly enableIdentifierFirstLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableInternalStagesPrivatelink`<sup>Required</sup> <a name="enableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelink"></a>

```typescript
public readonly enableInternalStagesPrivatelink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForImageRepository`<sup>Required</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```typescript
public readonly enableTriSecretAndRekeyOptOutForImageRepository: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Required</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```typescript
public readonly enableTriSecretAndRekeyOptOutForSpcsBlockStorage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUnhandledExceptionsReporting`<sup>Required</sup> <a name="enableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReporting"></a>

```typescript
public readonly enableUnhandledExceptionsReporting: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUnloadPhysicalTypeOptimization`<sup>Required</sup> <a name="enableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimization"></a>

```typescript
public readonly enableUnloadPhysicalTypeOptimization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUnredactedQuerySyntaxError`<sup>Required</sup> <a name="enableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxError"></a>

```typescript
public readonly enableUnredactedQuerySyntaxError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableUnredactedSecureObjectError`<sup>Required</sup> <a name="enableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectError"></a>

```typescript
public readonly enableUnredactedSecureObjectError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforceNetworkRulesForInternalStages`<sup>Required</sup> <a name="enforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStages"></a>

```typescript
public readonly enforceNetworkRulesForInternalStages: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `errorOnNondeterministicMerge`<sup>Required</sup> <a name="errorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMerge"></a>

```typescript
public readonly errorOnNondeterministicMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `errorOnNondeterministicUpdate`<sup>Required</sup> <a name="errorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdate"></a>

```typescript
public readonly errorOnNondeterministicUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `eventTable`<sup>Required</sup> <a name="eventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTable"></a>

```typescript
public readonly eventTable: string;
```

- *Type:* string

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```typescript
public readonly externalOauthAddPrivilegedRolesToBlockedList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalVolume`<sup>Required</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

---

##### `geographyOutputFormat`<sup>Required</sup> <a name="geographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormat"></a>

```typescript
public readonly geographyOutputFormat: string;
```

- *Type:* string

---

##### `geometryOutputFormat`<sup>Required</sup> <a name="geometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormat"></a>

```typescript
public readonly geometryOutputFormat: string;
```

- *Type:* string

---

##### `hybridTableLockTimeout`<sup>Required</sup> <a name="hybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeout"></a>

```typescript
public readonly hybridTableLockTimeout: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialReplicationSizeLimitInTb`<sup>Required</sup> <a name="initialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTb"></a>

```typescript
public readonly initialReplicationSizeLimitInTb: string;
```

- *Type:* string

---

##### `jdbcTreatDecimalAsInt`<sup>Required</sup> <a name="jdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsInt"></a>

```typescript
public readonly jdbcTreatDecimalAsInt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jdbcTreatTimestampNtzAsUtc`<sup>Required</sup> <a name="jdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtc"></a>

```typescript
public readonly jdbcTreatTimestampNtzAsUtc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jdbcUseSessionTimezone`<sup>Required</sup> <a name="jdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezone"></a>

```typescript
public readonly jdbcUseSessionTimezone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `jsonIndent`<sup>Required</sup> <a name="jsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndent"></a>

```typescript
public readonly jsonIndent: number;
```

- *Type:* number

---

##### `jsTreatIntegerAsBigint`<sup>Required</sup> <a name="jsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigint"></a>

```typescript
public readonly jsTreatIntegerAsBigint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `listingAutoFulfillmentReplicationRefreshSchedule`<sup>Required</sup> <a name="listingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```typescript
public readonly listingAutoFulfillmentReplicationRefreshSchedule: string;
```

- *Type:* string

---

##### `lockTimeout`<sup>Required</sup> <a name="lockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeout"></a>

```typescript
public readonly lockTimeout: number;
```

- *Type:* number

---

##### `logLevel`<sup>Required</sup> <a name="logLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

---

##### `maxConcurrencyLevel`<sup>Required</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevel"></a>

```typescript
public readonly maxConcurrencyLevel: number;
```

- *Type:* number

---

##### `maxDataExtensionTimeInDays`<sup>Required</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: number;
```

- *Type:* number

---

##### `metricLevel`<sup>Required</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevel"></a>

```typescript
public readonly metricLevel: string;
```

- *Type:* string

---

##### `minDataRetentionTimeInDays`<sup>Required</sup> <a name="minDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDays"></a>

```typescript
public readonly minDataRetentionTimeInDays: number;
```

- *Type:* number

---

##### `multiStatementCount`<sup>Required</sup> <a name="multiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCount"></a>

```typescript
public readonly multiStatementCount: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkPolicy`<sup>Required</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: string;
```

- *Type:* string

---

##### `noorderSequenceAsDefault`<sup>Required</sup> <a name="noorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefault"></a>

```typescript
public readonly noorderSequenceAsDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="oauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedList"></a>

```typescript
public readonly oauthAddPrivilegedRolesToBlockedList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `odbcTreatDecimalAsInt`<sup>Required</sup> <a name="odbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsInt"></a>

```typescript
public readonly odbcTreatDecimalAsInt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `passwordPolicy`<sup>Required</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

---

##### `periodicDataRekeying`<sup>Required</sup> <a name="periodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeying"></a>

```typescript
public readonly periodicDataRekeying: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pipeExecutionPaused`<sup>Required</sup> <a name="pipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPaused"></a>

```typescript
public readonly pipeExecutionPaused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventUnloadToInlineUrl`<sup>Required</sup> <a name="preventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrl"></a>

```typescript
public readonly preventUnloadToInlineUrl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `preventUnloadToInternalStages`<sup>Required</sup> <a name="preventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStages"></a>

```typescript
public readonly preventUnloadToInternalStages: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pythonProfilerModules`<sup>Required</sup> <a name="pythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModules"></a>

```typescript
public readonly pythonProfilerModules: string;
```

- *Type:* string

---

##### `pythonProfilerTargetStage`<sup>Required</sup> <a name="pythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStage"></a>

```typescript
public readonly pythonProfilerTargetStage: string;
```

- *Type:* string

---

##### `queryTag`<sup>Required</sup> <a name="queryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTag"></a>

```typescript
public readonly queryTag: string;
```

- *Type:* string

---

##### `quotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCase"></a>

```typescript
public readonly quotedIdentifiersIgnoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `replaceInvalidCharacters`<sup>Required</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireStorageIntegrationForStageCreation`<sup>Required</sup> <a name="requireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreation"></a>

```typescript
public readonly requireStorageIntegrationForStageCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requireStorageIntegrationForStageOperation`<sup>Required</sup> <a name="requireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperation"></a>

```typescript
public readonly requireStorageIntegrationForStageOperation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `resourceMonitor`<sup>Required</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitor"></a>

```typescript
public readonly resourceMonitor: string;
```

- *Type:* string

---

##### `rowsPerResultset`<sup>Required</sup> <a name="rowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultset"></a>

```typescript
public readonly rowsPerResultset: number;
```

- *Type:* number

---

##### `s3StageVpceDnsName`<sup>Required</sup> <a name="s3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsName"></a>

```typescript
public readonly s3StageVpceDnsName: string;
```

- *Type:* string

---

##### `samlIdentityProvider`<sup>Required</sup> <a name="samlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProvider"></a>

```typescript
public readonly samlIdentityProvider: string;
```

- *Type:* string

---

##### `searchPath`<sup>Required</sup> <a name="searchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPath"></a>

```typescript
public readonly searchPath: string;
```

- *Type:* string

---

##### `serverlessTaskMaxStatementSize`<sup>Required</sup> <a name="serverlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSize"></a>

```typescript
public readonly serverlessTaskMaxStatementSize: string;
```

- *Type:* string

---

##### `serverlessTaskMinStatementSize`<sup>Required</sup> <a name="serverlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSize"></a>

```typescript
public readonly serverlessTaskMinStatementSize: string;
```

- *Type:* string

---

##### `sessionPolicy`<sup>Required</sup> <a name="sessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicy"></a>

```typescript
public readonly sessionPolicy: string;
```

- *Type:* string

---

##### `simulatedDataSharingConsumer`<sup>Required</sup> <a name="simulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumer"></a>

```typescript
public readonly simulatedDataSharingConsumer: string;
```

- *Type:* string

---

##### `ssoLoginPage`<sup>Required</sup> <a name="ssoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPage"></a>

```typescript
public readonly ssoLoginPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `statementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSeconds"></a>

```typescript
public readonly statementQueuedTimeoutInSeconds: number;
```

- *Type:* number

---

##### `statementTimeoutInSeconds`<sup>Required</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSeconds"></a>

```typescript
public readonly statementTimeoutInSeconds: number;
```

- *Type:* number

---

##### `storageSerializationPolicy`<sup>Required</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: string;
```

- *Type:* string

---

##### `strictJsonOutput`<sup>Required</sup> <a name="strictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutput"></a>

```typescript
public readonly strictJsonOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `suspendTaskAfterNumFailures`<sup>Required</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailures"></a>

```typescript
public readonly suspendTaskAfterNumFailures: number;
```

- *Type:* number

---

##### `taskAutoRetryAttempts`<sup>Required</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttempts"></a>

```typescript
public readonly taskAutoRetryAttempts: number;
```

- *Type:* number

---

##### `timeInputFormat`<sup>Required</sup> <a name="timeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormat"></a>

```typescript
public readonly timeInputFormat: string;
```

- *Type:* string

---

##### `timeOutputFormat`<sup>Required</sup> <a name="timeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormat"></a>

```typescript
public readonly timeOutputFormat: string;
```

- *Type:* string

---

##### `timestampDayIsAlways24H`<sup>Required</sup> <a name="timestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24H"></a>

```typescript
public readonly timestampDayIsAlways24H: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timestampInputFormat`<sup>Required</sup> <a name="timestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormat"></a>

```typescript
public readonly timestampInputFormat: string;
```

- *Type:* string

---

##### `timestampLtzOutputFormat`<sup>Required</sup> <a name="timestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormat"></a>

```typescript
public readonly timestampLtzOutputFormat: string;
```

- *Type:* string

---

##### `timestampNtzOutputFormat`<sup>Required</sup> <a name="timestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormat"></a>

```typescript
public readonly timestampNtzOutputFormat: string;
```

- *Type:* string

---

##### `timestampOutputFormat`<sup>Required</sup> <a name="timestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormat"></a>

```typescript
public readonly timestampOutputFormat: string;
```

- *Type:* string

---

##### `timestampTypeMapping`<sup>Required</sup> <a name="timestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMapping"></a>

```typescript
public readonly timestampTypeMapping: string;
```

- *Type:* string

---

##### `timestampTzOutputFormat`<sup>Required</sup> <a name="timestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormat"></a>

```typescript
public readonly timestampTzOutputFormat: string;
```

- *Type:* string

---

##### `timezone`<sup>Required</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

---

##### `traceLevel`<sup>Required</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevel"></a>

```typescript
public readonly traceLevel: string;
```

- *Type:* string

---

##### `transactionAbortOnError`<sup>Required</sup> <a name="transactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnError"></a>

```typescript
public readonly transactionAbortOnError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `transactionDefaultIsolationLevel`<sup>Required</sup> <a name="transactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevel"></a>

```typescript
public readonly transactionDefaultIsolationLevel: string;
```

- *Type:* string

---

##### `twoDigitCenturyStart`<sup>Required</sup> <a name="twoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStart"></a>

```typescript
public readonly twoDigitCenturyStart: number;
```

- *Type:* number

---

##### `unsupportedDdlAction`<sup>Required</sup> <a name="unsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlAction"></a>

```typescript
public readonly unsupportedDdlAction: string;
```

- *Type:* string

---

##### `useCachedResult`<sup>Required</sup> <a name="useCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResult"></a>

```typescript
public readonly useCachedResult: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `userTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSize"></a>

```typescript
public readonly userTaskManagedInitialWarehouseSize: string;
```

- *Type:* string

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```typescript
public readonly userTaskMinimumTriggerIntervalInSeconds: number;
```

- *Type:* number

---

##### `userTaskTimeoutMs`<sup>Required</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMs"></a>

```typescript
public readonly userTaskTimeoutMs: number;
```

- *Type:* number

---

##### `weekOfYearPolicy`<sup>Required</sup> <a name="weekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicy"></a>

```typescript
public readonly weekOfYearPolicy: number;
```

- *Type:* number

---

##### `weekStart`<sup>Required</sup> <a name="weekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStart"></a>

```typescript
public readonly weekStart: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CurrentOrganizationAccountConfig <a name="CurrentOrganizationAccountConfig" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.Initializer"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

const currentOrganizationAccountConfig: currentOrganizationAccount.CurrentOrganizationAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.name">name</a></code> | <code>string</code> | The identifier (i.e. name) for the organization account within currently used organization. The field name is validated during import and create operations to ensure that it matches the current organization account name. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.abortDetachedQuery">abortDetachedQuery</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.activePythonProfiler">activePythonProfiler</a></code> | <code>string</code> | Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` \| `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowClientMfaCaching">allowClientMfaCaching</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowIdToken">allowIdToken</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.autocommit">autocommit</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether autocommit is enabled for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.baseLocationPrefix">baseLocationPrefix</a></code> | <code>string</code> | Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryInputFormat">binaryInputFormat</a></code> | <code>string</code> | The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryOutputFormat">binaryOutputFormat</a></code> | <code>string</code> | The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalog">catalog</a></code> | <code>string</code> | Specifies the catalog for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalogSync">catalogSync</a></code> | <code>string</code> | Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEnableLogInfoStatementParameters">clientEnableLogInfoStatementParameters</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEncryptionKeySize">clientEncryptionKeySize</a></code> | <code>number</code> | Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMemoryLimit">clientMemoryLimit</a></code> | <code>number</code> | Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataRequestUseConnectionCtx">clientMetadataRequestUseConnectionCtx</a></code> | <code>boolean \| cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataUseSessionDatabase">clientMetadataUseSessionDatabase</a></code> | <code>boolean \| cdktf.IResolvable</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientPrefetchThreads">clientPrefetchThreads</a></code> | <code>number</code> | Parameter that specifies the number of threads used by the client to pre-fetch large result sets. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultChunkSize">clientResultChunkSize</a></code> | <code>number</code> | Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultColumnCaseInsensitive">clientResultColumnCaseInsensitive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAlive">clientSessionKeepAlive</a></code> | <code>boolean \| cdktf.IResolvable</code> | Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency">clientSessionKeepAliveHeartbeatFrequency</a></code> | <code>number</code> | Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientTimestampTypeMapping">clientTimestampTypeMapping</a></code> | <code>string</code> | Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` \| `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the organization account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexEnabledCrossRegion">cortexEnabledCrossRegion</a></code> | <code>string</code> | Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexModelsAllowlist">cortexModelsAllowlist</a></code> | <code>string</code> | Specifies the models that users in the account can access. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.csvTimestampFormat">csvTimestampFormat</a></code> | <code>string</code> | Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateInputFormat">dateInputFormat</a></code> | <code>string</code> | Specifies the input format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateOutputFormat">dateOutputFormat</a></code> | <code>string</code> | Specifies the display format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultDdlCollation">defaultDdlCollation</a></code> | <code>string</code> | Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolCpu">defaultNotebookComputePoolCpu</a></code> | <code>string</code> | Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolGpu">defaultNotebookComputePoolGpu</a></code> | <code>string</code> | Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNullOrdering">defaultNullOrdering</a></code> | <code>string</code> | Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` \| `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultStreamlitNotebookWarehouse">defaultStreamlitNotebookWarehouse</a></code> | <code>string</code> | Specifies the name of the default warehouse to use when creating a notebook. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUiDownloadButton">disableUiDownloadButton</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUserPrivilegeGrants">disableUserPrivilegeGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether users in an account can grant privileges directly to other users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableAutomaticSensitiveDataClassificationLog">enableAutomaticSensitiveDataClassificationLog</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableEgressCostOptimizer">enableEgressCostOptimizer</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableIdentifierFirstLogin">enableIdentifierFirstLogin</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines the login flow for users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableInternalStagesPrivatelink">enableInternalStagesPrivatelink</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository">enableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">enableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnhandledExceptionsReporting">enableUnhandledExceptionsReporting</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnloadPhysicalTypeOptimization">enableUnloadPhysicalTypeOptimization</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedQuerySyntaxError">enableUnredactedQuerySyntaxError</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedSecureObjectError">enableUnredactedSecureObjectError</a></code> | <code>boolean \| cdktf.IResolvable</code> | Controls whether error messages related to secure objects are redacted in metadata. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enforceNetworkRulesForInternalStages">enforceNetworkRulesForInternalStages</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicMerge">errorOnNondeterministicMerge</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicUpdate">errorOnNondeterministicUpdate</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.eventTable">eventTable</a></code> | <code>string</code> | Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalVolume">externalVolume</a></code> | <code>string</code> | Specifies the external volume for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geographyOutputFormat">geographyOutputFormat</a></code> | <code>string</code> | Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geometryOutputFormat">geometryOutputFormat</a></code> | <code>string</code> | Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.hybridTableLockTimeout">hybridTableLockTimeout</a></code> | <code>number</code> | Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#id CurrentOrganizationAccount#id}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.initialReplicationSizeLimitInTb">initialReplicationSizeLimitInTb</a></code> | <code>string</code> | Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatDecimalAsInt">jdbcTreatDecimalAsInt</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatTimestampNtzAsUtc">jdbcTreatTimestampNtzAsUtc</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcUseSessionTimezone">jdbcUseSessionTimezone</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsonIndent">jsonIndent</a></code> | <code>number</code> | Specifies the number of blank spaces to indent each new element in JSON output in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsTreatIntegerAsBigint">jsTreatIntegerAsBigint</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule">listingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>string</code> | Sets the time interval used to refresh the application package based data products to other regions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lockTimeout">lockTimeout</a></code> | <code>number</code> | Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.logLevel">logLevel</a></code> | <code>string</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxConcurrencyLevel">maxConcurrencyLevel</a></code> | <code>number</code> | Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxDataExtensionTimeInDays">maxDataExtensionTimeInDays</a></code> | <code>number</code> | Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.metricLevel">metricLevel</a></code> | <code>string</code> | Controls how metrics data is ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.minDataRetentionTimeInDays">minDataRetentionTimeInDays</a></code> | <code>number</code> | Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.multiStatementCount">multiStatementCount</a></code> | <code>number</code> | Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.networkPolicy">networkPolicy</a></code> | <code>string</code> | Specifies the network policy to enforce for your account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.noorderSequenceAsDefault">noorderSequenceAsDefault</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.oauthAddPrivilegedRolesToBlockedList">oauthAddPrivilegedRolesToBlockedList</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.odbcTreatDecimalAsInt">odbcTreatDecimalAsInt</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.passwordPolicy">passwordPolicy</a></code> | <code>string</code> | Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.periodicDataRekeying">periodicDataRekeying</a></code> | <code>boolean \| cdktf.IResolvable</code> | It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pipeExecutionPaused">pipeExecutionPaused</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInlineUrl">preventUnloadToInlineUrl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInternalStages">preventUnloadToInternalStages</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerModules">pythonProfilerModules</a></code> | <code>string</code> | Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerTargetStage">pythonProfilerTargetStage</a></code> | <code>string</code> | Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.queryTag">queryTag</a></code> | <code>string</code> | Optional string that can be used to tag queries and other SQL statements executed within a session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.quotedIdentifiersIgnoreCase">quotedIdentifiersIgnoreCase</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.replaceInvalidCharacters">replaceInvalidCharacters</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageCreation">requireStorageIntegrationForStageCreation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageOperation">requireStorageIntegrationForStageOperation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.resourceMonitor">resourceMonitor</a></code> | <code>string</code> | Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.rowsPerResultset">rowsPerResultset</a></code> | <code>number</code> | Specifies the maximum number of rows returned in a result set. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.s3StageVpceDnsName">s3StageVpceDnsName</a></code> | <code>string</code> | Specifies the DNS name of an Amazon S3 interface endpoint. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.samlIdentityProvider">samlIdentityProvider</a></code> | <code>string</code> | Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.searchPath">searchPath</a></code> | <code>string</code> | Specifies the path to search to resolve unqualified object names in queries. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMaxStatementSize">serverlessTaskMaxStatementSize</a></code> | <code>string</code> | Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMinStatementSize">serverlessTaskMinStatementSize</a></code> | <code>string</code> | Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.sessionPolicy">sessionPolicy</a></code> | <code>string</code> | Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.simulatedDataSharingConsumer">simulatedDataSharingConsumer</a></code> | <code>string</code> | Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.ssoLoginPage">ssoLoginPage</a></code> | <code>boolean \| cdktf.IResolvable</code> | This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementQueuedTimeoutInSeconds">statementQueuedTimeoutInSeconds</a></code> | <code>number</code> | Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementTimeoutInSeconds">statementTimeoutInSeconds</a></code> | <code>number</code> | Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.storageSerializationPolicy">storageSerializationPolicy</a></code> | <code>string</code> | Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` \| `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.strictJsonOutput">strictJsonOutput</a></code> | <code>boolean \| cdktf.IResolvable</code> | This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.suspendTaskAfterNumFailures">suspendTaskAfterNumFailures</a></code> | <code>number</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.taskAutoRetryAttempts">taskAutoRetryAttempts</a></code> | <code>number</code> | Specifies the number of automatic task graph retry attempts. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeInputFormat">timeInputFormat</a></code> | <code>string</code> | Specifies the input format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeOutputFormat">timeOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampDayIsAlways24H">timestampDayIsAlways24H</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampInputFormat">timestampInputFormat</a></code> | <code>string</code> | Specifies the input format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampLtzOutputFormat">timestampLtzOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIMESTAMP_LTZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampNtzOutputFormat">timestampNtzOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampOutputFormat">timestampOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTypeMapping">timestampTypeMapping</a></code> | <code>string</code> | Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTzOutputFormat">timestampTzOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIMESTAMP_TZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timezone">timezone</a></code> | <code>string</code> | Specifies the time zone for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.traceLevel">traceLevel</a></code> | <code>string</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionAbortOnError">transactionAbortOnError</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionDefaultIsolationLevel">transactionDefaultIsolationLevel</a></code> | <code>string</code> | Specifies the isolation level for transactions in the user session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.twoDigitCenturyStart">twoDigitCenturyStart</a></code> | <code>number</code> | Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.unsupportedDdlAction">unsupportedDdlAction</a></code> | <code>string</code> | Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.useCachedResult">useCachedResult</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to reuse persisted query results, if available, when a matching query is submitted. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskManagedInitialWarehouseSize">userTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds">userTaskMinimumTriggerIntervalInSeconds</a></code> | <code>number</code> | Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskTimeoutMs">userTaskTimeoutMs</a></code> | <code>number</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekOfYearPolicy">weekOfYearPolicy</a></code> | <code>number</code> | Specifies how the weeks in a given year are computed. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekStart">weekStart</a></code> | <code>number</code> | Specifies the first day of the week (used by week-related date functions). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The identifier (i.e. name) for the organization account within currently used organization. The field name is validated during import and create operations to ensure that it matches the current organization account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#name CurrentOrganizationAccount#name}

---

##### `abortDetachedQuery`<sup>Optional</sup> <a name="abortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.abortDetachedQuery"></a>

```typescript
public readonly abortDetachedQuery: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#abort_detached_query CurrentOrganizationAccount#abort_detached_query}

---

##### `activePythonProfiler`<sup>Optional</sup> <a name="activePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.activePythonProfiler"></a>

```typescript
public readonly activePythonProfiler: string;
```

- *Type:* string

Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#active_python_profiler CurrentOrganizationAccount#active_python_profiler}

---

##### `allowClientMfaCaching`<sup>Optional</sup> <a name="allowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowClientMfaCaching"></a>

```typescript
public readonly allowClientMfaCaching: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#allow_client_mfa_caching CurrentOrganizationAccount#allow_client_mfa_caching}

---

##### `allowIdToken`<sup>Optional</sup> <a name="allowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowIdToken"></a>

```typescript
public readonly allowIdToken: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#allow_id_token CurrentOrganizationAccount#allow_id_token}

---

##### `autocommit`<sup>Optional</sup> <a name="autocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.autocommit"></a>

```typescript
public readonly autocommit: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether autocommit is enabled for the session.

Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#autocommit CurrentOrganizationAccount#autocommit}

---

##### `baseLocationPrefix`<sup>Optional</sup> <a name="baseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.baseLocationPrefix"></a>

```typescript
public readonly baseLocationPrefix: string;
```

- *Type:* string

Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables.

For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#base_location_prefix CurrentOrganizationAccount#base_location_prefix}

---

##### `binaryInputFormat`<sup>Optional</sup> <a name="binaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryInputFormat"></a>

```typescript
public readonly binaryInputFormat: string;
```

- *Type:* string

The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#binary_input_format CurrentOrganizationAccount#binary_input_format}

---

##### `binaryOutputFormat`<sup>Optional</sup> <a name="binaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryOutputFormat"></a>

```typescript
public readonly binaryOutputFormat: string;
```

- *Type:* string

The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#binary_output_format CurrentOrganizationAccount#binary_output_format}

---

##### `catalog`<sup>Optional</sup> <a name="catalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalog"></a>

```typescript
public readonly catalog: string;
```

- *Type:* string

Specifies the catalog for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#catalog CurrentOrganizationAccount#catalog}

---

##### `catalogSync`<sup>Optional</sup> <a name="catalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalogSync"></a>

```typescript
public readonly catalogSync: string;
```

- *Type:* string

Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#catalog_sync CurrentOrganizationAccount#catalog_sync}

---

##### `clientEnableLogInfoStatementParameters`<sup>Optional</sup> <a name="clientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEnableLogInfoStatementParameters"></a>

```typescript
public readonly clientEnableLogInfoStatementParameters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_enable_log_info_statement_parameters CurrentOrganizationAccount#client_enable_log_info_statement_parameters}

---

##### `clientEncryptionKeySize`<sup>Optional</sup> <a name="clientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEncryptionKeySize"></a>

```typescript
public readonly clientEncryptionKeySize: number;
```

- *Type:* number

Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type.

For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_encryption_key_size CurrentOrganizationAccount#client_encryption_key_size}

---

##### `clientMemoryLimit`<sup>Optional</sup> <a name="clientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMemoryLimit"></a>

```typescript
public readonly clientMemoryLimit: number;
```

- *Type:* number

Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB).

For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_memory_limit CurrentOrganizationAccount#client_memory_limit}

---

##### `clientMetadataRequestUseConnectionCtx`<sup>Optional</sup> <a name="clientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataRequestUseConnectionCtx"></a>

```typescript
public readonly clientMetadataRequestUseConnectionCtx: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema.

The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_metadata_request_use_connection_ctx CurrentOrganizationAccount#client_metadata_request_use_connection_ctx}

---

##### `clientMetadataUseSessionDatabase`<sup>Optional</sup> <a name="clientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataUseSessionDatabase"></a>

```typescript
public readonly clientMetadataUseSessionDatabase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database.

The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_metadata_use_session_database CurrentOrganizationAccount#client_metadata_use_session_database}

---

##### `clientPrefetchThreads`<sup>Optional</sup> <a name="clientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientPrefetchThreads"></a>

```typescript
public readonly clientPrefetchThreads: number;
```

- *Type:* number

Parameter that specifies the number of threads used by the client to pre-fetch large result sets.

The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_prefetch_threads CurrentOrganizationAccount#client_prefetch_threads}

---

##### `clientResultChunkSize`<sup>Optional</sup> <a name="clientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultChunkSize"></a>

```typescript
public readonly clientResultChunkSize: number;
```

- *Type:* number

Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB).

The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_result_chunk_size CurrentOrganizationAccount#client_result_chunk_size}

---

##### `clientResultColumnCaseInsensitive`<sup>Optional</sup> <a name="clientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultColumnCaseInsensitive"></a>

```typescript
public readonly clientResultColumnCaseInsensitive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_result_column_case_insensitive CurrentOrganizationAccount#client_result_column_case_insensitive}

---

##### `clientSessionKeepAlive`<sup>Optional</sup> <a name="clientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAlive"></a>

```typescript
public readonly clientSessionKeepAlive: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Parameter that indicates whether to force a user to log in again after a period of inactivity in the session.

For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_session_keep_alive CurrentOrganizationAccount#client_session_keep_alive}

---

##### `clientSessionKeepAliveHeartbeatFrequency`<sup>Optional</sup> <a name="clientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```typescript
public readonly clientSessionKeepAliveHeartbeatFrequency: number;
```

- *Type:* number

Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_session_keep_alive_heartbeat_frequency CurrentOrganizationAccount#client_session_keep_alive_heartbeat_frequency}

---

##### `clientTimestampTypeMapping`<sup>Optional</sup> <a name="clientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientTimestampTypeMapping"></a>

```typescript
public readonly clientTimestampTypeMapping: string;
```

- *Type:* string

Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#client_timestamp_type_mapping CurrentOrganizationAccount#client_timestamp_type_mapping}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the organization account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#comment CurrentOrganizationAccount#comment}

---

##### `cortexEnabledCrossRegion`<sup>Optional</sup> <a name="cortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexEnabledCrossRegion"></a>

```typescript
public readonly cortexEnabledCrossRegion: string;
```

- *Type:* string

Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed.

Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#cortex_enabled_cross_region CurrentOrganizationAccount#cortex_enabled_cross_region}

---

##### `cortexModelsAllowlist`<sup>Optional</sup> <a name="cortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexModelsAllowlist"></a>

```typescript
public readonly cortexModelsAllowlist: string;
```

- *Type:* string

Specifies the models that users in the account can access.

Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#cortex_models_allowlist CurrentOrganizationAccount#cortex_models_allowlist}

---

##### `csvTimestampFormat`<sup>Optional</sup> <a name="csvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.csvTimestampFormat"></a>

```typescript
public readonly csvTimestampFormat: string;
```

- *Type:* string

Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight.

If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#csv_timestamp_format CurrentOrganizationAccount#csv_timestamp_format}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#data_retention_time_in_days CurrentOrganizationAccount#data_retention_time_in_days}

---

##### `dateInputFormat`<sup>Optional</sup> <a name="dateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateInputFormat"></a>

```typescript
public readonly dateInputFormat: string;
```

- *Type:* string

Specifies the input format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#date_input_format CurrentOrganizationAccount#date_input_format}

---

##### `dateOutputFormat`<sup>Optional</sup> <a name="dateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateOutputFormat"></a>

```typescript
public readonly dateOutputFormat: string;
```

- *Type:* string

Specifies the display format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#date_output_format CurrentOrganizationAccount#date_output_format}

---

##### `defaultDdlCollation`<sup>Optional</sup> <a name="defaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultDdlCollation"></a>

```typescript
public readonly defaultDdlCollation: string;
```

- *Type:* string

Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#default_ddl_collation CurrentOrganizationAccount#default_ddl_collation}

---

##### `defaultNotebookComputePoolCpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolCpu"></a>

```typescript
public readonly defaultNotebookComputePoolCpu: string;
```

- *Type:* string

Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#default_notebook_compute_pool_cpu CurrentOrganizationAccount#default_notebook_compute_pool_cpu}

---

##### `defaultNotebookComputePoolGpu`<sup>Optional</sup> <a name="defaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolGpu"></a>

```typescript
public readonly defaultNotebookComputePoolGpu: string;
```

- *Type:* string

Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#default_notebook_compute_pool_gpu CurrentOrganizationAccount#default_notebook_compute_pool_gpu}

---

##### `defaultNullOrdering`<sup>Optional</sup> <a name="defaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNullOrdering"></a>

```typescript
public readonly defaultNullOrdering: string;
```

- *Type:* string

Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#default_null_ordering CurrentOrganizationAccount#default_null_ordering}

---

##### `defaultStreamlitNotebookWarehouse`<sup>Optional</sup> <a name="defaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultStreamlitNotebookWarehouse"></a>

```typescript
public readonly defaultStreamlitNotebookWarehouse: string;
```

- *Type:* string

Specifies the name of the default warehouse to use when creating a notebook.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#default_streamlit_notebook_warehouse CurrentOrganizationAccount#default_streamlit_notebook_warehouse}

---

##### `disableUiDownloadButton`<sup>Optional</sup> <a name="disableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUiDownloadButton"></a>

```typescript
public readonly disableUiDownloadButton: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet.

If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#disable_ui_download_button CurrentOrganizationAccount#disable_ui_download_button}

---

##### `disableUserPrivilegeGrants`<sup>Optional</sup> <a name="disableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUserPrivilegeGrants"></a>

```typescript
public readonly disableUserPrivilegeGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether users in an account can grant privileges directly to other users.

Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#disable_user_privilege_grants CurrentOrganizationAccount#disable_user_privilege_grants}

---

##### `enableAutomaticSensitiveDataClassificationLog`<sup>Optional</sup> <a name="enableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableAutomaticSensitiveDataClassificationLog"></a>

```typescript
public readonly enableAutomaticSensitiveDataClassificationLog: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_automatic_sensitive_data_classification_log CurrentOrganizationAccount#enable_automatic_sensitive_data_classification_log}

---

##### `enableEgressCostOptimizer`<sup>Optional</sup> <a name="enableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableEgressCostOptimizer"></a>

```typescript
public readonly enableEgressCostOptimizer: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_egress_cost_optimizer CurrentOrganizationAccount#enable_egress_cost_optimizer}

---

##### `enableIdentifierFirstLogin`<sup>Optional</sup> <a name="enableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableIdentifierFirstLogin"></a>

```typescript
public readonly enableIdentifierFirstLogin: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines the login flow for users.

When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_identifier_first_login CurrentOrganizationAccount#enable_identifier_first_login}

---

##### `enableInternalStagesPrivatelink`<sup>Optional</sup> <a name="enableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableInternalStagesPrivatelink"></a>

```typescript
public readonly enableInternalStagesPrivatelink: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_internal_stages_privatelink CurrentOrganizationAccount#enable_internal_stages_privatelink}

---

##### `enableTriSecretAndRekeyOptOutForImageRepository`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```typescript
public readonly enableTriSecretAndRekeyOptOutForImageRepository: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentOrganizationAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}

---

##### `enableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Optional</sup> <a name="enableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```typescript
public readonly enableTriSecretAndRekeyOptOutForSpcsBlockStorage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentOrganizationAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}

---

##### `enableUnhandledExceptionsReporting`<sup>Optional</sup> <a name="enableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnhandledExceptionsReporting"></a>

```typescript
public readonly enableUnhandledExceptionsReporting: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code.

For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_unhandled_exceptions_reporting CurrentOrganizationAccount#enable_unhandled_exceptions_reporting}

---

##### `enableUnloadPhysicalTypeOptimization`<sup>Optional</sup> <a name="enableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnloadPhysicalTypeOptimization"></a>

```typescript
public readonly enableUnloadPhysicalTypeOptimization: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_unload_physical_type_optimization CurrentOrganizationAccount#enable_unload_physical_type_optimization}

---

##### `enableUnredactedQuerySyntaxError`<sup>Optional</sup> <a name="enableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedQuerySyntaxError"></a>

```typescript
public readonly enableUnredactedQuerySyntaxError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error.

If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_unredacted_query_syntax_error CurrentOrganizationAccount#enable_unredacted_query_syntax_error}

---

##### `enableUnredactedSecureObjectError`<sup>Optional</sup> <a name="enableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedSecureObjectError"></a>

```typescript
public readonly enableUnredactedSecureObjectError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Controls whether error messages related to secure objects are redacted in metadata.

For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enable_unredacted_secure_object_error CurrentOrganizationAccount#enable_unredacted_secure_object_error}

---

##### `enforceNetworkRulesForInternalStages`<sup>Optional</sup> <a name="enforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enforceNetworkRulesForInternalStages"></a>

```typescript
public readonly enforceNetworkRulesForInternalStages: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether a network policy that uses network rules can restrict access to AWS internal stages.

This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#enforce_network_rules_for_internal_stages CurrentOrganizationAccount#enforce_network_rules_for_internal_stages}

---

##### `errorOnNondeterministicMerge`<sup>Optional</sup> <a name="errorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicMerge"></a>

```typescript
public readonly errorOnNondeterministicMerge: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#error_on_nondeterministic_merge CurrentOrganizationAccount#error_on_nondeterministic_merge}

---

##### `errorOnNondeterministicUpdate`<sup>Optional</sup> <a name="errorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicUpdate"></a>

```typescript
public readonly errorOnNondeterministicUpdate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#error_on_nondeterministic_update CurrentOrganizationAccount#error_on_nondeterministic_update}

---

##### `eventTable`<sup>Optional</sup> <a name="eventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.eventTable"></a>

```typescript
public readonly eventTable: string;
```

- *Type:* string

Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated.

Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#event_table CurrentOrganizationAccount#event_table}

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```typescript
public readonly externalOauthAddPrivilegedRolesToBlockedList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server.

For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#external_oauth_add_privileged_roles_to_blocked_list CurrentOrganizationAccount#external_oauth_add_privileged_roles_to_blocked_list}

---

##### `externalVolume`<sup>Optional</sup> <a name="externalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalVolume"></a>

```typescript
public readonly externalVolume: string;
```

- *Type:* string

Specifies the external volume for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#external_volume CurrentOrganizationAccount#external_volume}

---

##### `geographyOutputFormat`<sup>Optional</sup> <a name="geographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geographyOutputFormat"></a>

```typescript
public readonly geographyOutputFormat: string;
```

- *Type:* string

Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#geography_output_format CurrentOrganizationAccount#geography_output_format}

---

##### `geometryOutputFormat`<sup>Optional</sup> <a name="geometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geometryOutputFormat"></a>

```typescript
public readonly geometryOutputFormat: string;
```

- *Type:* string

Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#geometry_output_format CurrentOrganizationAccount#geometry_output_format}

---

##### `hybridTableLockTimeout`<sup>Optional</sup> <a name="hybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.hybridTableLockTimeout"></a>

```typescript
public readonly hybridTableLockTimeout: number;
```

- *Type:* number

Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement.

For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#hybrid_table_lock_timeout CurrentOrganizationAccount#hybrid_table_lock_timeout}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#id CurrentOrganizationAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialReplicationSizeLimitInTb`<sup>Optional</sup> <a name="initialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.initialReplicationSizeLimitInTb"></a>

```typescript
public readonly initialReplicationSizeLimitInTb: string;
```

- *Type:* string

Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB).

Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#initial_replication_size_limit_in_tb CurrentOrganizationAccount#initial_replication_size_limit_in_tb}

---

##### `jdbcTreatDecimalAsInt`<sup>Optional</sup> <a name="jdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatDecimalAsInt"></a>

```typescript
public readonly jdbcTreatDecimalAsInt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#jdbc_treat_decimal_as_int CurrentOrganizationAccount#jdbc_treat_decimal_as_int}

---

##### `jdbcTreatTimestampNtzAsUtc`<sup>Optional</sup> <a name="jdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatTimestampNtzAsUtc"></a>

```typescript
public readonly jdbcTreatTimestampNtzAsUtc: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#jdbc_treat_timestamp_ntz_as_utc CurrentOrganizationAccount#jdbc_treat_timestamp_ntz_as_utc}

---

##### `jdbcUseSessionTimezone`<sup>Optional</sup> <a name="jdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcUseSessionTimezone"></a>

```typescript
public readonly jdbcUseSessionTimezone: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#jdbc_use_session_timezone CurrentOrganizationAccount#jdbc_use_session_timezone}

---

##### `jsonIndent`<sup>Optional</sup> <a name="jsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsonIndent"></a>

```typescript
public readonly jsonIndent: number;
```

- *Type:* number

Specifies the number of blank spaces to indent each new element in JSON output in the session.

Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#json_indent CurrentOrganizationAccount#json_indent}

---

##### `jsTreatIntegerAsBigint`<sup>Optional</sup> <a name="jsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsTreatIntegerAsBigint"></a>

```typescript
public readonly jsTreatIntegerAsBigint: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#js_treat_integer_as_bigint CurrentOrganizationAccount#js_treat_integer_as_bigint}

---

##### `listingAutoFulfillmentReplicationRefreshSchedule`<sup>Optional</sup> <a name="listingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```typescript
public readonly listingAutoFulfillmentReplicationRefreshSchedule: string;
```

- *Type:* string

Sets the time interval used to refresh the application package based data products to other regions.

For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#listing_auto_fulfillment_replication_refresh_schedule CurrentOrganizationAccount#listing_auto_fulfillment_replication_refresh_schedule}

---

##### `lockTimeout`<sup>Optional</sup> <a name="lockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lockTimeout"></a>

```typescript
public readonly lockTimeout: number;
```

- *Type:* number

Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement.

For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#lock_timeout CurrentOrganizationAccount#lock_timeout}

---

##### `logLevel`<sup>Optional</sup> <a name="logLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.logLevel"></a>

```typescript
public readonly logLevel: string;
```

- *Type:* string

Specifies the severity level of messages that should be ingested and made available in the active event table.

Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#log_level CurrentOrganizationAccount#log_level}

---

##### `maxConcurrencyLevel`<sup>Optional</sup> <a name="maxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxConcurrencyLevel"></a>

```typescript
public readonly maxConcurrencyLevel: number;
```

- *Type:* number

Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#max_concurrency_level CurrentOrganizationAccount#max_concurrency_level}

---

##### `maxDataExtensionTimeInDays`<sup>Optional</sup> <a name="maxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxDataExtensionTimeInDays"></a>

```typescript
public readonly maxDataExtensionTimeInDays: number;
```

- *Type:* number

Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale.

By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#max_data_extension_time_in_days CurrentOrganizationAccount#max_data_extension_time_in_days}

---

##### `metricLevel`<sup>Optional</sup> <a name="metricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.metricLevel"></a>

```typescript
public readonly metricLevel: string;
```

- *Type:* string

Controls how metrics data is ingested into the event table.

For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#metric_level CurrentOrganizationAccount#metric_level}

---

##### `minDataRetentionTimeInDays`<sup>Optional</sup> <a name="minDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.minDataRetentionTimeInDays"></a>

```typescript
public readonly minDataRetentionTimeInDays: number;
```

- *Type:* number

Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object.

If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#min_data_retention_time_in_days CurrentOrganizationAccount#min_data_retention_time_in_days}

---

##### `multiStatementCount`<sup>Optional</sup> <a name="multiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.multiStatementCount"></a>

```typescript
public readonly multiStatementCount: number;
```

- *Type:* number

Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#multi_statement_count CurrentOrganizationAccount#multi_statement_count}

---

##### `networkPolicy`<sup>Optional</sup> <a name="networkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.networkPolicy"></a>

```typescript
public readonly networkPolicy: string;
```

- *Type:* string

Specifies the network policy to enforce for your account.

Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#network_policy CurrentOrganizationAccount#network_policy}

---

##### `noorderSequenceAsDefault`<sup>Optional</sup> <a name="noorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.noorderSequenceAsDefault"></a>

```typescript
public readonly noorderSequenceAsDefault: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column.

The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#noorder_sequence_as_default CurrentOrganizationAccount#noorder_sequence_as_default}

---

##### `oauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="oauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.oauthAddPrivilegedRolesToBlockedList"></a>

```typescript
public readonly oauthAddPrivilegedRolesToBlockedList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server.

For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#oauth_add_privileged_roles_to_blocked_list CurrentOrganizationAccount#oauth_add_privileged_roles_to_blocked_list}

---

##### `odbcTreatDecimalAsInt`<sup>Optional</sup> <a name="odbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.odbcTreatDecimalAsInt"></a>

```typescript
public readonly odbcTreatDecimalAsInt: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#odbc_treat_decimal_as_int CurrentOrganizationAccount#odbc_treat_decimal_as_int}

---

##### `passwordPolicy`<sup>Optional</sup> <a name="passwordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.passwordPolicy"></a>

```typescript
public readonly passwordPolicy: string;
```

- *Type:* string

Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#password_policy CurrentOrganizationAccount#password_policy}

---

##### `periodicDataRekeying`<sup>Optional</sup> <a name="periodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.periodicDataRekeying"></a>

```typescript
public readonly periodicDataRekeying: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#periodic_data_rekeying CurrentOrganizationAccount#periodic_data_rekeying}

---

##### `pipeExecutionPaused`<sup>Optional</sup> <a name="pipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pipeExecutionPaused"></a>

```typescript
public readonly pipeExecutionPaused: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#pipe_execution_paused CurrentOrganizationAccount#pipe_execution_paused}

---

##### `preventUnloadToInlineUrl`<sup>Optional</sup> <a name="preventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInlineUrl"></a>

```typescript
public readonly preventUnloadToInlineUrl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#prevent_unload_to_inline_url CurrentOrganizationAccount#prevent_unload_to_inline_url}

---

##### `preventUnloadToInternalStages`<sup>Optional</sup> <a name="preventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInternalStages"></a>

```typescript
public readonly preventUnloadToInternalStages: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#prevent_unload_to_internal_stages CurrentOrganizationAccount#prevent_unload_to_internal_stages}

---

##### `pythonProfilerModules`<sup>Optional</sup> <a name="pythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerModules"></a>

```typescript
public readonly pythonProfilerModules: string;
```

- *Type:* string

Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#python_profiler_modules CurrentOrganizationAccount#python_profiler_modules}

---

##### `pythonProfilerTargetStage`<sup>Optional</sup> <a name="pythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerTargetStage"></a>

```typescript
public readonly pythonProfilerTargetStage: string;
```

- *Type:* string

Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#python_profiler_target_stage CurrentOrganizationAccount#python_profiler_target_stage}

---

##### `queryTag`<sup>Optional</sup> <a name="queryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.queryTag"></a>

```typescript
public readonly queryTag: string;
```

- *Type:* string

Optional string that can be used to tag queries and other SQL statements executed within a session.

The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#query_tag CurrentOrganizationAccount#query_tag}

---

##### `quotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="quotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.quotedIdentifiersIgnoreCase"></a>

```typescript
public readonly quotedIdentifiersIgnoreCase: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters.

By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#quoted_identifiers_ignore_case CurrentOrganizationAccount#quoted_identifiers_ignore_case}

---

##### `replaceInvalidCharacters`<sup>Optional</sup> <a name="replaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.replaceInvalidCharacters"></a>

```typescript
public readonly replaceInvalidCharacters: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#replace_invalid_characters CurrentOrganizationAccount#replace_invalid_characters}

---

##### `requireStorageIntegrationForStageCreation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageCreation"></a>

```typescript
public readonly requireStorageIntegrationForStageCreation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#require_storage_integration_for_stage_creation CurrentOrganizationAccount#require_storage_integration_for_stage_creation}

---

##### `requireStorageIntegrationForStageOperation`<sup>Optional</sup> <a name="requireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageOperation"></a>

```typescript
public readonly requireStorageIntegrationForStageOperation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location.

For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#require_storage_integration_for_stage_operation CurrentOrganizationAccount#require_storage_integration_for_stage_operation}

---

##### `resourceMonitor`<sup>Optional</sup> <a name="resourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.resourceMonitor"></a>

```typescript
public readonly resourceMonitor: string;
```

- *Type:* string

Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#resource_monitor CurrentOrganizationAccount#resource_monitor}

---

##### `rowsPerResultset`<sup>Optional</sup> <a name="rowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.rowsPerResultset"></a>

```typescript
public readonly rowsPerResultset: number;
```

- *Type:* number

Specifies the maximum number of rows returned in a result set.

A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#rows_per_resultset CurrentOrganizationAccount#rows_per_resultset}

---

##### `s3StageVpceDnsName`<sup>Optional</sup> <a name="s3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.s3StageVpceDnsName"></a>

```typescript
public readonly s3StageVpceDnsName: string;
```

- *Type:* string

Specifies the DNS name of an Amazon S3 interface endpoint.

Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#s3_stage_vpce_dns_name CurrentOrganizationAccount#s3_stage_vpce_dns_name}

---

##### `samlIdentityProvider`<sup>Optional</sup> <a name="samlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.samlIdentityProvider"></a>

```typescript
public readonly samlIdentityProvider: string;
```

- *Type:* string

Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#saml_identity_provider CurrentOrganizationAccount#saml_identity_provider}

---

##### `searchPath`<sup>Optional</sup> <a name="searchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.searchPath"></a>

```typescript
public readonly searchPath: string;
```

- *Type:* string

Specifies the path to search to resolve unqualified object names in queries.

For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#search_path CurrentOrganizationAccount#search_path}

---

##### `serverlessTaskMaxStatementSize`<sup>Optional</sup> <a name="serverlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMaxStatementSize"></a>

```typescript
public readonly serverlessTaskMaxStatementSize: string;
```

- *Type:* string

Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#serverless_task_max_statement_size CurrentOrganizationAccount#serverless_task_max_statement_size}

---

##### `serverlessTaskMinStatementSize`<sup>Optional</sup> <a name="serverlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMinStatementSize"></a>

```typescript
public readonly serverlessTaskMinStatementSize: string;
```

- *Type:* string

Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#serverless_task_min_statement_size CurrentOrganizationAccount#serverless_task_min_statement_size}

---

##### `sessionPolicy`<sup>Optional</sup> <a name="sessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.sessionPolicy"></a>

```typescript
public readonly sessionPolicy: string;
```

- *Type:* string

Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#session_policy CurrentOrganizationAccount#session_policy}

---

##### `simulatedDataSharingConsumer`<sup>Optional</sup> <a name="simulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.simulatedDataSharingConsumer"></a>

```typescript
public readonly simulatedDataSharingConsumer: string;
```

- *Type:* string

Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views.

When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#simulated_data_sharing_consumer CurrentOrganizationAccount#simulated_data_sharing_consumer}

---

##### `ssoLoginPage`<sup>Optional</sup> <a name="ssoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.ssoLoginPage"></a>

```typescript
public readonly ssoLoginPage: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users.

For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#sso_login_page CurrentOrganizationAccount#sso_login_page}

---

##### `statementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="statementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementQueuedTimeoutInSeconds"></a>

```typescript
public readonly statementQueuedTimeoutInSeconds: number;
```

- *Type:* number

Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#statement_queued_timeout_in_seconds CurrentOrganizationAccount#statement_queued_timeout_in_seconds}

---

##### `statementTimeoutInSeconds`<sup>Optional</sup> <a name="statementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementTimeoutInSeconds"></a>

```typescript
public readonly statementTimeoutInSeconds: number;
```

- *Type:* number

Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#statement_timeout_in_seconds CurrentOrganizationAccount#statement_timeout_in_seconds}

---

##### `storageSerializationPolicy`<sup>Optional</sup> <a name="storageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.storageSerializationPolicy"></a>

```typescript
public readonly storageSerializationPolicy: string;
```

- *Type:* string

Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#storage_serialization_policy CurrentOrganizationAccount#storage_serialization_policy}

---

##### `strictJsonOutput`<sup>Optional</sup> <a name="strictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.strictJsonOutput"></a>

```typescript
public readonly strictJsonOutput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#strict_json_output CurrentOrganizationAccount#strict_json_output}

---

##### `suspendTaskAfterNumFailures`<sup>Optional</sup> <a name="suspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.suspendTaskAfterNumFailures"></a>

```typescript
public readonly suspendTaskAfterNumFailures: number;
```

- *Type:* number

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#suspend_task_after_num_failures CurrentOrganizationAccount#suspend_task_after_num_failures}

---

##### `taskAutoRetryAttempts`<sup>Optional</sup> <a name="taskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.taskAutoRetryAttempts"></a>

```typescript
public readonly taskAutoRetryAttempts: number;
```

- *Type:* number

Specifies the number of automatic task graph retry attempts.

If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#task_auto_retry_attempts CurrentOrganizationAccount#task_auto_retry_attempts}

---

##### `timeInputFormat`<sup>Optional</sup> <a name="timeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeInputFormat"></a>

```typescript
public readonly timeInputFormat: string;
```

- *Type:* string

Specifies the input format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#time_input_format CurrentOrganizationAccount#time_input_format}

---

##### `timeOutputFormat`<sup>Optional</sup> <a name="timeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeOutputFormat"></a>

```typescript
public readonly timeOutputFormat: string;
```

- *Type:* string

Specifies the display format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#time_output_format CurrentOrganizationAccount#time_output_format}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CurrentOrganizationAccountTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#timeouts CurrentOrganizationAccount#timeouts}

---

##### `timestampDayIsAlways24H`<sup>Optional</sup> <a name="timestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampDayIsAlways24H"></a>

```typescript
public readonly timestampDayIsAlways24H: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#timestamp_day_is_always_24h CurrentOrganizationAccount#timestamp_day_is_always_24h}

---

##### `timestampInputFormat`<sup>Optional</sup> <a name="timestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampInputFormat"></a>

```typescript
public readonly timestampInputFormat: string;
```

- *Type:* string

Specifies the input format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#timestamp_input_format CurrentOrganizationAccount#timestamp_input_format}

---

##### `timestampLtzOutputFormat`<sup>Optional</sup> <a name="timestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampLtzOutputFormat"></a>

```typescript
public readonly timestampLtzOutputFormat: string;
```

- *Type:* string

Specifies the display format for the TIMESTAMP_LTZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#timestamp_ltz_output_format CurrentOrganizationAccount#timestamp_ltz_output_format}

---

##### `timestampNtzOutputFormat`<sup>Optional</sup> <a name="timestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampNtzOutputFormat"></a>

```typescript
public readonly timestampNtzOutputFormat: string;
```

- *Type:* string

Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#timestamp_ntz_output_format CurrentOrganizationAccount#timestamp_ntz_output_format}

---

##### `timestampOutputFormat`<sup>Optional</sup> <a name="timestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampOutputFormat"></a>

```typescript
public readonly timestampOutputFormat: string;
```

- *Type:* string

Specifies the display format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#timestamp_output_format CurrentOrganizationAccount#timestamp_output_format}

---

##### `timestampTypeMapping`<sup>Optional</sup> <a name="timestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTypeMapping"></a>

```typescript
public readonly timestampTypeMapping: string;
```

- *Type:* string

Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to.

Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#timestamp_type_mapping CurrentOrganizationAccount#timestamp_type_mapping}

---

##### `timestampTzOutputFormat`<sup>Optional</sup> <a name="timestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTzOutputFormat"></a>

```typescript
public readonly timestampTzOutputFormat: string;
```

- *Type:* string

Specifies the display format for the TIMESTAMP_TZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#timestamp_tz_output_format CurrentOrganizationAccount#timestamp_tz_output_format}

---

##### `timezone`<sup>Optional</sup> <a name="timezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timezone"></a>

```typescript
public readonly timezone: string;
```

- *Type:* string

Specifies the time zone for the session.

You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#timezone CurrentOrganizationAccount#timezone}

---

##### `traceLevel`<sup>Optional</sup> <a name="traceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.traceLevel"></a>

```typescript
public readonly traceLevel: string;
```

- *Type:* string

Controls how trace events are ingested into the event table.

For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#trace_level CurrentOrganizationAccount#trace_level}

---

##### `transactionAbortOnError`<sup>Optional</sup> <a name="transactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionAbortOnError"></a>

```typescript
public readonly transactionAbortOnError: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error.

For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#transaction_abort_on_error CurrentOrganizationAccount#transaction_abort_on_error}

---

##### `transactionDefaultIsolationLevel`<sup>Optional</sup> <a name="transactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionDefaultIsolationLevel"></a>

```typescript
public readonly transactionDefaultIsolationLevel: string;
```

- *Type:* string

Specifies the isolation level for transactions in the user session.

Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#transaction_default_isolation_level CurrentOrganizationAccount#transaction_default_isolation_level}

---

##### `twoDigitCenturyStart`<sup>Optional</sup> <a name="twoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.twoDigitCenturyStart"></a>

```typescript
public readonly twoDigitCenturyStart: number;
```

- *Type:* number

Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#two_digit_century_start CurrentOrganizationAccount#two_digit_century_start}

---

##### `unsupportedDdlAction`<sup>Optional</sup> <a name="unsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.unsupportedDdlAction"></a>

```typescript
public readonly unsupportedDdlAction: string;
```

- *Type:* string

Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#unsupported_ddl_action CurrentOrganizationAccount#unsupported_ddl_action}

---

##### `useCachedResult`<sup>Optional</sup> <a name="useCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.useCachedResult"></a>

```typescript
public readonly useCachedResult: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to reuse persisted query results, if available, when a matching query is submitted.

For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#use_cached_result CurrentOrganizationAccount#use_cached_result}

---

##### `userTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="userTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskManagedInitialWarehouseSize"></a>

```typescript
public readonly userTaskManagedInitialWarehouseSize: string;
```

- *Type:* string

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#user_task_managed_initial_warehouse_size CurrentOrganizationAccount#user_task_managed_initial_warehouse_size}

---

##### `userTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="userTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```typescript
public readonly userTaskMinimumTriggerIntervalInSeconds: number;
```

- *Type:* number

Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#user_task_minimum_trigger_interval_in_seconds CurrentOrganizationAccount#user_task_minimum_trigger_interval_in_seconds}

---

##### `userTaskTimeoutMs`<sup>Optional</sup> <a name="userTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskTimeoutMs"></a>

```typescript
public readonly userTaskTimeoutMs: number;
```

- *Type:* number

Specifies the time limit on a single run of the task before it times out (in milliseconds).

For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#user_task_timeout_ms CurrentOrganizationAccount#user_task_timeout_ms}

---

##### `weekOfYearPolicy`<sup>Optional</sup> <a name="weekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekOfYearPolicy"></a>

```typescript
public readonly weekOfYearPolicy: number;
```

- *Type:* number

Specifies how the weeks in a given year are computed.

`0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#week_of_year_policy CurrentOrganizationAccount#week_of_year_policy}

---

##### `weekStart`<sup>Optional</sup> <a name="weekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekStart"></a>

```typescript
public readonly weekStart: number;
```

- *Type:* number

Specifies the first day of the week (used by week-related date functions).

`0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#week_start CurrentOrganizationAccount#week_start}

---

### CurrentOrganizationAccountShowOutput <a name="CurrentOrganizationAccountShowOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput.Initializer"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

const currentOrganizationAccountShowOutput: currentOrganizationAccount.CurrentOrganizationAccountShowOutput = { ... }
```


### CurrentOrganizationAccountTimeouts <a name="CurrentOrganizationAccountTimeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.Initializer"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

const currentOrganizationAccountTimeouts: currentOrganizationAccount.CurrentOrganizationAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#create CurrentOrganizationAccount#create}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#delete CurrentOrganizationAccount#delete}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#read CurrentOrganizationAccount#read}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#update CurrentOrganizationAccount#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#create CurrentOrganizationAccount#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#delete CurrentOrganizationAccount#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#read CurrentOrganizationAccount#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.10.0/docs/resources/current_organization_account#update CurrentOrganizationAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CurrentOrganizationAccountShowOutputList <a name="CurrentOrganizationAccountShowOutputList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

new currentOrganizationAccount.CurrentOrganizationAccountShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

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

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.get"></a>

```typescript
public get(index: number): CurrentOrganizationAccountShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### CurrentOrganizationAccountShowOutputOutputReference <a name="CurrentOrganizationAccountShowOutputOutputReference" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

new currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocator">accountLocator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocatorUrl">accountLocatorUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountName">accountName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlLastUsed">accountOldUrlLastUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlSavedOn">accountOldUrlSavedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountUrl">accountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.consumptionBillingEntityName">consumptionBillingEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.edition">edition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isEventsAccount">isEventsAccount</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrgAdmin">isOrgAdmin</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrganizationAccount">isOrganizationAccount</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.managedAccounts">managedAccounts</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName">marketplaceConsumerBillingEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName">marketplaceProviderBillingEntityName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.oldAccountUrl">oldAccountUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationName">organizationName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrl">organizationOldUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlLastUsed">organizationOldUrlLastUsed</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlSavedOn">organizationOldUrlSavedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.snowflakeRegion">snowflakeRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput">CurrentOrganizationAccountShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountLocator`<sup>Required</sup> <a name="accountLocator" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocator"></a>

```typescript
public readonly accountLocator: string;
```

- *Type:* string

---

##### `accountLocatorUrl`<sup>Required</sup> <a name="accountLocatorUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocatorUrl"></a>

```typescript
public readonly accountLocatorUrl: string;
```

- *Type:* string

---

##### `accountName`<sup>Required</sup> <a name="accountName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountName"></a>

```typescript
public readonly accountName: string;
```

- *Type:* string

---

##### `accountOldUrlLastUsed`<sup>Required</sup> <a name="accountOldUrlLastUsed" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlLastUsed"></a>

```typescript
public readonly accountOldUrlLastUsed: string;
```

- *Type:* string

---

##### `accountOldUrlSavedOn`<sup>Required</sup> <a name="accountOldUrlSavedOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlSavedOn"></a>

```typescript
public readonly accountOldUrlSavedOn: string;
```

- *Type:* string

---

##### `accountUrl`<sup>Required</sup> <a name="accountUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountUrl"></a>

```typescript
public readonly accountUrl: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `consumptionBillingEntityName`<sup>Required</sup> <a name="consumptionBillingEntityName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.consumptionBillingEntityName"></a>

```typescript
public readonly consumptionBillingEntityName: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `edition`<sup>Required</sup> <a name="edition" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.edition"></a>

```typescript
public readonly edition: string;
```

- *Type:* string

---

##### `isEventsAccount`<sup>Required</sup> <a name="isEventsAccount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isEventsAccount"></a>

```typescript
public readonly isEventsAccount: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOrgAdmin`<sup>Required</sup> <a name="isOrgAdmin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrgAdmin"></a>

```typescript
public readonly isOrgAdmin: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isOrganizationAccount`<sup>Required</sup> <a name="isOrganizationAccount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrganizationAccount"></a>

```typescript
public readonly isOrganizationAccount: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `managedAccounts`<sup>Required</sup> <a name="managedAccounts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.managedAccounts"></a>

```typescript
public readonly managedAccounts: number;
```

- *Type:* number

---

##### `marketplaceConsumerBillingEntityName`<sup>Required</sup> <a name="marketplaceConsumerBillingEntityName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName"></a>

```typescript
public readonly marketplaceConsumerBillingEntityName: string;
```

- *Type:* string

---

##### `marketplaceProviderBillingEntityName`<sup>Required</sup> <a name="marketplaceProviderBillingEntityName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName"></a>

```typescript
public readonly marketplaceProviderBillingEntityName: string;
```

- *Type:* string

---

##### `oldAccountUrl`<sup>Required</sup> <a name="oldAccountUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.oldAccountUrl"></a>

```typescript
public readonly oldAccountUrl: string;
```

- *Type:* string

---

##### `organizationName`<sup>Required</sup> <a name="organizationName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationName"></a>

```typescript
public readonly organizationName: string;
```

- *Type:* string

---

##### `organizationOldUrl`<sup>Required</sup> <a name="organizationOldUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrl"></a>

```typescript
public readonly organizationOldUrl: string;
```

- *Type:* string

---

##### `organizationOldUrlLastUsed`<sup>Required</sup> <a name="organizationOldUrlLastUsed" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlLastUsed"></a>

```typescript
public readonly organizationOldUrlLastUsed: string;
```

- *Type:* string

---

##### `organizationOldUrlSavedOn`<sup>Required</sup> <a name="organizationOldUrlSavedOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlSavedOn"></a>

```typescript
public readonly organizationOldUrlSavedOn: string;
```

- *Type:* string

---

##### `snowflakeRegion`<sup>Required</sup> <a name="snowflakeRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.snowflakeRegion"></a>

```typescript
public readonly snowflakeRegion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: CurrentOrganizationAccountShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput">CurrentOrganizationAccountShowOutput</a>

---


### CurrentOrganizationAccountTimeoutsOutputReference <a name="CurrentOrganizationAccountTimeoutsOutputReference" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { currentOrganizationAccount } from '@cdktf/provider-snowflake'

new currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CurrentOrganizationAccountTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

---



