# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs snowflake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/provider"

provider.NewSnowflakeProvider(scope Construct, id *string, config SnowflakeProviderConfig) SnowflakeProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig">SnowflakeProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig">SnowflakeProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccountName">ResetAccountName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator">ResetAuthenticator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientIp">ResetClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken">ResetClientRequestMfaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential">ResetClientStoreTemporaryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout">ResetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin">ResetDisableConsoleLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache">ResetDisableQueryContextCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry">ResetDisableTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing">ResetDriverTracing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout">ResetExternalBrowserTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason">ResetIncludeRetryReason</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode">ResetInsecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout">ResetJwtClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout">ResetJwtExpireTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive">ResetKeepSessionAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout">ResetLoginTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount">ResetMaxRetryCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen">ResetOcspFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl">ResetOktaUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName">ResetOrganizationName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscode">ResetPasscode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword">ResetPasscodeInPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled">ResetPreviewFeaturesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase">ResetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath">ResetTmpDirectoryPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor">ResetTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUser">ResetUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters">ResetValidateDefaultParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse">ResetWarehouse</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccountName` <a name="ResetAccountName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccountName"></a>

```go
func ResetAccountName()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuthenticator` <a name="ResetAuthenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator"></a>

```go
func ResetAuthenticator()
```

##### `ResetClientIp` <a name="ResetClientIp" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientIp"></a>

```go
func ResetClientIp()
```

##### `ResetClientRequestMfaToken` <a name="ResetClientRequestMfaToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken"></a>

```go
func ResetClientRequestMfaToken()
```

##### `ResetClientStoreTemporaryCredential` <a name="ResetClientStoreTemporaryCredential" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential"></a>

```go
func ResetClientStoreTemporaryCredential()
```

##### `ResetClientTimeout` <a name="ResetClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout"></a>

```go
func ResetClientTimeout()
```

##### `ResetDisableConsoleLogin` <a name="ResetDisableConsoleLogin" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableConsoleLogin"></a>

```go
func ResetDisableConsoleLogin()
```

##### `ResetDisableQueryContextCache` <a name="ResetDisableQueryContextCache" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache"></a>

```go
func ResetDisableQueryContextCache()
```

##### `ResetDisableTelemetry` <a name="ResetDisableTelemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry"></a>

```go
func ResetDisableTelemetry()
```

##### `ResetDriverTracing` <a name="ResetDriverTracing" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDriverTracing"></a>

```go
func ResetDriverTracing()
```

##### `ResetExternalBrowserTimeout` <a name="ResetExternalBrowserTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout"></a>

```go
func ResetExternalBrowserTimeout()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```go
func ResetHost()
```

##### `ResetIncludeRetryReason` <a name="ResetIncludeRetryReason" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetIncludeRetryReason"></a>

```go
func ResetIncludeRetryReason()
```

##### `ResetInsecureMode` <a name="ResetInsecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode"></a>

```go
func ResetInsecureMode()
```

##### `ResetJwtClientTimeout` <a name="ResetJwtClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout"></a>

```go
func ResetJwtClientTimeout()
```

##### `ResetJwtExpireTimeout` <a name="ResetJwtExpireTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout"></a>

```go
func ResetJwtExpireTimeout()
```

##### `ResetKeepSessionAlive` <a name="ResetKeepSessionAlive" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive"></a>

```go
func ResetKeepSessionAlive()
```

##### `ResetLoginTimeout` <a name="ResetLoginTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout"></a>

```go
func ResetLoginTimeout()
```

##### `ResetMaxRetryCount` <a name="ResetMaxRetryCount" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetMaxRetryCount"></a>

```go
func ResetMaxRetryCount()
```

##### `ResetOcspFailOpen` <a name="ResetOcspFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOcspFailOpen"></a>

```go
func ResetOcspFailOpen()
```

##### `ResetOktaUrl` <a name="ResetOktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl"></a>

```go
func ResetOktaUrl()
```

##### `ResetOrganizationName` <a name="ResetOrganizationName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOrganizationName"></a>

```go
func ResetOrganizationName()
```

##### `ResetParams` <a name="ResetParams" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetParams"></a>

```go
func ResetParams()
```

##### `ResetPasscode` <a name="ResetPasscode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscode"></a>

```go
func ResetPasscode()
```

##### `ResetPasscodeInPassword` <a name="ResetPasscodeInPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword"></a>

```go
func ResetPasscodeInPassword()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort"></a>

```go
func ResetPort()
```

##### `ResetPreviewFeaturesEnabled` <a name="ResetPreviewFeaturesEnabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPreviewFeaturesEnabled"></a>

```go
func ResetPreviewFeaturesEnabled()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetPrivateKeyPassphrase` <a name="ResetPrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase"></a>

```go
func ResetPrivateKeyPassphrase()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```go
func ResetRole()
```

