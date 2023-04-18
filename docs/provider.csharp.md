# `provider`

Refer to the Terraform Registory for docs: [`snowflake`](https://www.terraform.io/docs/providers/snowflake).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://www.terraform.io/docs/providers/snowflake snowflake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SnowflakeProvider(Construct Scope, string Id, SnowflakeProviderConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig">SnowflakeProviderConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config"></a>

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

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `ResetAlias` <a name="ResetAlias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```csharp
private void ResetAlias()
```

##### `ResetBrowserAuth` <a name="ResetBrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetBrowserAuth"></a>

```csharp
private void ResetBrowserAuth()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetOauthAccessToken` <a name="ResetOauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAccessToken"></a>

```csharp
private void ResetOauthAccessToken()
```

##### `ResetOauthClientId` <a name="ResetOauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId"></a>

```csharp
private void ResetOauthClientId()
```

##### `ResetOauthClientSecret` <a name="ResetOauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret"></a>

```csharp
private void ResetOauthClientSecret()
```

##### `ResetOauthEndpoint` <a name="ResetOauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthEndpoint"></a>

```csharp
private void ResetOauthEndpoint()
```

##### `ResetOauthRedirectUrl` <a name="ResetOauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUrl"></a>

```csharp
private void ResetOauthRedirectUrl()
```

##### `ResetOauthRefreshToken` <a name="ResetOauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRefreshToken"></a>

```csharp
private void ResetOauthRefreshToken()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetPrivateKey` <a name="ResetPrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey"></a>

```csharp
private void ResetPrivateKey()
```

##### `ResetPrivateKeyPassphrase` <a name="ResetPrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase"></a>

```csharp
private void ResetPrivateKeyPassphrase()
```

##### `ResetPrivateKeyPath` <a name="ResetPrivateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPath"></a>

```csharp
private void ResetPrivateKeyPath()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```csharp
private void ResetProtocol()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetRole` <a name="ResetRole" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```csharp
private void ResetRole()
```

##### `ResetWarehouse` <a name="ResetWarehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse"></a>

```csharp
private void ResetWarehouse()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider">IsTerraformProvider</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SnowflakeProvider.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SnowflakeProvider.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformProvider` <a name="IsTerraformProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

SnowflakeProvider.IsTerraformProvider(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes">MetaAttributes</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource">TerraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias">Alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountInput">AccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput">AliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput">BrowserAuthInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessTokenInput">OauthAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput">OauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput">OauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpointInput">OauthEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrlInput">OauthRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshTokenInput">OauthRefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">PrivateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">PrivateKeyPassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPathInput">PrivateKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">ProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput">RoleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">WarehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.account">Account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth">BrowserAuth</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessToken">OauthAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret">OauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpoint">OauthEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrl">OauthRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey">PrivateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPath">PrivateKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol">Protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role">Role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse">Warehouse</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `MetaAttributes`<sup>Required</sup> <a name="MetaAttributes" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> MetaAttributes { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `TerraformProviderSource`<sup>Optional</sup> <a name="TerraformProviderSource" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource"></a>

```csharp
public string TerraformProviderSource { get; }
```

- *Type:* string

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias"></a>

```csharp
public string Alias { get; }
```

- *Type:* string

---

##### `AccountInput`<sup>Optional</sup> <a name="AccountInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountInput"></a>

```csharp
public string AccountInput { get; }
```

- *Type:* string

---

##### `AliasInput`<sup>Optional</sup> <a name="AliasInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput"></a>

```csharp
public string AliasInput { get; }
```

- *Type:* string

---

##### `BrowserAuthInput`<sup>Optional</sup> <a name="BrowserAuthInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput"></a>

```csharp
public object BrowserAuthInput { get; }
```

- *Type:* object

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `OauthAccessTokenInput`<sup>Optional</sup> <a name="OauthAccessTokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessTokenInput"></a>

```csharp
public string OauthAccessTokenInput { get; }
```

- *Type:* string

---

##### `OauthClientIdInput`<sup>Optional</sup> <a name="OauthClientIdInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput"></a>

```csharp
public string OauthClientIdInput { get; }
```

- *Type:* string

---

##### `OauthClientSecretInput`<sup>Optional</sup> <a name="OauthClientSecretInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput"></a>

```csharp
public string OauthClientSecretInput { get; }
```

- *Type:* string

---

##### `OauthEndpointInput`<sup>Optional</sup> <a name="OauthEndpointInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpointInput"></a>

```csharp
public string OauthEndpointInput { get; }
```

- *Type:* string

---

##### `OauthRedirectUrlInput`<sup>Optional</sup> <a name="OauthRedirectUrlInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrlInput"></a>

```csharp
public string OauthRedirectUrlInput { get; }
```

- *Type:* string

---

##### `OauthRefreshTokenInput`<sup>Optional</sup> <a name="OauthRefreshTokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshTokenInput"></a>

```csharp
public string OauthRefreshTokenInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `PrivateKeyInput`<sup>Optional</sup> <a name="PrivateKeyInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput"></a>

```csharp
public string PrivateKeyInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPassphraseInput`<sup>Optional</sup> <a name="PrivateKeyPassphraseInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput"></a>

```csharp
public string PrivateKeyPassphraseInput { get; }
```

- *Type:* string

---

##### `PrivateKeyPathInput`<sup>Optional</sup> <a name="PrivateKeyPathInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPathInput"></a>

```csharp
public string PrivateKeyPathInput { get; }
```

- *Type:* string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput"></a>

```csharp
public string ProtocolInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `RoleInput`<sup>Optional</sup> <a name="RoleInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput"></a>

```csharp
public string RoleInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `WarehouseInput`<sup>Optional</sup> <a name="WarehouseInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput"></a>

```csharp
public string WarehouseInput { get; }
```

- *Type:* string

---

##### `Account`<sup>Optional</sup> <a name="Account" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.account"></a>

```csharp
public string Account { get; }
```

- *Type:* string

---

##### `BrowserAuth`<sup>Optional</sup> <a name="BrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth"></a>

```csharp
public object BrowserAuth { get; }
```

- *Type:* object

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `OauthAccessToken`<sup>Optional</sup> <a name="OauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessToken"></a>

```csharp
public string OauthAccessToken { get; }
```

- *Type:* string

---

##### `OauthClientId`<sup>Optional</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; }
```

- *Type:* string

---

##### `OauthClientSecret`<sup>Optional</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret"></a>

```csharp
public string OauthClientSecret { get; }
```

- *Type:* string

---

##### `OauthEndpoint`<sup>Optional</sup> <a name="OauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpoint"></a>

```csharp
public string OauthEndpoint { get; }
```

- *Type:* string

---

##### `OauthRedirectUrl`<sup>Optional</sup> <a name="OauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrl"></a>

```csharp
public string OauthRedirectUrl { get; }
```

- *Type:* string

---

##### `OauthRefreshToken`<sup>Optional</sup> <a name="OauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshToken"></a>

```csharp
public string OauthRefreshToken { get; }
```

- *Type:* string

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey"></a>

```csharp
public string PrivateKey { get; }
```

- *Type:* string

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase"></a>

```csharp
public string PrivateKeyPassphrase { get; }
```

- *Type:* string

---

##### `PrivateKeyPath`<sup>Optional</sup> <a name="PrivateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPath"></a>

```csharp
public string PrivateKeyPath { get; }
```

- *Type:* string

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol"></a>

```csharp
public string Protocol { get; }
```

- *Type:* string

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role"></a>

```csharp
public string Role { get; }
```

- *Type:* string

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse"></a>

```csharp
public string Warehouse { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnowflakeProviderConfig <a name="SnowflakeProviderConfig" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Snowflake;

new SnowflakeProviderConfig {
    string Account,
    string Username,
    string Alias = null,
    object BrowserAuth = null,
    string Host = null,
    string OauthAccessToken = null,
    string OauthClientId = null,
    string OauthClientSecret = null,
    string OauthEndpoint = null,
    string OauthRedirectUrl = null,
    string OauthRefreshToken = null,
    string Password = null,
    double Port = null,
    string PrivateKey = null,
    string PrivateKeyPassphrase = null,
    string PrivateKeyPath = null,
    string Protocol = null,
    string Region = null,
    string Role = null,
    string Warehouse = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account">Account</a></code> | <code>string</code> | The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username">Username</a></code> | <code>string</code> | Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">Alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth">BrowserAuth</a></code> | <code>object</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host">Host</a></code> | <code>string</code> | Supports passing in a custom host value to the snowflake go driver for use with privatelink. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken">OauthAccessToken</a></code> | <code>string</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId">OauthClientId</a></code> | <code>string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret">OauthClientSecret</a></code> | <code>string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint">OauthEndpoint</a></code> | <code>string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl">OauthRedirectUrl</a></code> | <code>string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken">OauthRefreshToken</a></code> | <code>string</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password">Password</a></code> | <code>string</code> | Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port">Port</a></code> | <code>double</code> | Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">PrivateKey</a></code> | <code>string</code> | Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">PrivateKeyPassphrase</a></code> | <code>string</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath">PrivateKeyPath</a></code> | <code>string</code> | Path to a private key for using keypair authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">Protocol</a></code> | <code>string</code> | Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region">Region</a></code> | <code>string</code> | [Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role">Role</a></code> | <code>string</code> | Snowflake role to use for operations. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">Warehouse</a></code> | <code>string</code> | Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable. |

---

##### `Account`<sup>Required</sup> <a name="Account" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account"></a>

```csharp
public string Account { get; set; }
```

- *Type:* string

The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#account SnowflakeProvider#account}

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#username SnowflakeProvider#username}

---

##### `Alias`<sup>Optional</sup> <a name="Alias" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```csharp
public string Alias { get; set; }
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#alias SnowflakeProvider#alias}

---

##### `BrowserAuth`<sup>Optional</sup> <a name="BrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth"></a>

```csharp
public object BrowserAuth { get; set; }
```

- *Type:* object

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#browser_auth SnowflakeProvider#browser_auth}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Supports passing in a custom host value to the snowflake go driver for use with privatelink.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#host SnowflakeProvider#host}

---

##### `OauthAccessToken`<sup>Optional</sup> <a name="OauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken"></a>

```csharp
public string OauthAccessToken { get; set; }
```

- *Type:* string

Token for use with OAuth.

Generating the token is left to other tools. Cannot be used with `browser_auth`, `private_key_path`, `oauth_refresh_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_access_token SnowflakeProvider#oauth_access_token}

---

##### `OauthClientId`<sup>Optional</sup> <a name="OauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId"></a>

```csharp
public string OauthClientId { get; set; }
```

- *Type:* string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `OauthClientSecret`<sup>Optional</sup> <a name="OauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret"></a>

```csharp
public string OauthClientSecret { get; set; }
```

- *Type:* string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `OauthEndpoint`<sup>Optional</sup> <a name="OauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint"></a>

```csharp
public string OauthEndpoint { get; set; }
```

- *Type:* string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_endpoint SnowflakeProvider#oauth_endpoint}

---

##### `OauthRedirectUrl`<sup>Optional</sup> <a name="OauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl"></a>

```csharp
public string OauthRedirectUrl { get; set; }
```

- *Type:* string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}

---

##### `OauthRefreshToken`<sup>Optional</sup> <a name="OauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken"></a>

```csharp
public string OauthRefreshToken { get; set; }
```

- *Type:* string

Token for use with OAuth.

Setup and generation of the token is left to other tools. Should be used in conjunction with `oauth_client_id`, `oauth_client_secret`, `oauth_endpoint`, `oauth_redirect_url`. Cannot be used with `browser_auth`, `private_key_path`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#password SnowflakeProvider#password}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#port SnowflakeProvider#port}

---

##### `PrivateKey`<sup>Optional</sup> <a name="PrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```csharp
public string PrivateKey { get; set; }
```

- *Type:* string

Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key SnowflakeProvider#private_key}

---

##### `PrivateKeyPassphrase`<sup>Optional</sup> <a name="PrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```csharp
public string PrivateKeyPassphrase { get; set; }
```

- *Type:* string

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `PrivateKeyPath`<sup>Optional</sup> <a name="PrivateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath"></a>

```csharp
public string PrivateKeyPath { get; set; }
```

- *Type:* string

Path to a private key for using keypair authentication.

Cannot be used with `browser_auth`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY_PATH` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#private_key_path SnowflakeProvider#private_key_path}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```csharp
public string Protocol { get; set; }
```

- *Type:* string

Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#protocol SnowflakeProvider#protocol}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

[Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#region SnowflakeProvider#region}

---

##### `Role`<sup>Optional</sup> <a name="Role" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```csharp
public string Role { get; set; }
```

- *Type:* string

Snowflake role to use for operations.

If left unset, default role for user will be used. Can be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#role SnowflakeProvider#role}

---

##### `Warehouse`<sup>Optional</sup> <a name="Warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```csharp
public string Warehouse { get; set; }
```

- *Type:* string

Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake#warehouse SnowflakeProvider#warehouse}

---



