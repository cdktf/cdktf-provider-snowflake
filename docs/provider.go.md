# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake snowflake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/provider"

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

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config"></a>

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
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias">ResetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetBrowserAuth">ResetBrowserAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAccessToken">ResetOauthAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId">ResetOauthClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret">ResetOauthClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthEndpoint">ResetOauthEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUrl">ResetOauthRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRefreshToken">ResetOauthRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey">ResetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase">ResetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPath">ResetPrivateKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole">ResetRole</a></code> | *No description.* |
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

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```go
func ResetAlias()
```

##### `ResetBrowserAuth` <a name="ResetBrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetBrowserAuth"></a>

```go
func ResetBrowserAuth()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```go
func ResetHost()
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

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```go
func ResetRole()
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

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/provider"

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
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/provider"

provider.SnowflakeProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider"></a>

```go
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/provider"

provider.SnowflakeProvider_IsTerraformProvider(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* interface{}

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
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput">BrowserAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessTokenInput">OauthAccessTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpointInput">OauthEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrlInput">OauthRedirectUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshTokenInput">OauthRefreshTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">PrivateKeyPassphraseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPathInput">PrivateKeyPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput">RoleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">WarehouseInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.account">Account</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth">BrowserAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessToken">OauthAccessToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpoint">OauthEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrl">OauthRedirectUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey">PrivateKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPath">PrivateKeyPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role">Role</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username">Username</a></code> | <code>*string</code> | *No description.* |
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

##### `BrowserAuthInput`<sup>Optional</sup> <a name="BrowserAuthInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput"></a>

```go
func BrowserAuthInput() interface{}
```

- *Type:* interface{}

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

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

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput"></a>

```go
func RoleInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

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

##### `BrowserAuth`<sup>Optional</sup> <a name="BrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth"></a>

```go
func BrowserAuth() interface{}
```

- *Type:* interface{}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

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

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role"></a>

```go
func Role() *string
```

- *Type:* *string

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username"></a>

```go
func Username() *string
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
import "github.com/cdktf/cdktf-provider-snowflake-go/snowflake/v6/provider"

&provider.SnowflakeProviderConfig {
	Account: *string,
	Username: *string,
	Alias: *string,
	BrowserAuth: interface{},
	Host: *string,
	OauthAccessToken: *string,
	OauthClientId: *string,
	OauthClientSecret: *string,
	OauthEndpoint: *string,
	OauthRedirectUrl: *string,
	OauthRefreshToken: *string,
	Password: *string,
	Port: *f64,
	PrivateKey: *string,
	PrivateKeyPassphrase: *string,
	PrivateKeyPath: *string,
	Protocol: *string,
	Region: *string,
	Role: *string,
	Warehouse: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account">Account</a></code> | <code>*string</code> | The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username">Username</a></code> | <code>*string</code> | Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">Alias</a></code> | <code>*string</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth">BrowserAuth</a></code> | <code>interface{}</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host">Host</a></code> | <code>*string</code> | Supports passing in a custom host value to the snowflake go driver for use with privatelink. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken">OauthAccessToken</a></code> | <code>*string</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId">OauthClientId</a></code> | <code>*string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret">OauthClientSecret</a></code> | <code>*string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint">OauthEndpoint</a></code> | <code>*string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl">OauthRedirectUrl</a></code> | <code>*string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>*string</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password">Password</a></code> | <code>*string</code> | Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port">Port</a></code> | <code>*f64</code> | Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">PrivateKey</a></code> | <code>*string</code> | Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>*string</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath">PrivateKeyPath</a></code> | <code>*string</code> | Path to a private key for using keypair authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region">Region</a></code> | <code>*string</code> | [Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role">Role</a></code> | <code>*string</code> | Snowflake role to use for operations. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">Warehouse</a></code> | <code>*string</code> | Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable. |

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account"></a>

```go
Account *string
```

- *Type:* *string

The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#account SnowflakeProvider#account}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username"></a>

```go
Username *string
```

- *Type:* *string

Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#username SnowflakeProvider#username}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```go
Alias *string
```

- *Type:* *string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#alias SnowflakeProvider#alias}

---

##### `BrowserAuth`<sup>Optional</sup> <a name="BrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth"></a>

```go
BrowserAuth interface{}
```

- *Type:* interface{}

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#browser_auth SnowflakeProvider#browser_auth}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

Supports passing in a custom host value to the snowflake go driver for use with privatelink.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#host SnowflakeProvider#host}

---

##### `OauthAccessToken`<sup>Optional</sup> <a name="OauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken"></a>

```go
OauthAccessToken *string
```

- *Type:* *string

Token for use with OAuth.

Generating the token is left to other tools. Cannot be used with `browser_auth`, `private_key_path`, `oauth_refresh_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_access_token SnowflakeProvider#oauth_access_token}

---

##### `OauthClientId`<sup>Optional</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId"></a>

```go
OauthClientId *string
```

- *Type:* *string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `OauthClientSecret`<sup>Optional</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret"></a>

```go
OauthClientSecret *string
```

- *Type:* *string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `OauthEndpoint`<sup>Optional</sup> <a name="OauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint"></a>

```go
OauthEndpoint *string
```

- *Type:* *string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_endpoint SnowflakeProvider#oauth_endpoint}

---

##### `OauthRedirectUrl`<sup>Optional</sup> <a name="OauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl"></a>

```go
OauthRedirectUrl *string
```

- *Type:* *string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}

---

##### `OauthRefreshToken`<sup>Optional</sup> <a name="OauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken"></a>

```go
OauthRefreshToken *string
```

- *Type:* *string

Token for use with OAuth.

Setup and generation of the token is left to other tools. Should be used in conjunction with `oauth_client_id`, `oauth_client_secret`, `oauth_endpoint`, `oauth_redirect_url`. Cannot be used with `browser_auth`, `private_key_path`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```go
Password *string
```

- *Type:* *string

Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#password SnowflakeProvider#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#port SnowflakeProvider#port}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```go
PrivateKey *string
```

- *Type:* *string

Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key SnowflakeProvider#private_key}

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```go
PrivateKeyPassphrase *string
```

- *Type:* *string

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `PrivateKeyPath`<sup>Optional</sup> <a name="PrivateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath"></a>

```go
PrivateKeyPath *string
```

- *Type:* *string

Path to a private key for using keypair authentication.

Cannot be used with `browser_auth`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY_PATH` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key_path SnowflakeProvider#private_key_path}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#protocol SnowflakeProvider#protocol}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

[Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#region SnowflakeProvider#region}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```go
Role *string
```

- *Type:* *string

Snowflake role to use for operations.

If left unset, default role for user will be used. Can be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#role SnowflakeProvider#role}

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```go
Warehouse *string
```

- *Type:* *string

Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#warehouse SnowflakeProvider#warehouse}

---



