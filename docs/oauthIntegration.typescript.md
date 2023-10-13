# `snowflake_oauth_integration`

Refer to the Terraform Registory for docs: [`snowflake_oauth_integration`](https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration).

# `oauthIntegration` Submodule <a name="`oauthIntegration` Submodule" id="@cdktf/provider-snowflake.oauthIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OauthIntegration <a name="OauthIntegration" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration snowflake_oauth_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer"></a>

```typescript
import { oauthIntegration } from '@cdktf/provider-snowflake'

new oauthIntegration.OauthIntegration(scope: Construct, id: string, config: OauthIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig">OauthIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig">OauthIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetBlockedRolesList">resetBlockedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthClientType">resetOauthClientType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthIssueRefreshTokens">resetOauthIssueRefreshTokens</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRedirectUri">resetOauthRedirectUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRefreshTokenValidity">resetOauthRefreshTokenValidity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthUseSecondaryRoles">resetOauthUseSecondaryRoles</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetBlockedRolesList` <a name="resetBlockedRolesList" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetBlockedRolesList"></a>

```typescript
public resetBlockedRolesList(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOauthClientType` <a name="resetOauthClientType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthClientType"></a>

```typescript
public resetOauthClientType(): void
```

##### `resetOauthIssueRefreshTokens` <a name="resetOauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthIssueRefreshTokens"></a>

```typescript
public resetOauthIssueRefreshTokens(): void
```

##### `resetOauthRedirectUri` <a name="resetOauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRedirectUri"></a>

```typescript
public resetOauthRedirectUri(): void
```

##### `resetOauthRefreshTokenValidity` <a name="resetOauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthRefreshTokenValidity"></a>

```typescript
public resetOauthRefreshTokenValidity(): void
```

##### `resetOauthUseSecondaryRoles` <a name="resetOauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.resetOauthUseSecondaryRoles"></a>

```typescript
public resetOauthUseSecondaryRoles(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isConstruct"></a>

```typescript
import { oauthIntegration } from '@cdktf/provider-snowflake'

oauthIntegration.OauthIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformElement"></a>

```typescript
import { oauthIntegration } from '@cdktf/provider-snowflake'

oauthIntegration.OauthIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformResource"></a>

```typescript
import { oauthIntegration } from '@cdktf/provider-snowflake'

oauthIntegration.OauthIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesListInput">blockedRolesListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientInput">oauthClientInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientTypeInput">oauthClientTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokensInput">oauthIssueRefreshTokensInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUriInput">oauthRedirectUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidityInput">oauthRefreshTokenValidityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRolesInput">oauthUseSecondaryRolesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesList">blockedRolesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClient">oauthClient</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientType">oauthClientType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokens">oauthIssueRefreshTokens</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUri">oauthRedirectUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRoles">oauthUseSecondaryRoles</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `blockedRolesListInput`<sup>Optional</sup> <a name="blockedRolesListInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesListInput"></a>

```typescript
public readonly blockedRolesListInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `oauthClientInput`<sup>Optional</sup> <a name="oauthClientInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientInput"></a>

```typescript
public readonly oauthClientInput: string;
```

- *Type:* string

---

##### `oauthClientTypeInput`<sup>Optional</sup> <a name="oauthClientTypeInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientTypeInput"></a>

```typescript
public readonly oauthClientTypeInput: string;
```

- *Type:* string

---

##### `oauthIssueRefreshTokensInput`<sup>Optional</sup> <a name="oauthIssueRefreshTokensInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokensInput"></a>

```typescript
public readonly oauthIssueRefreshTokensInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauthRedirectUriInput`<sup>Optional</sup> <a name="oauthRedirectUriInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUriInput"></a>

```typescript
public readonly oauthRedirectUriInput: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidityInput`<sup>Optional</sup> <a name="oauthRefreshTokenValidityInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidityInput"></a>

```typescript
public readonly oauthRefreshTokenValidityInput: number;
```

- *Type:* number

---

##### `oauthUseSecondaryRolesInput`<sup>Optional</sup> <a name="oauthUseSecondaryRolesInput" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRolesInput"></a>

```typescript
public readonly oauthUseSecondaryRolesInput: string;
```

- *Type:* string

---

##### `blockedRolesList`<sup>Required</sup> <a name="blockedRolesList" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.blockedRolesList"></a>

```typescript
public readonly blockedRolesList: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `oauthClient`<sup>Required</sup> <a name="oauthClient" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClient"></a>

```typescript
public readonly oauthClient: string;
```

- *Type:* string

---

##### `oauthClientType`<sup>Required</sup> <a name="oauthClientType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthClientType"></a>

```typescript
public readonly oauthClientType: string;
```

- *Type:* string

