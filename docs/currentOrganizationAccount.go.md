# `currentOrganizationAccount` Submodule <a name="`currentOrganizationAccount` Submodule" id="@cdktf/provider-snowflake.currentOrganizationAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurrentOrganizationAccount <a name="CurrentOrganizationAccount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account snowflake_current_organization_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

currentorganizationaccount.NewCurrentOrganizationAccount(scope Construct, id *string, config CurrentOrganizationAccountConfig) CurrentOrganizationAccount
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig">CurrentOrganizationAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig">CurrentOrganizationAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAbortDetachedQuery">ResetAbortDetachedQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetActivePythonProfiler">ResetActivePythonProfiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowClientMfaCaching">ResetAllowClientMfaCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowIdToken">ResetAllowIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAutocommit">ResetAutocommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBaseLocationPrefix">ResetBaseLocationPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryInputFormat">ResetBinaryInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryOutputFormat">ResetBinaryOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalogSync">ResetCatalogSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEnableLogInfoStatementParameters">ResetClientEnableLogInfoStatementParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEncryptionKeySize">ResetClientEncryptionKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMemoryLimit">ResetClientMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataRequestUseConnectionCtx">ResetClientMetadataRequestUseConnectionCtx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataUseSessionDatabase">ResetClientMetadataUseSessionDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientPrefetchThreads">ResetClientPrefetchThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultChunkSize">ResetClientResultChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultColumnCaseInsensitive">ResetClientResultColumnCaseInsensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAlive">ResetClientSessionKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAliveHeartbeatFrequency">ResetClientSessionKeepAliveHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientTimestampTypeMapping">ResetClientTimestampTypeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetComment">ResetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexEnabledCrossRegion">ResetCortexEnabledCrossRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexModelsAllowlist">ResetCortexModelsAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCsvTimestampFormat">ResetCsvTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDataRetentionTimeInDays">ResetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateInputFormat">ResetDateInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateOutputFormat">ResetDateOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultDdlCollation">ResetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolCpu">ResetDefaultNotebookComputePoolCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolGpu">ResetDefaultNotebookComputePoolGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNullOrdering">ResetDefaultNullOrdering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultStreamlitNotebookWarehouse">ResetDefaultStreamlitNotebookWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUiDownloadButton">ResetDisableUiDownloadButton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUserPrivilegeGrants">ResetDisableUserPrivilegeGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableAutomaticSensitiveDataClassificationLog">ResetEnableAutomaticSensitiveDataClassificationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableEgressCostOptimizer">ResetEnableEgressCostOptimizer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableIdentifierFirstLogin">ResetEnableIdentifierFirstLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableInternalStagesPrivatelink">ResetEnableInternalStagesPrivatelink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository">ResetEnableTriSecretAndRekeyOptOutForImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage">ResetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnhandledExceptionsReporting">ResetEnableUnhandledExceptionsReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnloadPhysicalTypeOptimization">ResetEnableUnloadPhysicalTypeOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedQuerySyntaxError">ResetEnableUnredactedQuerySyntaxError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedSecureObjectError">ResetEnableUnredactedSecureObjectError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnforceNetworkRulesForInternalStages">ResetEnforceNetworkRulesForInternalStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicMerge">ResetErrorOnNondeterministicMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicUpdate">ResetErrorOnNondeterministicUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEventTable">ResetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalOauthAddPrivilegedRolesToBlockedList">ResetExternalOauthAddPrivilegedRolesToBlockedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeographyOutputFormat">ResetGeographyOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeometryOutputFormat">ResetGeometryOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetHybridTableLockTimeout">ResetHybridTableLockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetInitialReplicationSizeLimitInTb">ResetInitialReplicationSizeLimitInTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatDecimalAsInt">ResetJdbcTreatDecimalAsInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatTimestampNtzAsUtc">ResetJdbcTreatTimestampNtzAsUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcUseSessionTimezone">ResetJdbcUseSessionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsonIndent">ResetJsonIndent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsTreatIntegerAsBigint">ResetJsTreatIntegerAsBigint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetListingAutoFulfillmentReplicationRefreshSchedule">ResetListingAutoFulfillmentReplicationRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLockTimeout">ResetLockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxConcurrencyLevel">ResetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxDataExtensionTimeInDays">ResetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMetricLevel">ResetMetricLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMinDataRetentionTimeInDays">ResetMinDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMultiStatementCount">ResetMultiStatementCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNetworkPolicy">ResetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNoorderSequenceAsDefault">ResetNoorderSequenceAsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOauthAddPrivilegedRolesToBlockedList">ResetOauthAddPrivilegedRolesToBlockedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOdbcTreatDecimalAsInt">ResetOdbcTreatDecimalAsInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPeriodicDataRekeying">ResetPeriodicDataRekeying</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPipeExecutionPaused">ResetPipeExecutionPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInlineUrl">ResetPreventUnloadToInlineUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInternalStages">ResetPreventUnloadToInternalStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerModules">ResetPythonProfilerModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerTargetStage">ResetPythonProfilerTargetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQueryTag">ResetQueryTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQuotedIdentifiersIgnoreCase">ResetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageCreation">ResetRequireStorageIntegrationForStageCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageOperation">ResetRequireStorageIntegrationForStageOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetResourceMonitor">ResetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRowsPerResultset">ResetRowsPerResultset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetS3StageVpceDnsName">ResetS3StageVpceDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSamlIdentityProvider">ResetSamlIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSearchPath">ResetSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMaxStatementSize">ResetServerlessTaskMaxStatementSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMinStatementSize">ResetServerlessTaskMinStatementSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSessionPolicy">ResetSessionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSimulatedDataSharingConsumer">ResetSimulatedDataSharingConsumer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSsoLoginPage">ResetSsoLoginPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementQueuedTimeoutInSeconds">ResetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementTimeoutInSeconds">ResetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStorageSerializationPolicy">ResetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStrictJsonOutput">ResetStrictJsonOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSuspendTaskAfterNumFailures">ResetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTaskAutoRetryAttempts">ResetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeInputFormat">ResetTimeInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeOutputFormat">ResetTimeOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampDayIsAlways24H">ResetTimestampDayIsAlways24H</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampInputFormat">ResetTimestampInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampLtzOutputFormat">ResetTimestampLtzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampNtzOutputFormat">ResetTimestampNtzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampOutputFormat">ResetTimestampOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTypeMapping">ResetTimestampTypeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTzOutputFormat">ResetTimestampTzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTraceLevel">ResetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionAbortOnError">ResetTransactionAbortOnError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionDefaultIsolationLevel">ResetTransactionDefaultIsolationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTwoDigitCenturyStart">ResetTwoDigitCenturyStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUnsupportedDdlAction">ResetUnsupportedDdlAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUseCachedResult">ResetUseCachedResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskManagedInitialWarehouseSize">ResetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskMinimumTriggerIntervalInSeconds">ResetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskTimeoutMs">ResetUserTaskTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekOfYearPolicy">ResetWeekOfYearPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekStart">ResetWeekStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.putTimeouts"></a>

```go
func PutTimeouts(value CurrentOrganizationAccountTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

---

##### `ResetAbortDetachedQuery` <a name="ResetAbortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAbortDetachedQuery"></a>

```go
func ResetAbortDetachedQuery()
```

##### `ResetActivePythonProfiler` <a name="ResetActivePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetActivePythonProfiler"></a>

```go
func ResetActivePythonProfiler()
```

##### `ResetAllowClientMfaCaching` <a name="ResetAllowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowClientMfaCaching"></a>

```go
func ResetAllowClientMfaCaching()
```

##### `ResetAllowIdToken` <a name="ResetAllowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAllowIdToken"></a>

```go
func ResetAllowIdToken()
```

##### `ResetAutocommit` <a name="ResetAutocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetAutocommit"></a>

```go
func ResetAutocommit()
```

##### `ResetBaseLocationPrefix` <a name="ResetBaseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBaseLocationPrefix"></a>

```go
func ResetBaseLocationPrefix()
```

##### `ResetBinaryInputFormat` <a name="ResetBinaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryInputFormat"></a>

```go
func ResetBinaryInputFormat()
```

##### `ResetBinaryOutputFormat` <a name="ResetBinaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetBinaryOutputFormat"></a>

```go
func ResetBinaryOutputFormat()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalog"></a>

```go
func ResetCatalog()
```

##### `ResetCatalogSync` <a name="ResetCatalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCatalogSync"></a>

```go
func ResetCatalogSync()
```

##### `ResetClientEnableLogInfoStatementParameters` <a name="ResetClientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEnableLogInfoStatementParameters"></a>

```go
func ResetClientEnableLogInfoStatementParameters()
```

##### `ResetClientEncryptionKeySize` <a name="ResetClientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientEncryptionKeySize"></a>

```go
func ResetClientEncryptionKeySize()
```

##### `ResetClientMemoryLimit` <a name="ResetClientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMemoryLimit"></a>

```go
func ResetClientMemoryLimit()
```

##### `ResetClientMetadataRequestUseConnectionCtx` <a name="ResetClientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataRequestUseConnectionCtx"></a>

```go
func ResetClientMetadataRequestUseConnectionCtx()
```

##### `ResetClientMetadataUseSessionDatabase` <a name="ResetClientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientMetadataUseSessionDatabase"></a>

```go
func ResetClientMetadataUseSessionDatabase()
```

##### `ResetClientPrefetchThreads` <a name="ResetClientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientPrefetchThreads"></a>

```go
func ResetClientPrefetchThreads()
```

##### `ResetClientResultChunkSize` <a name="ResetClientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultChunkSize"></a>

```go
func ResetClientResultChunkSize()
```

##### `ResetClientResultColumnCaseInsensitive` <a name="ResetClientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientResultColumnCaseInsensitive"></a>

```go
func ResetClientResultColumnCaseInsensitive()
```

##### `ResetClientSessionKeepAlive` <a name="ResetClientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAlive"></a>

```go
func ResetClientSessionKeepAlive()
```

##### `ResetClientSessionKeepAliveHeartbeatFrequency` <a name="ResetClientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientSessionKeepAliveHeartbeatFrequency"></a>

```go
func ResetClientSessionKeepAliveHeartbeatFrequency()
```

##### `ResetClientTimestampTypeMapping` <a name="ResetClientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetClientTimestampTypeMapping"></a>

```go
func ResetClientTimestampTypeMapping()
```

##### `ResetComment` <a name="ResetComment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetComment"></a>

```go
func ResetComment()
```

##### `ResetCortexEnabledCrossRegion` <a name="ResetCortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexEnabledCrossRegion"></a>

```go
func ResetCortexEnabledCrossRegion()
```

##### `ResetCortexModelsAllowlist` <a name="ResetCortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCortexModelsAllowlist"></a>

```go
func ResetCortexModelsAllowlist()
```

##### `ResetCsvTimestampFormat` <a name="ResetCsvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetCsvTimestampFormat"></a>

```go
func ResetCsvTimestampFormat()
```

##### `ResetDataRetentionTimeInDays` <a name="ResetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDataRetentionTimeInDays"></a>

```go
func ResetDataRetentionTimeInDays()
```

##### `ResetDateInputFormat` <a name="ResetDateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateInputFormat"></a>

```go
func ResetDateInputFormat()
```

##### `ResetDateOutputFormat` <a name="ResetDateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDateOutputFormat"></a>

```go
func ResetDateOutputFormat()
```

##### `ResetDefaultDdlCollation` <a name="ResetDefaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultDdlCollation"></a>

```go
func ResetDefaultDdlCollation()
```

##### `ResetDefaultNotebookComputePoolCpu` <a name="ResetDefaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolCpu"></a>

```go
func ResetDefaultNotebookComputePoolCpu()
```

##### `ResetDefaultNotebookComputePoolGpu` <a name="ResetDefaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNotebookComputePoolGpu"></a>

```go
func ResetDefaultNotebookComputePoolGpu()
```

##### `ResetDefaultNullOrdering` <a name="ResetDefaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultNullOrdering"></a>

```go
func ResetDefaultNullOrdering()
```

##### `ResetDefaultStreamlitNotebookWarehouse` <a name="ResetDefaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDefaultStreamlitNotebookWarehouse"></a>

```go
func ResetDefaultStreamlitNotebookWarehouse()
```

##### `ResetDisableUiDownloadButton` <a name="ResetDisableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUiDownloadButton"></a>

```go
func ResetDisableUiDownloadButton()
```

##### `ResetDisableUserPrivilegeGrants` <a name="ResetDisableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetDisableUserPrivilegeGrants"></a>

```go
func ResetDisableUserPrivilegeGrants()
```

##### `ResetEnableAutomaticSensitiveDataClassificationLog` <a name="ResetEnableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableAutomaticSensitiveDataClassificationLog"></a>

```go
func ResetEnableAutomaticSensitiveDataClassificationLog()
```

##### `ResetEnableEgressCostOptimizer` <a name="ResetEnableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableEgressCostOptimizer"></a>

```go
func ResetEnableEgressCostOptimizer()
```

##### `ResetEnableIdentifierFirstLogin` <a name="ResetEnableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableIdentifierFirstLogin"></a>

```go
func ResetEnableIdentifierFirstLogin()
```

##### `ResetEnableInternalStagesPrivatelink` <a name="ResetEnableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableInternalStagesPrivatelink"></a>

```go
func ResetEnableInternalStagesPrivatelink()
```

##### `ResetEnableTriSecretAndRekeyOptOutForImageRepository` <a name="ResetEnableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository"></a>

```go
func ResetEnableTriSecretAndRekeyOptOutForImageRepository()
```

##### `ResetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage` <a name="ResetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```go
func ResetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage()
```

##### `ResetEnableUnhandledExceptionsReporting` <a name="ResetEnableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnhandledExceptionsReporting"></a>

```go
func ResetEnableUnhandledExceptionsReporting()
```

##### `ResetEnableUnloadPhysicalTypeOptimization` <a name="ResetEnableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnloadPhysicalTypeOptimization"></a>

```go
func ResetEnableUnloadPhysicalTypeOptimization()
```

##### `ResetEnableUnredactedQuerySyntaxError` <a name="ResetEnableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedQuerySyntaxError"></a>

```go
func ResetEnableUnredactedQuerySyntaxError()
```

##### `ResetEnableUnredactedSecureObjectError` <a name="ResetEnableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnableUnredactedSecureObjectError"></a>

```go
func ResetEnableUnredactedSecureObjectError()
```

##### `ResetEnforceNetworkRulesForInternalStages` <a name="ResetEnforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEnforceNetworkRulesForInternalStages"></a>

```go
func ResetEnforceNetworkRulesForInternalStages()
```

##### `ResetErrorOnNondeterministicMerge` <a name="ResetErrorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicMerge"></a>

```go
func ResetErrorOnNondeterministicMerge()
```

##### `ResetErrorOnNondeterministicUpdate` <a name="ResetErrorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetErrorOnNondeterministicUpdate"></a>

```go
func ResetErrorOnNondeterministicUpdate()
```

##### `ResetEventTable` <a name="ResetEventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetEventTable"></a>

```go
func ResetEventTable()
```

##### `ResetExternalOauthAddPrivilegedRolesToBlockedList` <a name="ResetExternalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalOauthAddPrivilegedRolesToBlockedList"></a>

```go
func ResetExternalOauthAddPrivilegedRolesToBlockedList()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetExternalVolume"></a>

```go
func ResetExternalVolume()
```

##### `ResetGeographyOutputFormat` <a name="ResetGeographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeographyOutputFormat"></a>

```go
func ResetGeographyOutputFormat()
```

##### `ResetGeometryOutputFormat` <a name="ResetGeometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetGeometryOutputFormat"></a>

```go
func ResetGeometryOutputFormat()
```

##### `ResetHybridTableLockTimeout` <a name="ResetHybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetHybridTableLockTimeout"></a>

```go
func ResetHybridTableLockTimeout()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialReplicationSizeLimitInTb` <a name="ResetInitialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetInitialReplicationSizeLimitInTb"></a>

```go
func ResetInitialReplicationSizeLimitInTb()
```

##### `ResetJdbcTreatDecimalAsInt` <a name="ResetJdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatDecimalAsInt"></a>

```go
func ResetJdbcTreatDecimalAsInt()
```

##### `ResetJdbcTreatTimestampNtzAsUtc` <a name="ResetJdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcTreatTimestampNtzAsUtc"></a>

```go
func ResetJdbcTreatTimestampNtzAsUtc()
```

##### `ResetJdbcUseSessionTimezone` <a name="ResetJdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJdbcUseSessionTimezone"></a>

```go
func ResetJdbcUseSessionTimezone()
```

##### `ResetJsonIndent` <a name="ResetJsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsonIndent"></a>

```go
func ResetJsonIndent()
```

##### `ResetJsTreatIntegerAsBigint` <a name="ResetJsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetJsTreatIntegerAsBigint"></a>

```go
func ResetJsTreatIntegerAsBigint()
```

##### `ResetListingAutoFulfillmentReplicationRefreshSchedule` <a name="ResetListingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetListingAutoFulfillmentReplicationRefreshSchedule"></a>

```go
func ResetListingAutoFulfillmentReplicationRefreshSchedule()
```

##### `ResetLockTimeout` <a name="ResetLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLockTimeout"></a>

