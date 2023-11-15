# `provider`

Refer to the Terraform Registory for docs: [`snowflake`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs snowflake}.

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
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccount">ResetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator">ResetAuthenticator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetBrowserAuth">ResetBrowserAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientIp">ResetClientIp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientRequestMfaToken">ResetClientRequestMfaToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientStoreTemporaryCredential">ResetClientStoreTemporaryCredential</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetClientTimeout">ResetClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache">ResetDisableQueryContextCache</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry">ResetDisableTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout">ResetExternalBrowserTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode">ResetInsecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtClientTimeout">ResetJwtClientTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetJwtExpireTimeout">ResetJwtExpireTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetKeepSessionAlive">ResetKeepSessionAlive</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetLoginTimeout">ResetLoginTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAccessToken">ResetOauthAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId">ResetOauthClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret">ResetOauthClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthEndpoint">ResetOauthEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUrl">ResetOauthRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRefreshToken">ResetOauthRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl">ResetOktaUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOscpFailOpen">ResetOscpFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscode">ResetPasscode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPasscodeInPassword">ResetPasscodeInPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase">ResetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPath">ResetPrivateKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile">ResetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout">ResetRequestTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole">ResetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetSessionParams">ResetSessionParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetToken">ResetToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetTokenAccessor">ResetTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUser">ResetUser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUsername">ResetUsername</a></code> | *No description.* |
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

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ResetAccount` <a name="ResetAccount" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccount"></a>

```go
func ResetAccount()
```

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetAuthenticator` <a name="ResetAuthenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAuthenticator"></a>

```go
func ResetAuthenticator()
```

##### `ResetBrowserAuth` <a name="ResetBrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetBrowserAuth"></a>

```go
func ResetBrowserAuth()
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

##### `ResetDisableQueryContextCache` <a name="ResetDisableQueryContextCache" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableQueryContextCache"></a>

```go
func ResetDisableQueryContextCache()
```

##### `ResetDisableTelemetry` <a name="ResetDisableTelemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetDisableTelemetry"></a>

```go
func ResetDisableTelemetry()
```

##### `ResetExternalBrowserTimeout` <a name="ResetExternalBrowserTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetExternalBrowserTimeout"></a>

```go
func ResetExternalBrowserTimeout()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```go
func ResetHost()
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

##### `ResetOauthAccessToken` <a name="ResetOauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAccessToken"></a>

```go
func ResetOauthAccessToken()
```

##### `ResetOauthClientId` <a name="ResetOauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId"></a>

```go
func ResetOauthClientId()
```

##### `ResetOauthClientSecret` <a name="ResetOauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret"></a>

```go
func ResetOauthClientSecret()
```

##### `ResetOauthEndpoint` <a name="ResetOauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthEndpoint"></a>

```go
func ResetOauthEndpoint()
```

##### `ResetOauthRedirectUrl` <a name="ResetOauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUrl"></a>

```go
func ResetOauthRedirectUrl()
```

##### `ResetOauthRefreshToken` <a name="ResetOauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRefreshToken"></a>

```go
func ResetOauthRefreshToken()
```

##### `ResetOktaUrl` <a name="ResetOktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOktaUrl"></a>

```go
func ResetOktaUrl()
```

##### `ResetOscpFailOpen` <a name="ResetOscpFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOscpFailOpen"></a>

```go
func ResetOscpFailOpen()
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

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey"></a>

```go
func ResetPrivateKey()
```

##### `ResetPrivateKeyPassphrase` <a name="ResetPrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase"></a>

```go
func ResetPrivateKeyPassphrase()
```

##### `ResetPrivateKeyPath` <a name="ResetPrivateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPath"></a>

```go
func ResetPrivateKeyPath()
```

##### `ResetProfile` <a name="ResetProfile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile"></a>

```go
func ResetProfile()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRequestTimeout` <a name="ResetRequestTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRequestTimeout"></a>

```go
func ResetRequestTimeout()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```go
func ResetRole()
```

##### `ResetSessionParams` <a name="ResetSessionParams" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetSessionParams"></a>

```go
func ResetSessionParams()
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

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUsername"></a>

