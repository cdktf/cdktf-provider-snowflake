# `currentAccount` Submodule <a name="`currentAccount` Submodule" id="@cdktf/provider-snowflake.currentAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CurrentAccount <a name="CurrentAccount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account snowflake_current_account}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new CurrentAccount(Construct Scope, string Id, CurrentAccountConfig Config = null);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig">CurrentAccountConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig">CurrentAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAbortDetachedQuery">ResetAbortDetachedQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetActivePythonProfiler">ResetActivePythonProfiler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowClientMfaCaching">ResetAllowClientMfaCaching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowIdToken">ResetAllowIdToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAuthenticationPolicy">ResetAuthenticationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAutocommit">ResetAutocommit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBaseLocationPrefix">ResetBaseLocationPrefix</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryInputFormat">ResetBinaryInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryOutputFormat">ResetBinaryOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalog">ResetCatalog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalogSync">ResetCatalogSync</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEnableLogInfoStatementParameters">ResetClientEnableLogInfoStatementParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEncryptionKeySize">ResetClientEncryptionKeySize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMemoryLimit">ResetClientMemoryLimit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataRequestUseConnectionCtx">ResetClientMetadataRequestUseConnectionCtx</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataUseSessionDatabase">ResetClientMetadataUseSessionDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientPrefetchThreads">ResetClientPrefetchThreads</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultChunkSize">ResetClientResultChunkSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultColumnCaseInsensitive">ResetClientResultColumnCaseInsensitive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAlive">ResetClientSessionKeepAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAliveHeartbeatFrequency">ResetClientSessionKeepAliveHeartbeatFrequency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientTimestampTypeMapping">ResetClientTimestampTypeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexEnabledCrossRegion">ResetCortexEnabledCrossRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexModelsAllowlist">ResetCortexModelsAllowlist</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCsvTimestampFormat">ResetCsvTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDataRetentionTimeInDays">ResetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateInputFormat">ResetDateInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateOutputFormat">ResetDateOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultDdlCollation">ResetDefaultDdlCollation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolCpu">ResetDefaultNotebookComputePoolCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolGpu">ResetDefaultNotebookComputePoolGpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNullOrdering">ResetDefaultNullOrdering</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultStreamlitNotebookWarehouse">ResetDefaultStreamlitNotebookWarehouse</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUiDownloadButton">ResetDisableUiDownloadButton</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUserPrivilegeGrants">ResetDisableUserPrivilegeGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableAutomaticSensitiveDataClassificationLog">ResetEnableAutomaticSensitiveDataClassificationLog</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableEgressCostOptimizer">ResetEnableEgressCostOptimizer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableIdentifierFirstLogin">ResetEnableIdentifierFirstLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableInternalStagesPrivatelink">ResetEnableInternalStagesPrivatelink</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository">ResetEnableTriSecretAndRekeyOptOutForImageRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage">ResetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnhandledExceptionsReporting">ResetEnableUnhandledExceptionsReporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnloadPhysicalTypeOptimization">ResetEnableUnloadPhysicalTypeOptimization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedQuerySyntaxError">ResetEnableUnredactedQuerySyntaxError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedSecureObjectError">ResetEnableUnredactedSecureObjectError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnforceNetworkRulesForInternalStages">ResetEnforceNetworkRulesForInternalStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicMerge">ResetErrorOnNondeterministicMerge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicUpdate">ResetErrorOnNondeterministicUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEventTable">ResetEventTable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalOauthAddPrivilegedRolesToBlockedList">ResetExternalOauthAddPrivilegedRolesToBlockedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalVolume">ResetExternalVolume</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetFeaturePolicy">ResetFeaturePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeographyOutputFormat">ResetGeographyOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeometryOutputFormat">ResetGeometryOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetHybridTableLockTimeout">ResetHybridTableLockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetInitialReplicationSizeLimitInTb">ResetInitialReplicationSizeLimitInTb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatDecimalAsInt">ResetJdbcTreatDecimalAsInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatTimestampNtzAsUtc">ResetJdbcTreatTimestampNtzAsUtc</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcUseSessionTimezone">ResetJdbcUseSessionTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsonIndent">ResetJsonIndent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsTreatIntegerAsBigint">ResetJsTreatIntegerAsBigint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetListingAutoFulfillmentReplicationRefreshSchedule">ResetListingAutoFulfillmentReplicationRefreshSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLockTimeout">ResetLockTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLogLevel">ResetLogLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxConcurrencyLevel">ResetMaxConcurrencyLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxDataExtensionTimeInDays">ResetMaxDataExtensionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMetricLevel">ResetMetricLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMinDataRetentionTimeInDays">ResetMinDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMultiStatementCount">ResetMultiStatementCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNetworkPolicy">ResetNetworkPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNoorderSequenceAsDefault">ResetNoorderSequenceAsDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOauthAddPrivilegedRolesToBlockedList">ResetOauthAddPrivilegedRolesToBlockedList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOdbcTreatDecimalAsInt">ResetOdbcTreatDecimalAsInt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPackagesPolicy">ResetPackagesPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPasswordPolicy">ResetPasswordPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPeriodicDataRekeying">ResetPeriodicDataRekeying</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPipeExecutionPaused">ResetPipeExecutionPaused</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInlineUrl">ResetPreventUnloadToInlineUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInternalStages">ResetPreventUnloadToInternalStages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerModules">ResetPythonProfilerModules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerTargetStage">ResetPythonProfilerTargetStage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQueryTag">ResetQueryTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQuotedIdentifiersIgnoreCase">ResetQuotedIdentifiersIgnoreCase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetReplaceInvalidCharacters">ResetReplaceInvalidCharacters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageCreation">ResetRequireStorageIntegrationForStageCreation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageOperation">ResetRequireStorageIntegrationForStageOperation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetResourceMonitor">ResetResourceMonitor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRowsPerResultset">ResetRowsPerResultset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetS3StageVpceDnsName">ResetS3StageVpceDnsName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSamlIdentityProvider">ResetSamlIdentityProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSearchPath">ResetSearchPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMaxStatementSize">ResetServerlessTaskMaxStatementSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMinStatementSize">ResetServerlessTaskMinStatementSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSessionPolicy">ResetSessionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSimulatedDataSharingConsumer">ResetSimulatedDataSharingConsumer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSsoLoginPage">ResetSsoLoginPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementQueuedTimeoutInSeconds">ResetStatementQueuedTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementTimeoutInSeconds">ResetStatementTimeoutInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStorageSerializationPolicy">ResetStorageSerializationPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStrictJsonOutput">ResetStrictJsonOutput</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSuspendTaskAfterNumFailures">ResetSuspendTaskAfterNumFailures</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTaskAutoRetryAttempts">ResetTaskAutoRetryAttempts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeInputFormat">ResetTimeInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeOutputFormat">ResetTimeOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampDayIsAlways24H">ResetTimestampDayIsAlways24H</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampInputFormat">ResetTimestampInputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampLtzOutputFormat">ResetTimestampLtzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampNtzOutputFormat">ResetTimestampNtzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampOutputFormat">ResetTimestampOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTypeMapping">ResetTimestampTypeMapping</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTzOutputFormat">ResetTimestampTzOutputFormat</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimezone">ResetTimezone</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTraceLevel">ResetTraceLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionAbortOnError">ResetTransactionAbortOnError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionDefaultIsolationLevel">ResetTransactionDefaultIsolationLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTwoDigitCenturyStart">ResetTwoDigitCenturyStart</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUnsupportedDdlAction">ResetUnsupportedDdlAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUseCachedResult">ResetUseCachedResult</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskManagedInitialWarehouseSize">ResetUserTaskManagedInitialWarehouseSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskMinimumTriggerIntervalInSeconds">ResetUserTaskMinimumTriggerIntervalInSeconds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskTimeoutMs">ResetUserTaskTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekOfYearPolicy">ResetWeekOfYearPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekStart">ResetWeekStart</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts"></a>

```csharp
private void PutTimeouts(CurrentAccountTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>

---

##### `ResetAbortDetachedQuery` <a name="ResetAbortDetachedQuery" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAbortDetachedQuery"></a>

```csharp
private void ResetAbortDetachedQuery()
```

##### `ResetActivePythonProfiler` <a name="ResetActivePythonProfiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetActivePythonProfiler"></a>

```csharp
private void ResetActivePythonProfiler()
```

##### `ResetAllowClientMfaCaching` <a name="ResetAllowClientMfaCaching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowClientMfaCaching"></a>

```csharp
private void ResetAllowClientMfaCaching()
```

##### `ResetAllowIdToken` <a name="ResetAllowIdToken" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAllowIdToken"></a>

```csharp
private void ResetAllowIdToken()
```

##### `ResetAuthenticationPolicy` <a name="ResetAuthenticationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAuthenticationPolicy"></a>

```csharp
private void ResetAuthenticationPolicy()
```

##### `ResetAutocommit` <a name="ResetAutocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetAutocommit"></a>

```csharp
private void ResetAutocommit()
```

##### `ResetBaseLocationPrefix` <a name="ResetBaseLocationPrefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBaseLocationPrefix"></a>

```csharp
private void ResetBaseLocationPrefix()
```

##### `ResetBinaryInputFormat` <a name="ResetBinaryInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryInputFormat"></a>

```csharp
private void ResetBinaryInputFormat()
```

##### `ResetBinaryOutputFormat` <a name="ResetBinaryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetBinaryOutputFormat"></a>

```csharp
private void ResetBinaryOutputFormat()
```

##### `ResetCatalog` <a name="ResetCatalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalog"></a>

```csharp
private void ResetCatalog()
```

##### `ResetCatalogSync` <a name="ResetCatalogSync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCatalogSync"></a>

```csharp
private void ResetCatalogSync()
```

##### `ResetClientEnableLogInfoStatementParameters` <a name="ResetClientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEnableLogInfoStatementParameters"></a>

```csharp
private void ResetClientEnableLogInfoStatementParameters()
```

##### `ResetClientEncryptionKeySize` <a name="ResetClientEncryptionKeySize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientEncryptionKeySize"></a>

```csharp
private void ResetClientEncryptionKeySize()
```

##### `ResetClientMemoryLimit` <a name="ResetClientMemoryLimit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMemoryLimit"></a>

```csharp
private void ResetClientMemoryLimit()
```

##### `ResetClientMetadataRequestUseConnectionCtx` <a name="ResetClientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataRequestUseConnectionCtx"></a>

```csharp
private void ResetClientMetadataRequestUseConnectionCtx()
```

##### `ResetClientMetadataUseSessionDatabase` <a name="ResetClientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientMetadataUseSessionDatabase"></a>

```csharp
private void ResetClientMetadataUseSessionDatabase()
```

##### `ResetClientPrefetchThreads` <a name="ResetClientPrefetchThreads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientPrefetchThreads"></a>

```csharp
private void ResetClientPrefetchThreads()
```

##### `ResetClientResultChunkSize` <a name="ResetClientResultChunkSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultChunkSize"></a>

```csharp
private void ResetClientResultChunkSize()
```

##### `ResetClientResultColumnCaseInsensitive` <a name="ResetClientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientResultColumnCaseInsensitive"></a>

```csharp
private void ResetClientResultColumnCaseInsensitive()
```

##### `ResetClientSessionKeepAlive` <a name="ResetClientSessionKeepAlive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAlive"></a>

```csharp
private void ResetClientSessionKeepAlive()
```

##### `ResetClientSessionKeepAliveHeartbeatFrequency` <a name="ResetClientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientSessionKeepAliveHeartbeatFrequency"></a>

```csharp
private void ResetClientSessionKeepAliveHeartbeatFrequency()
```

##### `ResetClientTimestampTypeMapping` <a name="ResetClientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetClientTimestampTypeMapping"></a>

```csharp
private void ResetClientTimestampTypeMapping()
```

##### `ResetCortexEnabledCrossRegion` <a name="ResetCortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexEnabledCrossRegion"></a>

```csharp
private void ResetCortexEnabledCrossRegion()
```

##### `ResetCortexModelsAllowlist` <a name="ResetCortexModelsAllowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCortexModelsAllowlist"></a>

```csharp
private void ResetCortexModelsAllowlist()
```

##### `ResetCsvTimestampFormat` <a name="ResetCsvTimestampFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetCsvTimestampFormat"></a>

```csharp
private void ResetCsvTimestampFormat()
```

##### `ResetDataRetentionTimeInDays` <a name="ResetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDataRetentionTimeInDays"></a>

```csharp
private void ResetDataRetentionTimeInDays()
```

##### `ResetDateInputFormat` <a name="ResetDateInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateInputFormat"></a>

```csharp
private void ResetDateInputFormat()
```

##### `ResetDateOutputFormat` <a name="ResetDateOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDateOutputFormat"></a>

```csharp
private void ResetDateOutputFormat()
```

##### `ResetDefaultDdlCollation` <a name="ResetDefaultDdlCollation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultDdlCollation"></a>

```csharp
private void ResetDefaultDdlCollation()
```

##### `ResetDefaultNotebookComputePoolCpu` <a name="ResetDefaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolCpu"></a>

```csharp
private void ResetDefaultNotebookComputePoolCpu()
```

##### `ResetDefaultNotebookComputePoolGpu` <a name="ResetDefaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNotebookComputePoolGpu"></a>

```csharp
private void ResetDefaultNotebookComputePoolGpu()
```

##### `ResetDefaultNullOrdering` <a name="ResetDefaultNullOrdering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultNullOrdering"></a>

```csharp
private void ResetDefaultNullOrdering()
```

##### `ResetDefaultStreamlitNotebookWarehouse` <a name="ResetDefaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDefaultStreamlitNotebookWarehouse"></a>

```csharp
private void ResetDefaultStreamlitNotebookWarehouse()
```

##### `ResetDisableUiDownloadButton` <a name="ResetDisableUiDownloadButton" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUiDownloadButton"></a>

```csharp
private void ResetDisableUiDownloadButton()
```

##### `ResetDisableUserPrivilegeGrants` <a name="ResetDisableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetDisableUserPrivilegeGrants"></a>

```csharp
private void ResetDisableUserPrivilegeGrants()
```

##### `ResetEnableAutomaticSensitiveDataClassificationLog` <a name="ResetEnableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableAutomaticSensitiveDataClassificationLog"></a>

```csharp
private void ResetEnableAutomaticSensitiveDataClassificationLog()
```

##### `ResetEnableEgressCostOptimizer` <a name="ResetEnableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableEgressCostOptimizer"></a>

```csharp
private void ResetEnableEgressCostOptimizer()
```

##### `ResetEnableIdentifierFirstLogin` <a name="ResetEnableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableIdentifierFirstLogin"></a>

```csharp
private void ResetEnableIdentifierFirstLogin()
```

##### `ResetEnableInternalStagesPrivatelink` <a name="ResetEnableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableInternalStagesPrivatelink"></a>

```csharp
private void ResetEnableInternalStagesPrivatelink()
```

##### `ResetEnableTriSecretAndRekeyOptOutForImageRepository` <a name="ResetEnableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForImageRepository"></a>

```csharp
private void ResetEnableTriSecretAndRekeyOptOutForImageRepository()
```

##### `ResetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage` <a name="ResetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```csharp
private void ResetEnableTriSecretAndRekeyOptOutForSpcsBlockStorage()
```

##### `ResetEnableUnhandledExceptionsReporting` <a name="ResetEnableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnhandledExceptionsReporting"></a>

```csharp
private void ResetEnableUnhandledExceptionsReporting()
```

##### `ResetEnableUnloadPhysicalTypeOptimization` <a name="ResetEnableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnloadPhysicalTypeOptimization"></a>

```csharp
private void ResetEnableUnloadPhysicalTypeOptimization()
```

##### `ResetEnableUnredactedQuerySyntaxError` <a name="ResetEnableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedQuerySyntaxError"></a>

```csharp
private void ResetEnableUnredactedQuerySyntaxError()
```

##### `ResetEnableUnredactedSecureObjectError` <a name="ResetEnableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnableUnredactedSecureObjectError"></a>

```csharp
private void ResetEnableUnredactedSecureObjectError()
```

##### `ResetEnforceNetworkRulesForInternalStages` <a name="ResetEnforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEnforceNetworkRulesForInternalStages"></a>

```csharp
private void ResetEnforceNetworkRulesForInternalStages()
```

##### `ResetErrorOnNondeterministicMerge` <a name="ResetErrorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicMerge"></a>

```csharp
private void ResetErrorOnNondeterministicMerge()
```

##### `ResetErrorOnNondeterministicUpdate` <a name="ResetErrorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetErrorOnNondeterministicUpdate"></a>

```csharp
private void ResetErrorOnNondeterministicUpdate()
```

##### `ResetEventTable` <a name="ResetEventTable" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetEventTable"></a>

```csharp
private void ResetEventTable()
```

##### `ResetExternalOauthAddPrivilegedRolesToBlockedList` <a name="ResetExternalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalOauthAddPrivilegedRolesToBlockedList"></a>

```csharp
private void ResetExternalOauthAddPrivilegedRolesToBlockedList()
```

##### `ResetExternalVolume` <a name="ResetExternalVolume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetExternalVolume"></a>

```csharp
private void ResetExternalVolume()
```

##### `ResetFeaturePolicy` <a name="ResetFeaturePolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetFeaturePolicy"></a>

```csharp
private void ResetFeaturePolicy()
```

##### `ResetGeographyOutputFormat` <a name="ResetGeographyOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeographyOutputFormat"></a>

```csharp
private void ResetGeographyOutputFormat()
```

##### `ResetGeometryOutputFormat` <a name="ResetGeometryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetGeometryOutputFormat"></a>

```csharp
private void ResetGeometryOutputFormat()
```

##### `ResetHybridTableLockTimeout` <a name="ResetHybridTableLockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetHybridTableLockTimeout"></a>

```csharp
private void ResetHybridTableLockTimeout()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetInitialReplicationSizeLimitInTb` <a name="ResetInitialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetInitialReplicationSizeLimitInTb"></a>

```csharp
private void ResetInitialReplicationSizeLimitInTb()
```

##### `ResetJdbcTreatDecimalAsInt` <a name="ResetJdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatDecimalAsInt"></a>

```csharp
private void ResetJdbcTreatDecimalAsInt()
```

##### `ResetJdbcTreatTimestampNtzAsUtc` <a name="ResetJdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcTreatTimestampNtzAsUtc"></a>

```csharp
private void ResetJdbcTreatTimestampNtzAsUtc()
```

##### `ResetJdbcUseSessionTimezone` <a name="ResetJdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJdbcUseSessionTimezone"></a>

```csharp
private void ResetJdbcUseSessionTimezone()
```

##### `ResetJsonIndent` <a name="ResetJsonIndent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsonIndent"></a>

```csharp
private void ResetJsonIndent()
```

##### `ResetJsTreatIntegerAsBigint` <a name="ResetJsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetJsTreatIntegerAsBigint"></a>

```csharp
private void ResetJsTreatIntegerAsBigint()
```

##### `ResetListingAutoFulfillmentReplicationRefreshSchedule` <a name="ResetListingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetListingAutoFulfillmentReplicationRefreshSchedule"></a>

```csharp
private void ResetListingAutoFulfillmentReplicationRefreshSchedule()
```

##### `ResetLockTimeout` <a name="ResetLockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLockTimeout"></a>

```csharp
private void ResetLockTimeout()
```

##### `ResetLogLevel` <a name="ResetLogLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetLogLevel"></a>

```csharp
private void ResetLogLevel()
```

##### `ResetMaxConcurrencyLevel` <a name="ResetMaxConcurrencyLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxConcurrencyLevel"></a>

```csharp
private void ResetMaxConcurrencyLevel()
```

##### `ResetMaxDataExtensionTimeInDays` <a name="ResetMaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMaxDataExtensionTimeInDays"></a>

```csharp
private void ResetMaxDataExtensionTimeInDays()
```

##### `ResetMetricLevel` <a name="ResetMetricLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMetricLevel"></a>

```csharp
private void ResetMetricLevel()
```

##### `ResetMinDataRetentionTimeInDays` <a name="ResetMinDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMinDataRetentionTimeInDays"></a>

```csharp
private void ResetMinDataRetentionTimeInDays()
```

##### `ResetMultiStatementCount` <a name="ResetMultiStatementCount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetMultiStatementCount"></a>

```csharp
private void ResetMultiStatementCount()
```

##### `ResetNetworkPolicy` <a name="ResetNetworkPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNetworkPolicy"></a>

```csharp
private void ResetNetworkPolicy()
```

##### `ResetNoorderSequenceAsDefault` <a name="ResetNoorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetNoorderSequenceAsDefault"></a>

```csharp
private void ResetNoorderSequenceAsDefault()
```

##### `ResetOauthAddPrivilegedRolesToBlockedList` <a name="ResetOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOauthAddPrivilegedRolesToBlockedList"></a>

```csharp
private void ResetOauthAddPrivilegedRolesToBlockedList()
```

##### `ResetOdbcTreatDecimalAsInt` <a name="ResetOdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetOdbcTreatDecimalAsInt"></a>

```csharp
private void ResetOdbcTreatDecimalAsInt()
```

##### `ResetPackagesPolicy` <a name="ResetPackagesPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPackagesPolicy"></a>

```csharp
private void ResetPackagesPolicy()
```

##### `ResetPasswordPolicy` <a name="ResetPasswordPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPasswordPolicy"></a>

```csharp
private void ResetPasswordPolicy()
```

##### `ResetPeriodicDataRekeying` <a name="ResetPeriodicDataRekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPeriodicDataRekeying"></a>

```csharp
private void ResetPeriodicDataRekeying()
```

##### `ResetPipeExecutionPaused` <a name="ResetPipeExecutionPaused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPipeExecutionPaused"></a>

```csharp
private void ResetPipeExecutionPaused()
```

##### `ResetPreventUnloadToInlineUrl` <a name="ResetPreventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInlineUrl"></a>

```csharp
private void ResetPreventUnloadToInlineUrl()
```

##### `ResetPreventUnloadToInternalStages` <a name="ResetPreventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPreventUnloadToInternalStages"></a>

```csharp
private void ResetPreventUnloadToInternalStages()
```

##### `ResetPythonProfilerModules` <a name="ResetPythonProfilerModules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerModules"></a>

```csharp
private void ResetPythonProfilerModules()
```

##### `ResetPythonProfilerTargetStage` <a name="ResetPythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetPythonProfilerTargetStage"></a>

```csharp
private void ResetPythonProfilerTargetStage()
```

##### `ResetQueryTag` <a name="ResetQueryTag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQueryTag"></a>

```csharp
private void ResetQueryTag()
```

##### `ResetQuotedIdentifiersIgnoreCase` <a name="ResetQuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetQuotedIdentifiersIgnoreCase"></a>

```csharp
private void ResetQuotedIdentifiersIgnoreCase()
```

##### `ResetReplaceInvalidCharacters` <a name="ResetReplaceInvalidCharacters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetReplaceInvalidCharacters"></a>

```csharp
private void ResetReplaceInvalidCharacters()
```

##### `ResetRequireStorageIntegrationForStageCreation` <a name="ResetRequireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageCreation"></a>

```csharp
private void ResetRequireStorageIntegrationForStageCreation()
```

##### `ResetRequireStorageIntegrationForStageOperation` <a name="ResetRequireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRequireStorageIntegrationForStageOperation"></a>

```csharp
private void ResetRequireStorageIntegrationForStageOperation()
```

##### `ResetResourceMonitor` <a name="ResetResourceMonitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetResourceMonitor"></a>

```csharp
private void ResetResourceMonitor()
```

##### `ResetRowsPerResultset` <a name="ResetRowsPerResultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetRowsPerResultset"></a>

```csharp
private void ResetRowsPerResultset()
```

##### `ResetS3StageVpceDnsName` <a name="ResetS3StageVpceDnsName" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetS3StageVpceDnsName"></a>

```csharp
private void ResetS3StageVpceDnsName()
```

##### `ResetSamlIdentityProvider` <a name="ResetSamlIdentityProvider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSamlIdentityProvider"></a>

```csharp
private void ResetSamlIdentityProvider()
```

##### `ResetSearchPath` <a name="ResetSearchPath" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSearchPath"></a>

```csharp
private void ResetSearchPath()
```

##### `ResetServerlessTaskMaxStatementSize` <a name="ResetServerlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMaxStatementSize"></a>

```csharp
private void ResetServerlessTaskMaxStatementSize()
```

##### `ResetServerlessTaskMinStatementSize` <a name="ResetServerlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetServerlessTaskMinStatementSize"></a>

```csharp
private void ResetServerlessTaskMinStatementSize()
```

##### `ResetSessionPolicy` <a name="ResetSessionPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSessionPolicy"></a>

```csharp
private void ResetSessionPolicy()
```

##### `ResetSimulatedDataSharingConsumer` <a name="ResetSimulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSimulatedDataSharingConsumer"></a>

```csharp
private void ResetSimulatedDataSharingConsumer()
```

##### `ResetSsoLoginPage` <a name="ResetSsoLoginPage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSsoLoginPage"></a>

```csharp
private void ResetSsoLoginPage()
```

##### `ResetStatementQueuedTimeoutInSeconds` <a name="ResetStatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementQueuedTimeoutInSeconds"></a>

```csharp
private void ResetStatementQueuedTimeoutInSeconds()
```

##### `ResetStatementTimeoutInSeconds` <a name="ResetStatementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStatementTimeoutInSeconds"></a>

```csharp
private void ResetStatementTimeoutInSeconds()
```

##### `ResetStorageSerializationPolicy` <a name="ResetStorageSerializationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStorageSerializationPolicy"></a>

```csharp
private void ResetStorageSerializationPolicy()
```

##### `ResetStrictJsonOutput` <a name="ResetStrictJsonOutput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetStrictJsonOutput"></a>

```csharp
private void ResetStrictJsonOutput()
```

##### `ResetSuspendTaskAfterNumFailures` <a name="ResetSuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetSuspendTaskAfterNumFailures"></a>

```csharp
private void ResetSuspendTaskAfterNumFailures()
```

##### `ResetTaskAutoRetryAttempts` <a name="ResetTaskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTaskAutoRetryAttempts"></a>

```csharp
private void ResetTaskAutoRetryAttempts()
```

##### `ResetTimeInputFormat` <a name="ResetTimeInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeInputFormat"></a>

```csharp
private void ResetTimeInputFormat()
```

##### `ResetTimeOutputFormat` <a name="ResetTimeOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeOutputFormat"></a>

```csharp
private void ResetTimeOutputFormat()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetTimestampDayIsAlways24H` <a name="ResetTimestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampDayIsAlways24H"></a>

```csharp
private void ResetTimestampDayIsAlways24H()
```

##### `ResetTimestampInputFormat` <a name="ResetTimestampInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampInputFormat"></a>

```csharp
private void ResetTimestampInputFormat()
```

##### `ResetTimestampLtzOutputFormat` <a name="ResetTimestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampLtzOutputFormat"></a>

```csharp
private void ResetTimestampLtzOutputFormat()
```

##### `ResetTimestampNtzOutputFormat` <a name="ResetTimestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampNtzOutputFormat"></a>

```csharp
private void ResetTimestampNtzOutputFormat()
```

##### `ResetTimestampOutputFormat` <a name="ResetTimestampOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampOutputFormat"></a>

```csharp
private void ResetTimestampOutputFormat()
```

##### `ResetTimestampTypeMapping` <a name="ResetTimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTypeMapping"></a>

```csharp
private void ResetTimestampTypeMapping()
```

##### `ResetTimestampTzOutputFormat` <a name="ResetTimestampTzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimestampTzOutputFormat"></a>

```csharp
private void ResetTimestampTzOutputFormat()
```

##### `ResetTimezone` <a name="ResetTimezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTimezone"></a>

```csharp
private void ResetTimezone()
```

##### `ResetTraceLevel` <a name="ResetTraceLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTraceLevel"></a>

```csharp
private void ResetTraceLevel()
```

##### `ResetTransactionAbortOnError` <a name="ResetTransactionAbortOnError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionAbortOnError"></a>

```csharp
private void ResetTransactionAbortOnError()
```

##### `ResetTransactionDefaultIsolationLevel` <a name="ResetTransactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTransactionDefaultIsolationLevel"></a>

```csharp
private void ResetTransactionDefaultIsolationLevel()
```

##### `ResetTwoDigitCenturyStart` <a name="ResetTwoDigitCenturyStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetTwoDigitCenturyStart"></a>

```csharp
private void ResetTwoDigitCenturyStart()
```

##### `ResetUnsupportedDdlAction` <a name="ResetUnsupportedDdlAction" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUnsupportedDdlAction"></a>

```csharp
private void ResetUnsupportedDdlAction()
```

##### `ResetUseCachedResult` <a name="ResetUseCachedResult" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUseCachedResult"></a>

```csharp
private void ResetUseCachedResult()
```

##### `ResetUserTaskManagedInitialWarehouseSize` <a name="ResetUserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskManagedInitialWarehouseSize"></a>

```csharp
private void ResetUserTaskManagedInitialWarehouseSize()
```

##### `ResetUserTaskMinimumTriggerIntervalInSeconds` <a name="ResetUserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskMinimumTriggerIntervalInSeconds"></a>

```csharp
private void ResetUserTaskMinimumTriggerIntervalInSeconds()
```

##### `ResetUserTaskTimeoutMs` <a name="ResetUserTaskTimeoutMs" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetUserTaskTimeoutMs"></a>

```csharp
private void ResetUserTaskTimeoutMs()
```

##### `ResetWeekOfYearPolicy` <a name="ResetWeekOfYearPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekOfYearPolicy"></a>

```csharp
private void ResetWeekOfYearPolicy()
```

##### `ResetWeekStart` <a name="ResetWeekStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.resetWeekStart"></a>

```csharp
private void ResetWeekStart()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CurrentAccount resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