```go
func ResetLockTimeout()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetLogLevel"></a>

```go
func ResetLogLevel()
```

##### `ResetMaxConcurrencyLevel` <a name="ResetMaxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxConcurrencyLevel"></a>

```go
func ResetMaxConcurrencyLevel()
```

##### `ResetMaxDataExtensionTimeInDays` <a name="ResetMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMaxDataExtensionTimeInDays"></a>

```go
func ResetMaxDataExtensionTimeInDays()
```

##### `ResetMetricLevel` <a name="ResetMetricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMetricLevel"></a>

```go
func ResetMetricLevel()
```

##### `ResetMinDataRetentionTimeInDays` <a name="ResetMinDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMinDataRetentionTimeInDays"></a>

```go
func ResetMinDataRetentionTimeInDays()
```

##### `ResetMultiStatementCount` <a name="ResetMultiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetMultiStatementCount"></a>

```go
func ResetMultiStatementCount()
```

##### `ResetNetworkPolicy` <a name="ResetNetworkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNetworkPolicy"></a>

```go
func ResetNetworkPolicy()
```

##### `ResetNoorderSequenceAsDefault` <a name="ResetNoorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetNoorderSequenceAsDefault"></a>

```go
func ResetNoorderSequenceAsDefault()
```

##### `ResetOauthAddPrivilegedRolesToBlockedList` <a name="ResetOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOauthAddPrivilegedRolesToBlockedList"></a>

```go
func ResetOauthAddPrivilegedRolesToBlockedList()
```

##### `ResetOdbcTreatDecimalAsInt` <a name="ResetOdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetOdbcTreatDecimalAsInt"></a>

```go
func ResetOdbcTreatDecimalAsInt()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPasswordPolicy"></a>

```go
func ResetPasswordPolicy()
```

##### `ResetPeriodicDataRekeying` <a name="ResetPeriodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPeriodicDataRekeying"></a>

```go
func ResetPeriodicDataRekeying()
```

##### `ResetPipeExecutionPaused` <a name="ResetPipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPipeExecutionPaused"></a>

```go
func ResetPipeExecutionPaused()
```

##### `ResetPreventUnloadToInlineUrl` <a name="ResetPreventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInlineUrl"></a>

```go
func ResetPreventUnloadToInlineUrl()
```

##### `ResetPreventUnloadToInternalStages` <a name="ResetPreventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPreventUnloadToInternalStages"></a>

```go
func ResetPreventUnloadToInternalStages()
```

##### `ResetPythonProfilerModules` <a name="ResetPythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerModules"></a>

```go
func ResetPythonProfilerModules()
```

##### `ResetPythonProfilerTargetStage` <a name="ResetPythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetPythonProfilerTargetStage"></a>

```go
func ResetPythonProfilerTargetStage()
```

##### `ResetQueryTag` <a name="ResetQueryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQueryTag"></a>

```go
func ResetQueryTag()
```

##### `ResetQuotedIdentifiersIgnoreCase` <a name="ResetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetQuotedIdentifiersIgnoreCase"></a>

```go
func ResetQuotedIdentifiersIgnoreCase()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetReplaceInvalidCharacters"></a>

```go
func ResetReplaceInvalidCharacters()
```

##### `ResetRequireStorageIntegrationForStageCreation` <a name="ResetRequireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageCreation"></a>

```go
func ResetRequireStorageIntegrationForStageCreation()
```

##### `ResetRequireStorageIntegrationForStageOperation` <a name="ResetRequireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRequireStorageIntegrationForStageOperation"></a>

```go
func ResetRequireStorageIntegrationForStageOperation()
```

##### `ResetResourceMonitor` <a name="ResetResourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetResourceMonitor"></a>

```go
func ResetResourceMonitor()
```

##### `ResetRowsPerResultset` <a name="ResetRowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetRowsPerResultset"></a>

```go
func ResetRowsPerResultset()
```

##### `ResetS3StageVpceDnsName` <a name="ResetS3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetS3StageVpceDnsName"></a>

```go
func ResetS3StageVpceDnsName()
```

##### `ResetSamlIdentityProvider` <a name="ResetSamlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSamlIdentityProvider"></a>

```go
func ResetSamlIdentityProvider()
```

##### `ResetSearchPath` <a name="ResetSearchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSearchPath"></a>

```go
func ResetSearchPath()
```

##### `ResetServerlessTaskMaxStatementSize` <a name="ResetServerlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMaxStatementSize"></a>

```go
func ResetServerlessTaskMaxStatementSize()
```

##### `ResetServerlessTaskMinStatementSize` <a name="ResetServerlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetServerlessTaskMinStatementSize"></a>

```go
func ResetServerlessTaskMinStatementSize()
```

##### `ResetSessionPolicy` <a name="ResetSessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSessionPolicy"></a>

```go
func ResetSessionPolicy()
```

##### `ResetSimulatedDataSharingConsumer` <a name="ResetSimulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSimulatedDataSharingConsumer"></a>

```go
func ResetSimulatedDataSharingConsumer()
```

##### `ResetSsoLoginPage` <a name="ResetSsoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSsoLoginPage"></a>

```go
func ResetSsoLoginPage()
```

##### `ResetStatementQueuedTimeoutInSeconds` <a name="ResetStatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementQueuedTimeoutInSeconds"></a>

```go
func ResetStatementQueuedTimeoutInSeconds()
```

##### `ResetStatementTimeoutInSeconds` <a name="ResetStatementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStatementTimeoutInSeconds"></a>

```go
func ResetStatementTimeoutInSeconds()
```

##### `ResetStorageSerializationPolicy` <a name="ResetStorageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStorageSerializationPolicy"></a>

```go
func ResetStorageSerializationPolicy()
```

##### `ResetStrictJsonOutput` <a name="ResetStrictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetStrictJsonOutput"></a>

```go
func ResetStrictJsonOutput()
```

##### `ResetSuspendTaskAfterNumFailures` <a name="ResetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetSuspendTaskAfterNumFailures"></a>

```go
func ResetSuspendTaskAfterNumFailures()
```

##### `ResetTaskAutoRetryAttempts` <a name="ResetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTaskAutoRetryAttempts"></a>

```go
func ResetTaskAutoRetryAttempts()
```

##### `ResetTimeInputFormat` <a name="ResetTimeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeInputFormat"></a>

```go
func ResetTimeInputFormat()
```

##### `ResetTimeOutputFormat` <a name="ResetTimeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeOutputFormat"></a>

```go
func ResetTimeOutputFormat()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetTimestampDayIsAlways24H` <a name="ResetTimestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampDayIsAlways24H"></a>

```go
func ResetTimestampDayIsAlways24H()
```

##### `ResetTimestampInputFormat` <a name="ResetTimestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampInputFormat"></a>

```go
func ResetTimestampInputFormat()
```

##### `ResetTimestampLtzOutputFormat` <a name="ResetTimestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampLtzOutputFormat"></a>

```go
func ResetTimestampLtzOutputFormat()
```

##### `ResetTimestampNtzOutputFormat` <a name="ResetTimestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampNtzOutputFormat"></a>

```go
func ResetTimestampNtzOutputFormat()
```

##### `ResetTimestampOutputFormat` <a name="ResetTimestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampOutputFormat"></a>

```go
func ResetTimestampOutputFormat()
```

##### `ResetTimestampTypeMapping` <a name="ResetTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTypeMapping"></a>

```go
func ResetTimestampTypeMapping()
```

##### `ResetTimestampTzOutputFormat` <a name="ResetTimestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimestampTzOutputFormat"></a>

```go
func ResetTimestampTzOutputFormat()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTimezone"></a>

```go
func ResetTimezone()
```

##### `ResetTraceLevel` <a name="ResetTraceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTraceLevel"></a>

```go
func ResetTraceLevel()
```

##### `ResetTransactionAbortOnError` <a name="ResetTransactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionAbortOnError"></a>

```go
func ResetTransactionAbortOnError()
```

##### `ResetTransactionDefaultIsolationLevel` <a name="ResetTransactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTransactionDefaultIsolationLevel"></a>

```go
func ResetTransactionDefaultIsolationLevel()
```

##### `ResetTwoDigitCenturyStart` <a name="ResetTwoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetTwoDigitCenturyStart"></a>

```go
func ResetTwoDigitCenturyStart()
```

##### `ResetUnsupportedDdlAction` <a name="ResetUnsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUnsupportedDdlAction"></a>

```go
func ResetUnsupportedDdlAction()
```

##### `ResetUseCachedResult` <a name="ResetUseCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUseCachedResult"></a>

```go
func ResetUseCachedResult()
```

##### `ResetUserTaskManagedInitialWarehouseSize` <a name="ResetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskManagedInitialWarehouseSize"></a>

```go
func ResetUserTaskManagedInitialWarehouseSize()
```

##### `ResetUserTaskMinimumTriggerIntervalInSeconds` <a name="ResetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```go
func ResetUserTaskMinimumTriggerIntervalInSeconds()
```

##### `ResetUserTaskTimeoutMs` <a name="ResetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetUserTaskTimeoutMs"></a>

```go
func ResetUserTaskTimeoutMs()
```

##### `ResetWeekOfYearPolicy` <a name="ResetWeekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekOfYearPolicy"></a>

```go
func ResetWeekOfYearPolicy()
```

##### `ResetWeekStart` <a name="ResetWeekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.resetWeekStart"></a>

```go
func ResetWeekStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CurrentOrganizationAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

currentorganizationaccount.CurrentOrganizationAccount_IsConstruct(x interface{}) *bool
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

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

currentorganizationaccount.CurrentOrganizationAccount_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

currentorganizationaccount.CurrentOrganizationAccount_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

currentorganizationaccount.CurrentOrganizationAccount_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CurrentOrganizationAccount resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CurrentOrganizationAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CurrentOrganizationAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CurrentOrganizationAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.showOutput">ShowOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList">CurrentOrganizationAccountShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference">CurrentOrganizationAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQueryInput">AbortDetachedQueryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfilerInput">ActivePythonProfilerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCachingInput">AllowClientMfaCachingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdTokenInput">AllowIdTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommitInput">AutocommitInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefixInput">BaseLocationPrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormatInput">BinaryInputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormatInput">BinaryOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogInput">CatalogInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSyncInput">CatalogSyncInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParametersInput">ClientEnableLogInfoStatementParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySizeInput">ClientEncryptionKeySizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimitInput">ClientMemoryLimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtxInput">ClientMetadataRequestUseConnectionCtxInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabaseInput">ClientMetadataUseSessionDatabaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreadsInput">ClientPrefetchThreadsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSizeInput">ClientResultChunkSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitiveInput">ClientResultColumnCaseInsensitiveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput">ClientSessionKeepAliveHeartbeatFrequencyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveInput">ClientSessionKeepAliveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMappingInput">ClientTimestampTypeMappingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.commentInput">CommentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegionInput">CortexEnabledCrossRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlistInput">CortexModelsAllowlistInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormatInput">CsvTimestampFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDaysInput">DataRetentionTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormatInput">DateInputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormatInput">DateOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollationInput">DefaultDdlCollationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpuInput">DefaultNotebookComputePoolCpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpuInput">DefaultNotebookComputePoolGpuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrderingInput">DefaultNullOrderingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouseInput">DefaultStreamlitNotebookWarehouseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButtonInput">DisableUiDownloadButtonInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrantsInput">DisableUserPrivilegeGrantsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLogInput">EnableAutomaticSensitiveDataClassificationLogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizerInput">EnableEgressCostOptimizerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLoginInput">EnableIdentifierFirstLoginInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelinkInput">EnableInternalStagesPrivatelinkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput">EnableTriSecretAndRekeyOptOutForImageRepositoryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput">EnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReportingInput">EnableUnhandledExceptionsReportingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimizationInput">EnableUnloadPhysicalTypeOptimizationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxErrorInput">EnableUnredactedQuerySyntaxErrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectErrorInput">EnableUnredactedSecureObjectErrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStagesInput">EnforceNetworkRulesForInternalStagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMergeInput">ErrorOnNondeterministicMergeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdateInput">ErrorOnNondeterministicUpdateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTableInput">EventTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput">ExternalOauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormatInput">GeographyOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormatInput">GeometryOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeoutInput">HybridTableLockTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTbInput">InitialReplicationSizeLimitInTbInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsIntInput">JdbcTreatDecimalAsIntInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtcInput">JdbcTreatTimestampNtzAsUtcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezoneInput">JdbcUseSessionTimezoneInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndentInput">JsonIndentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigintInput">JsTreatIntegerAsBigintInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput">ListingAutoFulfillmentReplicationRefreshScheduleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeoutInput">LockTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevelInput">LogLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevelInput">MaxConcurrencyLevelInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDaysInput">MaxDataExtensionTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevelInput">MetricLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDaysInput">MinDataRetentionTimeInDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCountInput">MultiStatementCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicyInput">NetworkPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefaultInput">NoorderSequenceAsDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedListInput">OauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsIntInput">OdbcTreatDecimalAsIntInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeyingInput">PeriodicDataRekeyingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPausedInput">PipeExecutionPausedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrlInput">PreventUnloadToInlineUrlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStagesInput">PreventUnloadToInternalStagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModulesInput">PythonProfilerModulesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStageInput">PythonProfilerTargetStageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTagInput">QueryTagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCaseInput">QuotedIdentifiersIgnoreCaseInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreationInput">RequireStorageIntegrationForStageCreationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperationInput">RequireStorageIntegrationForStageOperationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitorInput">ResourceMonitorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultsetInput">RowsPerResultsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsNameInput">S3StageVpceDnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProviderInput">SamlIdentityProviderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPathInput">SearchPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSizeInput">ServerlessTaskMaxStatementSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSizeInput">ServerlessTaskMinStatementSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicyInput">SessionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumerInput">SimulatedDataSharingConsumerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPageInput">SsoLoginPageInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSecondsInput">StatementQueuedTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSecondsInput">StatementTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicyInput">StorageSerializationPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutputInput">StrictJsonOutputInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailuresInput">SuspendTaskAfterNumFailuresInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttemptsInput">TaskAutoRetryAttemptsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormatInput">TimeInputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormatInput">TimeOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24HInput">TimestampDayIsAlways24HInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormatInput">TimestampInputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormatInput">TimestampLtzOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormatInput">TimestampNtzOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormatInput">TimestampOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMappingInput">TimestampTypeMappingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormatInput">TimestampTzOutputFormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevelInput">TraceLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnErrorInput">TransactionAbortOnErrorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevelInput">TransactionDefaultIsolationLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStartInput">TwoDigitCenturyStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlActionInput">UnsupportedDdlActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResultInput">UseCachedResultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSizeInput">UserTaskManagedInitialWarehouseSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSecondsInput">UserTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMsInput">UserTaskTimeoutMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicyInput">WeekOfYearPolicyInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStartInput">WeekStartInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQuery">AbortDetachedQuery</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfiler">ActivePythonProfiler</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCaching">AllowClientMfaCaching</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdToken">AllowIdToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommit">Autocommit</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefix">BaseLocationPrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormat">BinaryInputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormat">BinaryOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalog">Catalog</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSync">CatalogSync</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParameters">ClientEnableLogInfoStatementParameters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySize">ClientEncryptionKeySize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimit">ClientMemoryLimit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtx">ClientMetadataRequestUseConnectionCtx</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabase">ClientMetadataUseSessionDatabase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreads">ClientPrefetchThreads</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSize">ClientResultChunkSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitive">ClientResultColumnCaseInsensitive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAlive">ClientSessionKeepAlive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequency">ClientSessionKeepAliveHeartbeatFrequency</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMapping">ClientTimestampTypeMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegion">CortexEnabledCrossRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlist">CortexModelsAllowlist</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormat">CsvTimestampFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormat">DateInputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormat">DateOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpu">DefaultNotebookComputePoolCpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpu">DefaultNotebookComputePoolGpu</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrdering">DefaultNullOrdering</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouse">DefaultStreamlitNotebookWarehouse</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButton">DisableUiDownloadButton</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrants">DisableUserPrivilegeGrants</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLog">EnableAutomaticSensitiveDataClassificationLog</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizer">EnableEgressCostOptimizer</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLogin">EnableIdentifierFirstLogin</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelink">EnableInternalStagesPrivatelink</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepository">EnableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">EnableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReporting">EnableUnhandledExceptionsReporting</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimization">EnableUnloadPhysicalTypeOptimization</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxError">EnableUnredactedQuerySyntaxError</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectError">EnableUnredactedSecureObjectError</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStages">EnforceNetworkRulesForInternalStages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMerge">ErrorOnNondeterministicMerge</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdate">ErrorOnNondeterministicUpdate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTable">EventTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedList">ExternalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormat">GeographyOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormat">GeometryOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeout">HybridTableLockTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTb">InitialReplicationSizeLimitInTb</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsInt">JdbcTreatDecimalAsInt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtc">JdbcTreatTimestampNtzAsUtc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezone">JdbcUseSessionTimezone</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndent">JsonIndent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigint">JsTreatIntegerAsBigint</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshSchedule">ListingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeout">LockTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevel">LogLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevel">MetricLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDays">MinDataRetentionTimeInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCount">MultiStatementCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicy">NetworkPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefault">NoorderSequenceAsDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedList">OauthAddPrivilegedRolesToBlockedList</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsInt">OdbcTreatDecimalAsInt</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeying">PeriodicDataRekeying</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPaused">PipeExecutionPaused</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrl">PreventUnloadToInlineUrl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStages">PreventUnloadToInternalStages</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModules">PythonProfilerModules</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStage">PythonProfilerTargetStage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTag">QueryTag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreation">RequireStorageIntegrationForStageCreation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperation">RequireStorageIntegrationForStageOperation</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitor">ResourceMonitor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultset">RowsPerResultset</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsName">S3StageVpceDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProvider">SamlIdentityProvider</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPath">SearchPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSize">ServerlessTaskMaxStatementSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSize">ServerlessTaskMinStatementSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicy">SessionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumer">SimulatedDataSharingConsumer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPage">SsoLoginPage</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutput">StrictJsonOutput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormat">TimeInputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormat">TimeOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24H">TimestampDayIsAlways24H</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormat">TimestampInputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormat">TimestampLtzOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormat">TimestampNtzOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormat">TimestampOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMapping">TimestampTypeMapping</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormat">TimestampTzOutputFormat</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnError">TransactionAbortOnError</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevel">TransactionDefaultIsolationLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStart">TwoDigitCenturyStart</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlAction">UnsupportedDdlAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResult">UseCachedResult</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicy">WeekOfYearPolicy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStart">WeekStart</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ShowOutput`<sup>Required</sup> <a name="ShowOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.showOutput"></a>

```go
func ShowOutput() CurrentOrganizationAccountShowOutputList
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList">CurrentOrganizationAccountShowOutputList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeouts"></a>