##### `ResetTmpDirectoryPath` <a name="ResetTmpDirectoryPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTmpDirectoryPath"></a>

```go
func ResetTmpDirectoryPath()
```

##### `ResetToken` <a name="ResetToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetToken"></a>

```go
func ResetToken()
```

##### `ResetTokenAccessor` <a name="ResetTokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor"></a>

```go
func ResetTokenAccessor()
```

##### `ResetUser` <a name="ResetUser" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUser"></a>

```go
func ResetUser()
```

##### `ResetValidateDefaultParameters` <a name="ResetValidateDefaultParameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetValidateDefaultParameters"></a>

```go
func ResetValidateDefaultParameters()
```

##### `ResetWarehouse` <a name="ResetWarehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse"></a>

```go
func ResetWarehouse()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a SnowflakeProvider resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/provider"

provider.SnowflakeProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/provider"

provider.SnowflakeProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/provider"

provider.SnowflakeProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/provider"

provider.SnowflakeProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a SnowflakeProvider resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SnowflakeProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SnowflakeProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the SnowflakeProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes">MetaAttributes</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias">Alias</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput">AccountNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput">AuthenticatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput">ClientIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput">ClientRequestMfaTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput">ClientStoreTemporaryCredentialInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput">ClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput">DisableConsoleLoginInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput">DisableQueryContextCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput">DisableTelemetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput">DriverTracingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput">ExternalBrowserTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput">IncludeRetryReasonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput">InsecureModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput">JwtClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput">JwtExpireTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput">KeepSessionAliveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput">LoginTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput">MaxRetryCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput">OcspFailOpenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput">OktaUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput">OrganizationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.paramsInput">ParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput">PasscodeInPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput">PasscodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput">PreviewFeaturesEnabledInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">PrivateKeyPassphraseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput">TmpDirectoryPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput">TokenAccessorInput</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput">ValidateDefaultParametersInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">WarehouseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountName">AccountName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticator">Authenticator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIp">ClientIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken">ClientRequestMfaToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential">ClientStoreTemporaryCredential</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin">DisableConsoleLogin</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache">DisableQueryContextCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry">DisableTelemetry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracing">DriverTracing</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout">ExternalBrowserTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason">IncludeRetryReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode">InsecureMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout">JwtClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout">JwtExpireTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive">KeepSessionAlive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout">LoginTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount">MaxRetryCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen">OcspFailOpen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl">OktaUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationName">OrganizationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.params">Params</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcode">Passcode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword">PasscodeInPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled">PreviewFeaturesEnabled</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath">TmpDirectoryPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor">TokenAccessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters">ValidateDefaultParameters</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse">Warehouse</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes"></a>

```go
func MetaAttributes() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource"></a>

```go
func TerraformProviderSource() *string
```

- *Type:* *string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias"></a>

```go
func Alias() *string
```

- *Type:* *string

---

##### `AccountNameInput`<sup>Optional</sup> <a name="AccountNameInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountNameInput"></a>

```go
func AccountNameInput() *string
```

- *Type:* *string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput"></a>

```go
func AliasInput() *string
```

- *Type:* *string

---

##### `AuthenticatorInput`<sup>Optional</sup> <a name="AuthenticatorInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput"></a>

```go
func AuthenticatorInput() *string
```

- *Type:* *string

---

##### `ClientIpInput`<sup>Optional</sup> <a name="ClientIpInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput"></a>

```go
func ClientIpInput() *string
```

- *Type:* *string

---

##### `ClientRequestMfaTokenInput`<sup>Optional</sup> <a name="ClientRequestMfaTokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput"></a>

```go
func ClientRequestMfaTokenInput() *string
```

- *Type:* *string

---

##### `ClientStoreTemporaryCredentialInput`<sup>Optional</sup> <a name="ClientStoreTemporaryCredentialInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput"></a>

```go
func ClientStoreTemporaryCredentialInput() *string
```

- *Type:* *string

---

##### `ClientTimeoutInput`<sup>Optional</sup> <a name="ClientTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput"></a>

```go
func ClientTimeoutInput() *f64
```

- *Type:* *f64

---

##### `DisableConsoleLoginInput`<sup>Optional</sup> <a name="DisableConsoleLoginInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLoginInput"></a>

```go
func DisableConsoleLoginInput() *string
```

- *Type:* *string

---

##### `DisableQueryContextCacheInput`<sup>Optional</sup> <a name="DisableQueryContextCacheInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput"></a>