CurrentAccount.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

CurrentAccount.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

CurrentAccount.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

CurrentAccount.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a CurrentAccount resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CurrentAccount to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CurrentAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the CurrentAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference">CurrentAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQueryInput">AbortDetachedQueryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfilerInput">ActivePythonProfilerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCachingInput">AllowClientMfaCachingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdTokenInput">AllowIdTokenInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicyInput">AuthenticationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommitInput">AutocommitInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefixInput">BaseLocationPrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormatInput">BinaryInputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormatInput">BinaryOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogInput">CatalogInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSyncInput">CatalogSyncInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParametersInput">ClientEnableLogInfoStatementParametersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySizeInput">ClientEncryptionKeySizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimitInput">ClientMemoryLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtxInput">ClientMetadataRequestUseConnectionCtxInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabaseInput">ClientMetadataUseSessionDatabaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreadsInput">ClientPrefetchThreadsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSizeInput">ClientResultChunkSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitiveInput">ClientResultColumnCaseInsensitiveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput">ClientSessionKeepAliveHeartbeatFrequencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveInput">ClientSessionKeepAliveInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMappingInput">ClientTimestampTypeMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegionInput">CortexEnabledCrossRegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlistInput">CortexModelsAllowlistInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormatInput">CsvTimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDaysInput">DataRetentionTimeInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormatInput">DateInputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormatInput">DateOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollationInput">DefaultDdlCollationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpuInput">DefaultNotebookComputePoolCpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpuInput">DefaultNotebookComputePoolGpuInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrderingInput">DefaultNullOrderingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouseInput">DefaultStreamlitNotebookWarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButtonInput">DisableUiDownloadButtonInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrantsInput">DisableUserPrivilegeGrantsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLogInput">EnableAutomaticSensitiveDataClassificationLogInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizerInput">EnableEgressCostOptimizerInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLoginInput">EnableIdentifierFirstLoginInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelinkInput">EnableInternalStagesPrivatelinkInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput">EnableTriSecretAndRekeyOptOutForImageRepositoryInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput">EnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReportingInput">EnableUnhandledExceptionsReportingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimizationInput">EnableUnloadPhysicalTypeOptimizationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxErrorInput">EnableUnredactedQuerySyntaxErrorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectErrorInput">EnableUnredactedSecureObjectErrorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStagesInput">EnforceNetworkRulesForInternalStagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMergeInput">ErrorOnNondeterministicMergeInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdateInput">ErrorOnNondeterministicUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTableInput">EventTableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput">ExternalOauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolumeInput">ExternalVolumeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicyInput">FeaturePolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormatInput">GeographyOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormatInput">GeometryOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeoutInput">HybridTableLockTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTbInput">InitialReplicationSizeLimitInTbInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsIntInput">JdbcTreatDecimalAsIntInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtcInput">JdbcTreatTimestampNtzAsUtcInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezoneInput">JdbcUseSessionTimezoneInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndentInput">JsonIndentInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigintInput">JsTreatIntegerAsBigintInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput">ListingAutoFulfillmentReplicationRefreshScheduleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeoutInput">LockTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevelInput">LogLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevelInput">MaxConcurrencyLevelInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDaysInput">MaxDataExtensionTimeInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevelInput">MetricLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDaysInput">MinDataRetentionTimeInDaysInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCountInput">MultiStatementCountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicyInput">NetworkPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefaultInput">NoorderSequenceAsDefaultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedListInput">OauthAddPrivilegedRolesToBlockedListInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsIntInput">OdbcTreatDecimalAsIntInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicyInput">PackagesPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicyInput">PasswordPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeyingInput">PeriodicDataRekeyingInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPausedInput">PipeExecutionPausedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrlInput">PreventUnloadToInlineUrlInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStagesInput">PreventUnloadToInternalStagesInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModulesInput">PythonProfilerModulesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStageInput">PythonProfilerTargetStageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTagInput">QueryTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCaseInput">QuotedIdentifiersIgnoreCaseInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharactersInput">ReplaceInvalidCharactersInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreationInput">RequireStorageIntegrationForStageCreationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperationInput">RequireStorageIntegrationForStageOperationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitorInput">ResourceMonitorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultsetInput">RowsPerResultsetInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsNameInput">S3StageVpceDnsNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProviderInput">SamlIdentityProviderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPathInput">SearchPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSizeInput">ServerlessTaskMaxStatementSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSizeInput">ServerlessTaskMinStatementSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicyInput">SessionPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumerInput">SimulatedDataSharingConsumerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPageInput">SsoLoginPageInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSecondsInput">StatementQueuedTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSecondsInput">StatementTimeoutInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicyInput">StorageSerializationPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutputInput">StrictJsonOutputInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailuresInput">SuspendTaskAfterNumFailuresInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttemptsInput">TaskAutoRetryAttemptsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormatInput">TimeInputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormatInput">TimeOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24HInput">TimestampDayIsAlways24HInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormatInput">TimestampInputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormatInput">TimestampLtzOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormatInput">TimestampNtzOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormatInput">TimestampOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMappingInput">TimestampTypeMappingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormatInput">TimestampTzOutputFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezoneInput">TimezoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevelInput">TraceLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnErrorInput">TransactionAbortOnErrorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevelInput">TransactionDefaultIsolationLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStartInput">TwoDigitCenturyStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlActionInput">UnsupportedDdlActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResultInput">UseCachedResultInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSizeInput">UserTaskManagedInitialWarehouseSizeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSecondsInput">UserTaskMinimumTriggerIntervalInSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMsInput">UserTaskTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicyInput">WeekOfYearPolicyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStartInput">WeekStartInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQuery">AbortDetachedQuery</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfiler">ActivePythonProfiler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCaching">AllowClientMfaCaching</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdToken">AllowIdToken</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommit">Autocommit</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefix">BaseLocationPrefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormat">BinaryInputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormat">BinaryOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalog">Catalog</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSync">CatalogSync</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParameters">ClientEnableLogInfoStatementParameters</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySize">ClientEncryptionKeySize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimit">ClientMemoryLimit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtx">ClientMetadataRequestUseConnectionCtx</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabase">ClientMetadataUseSessionDatabase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreads">ClientPrefetchThreads</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSize">ClientResultChunkSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitive">ClientResultColumnCaseInsensitive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAlive">ClientSessionKeepAlive</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequency">ClientSessionKeepAliveHeartbeatFrequency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMapping">ClientTimestampTypeMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegion">CortexEnabledCrossRegion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlist">CortexModelsAllowlist</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormat">CsvTimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormat">DateInputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormat">DateOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpu">DefaultNotebookComputePoolCpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpu">DefaultNotebookComputePoolGpu</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrdering">DefaultNullOrdering</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouse">DefaultStreamlitNotebookWarehouse</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButton">DisableUiDownloadButton</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrants">DisableUserPrivilegeGrants</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLog">EnableAutomaticSensitiveDataClassificationLog</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizer">EnableEgressCostOptimizer</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLogin">EnableIdentifierFirstLogin</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelink">EnableInternalStagesPrivatelink</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepository">EnableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">EnableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReporting">EnableUnhandledExceptionsReporting</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimization">EnableUnloadPhysicalTypeOptimization</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxError">EnableUnredactedQuerySyntaxError</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectError">EnableUnredactedSecureObjectError</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStages">EnforceNetworkRulesForInternalStages</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMerge">ErrorOnNondeterministicMerge</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdate">ErrorOnNondeterministicUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTable">EventTable</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedList">ExternalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicy">FeaturePolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormat">GeographyOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormat">GeometryOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeout">HybridTableLockTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTb">InitialReplicationSizeLimitInTb</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsInt">JdbcTreatDecimalAsInt</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtc">JdbcTreatTimestampNtzAsUtc</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezone">JdbcUseSessionTimezone</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndent">JsonIndent</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigint">JsTreatIntegerAsBigint</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshSchedule">ListingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeout">LockTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevel">LogLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevel">MetricLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDays">MinDataRetentionTimeInDays</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCount">MultiStatementCount</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicy">NetworkPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefault">NoorderSequenceAsDefault</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedList">OauthAddPrivilegedRolesToBlockedList</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsInt">OdbcTreatDecimalAsInt</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicy">PackagesPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeying">PeriodicDataRekeying</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPaused">PipeExecutionPaused</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrl">PreventUnloadToInlineUrl</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStages">PreventUnloadToInternalStages</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModules">PythonProfilerModules</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStage">PythonProfilerTargetStage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTag">QueryTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreation">RequireStorageIntegrationForStageCreation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperation">RequireStorageIntegrationForStageOperation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitor">ResourceMonitor</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultset">RowsPerResultset</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsName">S3StageVpceDnsName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProvider">SamlIdentityProvider</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPath">SearchPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSize">ServerlessTaskMaxStatementSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSize">ServerlessTaskMinStatementSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicy">SessionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumer">SimulatedDataSharingConsumer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPage">SsoLoginPage</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutput">StrictJsonOutput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormat">TimeInputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormat">TimeOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24H">TimestampDayIsAlways24H</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormat">TimestampInputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormat">TimestampLtzOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormat">TimestampNtzOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormat">TimestampOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMapping">TimestampTypeMapping</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormat">TimestampTzOutputFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezone">Timezone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevel">TraceLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnError">TransactionAbortOnError</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevel">TransactionDefaultIsolationLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStart">TwoDigitCenturyStart</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlAction">UnsupportedDdlAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResult">UseCachedResult</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicy">WeekOfYearPolicy</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStart">WeekStart</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeouts"></a>

```csharp
public CurrentAccountTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference">CurrentAccountTimeoutsOutputReference</a>

---

##### `AbortDetachedQueryInput`<sup>Optional</sup> <a name="AbortDetachedQueryInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQueryInput"></a>

```csharp
public object AbortDetachedQueryInput { get; }
```

- *Type:* object

---

##### `ActivePythonProfilerInput`<sup>Optional</sup> <a name="ActivePythonProfilerInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfilerInput"></a>

```csharp
public string ActivePythonProfilerInput { get; }
```

- *Type:* string

---

##### `AllowClientMfaCachingInput`<sup>Optional</sup> <a name="AllowClientMfaCachingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCachingInput"></a>

```csharp
public object AllowClientMfaCachingInput { get; }
```

- *Type:* object

---

##### `AllowIdTokenInput`<sup>Optional</sup> <a name="AllowIdTokenInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdTokenInput"></a>

```csharp
public object AllowIdTokenInput { get; }
```

- *Type:* object

---

##### `AuthenticationPolicyInput`<sup>Optional</sup> <a name="AuthenticationPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicyInput"></a>

```csharp
public string AuthenticationPolicyInput { get; }
```

- *Type:* string

---

##### `AutocommitInput`<sup>Optional</sup> <a name="AutocommitInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommitInput"></a>

```csharp
public object AutocommitInput { get; }
```

- *Type:* object

---

##### `BaseLocationPrefixInput`<sup>Optional</sup> <a name="BaseLocationPrefixInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefixInput"></a>

```csharp
public string BaseLocationPrefixInput { get; }
```

- *Type:* string

---

##### `BinaryInputFormatInput`<sup>Optional</sup> <a name="BinaryInputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormatInput"></a>

```csharp
public string BinaryInputFormatInput { get; }
```

- *Type:* string

---

##### `BinaryOutputFormatInput`<sup>Optional</sup> <a name="BinaryOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormatInput"></a>

```csharp
public string BinaryOutputFormatInput { get; }
```

- *Type:* string

---

##### `CatalogInput`<sup>Optional</sup> <a name="CatalogInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogInput"></a>

```csharp
public string CatalogInput { get; }
```

- *Type:* string

---

##### `CatalogSyncInput`<sup>Optional</sup> <a name="CatalogSyncInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSyncInput"></a>

```csharp
public string CatalogSyncInput { get; }
```

- *Type:* string

---

##### `ClientEnableLogInfoStatementParametersInput`<sup>Optional</sup> <a name="ClientEnableLogInfoStatementParametersInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParametersInput"></a>

```csharp
public object ClientEnableLogInfoStatementParametersInput { get; }
```

- *Type:* object

---

##### `ClientEncryptionKeySizeInput`<sup>Optional</sup> <a name="ClientEncryptionKeySizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySizeInput"></a>

```csharp
public double ClientEncryptionKeySizeInput { get; }
```

- *Type:* double

---

##### `ClientMemoryLimitInput`<sup>Optional</sup> <a name="ClientMemoryLimitInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimitInput"></a>

```csharp
public double ClientMemoryLimitInput { get; }
```

- *Type:* double

---

##### `ClientMetadataRequestUseConnectionCtxInput`<sup>Optional</sup> <a name="ClientMetadataRequestUseConnectionCtxInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtxInput"></a>

```csharp
public object ClientMetadataRequestUseConnectionCtxInput { get; }
```

- *Type:* object

---

##### `ClientMetadataUseSessionDatabaseInput`<sup>Optional</sup> <a name="ClientMetadataUseSessionDatabaseInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabaseInput"></a>

```csharp
public object ClientMetadataUseSessionDatabaseInput { get; }
```

- *Type:* object

---

##### `ClientPrefetchThreadsInput`<sup>Optional</sup> <a name="ClientPrefetchThreadsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreadsInput"></a>

```csharp
public double ClientPrefetchThreadsInput { get; }
```

- *Type:* double

---

##### `ClientResultChunkSizeInput`<sup>Optional</sup> <a name="ClientResultChunkSizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSizeInput"></a>

```csharp
public double ClientResultChunkSizeInput { get; }
```

- *Type:* double

---

##### `ClientResultColumnCaseInsensitiveInput`<sup>Optional</sup> <a name="ClientResultColumnCaseInsensitiveInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitiveInput"></a>

```csharp
public object ClientResultColumnCaseInsensitiveInput { get; }
```

- *Type:* object

---

##### `ClientSessionKeepAliveHeartbeatFrequencyInput`<sup>Optional</sup> <a name="ClientSessionKeepAliveHeartbeatFrequencyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequencyInput"></a>

```csharp
public double ClientSessionKeepAliveHeartbeatFrequencyInput { get; }
```

- *Type:* double

---

##### `ClientSessionKeepAliveInput`<sup>Optional</sup> <a name="ClientSessionKeepAliveInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveInput"></a>

```csharp
public object ClientSessionKeepAliveInput { get; }
```

- *Type:* object

---

##### `ClientTimestampTypeMappingInput`<sup>Optional</sup> <a name="ClientTimestampTypeMappingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMappingInput"></a>

```csharp
public string ClientTimestampTypeMappingInput { get; }
```

- *Type:* string

---

##### `CortexEnabledCrossRegionInput`<sup>Optional</sup> <a name="CortexEnabledCrossRegionInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegionInput"></a>

```csharp
public string CortexEnabledCrossRegionInput { get; }
```

- *Type:* string

---

##### `CortexModelsAllowlistInput`<sup>Optional</sup> <a name="CortexModelsAllowlistInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlistInput"></a>

```csharp
public string CortexModelsAllowlistInput { get; }
```

- *Type:* string

---

##### `CsvTimestampFormatInput`<sup>Optional</sup> <a name="CsvTimestampFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormatInput"></a>

```csharp
public string CsvTimestampFormatInput { get; }
```

- *Type:* string

---

##### `DataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="DataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDaysInput"></a>

```csharp
public double DataRetentionTimeInDaysInput { get; }
```

- *Type:* double

---

##### `DateInputFormatInput`<sup>Optional</sup> <a name="DateInputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormatInput"></a>

```csharp
public string DateInputFormatInput { get; }
```

- *Type:* string

---

##### `DateOutputFormatInput`<sup>Optional</sup> <a name="DateOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormatInput"></a>

```csharp
public string DateOutputFormatInput { get; }
```

- *Type:* string

---

##### `DefaultDdlCollationInput`<sup>Optional</sup> <a name="DefaultDdlCollationInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollationInput"></a>

```csharp
public string DefaultDdlCollationInput { get; }
```

- *Type:* string

---

##### `DefaultNotebookComputePoolCpuInput`<sup>Optional</sup> <a name="DefaultNotebookComputePoolCpuInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpuInput"></a>

```csharp
public string DefaultNotebookComputePoolCpuInput { get; }
```

- *Type:* string

---

##### `DefaultNotebookComputePoolGpuInput`<sup>Optional</sup> <a name="DefaultNotebookComputePoolGpuInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpuInput"></a>

```csharp
public string DefaultNotebookComputePoolGpuInput { get; }
```