```go
func Timeouts() CurrentOrganizationAccountTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference">CurrentOrganizationAccountTimeoutsOutputReference</a>

---

##### `AbortDetachedQueryInput`<sup>Optional</sup> <a name="AbortDetachedQueryInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQueryInput"></a>

```go
func AbortDetachedQueryInput() interface{}
```

- *Type:* interface{}

---

##### `ActivePythonProfilerInput`<sup>Optional</sup> <a name="ActivePythonProfilerInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfilerInput"></a>

```go
func ActivePythonProfilerInput() *string
```

- *Type:* *string

---

##### `AllowClientMfaCachingInput`<sup>Optional</sup> <a name="AllowClientMfaCachingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCachingInput"></a>

```go
func AllowClientMfaCachingInput() interface{}
```

- *Type:* interface{}

---

##### `AllowIdTokenInput`<sup>Optional</sup> <a name="AllowIdTokenInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdTokenInput"></a>

```go
func AllowIdTokenInput() interface{}
```

- *Type:* interface{}

---

##### `AutocommitInput`<sup>Optional</sup> <a name="AutocommitInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommitInput"></a>

```go
func AutocommitInput() interface{}
```

- *Type:* interface{}

---

##### `BaseLocationPrefixInput`<sup>Optional</sup> <a name="BaseLocationPrefixInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefixInput"></a>

```go
func BaseLocationPrefixInput() *string
```

- *Type:* *string

---

##### `BinaryInputFormatInput`<sup>Optional</sup> <a name="BinaryInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormatInput"></a>

```go
func BinaryInputFormatInput() *string
```

- *Type:* *string

---

##### `BinaryOutputFormatInput`<sup>Optional</sup> <a name="BinaryOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormatInput"></a>

```go
func BinaryOutputFormatInput() *string
```

- *Type:* *string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogInput"></a>

```go
func CatalogInput() *string
```

- *Type:* *string

---

##### `CatalogSyncInput`<sup>Optional</sup> <a name="CatalogSyncInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSyncInput"></a>

```go
func CatalogSyncInput() *string
```

- *Type:* *string

---

##### `ClientEnableLogInfoStatementParametersInput`<sup>Optional</sup> <a name="ClientEnableLogInfoStatementParametersInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParametersInput"></a>

```go
func ClientEnableLogInfoStatementParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ClientEncryptionKeySizeInput`<sup>Optional</sup> <a name="ClientEncryptionKeySizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySizeInput"></a>

```go
func ClientEncryptionKeySizeInput() *f64
```

- *Type:* *f64

---

##### `ClientMemoryLimitInput`<sup>Optional</sup> <a name="ClientMemoryLimitInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimitInput"></a>

```go
func ClientMemoryLimitInput() *f64
```

- *Type:* *f64

---

##### `ClientMetadataRequestUseConnectionCtxInput`<sup>Optional</sup> <a name="ClientMetadataRequestUseConnectionCtxInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtxInput"></a>

```go
func ClientMetadataRequestUseConnectionCtxInput() interface{}
```

- *Type:* interface{}

---

##### `ClientMetadataUseSessionDatabaseInput`<sup>Optional</sup> <a name="ClientMetadataUseSessionDatabaseInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabaseInput"></a>

```go
func ClientMetadataUseSessionDatabaseInput() interface{}
```

- *Type:* interface{}

---

##### `ClientPrefetchThreadsInput`<sup>Optional</sup> <a name="ClientPrefetchThreadsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreadsInput"></a>

```go
func ClientPrefetchThreadsInput() *f64
```

- *Type:* *f64

---

##### `ClientResultChunkSizeInput`<sup>Optional</sup> <a name="ClientResultChunkSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSizeInput"></a>

```go
func ClientResultChunkSizeInput() *f64
```

- *Type:* *f64

---

##### `ClientResultColumnCaseInsensitiveInput`<sup>Optional</sup> <a name="ClientResultColumnCaseInsensitiveInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitiveInput"></a>

```go
func ClientResultColumnCaseInsensitiveInput() interface{}
```

- *Type:* interface{}

---

##### `ClientSessionKeepAliveHeartbeatFrequencyInput`<sup>Optional</sup> <a name="ClientSessionKeepAliveHeartbeatFrequencyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput"></a>

```go
func ClientSessionKeepAliveHeartbeatFrequencyInput() *f64
```

- *Type:* *f64

---

##### `ClientSessionKeepAliveInput`<sup>Optional</sup> <a name="ClientSessionKeepAliveInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveInput"></a>

```go
func ClientSessionKeepAliveInput() interface{}
```

- *Type:* interface{}

---

##### `ClientTimestampTypeMappingInput`<sup>Optional</sup> <a name="ClientTimestampTypeMappingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMappingInput"></a>

```go
func ClientTimestampTypeMappingInput() *string
```

- *Type:* *string

---

##### `CommentInput`<sup>Optional</sup> <a name="CommentInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.commentInput"></a>

```go
func CommentInput() *string
```

- *Type:* *string

---

##### `CortexEnabledCrossRegionInput`<sup>Optional</sup> <a name="CortexEnabledCrossRegionInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegionInput"></a>

```go
func CortexEnabledCrossRegionInput() *string
```

- *Type:* *string

---

##### `CortexModelsAllowlistInput`<sup>Optional</sup> <a name="CortexModelsAllowlistInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlistInput"></a>

```go
func CortexModelsAllowlistInput() *string
```

- *Type:* *string

---

##### `CsvTimestampFormatInput`<sup>Optional</sup> <a name="CsvTimestampFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormatInput"></a>

```go
func CsvTimestampFormatInput() *string
```

- *Type:* *string

---

##### `DataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="DataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDaysInput"></a>

```go
func DataRetentionTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `DateInputFormatInput`<sup>Optional</sup> <a name="DateInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormatInput"></a>

```go
func DateInputFormatInput() *string
```

- *Type:* *string

---

##### `DateOutputFormatInput`<sup>Optional</sup> <a name="DateOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormatInput"></a>

```go
func DateOutputFormatInput() *string
```

- *Type:* *string

---

##### `DefaultDdlCollationInput`<sup>Optional</sup> <a name="DefaultDdlCollationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollationInput"></a>

```go
func DefaultDdlCollationInput() *string
```

- *Type:* *string

---

##### `DefaultNotebookComputePoolCpuInput`<sup>Optional</sup> <a name="DefaultNotebookComputePoolCpuInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpuInput"></a>

```go
func DefaultNotebookComputePoolCpuInput() *string
```

- *Type:* *string

---

##### `DefaultNotebookComputePoolGpuInput`<sup>Optional</sup> <a name="DefaultNotebookComputePoolGpuInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpuInput"></a>

```go
func DefaultNotebookComputePoolGpuInput() *string
```

- *Type:* *string

---

##### `DefaultNullOrderingInput`<sup>Optional</sup> <a name="DefaultNullOrderingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrderingInput"></a>

```go
func DefaultNullOrderingInput() *string
```

- *Type:* *string

---

##### `DefaultStreamlitNotebookWarehouseInput`<sup>Optional</sup> <a name="DefaultStreamlitNotebookWarehouseInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouseInput"></a>

```go
func DefaultStreamlitNotebookWarehouseInput() *string
```

- *Type:* *string

---

##### `DisableUiDownloadButtonInput`<sup>Optional</sup> <a name="DisableUiDownloadButtonInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButtonInput"></a>

```go
func DisableUiDownloadButtonInput() interface{}
```

- *Type:* interface{}

---

##### `DisableUserPrivilegeGrantsInput`<sup>Optional</sup> <a name="DisableUserPrivilegeGrantsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrantsInput"></a>

```go
func DisableUserPrivilegeGrantsInput() interface{}
```

- *Type:* interface{}

---

##### `EnableAutomaticSensitiveDataClassificationLogInput`<sup>Optional</sup> <a name="EnableAutomaticSensitiveDataClassificationLogInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLogInput"></a>

```go
func EnableAutomaticSensitiveDataClassificationLogInput() interface{}
```

- *Type:* interface{}

---

##### `EnableEgressCostOptimizerInput`<sup>Optional</sup> <a name="EnableEgressCostOptimizerInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizerInput"></a>

```go
func EnableEgressCostOptimizerInput() interface{}
```

- *Type:* interface{}

---

##### `EnableIdentifierFirstLoginInput`<sup>Optional</sup> <a name="EnableIdentifierFirstLoginInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLoginInput"></a>

```go
func EnableIdentifierFirstLoginInput() interface{}
```

- *Type:* interface{}

---

##### `EnableInternalStagesPrivatelinkInput`<sup>Optional</sup> <a name="EnableInternalStagesPrivatelinkInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelinkInput"></a>

```go
func EnableInternalStagesPrivatelinkInput() interface{}
```

- *Type:* interface{}

---

##### `EnableTriSecretAndRekeyOptOutForImageRepositoryInput`<sup>Optional</sup> <a name="EnableTriSecretAndRekeyOptOutForImageRepositoryInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput"></a>

```go
func EnableTriSecretAndRekeyOptOutForImageRepositoryInput() interface{}
```

- *Type:* interface{}

---

##### `EnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput`<sup>Optional</sup> <a name="EnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput"></a>

```go
func EnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput() interface{}
```

- *Type:* interface{}

---

##### `EnableUnhandledExceptionsReportingInput`<sup>Optional</sup> <a name="EnableUnhandledExceptionsReportingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReportingInput"></a>

```go
func EnableUnhandledExceptionsReportingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableUnloadPhysicalTypeOptimizationInput`<sup>Optional</sup> <a name="EnableUnloadPhysicalTypeOptimizationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimizationInput"></a>

```go
func EnableUnloadPhysicalTypeOptimizationInput() interface{}
```

- *Type:* interface{}

---

##### `EnableUnredactedQuerySyntaxErrorInput`<sup>Optional</sup> <a name="EnableUnredactedQuerySyntaxErrorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxErrorInput"></a>

```go
func EnableUnredactedQuerySyntaxErrorInput() interface{}
```

- *Type:* interface{}

---

##### `EnableUnredactedSecureObjectErrorInput`<sup>Optional</sup> <a name="EnableUnredactedSecureObjectErrorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectErrorInput"></a>

```go
func EnableUnredactedSecureObjectErrorInput() interface{}
```

- *Type:* interface{}

---

##### `EnforceNetworkRulesForInternalStagesInput`<sup>Optional</sup> <a name="EnforceNetworkRulesForInternalStagesInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStagesInput"></a>

```go
func EnforceNetworkRulesForInternalStagesInput() interface{}
```

- *Type:* interface{}

---

##### `ErrorOnNondeterministicMergeInput`<sup>Optional</sup> <a name="ErrorOnNondeterministicMergeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMergeInput"></a>

```go
func ErrorOnNondeterministicMergeInput() interface{}
```

- *Type:* interface{}

---

##### `ErrorOnNondeterministicUpdateInput`<sup>Optional</sup> <a name="ErrorOnNondeterministicUpdateInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdateInput"></a>

```go
func ErrorOnNondeterministicUpdateInput() interface{}
```

- *Type:* interface{}

---

##### `EventTableInput`<sup>Optional</sup> <a name="EventTableInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTableInput"></a>

```go
func EventTableInput() *string
```

- *Type:* *string

---

##### `ExternalOauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="ExternalOauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput"></a>

```go
func ExternalOauthAddPrivilegedRolesToBlockedListInput() interface{}
```

- *Type:* interface{}

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolumeInput"></a>

```go
func ExternalVolumeInput() *string
```

- *Type:* *string

---

##### `GeographyOutputFormatInput`<sup>Optional</sup> <a name="GeographyOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormatInput"></a>

```go
func GeographyOutputFormatInput() *string
```

- *Type:* *string

---

##### `GeometryOutputFormatInput`<sup>Optional</sup> <a name="GeometryOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormatInput"></a>

```go
func GeometryOutputFormatInput() *string
```

- *Type:* *string

---

##### `HybridTableLockTimeoutInput`<sup>Optional</sup> <a name="HybridTableLockTimeoutInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeoutInput"></a>

```go
func HybridTableLockTimeoutInput() *f64
```

- *Type:* *f64

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialReplicationSizeLimitInTbInput`<sup>Optional</sup> <a name="InitialReplicationSizeLimitInTbInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTbInput"></a>

```go
func InitialReplicationSizeLimitInTbInput() *string
```

- *Type:* *string

---

##### `JdbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="JdbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsIntInput"></a>

```go
func JdbcTreatDecimalAsIntInput() interface{}
```

- *Type:* interface{}

---

##### `JdbcTreatTimestampNtzAsUtcInput`<sup>Optional</sup> <a name="JdbcTreatTimestampNtzAsUtcInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtcInput"></a>

```go
func JdbcTreatTimestampNtzAsUtcInput() interface{}
```

- *Type:* interface{}

---

##### `JdbcUseSessionTimezoneInput`<sup>Optional</sup> <a name="JdbcUseSessionTimezoneInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezoneInput"></a>

```go
func JdbcUseSessionTimezoneInput() interface{}
```

- *Type:* interface{}

---

##### `JsonIndentInput`<sup>Optional</sup> <a name="JsonIndentInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndentInput"></a>

```go
func JsonIndentInput() *f64
```

- *Type:* *f64

---

##### `JsTreatIntegerAsBigintInput`<sup>Optional</sup> <a name="JsTreatIntegerAsBigintInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigintInput"></a>

```go
func JsTreatIntegerAsBigintInput() interface{}
```

- *Type:* interface{}

---

##### `ListingAutoFulfillmentReplicationRefreshScheduleInput`<sup>Optional</sup> <a name="ListingAutoFulfillmentReplicationRefreshScheduleInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput"></a>

```go
func ListingAutoFulfillmentReplicationRefreshScheduleInput() *string
```

- *Type:* *string

---

##### `LockTimeoutInput`<sup>Optional</sup> <a name="LockTimeoutInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeoutInput"></a>

```go
func LockTimeoutInput() *f64
```

- *Type:* *f64

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevelInput"></a>

```go
func LogLevelInput() *string
```

- *Type:* *string

---

##### `MaxConcurrencyLevelInput`<sup>Optional</sup> <a name="MaxConcurrencyLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevelInput"></a>

```go
func MaxConcurrencyLevelInput() *f64
```

- *Type:* *f64

---

##### `MaxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDaysInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDaysInput"></a>

```go
func MaxDataExtensionTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `MetricLevelInput`<sup>Optional</sup> <a name="MetricLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevelInput"></a>

```go
func MetricLevelInput() *string
```

- *Type:* *string

---

##### `MinDataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="MinDataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDaysInput"></a>

```go
func MinDataRetentionTimeInDaysInput() *f64
```

- *Type:* *f64

---

##### `MultiStatementCountInput`<sup>Optional</sup> <a name="MultiStatementCountInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCountInput"></a>

```go
func MultiStatementCountInput() *f64
```

- *Type:* *f64

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NetworkPolicyInput`<sup>Optional</sup> <a name="NetworkPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicyInput"></a>

```go
func NetworkPolicyInput() *string
```

- *Type:* *string

---

##### `NoorderSequenceAsDefaultInput`<sup>Optional</sup> <a name="NoorderSequenceAsDefaultInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefaultInput"></a>

```go
func NoorderSequenceAsDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `OauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="OauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedListInput"></a>

```go
func OauthAddPrivilegedRolesToBlockedListInput() interface{}
```

- *Type:* interface{}

---

##### `OdbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="OdbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsIntInput"></a>

```go
func OdbcTreatDecimalAsIntInput() interface{}
```

- *Type:* interface{}

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicyInput"></a>

```go
func PasswordPolicyInput() *string
```

- *Type:* *string

---

##### `PeriodicDataRekeyingInput`<sup>Optional</sup> <a name="PeriodicDataRekeyingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeyingInput"></a>

```go
func PeriodicDataRekeyingInput() interface{}
```

- *Type:* interface{}

---

##### `PipeExecutionPausedInput`<sup>Optional</sup> <a name="PipeExecutionPausedInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPausedInput"></a>

```go
func PipeExecutionPausedInput() interface{}
```

- *Type:* interface{}

---

##### `PreventUnloadToInlineUrlInput`<sup>Optional</sup> <a name="PreventUnloadToInlineUrlInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrlInput"></a>

```go
func PreventUnloadToInlineUrlInput() interface{}
```

- *Type:* interface{}

---

##### `PreventUnloadToInternalStagesInput`<sup>Optional</sup> <a name="PreventUnloadToInternalStagesInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStagesInput"></a>

```go
func PreventUnloadToInternalStagesInput() interface{}
```

- *Type:* interface{}

---

##### `PythonProfilerModulesInput`<sup>Optional</sup> <a name="PythonProfilerModulesInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModulesInput"></a>

```go
func PythonProfilerModulesInput() *string
```

- *Type:* *string

---

##### `PythonProfilerTargetStageInput`<sup>Optional</sup> <a name="PythonProfilerTargetStageInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStageInput"></a>

```go
func PythonProfilerTargetStageInput() *string
```

- *Type:* *string

---

##### `QueryTagInput`<sup>Optional</sup> <a name="QueryTagInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTagInput"></a>

```go
func QueryTagInput() *string
```

- *Type:* *string

---

##### `QuotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCaseInput"></a>