```go
func ResetUsername()
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

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#import import section} in the documentation of this resource for the id to use

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
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountInput">AccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput">AliasInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticatorInput">AuthenticatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput">BrowserAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput">ClientIpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput">ClientRequestMfaTokenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput">ClientStoreTemporaryCredentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput">ClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCacheInput">DisableQueryContextCacheInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetryInput">DisableTelemetryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeoutInput">ExternalBrowserTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput">InsecureModeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeoutInput">JwtClientTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeoutInput">JwtExpireTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAliveInput">KeepSessionAliveInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeoutInput">LoginTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessTokenInput">OauthAccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpointInput">OauthEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrlInput">OauthRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshTokenInput">OauthRefreshTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput">OktaUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oscpFailOpenInput">OscpFailOpenInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.paramsInput">ParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPasswordInput">PasscodeInPasswordInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInput">PasscodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">PrivateKeyPassphraseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPathInput">PrivateKeyPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput">ProfileInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeoutInput">RequestTimeoutInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.sessionParamsInput">SessionParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessorInput">TokenAccessorInput</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenInput">TokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.userInput">UserInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput">ValidateDefaultParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">WarehouseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticator">Authenticator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth">BrowserAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIp">ClientIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken">ClientRequestMfaToken</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential">ClientStoreTemporaryCredential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableQueryContextCache">DisableQueryContextCache</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.disableTelemetry">DisableTelemetry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.externalBrowserTimeout">ExternalBrowserTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode">InsecureMode</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtClientTimeout">JwtClientTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.jwtExpireTimeout">JwtExpireTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.keepSessionAlive">KeepSessionAlive</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.loginTimeout">LoginTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessToken">OauthAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpoint">OauthEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrl">OauthRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl">OktaUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oscpFailOpen">OscpFailOpen</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.params">Params</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcode">Passcode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passcodeInPassword">PasscodeInPassword</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPath">PrivateKeyPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile">Profile</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.sessionParams">SessionParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tokenAccessor">TokenAccessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.user">User</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters">ValidateDefaultParameters</a></code> | <code>interface{}</code> | *No description.* |
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

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountInput"></a>

```go
func AccountInput() *string
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

##### `BrowserAuthInput`<sup>Optional</sup> <a name="BrowserAuthInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput"></a>

```go
func BrowserAuthInput() interface{}
```

- *Type:* interface{}

---

##### `ClientIpInput`<sup>Optional</sup> <a name="ClientIpInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIpInput"></a>

```go
func ClientIpInput() *string
```

- *Type:* *string

---

##### `ClientRequestMfaTokenInput`<sup>Optional</sup> <a name="ClientRequestMfaTokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaTokenInput"></a>

```go
func ClientRequestMfaTokenInput() interface{}
```

- *Type:* interface{}

---

##### `ClientStoreTemporaryCredentialInput`<sup>Optional</sup> <a name="ClientStoreTemporaryCredentialInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredentialInput"></a>

```go
func ClientStoreTemporaryCredentialInput() interface{}
```

- *Type:* interface{}

---

##### `ClientTimeoutInput`<sup>Optional</sup> <a name="ClientTimeoutInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeoutInput"></a>

```go
func ClientTimeoutInput() *f64
```

- *Type:* *f64

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

##### `OauthAccessTokenInput`<sup>Optional</sup> <a name="OauthAccessTokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessTokenInput"></a>

```go
func OauthAccessTokenInput() *string
```

- *Type:* *string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput"></a>

```go
func OauthClientIdInput() *string
```

- *Type:* *string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput"></a>

```go
func OauthClientSecretInput() *string
```

- *Type:* *string

---

##### `OauthEndpointInput`<sup>Optional</sup> <a name="OauthEndpointInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpointInput"></a>

```go
func OauthEndpointInput() *string
```

- *Type:* *string

---

##### `OauthRedirectUrlInput`<sup>Optional</sup> <a name="OauthRedirectUrlInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrlInput"></a>

```go
func OauthRedirectUrlInput() *string
```

- *Type:* *string

---