- *Type:* string

---

##### `DefaultNullOrderingInput`<sup>Optional</sup> <a name="DefaultNullOrderingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrderingInput"></a>

```csharp
public string DefaultNullOrderingInput { get; }
```

- *Type:* string

---

##### `DefaultStreamlitNotebookWarehouseInput`<sup>Optional</sup> <a name="DefaultStreamlitNotebookWarehouseInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouseInput"></a>

```csharp
public string DefaultStreamlitNotebookWarehouseInput { get; }
```

- *Type:* string

---

##### `DisableUiDownloadButtonInput`<sup>Optional</sup> <a name="DisableUiDownloadButtonInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButtonInput"></a>

```csharp
public object DisableUiDownloadButtonInput { get; }
```

- *Type:* object

---

##### `DisableUserPrivilegeGrantsInput`<sup>Optional</sup> <a name="DisableUserPrivilegeGrantsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrantsInput"></a>

```csharp
public object DisableUserPrivilegeGrantsInput { get; }
```

- *Type:* object

---

##### `EnableAutomaticSensitiveDataClassificationLogInput`<sup>Optional</sup> <a name="EnableAutomaticSensitiveDataClassificationLogInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLogInput"></a>

```csharp
public object EnableAutomaticSensitiveDataClassificationLogInput { get; }
```

- *Type:* object

---

##### `EnableEgressCostOptimizerInput`<sup>Optional</sup> <a name="EnableEgressCostOptimizerInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizerInput"></a>

```csharp
public object EnableEgressCostOptimizerInput { get; }
```

- *Type:* object

---

##### `EnableIdentifierFirstLoginInput`<sup>Optional</sup> <a name="EnableIdentifierFirstLoginInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLoginInput"></a>

```csharp
public object EnableIdentifierFirstLoginInput { get; }
```

- *Type:* object

---

##### `EnableInternalStagesPrivatelinkInput`<sup>Optional</sup> <a name="EnableInternalStagesPrivatelinkInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelinkInput"></a>

```csharp
public object EnableInternalStagesPrivatelinkInput { get; }
```

- *Type:* object

---

##### `EnableTriSecretAndRekeyOptOutForImageRepositoryInput`<sup>Optional</sup> <a name="EnableTriSecretAndRekeyOptOutForImageRepositoryInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepositoryInput"></a>

```csharp
public object EnableTriSecretAndRekeyOptOutForImageRepositoryInput { get; }
```

- *Type:* object

---

##### `EnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput`<sup>Optional</sup> <a name="EnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorageInput"></a>

```csharp
public object EnableTriSecretAndRekeyOptOutForSpcsBlockStorageInput { get; }
```

- *Type:* object

---

##### `EnableUnhandledExceptionsReportingInput`<sup>Optional</sup> <a name="EnableUnhandledExceptionsReportingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReportingInput"></a>

```csharp
public object EnableUnhandledExceptionsReportingInput { get; }
```

- *Type:* object

---

##### `EnableUnloadPhysicalTypeOptimizationInput`<sup>Optional</sup> <a name="EnableUnloadPhysicalTypeOptimizationInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimizationInput"></a>

```csharp
public object EnableUnloadPhysicalTypeOptimizationInput { get; }
```

- *Type:* object

---

##### `EnableUnredactedQuerySyntaxErrorInput`<sup>Optional</sup> <a name="EnableUnredactedQuerySyntaxErrorInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxErrorInput"></a>

```csharp
public object EnableUnredactedQuerySyntaxErrorInput { get; }
```

- *Type:* object

---

##### `EnableUnredactedSecureObjectErrorInput`<sup>Optional</sup> <a name="EnableUnredactedSecureObjectErrorInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectErrorInput"></a>

```csharp
public object EnableUnredactedSecureObjectErrorInput { get; }
```

- *Type:* object

---

##### `EnforceNetworkRulesForInternalStagesInput`<sup>Optional</sup> <a name="EnforceNetworkRulesForInternalStagesInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStagesInput"></a>

```csharp
public object EnforceNetworkRulesForInternalStagesInput { get; }
```

- *Type:* object

---

##### `ErrorOnNondeterministicMergeInput`<sup>Optional</sup> <a name="ErrorOnNondeterministicMergeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMergeInput"></a>

```csharp
public object ErrorOnNondeterministicMergeInput { get; }
```

- *Type:* object

---

##### `ErrorOnNondeterministicUpdateInput`<sup>Optional</sup> <a name="ErrorOnNondeterministicUpdateInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdateInput"></a>

```csharp
public object ErrorOnNondeterministicUpdateInput { get; }
```

- *Type:* object

---

##### `EventTableInput`<sup>Optional</sup> <a name="EventTableInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTableInput"></a>

```csharp
public string EventTableInput { get; }
```

- *Type:* string

---

##### `ExternalOauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="ExternalOauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedListInput"></a>

```csharp
public object ExternalOauthAddPrivilegedRolesToBlockedListInput { get; }
```

- *Type:* object

---

##### `ExternalVolumeInput`<sup>Optional</sup> <a name="ExternalVolumeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolumeInput"></a>

```csharp
public string ExternalVolumeInput { get; }
```

- *Type:* string

---

##### `FeaturePolicyInput`<sup>Optional</sup> <a name="FeaturePolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicyInput"></a>

```csharp
public string FeaturePolicyInput { get; }
```

- *Type:* string

---

##### `GeographyOutputFormatInput`<sup>Optional</sup> <a name="GeographyOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormatInput"></a>

```csharp
public string GeographyOutputFormatInput { get; }
```

- *Type:* string

---

##### `GeometryOutputFormatInput`<sup>Optional</sup> <a name="GeometryOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormatInput"></a>

```csharp
public string GeometryOutputFormatInput { get; }
```

- *Type:* string

---

##### `HybridTableLockTimeoutInput`<sup>Optional</sup> <a name="HybridTableLockTimeoutInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeoutInput"></a>

```csharp
public double HybridTableLockTimeoutInput { get; }
```

- *Type:* double

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `InitialReplicationSizeLimitInTbInput`<sup>Optional</sup> <a name="InitialReplicationSizeLimitInTbInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTbInput"></a>

```csharp
public string InitialReplicationSizeLimitInTbInput { get; }
```

- *Type:* string

---

##### `JdbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="JdbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsIntInput"></a>

```csharp
public object JdbcTreatDecimalAsIntInput { get; }
```

- *Type:* object

---

##### `JdbcTreatTimestampNtzAsUtcInput`<sup>Optional</sup> <a name="JdbcTreatTimestampNtzAsUtcInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtcInput"></a>

```csharp
public object JdbcTreatTimestampNtzAsUtcInput { get; }
```

- *Type:* object

---

##### `JdbcUseSessionTimezoneInput`<sup>Optional</sup> <a name="JdbcUseSessionTimezoneInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezoneInput"></a>

```csharp
public object JdbcUseSessionTimezoneInput { get; }
```

- *Type:* object

---

##### `JsonIndentInput`<sup>Optional</sup> <a name="JsonIndentInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndentInput"></a>

```csharp
public double JsonIndentInput { get; }
```

- *Type:* double

---

##### `JsTreatIntegerAsBigintInput`<sup>Optional</sup> <a name="JsTreatIntegerAsBigintInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigintInput"></a>

```csharp
public object JsTreatIntegerAsBigintInput { get; }
```

- *Type:* object

---

##### `ListingAutoFulfillmentReplicationRefreshScheduleInput`<sup>Optional</sup> <a name="ListingAutoFulfillmentReplicationRefreshScheduleInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshScheduleInput"></a>

```csharp
public string ListingAutoFulfillmentReplicationRefreshScheduleInput { get; }
```

- *Type:* string

---

##### `LockTimeoutInput`<sup>Optional</sup> <a name="LockTimeoutInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeoutInput"></a>

```csharp
public double LockTimeoutInput { get; }
```

- *Type:* double

---

##### `LogLevelInput`<sup>Optional</sup> <a name="LogLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevelInput"></a>

```csharp
public string LogLevelInput { get; }
```

- *Type:* string

---

##### `MaxConcurrencyLevelInput`<sup>Optional</sup> <a name="MaxConcurrencyLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevelInput"></a>

```csharp
public double MaxConcurrencyLevelInput { get; }
```

- *Type:* double

---

##### `MaxDataExtensionTimeInDaysInput`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDaysInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDaysInput"></a>

```csharp
public double MaxDataExtensionTimeInDaysInput { get; }
```

- *Type:* double

---

##### `MetricLevelInput`<sup>Optional</sup> <a name="MetricLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevelInput"></a>

```csharp
public string MetricLevelInput { get; }
```

- *Type:* string

---

##### `MinDataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="MinDataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDaysInput"></a>

```csharp
public double MinDataRetentionTimeInDaysInput { get; }
```

- *Type:* double

---

##### `MultiStatementCountInput`<sup>Optional</sup> <a name="MultiStatementCountInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCountInput"></a>

```csharp
public double MultiStatementCountInput { get; }
```

- *Type:* double

---

##### `NetworkPolicyInput`<sup>Optional</sup> <a name="NetworkPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicyInput"></a>

```csharp
public string NetworkPolicyInput { get; }
```

- *Type:* string

---

##### `NoorderSequenceAsDefaultInput`<sup>Optional</sup> <a name="NoorderSequenceAsDefaultInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefaultInput"></a>

```csharp
public object NoorderSequenceAsDefaultInput { get; }
```

- *Type:* object

---

##### `OauthAddPrivilegedRolesToBlockedListInput`<sup>Optional</sup> <a name="OauthAddPrivilegedRolesToBlockedListInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedListInput"></a>

```csharp
public object OauthAddPrivilegedRolesToBlockedListInput { get; }
```

- *Type:* object

---

##### `OdbcTreatDecimalAsIntInput`<sup>Optional</sup> <a name="OdbcTreatDecimalAsIntInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsIntInput"></a>

```csharp
public object OdbcTreatDecimalAsIntInput { get; }
```

- *Type:* object

---

##### `PackagesPolicyInput`<sup>Optional</sup> <a name="PackagesPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicyInput"></a>

```csharp
public string PackagesPolicyInput { get; }
```

- *Type:* string

---

##### `PasswordPolicyInput`<sup>Optional</sup> <a name="PasswordPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicyInput"></a>

```csharp
public string PasswordPolicyInput { get; }
```

- *Type:* string

---

##### `PeriodicDataRekeyingInput`<sup>Optional</sup> <a name="PeriodicDataRekeyingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeyingInput"></a>

```csharp
public object PeriodicDataRekeyingInput { get; }
```

- *Type:* object

---

##### `PipeExecutionPausedInput`<sup>Optional</sup> <a name="PipeExecutionPausedInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPausedInput"></a>

```csharp
public object PipeExecutionPausedInput { get; }
```

- *Type:* object

---

##### `PreventUnloadToInlineUrlInput`<sup>Optional</sup> <a name="PreventUnloadToInlineUrlInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrlInput"></a>

```csharp
public object PreventUnloadToInlineUrlInput { get; }
```

- *Type:* object

---

##### `PreventUnloadToInternalStagesInput`<sup>Optional</sup> <a name="PreventUnloadToInternalStagesInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStagesInput"></a>

```csharp
public object PreventUnloadToInternalStagesInput { get; }
```

- *Type:* object

---

##### `PythonProfilerModulesInput`<sup>Optional</sup> <a name="PythonProfilerModulesInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModulesInput"></a>

```csharp
public string PythonProfilerModulesInput { get; }
```

- *Type:* string

---

##### `PythonProfilerTargetStageInput`<sup>Optional</sup> <a name="PythonProfilerTargetStageInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStageInput"></a>

```csharp
public string PythonProfilerTargetStageInput { get; }
```

- *Type:* string

---

##### `QueryTagInput`<sup>Optional</sup> <a name="QueryTagInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTagInput"></a>

```csharp
public string QueryTagInput { get; }
```

- *Type:* string

---

##### `QuotedIdentifiersIgnoreCaseInput`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCaseInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCaseInput"></a>

```csharp
public object QuotedIdentifiersIgnoreCaseInput { get; }
```

- *Type:* object

---

##### `ReplaceInvalidCharactersInput`<sup>Optional</sup> <a name="ReplaceInvalidCharactersInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharactersInput"></a>

```csharp
public object ReplaceInvalidCharactersInput { get; }
```

- *Type:* object

---

##### `RequireStorageIntegrationForStageCreationInput`<sup>Optional</sup> <a name="RequireStorageIntegrationForStageCreationInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreationInput"></a>

```csharp
public object RequireStorageIntegrationForStageCreationInput { get; }
```

- *Type:* object

---

##### `RequireStorageIntegrationForStageOperationInput`<sup>Optional</sup> <a name="RequireStorageIntegrationForStageOperationInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperationInput"></a>

```csharp
public object RequireStorageIntegrationForStageOperationInput { get; }
```

- *Type:* object

---

##### `ResourceMonitorInput`<sup>Optional</sup> <a name="ResourceMonitorInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitorInput"></a>

```csharp
public string ResourceMonitorInput { get; }
```

- *Type:* string

---

##### `RowsPerResultsetInput`<sup>Optional</sup> <a name="RowsPerResultsetInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultsetInput"></a>

```csharp
public double RowsPerResultsetInput { get; }
```

- *Type:* double

---

##### `S3StageVpceDnsNameInput`<sup>Optional</sup> <a name="S3StageVpceDnsNameInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsNameInput"></a>

```csharp
public string S3StageVpceDnsNameInput { get; }
```

- *Type:* string

---

##### `SamlIdentityProviderInput`<sup>Optional</sup> <a name="SamlIdentityProviderInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProviderInput"></a>

```csharp
public string SamlIdentityProviderInput { get; }
```

- *Type:* string

---

##### `SearchPathInput`<sup>Optional</sup> <a name="SearchPathInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPathInput"></a>

```csharp
public string SearchPathInput { get; }
```

- *Type:* string

---

##### `ServerlessTaskMaxStatementSizeInput`<sup>Optional</sup> <a name="ServerlessTaskMaxStatementSizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSizeInput"></a>

```csharp
public string ServerlessTaskMaxStatementSizeInput { get; }
```

- *Type:* string

---

##### `ServerlessTaskMinStatementSizeInput`<sup>Optional</sup> <a name="ServerlessTaskMinStatementSizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSizeInput"></a>

```csharp
public string ServerlessTaskMinStatementSizeInput { get; }
```

- *Type:* string

---

##### `SessionPolicyInput`<sup>Optional</sup> <a name="SessionPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicyInput"></a>

```csharp
public string SessionPolicyInput { get; }
```

- *Type:* string

---

##### `SimulatedDataSharingConsumerInput`<sup>Optional</sup> <a name="SimulatedDataSharingConsumerInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumerInput"></a>

```csharp
public string SimulatedDataSharingConsumerInput { get; }
```

- *Type:* string

---

##### `SsoLoginPageInput`<sup>Optional</sup> <a name="SsoLoginPageInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPageInput"></a>

```csharp
public object SsoLoginPageInput { get; }
```

- *Type:* object

---

##### `StatementQueuedTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSecondsInput"></a>

```csharp
public double StatementQueuedTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `StatementTimeoutInSecondsInput`<sup>Optional</sup> <a name="StatementTimeoutInSecondsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSecondsInput"></a>

```csharp
public double StatementTimeoutInSecondsInput { get; }
```

- *Type:* double

---

##### `StorageSerializationPolicyInput`<sup>Optional</sup> <a name="StorageSerializationPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicyInput"></a>

```csharp
public string StorageSerializationPolicyInput { get; }
```

- *Type:* string

---

##### `StrictJsonOutputInput`<sup>Optional</sup> <a name="StrictJsonOutputInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutputInput"></a>

```csharp
public object StrictJsonOutputInput { get; }
```

- *Type:* object

---

##### `SuspendTaskAfterNumFailuresInput`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailuresInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailuresInput"></a>

```csharp
public double SuspendTaskAfterNumFailuresInput { get; }
```

- *Type:* double

---

##### `TaskAutoRetryAttemptsInput`<sup>Optional</sup> <a name="TaskAutoRetryAttemptsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttemptsInput"></a>

```csharp
public double TaskAutoRetryAttemptsInput { get; }
```

- *Type:* double

---

##### `TimeInputFormatInput`<sup>Optional</sup> <a name="TimeInputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormatInput"></a>

```csharp
public string TimeInputFormatInput { get; }
```

- *Type:* string

---

##### `TimeOutputFormatInput`<sup>Optional</sup> <a name="TimeOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormatInput"></a>

```csharp
public string TimeOutputFormatInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `TimestampDayIsAlways24HInput`<sup>Optional</sup> <a name="TimestampDayIsAlways24HInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24HInput"></a>

```csharp
public object TimestampDayIsAlways24HInput { get; }
```

- *Type:* object

---

##### `TimestampInputFormatInput`<sup>Optional</sup> <a name="TimestampInputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormatInput"></a>

```csharp
public string TimestampInputFormatInput { get; }
```

- *Type:* string

---

##### `TimestampLtzOutputFormatInput`<sup>Optional</sup> <a name="TimestampLtzOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormatInput"></a>

```csharp
public string TimestampLtzOutputFormatInput { get; }
```

- *Type:* string

---

##### `TimestampNtzOutputFormatInput`<sup>Optional</sup> <a name="TimestampNtzOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormatInput"></a>

```csharp
public string TimestampNtzOutputFormatInput { get; }
```

- *Type:* string

---

##### `TimestampOutputFormatInput`<sup>Optional</sup> <a name="TimestampOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormatInput"></a>

```csharp
public string TimestampOutputFormatInput { get; }
```

- *Type:* string

---

##### `TimestampTypeMappingInput`<sup>Optional</sup> <a name="TimestampTypeMappingInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMappingInput"></a>

```csharp
public string TimestampTypeMappingInput { get; }
```

- *Type:* string

---

##### `TimestampTzOutputFormatInput`<sup>Optional</sup> <a name="TimestampTzOutputFormatInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormatInput"></a>

```csharp
public string TimestampTzOutputFormatInput { get; }
```

- *Type:* string

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezoneInput"></a>

```csharp
public string TimezoneInput { get; }
```

- *Type:* string

---

##### `TraceLevelInput`<sup>Optional</sup> <a name="TraceLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevelInput"></a>

```csharp
public string TraceLevelInput { get; }
```

- *Type:* string

---

##### `TransactionAbortOnErrorInput`<sup>Optional</sup> <a name="TransactionAbortOnErrorInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnErrorInput"></a>

```csharp
public object TransactionAbortOnErrorInput { get; }
```

- *Type:* object

---

##### `TransactionDefaultIsolationLevelInput`<sup>Optional</sup> <a name="TransactionDefaultIsolationLevelInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevelInput"></a>

```csharp
public string TransactionDefaultIsolationLevelInput { get; }
```

- *Type:* string

---

##### `TwoDigitCenturyStartInput`<sup>Optional</sup> <a name="TwoDigitCenturyStartInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStartInput"></a>

```csharp
public double TwoDigitCenturyStartInput { get; }
```

- *Type:* double

---

##### `UnsupportedDdlActionInput`<sup>Optional</sup> <a name="UnsupportedDdlActionInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlActionInput"></a>

```csharp
public string UnsupportedDdlActionInput { get; }
```

- *Type:* string

---

##### `UseCachedResultInput`<sup>Optional</sup> <a name="UseCachedResultInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResultInput"></a>

```csharp
public object UseCachedResultInput { get; }
```

- *Type:* object

---

##### `UserTaskManagedInitialWarehouseSizeInput`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSizeInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSizeInput"></a>

```csharp
public string UserTaskManagedInitialWarehouseSizeInput { get; }
```

- *Type:* string

---

##### `UserTaskMinimumTriggerIntervalInSecondsInput`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSecondsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSecondsInput"></a>

```csharp
public double UserTaskMinimumTriggerIntervalInSecondsInput { get; }
```

- *Type:* double

---

##### `UserTaskTimeoutMsInput`<sup>Optional</sup> <a name="UserTaskTimeoutMsInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMsInput"></a>

```csharp
public double UserTaskTimeoutMsInput { get; }
```

- *Type:* double

---

##### `WeekOfYearPolicyInput`<sup>Optional</sup> <a name="WeekOfYearPolicyInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicyInput"></a>

```csharp
public double WeekOfYearPolicyInput { get; }
```

- *Type:* double

---

##### `WeekStartInput`<sup>Optional</sup> <a name="WeekStartInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStartInput"></a>

```csharp
public double WeekStartInput { get; }
```

- *Type:* double

---

##### `AbortDetachedQuery`<sup>Required</sup> <a name="AbortDetachedQuery" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.abortDetachedQuery"></a>

```csharp
public object AbortDetachedQuery { get; }
```

- *Type:* object

---

##### `ActivePythonProfiler`<sup>Required</sup> <a name="ActivePythonProfiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.activePythonProfiler"></a>

```csharp
public string ActivePythonProfiler { get; }
```

- *Type:* string

---

##### `AllowClientMfaCaching`<sup>Required</sup> <a name="AllowClientMfaCaching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowClientMfaCaching"></a>

```csharp
public object AllowClientMfaCaching { get; }
```

- *Type:* object

---

##### `AllowIdToken`<sup>Required</sup> <a name="AllowIdToken" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.allowIdToken"></a>

```csharp
public object AllowIdToken { get; }
```

- *Type:* object

---