```go
func QuotedIdentifiersIgnoreCaseInput() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharactersInput"></a>

```go
func ReplaceInvalidCharactersInput() interface{}
```

- *Type:* interface{}

---

##### `RequireStorageIntegrationForStageCreationInput`<sup>Optional</sup> <a name="RequireStorageIntegrationForStageCreationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreationInput"></a>

```go
func RequireStorageIntegrationForStageCreationInput() interface{}
```

- *Type:* interface{}

---

##### `RequireStorageIntegrationForStageOperationInput`<sup>Optional</sup> <a name="RequireStorageIntegrationForStageOperationInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperationInput"></a>

```go
func RequireStorageIntegrationForStageOperationInput() interface{}
```

- *Type:* interface{}

---

##### `ResourceMonitorInput`<sup>Optional</sup> <a name="ResourceMonitorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitorInput"></a>

```go
func ResourceMonitorInput() *string
```

- *Type:* *string

---

##### `RowsPerResultsetInput`<sup>Optional</sup> <a name="RowsPerResultsetInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultsetInput"></a>

```go
func RowsPerResultsetInput() *f64
```

- *Type:* *f64

---

##### `S3StageVpceDnsNameInput`<sup>Optional</sup> <a name="S3StageVpceDnsNameInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsNameInput"></a>

```go
func S3StageVpceDnsNameInput() *string
```

- *Type:* *string

---

##### `SamlIdentityProviderInput`<sup>Optional</sup> <a name="SamlIdentityProviderInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProviderInput"></a>

```go
func SamlIdentityProviderInput() *string
```

- *Type:* *string

---

##### `SearchPathInput`<sup>Optional</sup> <a name="SearchPathInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPathInput"></a>

```go
func SearchPathInput() *string
```

- *Type:* *string

---

##### `ServerlessTaskMaxStatementSizeInput`<sup>Optional</sup> <a name="ServerlessTaskMaxStatementSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSizeInput"></a>

```go
func ServerlessTaskMaxStatementSizeInput() *string
```

- *Type:* *string

---

##### `ServerlessTaskMinStatementSizeInput`<sup>Optional</sup> <a name="ServerlessTaskMinStatementSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSizeInput"></a>

```go
func ServerlessTaskMinStatementSizeInput() *string
```

- *Type:* *string

---

##### `SessionPolicyInput`<sup>Optional</sup> <a name="SessionPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicyInput"></a>

```go
func SessionPolicyInput() *string
```

- *Type:* *string

---

##### `SimulatedDataSharingConsumerInput`<sup>Optional</sup> <a name="SimulatedDataSharingConsumerInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumerInput"></a>

```go
func SimulatedDataSharingConsumerInput() *string
```

- *Type:* *string

---

##### `SsoLoginPageInput`<sup>Optional</sup> <a name="SsoLoginPageInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPageInput"></a>

```go
func SsoLoginPageInput() interface{}
```

- *Type:* interface{}

---

##### `StatementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSecondsInput"></a>

```go
func StatementQueuedTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `StatementTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSecondsInput"></a>

```go
func StatementTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `StorageSerializationPolicyInput`<sup>Optional</sup> <a name="StorageSerializationPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicyInput"></a>

```go
func StorageSerializationPolicyInput() *string
```

- *Type:* *string

---

##### `StrictJsonOutputInput`<sup>Optional</sup> <a name="StrictJsonOutputInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutputInput"></a>

```go
func StrictJsonOutputInput() interface{}
```

- *Type:* interface{}

---

##### `SuspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailuresInput"></a>

```go
func SuspendTaskAfterNumFailuresInput() *f64
```

- *Type:* *f64

---

##### `TaskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="TaskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttemptsInput"></a>

```go
func TaskAutoRetryAttemptsInput() *f64
```

- *Type:* *f64

---

##### `TimeInputFormatInput`<sup>Optional</sup> <a name="TimeInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormatInput"></a>

```go
func TimeInputFormatInput() *string
```

- *Type:* *string

---

##### `TimeOutputFormatInput`<sup>Optional</sup> <a name="TimeOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormatInput"></a>

```go
func TimeOutputFormatInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `TimestampDayIsAlways24HInput`<sup>Optional</sup> <a name="TimestampDayIsAlways24HInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24HInput"></a>

```go
func TimestampDayIsAlways24HInput() interface{}
```

- *Type:* interface{}

---

##### `TimestampInputFormatInput`<sup>Optional</sup> <a name="TimestampInputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormatInput"></a>

```go
func TimestampInputFormatInput() *string
```

- *Type:* *string

---

##### `TimestampLtzOutputFormatInput`<sup>Optional</sup> <a name="TimestampLtzOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormatInput"></a>

```go
func TimestampLtzOutputFormatInput() *string
```

- *Type:* *string

---

##### `TimestampNtzOutputFormatInput`<sup>Optional</sup> <a name="TimestampNtzOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormatInput"></a>

```go
func TimestampNtzOutputFormatInput() *string
```

- *Type:* *string

---

##### `TimestampOutputFormatInput`<sup>Optional</sup> <a name="TimestampOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormatInput"></a>

```go
func TimestampOutputFormatInput() *string
```

- *Type:* *string

---

##### `TimestampTypeMappingInput`<sup>Optional</sup> <a name="TimestampTypeMappingInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMappingInput"></a>

```go
func TimestampTypeMappingInput() *string
```

- *Type:* *string

---

##### `TimestampTzOutputFormatInput`<sup>Optional</sup> <a name="TimestampTzOutputFormatInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormatInput"></a>

```go
func TimestampTzOutputFormatInput() *string
```

- *Type:* *string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `TraceLevelInput`<sup>Optional</sup> <a name="TraceLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevelInput"></a>

```go
func TraceLevelInput() *string
```

- *Type:* *string

---

##### `TransactionAbortOnErrorInput`<sup>Optional</sup> <a name="TransactionAbortOnErrorInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnErrorInput"></a>

```go
func TransactionAbortOnErrorInput() interface{}
```

- *Type:* interface{}

---

##### `TransactionDefaultIsolationLevelInput`<sup>Optional</sup> <a name="TransactionDefaultIsolationLevelInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevelInput"></a>

```go
func TransactionDefaultIsolationLevelInput() *string
```

- *Type:* *string

---

##### `TwoDigitCenturyStartInput`<sup>Optional</sup> <a name="TwoDigitCenturyStartInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStartInput"></a>

```go
func TwoDigitCenturyStartInput() *f64
```

- *Type:* *f64

---

##### `UnsupportedDdlActionInput`<sup>Optional</sup> <a name="UnsupportedDdlActionInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlActionInput"></a>

```go
func UnsupportedDdlActionInput() *string
```

- *Type:* *string

---

##### `UseCachedResultInput`<sup>Optional</sup> <a name="UseCachedResultInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResultInput"></a>

```go
func UseCachedResultInput() interface{}
```

- *Type:* interface{}

---

##### `UserTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSizeInput"></a>

```go
func UserTaskManagedInitialWarehouseSizeInput() *string
```

- *Type:* *string

---

##### `UserTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```go
func UserTaskMinimumTriggerIntervalInSecondsInput() *f64
```

- *Type:* *f64

---

##### `UserTaskTimeoutMsInput`<sup>Optional</sup> <a name="UserTaskTimeoutMsInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMsInput"></a>

```go
func UserTaskTimeoutMsInput() *f64
```

- *Type:* *f64

---

##### `WeekOfYearPolicyInput`<sup>Optional</sup> <a name="WeekOfYearPolicyInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicyInput"></a>

```go
func WeekOfYearPolicyInput() *f64
```

- *Type:* *f64

---

##### `WeekStartInput`<sup>Optional</sup> <a name="WeekStartInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStartInput"></a>

```go
func WeekStartInput() *f64
```

- *Type:* *f64

---

##### `AbortDetachedQuery`<sup>Required</sup> <a name="AbortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.abortDetachedQuery"></a>

```go
func AbortDetachedQuery() interface{}
```

- *Type:* interface{}

---

##### `ActivePythonProfiler`<sup>Required</sup> <a name="ActivePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.activePythonProfiler"></a>

```go
func ActivePythonProfiler() *string
```

- *Type:* *string

---

##### `AllowClientMfaCaching`<sup>Required</sup> <a name="AllowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowClientMfaCaching"></a>

```go
func AllowClientMfaCaching() interface{}
```

- *Type:* interface{}

---

##### `AllowIdToken`<sup>Required</sup> <a name="AllowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.allowIdToken"></a>

```go
func AllowIdToken() interface{}
```

- *Type:* interface{}

---

##### `Autocommit`<sup>Required</sup> <a name="Autocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.autocommit"></a>

```go
func Autocommit() interface{}
```

- *Type:* interface{}

---

##### `BaseLocationPrefix`<sup>Required</sup> <a name="BaseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.baseLocationPrefix"></a>

```go
func BaseLocationPrefix() *string
```

- *Type:* *string

---

##### `BinaryInputFormat`<sup>Required</sup> <a name="BinaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryInputFormat"></a>

```go
func BinaryInputFormat() *string
```

- *Type:* *string

---

##### `BinaryOutputFormat`<sup>Required</sup> <a name="BinaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.binaryOutputFormat"></a>

```go
func BinaryOutputFormat() *string
```

- *Type:* *string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalog"></a>

```go
func Catalog() *string
```

- *Type:* *string

---

##### `CatalogSync`<sup>Required</sup> <a name="CatalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.catalogSync"></a>

```go
func CatalogSync() *string
```

- *Type:* *string

---

##### `ClientEnableLogInfoStatementParameters`<sup>Required</sup> <a name="ClientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEnableLogInfoStatementParameters"></a>

```go
func ClientEnableLogInfoStatementParameters() interface{}
```

- *Type:* interface{}

---

##### `ClientEncryptionKeySize`<sup>Required</sup> <a name="ClientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientEncryptionKeySize"></a>

```go
func ClientEncryptionKeySize() *f64
```

- *Type:* *f64

---

##### `ClientMemoryLimit`<sup>Required</sup> <a name="ClientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMemoryLimit"></a>

```go
func ClientMemoryLimit() *f64
```

- *Type:* *f64

---

##### `ClientMetadataRequestUseConnectionCtx`<sup>Required</sup> <a name="ClientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataRequestUseConnectionCtx"></a>

```go
func ClientMetadataRequestUseConnectionCtx() interface{}
```

- *Type:* interface{}

---

##### `ClientMetadataUseSessionDatabase`<sup>Required</sup> <a name="ClientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientMetadataUseSessionDatabase"></a>

```go
func ClientMetadataUseSessionDatabase() interface{}
```

- *Type:* interface{}

---

##### `ClientPrefetchThreads`<sup>Required</sup> <a name="ClientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientPrefetchThreads"></a>

```go
func ClientPrefetchThreads() *f64
```

- *Type:* *f64

---

##### `ClientResultChunkSize`<sup>Required</sup> <a name="ClientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultChunkSize"></a>

```go
func ClientResultChunkSize() *f64
```

- *Type:* *f64

---

##### `ClientResultColumnCaseInsensitive`<sup>Required</sup> <a name="ClientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientResultColumnCaseInsensitive"></a>

```go
func ClientResultColumnCaseInsensitive() interface{}
```

- *Type:* interface{}

---

##### `ClientSessionKeepAlive`<sup>Required</sup> <a name="ClientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAlive"></a>

```go
func ClientSessionKeepAlive() interface{}
```

- *Type:* interface{}

---

##### `ClientSessionKeepAliveHeartbeatFrequency`<sup>Required</sup> <a name="ClientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```go
func ClientSessionKeepAliveHeartbeatFrequency() *f64
```

- *Type:* *f64

---

##### `ClientTimestampTypeMapping`<sup>Required</sup> <a name="ClientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.clientTimestampTypeMapping"></a>

```go
func ClientTimestampTypeMapping() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `CortexEnabledCrossRegion`<sup>Required</sup> <a name="CortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexEnabledCrossRegion"></a>

```go
func CortexEnabledCrossRegion() *string
```

- *Type:* *string

---

##### `CortexModelsAllowlist`<sup>Required</sup> <a name="CortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.cortexModelsAllowlist"></a>

```go
func CortexModelsAllowlist() *string
```

- *Type:* *string

---

##### `CsvTimestampFormat`<sup>Required</sup> <a name="CsvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.csvTimestampFormat"></a>

```go
func CsvTimestampFormat() *string
```

- *Type:* *string

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dataRetentionTimeInDays"></a>

```go
func DataRetentionTimeInDays() *f64
```

- *Type:* *f64

---

##### `DateInputFormat`<sup>Required</sup> <a name="DateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateInputFormat"></a>

```go
func DateInputFormat() *string
```

- *Type:* *string

---

##### `DateOutputFormat`<sup>Required</sup> <a name="DateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.dateOutputFormat"></a>

```go
func DateOutputFormat() *string
```

- *Type:* *string

---

##### `DefaultDdlCollation`<sup>Required</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultDdlCollation"></a>

```go
func DefaultDdlCollation() *string
```

- *Type:* *string

---

##### `DefaultNotebookComputePoolCpu`<sup>Required</sup> <a name="DefaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolCpu"></a>

```go
func DefaultNotebookComputePoolCpu() *string
```

- *Type:* *string

---

##### `DefaultNotebookComputePoolGpu`<sup>Required</sup> <a name="DefaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNotebookComputePoolGpu"></a>

```go
func DefaultNotebookComputePoolGpu() *string
```

- *Type:* *string

---

##### `DefaultNullOrdering`<sup>Required</sup> <a name="DefaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultNullOrdering"></a>

```go
func DefaultNullOrdering() *string
```

- *Type:* *string

---

##### `DefaultStreamlitNotebookWarehouse`<sup>Required</sup> <a name="DefaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.defaultStreamlitNotebookWarehouse"></a>

```go
func DefaultStreamlitNotebookWarehouse() *string
```

- *Type:* *string

---

##### `DisableUiDownloadButton`<sup>Required</sup> <a name="DisableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUiDownloadButton"></a>

```go
func DisableUiDownloadButton() interface{}
```

- *Type:* interface{}

---

##### `DisableUserPrivilegeGrants`<sup>Required</sup> <a name="DisableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.disableUserPrivilegeGrants"></a>

```go
func DisableUserPrivilegeGrants() interface{}
```

- *Type:* interface{}

---

##### `EnableAutomaticSensitiveDataClassificationLog`<sup>Required</sup> <a name="EnableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableAutomaticSensitiveDataClassificationLog"></a>

```go
func EnableAutomaticSensitiveDataClassificationLog() interface{}
```

- *Type:* interface{}

---

##### `EnableEgressCostOptimizer`<sup>Required</sup> <a name="EnableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableEgressCostOptimizer"></a>

```go
func EnableEgressCostOptimizer() interface{}
```

- *Type:* interface{}

---

##### `EnableIdentifierFirstLogin`<sup>Required</sup> <a name="EnableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableIdentifierFirstLogin"></a>

```go
func EnableIdentifierFirstLogin() interface{}
```

- *Type:* interface{}

---

##### `EnableInternalStagesPrivatelink`<sup>Required</sup> <a name="EnableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableInternalStagesPrivatelink"></a>

```go
func EnableInternalStagesPrivatelink() interface{}
```

- *Type:* interface{}

---

##### `EnableTriSecretAndRekeyOptOutForImageRepository`<sup>Required</sup> <a name="EnableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```go
func EnableTriSecretAndRekeyOptOutForImageRepository() interface{}
```

- *Type:* interface{}

---

##### `EnableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Required</sup> <a name="EnableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```go
func EnableTriSecretAndRekeyOptOutForSpcsBlockStorage() interface{}
```

- *Type:* interface{}

---

##### `EnableUnhandledExceptionsReporting`<sup>Required</sup> <a name="EnableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnhandledExceptionsReporting"></a>

```go
func EnableUnhandledExceptionsReporting() interface{}
```

- *Type:* interface{}

---

##### `EnableUnloadPhysicalTypeOptimization`<sup>Required</sup> <a name="EnableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnloadPhysicalTypeOptimization"></a>

```go
func EnableUnloadPhysicalTypeOptimization() interface{}
```

- *Type:* interface{}

---

##### `EnableUnredactedQuerySyntaxError`<sup>Required</sup> <a name="EnableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedQuerySyntaxError"></a>

```go
func EnableUnredactedQuerySyntaxError() interface{}
```

- *Type:* interface{}

---

##### `EnableUnredactedSecureObjectError`<sup>Required</sup> <a name="EnableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enableUnredactedSecureObjectError"></a>

```go
func EnableUnredactedSecureObjectError() interface{}
```

- *Type:* interface{}

---

##### `EnforceNetworkRulesForInternalStages`<sup>Required</sup> <a name="EnforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.enforceNetworkRulesForInternalStages"></a>

```go
func EnforceNetworkRulesForInternalStages() interface{}
```

- *Type:* interface{}

---

##### `ErrorOnNondeterministicMerge`<sup>Required</sup> <a name="ErrorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicMerge"></a>

```go
func ErrorOnNondeterministicMerge() interface{}
```

- *Type:* interface{}

---

##### `ErrorOnNondeterministicUpdate`<sup>Required</sup> <a name="ErrorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.errorOnNondeterministicUpdate"></a>

```go
func ErrorOnNondeterministicUpdate() interface{}
```

- *Type:* interface{}

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.eventTable"></a>

```go
func EventTable() *string
```

- *Type:* *string

---

##### `ExternalOauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="ExternalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```go
func ExternalOauthAddPrivilegedRolesToBlockedList() interface{}
```

- *Type:* interface{}

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.externalVolume"></a>

```go
func ExternalVolume() *string
```

- *Type:* *string

---

##### `GeographyOutputFormat`<sup>Required</sup> <a name="GeographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geographyOutputFormat"></a>

```go
func GeographyOutputFormat() *string
```

- *Type:* *string

---

##### `GeometryOutputFormat`<sup>Required</sup> <a name="GeometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.geometryOutputFormat"></a>

```go
func GeometryOutputFormat() *string
```

- *Type:* *string

---

##### `HybridTableLockTimeout`<sup>Required</sup> <a name="HybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.hybridTableLockTimeout"></a>

```go
func HybridTableLockTimeout() *f64
```

- *Type:* *f64

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialReplicationSizeLimitInTb`<sup>Required</sup> <a name="InitialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.initialReplicationSizeLimitInTb"></a>

```go
func InitialReplicationSizeLimitInTb() *string
```

- *Type:* *string

---

##### `JdbcTreatDecimalAsInt`<sup>Required</sup> <a name="JdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatDecimalAsInt"></a>

```go
func JdbcTreatDecimalAsInt() interface{}
```

- *Type:* interface{}

---

##### `JdbcTreatTimestampNtzAsUtc`<sup>Required</sup> <a name="JdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcTreatTimestampNtzAsUtc"></a>

```go
func JdbcTreatTimestampNtzAsUtc() interface{}
```

- *Type:* interface{}

---

##### `JdbcUseSessionTimezone`<sup>Required</sup> <a name="JdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jdbcUseSessionTimezone"></a>

```go
func JdbcUseSessionTimezone() interface{}
```

- *Type:* interface{}

---

##### `JsonIndent`<sup>Required</sup> <a name="JsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsonIndent"></a>

```go
func JsonIndent() *f64
```

- *Type:* *f64

---

##### `JsTreatIntegerAsBigint`<sup>Required</sup> <a name="JsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.jsTreatIntegerAsBigint"></a>

```go
func JsTreatIntegerAsBigint() interface{}
```

- *Type:* interface{}

---

##### `ListingAutoFulfillmentReplicationRefreshSchedule`<sup>Required</sup> <a name="ListingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```go
func ListingAutoFulfillmentReplicationRefreshSchedule() *string
```

- *Type:* *string

---

##### `LockTimeout`<sup>Required</sup> <a name="LockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.lockTimeout"></a>

```go
func LockTimeout() *f64
```

- *Type:* *f64

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.logLevel"></a>

```go
func LogLevel() *string
```

- *Type:* *string

---

##### `MaxConcurrencyLevel`<sup>Required</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxConcurrencyLevel"></a>

```go
func MaxConcurrencyLevel() *f64
```

- *Type:* *f64

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.maxDataExtensionTimeInDays"></a>

```go
func MaxDataExtensionTimeInDays() *f64
```

- *Type:* *f64

---

##### `MetricLevel`<sup>Required</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.metricLevel"></a>

```go
func MetricLevel() *string
```

- *Type:* *string

---

##### `MinDataRetentionTimeInDays`<sup>Required</sup> <a name="MinDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.minDataRetentionTimeInDays"></a>

```go
func MinDataRetentionTimeInDays() *f64
```

- *Type:* *f64

---

##### `MultiStatementCount`<sup>Required</sup> <a name="MultiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.multiStatementCount"></a>

```go
func MultiStatementCount() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.networkPolicy"></a>

```go
func NetworkPolicy() *string
```

- *Type:* *string

---

##### `NoorderSequenceAsDefault`<sup>Required</sup> <a name="NoorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.noorderSequenceAsDefault"></a>

```go
func NoorderSequenceAsDefault() interface{}
```

- *Type:* interface{}

---

##### `OauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="OauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.oauthAddPrivilegedRolesToBlockedList"></a>

```go
func OauthAddPrivilegedRolesToBlockedList() interface{}
```

- *Type:* interface{}

---

##### `OdbcTreatDecimalAsInt`<sup>Required</sup> <a name="OdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.odbcTreatDecimalAsInt"></a>

```go
func OdbcTreatDecimalAsInt() interface{}
```

- *Type:* interface{}

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.passwordPolicy"></a>

```go
func PasswordPolicy() *string
```

- *Type:* *string

---

##### `PeriodicDataRekeying`<sup>Required</sup> <a name="PeriodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.periodicDataRekeying"></a>

```go
func PeriodicDataRekeying() interface{}
```

- *Type:* interface{}

---

##### `PipeExecutionPaused`<sup>Required</sup> <a name="PipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pipeExecutionPaused"></a>

```go
func PipeExecutionPaused() interface{}
```

- *Type:* interface{}

---

##### `PreventUnloadToInlineUrl`<sup>Required</sup> <a name="PreventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInlineUrl"></a>

```go
func PreventUnloadToInlineUrl() interface{}
```

- *Type:* interface{}

---

##### `PreventUnloadToInternalStages`<sup>Required</sup> <a name="PreventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.preventUnloadToInternalStages"></a>

```go
func PreventUnloadToInternalStages() interface{}
```

- *Type:* interface{}

---

##### `PythonProfilerModules`<sup>Required</sup> <a name="PythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerModules"></a>

```go
func PythonProfilerModules() *string
```

- *Type:* *string

---

##### `PythonProfilerTargetStage`<sup>Required</sup> <a name="PythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.pythonProfilerTargetStage"></a>

```go
func PythonProfilerTargetStage() *string
```

- *Type:* *string

---

##### `QueryTag`<sup>Required</sup> <a name="QueryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.queryTag"></a>

```go
func QueryTag() *string
```

- *Type:* *string

---

##### `QuotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.quotedIdentifiersIgnoreCase"></a>

```go
func QuotedIdentifiersIgnoreCase() interface{}
```

- *Type:* interface{}

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.replaceInvalidCharacters"></a>

```go
func ReplaceInvalidCharacters() interface{}
```

- *Type:* interface{}

---

##### `RequireStorageIntegrationForStageCreation`<sup>Required</sup> <a name="RequireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageCreation"></a>

```go
func RequireStorageIntegrationForStageCreation() interface{}
```

- *Type:* interface{}

---

##### `RequireStorageIntegrationForStageOperation`<sup>Required</sup> <a name="RequireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.requireStorageIntegrationForStageOperation"></a>

```go
func RequireStorageIntegrationForStageOperation() interface{}
```

- *Type:* interface{}

---

##### `ResourceMonitor`<sup>Required</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.resourceMonitor"></a>

```go
func ResourceMonitor() *string
```

- *Type:* *string

---

##### `RowsPerResultset`<sup>Required</sup> <a name="RowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.rowsPerResultset"></a>

```go
func RowsPerResultset() *f64
```

- *Type:* *f64

---

##### `S3StageVpceDnsName`<sup>Required</sup> <a name="S3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.s3StageVpceDnsName"></a>

```go
func S3StageVpceDnsName() *string
```

- *Type:* *string

---

##### `SamlIdentityProvider`<sup>Required</sup> <a name="SamlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.samlIdentityProvider"></a>

```go
func SamlIdentityProvider() *string
```

- *Type:* *string

---

##### `SearchPath`<sup>Required</sup> <a name="SearchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.searchPath"></a>

```go
func SearchPath() *string
```

- *Type:* *string

---

##### `ServerlessTaskMaxStatementSize`<sup>Required</sup> <a name="ServerlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMaxStatementSize"></a>

```go
func ServerlessTaskMaxStatementSize() *string
```

- *Type:* *string

---

##### `ServerlessTaskMinStatementSize`<sup>Required</sup> <a name="ServerlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.serverlessTaskMinStatementSize"></a>

```go
func ServerlessTaskMinStatementSize() *string
```

- *Type:* *string

---

##### `SessionPolicy`<sup>Required</sup> <a name="SessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.sessionPolicy"></a>

```go
func SessionPolicy() *string
```

- *Type:* *string

---

##### `SimulatedDataSharingConsumer`<sup>Required</sup> <a name="SimulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.simulatedDataSharingConsumer"></a>

```go
func SimulatedDataSharingConsumer() *string
```

- *Type:* *string

---

##### `SsoLoginPage`<sup>Required</sup> <a name="SsoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.ssoLoginPage"></a>

```go
func SsoLoginPage() interface{}
```

- *Type:* interface{}

---

##### `StatementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementQueuedTimeoutInSeconds"></a>

```go
func StatementQueuedTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `StatementTimeoutInSeconds`<sup>Required</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.statementTimeoutInSeconds"></a>

```go
func StatementTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `StorageSerializationPolicy`<sup>Required</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.storageSerializationPolicy"></a>

```go
func StorageSerializationPolicy() *string
```

- *Type:* *string

---

##### `StrictJsonOutput`<sup>Required</sup> <a name="StrictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.strictJsonOutput"></a>

```go
func StrictJsonOutput() interface{}
```

- *Type:* interface{}

---

##### `SuspendTaskAfterNumFailures`<sup>Required</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.suspendTaskAfterNumFailures"></a>

```go
func SuspendTaskAfterNumFailures() *f64
```

- *Type:* *f64

---

##### `TaskAutoRetryAttempts`<sup>Required</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.taskAutoRetryAttempts"></a>

```go
func TaskAutoRetryAttempts() *f64
```

- *Type:* *f64

---

##### `TimeInputFormat`<sup>Required</sup> <a name="TimeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeInputFormat"></a>

```go
func TimeInputFormat() *string
```

- *Type:* *string

---

##### `TimeOutputFormat`<sup>Required</sup> <a name="TimeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timeOutputFormat"></a>

```go
func TimeOutputFormat() *string
```

- *Type:* *string

---

##### `TimestampDayIsAlways24H`<sup>Required</sup> <a name="TimestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampDayIsAlways24H"></a>

```go
func TimestampDayIsAlways24H() interface{}
```

- *Type:* interface{}

---

##### `TimestampInputFormat`<sup>Required</sup> <a name="TimestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampInputFormat"></a>

```go
func TimestampInputFormat() *string
```

- *Type:* *string

---

##### `TimestampLtzOutputFormat`<sup>Required</sup> <a name="TimestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampLtzOutputFormat"></a>

```go
func TimestampLtzOutputFormat() *string
```

- *Type:* *string

---

##### `TimestampNtzOutputFormat`<sup>Required</sup> <a name="TimestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampNtzOutputFormat"></a>

```go
func TimestampNtzOutputFormat() *string
```

- *Type:* *string

---

##### `TimestampOutputFormat`<sup>Required</sup> <a name="TimestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampOutputFormat"></a>

```go
func TimestampOutputFormat() *string
```

- *Type:* *string

---

##### `TimestampTypeMapping`<sup>Required</sup> <a name="TimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTypeMapping"></a>

```go
func TimestampTypeMapping() *string
```

- *Type:* *string

---

##### `TimestampTzOutputFormat`<sup>Required</sup> <a name="TimestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timestampTzOutputFormat"></a>

```go
func TimestampTzOutputFormat() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `TraceLevel`<sup>Required</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.traceLevel"></a>

```go
func TraceLevel() *string
```

- *Type:* *string

---

##### `TransactionAbortOnError`<sup>Required</sup> <a name="TransactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionAbortOnError"></a>

```go
func TransactionAbortOnError() interface{}
```

- *Type:* interface{}

---

##### `TransactionDefaultIsolationLevel`<sup>Required</sup> <a name="TransactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.transactionDefaultIsolationLevel"></a>

```go
func TransactionDefaultIsolationLevel() *string
```

- *Type:* *string

---

##### `TwoDigitCenturyStart`<sup>Required</sup> <a name="TwoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.twoDigitCenturyStart"></a>

```go
func TwoDigitCenturyStart() *f64
```

- *Type:* *f64

---

##### `UnsupportedDdlAction`<sup>Required</sup> <a name="UnsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.unsupportedDdlAction"></a>

```go
func UnsupportedDdlAction() *string
```

- *Type:* *string

---

##### `UseCachedResult`<sup>Required</sup> <a name="UseCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.useCachedResult"></a>

```go
func UseCachedResult() interface{}
```

- *Type:* interface{}

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskManagedInitialWarehouseSize"></a>

```go
func UserTaskManagedInitialWarehouseSize() *string
```

- *Type:* *string

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```go
func UserTaskMinimumTriggerIntervalInSeconds() *f64
```

- *Type:* *f64

---

##### `UserTaskTimeoutMs`<sup>Required</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.userTaskTimeoutMs"></a>

```go
func UserTaskTimeoutMs() *f64
```

- *Type:* *f64

---

##### `WeekOfYearPolicy`<sup>Required</sup> <a name="WeekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekOfYearPolicy"></a>

```go
func WeekOfYearPolicy() *f64
```

- *Type:* *f64

---

##### `WeekStart`<sup>Required</sup> <a name="WeekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.weekStart"></a>

```go
func WeekStart() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccount.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CurrentOrganizationAccountConfig <a name="CurrentOrganizationAccountConfig" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