```go
func DisableQueryContextCacheInput() interface{}
```

- *Type:* interface{}

---

##### `DisableTelemetryInput`<sup>Optional</sup> <a name="DisableTelemetryInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput"></a>

```go
func DisableTelemetryInput() interface{}
```

- *Type:* interface{}

---

##### `DriverTracingInput`<sup>Optional</sup> <a name="DriverTracingInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracingInput"></a>

```go
func DriverTracingInput() *string
```

- *Type:* *string

---

##### `ExternalBrowserTimeoutInput`<sup>Optional</sup> <a name="ExternalBrowserTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput"></a>

```go
func ExternalBrowserTimeoutInput() *f64
```

- *Type:* *f64

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `IncludeRetryReasonInput`<sup>Optional</sup> <a name="IncludeRetryReasonInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReasonInput"></a>

```go
func IncludeRetryReasonInput() *string
```

- *Type:* *string

---

##### `InsecureModeInput`<sup>Optional</sup> <a name="InsecureModeInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput"></a>

```go
func InsecureModeInput() interface{}
```

- *Type:* interface{}

---

##### `JwtClientTimeoutInput`<sup>Optional</sup> <a name="JwtClientTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput"></a>

```go
func JwtClientTimeoutInput() *f64
```

- *Type:* *f64

---

##### `JwtExpireTimeoutInput`<sup>Optional</sup> <a name="JwtExpireTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput"></a>

```go
func JwtExpireTimeoutInput() *f64
```

- *Type:* *f64

---

##### `KeepSessionAliveInput`<sup>Optional</sup> <a name="KeepSessionAliveInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput"></a>

```go
func KeepSessionAliveInput() interface{}
```

- *Type:* interface{}

---

##### `LoginTimeoutInput`<sup>Optional</sup> <a name="LoginTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput"></a>

```go
func LoginTimeoutInput() *f64
```

- *Type:* *f64

---

##### `MaxRetryCountInput`<sup>Optional</sup> <a name="MaxRetryCountInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCountInput"></a>

```go
func MaxRetryCountInput() *f64
```

- *Type:* *f64

---

##### `OcspFailOpenInput`<sup>Optional</sup> <a name="OcspFailOpenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpenInput"></a>

```go
func OcspFailOpenInput() *string
```

- *Type:* *string

---

##### `OktaUrlInput`<sup>Optional</sup> <a name="OktaUrlInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput"></a>

```go
func OktaUrlInput() *string
```

- *Type:* *string

---

##### `OrganizationNameInput`<sup>Optional</sup> <a name="OrganizationNameInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationNameInput"></a>

```go
func OrganizationNameInput() *string
```

- *Type:* *string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.paramsInput"></a>

```go
func ParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `PasscodeInPasswordInput`<sup>Optional</sup> <a name="PasscodeInPasswordInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput"></a>

```go
func PasscodeInPasswordInput() interface{}
```

- *Type:* interface{}

---

##### `PasscodeInput`<sup>Optional</sup> <a name="PasscodeInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput"></a>

```go
func PasscodeInput() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `PreviewFeaturesEnabledInput`<sup>Optional</sup> <a name="PreviewFeaturesEnabledInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabledInput"></a>

```go
func PreviewFeaturesEnabledInput() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput"></a>

```go
func PrivateKeyInput() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphraseInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput"></a>

```go
func PrivateKeyPassphraseInput() *string
```

- *Type:* *string

---

##### `ProfileInput`<sup>Optional</sup> <a name="ProfileInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput"></a>

```go
func ProfileInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `RequestTimeoutInput`<sup>Optional</sup> <a name="RequestTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput"></a>

```go
func RequestTimeoutInput() *f64
```

- *Type:* *f64

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `TmpDirectoryPathInput`<sup>Optional</sup> <a name="TmpDirectoryPathInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPathInput"></a>

```go
func TmpDirectoryPathInput() *string
```

- *Type:* *string

---

##### `TokenAccessorInput`<sup>Optional</sup> <a name="TokenAccessorInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput"></a>

```go
func TokenAccessorInput() SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenInput"></a>

```go
func TokenInput() *string
```

- *Type:* *string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.userInput"></a>

```go
func UserInput() *string
```

- *Type:* *string

---

##### `ValidateDefaultParametersInput`<sup>Optional</sup> <a name="ValidateDefaultParametersInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput"></a>

```go
func ValidateDefaultParametersInput() *string
```

- *Type:* *string

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput"></a>

```go
func WarehouseInput() *string
```

- *Type:* *string

---

##### `AccountName`<sup>Optional</sup> <a name="AccountName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountName"></a>

```go
func AccountName() *string
```

- *Type:* *string

---