##### `OauthRefreshTokenInput`<sup>Optional</sup> <a name="OauthRefreshTokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshTokenInput"></a>

```go
func OauthRefreshTokenInput() *string
```

- *Type:* *string

---

##### `OktaUrlInput`<sup>Optional</sup> <a name="OktaUrlInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrlInput"></a>

```go
func OktaUrlInput() *string
```

- *Type:* *string

---

##### `OscpFailOpenInput`<sup>Optional</sup> <a name="OscpFailOpenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oscpFailOpenInput"></a>

```go
func OscpFailOpenInput() interface{}
```

- *Type:* interface{}

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

##### `PrivateKeyPathInput`<sup>Optional</sup> <a name="PrivateKeyPathInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPathInput"></a>

```go
func PrivateKeyPathInput() *string
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

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.regionInput"></a>

```go
func RegionInput() *string
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

##### `SessionParamsInput`<sup>Optional</sup> <a name="SessionParamsInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.sessionParamsInput"></a>

```go
func SessionParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

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

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `ValidateDefaultParametersInput`<sup>Optional</sup> <a name="ValidateDefaultParametersInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParametersInput"></a>

```go
func ValidateDefaultParametersInput() interface{}
```

- *Type:* interface{}

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput"></a>

```go
func WarehouseInput() *string
```

- *Type:* *string

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.account"></a>

```go
func Account() *string
```

- *Type:* *string

---

##### `Authenticator`<sup>Optional</sup> <a name="Authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.authenticator"></a>

```go
func Authenticator() *string
```

- *Type:* *string

---

##### `BrowserAuth`<sup>Optional</sup> <a name="BrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth"></a>

```go
func BrowserAuth() interface{}
```

- *Type:* interface{}

---

##### `ClientIp`<sup>Optional</sup> <a name="ClientIp" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientIp"></a>

```go
func ClientIp() *string
```

- *Type:* *string

---

##### `ClientRequestMfaToken`<sup>Optional</sup> <a name="ClientRequestMfaToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientRequestMfaToken"></a>

```go
func ClientRequestMfaToken() interface{}
```

- *Type:* interface{}

---

##### `ClientStoreTemporaryCredential`<sup>Optional</sup> <a name="ClientStoreTemporaryCredential" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientStoreTemporaryCredential"></a>

```go
func ClientStoreTemporaryCredential() interface{}
```

- *Type:* interface{}

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.clientTimeout"></a>

```go
func ClientTimeout() *f64
```

- *Type:* *f64

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

##### `OauthAccessToken`<sup>Optional</sup> <a name="OauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessToken"></a>

```go
func OauthAccessToken() *string
```

- *Type:* *string

---

##### `OauthClientId`<sup>Optional</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId"></a>

```go
func OauthClientId() *string
```

- *Type:* *string

---

##### `OauthClientSecret`<sup>Optional</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret"></a>

```go
func OauthClientSecret() *string
```

- *Type:* *string

---

##### `OauthEndpoint`<sup>Optional</sup> <a name="OauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpoint"></a>

```go
func OauthEndpoint() *string
```

- *Type:* *string

---

##### `OauthRedirectUrl`<sup>Optional</sup> <a name="OauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrl"></a>

```go
func OauthRedirectUrl() *string
```

- *Type:* *string

---

##### `OauthRefreshToken`<sup>Optional</sup> <a name="OauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshToken"></a>

```go
func OauthRefreshToken() *string
```

- *Type:* *string

---

##### `OktaUrl`<sup>Optional</sup> <a name="OktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oktaUrl"></a>

```go
func OktaUrl() *string
```

- *Type:* *string

---

##### `OscpFailOpen`<sup>Optional</sup> <a name="OscpFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oscpFailOpen"></a>

```go
func OscpFailOpen() interface{}
```

- *Type:* interface{}

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

##### `PrivateKeyPath`<sup>Optional</sup> <a name="PrivateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPath"></a>

```go
func PrivateKeyPath() *string
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

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.region"></a>