##### `AuthenticationPolicy`<sup>Required</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; }
```

- *Type:* string

---

##### `Autocommit`<sup>Required</sup> <a name="Autocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.autocommit"></a>

```csharp
public object Autocommit { get; }
```

- *Type:* object

---

##### `BaseLocationPrefix`<sup>Required</sup> <a name="BaseLocationPrefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.baseLocationPrefix"></a>

```csharp
public string BaseLocationPrefix { get; }
```

- *Type:* string

---

##### `BinaryInputFormat`<sup>Required</sup> <a name="BinaryInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryInputFormat"></a>

```csharp
public string BinaryInputFormat { get; }
```

- *Type:* string

---

##### `BinaryOutputFormat`<sup>Required</sup> <a name="BinaryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.binaryOutputFormat"></a>

```csharp
public string BinaryOutputFormat { get; }
```

- *Type:* string

---

##### `Catalog`<sup>Required</sup> <a name="Catalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalog"></a>

```csharp
public string Catalog { get; }
```

- *Type:* string

---

##### `CatalogSync`<sup>Required</sup> <a name="CatalogSync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.catalogSync"></a>

```csharp
public string CatalogSync { get; }
```

- *Type:* string

---

##### `ClientEnableLogInfoStatementParameters`<sup>Required</sup> <a name="ClientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEnableLogInfoStatementParameters"></a>

```csharp
public object ClientEnableLogInfoStatementParameters { get; }
```

- *Type:* object

---

##### `ClientEncryptionKeySize`<sup>Required</sup> <a name="ClientEncryptionKeySize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientEncryptionKeySize"></a>

```csharp
public double ClientEncryptionKeySize { get; }
```

- *Type:* double

---

##### `ClientMemoryLimit`<sup>Required</sup> <a name="ClientMemoryLimit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMemoryLimit"></a>

```csharp
public double ClientMemoryLimit { get; }
```

- *Type:* double

---

##### `ClientMetadataRequestUseConnectionCtx`<sup>Required</sup> <a name="ClientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataRequestUseConnectionCtx"></a>

```csharp
public object ClientMetadataRequestUseConnectionCtx { get; }
```

- *Type:* object

---

##### `ClientMetadataUseSessionDatabase`<sup>Required</sup> <a name="ClientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientMetadataUseSessionDatabase"></a>

```csharp
public object ClientMetadataUseSessionDatabase { get; }
```

- *Type:* object

---

##### `ClientPrefetchThreads`<sup>Required</sup> <a name="ClientPrefetchThreads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientPrefetchThreads"></a>

```csharp
public double ClientPrefetchThreads { get; }
```

- *Type:* double

---

##### `ClientResultChunkSize`<sup>Required</sup> <a name="ClientResultChunkSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultChunkSize"></a>

```csharp
public double ClientResultChunkSize { get; }
```

- *Type:* double

---

##### `ClientResultColumnCaseInsensitive`<sup>Required</sup> <a name="ClientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientResultColumnCaseInsensitive"></a>

```csharp
public object ClientResultColumnCaseInsensitive { get; }
```

- *Type:* object

---

##### `ClientSessionKeepAlive`<sup>Required</sup> <a name="ClientSessionKeepAlive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAlive"></a>

```csharp
public object ClientSessionKeepAlive { get; }
```

- *Type:* object

---

##### `ClientSessionKeepAliveHeartbeatFrequency`<sup>Required</sup> <a name="ClientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```csharp
public double ClientSessionKeepAliveHeartbeatFrequency { get; }
```

- *Type:* double

---

##### `ClientTimestampTypeMapping`<sup>Required</sup> <a name="ClientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.clientTimestampTypeMapping"></a>

```csharp
public string ClientTimestampTypeMapping { get; }
```

- *Type:* string

---

##### `CortexEnabledCrossRegion`<sup>Required</sup> <a name="CortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexEnabledCrossRegion"></a>

```csharp
public string CortexEnabledCrossRegion { get; }
```

- *Type:* string

---

##### `CortexModelsAllowlist`<sup>Required</sup> <a name="CortexModelsAllowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.cortexModelsAllowlist"></a>

```csharp
public string CortexModelsAllowlist { get; }
```

- *Type:* string

---

##### `CsvTimestampFormat`<sup>Required</sup> <a name="CsvTimestampFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.csvTimestampFormat"></a>

```csharp
public string CsvTimestampFormat { get; }
```

- *Type:* string

---

##### `DataRetentionTimeInDays`<sup>Required</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dataRetentionTimeInDays"></a>

```csharp
public double DataRetentionTimeInDays { get; }
```

- *Type:* double

---

##### `DateInputFormat`<sup>Required</sup> <a name="DateInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateInputFormat"></a>

```csharp
public string DateInputFormat { get; }
```

- *Type:* string

---

##### `DateOutputFormat`<sup>Required</sup> <a name="DateOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.dateOutputFormat"></a>

```csharp
public string DateOutputFormat { get; }
```

- *Type:* string

---

##### `DefaultDdlCollation`<sup>Required</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultDdlCollation"></a>

```csharp
public string DefaultDdlCollation { get; }
```

- *Type:* string

---

##### `DefaultNotebookComputePoolCpu`<sup>Required</sup> <a name="DefaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolCpu"></a>

```csharp
public string DefaultNotebookComputePoolCpu { get; }
```

- *Type:* string

---

##### `DefaultNotebookComputePoolGpu`<sup>Required</sup> <a name="DefaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNotebookComputePoolGpu"></a>

```csharp
public string DefaultNotebookComputePoolGpu { get; }
```

- *Type:* string

---

##### `DefaultNullOrdering`<sup>Required</sup> <a name="DefaultNullOrdering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultNullOrdering"></a>

```csharp
public string DefaultNullOrdering { get; }
```

- *Type:* string

---

##### `DefaultStreamlitNotebookWarehouse`<sup>Required</sup> <a name="DefaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.defaultStreamlitNotebookWarehouse"></a>

```csharp
public string DefaultStreamlitNotebookWarehouse { get; }
```

- *Type:* string

---

##### `DisableUiDownloadButton`<sup>Required</sup> <a name="DisableUiDownloadButton" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUiDownloadButton"></a>

```csharp
public object DisableUiDownloadButton { get; }
```

- *Type:* object

---

##### `DisableUserPrivilegeGrants`<sup>Required</sup> <a name="DisableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.disableUserPrivilegeGrants"></a>

```csharp
public object DisableUserPrivilegeGrants { get; }
```

- *Type:* object

---

##### `EnableAutomaticSensitiveDataClassificationLog`<sup>Required</sup> <a name="EnableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableAutomaticSensitiveDataClassificationLog"></a>

```csharp
public object EnableAutomaticSensitiveDataClassificationLog { get; }
```

- *Type:* object

---

##### `EnableEgressCostOptimizer`<sup>Required</sup> <a name="EnableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableEgressCostOptimizer"></a>

```csharp
public object EnableEgressCostOptimizer { get; }
```

- *Type:* object

---

##### `EnableIdentifierFirstLogin`<sup>Required</sup> <a name="EnableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableIdentifierFirstLogin"></a>

```csharp
public object EnableIdentifierFirstLogin { get; }
```

- *Type:* object

---

##### `EnableInternalStagesPrivatelink`<sup>Required</sup> <a name="EnableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableInternalStagesPrivatelink"></a>

```csharp
public object EnableInternalStagesPrivatelink { get; }
```

- *Type:* object

---

##### `EnableTriSecretAndRekeyOptOutForImageRepository`<sup>Required</sup> <a name="EnableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```csharp
public object EnableTriSecretAndRekeyOptOutForImageRepository { get; }
```

- *Type:* object

---

##### `EnableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Required</sup> <a name="EnableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```csharp
public object EnableTriSecretAndRekeyOptOutForSpcsBlockStorage { get; }
```

- *Type:* object

---

##### `EnableUnhandledExceptionsReporting`<sup>Required</sup> <a name="EnableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnhandledExceptionsReporting"></a>

```csharp
public object EnableUnhandledExceptionsReporting { get; }
```

- *Type:* object

---

##### `EnableUnloadPhysicalTypeOptimization`<sup>Required</sup> <a name="EnableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnloadPhysicalTypeOptimization"></a>

```csharp
public object EnableUnloadPhysicalTypeOptimization { get; }
```

- *Type:* object

---

##### `EnableUnredactedQuerySyntaxError`<sup>Required</sup> <a name="EnableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedQuerySyntaxError"></a>

```csharp
public object EnableUnredactedQuerySyntaxError { get; }
```

- *Type:* object

---

##### `EnableUnredactedSecureObjectError`<sup>Required</sup> <a name="EnableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enableUnredactedSecureObjectError"></a>

```csharp
public object EnableUnredactedSecureObjectError { get; }
```

- *Type:* object

---

##### `EnforceNetworkRulesForInternalStages`<sup>Required</sup> <a name="EnforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.enforceNetworkRulesForInternalStages"></a>

```csharp
public object EnforceNetworkRulesForInternalStages { get; }
```

- *Type:* object

---

##### `ErrorOnNondeterministicMerge`<sup>Required</sup> <a name="ErrorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicMerge"></a>

```csharp
public object ErrorOnNondeterministicMerge { get; }
```

- *Type:* object

---

##### `ErrorOnNondeterministicUpdate`<sup>Required</sup> <a name="ErrorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.errorOnNondeterministicUpdate"></a>

```csharp
public object ErrorOnNondeterministicUpdate { get; }
```

- *Type:* object

---

##### `EventTable`<sup>Required</sup> <a name="EventTable" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.eventTable"></a>

```csharp
public string EventTable { get; }
```

- *Type:* string

---

##### `ExternalOauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="ExternalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```csharp
public object ExternalOauthAddPrivilegedRolesToBlockedList { get; }
```

- *Type:* object

---

##### `ExternalVolume`<sup>Required</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; }
```

- *Type:* string

---

##### `FeaturePolicy`<sup>Required</sup> <a name="FeaturePolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.featurePolicy"></a>

```csharp
public string FeaturePolicy { get; }
```

- *Type:* string

---

##### `GeographyOutputFormat`<sup>Required</sup> <a name="GeographyOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geographyOutputFormat"></a>

```csharp
public string GeographyOutputFormat { get; }
```

- *Type:* string

---

##### `GeometryOutputFormat`<sup>Required</sup> <a name="GeometryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.geometryOutputFormat"></a>

```csharp
public string GeometryOutputFormat { get; }
```

- *Type:* string

---

##### `HybridTableLockTimeout`<sup>Required</sup> <a name="HybridTableLockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.hybridTableLockTimeout"></a>

```csharp
public double HybridTableLockTimeout { get; }
```

- *Type:* double

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `InitialReplicationSizeLimitInTb`<sup>Required</sup> <a name="InitialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.initialReplicationSizeLimitInTb"></a>

```csharp
public string InitialReplicationSizeLimitInTb { get; }
```

- *Type:* string

---

##### `JdbcTreatDecimalAsInt`<sup>Required</sup> <a name="JdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatDecimalAsInt"></a>

```csharp
public object JdbcTreatDecimalAsInt { get; }
```

- *Type:* object

---

##### `JdbcTreatTimestampNtzAsUtc`<sup>Required</sup> <a name="JdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcTreatTimestampNtzAsUtc"></a>

```csharp
public object JdbcTreatTimestampNtzAsUtc { get; }
```

- *Type:* object

---

##### `JdbcUseSessionTimezone`<sup>Required</sup> <a name="JdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jdbcUseSessionTimezone"></a>

```csharp
public object JdbcUseSessionTimezone { get; }
```

- *Type:* object

---

##### `JsonIndent`<sup>Required</sup> <a name="JsonIndent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsonIndent"></a>

```csharp
public double JsonIndent { get; }
```

- *Type:* double

---

##### `JsTreatIntegerAsBigint`<sup>Required</sup> <a name="JsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.jsTreatIntegerAsBigint"></a>

```csharp
public object JsTreatIntegerAsBigint { get; }
```

- *Type:* object

---

##### `ListingAutoFulfillmentReplicationRefreshSchedule`<sup>Required</sup> <a name="ListingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```csharp
public string ListingAutoFulfillmentReplicationRefreshSchedule { get; }
```

- *Type:* string

---

##### `LockTimeout`<sup>Required</sup> <a name="LockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.lockTimeout"></a>

```csharp
public double LockTimeout { get; }
```

- *Type:* double

---

##### `LogLevel`<sup>Required</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.logLevel"></a>

```csharp
public string LogLevel { get; }
```

- *Type:* string

---

##### `MaxConcurrencyLevel`<sup>Required</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxConcurrencyLevel"></a>

```csharp
public double MaxConcurrencyLevel { get; }
```

- *Type:* double

---

##### `MaxDataExtensionTimeInDays`<sup>Required</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.maxDataExtensionTimeInDays"></a>

```csharp
public double MaxDataExtensionTimeInDays { get; }
```

- *Type:* double

---

##### `MetricLevel`<sup>Required</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.metricLevel"></a>

```csharp
public string MetricLevel { get; }
```

- *Type:* string

---

##### `MinDataRetentionTimeInDays`<sup>Required</sup> <a name="MinDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.minDataRetentionTimeInDays"></a>

```csharp
public double MinDataRetentionTimeInDays { get; }
```

- *Type:* double

---

##### `MultiStatementCount`<sup>Required</sup> <a name="MultiStatementCount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.multiStatementCount"></a>

```csharp
public double MultiStatementCount { get; }
```

- *Type:* double

---

##### `NetworkPolicy`<sup>Required</sup> <a name="NetworkPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.networkPolicy"></a>

```csharp
public string NetworkPolicy { get; }
```

- *Type:* string

---

##### `NoorderSequenceAsDefault`<sup>Required</sup> <a name="NoorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.noorderSequenceAsDefault"></a>

```csharp
public object NoorderSequenceAsDefault { get; }
```

- *Type:* object

---

##### `OauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="OauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.oauthAddPrivilegedRolesToBlockedList"></a>

```csharp
public object OauthAddPrivilegedRolesToBlockedList { get; }
```

- *Type:* object

---

##### `OdbcTreatDecimalAsInt`<sup>Required</sup> <a name="OdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.odbcTreatDecimalAsInt"></a>

```csharp
public object OdbcTreatDecimalAsInt { get; }
```

- *Type:* object

---

##### `PackagesPolicy`<sup>Required</sup> <a name="PackagesPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.packagesPolicy"></a>

```csharp
public string PackagesPolicy { get; }
```

- *Type:* string

---

##### `PasswordPolicy`<sup>Required</sup> <a name="PasswordPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; }
```

- *Type:* string

---

##### `PeriodicDataRekeying`<sup>Required</sup> <a name="PeriodicDataRekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.periodicDataRekeying"></a>

```csharp
public object PeriodicDataRekeying { get; }
```

- *Type:* object

---

##### `PipeExecutionPaused`<sup>Required</sup> <a name="PipeExecutionPaused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pipeExecutionPaused"></a>

```csharp
public object PipeExecutionPaused { get; }
```

- *Type:* object

---

##### `PreventUnloadToInlineUrl`<sup>Required</sup> <a name="PreventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInlineUrl"></a>

```csharp
public object PreventUnloadToInlineUrl { get; }
```

- *Type:* object

---

##### `PreventUnloadToInternalStages`<sup>Required</sup> <a name="PreventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.preventUnloadToInternalStages"></a>

```csharp
public object PreventUnloadToInternalStages { get; }
```

- *Type:* object

---

##### `PythonProfilerModules`<sup>Required</sup> <a name="PythonProfilerModules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerModules"></a>

```csharp
public string PythonProfilerModules { get; }
```

- *Type:* string

---

##### `PythonProfilerTargetStage`<sup>Required</sup> <a name="PythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.pythonProfilerTargetStage"></a>

```csharp
public string PythonProfilerTargetStage { get; }
```

- *Type:* string

---

##### `QueryTag`<sup>Required</sup> <a name="QueryTag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.queryTag"></a>

```csharp
public string QueryTag { get; }
```

- *Type:* string

---

##### `QuotedIdentifiersIgnoreCase`<sup>Required</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.quotedIdentifiersIgnoreCase"></a>

```csharp
public object QuotedIdentifiersIgnoreCase { get; }
```

- *Type:* object

---

##### `ReplaceInvalidCharacters`<sup>Required</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.replaceInvalidCharacters"></a>

```csharp
public object ReplaceInvalidCharacters { get; }
```

- *Type:* object

---

##### `RequireStorageIntegrationForStageCreation`<sup>Required</sup> <a name="RequireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageCreation"></a>

```csharp
public object RequireStorageIntegrationForStageCreation { get; }
```

- *Type:* object

---

##### `RequireStorageIntegrationForStageOperation`<sup>Required</sup> <a name="RequireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.requireStorageIntegrationForStageOperation"></a>

```csharp
public object RequireStorageIntegrationForStageOperation { get; }
```

- *Type:* object

---

##### `ResourceMonitor`<sup>Required</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.resourceMonitor"></a>

```csharp
public string ResourceMonitor { get; }
```

- *Type:* string

---

##### `RowsPerResultset`<sup>Required</sup> <a name="RowsPerResultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.rowsPerResultset"></a>

```csharp
public double RowsPerResultset { get; }
```

- *Type:* double

---

##### `S3StageVpceDnsName`<sup>Required</sup> <a name="S3StageVpceDnsName" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.s3StageVpceDnsName"></a>

```csharp
public string S3StageVpceDnsName { get; }
```

- *Type:* string

---

##### `SamlIdentityProvider`<sup>Required</sup> <a name="SamlIdentityProvider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.samlIdentityProvider"></a>

```csharp
public string SamlIdentityProvider { get; }
```

- *Type:* string

---

##### `SearchPath`<sup>Required</sup> <a name="SearchPath" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.searchPath"></a>

```csharp
public string SearchPath { get; }
```

- *Type:* string

---

##### `ServerlessTaskMaxStatementSize`<sup>Required</sup> <a name="ServerlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMaxStatementSize"></a>

```csharp
public string ServerlessTaskMaxStatementSize { get; }
```

- *Type:* string

---

##### `ServerlessTaskMinStatementSize`<sup>Required</sup> <a name="ServerlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.serverlessTaskMinStatementSize"></a>

```csharp
public string ServerlessTaskMinStatementSize { get; }
```

- *Type:* string

---

##### `SessionPolicy`<sup>Required</sup> <a name="SessionPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.sessionPolicy"></a>

```csharp
public string SessionPolicy { get; }
```

- *Type:* string

---

##### `SimulatedDataSharingConsumer`<sup>Required</sup> <a name="SimulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.simulatedDataSharingConsumer"></a>

```csharp
public string SimulatedDataSharingConsumer { get; }
```

- *Type:* string

---

##### `SsoLoginPage`<sup>Required</sup> <a name="SsoLoginPage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.ssoLoginPage"></a>

```csharp
public object SsoLoginPage { get; }
```

- *Type:* object

---

##### `StatementQueuedTimeoutInSeconds`<sup>Required</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementQueuedTimeoutInSeconds"></a>

```csharp
public double StatementQueuedTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `StatementTimeoutInSeconds`<sup>Required</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.statementTimeoutInSeconds"></a>

```csharp
public double StatementTimeoutInSeconds { get; }
```

- *Type:* double

---

##### `StorageSerializationPolicy`<sup>Required</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.storageSerializationPolicy"></a>

```csharp
public string StorageSerializationPolicy { get; }
```

- *Type:* string

---

##### `StrictJsonOutput`<sup>Required</sup> <a name="StrictJsonOutput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.strictJsonOutput"></a>

```csharp
public object StrictJsonOutput { get; }
```

- *Type:* object

---

##### `SuspendTaskAfterNumFailures`<sup>Required</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.suspendTaskAfterNumFailures"></a>

```csharp
public double SuspendTaskAfterNumFailures { get; }
```

- *Type:* double

---

##### `TaskAutoRetryAttempts`<sup>Required</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.taskAutoRetryAttempts"></a>

```csharp
public double TaskAutoRetryAttempts { get; }
```

- *Type:* double

---

##### `TimeInputFormat`<sup>Required</sup> <a name="TimeInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeInputFormat"></a>

```csharp
public string TimeInputFormat { get; }
```

- *Type:* string

---

##### `TimeOutputFormat`<sup>Required</sup> <a name="TimeOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timeOutputFormat"></a>

```csharp
public string TimeOutputFormat { get; }
```

- *Type:* string

---

##### `TimestampDayIsAlways24H`<sup>Required</sup> <a name="TimestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampDayIsAlways24H"></a>

```csharp
public object TimestampDayIsAlways24H { get; }
```

- *Type:* object

---

##### `TimestampInputFormat`<sup>Required</sup> <a name="TimestampInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampInputFormat"></a>

```csharp
public string TimestampInputFormat { get; }
```

- *Type:* string

---

##### `TimestampLtzOutputFormat`<sup>Required</sup> <a name="TimestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampLtzOutputFormat"></a>

```csharp
public string TimestampLtzOutputFormat { get; }
```

- *Type:* string

---

##### `TimestampNtzOutputFormat`<sup>Required</sup> <a name="TimestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampNtzOutputFormat"></a>

```csharp
public string TimestampNtzOutputFormat { get; }
```

- *Type:* string

---

##### `TimestampOutputFormat`<sup>Required</sup> <a name="TimestampOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampOutputFormat"></a>

```csharp
public string TimestampOutputFormat { get; }
```

- *Type:* string

---

##### `TimestampTypeMapping`<sup>Required</sup> <a name="TimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTypeMapping"></a>

```csharp
public string TimestampTypeMapping { get; }
```

- *Type:* string

---

##### `TimestampTzOutputFormat`<sup>Required</sup> <a name="TimestampTzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timestampTzOutputFormat"></a>

```csharp
public string TimestampTzOutputFormat { get; }
```

- *Type:* string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.timezone"></a>

```csharp
public string Timezone { get; }
```

- *Type:* string

---

##### `TraceLevel`<sup>Required</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.traceLevel"></a>

```csharp
public string TraceLevel { get; }
```

- *Type:* string

---

##### `TransactionAbortOnError`<sup>Required</sup> <a name="TransactionAbortOnError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionAbortOnError"></a>

```csharp
public object TransactionAbortOnError { get; }
```

- *Type:* object

---

##### `TransactionDefaultIsolationLevel`<sup>Required</sup> <a name="TransactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.transactionDefaultIsolationLevel"></a>

```csharp
public string TransactionDefaultIsolationLevel { get; }
```

- *Type:* string

---

##### `TwoDigitCenturyStart`<sup>Required</sup> <a name="TwoDigitCenturyStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.twoDigitCenturyStart"></a>

```csharp
public double TwoDigitCenturyStart { get; }
```

- *Type:* double

---

##### `UnsupportedDdlAction`<sup>Required</sup> <a name="UnsupportedDdlAction" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.unsupportedDdlAction"></a>

```csharp
public string UnsupportedDdlAction { get; }
```

- *Type:* string

---

##### `UseCachedResult`<sup>Required</sup> <a name="UseCachedResult" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.useCachedResult"></a>

```csharp
public object UseCachedResult { get; }
```

- *Type:* object

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Required</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskManagedInitialWarehouseSize"></a>

```csharp
public string UserTaskManagedInitialWarehouseSize { get; }
```

- *Type:* string

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Required</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```csharp
public double UserTaskMinimumTriggerIntervalInSeconds { get; }
```

- *Type:* double

---

##### `UserTaskTimeoutMs`<sup>Required</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.userTaskTimeoutMs"></a>

```csharp
public double UserTaskTimeoutMs { get; }
```

- *Type:* double

---

##### `WeekOfYearPolicy`<sup>Required</sup> <a name="WeekOfYearPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekOfYearPolicy"></a>

```csharp
public double WeekOfYearPolicy { get; }
```

- *Type:* double

---

##### `WeekStart`<sup>Required</sup> <a name="WeekStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.weekStart"></a>