##### `Authenticator`<sup>Optional</sup> <a name="Authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticator"></a>

```go
func Authenticator() *string
```

- *Type:* *string

---

##### `ClientIp`<sup>Optional</sup> <a name="ClientIp" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIp"></a>

```go
func ClientIp() *string
```

- *Type:* *string

---

##### `ClientRequestMfaToken`<sup>Optional</sup> <a name="ClientRequestMfaToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken"></a>

```go
func ClientRequestMfaToken() *string
```

- *Type:* *string

---

##### `ClientStoreTemporaryCredential`<sup>Optional</sup> <a name="ClientStoreTemporaryCredential" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential"></a>

```go
func ClientStoreTemporaryCredential() *string
```

- *Type:* *string

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout"></a>

```go
func ClientTimeout() *f64
```

- *Type:* *f64

---

##### `DisableConsoleLogin`<sup>Optional</sup> <a name="DisableConsoleLogin" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableConsoleLogin"></a>

```go
func DisableConsoleLogin() *string
```

- *Type:* *string

---

##### `DisableQueryContextCache`<sup>Optional</sup> <a name="DisableQueryContextCache" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache"></a>

```go
func DisableQueryContextCache() interface{}
```

- *Type:* interface{}

---

##### `DisableTelemetry`<sup>Optional</sup> <a name="DisableTelemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry"></a>

```go
func DisableTelemetry() interface{}
```

- *Type:* interface{}

---

##### `DriverTracing`<sup>Optional</sup> <a name="DriverTracing" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.driverTracing"></a>

```go
func DriverTracing() *string
```

- *Type:* *string

---

##### `ExternalBrowserTimeout`<sup>Optional</sup> <a name="ExternalBrowserTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout"></a>

```go
func ExternalBrowserTimeout() *f64
```

- *Type:* *f64

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `IncludeRetryReason`<sup>Optional</sup> <a name="IncludeRetryReason" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.includeRetryReason"></a>

```go
func IncludeRetryReason() *string
```

- *Type:* *string

---

##### `InsecureMode`<sup>Optional</sup> <a name="InsecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode"></a>

```go
func InsecureMode() interface{}
```

- *Type:* interface{}

---

##### `JwtClientTimeout`<sup>Optional</sup> <a name="JwtClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout"></a>

```go
func JwtClientTimeout() *f64
```

- *Type:* *f64

---

##### `JwtExpireTimeout`<sup>Optional</sup> <a name="JwtExpireTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout"></a>

```go
func JwtExpireTimeout() *f64
```

- *Type:* *f64

---

##### `KeepSessionAlive`<sup>Optional</sup> <a name="KeepSessionAlive" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive"></a>

```go
func KeepSessionAlive() interface{}
```

- *Type:* interface{}

---

##### `LoginTimeout`<sup>Optional</sup> <a name="LoginTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout"></a>

```go
func LoginTimeout() *f64
```

- *Type:* *f64

---

##### `MaxRetryCount`<sup>Optional</sup> <a name="MaxRetryCount" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.maxRetryCount"></a>

```go
func MaxRetryCount() *f64
```

- *Type:* *f64

---

##### `OcspFailOpen`<sup>Optional</sup> <a name="OcspFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.ocspFailOpen"></a>

```go
func OcspFailOpen() *string
```

- *Type:* *string

---

##### `OktaUrl`<sup>Optional</sup> <a name="OktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl"></a>

```go
func OktaUrl() *string
```

- *Type:* *string

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.organizationName"></a>

```go
func OrganizationName() *string
```

- *Type:* *string

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.params"></a>

```go
func Params() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Passcode`<sup>Optional</sup> <a name="Passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcode"></a>

```go
func Passcode() *string
```

- *Type:* *string

---

##### `PasscodeInPassword`<sup>Optional</sup> <a name="PasscodeInPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword"></a>

```go
func PasscodeInPassword() interface{}
```

- *Type:* interface{}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PreviewFeaturesEnabled`<sup>Optional</sup> <a name="PreviewFeaturesEnabled" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.previewFeaturesEnabled"></a>

```go
func PreviewFeaturesEnabled() *[]*string
```

- *Type:* *[]*string

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey"></a>

```go
func PrivateKey() *string
```

- *Type:* *string

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase"></a>

```go
func PrivateKeyPassphrase() *string
```

- *Type:* *string

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile"></a>

```go
func Profile() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout"></a>

```go
func RequestTimeout() *f64
```

- *Type:* *f64

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `TmpDirectoryPath`<sup>Optional</sup> <a name="TmpDirectoryPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tmpDirectoryPath"></a>

```go
func TmpDirectoryPath() *string
```

- *Type:* *string

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `TokenAccessor`<sup>Optional</sup> <a name="TokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor"></a>