```go
func Region() *string
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

##### `SessionParams`<sup>Optional</sup> <a name="SessionParams" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.sessionParams"></a>

```go
func SessionParams() *map[string]*string
```

- *Type:* *map[string]*string

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

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `ValidateDefaultParameters`<sup>Optional</sup> <a name="ValidateDefaultParameters" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.validateDefaultParameters"></a>

```go
func ValidateDefaultParameters() interface{}
```

- *Type:* interface{}

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
	Account: *string,
	Alias: *string,
	Authenticator: *string,
	BrowserAuth: interface{},
	ClientIp: *string,
	ClientRequestMfaToken: interface{},
	ClientStoreTemporaryCredential: interface{},
	ClientTimeout: *f64,
	DisableQueryContextCache: interface{},
	DisableTelemetry: interface{},
	ExternalBrowserTimeout: *f64,
	Host: *string,
	InsecureMode: interface{},
	JwtClientTimeout: *f64,
	JwtExpireTimeout: *f64,
	KeepSessionAlive: interface{},
	LoginTimeout: *f64,
	OauthAccessToken: *string,
	OauthClientId: *string,
	OauthClientSecret: *string,
	OauthEndpoint: *string,
	OauthRedirectUrl: *string,
	OauthRefreshToken: *string,
	OktaUrl: *string,
	OscpFailOpen: interface{},
	Params: *map[string]*string,
	Passcode: *string,
	PasscodeInPassword: interface{},
	Password: *string,
	Port: *f64,
	PrivateKey: *string,
	PrivateKeyPassphrase: *string,
	PrivateKeyPath: *string,
	Profile: *string,
	Protocol: *string,
	Region: *string,
	RequestTimeout: *f64,
	Role: *string,
	SessionParams: *map[string]*string,
	Token: *string,
	TokenAccessor: github.com/cdktf/cdktf-provider-snowflake-go/snowflake.provider.SnowflakeProviderTokenAccessor,
	User: *string,
	Username: *string,
	ValidateDefaultParameters: interface{},
	Warehouse: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account">Account</a></code> | <code>*string</code> | Specifies your Snowflake account identifier assigned, by Snowflake. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator">Authenticator</a></code> | <code>*string</code> | Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid values include: Snowflake, OAuth, ExternalBrowser, Okta, JWT, TokenAccessor, UsernamePasswordMFA. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth">BrowserAuth</a></code> | <code>interface{}</code> | Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp">ClientIp</a></code> | <code>*string</code> | IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken">ClientRequestMfaToken</a></code> | <code>interface{}</code> | When true the MFA token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential">ClientStoreTemporaryCredential</a></code> | <code>interface{}</code> | When true the ID token is cached in the credential manager. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout">ClientTimeout</a></code> | <code>*f64</code> | The timeout in seconds for the client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache">DisableQueryContextCache</a></code> | <code>interface{}</code> | Should HTAP query context cache be disabled. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry">DisableTelemetry</a></code> | <code>interface{}</code> | Indicates whether to disable telemetry. Can also be sourced from the `SNOWFLAKE_DISABLE_TELEMETRY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout">ExternalBrowserTimeout</a></code> | <code>*f64</code> | The timeout in seconds for the external browser to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host">Host</a></code> | <code>*string</code> | Supports passing in a custom host value to the snowflake go driver for use with privatelink. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode">InsecureMode</a></code> | <code>interface{}</code> | If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout">JwtClientTimeout</a></code> | <code>*f64</code> | The timeout in seconds for the JWT client to complete the authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout">JwtExpireTimeout</a></code> | <code>*f64</code> | JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive">KeepSessionAlive</a></code> | <code>interface{}</code> | Enables the session to persist even after the connection is closed. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout">LoginTimeout</a></code> | <code>*f64</code> | Login retry timeout EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken">OauthAccessToken</a></code> | <code>*string</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint">OauthEndpoint</a></code> | <code>*string</code> | Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl">OauthRedirectUrl</a></code> | <code>*string</code> | Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>*string</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl">OktaUrl</a></code> | <code>*string</code> | The URL of the Okta server. e.g. https://example.okta.com. Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oscpFailOpen">OscpFailOpen</a></code> | <code>interface{}</code> | True represents OCSP fail open mode. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.params">Params</a></code> | <code>*map[string]*string</code> | Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode">Passcode</a></code> | <code>*string</code> | Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword">PasscodeInPassword</a></code> | <code>interface{}</code> | False by default. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password">Password</a></code> | <code>*string</code> | Password for username+password auth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port">Port</a></code> | <code>*f64</code> | Support custom port values to snowflake go driver for use with privatelink. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Private Key for username+private-key auth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath">PrivateKeyPath</a></code> | <code>*string</code> | Path to a private key for using keypair authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile">Profile</a></code> | <code>*string</code> | Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Either http or https, defaults to https. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region">Region</a></code> | <code>*string</code> | Snowflake region, such as "eu-central-1", with this parameter. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout">RequestTimeout</a></code> | <code>*f64</code> | request retry timeout EXCLUDING network roundtrip and read out http response. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role">Role</a></code> | <code>*string</code> | Specifies the role to use by default for accessing Snowflake objects in the client session. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.sessionParams">SessionParams</a></code> | <code>*map[string]*string</code> | Sets session parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.token">Token</a></code> | <code>*string</code> | Token to use for OAuth and other forms of token based auth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor">TokenAccessor</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a></code> | token_accessor block. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.user">User</a></code> | <code>*string</code> | Username. Can also be sourced from the `SNOWFLAKE_USER` environment variable. Required unless using `profile`. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username">Username</a></code> | <code>*string</code> | Username for username+password authentication. Can also be sourced from the `SNOWFLAKE_USERNAME` environment variable. Required unless using `profile`. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters">ValidateDefaultParameters</a></code> | <code>interface{}</code> | If true, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">Warehouse</a></code> | <code>*string</code> | Specifies the virtual warehouse to use by default for queries, loading, etc. |

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account"></a>