&currentorganizationaccount.CurrentOrganizationAccountConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	AbortDetachedQuery: interface{},
	ActivePythonProfiler: *string,
	AllowClientMfaCaching: interface{},
	AllowIdToken: interface{},
	Autocommit: interface{},
	BaseLocationPrefix: *string,
	BinaryInputFormat: *string,
	BinaryOutputFormat: *string,
	Catalog: *string,
	CatalogSync: *string,
	ClientEnableLogInfoStatementParameters: interface{},
	ClientEncryptionKeySize: *f64,
	ClientMemoryLimit: *f64,
	ClientMetadataRequestUseConnectionCtx: interface{},
	ClientMetadataUseSessionDatabase: interface{},
	ClientPrefetchThreads: *f64,
	ClientResultChunkSize: *f64,
	ClientResultColumnCaseInsensitive: interface{},
	ClientSessionKeepAlive: interface{},
	ClientSessionKeepAliveHeartbeatFrequency: *f64,
	ClientTimestampTypeMapping: *string,
	Comment: *string,
	CortexEnabledCrossRegion: *string,
	CortexModelsAllowlist: *string,
	CsvTimestampFormat: *string,
	DataRetentionTimeInDays: *f64,
	DateInputFormat: *string,
	DateOutputFormat: *string,
	DefaultDdlCollation: *string,
	DefaultNotebookComputePoolCpu: *string,
	DefaultNotebookComputePoolGpu: *string,
	DefaultNullOrdering: *string,
	DefaultStreamlitNotebookWarehouse: *string,
	DisableUiDownloadButton: interface{},
	DisableUserPrivilegeGrants: interface{},
	EnableAutomaticSensitiveDataClassificationLog: interface{},
	EnableEgressCostOptimizer: interface{},
	EnableIdentifierFirstLogin: interface{},
	EnableInternalStagesPrivatelink: interface{},
	EnableTriSecretAndRekeyOptOutForImageRepository: interface{},
	EnableTriSecretAndRekeyOptOutForSpcsBlockStorage: interface{},
	EnableUnhandledExceptionsReporting: interface{},
	EnableUnloadPhysicalTypeOptimization: interface{},
	EnableUnredactedQuerySyntaxError: interface{},
	EnableUnredactedSecureObjectError: interface{},
	EnforceNetworkRulesForInternalStages: interface{},
	ErrorOnNondeterministicMerge: interface{},
	ErrorOnNondeterministicUpdate: interface{},
	EventTable: *string,
	ExternalOauthAddPrivilegedRolesToBlockedList: interface{},
	ExternalVolume: *string,
	GeographyOutputFormat: *string,
	GeometryOutputFormat: *string,
	HybridTableLockTimeout: *f64,
	Id: *string,
	InitialReplicationSizeLimitInTb: *string,
	JdbcTreatDecimalAsInt: interface{},
	JdbcTreatTimestampNtzAsUtc: interface{},
	JdbcUseSessionTimezone: interface{},
	JsonIndent: *f64,
	JsTreatIntegerAsBigint: interface{},
	ListingAutoFulfillmentReplicationRefreshSchedule: *string,
	LockTimeout: *f64,
	LogLevel: *string,
	MaxConcurrencyLevel: *f64,
	MaxDataExtensionTimeInDays: *f64,
	MetricLevel: *string,
	MinDataRetentionTimeInDays: *f64,
	MultiStatementCount: *f64,
	NetworkPolicy: *string,
	NoorderSequenceAsDefault: interface{},
	OauthAddPrivilegedRolesToBlockedList: interface{},
	OdbcTreatDecimalAsInt: interface{},
	PasswordPolicy: *string,
	PeriodicDataRekeying: interface{},
	PipeExecutionPaused: interface{},
	PreventUnloadToInlineUrl: interface{},
	PreventUnloadToInternalStages: interface{},
	PythonProfilerModules: *string,
	PythonProfilerTargetStage: *string,
	QueryTag: *string,
	QuotedIdentifiersIgnoreCase: interface{},
	ReplaceInvalidCharacters: interface{},
	RequireStorageIntegrationForStageCreation: interface{},
	RequireStorageIntegrationForStageOperation: interface{},
	ResourceMonitor: *string,
	RowsPerResultset: *f64,
	S3StageVpceDnsName: *string,
	SamlIdentityProvider: *string,
	SearchPath: *string,
	ServerlessTaskMaxStatementSize: *string,
	ServerlessTaskMinStatementSize: *string,
	SessionPolicy: *string,
	SimulatedDataSharingConsumer: *string,
	SsoLoginPage: interface{},
	StatementQueuedTimeoutInSeconds: *f64,
	StatementTimeoutInSeconds: *f64,
	StorageSerializationPolicy: *string,
	StrictJsonOutput: interface{},
	SuspendTaskAfterNumFailures: *f64,
	TaskAutoRetryAttempts: *f64,
	TimeInputFormat: *string,
	TimeOutputFormat: *string,
	Timeouts: github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15.currentOrganizationAccount.CurrentOrganizationAccountTimeouts,
	TimestampDayIsAlways24H: interface{},
	TimestampInputFormat: *string,
	TimestampLtzOutputFormat: *string,
	TimestampNtzOutputFormat: *string,
	TimestampOutputFormat: *string,
	TimestampTypeMapping: *string,
	TimestampTzOutputFormat: *string,
	Timezone: *string,
	TraceLevel: *string,
	TransactionAbortOnError: interface{},
	TransactionDefaultIsolationLevel: *string,
	TwoDigitCenturyStart: *f64,
	UnsupportedDdlAction: *string,
	UseCachedResult: interface{},
	UserTaskManagedInitialWarehouseSize: *string,
	UserTaskMinimumTriggerIntervalInSeconds: *f64,
	UserTaskTimeoutMs: *f64,
	WeekOfYearPolicy: *f64,
	WeekStart: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.name">Name</a></code> | <code>*string</code> | The identifier (i.e. name) for the organization account within currently used organization. The field name is validated during import and create operations to ensure that it matches the current organization account name. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.abortDetachedQuery">AbortDetachedQuery</a></code> | <code>interface{}</code> | Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.activePythonProfiler">ActivePythonProfiler</a></code> | <code>*string</code> | Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` \| `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowClientMfaCaching">AllowClientMfaCaching</a></code> | <code>interface{}</code> | Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowIdToken">AllowIdToken</a></code> | <code>interface{}</code> | Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.autocommit">Autocommit</a></code> | <code>interface{}</code> | Specifies whether autocommit is enabled for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.baseLocationPrefix">BaseLocationPrefix</a></code> | <code>*string</code> | Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryInputFormat">BinaryInputFormat</a></code> | <code>*string</code> | The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryOutputFormat">BinaryOutputFormat</a></code> | <code>*string</code> | The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalog">Catalog</a></code> | <code>*string</code> | Specifies the catalog for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalogSync">CatalogSync</a></code> | <code>*string</code> | Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEnableLogInfoStatementParameters">ClientEnableLogInfoStatementParameters</a></code> | <code>interface{}</code> | Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEncryptionKeySize">ClientEncryptionKeySize</a></code> | <code>*f64</code> | Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMemoryLimit">ClientMemoryLimit</a></code> | <code>*f64</code> | Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataRequestUseConnectionCtx">ClientMetadataRequestUseConnectionCtx</a></code> | <code>interface{}</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataUseSessionDatabase">ClientMetadataUseSessionDatabase</a></code> | <code>interface{}</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientPrefetchThreads">ClientPrefetchThreads</a></code> | <code>*f64</code> | Parameter that specifies the number of threads used by the client to pre-fetch large result sets. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultChunkSize">ClientResultChunkSize</a></code> | <code>*f64</code> | Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultColumnCaseInsensitive">ClientResultColumnCaseInsensitive</a></code> | <code>interface{}</code> | Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAlive">ClientSessionKeepAlive</a></code> | <code>interface{}</code> | Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency">ClientSessionKeepAliveHeartbeatFrequency</a></code> | <code>*f64</code> | Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientTimestampTypeMapping">ClientTimestampTypeMapping</a></code> | <code>*string</code> | Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` \| `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.comment">Comment</a></code> | <code>*string</code> | Specifies a comment for the organization account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexEnabledCrossRegion">CortexEnabledCrossRegion</a></code> | <code>*string</code> | Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexModelsAllowlist">CortexModelsAllowlist</a></code> | <code>*string</code> | Specifies the models that users in the account can access. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.csvTimestampFormat">CsvTimestampFormat</a></code> | <code>*string</code> | Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>*f64</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateInputFormat">DateInputFormat</a></code> | <code>*string</code> | Specifies the input format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateOutputFormat">DateOutputFormat</a></code> | <code>*string</code> | Specifies the display format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>*string</code> | Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolCpu">DefaultNotebookComputePoolCpu</a></code> | <code>*string</code> | Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolGpu">DefaultNotebookComputePoolGpu</a></code> | <code>*string</code> | Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNullOrdering">DefaultNullOrdering</a></code> | <code>*string</code> | Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` \| `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultStreamlitNotebookWarehouse">DefaultStreamlitNotebookWarehouse</a></code> | <code>*string</code> | Specifies the name of the default warehouse to use when creating a notebook. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUiDownloadButton">DisableUiDownloadButton</a></code> | <code>interface{}</code> | Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUserPrivilegeGrants">DisableUserPrivilegeGrants</a></code> | <code>interface{}</code> | Controls whether users in an account can grant privileges directly to other users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableAutomaticSensitiveDataClassificationLog">EnableAutomaticSensitiveDataClassificationLog</a></code> | <code>interface{}</code> | Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableEgressCostOptimizer">EnableEgressCostOptimizer</a></code> | <code>interface{}</code> | Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableIdentifierFirstLogin">EnableIdentifierFirstLogin</a></code> | <code>interface{}</code> | Determines the login flow for users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableInternalStagesPrivatelink">EnableInternalStagesPrivatelink</a></code> | <code>interface{}</code> | Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository">EnableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>interface{}</code> | Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">EnableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>interface{}</code> | Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnhandledExceptionsReporting">EnableUnhandledExceptionsReporting</a></code> | <code>interface{}</code> | Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnloadPhysicalTypeOptimization">EnableUnloadPhysicalTypeOptimization</a></code> | <code>interface{}</code> | Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedQuerySyntaxError">EnableUnredactedQuerySyntaxError</a></code> | <code>interface{}</code> | Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedSecureObjectError">EnableUnredactedSecureObjectError</a></code> | <code>interface{}</code> | Controls whether error messages related to secure objects are redacted in metadata. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enforceNetworkRulesForInternalStages">EnforceNetworkRulesForInternalStages</a></code> | <code>interface{}</code> | Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicMerge">ErrorOnNondeterministicMerge</a></code> | <code>interface{}</code> | Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicUpdate">ErrorOnNondeterministicUpdate</a></code> | <code>interface{}</code> | Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.eventTable">EventTable</a></code> | <code>*string</code> | Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList">ExternalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>interface{}</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalVolume">ExternalVolume</a></code> | <code>*string</code> | Specifies the external volume for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geographyOutputFormat">GeographyOutputFormat</a></code> | <code>*string</code> | Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geometryOutputFormat">GeometryOutputFormat</a></code> | <code>*string</code> | Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.hybridTableLockTimeout">HybridTableLockTimeout</a></code> | <code>*f64</code> | Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#id CurrentOrganizationAccount#id}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.initialReplicationSizeLimitInTb">InitialReplicationSizeLimitInTb</a></code> | <code>*string</code> | Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatDecimalAsInt">JdbcTreatDecimalAsInt</a></code> | <code>interface{}</code> | Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatTimestampNtzAsUtc">JdbcTreatTimestampNtzAsUtc</a></code> | <code>interface{}</code> | Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcUseSessionTimezone">JdbcUseSessionTimezone</a></code> | <code>interface{}</code> | Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsonIndent">JsonIndent</a></code> | <code>*f64</code> | Specifies the number of blank spaces to indent each new element in JSON output in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsTreatIntegerAsBigint">JsTreatIntegerAsBigint</a></code> | <code>interface{}</code> | Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule">ListingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>*string</code> | Sets the time interval used to refresh the application package based data products to other regions. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lockTimeout">LockTimeout</a></code> | <code>*f64</code> | Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.logLevel">LogLevel</a></code> | <code>*string</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>*f64</code> | Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>*f64</code> | Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.metricLevel">MetricLevel</a></code> | <code>*string</code> | Controls how metrics data is ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.minDataRetentionTimeInDays">MinDataRetentionTimeInDays</a></code> | <code>*f64</code> | Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.multiStatementCount">MultiStatementCount</a></code> | <code>*f64</code> | Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.networkPolicy">NetworkPolicy</a></code> | <code>*string</code> | Specifies the network policy to enforce for your account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.noorderSequenceAsDefault">NoorderSequenceAsDefault</a></code> | <code>interface{}</code> | Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.oauthAddPrivilegedRolesToBlockedList">OauthAddPrivilegedRolesToBlockedList</a></code> | <code>interface{}</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.odbcTreatDecimalAsInt">OdbcTreatDecimalAsInt</a></code> | <code>interface{}</code> | Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>*string</code> | Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.periodicDataRekeying">PeriodicDataRekeying</a></code> | <code>interface{}</code> | It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pipeExecutionPaused">PipeExecutionPaused</a></code> | <code>interface{}</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInlineUrl">PreventUnloadToInlineUrl</a></code> | <code>interface{}</code> | Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInternalStages">PreventUnloadToInternalStages</a></code> | <code>interface{}</code> | Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerModules">PythonProfilerModules</a></code> | <code>*string</code> | Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerTargetStage">PythonProfilerTargetStage</a></code> | <code>*string</code> | Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.queryTag">QueryTag</a></code> | <code>*string</code> | Optional string that can be used to tag queries and other SQL statements executed within a session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>interface{}</code> | Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>interface{}</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageCreation">RequireStorageIntegrationForStageCreation</a></code> | <code>interface{}</code> | Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageOperation">RequireStorageIntegrationForStageOperation</a></code> | <code>interface{}</code> | Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.resourceMonitor">ResourceMonitor</a></code> | <code>*string</code> | Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.rowsPerResultset">RowsPerResultset</a></code> | <code>*f64</code> | Specifies the maximum number of rows returned in a result set. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.s3StageVpceDnsName">S3StageVpceDnsName</a></code> | <code>*string</code> | Specifies the DNS name of an Amazon S3 interface endpoint. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.samlIdentityProvider">SamlIdentityProvider</a></code> | <code>*string</code> | Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.searchPath">SearchPath</a></code> | <code>*string</code> | Specifies the path to search to resolve unqualified object names in queries. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMaxStatementSize">ServerlessTaskMaxStatementSize</a></code> | <code>*string</code> | Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMinStatementSize">ServerlessTaskMinStatementSize</a></code> | <code>*string</code> | Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.sessionPolicy">SessionPolicy</a></code> | <code>*string</code> | Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.simulatedDataSharingConsumer">SimulatedDataSharingConsumer</a></code> | <code>*string</code> | Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.ssoLoginPage">SsoLoginPage</a></code> | <code>interface{}</code> | This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>*f64</code> | Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>*f64</code> | Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>*string</code> | Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` \| `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.strictJsonOutput">StrictJsonOutput</a></code> | <code>interface{}</code> | This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>*f64</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>*f64</code> | Specifies the number of automatic task graph retry attempts. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeInputFormat">TimeInputFormat</a></code> | <code>*string</code> | Specifies the input format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeOutputFormat">TimeOutputFormat</a></code> | <code>*string</code> | Specifies the display format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampDayIsAlways24H">TimestampDayIsAlways24H</a></code> | <code>interface{}</code> | Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampInputFormat">TimestampInputFormat</a></code> | <code>*string</code> | Specifies the input format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampLtzOutputFormat">TimestampLtzOutputFormat</a></code> | <code>*string</code> | Specifies the display format for the TIMESTAMP_LTZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampNtzOutputFormat">TimestampNtzOutputFormat</a></code> | <code>*string</code> | Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampOutputFormat">TimestampOutputFormat</a></code> | <code>*string</code> | Specifies the display format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTypeMapping">TimestampTypeMapping</a></code> | <code>*string</code> | Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTzOutputFormat">TimestampTzOutputFormat</a></code> | <code>*string</code> | Specifies the display format for the TIMESTAMP_TZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timezone">Timezone</a></code> | <code>*string</code> | Specifies the time zone for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.traceLevel">TraceLevel</a></code> | <code>*string</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionAbortOnError">TransactionAbortOnError</a></code> | <code>interface{}</code> | Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionDefaultIsolationLevel">TransactionDefaultIsolationLevel</a></code> | <code>*string</code> | Specifies the isolation level for transactions in the user session. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.twoDigitCenturyStart">TwoDigitCenturyStart</a></code> | <code>*f64</code> | Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.unsupportedDdlAction">UnsupportedDdlAction</a></code> | <code>*string</code> | Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.useCachedResult">UseCachedResult</a></code> | <code>interface{}</code> | Specifies whether to reuse persisted query results, if available, when a matching query is submitted. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>*string</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>*f64</code> | Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>*f64</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekOfYearPolicy">WeekOfYearPolicy</a></code> | <code>*f64</code> | Specifies how the weeks in a given year are computed. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekStart">WeekStart</a></code> | <code>*f64</code> | Specifies the first day of the week (used by week-related date functions). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The identifier (i.e. name) for the organization account within currently used organization. The field name is validated during import and create operations to ensure that it matches the current organization account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#name CurrentOrganizationAccount#name}

---

##### `AbortDetachedQuery`<sup>Optional</sup> <a name="AbortDetachedQuery" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.abortDetachedQuery"></a>

```go
AbortDetachedQuery interface{}
```

- *Type:* interface{}

Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#abort_detached_query CurrentOrganizationAccount#abort_detached_query}

---

##### `ActivePythonProfiler`<sup>Optional</sup> <a name="ActivePythonProfiler" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.activePythonProfiler"></a>

```go
ActivePythonProfiler *string
```

- *Type:* *string

Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#active_python_profiler CurrentOrganizationAccount#active_python_profiler}

---

##### `AllowClientMfaCaching`<sup>Optional</sup> <a name="AllowClientMfaCaching" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowClientMfaCaching"></a>

```go
AllowClientMfaCaching interface{}
```

- *Type:* interface{}

Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#allow_client_mfa_caching CurrentOrganizationAccount#allow_client_mfa_caching}

---

##### `AllowIdToken`<sup>Optional</sup> <a name="AllowIdToken" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.allowIdToken"></a>

```go
AllowIdToken interface{}
```

- *Type:* interface{}

Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#allow_id_token CurrentOrganizationAccount#allow_id_token}

---

##### `Autocommit`<sup>Optional</sup> <a name="Autocommit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.autocommit"></a>

```go
Autocommit interface{}
```

- *Type:* interface{}

Specifies whether autocommit is enabled for the session.

Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#autocommit CurrentOrganizationAccount#autocommit}

---

##### `BaseLocationPrefix`<sup>Optional</sup> <a name="BaseLocationPrefix" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.baseLocationPrefix"></a>

```go
BaseLocationPrefix *string
```

- *Type:* *string

Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables.

For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#base_location_prefix CurrentOrganizationAccount#base_location_prefix}

---

##### `BinaryInputFormat`<sup>Optional</sup> <a name="BinaryInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryInputFormat"></a>

```go
BinaryInputFormat *string
```

- *Type:* *string

The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#binary_input_format CurrentOrganizationAccount#binary_input_format}

---

##### `BinaryOutputFormat`<sup>Optional</sup> <a name="BinaryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.binaryOutputFormat"></a>

```go
BinaryOutputFormat *string
```

- *Type:* *string

The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#binary_output_format CurrentOrganizationAccount#binary_output_format}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalog"></a>

```go
Catalog *string
```

- *Type:* *string

Specifies the catalog for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#catalog CurrentOrganizationAccount#catalog}

---

##### `CatalogSync`<sup>Optional</sup> <a name="CatalogSync" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.catalogSync"></a>

```go
CatalogSync *string
```

- *Type:* *string

Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#catalog_sync CurrentOrganizationAccount#catalog_sync}

---

##### `ClientEnableLogInfoStatementParameters`<sup>Optional</sup> <a name="ClientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEnableLogInfoStatementParameters"></a>

```go
ClientEnableLogInfoStatementParameters interface{}
```

- *Type:* interface{}

Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_enable_log_info_statement_parameters CurrentOrganizationAccount#client_enable_log_info_statement_parameters}

---

##### `ClientEncryptionKeySize`<sup>Optional</sup> <a name="ClientEncryptionKeySize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientEncryptionKeySize"></a>

```go
ClientEncryptionKeySize *f64
```

- *Type:* *f64

Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type.

For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_encryption_key_size CurrentOrganizationAccount#client_encryption_key_size}

---

##### `ClientMemoryLimit`<sup>Optional</sup> <a name="ClientMemoryLimit" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMemoryLimit"></a>

```go
ClientMemoryLimit *f64
```

- *Type:* *f64

Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB).

For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_memory_limit CurrentOrganizationAccount#client_memory_limit}

---

##### `ClientMetadataRequestUseConnectionCtx`<sup>Optional</sup> <a name="ClientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataRequestUseConnectionCtx"></a>

```go
ClientMetadataRequestUseConnectionCtx interface{}
```

- *Type:* interface{}

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema.

The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_metadata_request_use_connection_ctx CurrentOrganizationAccount#client_metadata_request_use_connection_ctx}

---

##### `ClientMetadataUseSessionDatabase`<sup>Optional</sup> <a name="ClientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientMetadataUseSessionDatabase"></a>

```go
ClientMetadataUseSessionDatabase interface{}
```

- *Type:* interface{}

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database.

The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_metadata_use_session_database CurrentOrganizationAccount#client_metadata_use_session_database}

---

##### `ClientPrefetchThreads`<sup>Optional</sup> <a name="ClientPrefetchThreads" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientPrefetchThreads"></a>

```go
ClientPrefetchThreads *f64
```

- *Type:* *f64

Parameter that specifies the number of threads used by the client to pre-fetch large result sets.

The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_prefetch_threads CurrentOrganizationAccount#client_prefetch_threads}

---

##### `ClientResultChunkSize`<sup>Optional</sup> <a name="ClientResultChunkSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultChunkSize"></a>

```go
ClientResultChunkSize *f64
```

- *Type:* *f64

Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB).

The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_result_chunk_size CurrentOrganizationAccount#client_result_chunk_size}

---

##### `ClientResultColumnCaseInsensitive`<sup>Optional</sup> <a name="ClientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientResultColumnCaseInsensitive"></a>

```go
ClientResultColumnCaseInsensitive interface{}
```

- *Type:* interface{}

Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_result_column_case_insensitive CurrentOrganizationAccount#client_result_column_case_insensitive}

---

##### `ClientSessionKeepAlive`<sup>Optional</sup> <a name="ClientSessionKeepAlive" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAlive"></a>

```go
ClientSessionKeepAlive interface{}
```

- *Type:* interface{}

Parameter that indicates whether to force a user to log in again after a period of inactivity in the session.

For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_session_keep_alive CurrentOrganizationAccount#client_session_keep_alive}

---