```go
func TokenAccessor() SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.user"></a>

```go
func User() *string
```

- *Type:* *string

---

##### `ValidateDefaultParameters`<sup>Optional</sup> <a name="ValidateDefaultParameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters"></a>

```go
func ValidateDefaultParameters() *string
```

- *Type:* *string

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse"></a>

```go
func Warehouse() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SnowflakeProviderConfig <a name="SnowflakeProviderConfig" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/provider"

&provider.SnowflakeProviderConfig {
	AccountName: *string,
	Alias: *string,
	Authenticator: *string,
	ClientIp: *string,
	ClientRequestMfaToken: *string,
	ClientStoreTemporaryCredential: *string,
	ClientTimeout: *f64,
	DisableConsoleLogin: *string,
	DisableQueryContextCache: interface{},
	DisableTelemetry: interface{},
	DriverTracing: *string,
	ExternalBrowserTimeout: *f64,
	Host: *string,
	IncludeRetryReason: *string,
	InsecureMode: interface{},
	JwtClientTimeout: *f64,
	JwtExpireTimeout: *f64,
	KeepSessionAlive: interface{},
	LoginTimeout: *f64,
	MaxRetryCount: *f64,
	OcspFailOpen: *string,
	OktaUrl: *string,
	OrganizationName: *string,
	Params: *map[string]*string,
	Passcode: *string,
	PasscodeInPassword: interface{},
	Password: *string,
	Port: *f64,
	PreviewFeaturesEnabled: *[]*string,
	PrivateKey: *string,
	PrivateKeyPassphrase: *string,
	Profile: *string,
	Protocol: *string,
	RequestTimeout: *f64,
	Role: *string,
	TmpDirectoryPath: *string,
	Token: *string,
	TokenAccessor: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.provider.SnowflakeProviderTokenAccessor,
	User: *string,
	ValidateDefaultParameters: *string,
	Warehouse: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName">AccountName</a></code> | <code>*string</code> | Specifies your Snowflake account name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator">Authenticator</a></code> | <code>*string</code> | Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` \| `OAUTH` \| `EXTERNALBROWSER` \| `OKTA` \| `SNOWFLAKE_JWT` \| `TOKENACCESSOR` \| `USERNAMEPASSWORDMFA`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp">ClientIp</a></code> | <code>*string</code> | IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken">ClientRequestMfaToken</a></code> | <code>*string</code> | When true the MFA token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential">ClientStoreTemporaryCredential</a></code> | <code>*string</code> | When true the ID token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | The timeout in seconds for the client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin">DisableConsoleLogin</a></code> | <code>*string</code> | Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache">DisableQueryContextCache</a></code> | <code>interface{}</code> | Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry">DisableTelemetry</a></code> | <code>interface{}</code> | Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing">DriverTracing</a></code> | <code>*string</code> | Specifies the logging level to be used by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout">ExternalBrowserTimeout</a></code> | <code>*f64</code> | The timeout in seconds for the external browser to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host">Host</a></code> | <code>*string</code> | Specifies a custom host value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason">IncludeRetryReason</a></code> | <code>*string</code> | Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode">InsecureMode</a></code> | <code>interface{}</code> | If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout">JwtClientTimeout</a></code> | <code>*f64</code> | The timeout in seconds for the JWT client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout">JwtExpireTimeout</a></code> | <code>*f64</code> | JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive">KeepSessionAlive</a></code> | <code>interface{}</code> | Enables the session to persist even after the connection is closed. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout">LoginTimeout</a></code> | <code>*f64</code> | Login retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount">MaxRetryCount</a></code> | <code>*f64</code> | Specifies how many times non-periodic HTTP request can be retried by the driver. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen">OcspFailOpen</a></code> | <code>*string</code> | True represents OCSP fail open mode. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl">OktaUrl</a></code> | <code>*string</code> | The URL of the Okta server. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName">OrganizationName</a></code> | <code>*string</code> | Specifies your Snowflake organization name assigned by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.params">Params</a></code> | <code>*map[string]*string</code> | Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode">Passcode</a></code> | <code>*string</code> | Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword">PasscodeInPassword</a></code> | <code>interface{}</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password">Password</a></code> | <code>*string</code> | Password for user + password auth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port">Port</a></code> | <code>*f64</code> | Specifies a custom port value used by the driver for privatelink connections. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled">PreviewFeaturesEnabled</a></code> | <code>*[]*string</code> | A list of preview features that are handled by the provider. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile">Profile</a></code> | <code>*string</code> | Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">Protocol</a></code> | <code>*string</code> | A protocol used in the connection. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | request retry timeout in seconds EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role">Role</a></code> | <code>*string</code> | Specifies the role to use by default for accessing Snowflake objects in the client session. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath">TmpDirectoryPath</a></code> | <code>*string</code> | Sets temporary directory used by the driver for operations like encrypting, compressing etc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.token">Token</a></code> | <code>*string</code> | Token to use for OAuth and other forms of token based auth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor">TokenAccessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | token_accessor block. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.user">User</a></code> | <code>*string</code> | Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters">ValidateDefaultParameters</a></code> | <code>*string</code> | True by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">Warehouse</a></code> | <code>*string</code> | Specifies the virtual warehouse to use by default for queries, loading, etc. |

---

##### `AccountName`<sup>Optional</sup> <a name="AccountName" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.accountName"></a>

```go
AccountName *string
```

- *Type:* *string

Specifies your Snowflake account name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#account-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ACCOUNT_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#account_name SnowflakeProvider#account_name}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#alias SnowflakeProvider#alias}

---

##### `Authenticator`<sup>Optional</sup> <a name="Authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator"></a>

```go
Authenticator *string
```

- *Type:* *string

Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid options are: `SNOWFLAKE` | `OAUTH` | `EXTERNALBROWSER` | `OKTA` | `SNOWFLAKE_JWT` | `TOKENACCESSOR` | `USERNAMEPASSWORDMFA`. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#authenticator SnowflakeProvider#authenticator}

---

##### `ClientIp`<sup>Optional</sup> <a name="ClientIp" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp"></a>

```go
ClientIp *string
```

- *Type:* *string

IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#client_ip SnowflakeProvider#client_ip}

---

##### `ClientRequestMfaToken`<sup>Optional</sup> <a name="ClientRequestMfaToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken"></a>

```go
ClientRequestMfaToken *string
```

- *Type:* *string

When true the MFA token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}

---

##### `ClientStoreTemporaryCredential`<sup>Optional</sup> <a name="ClientStoreTemporaryCredential" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential"></a>

```go
ClientStoreTemporaryCredential *string
```

- *Type:* *string

When true the ID token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout"></a>

```go
ClientTimeout *f64
```

- *Type:* *f64

The timeout in seconds for the client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#client_timeout SnowflakeProvider#client_timeout}

---

##### `DisableConsoleLogin`<sup>Optional</sup> <a name="DisableConsoleLogin" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableConsoleLogin"></a>

```go
DisableConsoleLogin *string
```

- *Type:* *string

Indicates whether console login should be disabled in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_CONSOLE_LOGIN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#disable_console_login SnowflakeProvider#disable_console_login}

---

##### `DisableQueryContextCache`<sup>Optional</sup> <a name="DisableQueryContextCache" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache"></a>

```go
DisableQueryContextCache interface{}
```

- *Type:* interface{}

Disables HTAP query context cache in the driver. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}

---

##### `DisableTelemetry`<sup>Optional</sup> <a name="DisableTelemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry"></a>

```go
DisableTelemetry interface{}
```

- *Type:* interface{}

Disables telemetry in the driver. Can also be sourced from the `DISABLE_TELEMETRY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#disable_telemetry SnowflakeProvider#disable_telemetry}

---

##### `DriverTracing`<sup>Optional</sup> <a name="DriverTracing" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.driverTracing"></a>

```go
DriverTracing *string
```

- *Type:* *string

Specifies the logging level to be used by the driver.

Valid options are: `trace` | `debug` | `info` | `print` | `warning` | `error` | `fatal` | `panic`. Can also be sourced from the `SNOWFLAKE_DRIVER_TRACING` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#driver_tracing SnowflakeProvider#driver_tracing}

---

##### `ExternalBrowserTimeout`<sup>Optional</sup> <a name="ExternalBrowserTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout"></a>

```go
ExternalBrowserTimeout *f64
```

- *Type:* *f64

The timeout in seconds for the external browser to complete the authentication.

Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Specifies a custom host value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#host SnowflakeProvider#host}

---

##### `IncludeRetryReason`<sup>Optional</sup> <a name="IncludeRetryReason" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.includeRetryReason"></a>

```go
IncludeRetryReason *string
```

- *Type:* *string

Should retried request contain retry reason. Can also be sourced from the `SNOWFLAKE_INCLUDE_RETRY_REASON` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#include_retry_reason SnowflakeProvider#include_retry_reason}

---

##### `InsecureMode`<sup>Optional</sup> <a name="InsecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode"></a>

```go
InsecureMode interface{}
```

- *Type:* interface{}

If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check.

IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `JwtClientTimeout`<sup>Optional</sup> <a name="JwtClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout"></a>

```go
JwtClientTimeout *f64
```

- *Type:* *f64

The timeout in seconds for the JWT client to complete the authentication.

Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}