```go
Account *string
```

- *Type:* *string

Specifies your Snowflake account identifier assigned, by Snowflake.

For information about account identifiers, see the [Snowflake documentation](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html). Can also be sourced from the `SNOWFLAKE_ACCOUNT` environment variable. Required unless using `profile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#account SnowflakeProvider#account}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#alias SnowflakeProvider#alias}

---

##### `Authenticator`<sup>Optional</sup> <a name="Authenticator" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.authenticator"></a>

```go
Authenticator *string
```

- *Type:* *string

Specifies the [authentication type](https://pkg.go.dev/github.com/snowflakedb/gosnowflake#AuthType) to use when connecting to Snowflake. Valid values include: Snowflake, OAuth, ExternalBrowser, Okta, JWT, TokenAccessor, UsernamePasswordMFA. Can also be sourced from the `SNOWFLAKE_AUTHENTICATOR` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#authenticator SnowflakeProvider#authenticator}

---

##### `BrowserAuth`<sup>Optional</sup> <a name="BrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth"></a>

```go
BrowserAuth interface{}
```

- *Type:* interface{}

Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#browser_auth SnowflakeProvider#browser_auth}

---

##### `ClientIp`<sup>Optional</sup> <a name="ClientIp" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientIp"></a>

```go
ClientIp *string
```

- *Type:* *string

IP address for network checks. Can also be sourced from the `SNOWFLAKE_CLIENT_IP` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#client_ip SnowflakeProvider#client_ip}

---

##### `ClientRequestMfaToken`<sup>Optional</sup> <a name="ClientRequestMfaToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientRequestMfaToken"></a>

```go
ClientRequestMfaToken interface{}
```

- *Type:* interface{}

When true the MFA token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_REQUEST_MFA_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#client_request_mfa_token SnowflakeProvider#client_request_mfa_token}

---

##### `ClientStoreTemporaryCredential`<sup>Optional</sup> <a name="ClientStoreTemporaryCredential" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientStoreTemporaryCredential"></a>

```go
ClientStoreTemporaryCredential interface{}
```

- *Type:* interface{}

When true the ID token is cached in the credential manager.

True by default in Windows/OSX. False for Linux. Can also be sourced from the `SNOWFLAKE_CLIENT_STORE_TEMPORARY_CREDENTIAL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#client_store_temporary_credential SnowflakeProvider#client_store_temporary_credential}