```csharp
public double WeekStart { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.currentAccount.CurrentAccount.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CurrentAccountConfig <a name="CurrentAccountConfig" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new CurrentAccountConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    object AbortDetachedQuery = null,
    string ActivePythonProfiler = null,
    object AllowClientMfaCaching = null,
    object AllowIdToken = null,
    string AuthenticationPolicy = null,
    object Autocommit = null,
    string BaseLocationPrefix = null,
    string BinaryInputFormat = null,
    string BinaryOutputFormat = null,
    string Catalog = null,
    string CatalogSync = null,
    object ClientEnableLogInfoStatementParameters = null,
    double ClientEncryptionKeySize = null,
    double ClientMemoryLimit = null,
    object ClientMetadataRequestUseConnectionCtx = null,
    object ClientMetadataUseSessionDatabase = null,
    double ClientPrefetchThreads = null,
    double ClientResultChunkSize = null,
    object ClientResultColumnCaseInsensitive = null,
    object ClientSessionKeepAlive = null,
    double ClientSessionKeepAliveHeartbeatFrequency = null,
    string ClientTimestampTypeMapping = null,
    string CortexEnabledCrossRegion = null,
    string CortexModelsAllowlist = null,
    string CsvTimestampFormat = null,
    double DataRetentionTimeInDays = null,
    string DateInputFormat = null,
    string DateOutputFormat = null,
    string DefaultDdlCollation = null,
    string DefaultNotebookComputePoolCpu = null,
    string DefaultNotebookComputePoolGpu = null,
    string DefaultNullOrdering = null,
    string DefaultStreamlitNotebookWarehouse = null,
    object DisableUiDownloadButton = null,
    object DisableUserPrivilegeGrants = null,
    object EnableAutomaticSensitiveDataClassificationLog = null,
    object EnableEgressCostOptimizer = null,
    object EnableIdentifierFirstLogin = null,
    object EnableInternalStagesPrivatelink = null,
    object EnableTriSecretAndRekeyOptOutForImageRepository = null,
    object EnableTriSecretAndRekeyOptOutForSpcsBlockStorage = null,
    object EnableUnhandledExceptionsReporting = null,
    object EnableUnloadPhysicalTypeOptimization = null,
    object EnableUnredactedQuerySyntaxError = null,
    object EnableUnredactedSecureObjectError = null,
    object EnforceNetworkRulesForInternalStages = null,
    object ErrorOnNondeterministicMerge = null,
    object ErrorOnNondeterministicUpdate = null,
    string EventTable = null,
    object ExternalOauthAddPrivilegedRolesToBlockedList = null,
    string ExternalVolume = null,
    string FeaturePolicy = null,
    string GeographyOutputFormat = null,
    string GeometryOutputFormat = null,
    double HybridTableLockTimeout = null,
    string Id = null,
    string InitialReplicationSizeLimitInTb = null,
    object JdbcTreatDecimalAsInt = null,
    object JdbcTreatTimestampNtzAsUtc = null,
    object JdbcUseSessionTimezone = null,
    double JsonIndent = null,
    object JsTreatIntegerAsBigint = null,
    string ListingAutoFulfillmentReplicationRefreshSchedule = null,
    double LockTimeout = null,
    string LogLevel = null,
    double MaxConcurrencyLevel = null,
    double MaxDataExtensionTimeInDays = null,
    string MetricLevel = null,
    double MinDataRetentionTimeInDays = null,
    double MultiStatementCount = null,
    string NetworkPolicy = null,
    object NoorderSequenceAsDefault = null,
    object OauthAddPrivilegedRolesToBlockedList = null,
    object OdbcTreatDecimalAsInt = null,
    string PackagesPolicy = null,
    string PasswordPolicy = null,
    object PeriodicDataRekeying = null,
    object PipeExecutionPaused = null,
    object PreventUnloadToInlineUrl = null,
    object PreventUnloadToInternalStages = null,
    string PythonProfilerModules = null,
    string PythonProfilerTargetStage = null,
    string QueryTag = null,
    object QuotedIdentifiersIgnoreCase = null,
    object ReplaceInvalidCharacters = null,
    object RequireStorageIntegrationForStageCreation = null,
    object RequireStorageIntegrationForStageOperation = null,
    string ResourceMonitor = null,
    double RowsPerResultset = null,
    string S3StageVpceDnsName = null,
    string SamlIdentityProvider = null,
    string SearchPath = null,
    string ServerlessTaskMaxStatementSize = null,
    string ServerlessTaskMinStatementSize = null,
    string SessionPolicy = null,
    string SimulatedDataSharingConsumer = null,
    object SsoLoginPage = null,
    double StatementQueuedTimeoutInSeconds = null,
    double StatementTimeoutInSeconds = null,
    string StorageSerializationPolicy = null,
    object StrictJsonOutput = null,
    double SuspendTaskAfterNumFailures = null,
    double TaskAutoRetryAttempts = null,
    string TimeInputFormat = null,
    string TimeOutputFormat = null,
    CurrentAccountTimeouts Timeouts = null,
    object TimestampDayIsAlways24H = null,
    string TimestampInputFormat = null,
    string TimestampLtzOutputFormat = null,
    string TimestampNtzOutputFormat = null,
    string TimestampOutputFormat = null,
    string TimestampTypeMapping = null,
    string TimestampTzOutputFormat = null,
    string Timezone = null,
    string TraceLevel = null,
    object TransactionAbortOnError = null,
    string TransactionDefaultIsolationLevel = null,
    double TwoDigitCenturyStart = null,
    string UnsupportedDdlAction = null,
    object UseCachedResult = null,
    string UserTaskManagedInitialWarehouseSize = null,
    double UserTaskMinimumTriggerIntervalInSeconds = null,
    double UserTaskTimeoutMs = null,
    double WeekOfYearPolicy = null,
    double WeekStart = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.abortDetachedQuery">AbortDetachedQuery</a></code> | <code>object</code> | Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.activePythonProfiler">ActivePythonProfiler</a></code> | <code>string</code> | Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` \| `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowClientMfaCaching">AllowClientMfaCaching</a></code> | <code>object</code> | Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowIdToken">AllowIdToken</a></code> | <code>object</code> | Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.authenticationPolicy">AuthenticationPolicy</a></code> | <code>string</code> | Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account. For more information about this resource, see [docs](./authentication_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.autocommit">Autocommit</a></code> | <code>object</code> | Specifies whether autocommit is enabled for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.baseLocationPrefix">BaseLocationPrefix</a></code> | <code>string</code> | Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryInputFormat">BinaryInputFormat</a></code> | <code>string</code> | The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryOutputFormat">BinaryOutputFormat</a></code> | <code>string</code> | The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalog">Catalog</a></code> | <code>string</code> | Specifies the catalog for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalogSync">CatalogSync</a></code> | <code>string</code> | Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEnableLogInfoStatementParameters">ClientEnableLogInfoStatementParameters</a></code> | <code>object</code> | Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEncryptionKeySize">ClientEncryptionKeySize</a></code> | <code>double</code> | Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMemoryLimit">ClientMemoryLimit</a></code> | <code>double</code> | Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataRequestUseConnectionCtx">ClientMetadataRequestUseConnectionCtx</a></code> | <code>object</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataUseSessionDatabase">ClientMetadataUseSessionDatabase</a></code> | <code>object</code> | For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientPrefetchThreads">ClientPrefetchThreads</a></code> | <code>double</code> | Parameter that specifies the number of threads used by the client to pre-fetch large result sets. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultChunkSize">ClientResultChunkSize</a></code> | <code>double</code> | Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultColumnCaseInsensitive">ClientResultColumnCaseInsensitive</a></code> | <code>object</code> | Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAlive">ClientSessionKeepAlive</a></code> | <code>object</code> | Parameter that indicates whether to force a user to log in again after a period of inactivity in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency">ClientSessionKeepAliveHeartbeatFrequency</a></code> | <code>double</code> | Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientTimestampTypeMapping">ClientTimestampTypeMapping</a></code> | <code>string</code> | Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` \| `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexEnabledCrossRegion">CortexEnabledCrossRegion</a></code> | <code>string</code> | Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexModelsAllowlist">CortexModelsAllowlist</a></code> | <code>string</code> | Specifies the models that users in the account can access. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.csvTimestampFormat">CsvTimestampFormat</a></code> | <code>string</code> | Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dataRetentionTimeInDays">DataRetentionTimeInDays</a></code> | <code>double</code> | Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateInputFormat">DateInputFormat</a></code> | <code>string</code> | Specifies the input format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateOutputFormat">DateOutputFormat</a></code> | <code>string</code> | Specifies the display format for the DATE data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultDdlCollation">DefaultDdlCollation</a></code> | <code>string</code> | Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolCpu">DefaultNotebookComputePoolCpu</a></code> | <code>string</code> | Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolGpu">DefaultNotebookComputePoolGpu</a></code> | <code>string</code> | Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `\|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNullOrdering">DefaultNullOrdering</a></code> | <code>string</code> | Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` \| `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultStreamlitNotebookWarehouse">DefaultStreamlitNotebookWarehouse</a></code> | <code>string</code> | Specifies the name of the default warehouse to use when creating a notebook. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUiDownloadButton">DisableUiDownloadButton</a></code> | <code>object</code> | Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUserPrivilegeGrants">DisableUserPrivilegeGrants</a></code> | <code>object</code> | Controls whether users in an account can grant privileges directly to other users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableAutomaticSensitiveDataClassificationLog">EnableAutomaticSensitiveDataClassificationLog</a></code> | <code>object</code> | Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableEgressCostOptimizer">EnableEgressCostOptimizer</a></code> | <code>object</code> | Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableIdentifierFirstLogin">EnableIdentifierFirstLogin</a></code> | <code>object</code> | Determines the login flow for users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableInternalStagesPrivatelink">EnableInternalStagesPrivatelink</a></code> | <code>object</code> | Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository">EnableTriSecretAndRekeyOptOutForImageRepository</a></code> | <code>object</code> | Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage">EnableTriSecretAndRekeyOptOutForSpcsBlockStorage</a></code> | <code>object</code> | Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnhandledExceptionsReporting">EnableUnhandledExceptionsReporting</a></code> | <code>object</code> | Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnloadPhysicalTypeOptimization">EnableUnloadPhysicalTypeOptimization</a></code> | <code>object</code> | Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedQuerySyntaxError">EnableUnredactedQuerySyntaxError</a></code> | <code>object</code> | Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedSecureObjectError">EnableUnredactedSecureObjectError</a></code> | <code>object</code> | Controls whether error messages related to secure objects are redacted in metadata. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enforceNetworkRulesForInternalStages">EnforceNetworkRulesForInternalStages</a></code> | <code>object</code> | Specifies whether a network policy that uses network rules can restrict access to AWS internal stages. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicMerge">ErrorOnNondeterministicMerge</a></code> | <code>object</code> | Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicUpdate">ErrorOnNondeterministicUpdate</a></code> | <code>object</code> | Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.eventTable">EventTable</a></code> | <code>string</code> | Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList">ExternalOauthAddPrivilegedRolesToBlockedList</a></code> | <code>object</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalVolume">ExternalVolume</a></code> | <code>string</code> | Specifies the external volume for Apache Iceberg™ tables. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.featurePolicy">FeaturePolicy</a></code> | <code>string</code> | Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geographyOutputFormat">GeographyOutputFormat</a></code> | <code>string</code> | Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geometryOutputFormat">GeometryOutputFormat</a></code> | <code>string</code> | Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` \| `WKT` \| `WKB` \| `EWKT` \| `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.hybridTableLockTimeout">HybridTableLockTimeout</a></code> | <code>double</code> | Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#id CurrentAccount#id}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.initialReplicationSizeLimitInTb">InitialReplicationSizeLimitInTb</a></code> | <code>string</code> | Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatDecimalAsInt">JdbcTreatDecimalAsInt</a></code> | <code>object</code> | Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatTimestampNtzAsUtc">JdbcTreatTimestampNtzAsUtc</a></code> | <code>object</code> | Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcUseSessionTimezone">JdbcUseSessionTimezone</a></code> | <code>object</code> | Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsonIndent">JsonIndent</a></code> | <code>double</code> | Specifies the number of blank spaces to indent each new element in JSON output in the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsTreatIntegerAsBigint">JsTreatIntegerAsBigint</a></code> | <code>object</code> | Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule">ListingAutoFulfillmentReplicationRefreshSchedule</a></code> | <code>string</code> | Sets the time interval used to refresh the application package based data products to other regions. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lockTimeout">LockTimeout</a></code> | <code>double</code> | Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.logLevel">LogLevel</a></code> | <code>string</code> | Specifies the severity level of messages that should be ingested and made available in the active event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxConcurrencyLevel">MaxConcurrencyLevel</a></code> | <code>double</code> | Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxDataExtensionTimeInDays">MaxDataExtensionTimeInDays</a></code> | <code>double</code> | Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.metricLevel">MetricLevel</a></code> | <code>string</code> | Controls how metrics data is ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.minDataRetentionTimeInDays">MinDataRetentionTimeInDays</a></code> | <code>double</code> | Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.multiStatementCount">MultiStatementCount</a></code> | <code>double</code> | Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.networkPolicy">NetworkPolicy</a></code> | <code>string</code> | Specifies the network policy to enforce for your account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.noorderSequenceAsDefault">NoorderSequenceAsDefault</a></code> | <code>object</code> | Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.oauthAddPrivilegedRolesToBlockedList">OauthAddPrivilegedRolesToBlockedList</a></code> | <code>object</code> | Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.odbcTreatDecimalAsInt">OdbcTreatDecimalAsInt</a></code> | <code>object</code> | Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.packagesPolicy">PackagesPolicy</a></code> | <code>string</code> | Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.passwordPolicy">PasswordPolicy</a></code> | <code>string</code> | Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.periodicDataRekeying">PeriodicDataRekeying</a></code> | <code>object</code> | It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pipeExecutionPaused">PipeExecutionPaused</a></code> | <code>object</code> | Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInlineUrl">PreventUnloadToInlineUrl</a></code> | <code>object</code> | Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInternalStages">PreventUnloadToInternalStages</a></code> | <code>object</code> | Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerModules">PythonProfilerModules</a></code> | <code>string</code> | Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerTargetStage">PythonProfilerTargetStage</a></code> | <code>string</code> | Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.queryTag">QueryTag</a></code> | <code>string</code> | Optional string that can be used to tag queries and other SQL statements executed within a session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.quotedIdentifiersIgnoreCase">QuotedIdentifiersIgnoreCase</a></code> | <code>object</code> | Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.replaceInvalidCharacters">ReplaceInvalidCharacters</a></code> | <code>object</code> | Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageCreation">RequireStorageIntegrationForStageCreation</a></code> | <code>object</code> | Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageOperation">RequireStorageIntegrationForStageOperation</a></code> | <code>object</code> | Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.resourceMonitor">ResourceMonitor</a></code> | <code>string</code> | Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.rowsPerResultset">RowsPerResultset</a></code> | <code>double</code> | Specifies the maximum number of rows returned in a result set. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.s3StageVpceDnsName">S3StageVpceDnsName</a></code> | <code>string</code> | Specifies the DNS name of an Amazon S3 interface endpoint. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.samlIdentityProvider">SamlIdentityProvider</a></code> | <code>string</code> | Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.searchPath">SearchPath</a></code> | <code>string</code> | Specifies the path to search to resolve unqualified object names in queries. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMaxStatementSize">ServerlessTaskMaxStatementSize</a></code> | <code>string</code> | Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMinStatementSize">ServerlessTaskMinStatementSize</a></code> | <code>string</code> | Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` \| `X-SMALL` \| `SMALL` \| `MEDIUM` \| `LARGE` \| `XLARGE` \| `X-LARGE` \| `XXLARGE` \| `X2LARGE` \| `2X-LARGE` \| `XXXLARGE` \| `X3LARGE` \| `3X-LARGE` \| `X4LARGE` \| `4X-LARGE` \| `X5LARGE` \| `5X-LARGE` \| `X6LARGE` \| `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.sessionPolicy">SessionPolicy</a></code> | <code>string</code> | Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.simulatedDataSharingConsumer">SimulatedDataSharingConsumer</a></code> | <code>string</code> | Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.ssoLoginPage">SsoLoginPage</a></code> | <code>object</code> | This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementQueuedTimeoutInSeconds">StatementQueuedTimeoutInSeconds</a></code> | <code>double</code> | Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementTimeoutInSeconds">StatementTimeoutInSeconds</a></code> | <code>double</code> | Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.storageSerializationPolicy">StorageSerializationPolicy</a></code> | <code>string</code> | Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` \| `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.strictJsonOutput">StrictJsonOutput</a></code> | <code>object</code> | This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.suspendTaskAfterNumFailures">SuspendTaskAfterNumFailures</a></code> | <code>double</code> | Specifies the number of consecutive failed task runs after which the current task is suspended automatically. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.taskAutoRetryAttempts">TaskAutoRetryAttempts</a></code> | <code>double</code> | Specifies the number of automatic task graph retry attempts. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeInputFormat">TimeInputFormat</a></code> | <code>string</code> | Specifies the input format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeOutputFormat">TimeOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIME data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampDayIsAlways24H">TimestampDayIsAlways24H</a></code> | <code>object</code> | Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampInputFormat">TimestampInputFormat</a></code> | <code>string</code> | Specifies the input format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampLtzOutputFormat">TimestampLtzOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIMESTAMP_LTZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampNtzOutputFormat">TimestampNtzOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampOutputFormat">TimestampOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIMESTAMP data type alias. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTypeMapping">TimestampTypeMapping</a></code> | <code>string</code> | Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTzOutputFormat">TimestampTzOutputFormat</a></code> | <code>string</code> | Specifies the display format for the TIMESTAMP_TZ data type. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timezone">Timezone</a></code> | <code>string</code> | Specifies the time zone for the session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.traceLevel">TraceLevel</a></code> | <code>string</code> | Controls how trace events are ingested into the event table. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionAbortOnError">TransactionAbortOnError</a></code> | <code>object</code> | Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionDefaultIsolationLevel">TransactionDefaultIsolationLevel</a></code> | <code>string</code> | Specifies the isolation level for transactions in the user session. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.twoDigitCenturyStart">TwoDigitCenturyStart</a></code> | <code>double</code> | Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.unsupportedDdlAction">UnsupportedDdlAction</a></code> | <code>string</code> | Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.useCachedResult">UseCachedResult</a></code> | <code>object</code> | Specifies whether to reuse persisted query results, if available, when a matching query is submitted. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskManagedInitialWarehouseSize">UserTaskManagedInitialWarehouseSize</a></code> | <code>string</code> | Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds">UserTaskMinimumTriggerIntervalInSeconds</a></code> | <code>double</code> | Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskTimeoutMs">UserTaskTimeoutMs</a></code> | <code>double</code> | Specifies the time limit on a single run of the task before it times out (in milliseconds). |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekOfYearPolicy">WeekOfYearPolicy</a></code> | <code>double</code> | Specifies how the weeks in a given year are computed. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekStart">WeekStart</a></code> | <code>double</code> | Specifies the first day of the week (used by week-related date functions). |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `AbortDetachedQuery`<sup>Optional</sup> <a name="AbortDetachedQuery" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.abortDetachedQuery"></a>

```csharp
public object AbortDetachedQuery { get; set; }
```

- *Type:* object