---

##### `JwtExpireTimeout`<sup>Optional</sup> <a name="JwtExpireTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout"></a>

```go
JwtExpireTimeout *f64
```

- *Type:* *f64

JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}

---

##### `KeepSessionAlive`<sup>Optional</sup> <a name="KeepSessionAlive" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive"></a>

```go
KeepSessionAlive interface{}
```

- *Type:* interface{}

Enables the session to persist even after the connection is closed.

Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#keep_session_alive SnowflakeProvider#keep_session_alive}

---

##### `LoginTimeout`<sup>Optional</sup> <a name="LoginTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout"></a>

```go
LoginTimeout *f64
```

- *Type:* *f64

Login retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#login_timeout SnowflakeProvider#login_timeout}

---

##### `MaxRetryCount`<sup>Optional</sup> <a name="MaxRetryCount" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.maxRetryCount"></a>

```go
MaxRetryCount *f64
```

- *Type:* *f64

Specifies how many times non-periodic HTTP request can be retried by the driver.

Can also be sourced from the `SNOWFLAKE_MAX_RETRY_COUNT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#max_retry_count SnowflakeProvider#max_retry_count}

---

##### `OcspFailOpen`<sup>Optional</sup> <a name="OcspFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.ocspFailOpen"></a>

```go
OcspFailOpen *string
```

- *Type:* *string

True represents OCSP fail open mode.

False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#ocsp_fail_open SnowflakeProvider#ocsp_fail_open}

---

##### `OktaUrl`<sup>Optional</sup> <a name="OktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl"></a>

```go
OktaUrl *string
```

- *Type:* *string

The URL of the Okta server.

e.g. https://example.okta.com. Okta URL host needs to to have a suffix `okta.com`. Read more in Snowflake [docs](https://docs.snowflake.com/en/user-guide/oauth-okta). Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#okta_url SnowflakeProvider#okta_url}

---

##### `OrganizationName`<sup>Optional</sup> <a name="OrganizationName" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.organizationName"></a>

```go
OrganizationName *string
```

- *Type:* *string

Specifies your Snowflake organization name assigned by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier#organization-name). Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_ORGANIZATION_NAME` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#organization_name SnowflakeProvider#organization_name}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.params"></a>