##### `ClientSessionKeepAliveHeartbeatFrequency`<sup>Optional</sup> <a name="ClientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```go
ClientSessionKeepAliveHeartbeatFrequency *f64
```

- *Type:* *f64

Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_session_keep_alive_heartbeat_frequency CurrentOrganizationAccount#client_session_keep_alive_heartbeat_frequency}

---

##### `ClientTimestampTypeMapping`<sup>Optional</sup> <a name="ClientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.clientTimestampTypeMapping"></a>

```go
ClientTimestampTypeMapping *string
```

- *Type:* *string

Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#client_timestamp_type_mapping CurrentOrganizationAccount#client_timestamp_type_mapping}

---

##### `Comment`<sup>Optional</sup> <a name="Comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.comment"></a>

```go
Comment *string
```

- *Type:* *string

Specifies a comment for the organization account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#comment CurrentOrganizationAccount#comment}

---

##### `CortexEnabledCrossRegion`<sup>Optional</sup> <a name="CortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexEnabledCrossRegion"></a>

```go
CortexEnabledCrossRegion *string
```

- *Type:* *string

Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed.

Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#cortex_enabled_cross_region CurrentOrganizationAccount#cortex_enabled_cross_region}

---

##### `CortexModelsAllowlist`<sup>Optional</sup> <a name="CortexModelsAllowlist" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.cortexModelsAllowlist"></a>

```go
CortexModelsAllowlist *string
```

- *Type:* *string

Specifies the models that users in the account can access.

Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#cortex_models_allowlist CurrentOrganizationAccount#cortex_models_allowlist}

---

##### `CsvTimestampFormat`<sup>Optional</sup> <a name="CsvTimestampFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.csvTimestampFormat"></a>

```go
CsvTimestampFormat *string
```

- *Type:* *string

Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight.

If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#csv_timestamp_format CurrentOrganizationAccount#csv_timestamp_format}

---

##### `DataRetentionTimeInDays`<sup>Optional</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dataRetentionTimeInDays"></a>

```go
DataRetentionTimeInDays *f64
```

- *Type:* *f64

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#data_retention_time_in_days CurrentOrganizationAccount#data_retention_time_in_days}

---

##### `DateInputFormat`<sup>Optional</sup> <a name="DateInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateInputFormat"></a>

```go
DateInputFormat *string
```

- *Type:* *string

Specifies the input format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#date_input_format CurrentOrganizationAccount#date_input_format}

---

##### `DateOutputFormat`<sup>Optional</sup> <a name="DateOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.dateOutputFormat"></a>

```go
DateOutputFormat *string
```

- *Type:* *string

Specifies the display format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#date_output_format CurrentOrganizationAccount#date_output_format}

---

##### `DefaultDdlCollation`<sup>Optional</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultDdlCollation"></a>

```go
DefaultDdlCollation *string
```

- *Type:* *string

Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_ddl_collation CurrentOrganizationAccount#default_ddl_collation}

---

##### `DefaultNotebookComputePoolCpu`<sup>Optional</sup> <a name="DefaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolCpu"></a>

```go
DefaultNotebookComputePoolCpu *string
```

- *Type:* *string

Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_notebook_compute_pool_cpu CurrentOrganizationAccount#default_notebook_compute_pool_cpu}

---

##### `DefaultNotebookComputePoolGpu`<sup>Optional</sup> <a name="DefaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNotebookComputePoolGpu"></a>

```go
DefaultNotebookComputePoolGpu *string
```

- *Type:* *string

Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_notebook_compute_pool_gpu CurrentOrganizationAccount#default_notebook_compute_pool_gpu}

---

##### `DefaultNullOrdering`<sup>Optional</sup> <a name="DefaultNullOrdering" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultNullOrdering"></a>

```go
DefaultNullOrdering *string
```

- *Type:* *string

Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_null_ordering CurrentOrganizationAccount#default_null_ordering}

---

##### `DefaultStreamlitNotebookWarehouse`<sup>Optional</sup> <a name="DefaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.defaultStreamlitNotebookWarehouse"></a>

```go
DefaultStreamlitNotebookWarehouse *string
```

- *Type:* *string

Specifies the name of the default warehouse to use when creating a notebook.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#default_streamlit_notebook_warehouse CurrentOrganizationAccount#default_streamlit_notebook_warehouse}

---

##### `DisableUiDownloadButton`<sup>Optional</sup> <a name="DisableUiDownloadButton" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUiDownloadButton"></a>

```go
DisableUiDownloadButton interface{}
```

- *Type:* interface{}

Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet.

If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#disable_ui_download_button CurrentOrganizationAccount#disable_ui_download_button}

---

##### `DisableUserPrivilegeGrants`<sup>Optional</sup> <a name="DisableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.disableUserPrivilegeGrants"></a>

```go
DisableUserPrivilegeGrants interface{}
```

- *Type:* interface{}

Controls whether users in an account can grant privileges directly to other users.

Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#disable_user_privilege_grants CurrentOrganizationAccount#disable_user_privilege_grants}

---

##### `EnableAutomaticSensitiveDataClassificationLog`<sup>Optional</sup> <a name="EnableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableAutomaticSensitiveDataClassificationLog"></a>

```go
EnableAutomaticSensitiveDataClassificationLog interface{}
```

- *Type:* interface{}

Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_automatic_sensitive_data_classification_log CurrentOrganizationAccount#enable_automatic_sensitive_data_classification_log}

---

##### `EnableEgressCostOptimizer`<sup>Optional</sup> <a name="EnableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableEgressCostOptimizer"></a>

```go
EnableEgressCostOptimizer interface{}
```

- *Type:* interface{}

Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_egress_cost_optimizer CurrentOrganizationAccount#enable_egress_cost_optimizer}

---

##### `EnableIdentifierFirstLogin`<sup>Optional</sup> <a name="EnableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableIdentifierFirstLogin"></a>

```go
EnableIdentifierFirstLogin interface{}
```

- *Type:* interface{}

Determines the login flow for users.

When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_identifier_first_login CurrentOrganizationAccount#enable_identifier_first_login}

---

##### `EnableInternalStagesPrivatelink`<sup>Optional</sup> <a name="EnableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableInternalStagesPrivatelink"></a>

```go
EnableInternalStagesPrivatelink interface{}
```

- *Type:* interface{}

Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_internal_stages_privatelink CurrentOrganizationAccount#enable_internal_stages_privatelink}

---

##### `EnableTriSecretAndRekeyOptOutForImageRepository`<sup>Optional</sup> <a name="EnableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```go
EnableTriSecretAndRekeyOptOutForImageRepository interface{}
```

- *Type:* interface{}

Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentOrganizationAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}

---

##### `EnableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Optional</sup> <a name="EnableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```go
EnableTriSecretAndRekeyOptOutForSpcsBlockStorage interface{}
```

- *Type:* interface{}

Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentOrganizationAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}

---

##### `EnableUnhandledExceptionsReporting`<sup>Optional</sup> <a name="EnableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnhandledExceptionsReporting"></a>

```go
EnableUnhandledExceptionsReporting interface{}
```

- *Type:* interface{}

Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code.

For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unhandled_exceptions_reporting CurrentOrganizationAccount#enable_unhandled_exceptions_reporting}

---

##### `EnableUnloadPhysicalTypeOptimization`<sup>Optional</sup> <a name="EnableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnloadPhysicalTypeOptimization"></a>

```go
EnableUnloadPhysicalTypeOptimization interface{}
```

- *Type:* interface{}

Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unload_physical_type_optimization CurrentOrganizationAccount#enable_unload_physical_type_optimization}

---

##### `EnableUnredactedQuerySyntaxError`<sup>Optional</sup> <a name="EnableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedQuerySyntaxError"></a>

```go
EnableUnredactedQuerySyntaxError interface{}
```

- *Type:* interface{}

Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error.

If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unredacted_query_syntax_error CurrentOrganizationAccount#enable_unredacted_query_syntax_error}

---

##### `EnableUnredactedSecureObjectError`<sup>Optional</sup> <a name="EnableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enableUnredactedSecureObjectError"></a>

```go
EnableUnredactedSecureObjectError interface{}
```

- *Type:* interface{}

Controls whether error messages related to secure objects are redacted in metadata.

For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enable_unredacted_secure_object_error CurrentOrganizationAccount#enable_unredacted_secure_object_error}

---

##### `EnforceNetworkRulesForInternalStages`<sup>Optional</sup> <a name="EnforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.enforceNetworkRulesForInternalStages"></a>

```go
EnforceNetworkRulesForInternalStages interface{}
```

- *Type:* interface{}

Specifies whether a network policy that uses network rules can restrict access to AWS internal stages.

This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#enforce_network_rules_for_internal_stages CurrentOrganizationAccount#enforce_network_rules_for_internal_stages}

---

##### `ErrorOnNondeterministicMerge`<sup>Optional</sup> <a name="ErrorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicMerge"></a>

```go
ErrorOnNondeterministicMerge interface{}
```

- *Type:* interface{}

Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#error_on_nondeterministic_merge CurrentOrganizationAccount#error_on_nondeterministic_merge}

---

##### `ErrorOnNondeterministicUpdate`<sup>Optional</sup> <a name="ErrorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.errorOnNondeterministicUpdate"></a>

```go
ErrorOnNondeterministicUpdate interface{}
```

- *Type:* interface{}

Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#error_on_nondeterministic_update CurrentOrganizationAccount#error_on_nondeterministic_update}

---

##### `EventTable`<sup>Optional</sup> <a name="EventTable" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.eventTable"></a>

```go
EventTable *string
```

- *Type:* *string

Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated.

Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#event_table CurrentOrganizationAccount#event_table}

---

##### `ExternalOauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="ExternalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```go
ExternalOauthAddPrivilegedRolesToBlockedList interface{}
```

- *Type:* interface{}

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server.

For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#external_oauth_add_privileged_roles_to_blocked_list CurrentOrganizationAccount#external_oauth_add_privileged_roles_to_blocked_list}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.externalVolume"></a>

```go
ExternalVolume *string
```

- *Type:* *string

Specifies the external volume for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#external_volume CurrentOrganizationAccount#external_volume}

---

##### `GeographyOutputFormat`<sup>Optional</sup> <a name="GeographyOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geographyOutputFormat"></a>

```go
GeographyOutputFormat *string
```

- *Type:* *string

Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#geography_output_format CurrentOrganizationAccount#geography_output_format}

---

##### `GeometryOutputFormat`<sup>Optional</sup> <a name="GeometryOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.geometryOutputFormat"></a>

```go
GeometryOutputFormat *string
```

- *Type:* *string

Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#geometry_output_format CurrentOrganizationAccount#geometry_output_format}

---

##### `HybridTableLockTimeout`<sup>Optional</sup> <a name="HybridTableLockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.hybridTableLockTimeout"></a>

```go
HybridTableLockTimeout *f64
```

- *Type:* *f64

Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement.

For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#hybrid_table_lock_timeout CurrentOrganizationAccount#hybrid_table_lock_timeout}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#id CurrentOrganizationAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialReplicationSizeLimitInTb`<sup>Optional</sup> <a name="InitialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.initialReplicationSizeLimitInTb"></a>

```go
InitialReplicationSizeLimitInTb *string
```

- *Type:* *string

Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB).

Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#initial_replication_size_limit_in_tb CurrentOrganizationAccount#initial_replication_size_limit_in_tb}

---

##### `JdbcTreatDecimalAsInt`<sup>Optional</sup> <a name="JdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatDecimalAsInt"></a>

```go
JdbcTreatDecimalAsInt interface{}
```

- *Type:* interface{}

Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#jdbc_treat_decimal_as_int CurrentOrganizationAccount#jdbc_treat_decimal_as_int}

---

##### `JdbcTreatTimestampNtzAsUtc`<sup>Optional</sup> <a name="JdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcTreatTimestampNtzAsUtc"></a>

```go
JdbcTreatTimestampNtzAsUtc interface{}
```

- *Type:* interface{}

Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#jdbc_treat_timestamp_ntz_as_utc CurrentOrganizationAccount#jdbc_treat_timestamp_ntz_as_utc}

---

##### `JdbcUseSessionTimezone`<sup>Optional</sup> <a name="JdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jdbcUseSessionTimezone"></a>

```go
JdbcUseSessionTimezone interface{}
```

- *Type:* interface{}

Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#jdbc_use_session_timezone CurrentOrganizationAccount#jdbc_use_session_timezone}

---

##### `JsonIndent`<sup>Optional</sup> <a name="JsonIndent" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsonIndent"></a>

```go
JsonIndent *f64
```

- *Type:* *f64

Specifies the number of blank spaces to indent each new element in JSON output in the session.

Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#json_indent CurrentOrganizationAccount#json_indent}

---

##### `JsTreatIntegerAsBigint`<sup>Optional</sup> <a name="JsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.jsTreatIntegerAsBigint"></a>

```go
JsTreatIntegerAsBigint interface{}
```

- *Type:* interface{}

Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#js_treat_integer_as_bigint CurrentOrganizationAccount#js_treat_integer_as_bigint}

---

##### `ListingAutoFulfillmentReplicationRefreshSchedule`<sup>Optional</sup> <a name="ListingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```go
ListingAutoFulfillmentReplicationRefreshSchedule *string
```

- *Type:* *string

Sets the time interval used to refresh the application package based data products to other regions.

For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#listing_auto_fulfillment_replication_refresh_schedule CurrentOrganizationAccount#listing_auto_fulfillment_replication_refresh_schedule}

---

##### `LockTimeout`<sup>Optional</sup> <a name="LockTimeout" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.lockTimeout"></a>

```go
LockTimeout *f64
```

- *Type:* *f64

Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement.

For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#lock_timeout CurrentOrganizationAccount#lock_timeout}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.logLevel"></a>

```go
LogLevel *string
```

- *Type:* *string

Specifies the severity level of messages that should be ingested and made available in the active event table.

Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#log_level CurrentOrganizationAccount#log_level}

---

##### `MaxConcurrencyLevel`<sup>Optional</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxConcurrencyLevel"></a>

```go
MaxConcurrencyLevel *f64
```

- *Type:* *f64

Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#max_concurrency_level CurrentOrganizationAccount#max_concurrency_level}

---

##### `MaxDataExtensionTimeInDays`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.maxDataExtensionTimeInDays"></a>

```go
MaxDataExtensionTimeInDays *f64
```

- *Type:* *f64

Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale.

By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#max_data_extension_time_in_days CurrentOrganizationAccount#max_data_extension_time_in_days}

---

##### `MetricLevel`<sup>Optional</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.metricLevel"></a>

```go
MetricLevel *string
```

- *Type:* *string

Controls how metrics data is ingested into the event table.

For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#metric_level CurrentOrganizationAccount#metric_level}

---

##### `MinDataRetentionTimeInDays`<sup>Optional</sup> <a name="MinDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.minDataRetentionTimeInDays"></a>

```go
MinDataRetentionTimeInDays *f64
```

- *Type:* *f64

Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object.

If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#min_data_retention_time_in_days CurrentOrganizationAccount#min_data_retention_time_in_days}

---

##### `MultiStatementCount`<sup>Optional</sup> <a name="MultiStatementCount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.multiStatementCount"></a>

```go
MultiStatementCount *f64
```

- *Type:* *f64

Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#multi_statement_count CurrentOrganizationAccount#multi_statement_count}

---

##### `NetworkPolicy`<sup>Optional</sup> <a name="NetworkPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.networkPolicy"></a>

```go
NetworkPolicy *string
```

- *Type:* *string

Specifies the network policy to enforce for your account.

Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#network_policy CurrentOrganizationAccount#network_policy}

---

##### `NoorderSequenceAsDefault`<sup>Optional</sup> <a name="NoorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.noorderSequenceAsDefault"></a>

```go
NoorderSequenceAsDefault interface{}
```

- *Type:* interface{}

Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column.

The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#noorder_sequence_as_default CurrentOrganizationAccount#noorder_sequence_as_default}

---

##### `OauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="OauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.oauthAddPrivilegedRolesToBlockedList"></a>

```go
OauthAddPrivilegedRolesToBlockedList interface{}
```

- *Type:* interface{}

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server.

For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#oauth_add_privileged_roles_to_blocked_list CurrentOrganizationAccount#oauth_add_privileged_roles_to_blocked_list}

---

##### `OdbcTreatDecimalAsInt`<sup>Optional</sup> <a name="OdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.odbcTreatDecimalAsInt"></a>

```go
OdbcTreatDecimalAsInt interface{}
```

- *Type:* interface{}

Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#odbc_treat_decimal_as_int CurrentOrganizationAccount#odbc_treat_decimal_as_int}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.passwordPolicy"></a>

```go
PasswordPolicy *string
```

- *Type:* *string

Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#password_policy CurrentOrganizationAccount#password_policy}

---

##### `PeriodicDataRekeying`<sup>Optional</sup> <a name="PeriodicDataRekeying" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.periodicDataRekeying"></a>

```go
PeriodicDataRekeying interface{}
```

- *Type:* interface{}

It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#periodic_data_rekeying CurrentOrganizationAccount#periodic_data_rekeying}

---

##### `PipeExecutionPaused`<sup>Optional</sup> <a name="PipeExecutionPaused" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pipeExecutionPaused"></a>

```go
PipeExecutionPaused interface{}
```

- *Type:* interface{}

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#pipe_execution_paused CurrentOrganizationAccount#pipe_execution_paused}

---

##### `PreventUnloadToInlineUrl`<sup>Optional</sup> <a name="PreventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInlineUrl"></a>

```go
PreventUnloadToInlineUrl interface{}
```

- *Type:* interface{}

Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#prevent_unload_to_inline_url CurrentOrganizationAccount#prevent_unload_to_inline_url}

---

##### `PreventUnloadToInternalStages`<sup>Optional</sup> <a name="PreventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.preventUnloadToInternalStages"></a>

```go
PreventUnloadToInternalStages interface{}
```

- *Type:* interface{}

Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#prevent_unload_to_internal_stages CurrentOrganizationAccount#prevent_unload_to_internal_stages}

---

##### `PythonProfilerModules`<sup>Optional</sup> <a name="PythonProfilerModules" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerModules"></a>

```go
PythonProfilerModules *string
```

- *Type:* *string

Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#python_profiler_modules CurrentOrganizationAccount#python_profiler_modules}

---

##### `PythonProfilerTargetStage`<sup>Optional</sup> <a name="PythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.pythonProfilerTargetStage"></a>

```go
PythonProfilerTargetStage *string
```

- *Type:* *string

Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#python_profiler_target_stage CurrentOrganizationAccount#python_profiler_target_stage}

---

##### `QueryTag`<sup>Optional</sup> <a name="QueryTag" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.queryTag"></a>

```go
QueryTag *string
```

- *Type:* *string

Optional string that can be used to tag queries and other SQL statements executed within a session.

The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#query_tag CurrentOrganizationAccount#query_tag}

---

##### `QuotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.quotedIdentifiersIgnoreCase"></a>

```go
QuotedIdentifiersIgnoreCase interface{}
```

- *Type:* interface{}

Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters.

By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#quoted_identifiers_ignore_case CurrentOrganizationAccount#quoted_identifiers_ignore_case}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.replaceInvalidCharacters"></a>

```go
ReplaceInvalidCharacters interface{}
```

- *Type:* interface{}

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#replace_invalid_characters CurrentOrganizationAccount#replace_invalid_characters}

---

##### `RequireStorageIntegrationForStageCreation`<sup>Optional</sup> <a name="RequireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageCreation"></a>

```go
RequireStorageIntegrationForStageCreation interface{}
```

- *Type:* interface{}

Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#require_storage_integration_for_stage_creation CurrentOrganizationAccount#require_storage_integration_for_stage_creation}

