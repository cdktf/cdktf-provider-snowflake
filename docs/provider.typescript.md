# `provider`

Refer to the Terraform Registory for docs: [`snowflake`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs).

# `provider` Submodule <a name="`provider` Submodule" id="@cdktf/provider-snowflake.provider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SnowflakeProvider <a name="SnowflakeProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs snowflake}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-snowflake'

new provider.SnowflakeProvider(scope: Construct, id: string, config?: SnowflakeProviderConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig">SnowflakeProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig">SnowflakeProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccount">resetAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias">resetAlias</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetBrowserAuth">resetBrowserAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode">resetInsecureMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAccessToken">resetOauthAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId">resetOauthClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret">resetOauthClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthEndpoint">resetOauthEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUrl">resetOauthRedirectUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRefreshToken">resetOauthRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase">resetPrivateKeyPassphrase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPath">resetPrivateKeyPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol">resetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetSessionParams">resetSessionParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUsername">resetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse">resetWarehouse</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `resetAccount` <a name="resetAccount" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAccount"></a>

```typescript
public resetAccount(): void
```

##### `resetAlias` <a name="resetAlias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetAlias"></a>

```typescript
public resetAlias(): void
```

##### `resetBrowserAuth` <a name="resetBrowserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetBrowserAuth"></a>

```typescript
public resetBrowserAuth(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetInsecureMode` <a name="resetInsecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetInsecureMode"></a>

```typescript
public resetInsecureMode(): void
```

##### `resetOauthAccessToken` <a name="resetOauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthAccessToken"></a>

```typescript
public resetOauthAccessToken(): void
```

##### `resetOauthClientId` <a name="resetOauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientId"></a>

```typescript
public resetOauthClientId(): void
```

##### `resetOauthClientSecret` <a name="resetOauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthClientSecret"></a>

```typescript
public resetOauthClientSecret(): void
```

##### `resetOauthEndpoint` <a name="resetOauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthEndpoint"></a>

```typescript
public resetOauthEndpoint(): void
```

##### `resetOauthRedirectUrl` <a name="resetOauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRedirectUrl"></a>

```typescript
public resetOauthRedirectUrl(): void
```

##### `resetOauthRefreshToken` <a name="resetOauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetOauthRefreshToken"></a>

```typescript
public resetOauthRefreshToken(): void
```

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKey"></a>

```typescript
public resetPrivateKey(): void
```

##### `resetPrivateKeyPassphrase` <a name="resetPrivateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPassphrase"></a>

```typescript
public resetPrivateKeyPassphrase(): void
```

##### `resetPrivateKeyPath` <a name="resetPrivateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetPrivateKeyPath"></a>

```typescript
public resetPrivateKeyPath(): void
```

##### `resetProfile` <a name="resetProfile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProfile"></a>

```typescript
public resetProfile(): void
```

##### `resetProtocol` <a name="resetProtocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetProtocol"></a>

```typescript
public resetProtocol(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRole` <a name="resetRole" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetRole"></a>

```typescript
public resetRole(): void
```

##### `resetSessionParams` <a name="resetSessionParams" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetSessionParams"></a>

```typescript
public resetSessionParams(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetUsername"></a>

```typescript
public resetUsername(): void
```

##### `resetWarehouse` <a name="resetWarehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.resetWarehouse"></a>

```typescript
public resetWarehouse(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider">isTerraformProvider</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isConstruct"></a>

```typescript
import { provider } from '@cdktf/provider-snowflake'

provider.SnowflakeProvider.isConstruct(x: any)
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

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement"></a>

```typescript
import { provider } from '@cdktf/provider-snowflake'

provider.SnowflakeProvider.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformProvider` <a name="isTerraformProvider" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider"></a>

```typescript
import { provider } from '@cdktf/provider-snowflake'

provider.SnowflakeProvider.isTerraformProvider(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.isTerraformProvider.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes">metaAttributes</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource">terraformProviderSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias">alias</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountInput">accountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput">aliasInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput">browserAuthInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput">insecureModeInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessTokenInput">oauthAccessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput">oauthClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput">oauthClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpointInput">oauthEndpointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrlInput">oauthRedirectUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshTokenInput">oauthRefreshTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput">privateKeyPassphraseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPathInput">privateKeyPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput">profileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput">protocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput">roleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.sessionParamsInput">sessionParamsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput">warehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.account">account</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth">browserAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode">insecureMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessToken">oauthAccessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpoint">oauthEndpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrl">oauthRedirectUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshToken">oauthRefreshToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPath">privateKeyPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile">profile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol">protocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role">role</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.sessionParams">sessionParams</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse">warehouse</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `metaAttributes`<sup>Required</sup> <a name="metaAttributes" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.metaAttributes"></a>

```typescript
public readonly metaAttributes: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `terraformProviderSource`<sup>Optional</sup> <a name="terraformProviderSource" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.terraformProviderSource"></a>

```typescript
public readonly terraformProviderSource: string;
```

- *Type:* string

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

---

##### `accountInput`<sup>Optional</sup> <a name="accountInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.accountInput"></a>

```typescript
public readonly accountInput: string;
```

- *Type:* string

---

##### `aliasInput`<sup>Optional</sup> <a name="aliasInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.aliasInput"></a>

```typescript
public readonly aliasInput: string;
```

- *Type:* string

---

##### `browserAuthInput`<sup>Optional</sup> <a name="browserAuthInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuthInput"></a>

```typescript
public readonly browserAuthInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `insecureModeInput`<sup>Optional</sup> <a name="insecureModeInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureModeInput"></a>

```typescript
public readonly insecureModeInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauthAccessTokenInput`<sup>Optional</sup> <a name="oauthAccessTokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessTokenInput"></a>

```typescript
public readonly oauthAccessTokenInput: string;
```

- *Type:* string

---

##### `oauthClientIdInput`<sup>Optional</sup> <a name="oauthClientIdInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientIdInput"></a>

```typescript
public readonly oauthClientIdInput: string;
```

- *Type:* string

---

##### `oauthClientSecretInput`<sup>Optional</sup> <a name="oauthClientSecretInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecretInput"></a>

```typescript
public readonly oauthClientSecretInput: string;
```

- *Type:* string

---

##### `oauthEndpointInput`<sup>Optional</sup> <a name="oauthEndpointInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpointInput"></a>

```typescript
public readonly oauthEndpointInput: string;
```

- *Type:* string

---

##### `oauthRedirectUrlInput`<sup>Optional</sup> <a name="oauthRedirectUrlInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrlInput"></a>

```typescript
public readonly oauthRedirectUrlInput: string;
```

- *Type:* string

---

##### `oauthRefreshTokenInput`<sup>Optional</sup> <a name="oauthRefreshTokenInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshTokenInput"></a>

```typescript
public readonly oauthRefreshTokenInput: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `privateKeyPassphraseInput`<sup>Optional</sup> <a name="privateKeyPassphraseInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphraseInput"></a>

```typescript
public readonly privateKeyPassphraseInput: string;
```

- *Type:* string

---

##### `privateKeyPathInput`<sup>Optional</sup> <a name="privateKeyPathInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPathInput"></a>

```typescript
public readonly privateKeyPathInput: string;
```

- *Type:* string

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profileInput"></a>

```typescript
public readonly profileInput: string;
```

- *Type:* string

---

##### `protocolInput`<sup>Optional</sup> <a name="protocolInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocolInput"></a>

```typescript
public readonly protocolInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.roleInput"></a>

```typescript
public readonly roleInput: string;
```

- *Type:* string

---

##### `sessionParamsInput`<sup>Optional</sup> <a name="sessionParamsInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.sessionParamsInput"></a>

```typescript
public readonly sessionParamsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouseInput"></a>

```typescript
public readonly warehouseInput: string;
```

- *Type:* string

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

---

##### `browserAuth`<sup>Optional</sup> <a name="browserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.browserAuth"></a>

```typescript
public readonly browserAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `insecureMode`<sup>Optional</sup> <a name="insecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.insecureMode"></a>

```typescript
public readonly insecureMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauthAccessToken`<sup>Optional</sup> <a name="oauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthAccessToken"></a>

```typescript
public readonly oauthAccessToken: string;
```

- *Type:* string

---

##### `oauthClientId`<sup>Optional</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

---

##### `oauthClientSecret`<sup>Optional</sup> <a name="oauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

---

##### `oauthEndpoint`<sup>Optional</sup> <a name="oauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthEndpoint"></a>

```typescript
public readonly oauthEndpoint: string;
```

- *Type:* string

---

##### `oauthRedirectUrl`<sup>Optional</sup> <a name="oauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRedirectUrl"></a>

```typescript
public readonly oauthRedirectUrl: string;
```

- *Type:* string

---

##### `oauthRefreshToken`<sup>Optional</sup> <a name="oauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.oauthRefreshToken"></a>

```typescript
public readonly oauthRefreshToken: string;
```

- *Type:* string

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

---

##### `privateKeyPath`<sup>Optional</sup> <a name="privateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.privateKeyPath"></a>

```typescript
public readonly privateKeyPath: string;
```

- *Type:* string

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

---

##### `sessionParams`<sup>Optional</sup> <a name="sessionParams" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.sessionParams"></a>

```typescript
public readonly sessionParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.provider.SnowflakeProvider.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SnowflakeProviderConfig <a name="SnowflakeProviderConfig" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.Initializer"></a>

```typescript
import { provider } from '@cdktf/provider-snowflake'

const snowflakeProviderConfig: provider.SnowflakeProviderConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account">account</a></code> | <code>string</code> | The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable. Required unless using profile. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias">alias</a></code> | <code>string</code> | Alias name. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth">browserAuth</a></code> | <code>boolean \| cdktf.IResolvable</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host">host</a></code> | <code>string</code> | Supports passing in a custom host value to the snowflake go driver for use with privatelink. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode">insecureMode</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken">oauthAccessToken</a></code> | <code>string</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId">oauthClientId</a></code> | <code>string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret">oauthClientSecret</a></code> | <code>string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint">oauthEndpoint</a></code> | <code>string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl">oauthRedirectUrl</a></code> | <code>string</code> | Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken">oauthRefreshToken</a></code> | <code>string</code> | Token for use with OAuth. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password">password</a></code> | <code>string</code> | Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port">port</a></code> | <code>number</code> | Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey">privateKey</a></code> | <code>string</code> | Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase">privateKeyPassphrase</a></code> | <code>string</code> | Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath">privateKeyPath</a></code> | <code>string</code> | Path to a private key for using keypair authentication. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile">profile</a></code> | <code>string</code> | Sets the profile to read from ~/.snowflake/config file. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol">protocol</a></code> | <code>string</code> | Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region">region</a></code> | <code>string</code> | [Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role">role</a></code> | <code>string</code> | Snowflake role to use for operations. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.sessionParams">sessionParams</a></code> | <code>{[ key: string ]: string}</code> | Sets session parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters). |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username">username</a></code> | <code>string</code> | Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable. Required unless using profile. |
| <code><a href="#@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse">warehouse</a></code> | <code>string</code> | Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable. |

---

##### `account`<sup>Optional</sup> <a name="account" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.account"></a>

```typescript
public readonly account: string;
```

- *Type:* string

The name of the Snowflake account. Can also come from the `SNOWFLAKE_ACCOUNT` environment variable. Required unless using profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#account SnowflakeProvider#account}

---

##### `alias`<sup>Optional</sup> <a name="alias" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.alias"></a>

```typescript
public readonly alias: string;
```

- *Type:* string

Alias name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#alias SnowflakeProvider#alias}

---

##### `browserAuth`<sup>Optional</sup> <a name="browserAuth" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.browserAuth"></a>

```typescript
public readonly browserAuth: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_USE_BROWSER_AUTH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#browser_auth SnowflakeProvider#browser_auth}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Supports passing in a custom host value to the snowflake go driver for use with privatelink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#host SnowflakeProvider#host}

---

##### `insecureMode`<sup>Optional</sup> <a name="insecureMode" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.insecureMode"></a>

```typescript
public readonly insecureMode: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, bypass the Online Certificate Status Protocol (OCSP) certificate revocation check.

IMPORTANT: Change the default value for testing or emergency situations only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#insecure_mode SnowflakeProvider#insecure_mode}

---

##### `oauthAccessToken`<sup>Optional</sup> <a name="oauthAccessToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthAccessToken"></a>

```typescript
public readonly oauthAccessToken: string;
```

- *Type:* string

Token for use with OAuth.

Generating the token is left to other tools. Cannot be used with `browser_auth`, `private_key_path`, `oauth_refresh_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_ACCESS_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#oauth_access_token SnowflakeProvider#oauth_access_token}

---

##### `oauthClientId`<sup>Optional</sup> <a name="oauthClientId" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientId"></a>

```typescript
public readonly oauthClientId: string;
```

- *Type:* string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_ID` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#oauth_client_id SnowflakeProvider#oauth_client_id}

---

##### `oauthClientSecret`<sup>Optional</sup> <a name="oauthClientSecret" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthClientSecret"></a>

```typescript
public readonly oauthClientSecret: string;
```

- *Type:* string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_CLIENT_SECRET` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#oauth_client_secret SnowflakeProvider#oauth_client_secret}

---

##### `oauthEndpoint`<sup>Optional</sup> <a name="oauthEndpoint" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthEndpoint"></a>

```typescript
public readonly oauthEndpoint: string;
```

- *Type:* string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_ENDPOINT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#oauth_endpoint SnowflakeProvider#oauth_endpoint}

---

##### `oauthRedirectUrl`<sup>Optional</sup> <a name="oauthRedirectUrl" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRedirectUrl"></a>

```typescript
public readonly oauthRedirectUrl: string;
```

- *Type:* string

Required when `oauth_refresh_token` is used. Can be sourced from `SNOWFLAKE_OAUTH_REDIRECT_URL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#oauth_redirect_url SnowflakeProvider#oauth_redirect_url}

---

##### `oauthRefreshToken`<sup>Optional</sup> <a name="oauthRefreshToken" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.oauthRefreshToken"></a>

```typescript
public readonly oauthRefreshToken: string;
```

- *Type:* string

Token for use with OAuth.

Setup and generation of the token is left to other tools. Should be used in conjunction with `oauth_client_id`, `oauth_client_secret`, `oauth_endpoint`, `oauth_redirect_url`. Cannot be used with `browser_auth`, `private_key_path`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_OAUTH_REFRESH_TOKEN` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#oauth_refresh_token SnowflakeProvider#oauth_refresh_token}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Password for username+password auth. Cannot be used with `browser_auth` or `private_key_path`. Can be sourced from `SNOWFLAKE_PASSWORD` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#password SnowflakeProvider#password}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

Support custom port values to snowflake go driver for use with privatelink. Can be sourced from `SNOWFLAKE_PORT` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#port SnowflakeProvider#port}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Private Key for username+private-key auth. Cannot be used with `browser_auth` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#private_key SnowflakeProvider#private_key}

---

##### `privateKeyPassphrase`<sup>Optional</sup> <a name="privateKeyPassphrase" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPassphrase"></a>

```typescript
public readonly privateKeyPassphrase: string;
```

- *Type:* string

Supports the encryption ciphers aes-128-cbc, aes-128-gcm, aes-192-cbc, aes-192-gcm, aes-256-cbc, aes-256-gcm, and des-ede3-cbc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#private_key_passphrase SnowflakeProvider#private_key_passphrase}

---

##### `privateKeyPath`<sup>Optional</sup> <a name="privateKeyPath" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.privateKeyPath"></a>

```typescript
public readonly privateKeyPath: string;
```

- *Type:* string

Path to a private key for using keypair authentication.

Cannot be used with `browser_auth`, `oauth_access_token` or `password`. Can be sourced from `SNOWFLAKE_PRIVATE_KEY_PATH` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#private_key_path SnowflakeProvider#private_key_path}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.profile"></a>

```typescript
public readonly profile: string;
```

- *Type:* string

Sets the profile to read from ~/.snowflake/config file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#profile SnowflakeProvider#profile}

---

##### `protocol`<sup>Optional</sup> <a name="protocol" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.protocol"></a>

```typescript
public readonly protocol: string;
```

- *Type:* string

Support custom protocols to snowflake go driver. Can be sourced from `SNOWFLAKE_PROTOCOL` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#protocol SnowflakeProvider#protocol}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

[Snowflake region](https://docs.snowflake.com/en/user-guide/intro-regions.html) to use.  Required if using the [legacy format for the `account` identifier](https://docs.snowflake.com/en/user-guide/admin-account-identifier.html#format-2-legacy-account-locator-in-a-region) in the form of `<cloud_region_id>.<cloud>`. Can be sourced from the `SNOWFLAKE_REGION` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#region SnowflakeProvider#region}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.role"></a>

```typescript
public readonly role: string;
```

- *Type:* string

Snowflake role to use for operations.

If left unset, default role for user will be used. Can be sourced from the `SNOWFLAKE_ROLE` environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#role SnowflakeProvider#role}

---

##### `sessionParams`<sup>Optional</sup> <a name="sessionParams" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.sessionParams"></a>

```typescript
public readonly sessionParams: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Sets session parameters. [Parameters](https://docs.snowflake.com/en/sql-reference/parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#session_params SnowflakeProvider#session_params}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Username for username+password authentication. Can come from the `SNOWFLAKE_USER` environment variable. Required unless using profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#username SnowflakeProvider#username}

---

##### `warehouse`<sup>Optional</sup> <a name="warehouse" id="@cdktf/provider-snowflake.provider.SnowflakeProviderConfig.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

Sets the default warehouse. Optional. Can be sourced from SNOWFLAKE_WAREHOUSE environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.70.1/docs#warehouse SnowflakeProvider#warehouse}

---