```go
Params *map[string]*string
```

- *Type:* *map[string]*string

Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). This field can not be set with environmental variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#params SnowflakeProvider#params}

---

##### `Passcode`<sup>Optional</sup> <a name="Passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode"></a>

```go
Passcode *string
```

- *Type:* *string

Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login.

Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#passcode SnowflakeProvider#passcode}

---

##### `PasscodeInPassword`<sup>Optional</sup> <a name="PasscodeInPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword"></a>

```go
PasscodeInPassword interface{}
```

- *Type:* interface{}

False by default.

Set to true if the MFA passcode is embedded to the configured password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#passcode_in_password SnowflakeProvider#passcode_in_password}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for user + password auth.

Cannot be used with `private_key` and `private_key_passphrase`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#password SnowflakeProvider#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Specifies a custom port value used by the driver for privatelink connections.

Can also be sourced from the `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#port SnowflakeProvider#port}

---

##### `PreviewFeaturesEnabled`<sup>Optional</sup> <a name="PreviewFeaturesEnabled" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.previewFeaturesEnabled"></a>

```go
PreviewFeaturesEnabled *[]*string
```

- *Type:* *[]*string

A list of preview features that are handled by the provider.

See [preview features list](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/v1-preparations/LIST_OF_PREVIEW_FEATURES_FOR_V1.md). Preview features may have breaking changes in future releases, even without raising the major version. This field can not be set with environmental variables. Valid options are: `snowflake_current_account_datasource` | `snowflake_account_authentication_policy_attachment_resource` | `snowflake_account_password_policy_attachment_resource` | `snowflake_alert_resource` | `snowflake_alerts_datasource` | `snowflake_api_integration_resource` | `snowflake_authentication_policy_resource` | `snowflake_cortex_search_service_resource` | `snowflake_cortex_search_services_datasource` | `snowflake_database_datasource` | `snowflake_database_role_datasource` | `snowflake_dynamic_table_resource` | `snowflake_dynamic_tables_datasource` | `snowflake_external_function_resource` | `snowflake_external_functions_datasource` | `snowflake_external_table_resource` | `snowflake_external_tables_datasource` | `snowflake_external_volume_resource` | `snowflake_failover_group_resource` | `snowflake_failover_groups_datasource` | `snowflake_file_format_resource` | `snowflake_file_formats_datasource` | `snowflake_function_java_resource` | `snowflake_function_javascript_resource` | `snowflake_function_python_resource` | `snowflake_function_scala_resource` | `snowflake_function_sql_resource` | `snowflake_functions_datasource` | `snowflake_managed_account_resource` | `snowflake_materialized_view_resource` | `snowflake_materialized_views_datasource` | `snowflake_network_policy_attachment_resource` | `snowflake_network_rule_resource` | `snowflake_email_notification_integration_resource` | `snowflake_notification_integration_resource` | `snowflake_object_parameter_resource` | `snowflake_password_policy_resource` | `snowflake_pipe_resource` | `snowflake_pipes_datasource` | `snowflake_current_role_datasource` | `snowflake_sequence_resource` | `snowflake_sequences_datasource` | `snowflake_share_resource` | `snowflake_shares_datasource` | `snowflake_parameters_datasource` | `snowflake_procedure_java_resource` | `snowflake_procedure_javascript_resource` | `snowflake_procedure_python_resource` | `snowflake_procedure_scala_resource` | `snowflake_procedure_sql_resource` | `snowflake_procedures_datasource` | `snowflake_stage_resource` | `snowflake_stages_datasource` | `snowflake_storage_integration_resource` | `snowflake_storage_integrations_datasource` | `snowflake_system_generate_scim_access_token_datasource` | `snowflake_system_get_aws_sns_iam_policy_datasource` | `snowflake_system_get_privatelink_config_datasource` | `snowflake_system_get_snowflake_platform_info_datasource` | `snowflake_table_column_masking_policy_application_resource` | `snowflake_table_constraint_resource` | `snowflake_table_resource` | `snowflake_tables_datasource` | `snowflake_user_authentication_policy_attachment_resource` | `snowflake_user_public_keys_resource` | `snowflake_user_password_policy_attachment_resource`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#preview_features_enabled SnowflakeProvider#preview_features_enabled}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Private Key for username+private-key auth. Cannot be used with `password`. Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#private_key SnowflakeProvider#private_key}

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```go
PrivateKeyPassphrase *string
```

- *Type:* *string

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Can also be sourced from the `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#profile SnowflakeProvider#profile}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