Specifies the action that Snowflake performs for in-progress queries if connectivity is lost due to abrupt termination of a session (e.g. network outage, browser termination, service interruption). For more information, check [ABORT_DETACHED_QUERY docs](https://docs.snowflake.com/en/sql-reference/parameters#abort-detached-query).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#abort_detached_query CurrentAccount#abort_detached_query}

---

##### `ActivePythonProfiler`<sup>Optional</sup> <a name="ActivePythonProfiler" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.activePythonProfiler"></a>

```csharp
public string ActivePythonProfiler { get; set; }
```

- *Type:* string

Sets the profiler to use for the session when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). Valid values are (case-insensitive): `LINE` | `MEMORY`. For more information, check [ACTIVE_PYTHON_PROFILER docs](https://docs.snowflake.com/en/sql-reference/parameters#active-python-profiler).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#active_python_profiler CurrentAccount#active_python_profiler}

---

##### `AllowClientMfaCaching`<sup>Optional</sup> <a name="AllowClientMfaCaching" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowClientMfaCaching"></a>

```csharp
public object AllowClientMfaCaching { get; set; }
```

- *Type:* object

Specifies whether an MFA token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to respond to an MFA prompt at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using MFA token caching to minimize the number of prompts during authentication — optional.](https://docs.snowflake.com/en/user-guide/security-mfa.html#label-mfa-token-caching) For more information, check [ALLOW_CLIENT_MFA_CACHING docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-client-mfa-caching).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#allow_client_mfa_caching CurrentAccount#allow_client_mfa_caching}

---

##### `AllowIdToken`<sup>Optional</sup> <a name="AllowIdToken" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.allowIdToken"></a>

```csharp
public object AllowIdToken { get; set; }
```

- *Type:* object

Specifies whether a connection token can be saved in the client-side operating system keystore to promote continuous, secure connectivity without users needing to enter login credentials at the start of each connection attempt to Snowflake.

For details and the list of supported Snowflake-provided clients, see [Using connection caching to minimize the number of prompts for authentication — optional.](https://docs.snowflake.com/en/user-guide/admin-security-fed-auth-use.html#label-browser-based-sso-connection-caching) For more information, check [ALLOW_ID_TOKEN docs](https://docs.snowflake.com/en/sql-reference/parameters#allow-id-token).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#allow_id_token CurrentAccount#allow_id_token}

---

##### `AuthenticationPolicy`<sup>Optional</sup> <a name="AuthenticationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.authenticationPolicy"></a>

```csharp
public string AuthenticationPolicy { get; set; }
```

- *Type:* string

Specifies [authentication policy](https://docs.snowflake.com/en/user-guide/authentication-policies) for the current account. For more information about this resource, see [docs](./authentication_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#authentication_policy CurrentAccount#authentication_policy}

---

##### `Autocommit`<sup>Optional</sup> <a name="Autocommit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.autocommit"></a>

```csharp
public object Autocommit { get; set; }
```

- *Type:* object

Specifies whether autocommit is enabled for the session.

Autocommit determines whether a DML statement, when executed without an active transaction, is automatically committed after the statement successfully completes. For more information, see [Transactions](https://docs.snowflake.com/en/sql-reference/transactions). For more information, check [AUTOCOMMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#autocommit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#autocommit CurrentAccount#autocommit}

---

##### `BaseLocationPrefix`<sup>Optional</sup> <a name="BaseLocationPrefix" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.baseLocationPrefix"></a>

```csharp
public string BaseLocationPrefix { get; set; }
```

- *Type:* string

Specifies a prefix for Snowflake to use in the write path for Snowflake-managed Apache Iceberg™ tables.

For more information, see [data and metadata directories for Iceberg tables](https://docs.snowflake.com/en/user-guide/tables-iceberg-storage.html#label-tables-iceberg-configure-external-volume-base-location). For more information, check [BASE_LOCATION_PREFIX docs](https://docs.snowflake.com/en/sql-reference/parameters#base-location-prefix).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#base_location_prefix CurrentAccount#base_location_prefix}

---

##### `BinaryInputFormat`<sup>Optional</sup> <a name="BinaryInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryInputFormat"></a>

```csharp
public string BinaryInputFormat { get; set; }
```

- *Type:* string

The format of VARCHAR values passed as input to VARCHAR-to-BINARY conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64` | `UTF8`. For more information, check [BINARY_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#binary_input_format CurrentAccount#binary_input_format}

---

##### `BinaryOutputFormat`<sup>Optional</sup> <a name="BinaryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.binaryOutputFormat"></a>

```csharp
public string BinaryOutputFormat { get; set; }
```

- *Type:* string

The format for VARCHAR values returned as output by BINARY-to-VARCHAR conversion functions.

For more information, see [Binary input and output](https://docs.snowflake.com/en/sql-reference/binary-input-output). Valid values are (case-insensitive): `HEX` | `BASE64`. For more information, check [BINARY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#binary-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#binary_output_format CurrentAccount#binary_output_format}

---

##### `Catalog`<sup>Optional</sup> <a name="Catalog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalog"></a>

```csharp
public string Catalog { get; set; }
```

- *Type:* string

Specifies the catalog for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-catalog-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#catalog CurrentAccount#catalog}

---

##### `CatalogSync`<sup>Optional</sup> <a name="CatalogSync" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.catalogSync"></a>

```csharp
public string CatalogSync { get; set; }
```

- *Type:* string

Specifies the name of your catalog integration for [Snowflake Open Catalog](https://other-docs.snowflake.com/en/opencatalog/overview). Snowflake syncs tables that use the specified catalog integration with your Snowflake Open Catalog account. For more information, see [Sync a Snowflake-managed table with Snowflake Open Catalog](https://docs.snowflake.com/en/user-guide/tables-iceberg-open-catalog-sync). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [CATALOG_SYNC docs](https://docs.snowflake.com/en/sql-reference/parameters#catalog-sync).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#catalog_sync CurrentAccount#catalog_sync}

---

##### `ClientEnableLogInfoStatementParameters`<sup>Optional</sup> <a name="ClientEnableLogInfoStatementParameters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEnableLogInfoStatementParameters"></a>

```csharp
public object ClientEnableLogInfoStatementParameters { get; set; }
```

- *Type:* object

Enables users to log the data values bound to [PreparedStatements](https://docs.snowflake.com/en/developer-guide/jdbc/jdbc-api.html#label-jdbc-api-preparedstatement) ([more details](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters)). For more information, check [CLIENT_ENABLE_LOG_INFO_STATEMENT_PARAMETERS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-enable-log-info-statement-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_enable_log_info_statement_parameters CurrentAccount#client_enable_log_info_statement_parameters}

---

##### `ClientEncryptionKeySize`<sup>Optional</sup> <a name="ClientEncryptionKeySize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientEncryptionKeySize"></a>

```csharp
public double ClientEncryptionKeySize { get; set; }
```

- *Type:* double

Specifies the AES encryption key size, in bits, used by Snowflake to encrypt/decrypt files stored on internal stages (for loading/unloading data) when you use the SNOWFLAKE_FULL encryption type.

For more information, check [CLIENT_ENCRYPTION_KEY_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-encryption-key-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_encryption_key_size CurrentAccount#client_encryption_key_size}

---

##### `ClientMemoryLimit`<sup>Optional</sup> <a name="ClientMemoryLimit" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMemoryLimit"></a>

```csharp
public double ClientMemoryLimit { get; set; }
```

- *Type:* double

Parameter that specifies the maximum amount of memory the JDBC driver or ODBC driver should use for the result set from queries (in MB).

For more information, check [CLIENT_MEMORY_LIMIT docs](https://docs.snowflake.com/en/sql-reference/parameters#client-memory-limit).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_memory_limit CurrentAccount#client_memory_limit}

---

##### `ClientMetadataRequestUseConnectionCtx`<sup>Optional</sup> <a name="ClientMetadataRequestUseConnectionCtx" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataRequestUseConnectionCtx"></a>

```csharp
public object ClientMetadataRequestUseConnectionCtx { get; set; }
```

- *Type:* object

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases/schemas to the current database/schema.

The narrower search typically returns fewer rows and executes more quickly. For more information, check [CLIENT_METADATA_REQUEST_USE_CONNECTION_CTX docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-request-use-connection-ctx).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_metadata_request_use_connection_ctx CurrentAccount#client_metadata_request_use_connection_ctx}

---

##### `ClientMetadataUseSessionDatabase`<sup>Optional</sup> <a name="ClientMetadataUseSessionDatabase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientMetadataUseSessionDatabase"></a>

```csharp
public object ClientMetadataUseSessionDatabase { get; set; }
```

- *Type:* object

For specific ODBC functions and JDBC methods, this parameter can change the default search scope from all databases to the current database.

The narrower search typically returns fewer rows and executes more quickly ([more details on the usage](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database)). For more information, check [CLIENT_METADATA_USE_SESSION_DATABASE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-metadata-use-session-database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_metadata_use_session_database CurrentAccount#client_metadata_use_session_database}

---

##### `ClientPrefetchThreads`<sup>Optional</sup> <a name="ClientPrefetchThreads" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientPrefetchThreads"></a>

```csharp
public double ClientPrefetchThreads { get; set; }
```

- *Type:* double

Parameter that specifies the number of threads used by the client to pre-fetch large result sets.

The driver will attempt to honor the parameter value, but defines the minimum and maximum values (depending on your system’s resources) to improve performance. For more information, check [CLIENT_PREFETCH_THREADS docs](https://docs.snowflake.com/en/sql-reference/parameters#client-prefetch-threads).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_prefetch_threads CurrentAccount#client_prefetch_threads}

---

##### `ClientResultChunkSize`<sup>Optional</sup> <a name="ClientResultChunkSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultChunkSize"></a>

```csharp
public double ClientResultChunkSize { get; set; }
```

- *Type:* double

Parameter that specifies the maximum size of each set (or chunk) of query results to download (in MB).

The JDBC driver downloads query results in chunks. For more information, check [CLIENT_RESULT_CHUNK_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-chunk-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_result_chunk_size CurrentAccount#client_result_chunk_size}

---

##### `ClientResultColumnCaseInsensitive`<sup>Optional</sup> <a name="ClientResultColumnCaseInsensitive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientResultColumnCaseInsensitive"></a>

```csharp
public object ClientResultColumnCaseInsensitive { get; set; }
```

- *Type:* object

Parameter that indicates whether to match column name case-insensitively in ResultSet.get* methods in JDBC. For more information, check [CLIENT_RESULT_COLUMN_CASE_INSENSITIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-result-column-case-insensitive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_result_column_case_insensitive CurrentAccount#client_result_column_case_insensitive}

---

##### `ClientSessionKeepAlive`<sup>Optional</sup> <a name="ClientSessionKeepAlive" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAlive"></a>

```csharp
public object ClientSessionKeepAlive { get; set; }
```

- *Type:* object

Parameter that indicates whether to force a user to log in again after a period of inactivity in the session.

For more information, check [CLIENT_SESSION_KEEP_ALIVE docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_session_keep_alive CurrentAccount#client_session_keep_alive}

---

##### `ClientSessionKeepAliveHeartbeatFrequency`<sup>Optional</sup> <a name="ClientSessionKeepAliveHeartbeatFrequency" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientSessionKeepAliveHeartbeatFrequency"></a>

```csharp
public double ClientSessionKeepAliveHeartbeatFrequency { get; set; }
```

- *Type:* double

Number of seconds in-between client attempts to update the token for the session. For more information, check [CLIENT_SESSION_KEEP_ALIVE_HEARTBEAT_FREQUENCY docs](https://docs.snowflake.com/en/sql-reference/parameters#client-session-keep-alive-heartbeat-frequency).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_session_keep_alive_heartbeat_frequency CurrentAccount#client_session_keep_alive_heartbeat_frequency}

---

##### `ClientTimestampTypeMapping`<sup>Optional</sup> <a name="ClientTimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.clientTimestampTypeMapping"></a>

```csharp
public string ClientTimestampTypeMapping { get; set; }
```

- *Type:* string

Specifies the [TIMESTAMP_* variation](https://docs.snowflake.com/en/sql-reference/data-types-datetime.html#label-datatypes-timestamp-variations) to use when binding timestamp variables for JDBC or ODBC applications that use the bind API to load data. Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ`. For more information, check [CLIENT_TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#client-timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#client_timestamp_type_mapping CurrentAccount#client_timestamp_type_mapping}

---

##### `CortexEnabledCrossRegion`<sup>Optional</sup> <a name="CortexEnabledCrossRegion" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexEnabledCrossRegion"></a>

```csharp
public string CortexEnabledCrossRegion { get; set; }
```

- *Type:* string

Specifies the regions where an inference request may be processed in case the request cannot be processed in the region where request is originally placed.

Specifying DISABLED disables cross-region inferencing. For examples and details, see [Cross-region inference](https://docs.snowflake.com/en/user-guide/snowflake-cortex/cross-region-inference). For more information, check [CORTEX_ENABLED_CROSS_REGION docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-enabled-cross-region).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#cortex_enabled_cross_region CurrentAccount#cortex_enabled_cross_region}

---

##### `CortexModelsAllowlist`<sup>Optional</sup> <a name="CortexModelsAllowlist" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.cortexModelsAllowlist"></a>

```csharp
public string CortexModelsAllowlist { get; set; }
```

- *Type:* string

Specifies the models that users in the account can access.

Use this parameter to allowlist models for all users in the account. If you need to provide specific users with access beyond what you’ve specified in the allowlist, use role-based access control instead. For more information, see [Model allowlist](https://docs.snowflake.com/en/user-guide/snowflake-cortex/aisql.html#label-cortex-llm-allowlist). For more information, check [CORTEX_MODELS_ALLOWLIST docs](https://docs.snowflake.com/en/sql-reference/parameters#cortex-models-allowlist).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#cortex_models_allowlist CurrentAccount#cortex_models_allowlist}

---

##### `CsvTimestampFormat`<sup>Optional</sup> <a name="CsvTimestampFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.csvTimestampFormat"></a>

```csharp
public string CsvTimestampFormat { get; set; }
```

- *Type:* string

Specifies the format for TIMESTAMP values in CSV files downloaded from Snowsight.

If this parameter is not set, [TIMESTAMP_LTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ltz-output-format) will be used for TIMESTAMP_LTZ values, [TIMESTAMP_TZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-tz-output-format) will be used for TIMESTAMP_TZ and [TIMESTAMP_NTZ_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-ntz-output-format) for TIMESTAMP_NTZ values. For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output) or [Download your query results](https://docs.snowflake.com/en/user-guide/ui-snowsight-query.html#label-snowsight-download-query-results). For more information, check [CSV_TIMESTAMP_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#csv-timestamp-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#csv_timestamp_format CurrentAccount#csv_timestamp_format}

---

##### `DataRetentionTimeInDays`<sup>Optional</sup> <a name="DataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dataRetentionTimeInDays"></a>

```csharp
public double DataRetentionTimeInDays { get; set; }
```

- *Type:* double

Number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on the object.

A value of 0 effectively disables Time Travel for the specified database, schema, or table. For more information, see [Understanding & using Time Travel](https://docs.snowflake.com/en/user-guide/data-time-travel). For more information, check [DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#data_retention_time_in_days CurrentAccount#data_retention_time_in_days}

---

##### `DateInputFormat`<sup>Optional</sup> <a name="DateInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateInputFormat"></a>

```csharp
public string DateInputFormat { get; set; }
```

- *Type:* string

Specifies the input format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#date_input_format CurrentAccount#date_input_format}

---

##### `DateOutputFormat`<sup>Optional</sup> <a name="DateOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.dateOutputFormat"></a>

```csharp
public string DateOutputFormat { get; set; }
```

- *Type:* string

Specifies the display format for the DATE data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [DATE_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#date-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#date_output_format CurrentAccount#date_output_format}

---

##### `DefaultDdlCollation`<sup>Optional</sup> <a name="DefaultDdlCollation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultDdlCollation"></a>

```csharp
public string DefaultDdlCollation { get; set; }
```

- *Type:* string

Sets the default collation used for the following DDL operations: [CREATE TABLE](https://docs.snowflake.com/en/sql-reference/sql/create-table), [ALTER TABLE](https://docs.snowflake.com/en/sql-reference/sql/alter-table) … ADD COLUMN. Setting this parameter forces all subsequently-created columns in the affected objects (table, schema, database, or account) to have the specified collation as the default, unless the collation for the column is explicitly defined in the DDL. For more information, check [DEFAULT_DDL_COLLATION docs](https://docs.snowflake.com/en/sql-reference/parameters#default-ddl-collation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#default_ddl_collation CurrentAccount#default_ddl_collation}

---

##### `DefaultNotebookComputePoolCpu`<sup>Optional</sup> <a name="DefaultNotebookComputePoolCpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolCpu"></a>

```csharp
public string DefaultNotebookComputePoolCpu { get; set; }
```

- *Type:* string

Sets the preferred CPU compute pool used for [Notebooks on CPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_CPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-cpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#default_notebook_compute_pool_cpu CurrentAccount#default_notebook_compute_pool_cpu}

---

##### `DefaultNotebookComputePoolGpu`<sup>Optional</sup> <a name="DefaultNotebookComputePoolGpu" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNotebookComputePoolGpu"></a>

```csharp
public string DefaultNotebookComputePoolGpu { get; set; }
```

- *Type:* string

Sets the preferred GPU compute pool used for [Notebooks on GPU Container Runtime](https://docs.snowflake.com/en/developer-guide/snowflake-ml/notebooks-on-spcs). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_NOTEBOOK_COMPUTE_POOL_GPU docs](https://docs.snowflake.com/en/sql-reference/parameters#default-notebook-compute-pool-gpu).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#default_notebook_compute_pool_gpu CurrentAccount#default_notebook_compute_pool_gpu}

---

##### `DefaultNullOrdering`<sup>Optional</sup> <a name="DefaultNullOrdering" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultNullOrdering"></a>

```csharp
public string DefaultNullOrdering { get; set; }
```

- *Type:* string

Specifies the default ordering of NULL values in a result set ([more details](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering)). Valid values are (case-insensitive): `FIRST` | `LAST`. For more information, check [DEFAULT_NULL_ORDERING docs](https://docs.snowflake.com/en/sql-reference/parameters#default-null-ordering).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#default_null_ordering CurrentAccount#default_null_ordering}

---

##### `DefaultStreamlitNotebookWarehouse`<sup>Optional</sup> <a name="DefaultStreamlitNotebookWarehouse" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.defaultStreamlitNotebookWarehouse"></a>

```csharp
public string DefaultStreamlitNotebookWarehouse { get; set; }
```

- *Type:* string

Specifies the name of the default warehouse to use when creating a notebook.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [DEFAULT_STREAMLIT_NOTEBOOK_WAREHOUSE docs](https://docs.snowflake.com/en/sql-reference/parameters#default-streamlit-notebook-warehouse).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#default_streamlit_notebook_warehouse CurrentAccount#default_streamlit_notebook_warehouse}

---

##### `DisableUiDownloadButton`<sup>Optional</sup> <a name="DisableUiDownloadButton" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUiDownloadButton"></a>

```csharp
public object DisableUiDownloadButton { get; set; }
```

- *Type:* object

Controls whether users in an account see a button to download data in Snowsight or the Classic Console, such as a table returned from running a query in a worksheet.

If the button to download is hidden in Snowsight or the Classic Console, users can still download or export data using [third-party software](https://docs.snowflake.com/en/user-guide/ecosystem). For more information, check [DISABLE_UI_DOWNLOAD_BUTTON docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-ui-download-button).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#disable_ui_download_button CurrentAccount#disable_ui_download_button}

---

##### `DisableUserPrivilegeGrants`<sup>Optional</sup> <a name="DisableUserPrivilegeGrants" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.disableUserPrivilegeGrants"></a>

```csharp
public object DisableUserPrivilegeGrants { get; set; }
```

- *Type:* object

Controls whether users in an account can grant privileges directly to other users.

Disabling user privilege grants (that is, setting DISABLE_USER_PRIVILEGE_GRANTS to TRUE) does not affect existing grants to users. Existing grants to users continue to confer privileges to those users. For more information, see [GRANT <privileges> … TO USER](https://docs.snowflake.com/en/sql-reference/sql/grant-privilege-user). For more information, check [DISABLE_USER_PRIVILEGE_GRANTS docs](https://docs.snowflake.com/en/sql-reference/parameters#disable-user-privilege-grants).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#disable_user_privilege_grants CurrentAccount#disable_user_privilege_grants}

---

##### `EnableAutomaticSensitiveDataClassificationLog`<sup>Optional</sup> <a name="EnableAutomaticSensitiveDataClassificationLog" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableAutomaticSensitiveDataClassificationLog"></a>

```csharp
public object EnableAutomaticSensitiveDataClassificationLog { get; set; }
```

- *Type:* object

Controls whether events from [automatic sensitive data classification](https://docs.snowflake.com/en/user-guide/classify-auto) are logged in the user event table. For more information, check [ENABLE_AUTOMATIC_SENSITIVE_DATA_CLASSIFICATION_LOG docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-automatic-sensitive-data-classification-log).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_automatic_sensitive_data_classification_log CurrentAccount#enable_automatic_sensitive_data_classification_log}

---

##### `EnableEgressCostOptimizer`<sup>Optional</sup> <a name="EnableEgressCostOptimizer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableEgressCostOptimizer"></a>

```csharp
public object EnableEgressCostOptimizer { get; set; }
```

- *Type:* object

Enables or disables the Listing Cross-cloud auto-fulfillment Egress cost optimizer. For more information, check [ENABLE_EGRESS_COST_OPTIMIZER docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-egress-cost-optimizer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_egress_cost_optimizer CurrentAccount#enable_egress_cost_optimizer}

---

##### `EnableIdentifierFirstLogin`<sup>Optional</sup> <a name="EnableIdentifierFirstLogin" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableIdentifierFirstLogin"></a>

```csharp
public object EnableIdentifierFirstLogin { get; set; }
```

- *Type:* object

Determines the login flow for users.

When enabled, Snowflake prompts users for their username or email address before presenting authentication methods. For details, see [Identifier-first login](https://docs.snowflake.com/en/user-guide/identifier-first-login). For more information, check [ENABLE_IDENTIFIER_FIRST_LOGIN docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-identifier-first-login).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_identifier_first_login CurrentAccount#enable_identifier_first_login}

---

##### `EnableInternalStagesPrivatelink`<sup>Optional</sup> <a name="EnableInternalStagesPrivatelink" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableInternalStagesPrivatelink"></a>

```csharp
public object EnableInternalStagesPrivatelink { get; set; }
```

- *Type:* object

Specifies whether the [SYSTEM$GET_PRIVATELINK_CONFIG](https://docs.snowflake.com/en/sql-reference/functions/system_get_privatelink_config) function returns the private-internal-stages key in the query result. The corresponding value in the query result is used during the configuration process for private connectivity to internal stages. For more information, check [ENABLE_INTERNAL_STAGES_PRIVATELINK docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-internal-stages-privatelink).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_internal_stages_privatelink CurrentAccount#enable_internal_stages_privatelink}

---

##### `EnableTriSecretAndRekeyOptOutForImageRepository`<sup>Optional</sup> <a name="EnableTriSecretAndRekeyOptOutForImageRepository" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForImageRepository"></a>

```csharp
public object EnableTriSecretAndRekeyOptOutForImageRepository { get; set; }
```

- *Type:* object

Specifies choice for the [image repository](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/working-with-registry-repository.html#label-registry-and-repository-image-repository) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_IMAGE_REPOSITORY docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-image-repository).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_image_repository CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_image_repository}

---

##### `EnableTriSecretAndRekeyOptOutForSpcsBlockStorage`<sup>Optional</sup> <a name="EnableTriSecretAndRekeyOptOutForSpcsBlockStorage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableTriSecretAndRekeyOptOutForSpcsBlockStorage"></a>

```csharp
public object EnableTriSecretAndRekeyOptOutForSpcsBlockStorage { get; set; }
```

- *Type:* object

Specifies the choice for the [Snowpark Container Services block storage volume](https://docs.snowflake.com/en/developer-guide/snowpark-container-services/block-storage-volume) to opt out of Tri-Secret Secure and [Periodic rekeying](https://docs.snowflake.com/en/user-guide/security-encryption-manage.html#label-periodic-rekeying). For more information, check [ENABLE_TRI_SECRET_AND_REKEY_OPT_OUT_FOR_SPCS_BLOCK_STORAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-tri-secret-and-rekey-opt-out-for-spcs-block-storage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage CurrentAccount#enable_tri_secret_and_rekey_opt_out_for_spcs_block_storage}

---

##### `EnableUnhandledExceptionsReporting`<sup>Optional</sup> <a name="EnableUnhandledExceptionsReporting" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnhandledExceptionsReporting"></a>

```csharp
public object EnableUnhandledExceptionsReporting { get; set; }
```

- *Type:* object

Specifies whether Snowflake may capture – in an event table – log messages or trace event data for unhandled exceptions in procedure or UDF handler code.

For more information, see [Capturing messages from unhandled exceptions](https://docs.snowflake.com/en/developer-guide/logging-tracing/unhandled-exception-messages). For more information, check [ENABLE_UNHANDLED_EXCEPTIONS_REPORTING docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unhandled-exceptions-reporting).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_unhandled_exceptions_reporting CurrentAccount#enable_unhandled_exceptions_reporting}

---

##### `EnableUnloadPhysicalTypeOptimization`<sup>Optional</sup> <a name="EnableUnloadPhysicalTypeOptimization" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnloadPhysicalTypeOptimization"></a>

```csharp
public object EnableUnloadPhysicalTypeOptimization { get; set; }
```

- *Type:* object

Specifies whether to set the schema for unloaded Parquet files based on the logical column data types (i.e. the types in the unload SQL query or source table) or on the unloaded column values (i.e. the smallest data types and precision that support the values in the output columns of the unload SQL statement or source table). For more information, check [ENABLE_UNLOAD_PHYSICAL_TYPE_OPTIMIZATION docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unload-physical-type-optimization).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_unload_physical_type_optimization CurrentAccount#enable_unload_physical_type_optimization}

---

##### `EnableUnredactedQuerySyntaxError`<sup>Optional</sup> <a name="EnableUnredactedQuerySyntaxError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedQuerySyntaxError"></a>

```csharp
public object EnableUnredactedQuerySyntaxError { get; set; }
```

- *Type:* object

Controls whether query text is redacted if a SQL query fails due to a syntax or parsing error.

If FALSE, the content of a failed query is redacted in the views, pages, and functions that provide a query history. Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the query text, not the user who executed the query (if those are different users). For more information, check [ENABLE_UNREDACTED_QUERY_SYNTAX_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-query-syntax-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_unredacted_query_syntax_error CurrentAccount#enable_unredacted_query_syntax_error}

---

##### `EnableUnredactedSecureObjectError`<sup>Optional</sup> <a name="EnableUnredactedSecureObjectError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enableUnredactedSecureObjectError"></a>

```csharp
public object EnableUnredactedSecureObjectError { get; set; }
```

- *Type:* object

Controls whether error messages related to secure objects are redacted in metadata.

For more information, see [Secure objects: Redaction of information in error messages](https://docs.snowflake.com/en/release-notes/bcr-bundles/un-bundled/bcr-1858). Only users with a role that is granted or inherits the AUDIT privilege can set the ENABLE_UNREDACTED_SECURE_OBJECT_ERROR parameter. When using the ALTER USER command to set the parameter to TRUE for a particular user, modify the user that you want to see the redacted error messages in metadata, not the user who caused the error. For more information, check [ENABLE_UNREDACTED_SECURE_OBJECT_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#enable-unredacted-secure-object-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enable_unredacted_secure_object_error CurrentAccount#enable_unredacted_secure_object_error}

---

##### `EnforceNetworkRulesForInternalStages`<sup>Optional</sup> <a name="EnforceNetworkRulesForInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.enforceNetworkRulesForInternalStages"></a>

```csharp
public object EnforceNetworkRulesForInternalStages { get; set; }
```

- *Type:* object

Specifies whether a network policy that uses network rules can restrict access to AWS internal stages.

This parameter has no effect on network policies that do not use network rules. This account-level parameter affects both account-level and user-level network policies. For details about using network policies and network rules to restrict access to AWS internal stages, including the use of this parameter, see [Protecting internal stages on AWS](https://docs.snowflake.com/en/user-guide/network-policies.html#label-network-policies-rules-stages). For more information, check [ENFORCE_NETWORK_RULES_FOR_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#enforce-network-rules-for-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#enforce_network_rules_for_internal_stages CurrentAccount#enforce_network_rules_for_internal_stages}

---

##### `ErrorOnNondeterministicMerge`<sup>Optional</sup> <a name="ErrorOnNondeterministicMerge" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicMerge"></a>

```csharp
public object ErrorOnNondeterministicMerge { get; set; }
```

- *Type:* object

Specifies whether to return an error when the [MERGE](https://docs.snowflake.com/en/sql-reference/sql/merge) command is used to update or delete a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_MERGE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-merge).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#error_on_nondeterministic_merge CurrentAccount#error_on_nondeterministic_merge}

---

##### `ErrorOnNondeterministicUpdate`<sup>Optional</sup> <a name="ErrorOnNondeterministicUpdate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.errorOnNondeterministicUpdate"></a>

```csharp
public object ErrorOnNondeterministicUpdate { get; set; }
```

- *Type:* object

Specifies whether to return an error when the [UPDATE](https://docs.snowflake.com/en/sql-reference/sql/update) command is used to update a target row that joins multiple source rows and the system cannot determine the action to perform on the target row. For more information, check [ERROR_ON_NONDETERMINISTIC_UPDATE docs](https://docs.snowflake.com/en/sql-reference/parameters#error-on-nondeterministic-update).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#error_on_nondeterministic_update CurrentAccount#error_on_nondeterministic_update}

---

##### `EventTable`<sup>Optional</sup> <a name="EventTable" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.eventTable"></a>

```csharp
public string EventTable { get; set; }
```

- *Type:* string

Specifies the name of the event table for logging messages from stored procedures and UDFs contained by the object with which the event table is associated.

Associating an event table with a database is available in [Enterprise Edition or higher](https://docs.snowflake.com/en/user-guide/intro-editions). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EVENT_TABLE docs](https://docs.snowflake.com/en/sql-reference/parameters#event-table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#event_table CurrentAccount#event_table}

---

##### `ExternalOauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="ExternalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```csharp
public object ExternalOauthAddPrivilegedRolesToBlockedList { get; set; }
```

- *Type:* object

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from the External OAuth authorization server.

For more information, check [EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#external-oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#external_oauth_add_privileged_roles_to_blocked_list CurrentAccount#external_oauth_add_privileged_roles_to_blocked_list}

---

##### `ExternalVolume`<sup>Optional</sup> <a name="ExternalVolume" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.externalVolume"></a>

```csharp
public string ExternalVolume { get; set; }
```

- *Type:* string

Specifies the external volume for Apache Iceberg™ tables.

For more information, see the [Iceberg table documentation](https://docs.snowflake.com/en/user-guide/tables-iceberg.html#label-tables-iceberg-external-volume-def). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [EXTERNAL_VOLUME docs](https://docs.snowflake.com/en/sql-reference/parameters#external-volume).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#external_volume CurrentAccount#external_volume}

---

##### `FeaturePolicy`<sup>Optional</sup> <a name="FeaturePolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.featurePolicy"></a>

```csharp
public string FeaturePolicy { get; set; }
```

- *Type:* string

Specifies [feature policy](https://docs.snowflake.com/en/developer-guide/native-apps/ui-consumer-feature-policies) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#feature_policy CurrentAccount#feature_policy}

---

##### `GeographyOutputFormat`<sup>Optional</sup> <a name="GeographyOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geographyOutputFormat"></a>

```csharp
public string GeographyOutputFormat { get; set; }
```

- *Type:* string

Display format for [GEOGRAPHY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geography). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOGRAPHY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geography-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#geography_output_format CurrentAccount#geography_output_format}

---

##### `GeometryOutputFormat`<sup>Optional</sup> <a name="GeometryOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.geometryOutputFormat"></a>

```csharp
public string GeometryOutputFormat { get; set; }
```

- *Type:* string

Display format for [GEOMETRY values](https://docs.snowflake.com/en/sql-reference/data-types-geospatial.html#label-data-types-geometry). Valid values are (case-insensitive): `GeoJSON` | `WKT` | `WKB` | `EWKT` | `EWKB`. For more information, check [GEOMETRY_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#geometry-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#geometry_output_format CurrentAccount#geometry_output_format}

---

##### `HybridTableLockTimeout`<sup>Optional</sup> <a name="HybridTableLockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.hybridTableLockTimeout"></a>

```csharp
public double HybridTableLockTimeout { get; set; }
```

- *Type:* double

Number of seconds to wait while trying to acquire row-level locks on a hybrid table, before timing out and aborting the statement.

For more information, check [HYBRID_TABLE_LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#hybrid-table-lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#hybrid_table_lock_timeout CurrentAccount#hybrid_table_lock_timeout}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#id CurrentAccount#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialReplicationSizeLimitInTb`<sup>Optional</sup> <a name="InitialReplicationSizeLimitInTb" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.initialReplicationSizeLimitInTb"></a>

```csharp
public string InitialReplicationSizeLimitInTb { get; set; }
```

- *Type:* string

Sets the maximum estimated size limit for the initial replication of a primary database to a secondary database (in TB).

Set this parameter on any account that stores a secondary database. This size limit helps prevent accounts from accidentally incurring large database replication charges. To remove the size limit, set the value to 0.0. It is required to pass numbers with scale of at least 1 (e.g. 20.5, 32.25, 33.333, etc.). For more information, check [INITIAL_REPLICATION_SIZE_LIMIT_IN_TB docs](https://docs.snowflake.com/en/sql-reference/parameters#initial-replication-size-limit-in-tb).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#initial_replication_size_limit_in_tb CurrentAccount#initial_replication_size_limit_in_tb}

---

##### `JdbcTreatDecimalAsInt`<sup>Optional</sup> <a name="JdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatDecimalAsInt"></a>

```csharp
public object JdbcTreatDecimalAsInt { get; set; }
```

- *Type:* object

Specifies how JDBC processes columns that have a scale of zero (0). For more information, check [JDBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#jdbc_treat_decimal_as_int CurrentAccount#jdbc_treat_decimal_as_int}

---

##### `JdbcTreatTimestampNtzAsUtc`<sup>Optional</sup> <a name="JdbcTreatTimestampNtzAsUtc" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcTreatTimestampNtzAsUtc"></a>

```csharp
public object JdbcTreatTimestampNtzAsUtc { get; set; }
```

- *Type:* object

Specifies how JDBC processes TIMESTAMP_NTZ values ([more details](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc)). For more information, check [JDBC_TREAT_TIMESTAMP_NTZ_AS_UTC docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-treat-timestamp-ntz-as-utc).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#jdbc_treat_timestamp_ntz_as_utc CurrentAccount#jdbc_treat_timestamp_ntz_as_utc}

---

##### `JdbcUseSessionTimezone`<sup>Optional</sup> <a name="JdbcUseSessionTimezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jdbcUseSessionTimezone"></a>

```csharp
public object JdbcUseSessionTimezone { get; set; }
```

- *Type:* object

Specifies whether the JDBC Driver uses the time zone of the JVM or the time zone of the session (specified by the [TIMEZONE](https://docs.snowflake.com/en/sql-reference/parameters#label-timezone) parameter) for the getDate(), getTime(), and getTimestamp() methods of the ResultSet class. For more information, check [JDBC_USE_SESSION_TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#jdbc-use-session-timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#jdbc_use_session_timezone CurrentAccount#jdbc_use_session_timezone}

---

##### `JsonIndent`<sup>Optional</sup> <a name="JsonIndent" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsonIndent"></a>

```csharp
public double JsonIndent { get; set; }
```

- *Type:* double

Specifies the number of blank spaces to indent each new element in JSON output in the session.

Also specifies whether to insert newline characters after each element. For more information, check [JSON_INDENT docs](https://docs.snowflake.com/en/sql-reference/parameters#json-indent).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#json_indent CurrentAccount#json_indent}

---

##### `JsTreatIntegerAsBigint`<sup>Optional</sup> <a name="JsTreatIntegerAsBigint" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.jsTreatIntegerAsBigint"></a>

```csharp
public object JsTreatIntegerAsBigint { get; set; }
```

- *Type:* object

Specifies how the Snowflake Node.js Driver processes numeric columns that have a scale of zero (0), for example INTEGER or NUMBER(p, 0). For more information, check [JS_TREAT_INTEGER_AS_BIGINT docs](https://docs.snowflake.com/en/sql-reference/parameters#js-treat-integer-as-bigint).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#js_treat_integer_as_bigint CurrentAccount#js_treat_integer_as_bigint}

---

##### `ListingAutoFulfillmentReplicationRefreshSchedule`<sup>Optional</sup> <a name="ListingAutoFulfillmentReplicationRefreshSchedule" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.listingAutoFulfillmentReplicationRefreshSchedule"></a>

```csharp
public string ListingAutoFulfillmentReplicationRefreshSchedule { get; set; }
```

- *Type:* string

Sets the time interval used to refresh the application package based data products to other regions.

For more information, check [LISTING_AUTO_FULFILLMENT_REPLICATION_REFRESH_SCHEDULE docs](https://docs.snowflake.com/en/sql-reference/parameters#listing-auto-fulfillment-replication-refresh-schedule).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#listing_auto_fulfillment_replication_refresh_schedule CurrentAccount#listing_auto_fulfillment_replication_refresh_schedule}

---

##### `LockTimeout`<sup>Optional</sup> <a name="LockTimeout" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.lockTimeout"></a>

```csharp
public double LockTimeout { get; set; }
```

- *Type:* double

Number of seconds to wait while trying to lock a resource, before timing out and aborting the statement.

For more information, check [LOCK_TIMEOUT docs](https://docs.snowflake.com/en/sql-reference/parameters#lock-timeout).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#lock_timeout CurrentAccount#lock_timeout}

---

##### `LogLevel`<sup>Optional</sup> <a name="LogLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.logLevel"></a>

```csharp
public string LogLevel { get; set; }
```

- *Type:* string

Specifies the severity level of messages that should be ingested and made available in the active event table.

Messages at the specified level (and at more severe levels) are ingested. For more information about log levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `TRACE` | `DEBUG` | `INFO` | `WARN` | `ERROR` | `FATAL` | `OFF`. For more information, check [LOG_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#log-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#log_level CurrentAccount#log_level}

---

##### `MaxConcurrencyLevel`<sup>Optional</sup> <a name="MaxConcurrencyLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxConcurrencyLevel"></a>

```csharp
public double MaxConcurrencyLevel { get; set; }
```

- *Type:* double

Specifies the concurrency level for SQL statements (that is, queries and DML) executed by a warehouse ([more details](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level)). For more information, check [MAX_CONCURRENCY_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#max-concurrency-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#max_concurrency_level CurrentAccount#max_concurrency_level}

---

##### `MaxDataExtensionTimeInDays`<sup>Optional</sup> <a name="MaxDataExtensionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.maxDataExtensionTimeInDays"></a>

```csharp
public double MaxDataExtensionTimeInDays { get; set; }
```

- *Type:* double

Maximum number of days Snowflake can extend the data retention period for tables to prevent streams on the tables from becoming stale.

By default, if the [DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#data-retention-time-in-days) setting for a source table is less than 14 days, and a stream has not been consumed, Snowflake temporarily extends this period to the stream’s offset, up to a maximum of 14 days, regardless of the [Snowflake Edition](https://docs.snowflake.com/en/user-guide/intro-editions) for your account. The MAX_DATA_EXTENSION_TIME_IN_DAYS parameter enables you to limit this automatic extension period to control storage costs for data retention or for compliance reasons. For more information, check [MAX_DATA_EXTENSION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#max-data-extension-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#max_data_extension_time_in_days CurrentAccount#max_data_extension_time_in_days}

---

##### `MetricLevel`<sup>Optional</sup> <a name="MetricLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.metricLevel"></a>

```csharp
public string MetricLevel { get; set; }
```

- *Type:* string

Controls how metrics data is ingested into the event table.

For more information about metric levels, see [Setting levels for logging, metrics, and tracing](https://docs.snowflake.com/en/developer-guide/logging-tracing/telemetry-levels). Valid values are (case-insensitive): `ALL` | `NONE`. For more information, check [METRIC_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#metric-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#metric_level CurrentAccount#metric_level}

---

##### `MinDataRetentionTimeInDays`<sup>Optional</sup> <a name="MinDataRetentionTimeInDays" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.minDataRetentionTimeInDays"></a>

```csharp
public double MinDataRetentionTimeInDays { get; set; }
```

- *Type:* double

Minimum number of days for which Snowflake retains historical data for performing Time Travel actions (SELECT, CLONE, UNDROP) on an object.

If a minimum number of days for data retention is set on an account, the data retention period for an object is determined by MAX([DATA_RETENTION_TIME_IN_DAYS](https://docs.snowflake.com/en/sql-reference/parameters#label-data-retention-time-in-days), MIN_DATA_RETENTION_TIME_IN_DAYS). For more information, check [MIN_DATA_RETENTION_TIME_IN_DAYS docs](https://docs.snowflake.com/en/sql-reference/parameters#min-data-retention-time-in-days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#min_data_retention_time_in_days CurrentAccount#min_data_retention_time_in_days}

---

##### `MultiStatementCount`<sup>Optional</sup> <a name="MultiStatementCount" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.multiStatementCount"></a>

```csharp
public double MultiStatementCount { get; set; }
```

- *Type:* double

Number of statements to execute when using the multi-statement capability. For more information, check [MULTI_STATEMENT_COUNT docs](https://docs.snowflake.com/en/sql-reference/parameters#multi-statement-count).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#multi_statement_count CurrentAccount#multi_statement_count}

---

##### `NetworkPolicy`<sup>Optional</sup> <a name="NetworkPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.networkPolicy"></a>

```csharp
public string NetworkPolicy { get; set; }
```

- *Type:* string

Specifies the network policy to enforce for your account.

Network policies enable restricting access to your account based on users’ IP address. For more details, see [Controlling network traffic with network policies](https://docs.snowflake.com/en/user-guide/network-policies). Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information, check [NETWORK_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#network-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#network_policy CurrentAccount#network_policy}

---

##### `NoorderSequenceAsDefault`<sup>Optional</sup> <a name="NoorderSequenceAsDefault" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.noorderSequenceAsDefault"></a>

```csharp
public object NoorderSequenceAsDefault { get; set; }
```

- *Type:* object

Specifies whether the ORDER or NOORDER property is set by default when you create a new sequence or add a new table column.

The ORDER and NOORDER properties determine whether or not the values are generated for the sequence or auto-incremented column in [increasing or decreasing order](https://docs.snowflake.com/en/user-guide/querying-sequences.html#label-querying-sequences-increasing-values). For more information, check [NOORDER_SEQUENCE_AS_DEFAULT docs](https://docs.snowflake.com/en/sql-reference/parameters#noorder-sequence-as-default).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#noorder_sequence_as_default CurrentAccount#noorder_sequence_as_default}

---

##### `OauthAddPrivilegedRolesToBlockedList`<sup>Optional</sup> <a name="OauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.oauthAddPrivilegedRolesToBlockedList"></a>

```csharp
public object OauthAddPrivilegedRolesToBlockedList { get; set; }
```

- *Type:* object

Determines whether the ACCOUNTADMIN, ORGADMIN, GLOBALORGADMIN, and SECURITYADMIN roles can be used as the primary role when creating a Snowflake session based on the access token from Snowflake’s authorization server.

For more information, check [OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST docs](https://docs.snowflake.com/en/sql-reference/parameters#oauth-add-privileged-roles-to-blocked-list).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#oauth_add_privileged_roles_to_blocked_list CurrentAccount#oauth_add_privileged_roles_to_blocked_list}

---

##### `OdbcTreatDecimalAsInt`<sup>Optional</sup> <a name="OdbcTreatDecimalAsInt" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.odbcTreatDecimalAsInt"></a>

```csharp
public object OdbcTreatDecimalAsInt { get; set; }
```

- *Type:* object

Specifies how ODBC processes columns that have a scale of zero (0). For more information, check [ODBC_TREAT_DECIMAL_AS_INT docs](https://docs.snowflake.com/en/sql-reference/parameters#odbc-treat-decimal-as-int).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#odbc_treat_decimal_as_int CurrentAccount#odbc_treat_decimal_as_int}

---

##### `PackagesPolicy`<sup>Optional</sup> <a name="PackagesPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.packagesPolicy"></a>

```csharp
public string PackagesPolicy { get; set; }
```

- *Type:* string

Specifies [packages policy](https://docs.snowflake.com/en/developer-guide/udf/python/packages-policy) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#packages_policy CurrentAccount#packages_policy}

---

##### `PasswordPolicy`<sup>Optional</sup> <a name="PasswordPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.passwordPolicy"></a>

```csharp
public string PasswordPolicy { get; set; }
```

- *Type:* string

Specifies [password policy](https://docs.snowflake.com/en/user-guide/password-authentication#label-using-password-policies) for the current account. For more information about this resource, see [docs](./password_policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#password_policy CurrentAccount#password_policy}

---

##### `PeriodicDataRekeying`<sup>Optional</sup> <a name="PeriodicDataRekeying" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.periodicDataRekeying"></a>

```csharp
public object PeriodicDataRekeying { get; set; }
```

- *Type:* object

It enables/disables re-encryption of table data with new keys on a yearly basis to provide additional levels of data protection ([more details](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying)). For more information, check [PERIODIC_DATA_REKEYING docs](https://docs.snowflake.com/en/sql-reference/parameters#periodic-data-rekeying).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#periodic_data_rekeying CurrentAccount#periodic_data_rekeying}

---

##### `PipeExecutionPaused`<sup>Optional</sup> <a name="PipeExecutionPaused" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pipeExecutionPaused"></a>

```csharp
public object PipeExecutionPaused { get; set; }
```

- *Type:* object

Specifies whether to pause a running pipe, primarily in preparation for transferring ownership of the pipe to a different role ([more details](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused)). For more information, check [PIPE_EXECUTION_PAUSED docs](https://docs.snowflake.com/en/sql-reference/parameters#pipe-execution-paused).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#pipe_execution_paused CurrentAccount#pipe_execution_paused}

---

##### `PreventUnloadToInlineUrl`<sup>Optional</sup> <a name="PreventUnloadToInlineUrl" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInlineUrl"></a>

```csharp
public object PreventUnloadToInlineUrl { get; set; }
```

- *Type:* object

Specifies whether to prevent ad hoc data unload operations to external cloud storage locations (that is, [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements that specify the cloud storage URL and access settings directly in the statement). For an example, see [Unloading data from a table directly to files in an external location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location.html#label-copy-into-location-ad-hoc). For more information, check [PREVENT_UNLOAD_TO_INLINE_URL docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-inline-url).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#prevent_unload_to_inline_url CurrentAccount#prevent_unload_to_inline_url}

---

##### `PreventUnloadToInternalStages`<sup>Optional</sup> <a name="PreventUnloadToInternalStages" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.preventUnloadToInternalStages"></a>

```csharp
public object PreventUnloadToInternalStages { get; set; }
```

- *Type:* object

Specifies whether to prevent data unload operations to internal (Snowflake) stages using [COPY INTO location](https://docs.snowflake.com/en/sql-reference/sql/copy-into-location) statements. For more information, check [PREVENT_UNLOAD_TO_INTERNAL_STAGES docs](https://docs.snowflake.com/en/sql-reference/parameters#prevent-unload-to-internal-stages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#prevent_unload_to_internal_stages CurrentAccount#prevent_unload_to_internal_stages}

---

##### `PythonProfilerModules`<sup>Optional</sup> <a name="PythonProfilerModules" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerModules"></a>

```csharp
public string PythonProfilerModules { get; set; }
```

- *Type:* string

Specifies the list of Python modules to include in a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_MODULES docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-modules).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#python_profiler_modules CurrentAccount#python_profiler_modules}

---

##### `PythonProfilerTargetStage`<sup>Optional</sup> <a name="PythonProfilerTargetStage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.pythonProfilerTargetStage"></a>

```csharp
public string PythonProfilerTargetStage { get; set; }
```

- *Type:* string

Specifies the fully-qualified name of the stage in which to save a report when [profiling Python handler code](https://docs.snowflake.com/en/developer-guide/stored-procedure/python/procedure-python-profiler). For more information, check [PYTHON_PROFILER_TARGET_STAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#python-profiler-target-stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#python_profiler_target_stage CurrentAccount#python_profiler_target_stage}

---

##### `QueryTag`<sup>Optional</sup> <a name="QueryTag" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.queryTag"></a>

```csharp
public string QueryTag { get; set; }
```

- *Type:* string

Optional string that can be used to tag queries and other SQL statements executed within a session.

The tags are displayed in the output of the [QUERY_HISTORY, QUERY_HISTORY_BY_*](https://docs.snowflake.com/en/sql-reference/functions/query_history) functions. For more information, check [QUERY_TAG docs](https://docs.snowflake.com/en/sql-reference/parameters#query-tag).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#query_tag CurrentAccount#query_tag}

---

##### `QuotedIdentifiersIgnoreCase`<sup>Optional</sup> <a name="QuotedIdentifiersIgnoreCase" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.quotedIdentifiersIgnoreCase"></a>

```csharp
public object QuotedIdentifiersIgnoreCase { get; set; }
```

- *Type:* object

Specifies whether letters in double-quoted object identifiers are stored and resolved as uppercase letters.

By default, Snowflake preserves the case of alphabetic characters when storing and resolving double-quoted identifiers (see [Identifier resolution](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing)). You can use this parameter in situations in which [third-party applications always use double quotes around identifiers](https://docs.snowflake.com/en/sql-reference/identifiers-syntax.html#label-identifier-casing-parameter). For more information, check [QUOTED_IDENTIFIERS_IGNORE_CASE docs](https://docs.snowflake.com/en/sql-reference/parameters#quoted-identifiers-ignore-case).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#quoted_identifiers_ignore_case CurrentAccount#quoted_identifiers_ignore_case}

---

##### `ReplaceInvalidCharacters`<sup>Optional</sup> <a name="ReplaceInvalidCharacters" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.replaceInvalidCharacters"></a>

```csharp
public object ReplaceInvalidCharacters { get; set; }
```

- *Type:* object

Specifies whether to replace invalid UTF-8 characters with the Unicode replacement character (�) in query results for [Apache Iceberg™ tables](https://docs.snowflake.com/en/sql-reference/sql/create-iceberg-table) that use an external catalog. For more information, check [REPLACE_INVALID_CHARACTERS docs](https://docs.snowflake.com/en/sql-reference/parameters#replace-invalid-characters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#replace_invalid_characters CurrentAccount#replace_invalid_characters}

---

##### `RequireStorageIntegrationForStageCreation`<sup>Optional</sup> <a name="RequireStorageIntegrationForStageCreation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageCreation"></a>

```csharp
public object RequireStorageIntegrationForStageCreation { get; set; }
```

- *Type:* object

Specifies whether to require a storage integration object as cloud credentials when creating a named external stage (using [CREATE STAGE](https://docs.snowflake.com/en/sql-reference/sql/create-stage)) to access a private cloud storage location. For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_CREATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-creation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#require_storage_integration_for_stage_creation CurrentAccount#require_storage_integration_for_stage_creation}

---

##### `RequireStorageIntegrationForStageOperation`<sup>Optional</sup> <a name="RequireStorageIntegrationForStageOperation" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.requireStorageIntegrationForStageOperation"></a>

```csharp
public object RequireStorageIntegrationForStageOperation { get; set; }
```

- *Type:* object

Specifies whether to require using a named external stage that references a storage integration object as cloud credentials when loading data from or unloading data to a private cloud storage location.

For more information, check [REQUIRE_STORAGE_INTEGRATION_FOR_STAGE_OPERATION docs](https://docs.snowflake.com/en/sql-reference/parameters#require-storage-integration-for-stage-operation).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#require_storage_integration_for_stage_operation CurrentAccount#require_storage_integration_for_stage_operation}

---

##### `ResourceMonitor`<sup>Optional</sup> <a name="ResourceMonitor" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.resourceMonitor"></a>

```csharp
public string ResourceMonitor { get; set; }
```

- *Type:* string

Parameter that specifies the name of the resource monitor used to control all virtual warehouses created in the account.

External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#resource_monitor CurrentAccount#resource_monitor}

---

##### `RowsPerResultset`<sup>Optional</sup> <a name="RowsPerResultset" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.rowsPerResultset"></a>

```csharp
public double RowsPerResultset { get; set; }
```

- *Type:* double

Specifies the maximum number of rows returned in a result set.

A value of 0 specifies no maximum. For more information, check [ROWS_PER_RESULTSET docs](https://docs.snowflake.com/en/sql-reference/parameters#rows-per-resultset).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#rows_per_resultset CurrentAccount#rows_per_resultset}

---

##### `S3StageVpceDnsName`<sup>Optional</sup> <a name="S3StageVpceDnsName" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.s3StageVpceDnsName"></a>

```csharp
public string S3StageVpceDnsName { get; set; }
```

- *Type:* string

Specifies the DNS name of an Amazon S3 interface endpoint.

Requests sent to the internal stage of an account via [AWS PrivateLink for Amazon S3](https://docs.aws.amazon.com/AmazonS3/latest/userguide/privatelink-interface-endpoints.html) use this endpoint to connect. For more information, see [Accessing Internal stages with dedicated interface endpoints](https://docs.snowflake.com/en/user-guide/private-internal-stages-aws.html#label-aws-privatelink-internal-stage-network-isolation). For more information, check [S3_STAGE_VPCE_DNS_NAME docs](https://docs.snowflake.com/en/sql-reference/parameters#s3-stage-vpce-dns-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#s3_stage_vpce_dns_name CurrentAccount#s3_stage_vpce_dns_name}

---

##### `SamlIdentityProvider`<sup>Optional</sup> <a name="SamlIdentityProvider" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.samlIdentityProvider"></a>

```csharp
public string SamlIdentityProvider { get; set; }
```

- *Type:* string

Enables federated authentication. This deprecated parameter enables federated authentication ([more details](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider)). For more information, check [SAML_IDENTITY_PROVIDER docs](https://docs.snowflake.com/en/sql-reference/parameters#saml-identity-provider).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#saml_identity_provider CurrentAccount#saml_identity_provider}

---

##### `SearchPath`<sup>Optional</sup> <a name="SearchPath" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.searchPath"></a>

```csharp
public string SearchPath { get; set; }
```

- *Type:* string

Specifies the path to search to resolve unqualified object names in queries.

For more information, see [Name resolution in queries](https://docs.snowflake.com/en/sql-reference/name-resolution.html#label-object-name-resolution-search-path). Comma-separated list of identifiers. An identifier can be a fully or partially qualified schema name. For more information, check [SEARCH_PATH docs](https://docs.snowflake.com/en/sql-reference/parameters#search-path).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#search_path CurrentAccount#search_path}

---

##### `ServerlessTaskMaxStatementSize`<sup>Optional</sup> <a name="ServerlessTaskMaxStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMaxStatementSize"></a>

```csharp
public string ServerlessTaskMaxStatementSize { get; set; }
```

- *Type:* string

Specifies the maximum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MAX_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-max-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#serverless_task_max_statement_size CurrentAccount#serverless_task_max_statement_size}

---

##### `ServerlessTaskMinStatementSize`<sup>Optional</sup> <a name="ServerlessTaskMinStatementSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.serverlessTaskMinStatementSize"></a>

```csharp
public string ServerlessTaskMinStatementSize { get; set; }
```

- *Type:* string

Specifies the minimum allowed warehouse size for [Serverless tasks](https://docs.snowflake.com/en/user-guide/tasks-intro.html#label-tasks-compute-resources-serverless). Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [SERVERLESS_TASK_MIN_STATEMENT_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#serverless-task-min-statement-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#serverless_task_min_statement_size CurrentAccount#serverless_task_min_statement_size}

---

##### `SessionPolicy`<sup>Optional</sup> <a name="SessionPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.sessionPolicy"></a>

```csharp
public string SessionPolicy { get; set; }
```

- *Type:* string

Specifies [session policy](https://docs.snowflake.com/en/user-guide/session-policies-using) for the current account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#session_policy CurrentAccount#session_policy}

---

##### `SimulatedDataSharingConsumer`<sup>Optional</sup> <a name="SimulatedDataSharingConsumer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.simulatedDataSharingConsumer"></a>

```csharp
public string SimulatedDataSharingConsumer { get; set; }
```

- *Type:* string

Specifies the name of a consumer account to simulate for testing/validating shared data, particularly shared secure views.

When this parameter is set in a session, shared views return rows as if executed in the specified consumer account rather than the provider account. For more information, check [SIMULATED_DATA_SHARING_CONSUMER docs](https://docs.snowflake.com/en/sql-reference/parameters#simulated-data-sharing-consumer).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#simulated_data_sharing_consumer CurrentAccount#simulated_data_sharing_consumer}

---

##### `SsoLoginPage`<sup>Optional</sup> <a name="SsoLoginPage" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.ssoLoginPage"></a>

```csharp
public object SsoLoginPage { get; set; }
```

- *Type:* object

This deprecated parameter disables preview mode for testing SSO (after enabling federated authentication) before rolling it out to users.

For more information, check [SSO_LOGIN_PAGE docs](https://docs.snowflake.com/en/sql-reference/parameters#sso-login-page).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#sso_login_page CurrentAccount#sso_login_page}

---

##### `StatementQueuedTimeoutInSeconds`<sup>Optional</sup> <a name="StatementQueuedTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementQueuedTimeoutInSeconds"></a>

```csharp
public double StatementQueuedTimeoutInSeconds { get; set; }
```

- *Type:* double

Amount of time, in seconds, a SQL statement (query, DDL, DML, etc.) remains queued for a warehouse before it is canceled by the system. This parameter can be used in conjunction with the [MAX_CONCURRENCY_LEVEL](https://docs.snowflake.com/en/sql-reference/parameters#label-max-concurrency-level) parameter to ensure a warehouse is never backlogged. For more information, check [STATEMENT_QUEUED_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-queued-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#statement_queued_timeout_in_seconds CurrentAccount#statement_queued_timeout_in_seconds}

---

##### `StatementTimeoutInSeconds`<sup>Optional</sup> <a name="StatementTimeoutInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.statementTimeoutInSeconds"></a>

```csharp
public double StatementTimeoutInSeconds { get; set; }
```

- *Type:* double

Amount of time, in seconds, after which a running SQL statement (query, DDL, DML, etc.) is canceled by the system. For more information, check [STATEMENT_TIMEOUT_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#statement-timeout-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#statement_timeout_in_seconds CurrentAccount#statement_timeout_in_seconds}

---

##### `StorageSerializationPolicy`<sup>Optional</sup> <a name="StorageSerializationPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.storageSerializationPolicy"></a>

```csharp
public string StorageSerializationPolicy { get; set; }
```

- *Type:* string

Specifies the storage serialization policy for Snowflake-managed [Apache Iceberg™ tables](https://docs.snowflake.com/en/user-guide/tables-iceberg). Valid values are (case-insensitive): `COMPATIBLE` | `OPTIMIZED`. For more information, check [STORAGE_SERIALIZATION_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#storage-serialization-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#storage_serialization_policy CurrentAccount#storage_serialization_policy}

---

##### `StrictJsonOutput`<sup>Optional</sup> <a name="StrictJsonOutput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.strictJsonOutput"></a>

```csharp
public object StrictJsonOutput { get; set; }
```

- *Type:* object

This parameter specifies whether JSON output in a session is compatible with the general standard (as described by [http://json.org](http://json.org)). By design, Snowflake allows JSON input that contains non-standard values; however, these non-standard values might result in Snowflake outputting JSON that is incompatible with other platforms and languages. This parameter, when enabled, ensures that Snowflake outputs valid/compatible JSON. For more information, check [STRICT_JSON_OUTPUT docs](https://docs.snowflake.com/en/sql-reference/parameters#strict-json-output).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#strict_json_output CurrentAccount#strict_json_output}

---

##### `SuspendTaskAfterNumFailures`<sup>Optional</sup> <a name="SuspendTaskAfterNumFailures" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.suspendTaskAfterNumFailures"></a>

```csharp
public double SuspendTaskAfterNumFailures { get; set; }
```

- *Type:* double

Specifies the number of consecutive failed task runs after which the current task is suspended automatically.

The default is 0 (no automatic suspension). For more information, check [SUSPEND_TASK_AFTER_NUM_FAILURES docs](https://docs.snowflake.com/en/sql-reference/parameters#suspend-task-after-num-failures).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#suspend_task_after_num_failures CurrentAccount#suspend_task_after_num_failures}

---

##### `TaskAutoRetryAttempts`<sup>Optional</sup> <a name="TaskAutoRetryAttempts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.taskAutoRetryAttempts"></a>

```csharp
public double TaskAutoRetryAttempts { get; set; }
```

- *Type:* double

Specifies the number of automatic task graph retry attempts.

If any task graphs complete in a FAILED state, Snowflake can automatically retry the task graphs from the last task in the graph that failed. For more information, check [TASK_AUTO_RETRY_ATTEMPTS docs](https://docs.snowflake.com/en/sql-reference/parameters#task-auto-retry-attempts).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#task_auto_retry_attempts CurrentAccount#task_auto_retry_attempts}

---

##### `TimeInputFormat`<sup>Optional</sup> <a name="TimeInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeInputFormat"></a>

```csharp
public string TimeInputFormat { get; set; }
```

- *Type:* string

Specifies the input format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported time format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of times stored in the system during the session). For more information, check [TIME_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#time_input_format CurrentAccount#time_input_format}

---

##### `TimeOutputFormat`<sup>Optional</sup> <a name="TimeOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeOutputFormat"></a>

```csharp
public string TimeOutputFormat { get; set; }
```

- *Type:* string

Specifies the display format for the TIME data type.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIME_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#time-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#time_output_format CurrentAccount#time_output_format}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timeouts"></a>

```csharp
public CurrentAccountTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts">CurrentAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#timeouts CurrentAccount#timeouts}

---

##### `TimestampDayIsAlways24H`<sup>Optional</sup> <a name="TimestampDayIsAlways24H" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampDayIsAlways24H"></a>

```csharp
public object TimestampDayIsAlways24H { get; set; }
```

- *Type:* object

Specifies whether the [DATEADD](https://docs.snowflake.com/en/sql-reference/functions/dateadd) function (and its aliases) always consider a day to be exactly 24 hours for expressions that span multiple days. For more information, check [TIMESTAMP_DAY_IS_ALWAYS_24H docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-day-is-always-24h).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#timestamp_day_is_always_24h CurrentAccount#timestamp_day_is_always_24h}

---

##### `TimestampInputFormat`<sup>Optional</sup> <a name="TimestampInputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampInputFormat"></a>

```csharp
public string TimestampInputFormat { get; set; }
```

- *Type:* string

Specifies the input format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). Any valid, supported timestamp format or AUTO (AUTO specifies that Snowflake attempts to automatically detect the format of timestamps stored in the system during the session). For more information, check [TIMESTAMP_INPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-input-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#timestamp_input_format CurrentAccount#timestamp_input_format}

---

##### `TimestampLtzOutputFormat`<sup>Optional</sup> <a name="TimestampLtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampLtzOutputFormat"></a>

```csharp
public string TimestampLtzOutputFormat { get; set; }
```

- *Type:* string

Specifies the display format for the TIMESTAMP_LTZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_LTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ltz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#timestamp_ltz_output_format CurrentAccount#timestamp_ltz_output_format}

---

##### `TimestampNtzOutputFormat`<sup>Optional</sup> <a name="TimestampNtzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampNtzOutputFormat"></a>

```csharp
public string TimestampNtzOutputFormat { get; set; }
```

- *Type:* string

Specifies the display format for the TIMESTAMP_NTZ data type. For more information, check [TIMESTAMP_NTZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-ntz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#timestamp_ntz_output_format CurrentAccount#timestamp_ntz_output_format}

---

##### `TimestampOutputFormat`<sup>Optional</sup> <a name="TimestampOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampOutputFormat"></a>

```csharp
public string TimestampOutputFormat { get; set; }
```

- *Type:* string

Specifies the display format for the TIMESTAMP data type alias.

For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#timestamp_output_format CurrentAccount#timestamp_output_format}

---

##### `TimestampTypeMapping`<sup>Optional</sup> <a name="TimestampTypeMapping" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTypeMapping"></a>

```csharp
public string TimestampTypeMapping { get; set; }
```

- *Type:* string

Specifies the TIMESTAMP_* variation that the TIMESTAMP data type alias maps to.

Valid values are (case-insensitive): `TIMESTAMP_LTZ` | `TIMESTAMP_NTZ` | `TIMESTAMP_TZ`. For more information, check [TIMESTAMP_TYPE_MAPPING docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-type-mapping).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#timestamp_type_mapping CurrentAccount#timestamp_type_mapping}

---

##### `TimestampTzOutputFormat`<sup>Optional</sup> <a name="TimestampTzOutputFormat" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timestampTzOutputFormat"></a>

```csharp
public string TimestampTzOutputFormat { get; set; }
```

- *Type:* string

Specifies the display format for the TIMESTAMP_TZ data type.

If no format is specified, defaults to [TIMESTAMP_OUTPUT_FORMAT](https://docs.snowflake.com/en/sql-reference/parameters#label-timestamp-output-format). For more information, see [Date and time input and output formats](https://docs.snowflake.com/en/sql-reference/date-time-input-output). For more information, check [TIMESTAMP_TZ_OUTPUT_FORMAT docs](https://docs.snowflake.com/en/sql-reference/parameters#timestamp-tz-output-format).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#timestamp_tz_output_format CurrentAccount#timestamp_tz_output_format}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.timezone"></a>

```csharp
public string Timezone { get; set; }
```

- *Type:* string

Specifies the time zone for the session.

You can specify a [time zone name](https://data.iana.org/time-zones/tzdb-2021a/zone1970.tab) or a [link name](https://data.iana.org/time-zones/tzdb-2021a/backward) from release 2021a of the [IANA Time Zone Database](https://www.iana.org/time-zones) (e.g. America/Los_Angeles, Europe/London, UTC, Etc/GMT, etc.). For more information, check [TIMEZONE docs](https://docs.snowflake.com/en/sql-reference/parameters#timezone).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#timezone CurrentAccount#timezone}

---

##### `TraceLevel`<sup>Optional</sup> <a name="TraceLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.traceLevel"></a>

```csharp
public string TraceLevel { get; set; }
```

- *Type:* string

Controls how trace events are ingested into the event table.

For more information about trace levels, see [Setting trace level](https://docs.snowflake.com/en/developer-guide/logging-tracing/tracing-trace-level). Valid values are (case-insensitive): `ALWAYS` | `ON_EVENT` | `PROPAGATE` | `OFF`. For more information, check [TRACE_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#trace-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#trace_level CurrentAccount#trace_level}

---

##### `TransactionAbortOnError`<sup>Optional</sup> <a name="TransactionAbortOnError" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionAbortOnError"></a>

```csharp
public object TransactionAbortOnError { get; set; }
```

- *Type:* object

Specifies the action to perform when a statement issued within a non-autocommit transaction returns with an error.

For more information, check [TRANSACTION_ABORT_ON_ERROR docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-abort-on-error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#transaction_abort_on_error CurrentAccount#transaction_abort_on_error}

---

##### `TransactionDefaultIsolationLevel`<sup>Optional</sup> <a name="TransactionDefaultIsolationLevel" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.transactionDefaultIsolationLevel"></a>

```csharp
public string TransactionDefaultIsolationLevel { get; set; }
```

- *Type:* string

Specifies the isolation level for transactions in the user session.

Valid values are (case-insensitive): `READ COMMITTED`. For more information, check [TRANSACTION_DEFAULT_ISOLATION_LEVEL docs](https://docs.snowflake.com/en/sql-reference/parameters#transaction-default-isolation-level).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#transaction_default_isolation_level CurrentAccount#transaction_default_isolation_level}

---

##### `TwoDigitCenturyStart`<sup>Optional</sup> <a name="TwoDigitCenturyStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.twoDigitCenturyStart"></a>

```csharp
public double TwoDigitCenturyStart { get; set; }
```

- *Type:* double

Specifies the “century start” year for 2-digit years (i.e. the earliest year such dates can represent). This parameter prevents ambiguous dates when importing or converting data with the `YY` date format component (i.e. years represented as 2 digits). For more information, check [TWO_DIGIT_CENTURY_START docs](https://docs.snowflake.com/en/sql-reference/parameters#two-digit-century-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#two_digit_century_start CurrentAccount#two_digit_century_start}

---

##### `UnsupportedDdlAction`<sup>Optional</sup> <a name="UnsupportedDdlAction" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.unsupportedDdlAction"></a>

```csharp
public string UnsupportedDdlAction { get; set; }
```

- *Type:* string

Determines if an unsupported (i.e. non-default) value specified for a constraint property returns an error. For more information, check [UNSUPPORTED_DDL_ACTION docs](https://docs.snowflake.com/en/sql-reference/parameters#unsupported-ddl-action).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#unsupported_ddl_action CurrentAccount#unsupported_ddl_action}

---

##### `UseCachedResult`<sup>Optional</sup> <a name="UseCachedResult" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.useCachedResult"></a>

```csharp
public object UseCachedResult { get; set; }
```

- *Type:* object

Specifies whether to reuse persisted query results, if available, when a matching query is submitted.

For more information, check [USE_CACHED_RESULT docs](https://docs.snowflake.com/en/sql-reference/parameters#use-cached-result).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#use_cached_result CurrentAccount#use_cached_result}

---

##### `UserTaskManagedInitialWarehouseSize`<sup>Optional</sup> <a name="UserTaskManagedInitialWarehouseSize" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskManagedInitialWarehouseSize"></a>

```csharp
public string UserTaskManagedInitialWarehouseSize { get; set; }
```

- *Type:* string

Specifies the size of the compute resources to provision for the first run of the task, before a task history is available for Snowflake to determine an ideal size.

Once a task has successfully completed a few runs, Snowflake ignores this parameter setting. Valid values are (case-insensitive): `XSMALL` | `X-SMALL` | `SMALL` | `MEDIUM` | `LARGE` | `XLARGE` | `X-LARGE` | `XXLARGE` | `X2LARGE` | `2X-LARGE` | `XXXLARGE` | `X3LARGE` | `3X-LARGE` | `X4LARGE` | `4X-LARGE` | `X5LARGE` | `5X-LARGE` | `X6LARGE` | `6X-LARGE`. For more information, check [USER_TASK_MANAGED_INITIAL_WAREHOUSE_SIZE docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-managed-initial-warehouse-size).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#user_task_managed_initial_warehouse_size CurrentAccount#user_task_managed_initial_warehouse_size}

---

##### `UserTaskMinimumTriggerIntervalInSeconds`<sup>Optional</sup> <a name="UserTaskMinimumTriggerIntervalInSeconds" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskMinimumTriggerIntervalInSeconds"></a>

```csharp
public double UserTaskMinimumTriggerIntervalInSeconds { get; set; }
```

- *Type:* double

Minimum amount of time between Triggered Task executions in seconds For more information, check [USER_TASK_MINIMUM_TRIGGER_INTERVAL_IN_SECONDS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-minimum-trigger-interval-in-seconds).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#user_task_minimum_trigger_interval_in_seconds CurrentAccount#user_task_minimum_trigger_interval_in_seconds}

---

##### `UserTaskTimeoutMs`<sup>Optional</sup> <a name="UserTaskTimeoutMs" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.userTaskTimeoutMs"></a>

```csharp
public double UserTaskTimeoutMs { get; set; }
```

- *Type:* double

Specifies the time limit on a single run of the task before it times out (in milliseconds).

For more information, check [USER_TASK_TIMEOUT_MS docs](https://docs.snowflake.com/en/sql-reference/parameters#user-task-timeout-ms).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#user_task_timeout_ms CurrentAccount#user_task_timeout_ms}

---

##### `WeekOfYearPolicy`<sup>Optional</sup> <a name="WeekOfYearPolicy" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekOfYearPolicy"></a>

```csharp
public double WeekOfYearPolicy { get; set; }
```

- *Type:* double

Specifies how the weeks in a given year are computed.

`0`: The semantics used are equivalent to the ISO semantics, in which a week belongs to a given year if at least 4 days of that week are in that year. `1`: January 1 is included in the first week of the year and December 31 is included in the last week of the year. For more information, check [WEEK_OF_YEAR_POLICY docs](https://docs.snowflake.com/en/sql-reference/parameters#week-of-year-policy).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#week_of_year_policy CurrentAccount#week_of_year_policy}

---

##### `WeekStart`<sup>Optional</sup> <a name="WeekStart" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountConfig.property.weekStart"></a>

```csharp
public double WeekStart { get; set; }
```

- *Type:* double

Specifies the first day of the week (used by week-related date functions).

`0`: Legacy Snowflake behavior is used (i.e. ISO-like semantics). `1` (Monday) to `7` (Sunday): All the week-related functions use weeks that start on the specified day of the week. For more information, check [WEEK_START docs](https://docs.snowflake.com/en/sql-reference/parameters#week-start).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#week_start CurrentAccount#week_start}

---

### CurrentAccountTimeouts <a name="CurrentAccountTimeouts" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new CurrentAccountTimeouts {
    string Create = null,
    string Delete = null,
    string Read = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#create CurrentAccount#create}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#delete CurrentAccount#delete}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.read">Read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#read CurrentAccount#read}. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#update CurrentAccount#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#create CurrentAccount#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#delete CurrentAccount#delete}.

---

##### `Read`<sup>Optional</sup> <a name="Read" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.read"></a>

```csharp
public string Read { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#read CurrentAccount#read}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/current_account#update CurrentAccount#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CurrentAccountTimeoutsOutputReference <a name="CurrentAccountTimeoutsOutputReference" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new CurrentAccountTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetRead">ResetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetRead` <a name="ResetRead" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetRead"></a>

```csharp
private void ResetRead()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.readInput">ReadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.read">Read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `ReadInput`<sup>Optional</sup> <a name="ReadInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.readInput"></a>

```csharp
public string ReadInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Read`<sup>Required</sup> <a name="Read" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.read"></a>

```csharp
public string Read { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-snowflake.currentAccount.CurrentAccountTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---