---

##### `ClientTimeout`<sup>Optional</sup> <a name="ClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.clientTimeout"></a>

```go
ClientTimeout *f64
```

- *Type:* *f64

The timeout in seconds for the client to complete the authentication.

Default is 900 seconds. Can also be sourced from the `SNOWFLAKE_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#client_timeout SnowflakeProvider#client_timeout}

---

##### `DisableQueryContextCache`<sup>Optional</sup> <a name="DisableQueryContextCache" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableQueryContextCache"></a>

```go
DisableQueryContextCache interface{}
```

- *Type:* interface{}

Should HTAP query context cache be disabled. Can also be sourced from the `SNOWFLAKE_DISABLE_QUERY_CONTEXT_CACHE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#disable_query_context_cache SnowflakeProvider#disable_query_context_cache}

---

##### `DisableTelemetry`<sup>Optional</sup> <a name="DisableTelemetry" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.disableTelemetry"></a>

```go
DisableTelemetry interface{}
```

- *Type:* interface{}

Indicates whether to disable telemetry. Can also be sourced from the `SNOWFLAKE_DISABLE_TELEMETRY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#disable_telemetry SnowflakeProvider#disable_telemetry}

---

##### `ExternalBrowserTimeout`<sup>Optional</sup> <a name="ExternalBrowserTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.externalBrowserTimeout"></a>

```go
ExternalBrowserTimeout *f64
```

- *Type:* *f64

The timeout in seconds for the external browser to complete the authentication.

Default is 120 seconds. Can also be sourced from the `SNOWFLAKE_EXTERNAL_BROWSER_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#external_browser_timeout SnowflakeProvider#external_browser_timeout}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Supports passing in a custom host value to the snowflake go driver for use with privatelink.

Can also be sourced from the `SNOWFLAKE_HOST` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#host SnowflakeProvider#host}

---

##### `InsecureMode`<sup>Optional</sup> <a name="InsecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode"></a>

```go
InsecureMode interface{}
```

- *Type:* interface{}

If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check.

IMPORTANT: Change the default value for testing or emergency situations only. Can also be sourced from the `SNOWFLAKE_INSECURE_MODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `JwtClientTimeout`<sup>Optional</sup> <a name="JwtClientTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtClientTimeout"></a>

```go
JwtClientTimeout *f64
```

- *Type:* *f64

The timeout in seconds for the JWT client to complete the authentication.

Default is 10 seconds. Can also be sourced from the `SNOWFLAKE_JWT_CLIENT_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#jwt_client_timeout SnowflakeProvider#jwt_client_timeout}

---

##### `JwtExpireTimeout`<sup>Optional</sup> <a name="JwtExpireTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.jwtExpireTimeout"></a>

```go
JwtExpireTimeout *f64
```

- *Type:* *f64

JWT expire after timeout in seconds. Can also be sourced from the `SNOWFLAKE_JWT_EXPIRE_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#jwt_expire_timeout SnowflakeProvider#jwt_expire_timeout}

---

##### `KeepSessionAlive`<sup>Optional</sup> <a name="KeepSessionAlive" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.keepSessionAlive"></a>

```go
KeepSessionAlive interface{}
```

- *Type:* interface{}

Enables the session to persist even after the connection is closed.

Can also be sourced from the `SNOWFLAKE_KEEP_SESSION_ALIVE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#keep_session_alive SnowflakeProvider#keep_session_alive}

---

##### `LoginTimeout`<sup>Optional</sup> <a name="LoginTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.loginTimeout"></a>

```go
LoginTimeout *f64
```

- *Type:* *f64

Login retry timeout EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_LOGIN_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#login_timeout SnowflakeProvider#login_timeout}

---

##### `OauthAccessToken`<sup>Optional</sup> <a name="OauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken"></a>

```go
OauthAccessToken *string
```

- *Type:* *string

Token for use with OAuth.