A protocol used in the connection.

Valid options are: `http` | `https`. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#protocol SnowflakeProvider#protocol}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout"></a>

```go
RequestTimeout *f64
```

- *Type:* *f64

request retry timeout in seconds EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#request_timeout SnowflakeProvider#request_timeout}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Specifies the role to use by default for accessing Snowflake objects in the client session.

Can also be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#role SnowflakeProvider#role}

---

##### `TmpDirectoryPath`<sup>Optional</sup> <a name="TmpDirectoryPath" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tmpDirectoryPath"></a>

```go
TmpDirectoryPath *string
```

- *Type:* *string

Sets temporary directory used by the driver for operations like encrypting, compressing etc.

Can also be sourced from the `SNOWFLAKE_TMP_DIRECTORY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#tmp_directory_path SnowflakeProvider#tmp_directory_path}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Token to use for OAuth and other forms of token based auth.

Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#token SnowflakeProvider#token}

---

##### `TokenAccessor`<sup>Optional</sup> <a name="TokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor"></a>

```go
TokenAccessor SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

token_accessor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#token_accessor SnowflakeProvider#token_accessor}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

Username. Required unless using `profile`. Can also be sourced from the `SNOWFLAKE_USER` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#user SnowflakeProvider#user}

---

##### `ValidateDefaultParameters`<sup>Optional</sup> <a name="ValidateDefaultParameters" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters"></a>

```go
ValidateDefaultParameters *string
```

- *Type:* *string

True by default.

If false, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```go
Warehouse *string
```

- *Type:* *string

Specifies the virtual warehouse to use by default for queries, loading, etc.

in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#warehouse SnowflakeProvider#warehouse}

---

### SnowflakeProviderTokenAccessor <a name="SnowflakeProviderTokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/provider"

&provider.SnowflakeProviderTokenAccessor {
	ClientId: *string,
	ClientSecret: *string,
	RedirectUri: *string,
	RefreshToken: *string,
	TokenEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId">ClientId</a></code> | <code>*string</code> | The client ID for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri">RedirectUri</a></code> | <code>*string</code> | The redirect URI for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken">RefreshToken</a></code> | <code>*string</code> | The refresh token for the OAuth provider when using a refresh token to renew access token. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable. |

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client ID for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#client_id SnowflakeProvider#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#client_secret SnowflakeProvider#client_secret}

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri"></a>

```go
RedirectUri *string
```

- *Type:* *string

The redirect URI for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#redirect_uri SnowflakeProvider#redirect_uri}

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken"></a>

```go
RefreshToken *string
```

- *Type:* *string

The refresh token for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#refresh_token SnowflakeProvider#refresh_token}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/1.0.2/docs#token_endpoint SnowflakeProvider#token_endpoint}

---