---

##### `oauthIssueRefreshTokens`<sup>Required</sup> <a name="oauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthIssueRefreshTokens"></a>

```typescript
public readonly oauthIssueRefreshTokens: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauthRedirectUri`<sup>Required</sup> <a name="oauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRedirectUri"></a>

```typescript
public readonly oauthRedirectUri: string;
```

- *Type:* string

---

##### `oauthRefreshTokenValidity`<sup>Required</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

---

##### `oauthUseSecondaryRoles`<sup>Required</sup> <a name="oauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.oauthUseSecondaryRoles"></a>

```typescript
public readonly oauthUseSecondaryRoles: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OauthIntegrationConfig <a name="OauthIntegrationConfig" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.Initializer"></a>

```typescript
import { oauthIntegration } from '@cdktf/provider-snowflake'

const oauthIntegrationConfig: oauthIntegration.OauthIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClient">oauthClient</a></code> | <code>string</code> | Specifies the OAuth client type. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.blockedRolesList">blockedRolesList</a></code> | <code>string[]</code> | List of roles that a user cannot explicitly consent to using after authenticating. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether this OAuth integration is enabled or disabled. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#id OauthIntegration#id}. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClientType">oauthClientType</a></code> | <code>string</code> | Specifies the type of client being registered. Snowflake supports both confidential and public clients. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthIssueRefreshTokens">oauthIssueRefreshTokens</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRedirectUri">oauthRedirectUri</a></code> | <code>string</code> | Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRefreshTokenValidity">oauthRefreshTokenValidity</a></code> | <code>number</code> | Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE. |
| <code><a href="#@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthUseSecondaryRoles">oauthUseSecondaryRoles</a></code> | <code>string</code> | Specifies whether default secondary roles set in the user properties are activated by default in the session being opened. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the OAuth integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#name OauthIntegration#name}

---

##### `oauthClient`<sup>Required</sup> <a name="oauthClient" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClient"></a>

```typescript
public readonly oauthClient: string;
```

- *Type:* string

Specifies the OAuth client type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_client OauthIntegration#oauth_client}

---

##### `blockedRolesList`<sup>Optional</sup> <a name="blockedRolesList" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.blockedRolesList"></a>

```typescript
public readonly blockedRolesList: string[];
```

- *Type:* string[]

List of roles that a user cannot explicitly consent to using after authenticating.

Do not include ACCOUNTADMIN, ORGADMIN or SECURITYADMIN as they are already implicitly enforced and will cause in-place updates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#blocked_roles_list OauthIntegration#blocked_roles_list}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#comment OauthIntegration#comment}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether this OAuth integration is enabled or disabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#enabled OauthIntegration#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#id OauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `oauthClientType`<sup>Optional</sup> <a name="oauthClientType" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthClientType"></a>

```typescript
public readonly oauthClientType: string;
```

- *Type:* string

Specifies the type of client being registered. Snowflake supports both confidential and public clients.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_client_type OauthIntegration#oauth_client_type}

---

##### `oauthIssueRefreshTokens`<sup>Optional</sup> <a name="oauthIssueRefreshTokens" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthIssueRefreshTokens"></a>

```typescript
public readonly oauthIssueRefreshTokens: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to allow the client to exchange a refresh token for an access token when the current access token has expired.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_issue_refresh_tokens OauthIntegration#oauth_issue_refresh_tokens}

---

##### `oauthRedirectUri`<sup>Optional</sup> <a name="oauthRedirectUri" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRedirectUri"></a>

```typescript
public readonly oauthRedirectUri: string;
```

- *Type:* string

Specifies the client URI. After a user is authenticated, the web browser is redirected to this URI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_redirect_uri OauthIntegration#oauth_redirect_uri}

---

##### `oauthRefreshTokenValidity`<sup>Optional</sup> <a name="oauthRefreshTokenValidity" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthRefreshTokenValidity"></a>

```typescript
public readonly oauthRefreshTokenValidity: number;
```

- *Type:* number

Specifies how long refresh tokens should be valid (in seconds). OAUTH_ISSUE_REFRESH_TOKENS must be set to TRUE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_refresh_token_validity OauthIntegration#oauth_refresh_token_validity}

---

##### `oauthUseSecondaryRoles`<sup>Optional</sup> <a name="oauthUseSecondaryRoles" id="@cdktf/provider-snowflake.oauthIntegration.OauthIntegrationConfig.property.oauthUseSecondaryRoles"></a>

```typescript
public readonly oauthUseSecondaryRoles: string;
```

- *Type:* string

Specifies whether default secondary roles set in the user properties are activated by default in the session being opened.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.73.0/docs/resources/oauth_integration#oauth_use_secondary_roles OauthIntegration#oauth_use_secondary_roles}

---