Generating the token is left to other tools. Cannot be used with `browser_auth`, `private_key_path`, `oauth_refresh_token` or `password`. Can also be sourced from `SNOWFLAKE_OAUTH_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#oauth_access_token SnowflakeProvider#oauth_access_token}

---

##### `OauthClientId`<sup>Optional</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId"></a>

```go
OauthClientId *string
```

- *Type:* *string

Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `OauthClientSecret`<sup>Optional</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret"></a>

```go
OauthClientSecret *string
```

- *Type:* *string

Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `OauthEndpoint`<sup>Optional</sup> <a name="OauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint"></a>

```go
OauthEndpoint *string
```

- *Type:* *string

Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#oauth_endpoint SnowflakeProvider#oauth_endpoint}

---

##### `OauthRedirectUrl`<sup>Optional</sup> <a name="OauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl"></a>

```go
OauthRedirectUrl *string
```

- *Type:* *string

Required when `oauth_refresh_token` is used. Can also be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}

---

##### `OauthRefreshToken`<sup>Optional</sup> <a name="OauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken"></a>

```go
OauthRefreshToken *string
```

- *Type:* *string

Token for use with OAuth.

Setup and generation of the token is left to other tools. Should be used in conjunction with `oauth_client_id`, `oauth_client_secret`, `oauth_endpoint`, `oauth_redirect_url`. Cannot be used with `browser_auth`, `private_key_path`, `oauth_access_token` or `password`. Can also be sourced from `SNOWFLAKE_OAUTH_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}

---

##### `OktaUrl`<sup>Optional</sup> <a name="OktaUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oktaUrl"></a>

```go
OktaUrl *string
```

- *Type:* *string

The URL of the Okta server. e.g. https://example.okta.com. Can also be sourced from the `SNOWFLAKE_OKTA_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#okta_url SnowflakeProvider#okta_url}

---

##### `OscpFailOpen`<sup>Optional</sup> <a name="OscpFailOpen" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oscpFailOpen"></a>

```go
OscpFailOpen interface{}
```

- *Type:* interface{}

True represents OCSP fail open mode.

False represents OCSP fail closed mode. Fail open true by default. Can also be sourced from the `SNOWFLAKE_OCSP_FAIL_OPEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#oscp_fail_open SnowflakeProvider#oscp_fail_open}

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.params"></a>

```go
Params *map[string]*string
```

- *Type:* *map[string]*string

Sets other connection (i.e. session) parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#params SnowflakeProvider#params}

---

##### `Passcode`<sup>Optional</sup> <a name="Passcode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcode"></a>

```go
Passcode *string
```

- *Type:* *string

Specifies the passcode provided by Duo when using multi-factor authentication (MFA) for login.

Can also be sourced from the `SNOWFLAKE_PASSCODE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#passcode SnowflakeProvider#passcode}

---

##### `PasscodeInPassword`<sup>Optional</sup> <a name="PasscodeInPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.passcodeInPassword"></a>

```go
PasscodeInPassword interface{}
```

- *Type:* interface{}

False by default.

Set to true if the MFA passcode is embedded in the login password. Appends the MFA passcode to the end of the password. Can also be sourced from the `SNOWFLAKE_PASSCODE_IN_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#passcode_in_password SnowflakeProvider#passcode_in_password}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for username+password auth.

Cannot be used with `browser_auth` or `private_key_path`. Can also be sourced from the `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#password SnowflakeProvider#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Support custom port values to snowflake go driver for use with privatelink.

Can also be sourced from the `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#port SnowflakeProvider#port}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Private Key for username+private-key auth.

Cannot be used with `browser_auth` or `password`. Can also be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#private_key SnowflakeProvider#private_key}

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```go
PrivateKeyPassphrase *string
```

- *Type:* *string

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Can also be sourced from `SNOWFLAKE_PRIVATE_KEY_PASSPHRASE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `PrivateKeyPath`<sup>Optional</sup> <a name="PrivateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath"></a>

```go
PrivateKeyPath *string
```

- *Type:* *string

Path to a private key for using keypair authentication.