---

##### `RequireStorageIntegrationForStageOperation`<sup>Optional</sup> <a name="RequireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.requireStorageIntegrationForStageOperation"></a>

```go
RequireStorageIntegrationForStageOperation interface{}
```

- *Type:* interface{}

Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location.

For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#require_storage_integration_for_stage_operation CurrentOrganizationAccount#require_storage_integration_for_stage_operation}

---

##### `ResourceMonitor`<sup>Optional</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.resourceMonitor"></a>

```go
ResourceMonitor *string
```

- *Type:* *string

Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#resource_monitor CurrentOrganizationAccount#resource_monitor}

---

##### `RowsPerResultset`<sup>Optional</sup> <a name="RowsPerResultset" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.rowsPerResultset"></a>

```go
RowsPerResultset *f64
```

- *Type:* *f64

Specifies the maximum number of rows returned in a result set.

A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#rows_per_resultset CurrentOrganizationAccount#rows_per_resultset}

---

##### `S3StageVpceDnsName`<sup>Optional</sup> <a name="S3StageVpceDnsName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.s3StageVpceDnsName"></a>

```go
S3StageVpceDnsName *string
```

- *Type:* *string

Specifies the DNS name of an Amazon S3 interface endpoint.

Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#s3_stage_vpce_dns_name CurrentOrganizationAccount#s3_stage_vpce_dns_name}

---

##### `SamlIdentityProvider`<sup>Optional</sup> <a name="SamlIdentityProvider" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.samlIdentityProvider"></a>

```go
SamlIdentityProvider *string
```

- *Type:* *string

Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#saml_identity_provider CurrentOrganizationAccount#saml_identity_provider}

---

##### `SearchPath`<sup>Optional</sup> <a name="SearchPath" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.searchPath"></a>

```go
SearchPath *string
```

- *Type:* *string

Specifies the path to search to resolve unqualified object names in queries.

For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#search_path CurrentOrganizationAccount#search_path}

---

##### `ServerlessTaskMaxStatementSize`<sup>Optional</sup> <a name="ServerlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMaxStatementSize"></a>

```go
ServerlessTaskMaxStatementSize *string
```

- *Type:* *string

Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#serverless_task_max_statement_size CurrentOrganizationAccount#serverless_task_max_statement_size}

---

##### `ServerlessTaskMinStatementSize`<sup>Optional</sup> <a name="ServerlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.serverlessTaskMinStatementSize"></a>

```go
ServerlessTaskMinStatementSize *string
```

- *Type:* *string

Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#serverless_task_min_statement_size CurrentOrganizationAccount#serverless_task_min_statement_size}

---

##### `SessionPolicy`<sup>Optional</sup> <a name="SessionPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.sessionPolicy"></a>

```go
SessionPolicy *string
```

- *Type:* *string

Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#session_policy CurrentOrganizationAccount#session_policy}

---

##### `SimulatedDataSharingConsumer`<sup>Optional</sup> <a name="SimulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.simulatedDataSharingConsumer"></a>

```go
SimulatedDataSharingConsumer *string
```

- *Type:* *string

Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views.

When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#simulated_data_sharing_consumer CurrentOrganizationAccount#simulated_data_sharing_consumer}

---

##### `SsoLoginPage`<sup>Optional</sup> <a name="SsoLoginPage" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.ssoLoginPage"></a>

```go
SsoLoginPage interface{}
```

- *Type:* interface{}

This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users.

For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#sso_login_page CurrentOrganizationAccount#sso_login_page}

---

##### `StatementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementQueuedTimeoutInSeconds"></a>

```go
StatementQueuedTimeoutInSeconds *f64
```

- *Type:* *f64

Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#statement_queued_timeout_in_seconds CurrentOrganizationAccount#statement_queued_timeout_in_seconds}

---

##### `StatementTimeoutInSeconds`<sup>Optional</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.statementTimeoutInSeconds"></a>

```go
StatementTimeoutInSeconds *f64
```

- *Type:* *f64

Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#statement_timeout_in_seconds CurrentOrganizationAccount#statement_timeout_in_seconds}

---

##### `StorageSerializationPolicy`<sup>Optional</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.storageSerializationPolicy"></a>

```go
StorageSerializationPolicy *string
```

- *Type:* *string

Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#storage_serialization_policy CurrentOrganizationAccount#storage_serialization_policy}

---

##### `StrictJsonOutput`<sup>Optional</sup> <a name="StrictJsonOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.strictJsonOutput"></a>

```go
StrictJsonOutput interface{}
```

- *Type:* interface{}

This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#strict_json_output CurrentOrganizationAccount#strict_json_output}

---

##### `SuspendTaskAfterNumFailures`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.suspendTaskAfterNumFailures"></a>

```go
SuspendTaskAfterNumFailures *f64
```

- *Type:* *f64

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#suspend_task_after_num_failures CurrentOrganizationAccount#suspend_task_after_num_failures}

---

##### `TaskAutoRetryAttempts`<sup>Optional</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.taskAutoRetryAttempts"></a>

```go
TaskAutoRetryAttempts *f64
```

- *Type:* *f64

Specifies the number of automatic task graph retry attempts.

If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#task_auto_retry_attempts CurrentOrganizationAccount#task_auto_retry_attempts}

---

##### `TimeInputFormat`<sup>Optional</sup> <a name="TimeInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeInputFormat"></a>

```go
TimeInputFormat *string
```

- *Type:* *string

Specifies the input format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#time_input_format CurrentOrganizationAccount#time_input_format}

---

##### `TimeOutputFormat`<sup>Optional</sup> <a name="TimeOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeOutputFormat"></a>

```go
TimeOutputFormat *string
```

- *Type:* *string

Specifies the display format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#time_output_format CurrentOrganizationAccount#time_output_format}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timeouts"></a>

```go
Timeouts CurrentOrganizationAccountTimeouts
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts">CurrentOrganizationAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timeouts CurrentOrganizationAccount#timeouts}

---

##### `TimestampDayIsAlways24H`<sup>Optional</sup> <a name="TimestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampDayIsAlways24H"></a>

```go
TimestampDayIsAlways24H interface{}
```

- *Type:* interface{}

Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_day_is_always_24h CurrentOrganizationAccount#timestamp_day_is_always_24h}

---

##### `TimestampInputFormat`<sup>Optional</sup> <a name="TimestampInputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampInputFormat"></a>

```go
TimestampInputFormat *string
```

- *Type:* *string

Specifies the input format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_input_format CurrentOrganizationAccount#timestamp_input_format}

---

##### `TimestampLtzOutputFormat`<sup>Optional</sup> <a name="TimestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampLtzOutputFormat"></a>

```go
TimestampLtzOutputFormat *string
```

- *Type:* *string

Specifies the display format for the TIMESTAMP_LTZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_ltz_output_format CurrentOrganizationAccount#timestamp_ltz_output_format}

---

##### `TimestampNtzOutputFormat`<sup>Optional</sup> <a name="TimestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampNtzOutputFormat"></a>

```go
TimestampNtzOutputFormat *string
```

- *Type:* *string

Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_ntz_output_format CurrentOrganizationAccount#timestamp_ntz_output_format}

---

##### `TimestampOutputFormat`<sup>Optional</sup> <a name="TimestampOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampOutputFormat"></a>

```go
TimestampOutputFormat *string
```

- *Type:* *string

Specifies the display format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_output_format CurrentOrganizationAccount#timestamp_output_format}

---

##### `TimestampTypeMapping`<sup>Optional</sup> <a name="TimestampTypeMapping" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTypeMapping"></a>

```go
TimestampTypeMapping *string
```

- *Type:* *string

Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to.

Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_type_mapping CurrentOrganizationAccount#timestamp_type_mapping}

---

##### `TimestampTzOutputFormat`<sup>Optional</sup> <a name="TimestampTzOutputFormat" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timestampTzOutputFormat"></a>

```go
TimestampTzOutputFormat *string
```

- *Type:* *string

Specifies the display format for the TIMESTAMP_TZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timestamp_tz_output_format CurrentOrganizationAccount#timestamp_tz_output_format}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Specifies the time zone for the session.

You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#timezone CurrentOrganizationAccount#timezone}

---

##### `TraceLevel`<sup>Optional</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.traceLevel"></a>

```go
TraceLevel *string
```

- *Type:* *string

Controls how trace events are ingested into the event table.

For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#trace_level CurrentOrganizationAccount#trace_level}

---

##### `TransactionAbortOnError`<sup>Optional</sup> <a name="TransactionAbortOnError" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionAbortOnError"></a>

```go
TransactionAbortOnError interface{}
```

- *Type:* interface{}

Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error.

For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#transaction_abort_on_error CurrentOrganizationAccount#transaction_abort_on_error}

---

##### `TransactionDefaultIsolationLevel`<sup>Optional</sup> <a name="TransactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.transactionDefaultIsolationLevel"></a>

```go
TransactionDefaultIsolationLevel *string
```

- *Type:* *string

Specifies the isolation level for transactions in the user session.

Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#transaction_default_isolation_level CurrentOrganizationAccount#transaction_default_isolation_level}

---

##### `TwoDigitCenturyStart`<sup>Optional</sup> <a name="TwoDigitCenturyStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.twoDigitCenturyStart"></a>

```go
TwoDigitCenturyStart *f64
```

- *Type:* *f64

Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#two_digit_century_start CurrentOrganizationAccount#two_digit_century_start}

---

##### `UnsupportedDdlAction`<sup>Optional</sup> <a name="UnsupportedDdlAction" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.unsupportedDdlAction"></a>

```go
UnsupportedDdlAction *string
```

- *Type:* *string

Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#unsupported_ddl_action CurrentOrganizationAccount#unsupported_ddl_action}

---

##### `UseCachedResult`<sup>Optional</sup> <a name="UseCachedResult" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.useCachedResult"></a>

```go
UseCachedResult interface{}
```

- *Type:* interface{}

Specifies whether to reuse persisted query results, if available, when a matching query is submitted.

For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#use_cached_result CurrentOrganizationAccount#use_cached_result}

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskManagedInitialWarehouseSize"></a>

```go
UserTaskManagedInitialWarehouseSize *string
```

- *Type:* *string

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#user_task_managed_initial_warehouse_size CurrentOrganizationAccount#user_task_managed_initial_warehouse_size}

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```go
UserTaskMinimumTriggerIntervalInSeconds *f64
```

- *Type:* *f64

Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#user_task_minimum_trigger_interval_in_seconds CurrentOrganizationAccount#user_task_minimum_trigger_interval_in_seconds}

---

##### `UserTaskTimeoutMs`<sup>Optional</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.userTaskTimeoutMs"></a>

```go
UserTaskTimeoutMs *f64
```

- *Type:* *f64

Specifies the time limit on a single run of the task before it times out (in milliseconds).

For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#user_task_timeout_ms CurrentOrganizationAccount#user_task_timeout_ms}

---

##### `WeekOfYearPolicy`<sup>Optional</sup> <a name="WeekOfYearPolicy" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekOfYearPolicy"></a>

```go
WeekOfYearPolicy *f64
```

- *Type:* *f64

Specifies how the weeks in a given year are computed.

`0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#week_of_year_policy CurrentOrganizationAccount#week_of_year_policy}

---

##### `WeekStart`<sup>Optional</sup> <a name="WeekStart" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountConfig.property.weekStart"></a>

```go
WeekStart *f64
```

- *Type:* *f64

Specifies the first day of the week (used by week-related date functions).

`0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#week_start CurrentOrganizationAccount#week_start}

---

### CurrentOrganizationAccountShowOutput <a name="CurrentOrganizationAccountShowOutput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

&currentorganizationaccount.CurrentOrganizationAccountShowOutput {

}
```


### CurrentOrganizationAccountTimeouts <a name="CurrentOrganizationAccountTimeouts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

&currentorganizationaccount.CurrentOrganizationAccountTimeouts {
	Create: *string,
	Delete: *string,
	Read: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#create CurrentOrganizationAccount#create}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#delete CurrentOrganizationAccount#delete}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.read">Read</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#read CurrentOrganizationAccount#read}. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#update CurrentOrganizationAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#create CurrentOrganizationAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#delete CurrentOrganizationAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.read"></a>

```go
Read *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#read CurrentOrganizationAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/current_organization_account#update CurrentOrganizationAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CurrentOrganizationAccountShowOutputList <a name="CurrentOrganizationAccountShowOutputList" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

currentorganizationaccount.NewCurrentOrganizationAccountShowOutputList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) CurrentOrganizationAccountShowOutputList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.get"></a>

```go
func Get(index *f64) CurrentOrganizationAccountShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### CurrentOrganizationAccountShowOutputOutputReference <a name="CurrentOrganizationAccountShowOutputOutputReference" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

currentorganizationaccount.NewCurrentOrganizationAccountShowOutputOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) CurrentOrganizationAccountShowOutputOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocator">AccountLocator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocatorUrl">AccountLocatorUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlLastUsed">AccountOldUrlLastUsed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlSavedOn">AccountOldUrlSavedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountUrl">AccountUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.comment">Comment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.consumptionBillingEntityName">ConsumptionBillingEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.createdOn">CreatedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.edition">Edition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isEventsAccount">IsEventsAccount</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrgAdmin">IsOrgAdmin</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrganizationAccount">IsOrganizationAccount</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.managedAccounts">ManagedAccounts</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName">MarketplaceConsumerBillingEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName">MarketplaceProviderBillingEntityName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.oldAccountUrl">OldAccountUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrl">OrganizationOldUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlLastUsed">OrganizationOldUrlLastUsed</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlSavedOn">OrganizationOldUrlSavedOn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.snowflakeRegion">SnowflakeRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput">CurrentOrganizationAccountShowOutput</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountLocator`<sup>Required</sup> <a name="AccountLocator" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocator"></a>

```go
func AccountLocator() *string
```

- *Type:* *string

---

##### `AccountLocatorUrl`<sup>Required</sup> <a name="AccountLocatorUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountLocatorUrl"></a>

```go
func AccountLocatorUrl() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Required</sup> <a name="AccountName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `AccountOldUrlLastUsed`<sup>Required</sup> <a name="AccountOldUrlLastUsed" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlLastUsed"></a>

```go
func AccountOldUrlLastUsed() *string
```

- *Type:* *string

---

##### `AccountOldUrlSavedOn`<sup>Required</sup> <a name="AccountOldUrlSavedOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountOldUrlSavedOn"></a>

```go
func AccountOldUrlSavedOn() *string
```

- *Type:* *string

---

##### `AccountUrl`<sup>Required</sup> <a name="AccountUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.accountUrl"></a>

```go
func AccountUrl() *string
```

- *Type:* *string

---

##### `Comment`<sup>Required</sup> <a name="Comment" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.comment"></a>

```go
func Comment() *string
```

- *Type:* *string

---

##### `ConsumptionBillingEntityName`<sup>Required</sup> <a name="ConsumptionBillingEntityName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.consumptionBillingEntityName"></a>

```go
func ConsumptionBillingEntityName() *string
```

- *Type:* *string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.createdOn"></a>

```go
func CreatedOn() *string
```

- *Type:* *string

---

##### `Edition`<sup>Required</sup> <a name="Edition" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.edition"></a>

```go
func Edition() *string
```

- *Type:* *string

---

##### `IsEventsAccount`<sup>Required</sup> <a name="IsEventsAccount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isEventsAccount"></a>

```go
func IsEventsAccount() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOrgAdmin`<sup>Required</sup> <a name="IsOrgAdmin" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrgAdmin"></a>

```go
func IsOrgAdmin() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsOrganizationAccount`<sup>Required</sup> <a name="IsOrganizationAccount" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.isOrganizationAccount"></a>

```go
func IsOrganizationAccount() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ManagedAccounts`<sup>Required</sup> <a name="ManagedAccounts" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.managedAccounts"></a>

```go
func ManagedAccounts() *f64
```

- *Type:* *f64

---

##### `MarketplaceConsumerBillingEntityName`<sup>Required</sup> <a name="MarketplaceConsumerBillingEntityName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceConsumerBillingEntityName"></a>

```go
func MarketplaceConsumerBillingEntityName() *string
```

- *Type:* *string

---

##### `MarketplaceProviderBillingEntityName`<sup>Required</sup> <a name="MarketplaceProviderBillingEntityName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.marketplaceProviderBillingEntityName"></a>

```go
func MarketplaceProviderBillingEntityName() *string
```

- *Type:* *string

---

##### `OldAccountUrl`<sup>Required</sup> <a name="OldAccountUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.oldAccountUrl"></a>

```go
func OldAccountUrl() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Required</sup> <a name="OrganizationName" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `OrganizationOldUrl`<sup>Required</sup> <a name="OrganizationOldUrl" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrl"></a>

```go
func OrganizationOldUrl() *string
```

- *Type:* *string

---

##### `OrganizationOldUrlLastUsed`<sup>Required</sup> <a name="OrganizationOldUrlLastUsed" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlLastUsed"></a>

```go
func OrganizationOldUrlLastUsed() *string
```

- *Type:* *string

---

##### `OrganizationOldUrlSavedOn`<sup>Required</sup> <a name="OrganizationOldUrlSavedOn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.organizationOldUrlSavedOn"></a>

```go
func OrganizationOldUrlSavedOn() *string
```

- *Type:* *string

---

##### `SnowflakeRegion`<sup>Required</sup> <a name="SnowflakeRegion" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.snowflakeRegion"></a>

```go
func SnowflakeRegion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutputOutputReference.property.internalValue"></a>

```go
func InternalValue() CurrentOrganizationAccountShowOutput
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountShowOutput">CurrentOrganizationAccountShowOutput</a>

---


### CurrentOrganizationAccountTimeoutsOutputReference <a name="CurrentOrganizationAccountTimeoutsOutputReference" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v15/currentorganizationaccount"

currentorganizationaccount.NewCurrentOrganizationAccountTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CurrentOrganizationAccountTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetRead"></a>

```go
func ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.readInput"></a>

```go
func ReadInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.read"></a>

```go
func Read() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.currentOrganizationAccount.CurrentOrganizationAccountTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