Cannot be used with `browser_auth`, `oauth_access_token` or `password`. Can also be sourced from `SNOWFLAKE_PRIVATE_KEY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#private_key_path SnowflakeProvider#private_key_path}

---

##### `Profile`<sup>Optional</sup> <a name="Profile" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile"></a>

```go
Profile *string
```

- *Type:* *string

Sets the profile to read from ~/.snowflake/config file. Can also be sourced from the `SNOWFLAKE_PROFILE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#profile SnowflakeProvider#profile}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Either http or https, defaults to https. Can also be sourced from the `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#protocol SnowflakeProvider#protocol}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Snowflake region, such as "eu-central-1", with this parameter.

However, since this parameter is deprecated, it is best to specify the region as part of the account parameter. For details, see the description of the account parameter. [Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can also be sourced from the `SNOWFLAKE_REGION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#region SnowflakeProvider#region}

---

##### `RequestTimeout`<sup>Optional</sup> <a name="RequestTimeout" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.requestTimeout"></a>

```go
RequestTimeout *f64
```

- *Type:* *f64

request retry timeout EXCLUDING network roundtrip and read out http response.

Can also be sourced from the `SNOWFLAKE_REQUEST_TIMEOUT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#request_timeout SnowflakeProvider#request_timeout}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Specifies the role to use by default for accessing Snowflake objects in the client session.

Can also be sourced from the `SNOWFLAKE_ROLE` environment variable. .

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#role SnowflakeProvider#role}

---

##### `SessionParams`<sup>Optional</sup> <a name="SessionParams" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.sessionParams"></a>

```go
SessionParams *map[string]*string
```

- *Type:* *map[string]*string

Sets session parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#session_params SnowflakeProvider#session_params}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.token"></a>

```go
Token *string
```

- *Type:* *string

Token to use for OAuth and other forms of token based auth.

Can also be sourced from the `SNOWFLAKE_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#token SnowflakeProvider#token}

---

##### `TokenAccessor`<sup>Optional</sup> <a name="TokenAccessor" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.tokenAccessor"></a>

```go
TokenAccessor SnowflakeProviderTokenAccessor
```

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor">SnowflakeProviderTokenAccessor</a>

token_accessor block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#token_accessor SnowflakeProvider#token_accessor}

---

##### `User`<sup>Optional</sup> <a name="User" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.user"></a>

```go
User *string
```

- *Type:* *string

Username. Can also be sourced from the `SNOWFLAKE_USER` environment variable. Required unless using `profile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#user SnowflakeProvider#user}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for username+password authentication. Can also be sourced from the `SNOWFLAKE_USERNAME` environment variable. Required unless using `profile`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#username SnowflakeProvider#username}

---

##### `ValidateDefaultParameters`<sup>Optional</sup> <a name="ValidateDefaultParameters" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.validateDefaultParameters"></a>

```go
ValidateDefaultParameters interface{}
```

- *Type:* interface{}

If true, disables the validation checks for Database, Schema, Warehouse and Role at the time a connection is established.

Can also be sourced from the `SNOWFLAKE_VALIDATE_DEFAULT_PARAMETERS` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#validate_default_parameters SnowflakeProvider#validate_default_parameters}

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```go
Warehouse *string
```

- *Type:* *string

Specifies the virtual warehouse to use by default for queries, loading, etc.

in the client session. Can also be sourced from the `SNOWFLAKE_WAREHOUSE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#warehouse SnowflakeProvider#warehouse}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#client_id SnowflakeProvider#client_id}

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#client_secret SnowflakeProvider#client_secret}

---

##### `RedirectUri`<sup>Required</sup> <a name="RedirectUri" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.redirectUri"></a>

```go
RedirectUri *string
```

- *Type:* *string

The redirect URI for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REDIRECT_URI` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#redirect_uri SnowflakeProvider#redirect_uri}

---

##### `RefreshToken`<sup>Required</sup> <a name="RefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.refreshToken"></a>

```go
RefreshToken *string
```

- *Type:* *string

The refresh token for the OAuth provider when using a refresh token to renew access token.

Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#refresh_token SnowflakeProvider#refresh_token}

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProviderTokenAccessor.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint for the OAuth provider e.g. https://{yourDomain}/oauth/token when using a refresh token to renew access token. Can also be sourced from the `SNOWFLAKE_TOKEN_ACCESSOR_TOKEN_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.75.0/docs#token_endpoint SnowflakeProvider#token_endpoint}

---



