# `externalOauthIntegration` Submodule <a name="`externalOauthIntegration` Submodule" id="@cdktf/provider-snowflake.externalOauthIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ExternalOauthIntegration <a name="ExternalOauthIntegration" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration snowflake_external_oauth_integration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegration(scope: Construct, id: string, config: ExternalOauthIntegrationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig">ExternalOauthIntegrationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig">ExternalOauthIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAllowedRolesList">resetExternalOauthAllowedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAnyRoleMode">resetExternalOauthAnyRoleMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAudienceList">resetExternalOauthAudienceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthBlockedRolesList">resetExternalOauthBlockedRolesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthJwsKeysUrl">resetExternalOauthJwsKeysUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthRsaPublicKey">resetExternalOauthRsaPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthRsaPublicKey2">resetExternalOauthRsaPublicKey2</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthScopeDelimiter">resetExternalOauthScopeDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthScopeMappingAttribute">resetExternalOauthScopeMappingAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetExternalOauthAllowedRolesList` <a name="resetExternalOauthAllowedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAllowedRolesList"></a>

```typescript
public resetExternalOauthAllowedRolesList(): void
```

##### `resetExternalOauthAnyRoleMode` <a name="resetExternalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAnyRoleMode"></a>

```typescript
public resetExternalOauthAnyRoleMode(): void
```

##### `resetExternalOauthAudienceList` <a name="resetExternalOauthAudienceList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthAudienceList"></a>

```typescript
public resetExternalOauthAudienceList(): void
```

##### `resetExternalOauthBlockedRolesList` <a name="resetExternalOauthBlockedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthBlockedRolesList"></a>

```typescript
public resetExternalOauthBlockedRolesList(): void
```

##### `resetExternalOauthJwsKeysUrl` <a name="resetExternalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthJwsKeysUrl"></a>

```typescript
public resetExternalOauthJwsKeysUrl(): void
```

##### `resetExternalOauthRsaPublicKey` <a name="resetExternalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthRsaPublicKey"></a>

```typescript
public resetExternalOauthRsaPublicKey(): void
```

##### `resetExternalOauthRsaPublicKey2` <a name="resetExternalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthRsaPublicKey2"></a>

```typescript
public resetExternalOauthRsaPublicKey2(): void
```

##### `resetExternalOauthScopeDelimiter` <a name="resetExternalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthScopeDelimiter"></a>

```typescript
public resetExternalOauthScopeDelimiter(): void
```

##### `resetExternalOauthScopeMappingAttribute` <a name="resetExternalOauthScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetExternalOauthScopeMappingAttribute"></a>

```typescript
public resetExternalOauthScopeMappingAttribute(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a ExternalOauthIntegration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

externalOauthIntegration.ExternalOauthIntegration.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

externalOauthIntegration.ExternalOauthIntegration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

externalOauthIntegration.ExternalOauthIntegration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a ExternalOauthIntegration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ExternalOauthIntegration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ExternalOauthIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the ExternalOauthIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList">ExternalOauthIntegrationDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.relatedParameters">relatedParameters</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList">ExternalOauthIntegrationRelatedParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList">ExternalOauthIntegrationShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAllowedRolesListInput">externalOauthAllowedRolesListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAnyRoleModeInput">externalOauthAnyRoleModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAudienceListInput">externalOauthAudienceListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthBlockedRolesListInput">externalOauthBlockedRolesListInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthIssuerInput">externalOauthIssuerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthJwsKeysUrlInput">externalOauthJwsKeysUrlInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey2Input">externalOauthRsaPublicKey2Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKeyInput">externalOauthRsaPublicKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeDelimiterInput">externalOauthScopeDelimiterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeMappingAttributeInput">externalOauthScopeMappingAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthSnowflakeUserMappingAttributeInput">externalOauthSnowflakeUserMappingAttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTokenUserMappingClaimInput">externalOauthTokenUserMappingClaimInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTypeInput">externalOauthTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAllowedRolesList">externalOauthAllowedRolesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAnyRoleMode">externalOauthAnyRoleMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAudienceList">externalOauthAudienceList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthBlockedRolesList">externalOauthBlockedRolesList</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthIssuer">externalOauthIssuer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthJwsKeysUrl">externalOauthJwsKeysUrl</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey">externalOauthRsaPublicKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey2">externalOauthRsaPublicKey2</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeDelimiter">externalOauthScopeDelimiter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeMappingAttribute">externalOauthScopeMappingAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthSnowflakeUserMappingAttribute">externalOauthSnowflakeUserMappingAttribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTokenUserMappingClaim">externalOauthTokenUserMappingClaim</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthType">externalOauthType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name">name</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.describeOutput"></a>

```typescript
public readonly describeOutput: ExternalOauthIntegrationDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList">ExternalOauthIntegrationDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `relatedParameters`<sup>Required</sup> <a name="relatedParameters" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.relatedParameters"></a>

```typescript
public readonly relatedParameters: ExternalOauthIntegrationRelatedParametersList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList">ExternalOauthIntegrationRelatedParametersList</a>

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.showOutput"></a>

```typescript
public readonly showOutput: ExternalOauthIntegrationShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList">ExternalOauthIntegrationShowOutputList</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalOauthAllowedRolesListInput`<sup>Optional</sup> <a name="externalOauthAllowedRolesListInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAllowedRolesListInput"></a>

```typescript
public readonly externalOauthAllowedRolesListInput: string[];
```

- *Type:* string[]

---

##### `externalOauthAnyRoleModeInput`<sup>Optional</sup> <a name="externalOauthAnyRoleModeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAnyRoleModeInput"></a>

```typescript
public readonly externalOauthAnyRoleModeInput: string;
```

- *Type:* string

---

##### `externalOauthAudienceListInput`<sup>Optional</sup> <a name="externalOauthAudienceListInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAudienceListInput"></a>

```typescript
public readonly externalOauthAudienceListInput: string[];
```

- *Type:* string[]

---

##### `externalOauthBlockedRolesListInput`<sup>Optional</sup> <a name="externalOauthBlockedRolesListInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthBlockedRolesListInput"></a>

```typescript
public readonly externalOauthBlockedRolesListInput: string[];
```

- *Type:* string[]

---

##### `externalOauthIssuerInput`<sup>Optional</sup> <a name="externalOauthIssuerInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthIssuerInput"></a>

```typescript
public readonly externalOauthIssuerInput: string;
```

- *Type:* string

---

##### `externalOauthJwsKeysUrlInput`<sup>Optional</sup> <a name="externalOauthJwsKeysUrlInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthJwsKeysUrlInput"></a>

```typescript
public readonly externalOauthJwsKeysUrlInput: string[];
```

- *Type:* string[]

---

##### `externalOauthRsaPublicKey2Input`<sup>Optional</sup> <a name="externalOauthRsaPublicKey2Input" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey2Input"></a>

```typescript
public readonly externalOauthRsaPublicKey2Input: string;
```

- *Type:* string

---

##### `externalOauthRsaPublicKeyInput`<sup>Optional</sup> <a name="externalOauthRsaPublicKeyInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKeyInput"></a>

```typescript
public readonly externalOauthRsaPublicKeyInput: string;
```

- *Type:* string

---

##### `externalOauthScopeDelimiterInput`<sup>Optional</sup> <a name="externalOauthScopeDelimiterInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeDelimiterInput"></a>

```typescript
public readonly externalOauthScopeDelimiterInput: string;
```

- *Type:* string

---

##### `externalOauthScopeMappingAttributeInput`<sup>Optional</sup> <a name="externalOauthScopeMappingAttributeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeMappingAttributeInput"></a>

```typescript
public readonly externalOauthScopeMappingAttributeInput: string;
```

- *Type:* string

---

##### `externalOauthSnowflakeUserMappingAttributeInput`<sup>Optional</sup> <a name="externalOauthSnowflakeUserMappingAttributeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthSnowflakeUserMappingAttributeInput"></a>

```typescript
public readonly externalOauthSnowflakeUserMappingAttributeInput: string;
```

- *Type:* string

---

##### `externalOauthTokenUserMappingClaimInput`<sup>Optional</sup> <a name="externalOauthTokenUserMappingClaimInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTokenUserMappingClaimInput"></a>

```typescript
public readonly externalOauthTokenUserMappingClaimInput: string[];
```

- *Type:* string[]

---

##### `externalOauthTypeInput`<sup>Optional</sup> <a name="externalOauthTypeInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTypeInput"></a>

```typescript
public readonly externalOauthTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `externalOauthAllowedRolesList`<sup>Required</sup> <a name="externalOauthAllowedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAllowedRolesList"></a>

```typescript
public readonly externalOauthAllowedRolesList: string[];
```

- *Type:* string[]

---

##### `externalOauthAnyRoleMode`<sup>Required</sup> <a name="externalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAnyRoleMode"></a>

```typescript
public readonly externalOauthAnyRoleMode: string;
```

- *Type:* string

---

##### `externalOauthAudienceList`<sup>Required</sup> <a name="externalOauthAudienceList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthAudienceList"></a>

```typescript
public readonly externalOauthAudienceList: string[];
```

- *Type:* string[]

---

##### `externalOauthBlockedRolesList`<sup>Required</sup> <a name="externalOauthBlockedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthBlockedRolesList"></a>

```typescript
public readonly externalOauthBlockedRolesList: string[];
```

- *Type:* string[]

---

##### `externalOauthIssuer`<sup>Required</sup> <a name="externalOauthIssuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthIssuer"></a>

```typescript
public readonly externalOauthIssuer: string;
```

- *Type:* string

---

##### `externalOauthJwsKeysUrl`<sup>Required</sup> <a name="externalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthJwsKeysUrl"></a>

```typescript
public readonly externalOauthJwsKeysUrl: string[];
```

- *Type:* string[]

---

##### `externalOauthRsaPublicKey`<sup>Required</sup> <a name="externalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey"></a>

```typescript
public readonly externalOauthRsaPublicKey: string;
```

- *Type:* string

---

##### `externalOauthRsaPublicKey2`<sup>Required</sup> <a name="externalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthRsaPublicKey2"></a>

```typescript
public readonly externalOauthRsaPublicKey2: string;
```

- *Type:* string

---

##### `externalOauthScopeDelimiter`<sup>Required</sup> <a name="externalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeDelimiter"></a>

```typescript
public readonly externalOauthScopeDelimiter: string;
```

- *Type:* string

---

##### `externalOauthScopeMappingAttribute`<sup>Required</sup> <a name="externalOauthScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthScopeMappingAttribute"></a>

```typescript
public readonly externalOauthScopeMappingAttribute: string;
```

- *Type:* string

---

##### `externalOauthSnowflakeUserMappingAttribute`<sup>Required</sup> <a name="externalOauthSnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthSnowflakeUserMappingAttribute"></a>

```typescript
public readonly externalOauthSnowflakeUserMappingAttribute: string;
```

- *Type:* string

---

##### `externalOauthTokenUserMappingClaim`<sup>Required</sup> <a name="externalOauthTokenUserMappingClaim" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthTokenUserMappingClaim"></a>

```typescript
public readonly externalOauthTokenUserMappingClaim: string[];
```

- *Type:* string[]

---

##### `externalOauthType`<sup>Required</sup> <a name="externalOauthType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.externalOauthType"></a>

```typescript
public readonly externalOauthType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ExternalOauthIntegrationConfig <a name="ExternalOauthIntegrationConfig" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationConfig: externalOauthIntegration.ExternalOauthIntegrationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether to initiate operation of the integration or suspend it. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthIssuer">externalOauthIssuer</a></code> | <code>string</code> | Specifies the URL to define the OAuth 2.0 authorization server. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthSnowflakeUserMappingAttribute">externalOauthSnowflakeUserMappingAttribute</a></code> | <code>string</code> | Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthTokenUserMappingClaim">externalOauthTokenUserMappingClaim</a></code> | <code>string[]</code> | Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthType">externalOauthType</a></code> | <code>string</code> | Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. Valid values are (case-insensitive): `OKTA` \| `AZURE` \| `PING_FEDERATE` \| `CUSTOM`. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name">name</a></code> | <code>string</code> | Specifies the name of the External Oath integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the OAuth integration. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAllowedRolesList">externalOauthAllowedRolesList</a></code> | <code>string[]</code> | Specifies the list of roles that the client can set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAnyRoleMode">externalOauthAnyRoleMode</a></code> | <code>string</code> | Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAudienceList">externalOauthAudienceList</a></code> | <code>string[]</code> | Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthBlockedRolesList">externalOauthBlockedRolesList</a></code> | <code>string[]</code> | Specifies the list of roles that a client cannot set as the primary role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthJwsKeysUrl">externalOauthJwsKeysUrl</a></code> | <code>string[]</code> | Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthRsaPublicKey">externalOauthRsaPublicKey</a></code> | <code>string</code> | Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthRsaPublicKey2">externalOauthRsaPublicKey2</a></code> | <code>string</code> | Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthScopeDelimiter">externalOauthScopeDelimiter</a></code> | <code>string</code> | Specifies the scope delimiter in the authorization token. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthScopeMappingAttribute">externalOauthScopeMappingAttribute</a></code> | <code>string</code> | Specifies the access token claim to map the access token to an account role. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether to initiate operation of the integration or suspend it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#enabled ExternalOauthIntegration#enabled}

---

##### `externalOauthIssuer`<sup>Required</sup> <a name="externalOauthIssuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthIssuer"></a>

```typescript
public readonly externalOauthIssuer: string;
```

- *Type:* string

Specifies the URL to define the OAuth 2.0 authorization server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_issuer ExternalOauthIntegration#external_oauth_issuer}

---

##### `externalOauthSnowflakeUserMappingAttribute`<sup>Required</sup> <a name="externalOauthSnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthSnowflakeUserMappingAttribute"></a>

```typescript
public readonly externalOauthSnowflakeUserMappingAttribute: string;
```

- *Type:* string

Indicates which Snowflake user record attribute should be used to map the access token to a Snowflake user record.

Valid values are (case-insensitive): `LOGIN_NAME` | `EMAIL_ADDRESS`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_snowflake_user_mapping_attribute ExternalOauthIntegration#external_oauth_snowflake_user_mapping_attribute}

---

##### `externalOauthTokenUserMappingClaim`<sup>Required</sup> <a name="externalOauthTokenUserMappingClaim" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthTokenUserMappingClaim"></a>

```typescript
public readonly externalOauthTokenUserMappingClaim: string[];
```

- *Type:* string[]

Specifies the access token claim or claims that can be used to map the access token to a Snowflake user record.

If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_token_user_mapping_claim ExternalOauthIntegration#external_oauth_token_user_mapping_claim}

---

##### `externalOauthType`<sup>Required</sup> <a name="externalOauthType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthType"></a>

```typescript
public readonly externalOauthType: string;
```

- *Type:* string

Specifies the OAuth 2.0 authorization server to be Okta, Microsoft Azure AD, Ping Identity PingFederate, or a Custom OAuth 2.0 authorization server. Valid values are (case-insensitive): `OKTA` | `AZURE` | `PING_FEDERATE` | `CUSTOM`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_type ExternalOauthIntegration#external_oauth_type}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the name of the External Oath integration.

This name follows the rules for Object Identifiers. The name should be unique among security integrations in your account. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#name ExternalOauthIntegration#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the OAuth integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#comment ExternalOauthIntegration#comment}

---

##### `externalOauthAllowedRolesList`<sup>Optional</sup> <a name="externalOauthAllowedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAllowedRolesList"></a>

```typescript
public readonly externalOauthAllowedRolesList: string[];
```

- *Type:* string[]

Specifies the list of roles that the client can set as the primary role.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_allowed_roles_list ExternalOauthIntegration#external_oauth_allowed_roles_list}

---

##### `externalOauthAnyRoleMode`<sup>Optional</sup> <a name="externalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAnyRoleMode"></a>

```typescript
public readonly externalOauthAnyRoleMode: string;
```

- *Type:* string

Specifies whether the OAuth client or user can use a role that is not defined in the OAuth access token.

Valid values are (case-insensitive): `DISABLE` | `ENABLE` | `ENABLE_FOR_PRIVILEGE`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_any_role_mode ExternalOauthIntegration#external_oauth_any_role_mode}

---

##### `externalOauthAudienceList`<sup>Optional</sup> <a name="externalOauthAudienceList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthAudienceList"></a>

```typescript
public readonly externalOauthAudienceList: string[];
```

- *Type:* string[]

Specifies additional values that can be used for the access token's audience validation on top of using the Customer's Snowflake Account URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_audience_list ExternalOauthIntegration#external_oauth_audience_list}

---

##### `externalOauthBlockedRolesList`<sup>Optional</sup> <a name="externalOauthBlockedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthBlockedRolesList"></a>

```typescript
public readonly externalOauthBlockedRolesList: string[];
```

- *Type:* string[]

Specifies the list of roles that a client cannot set as the primary role.

By default, this list includes the ACCOUNTADMIN, ORGADMIN and SECURITYADMIN roles. To remove these privileged roles from the list, use the ALTER ACCOUNT command to set the EXTERNAL_OAUTH_ADD_PRIVILEGED_ROLES_TO_BLOCKED_LIST account parameter to FALSE. For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_blocked_roles_list ExternalOauthIntegration#external_oauth_blocked_roles_list}

---

##### `externalOauthJwsKeysUrl`<sup>Optional</sup> <a name="externalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthJwsKeysUrl"></a>

```typescript
public readonly externalOauthJwsKeysUrl: string[];
```

- *Type:* string[]

Specifies the endpoint or a list of endpoints from which to download public keys or certificates to validate an External OAuth access token.

The maximum number of URLs that can be specified in the list is 3. If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_jws_keys_url ExternalOauthIntegration#external_oauth_jws_keys_url}

---

##### `externalOauthRsaPublicKey`<sup>Optional</sup> <a name="externalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthRsaPublicKey"></a>

```typescript
public readonly externalOauthRsaPublicKey: string;
```

- *Type:* string

Specifies a Base64-encoded RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_rsa_public_key ExternalOauthIntegration#external_oauth_rsa_public_key}

---

##### `externalOauthRsaPublicKey2`<sup>Optional</sup> <a name="externalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthRsaPublicKey2"></a>

```typescript
public readonly externalOauthRsaPublicKey2: string;
```

- *Type:* string

Specifies a second RSA public key, without the -----BEGIN PUBLIC KEY----- and -----END PUBLIC KEY----- headers.

Used for key rotation. If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_rsa_public_key_2 ExternalOauthIntegration#external_oauth_rsa_public_key_2}

---

##### `externalOauthScopeDelimiter`<sup>Optional</sup> <a name="externalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthScopeDelimiter"></a>

```typescript
public readonly externalOauthScopeDelimiter: string;
```

- *Type:* string

Specifies the scope delimiter in the authorization token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_scope_delimiter ExternalOauthIntegration#external_oauth_scope_delimiter}

---

##### `externalOauthScopeMappingAttribute`<sup>Optional</sup> <a name="externalOauthScopeMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.externalOauthScopeMappingAttribute"></a>

```typescript
public readonly externalOauthScopeMappingAttribute: string;
```

- *Type:* string

Specifies the access token claim to map the access token to an account role.

If removed from the config, the resource is recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#external_oauth_scope_mapping_attribute ExternalOauthIntegration#external_oauth_scope_mapping_attribute}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/external_oauth_integration#id ExternalOauthIntegration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### ExternalOauthIntegrationDescribeOutput <a name="ExternalOauthIntegrationDescribeOutput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutput.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutput: externalOauthIntegration.ExternalOauthIntegrationDescribeOutput = { ... }
```


### ExternalOauthIntegrationDescribeOutputComment <a name="ExternalOauthIntegrationDescribeOutputComment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputComment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputComment.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputComment: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputComment = { ... }
```


### ExternalOauthIntegrationDescribeOutputEnabled <a name="ExternalOauthIntegrationDescribeOutputEnabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabled"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabled.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputEnabled: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabled = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct <a name="ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthIssuer <a name="ExternalOauthIntegrationDescribeOutputExternalOauthIssuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthIssuer: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl <a name="ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2 <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2 = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter <a name="ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute <a name="ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute = { ... }
```


### ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim <a name="ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim: externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim = { ... }
```


### ExternalOauthIntegrationRelatedParameters <a name="ExternalOauthIntegrationRelatedParameters" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParameters.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationRelatedParameters: externalOauthIntegration.ExternalOauthIntegrationRelatedParameters = { ... }
```


### ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct <a name="ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct: externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct = { ... }
```


### ExternalOauthIntegrationShowOutput <a name="ExternalOauthIntegrationShowOutput" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutput.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

const externalOauthIntegrationShowOutput: externalOauthIntegration.ExternalOauthIntegrationShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### ExternalOauthIntegrationDescribeOutputCommentList <a name="ExternalOauthIntegrationDescribeOutputCommentList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputCommentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputCommentOutputReference <a name="ExternalOauthIntegrationDescribeOutputCommentOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputComment">ExternalOauthIntegrationDescribeOutputComment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputComment;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputComment">ExternalOauthIntegrationDescribeOutputComment</a>

---


### ExternalOauthIntegrationDescribeOutputEnabledList <a name="ExternalOauthIntegrationDescribeOutputEnabledList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputEnabledOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputEnabledOutputReference <a name="ExternalOauthIntegrationDescribeOutputEnabledOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabled">ExternalOauthIntegrationDescribeOutputEnabled</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputEnabled;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabled">ExternalOauthIntegrationDescribeOutputEnabled</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStruct</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode">ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode">ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleMode</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStruct</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct">ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStruct</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer">ExternalOauthIntegrationDescribeOutputExternalOauthIssuer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthIssuer;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuer">ExternalOauthIntegrationDescribeOutputExternalOauthIssuer</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl">ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl">ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrl</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2OutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter">ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter">ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiter</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute">ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute">ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttribute</a>

---


### ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList <a name="ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference <a name="ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim">ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim">ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaim</a>

---


### ExternalOauthIntegrationDescribeOutputList <a name="ExternalOauthIntegrationDescribeOutputList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationDescribeOutputOutputReference <a name="ExternalOauthIntegrationDescribeOutputOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.comment">comment</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList">ExternalOauthIntegrationDescribeOutputCommentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.enabled">enabled</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList">ExternalOauthIntegrationDescribeOutputEnabledList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAllowedRolesList">externalOauthAllowedRolesList</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAnyRoleMode">externalOauthAnyRoleMode</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList">ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAudienceList">externalOauthAudienceList</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthBlockedRolesList">externalOauthBlockedRolesList</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthIssuer">externalOauthIssuer</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList">ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthJwsKeysUrl">externalOauthJwsKeysUrl</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList">ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthRsaPublicKey">externalOauthRsaPublicKey</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthRsaPublicKey2">externalOauthRsaPublicKey2</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthScopeDelimiter">externalOauthScopeDelimiter</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList">ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthSnowflakeUserMappingAttribute">externalOauthSnowflakeUserMappingAttribute</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList">ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthTokenUserMappingClaim">externalOauthTokenUserMappingClaim</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList">ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutput">ExternalOauthIntegrationDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: ExternalOauthIntegrationDescribeOutputCommentList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputCommentList">ExternalOauthIntegrationDescribeOutputCommentList</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: ExternalOauthIntegrationDescribeOutputEnabledList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputEnabledList">ExternalOauthIntegrationDescribeOutputEnabledList</a>

---

##### `externalOauthAllowedRolesList`<sup>Required</sup> <a name="externalOauthAllowedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAllowedRolesList"></a>

```typescript
public readonly externalOauthAllowedRolesList: ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthAllowedRolesListStructList</a>

---

##### `externalOauthAnyRoleMode`<sup>Required</sup> <a name="externalOauthAnyRoleMode" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAnyRoleMode"></a>

```typescript
public readonly externalOauthAnyRoleMode: ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList">ExternalOauthIntegrationDescribeOutputExternalOauthAnyRoleModeList</a>

---

##### `externalOauthAudienceList`<sup>Required</sup> <a name="externalOauthAudienceList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthAudienceList"></a>

```typescript
public readonly externalOauthAudienceList: ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthAudienceListStructList</a>

---

##### `externalOauthBlockedRolesList`<sup>Required</sup> <a name="externalOauthBlockedRolesList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthBlockedRolesList"></a>

```typescript
public readonly externalOauthBlockedRolesList: ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList">ExternalOauthIntegrationDescribeOutputExternalOauthBlockedRolesListStructList</a>

---

##### `externalOauthIssuer`<sup>Required</sup> <a name="externalOauthIssuer" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthIssuer"></a>

```typescript
public readonly externalOauthIssuer: ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList">ExternalOauthIntegrationDescribeOutputExternalOauthIssuerList</a>

---

##### `externalOauthJwsKeysUrl`<sup>Required</sup> <a name="externalOauthJwsKeysUrl" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthJwsKeysUrl"></a>

```typescript
public readonly externalOauthJwsKeysUrl: ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList">ExternalOauthIntegrationDescribeOutputExternalOauthJwsKeysUrlList</a>

---

##### `externalOauthRsaPublicKey`<sup>Required</sup> <a name="externalOauthRsaPublicKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthRsaPublicKey"></a>

```typescript
public readonly externalOauthRsaPublicKey: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKeyList</a>

---

##### `externalOauthRsaPublicKey2`<sup>Required</sup> <a name="externalOauthRsaPublicKey2" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthRsaPublicKey2"></a>

```typescript
public readonly externalOauthRsaPublicKey2: ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List">ExternalOauthIntegrationDescribeOutputExternalOauthRsaPublicKey2List</a>

---

##### `externalOauthScopeDelimiter`<sup>Required</sup> <a name="externalOauthScopeDelimiter" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthScopeDelimiter"></a>

```typescript
public readonly externalOauthScopeDelimiter: ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList">ExternalOauthIntegrationDescribeOutputExternalOauthScopeDelimiterList</a>

---

##### `externalOauthSnowflakeUserMappingAttribute`<sup>Required</sup> <a name="externalOauthSnowflakeUserMappingAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthSnowflakeUserMappingAttribute"></a>

```typescript
public readonly externalOauthSnowflakeUserMappingAttribute: ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList">ExternalOauthIntegrationDescribeOutputExternalOauthSnowflakeUserMappingAttributeList</a>

---

##### `externalOauthTokenUserMappingClaim`<sup>Required</sup> <a name="externalOauthTokenUserMappingClaim" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.externalOauthTokenUserMappingClaim"></a>

```typescript
public readonly externalOauthTokenUserMappingClaim: ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList">ExternalOauthIntegrationDescribeOutputExternalOauthTokenUserMappingClaimList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationDescribeOutput">ExternalOauthIntegrationDescribeOutput</a>

---


### ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList <a name="ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference <a name="ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.default">default</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.level">level</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct">ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.default"></a>

```typescript
public readonly default: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `level`<sup>Required</sup> <a name="level" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.level"></a>

```typescript
public readonly level: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct">ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStruct</a>

---


### ExternalOauthIntegrationRelatedParametersList <a name="ExternalOauthIntegrationRelatedParametersList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationRelatedParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationRelatedParametersOutputReference <a name="ExternalOauthIntegrationRelatedParametersOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.externalOauthAddPrivilegedRolesToBlockedList">externalOauthAddPrivilegedRolesToBlockedList</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList">ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParameters">ExternalOauthIntegrationRelatedParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `externalOauthAddPrivilegedRolesToBlockedList`<sup>Required</sup> <a name="externalOauthAddPrivilegedRolesToBlockedList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.externalOauthAddPrivilegedRolesToBlockedList"></a>

```typescript
public readonly externalOauthAddPrivilegedRolesToBlockedList: ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList">ExternalOauthIntegrationRelatedParametersExternalOauthAddPrivilegedRolesToBlockedListStructList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationRelatedParameters;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationRelatedParameters">ExternalOauthIntegrationRelatedParameters</a>

---


### ExternalOauthIntegrationShowOutputList <a name="ExternalOauthIntegrationShowOutputList" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.get"></a>

```typescript
public get(index: number): ExternalOauthIntegrationShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### ExternalOauthIntegrationShowOutputOutputReference <a name="ExternalOauthIntegrationShowOutputOutputReference" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer"></a>

```typescript
import { externalOauthIntegration } from '@cdktf/provider-snowflake'

new externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.category">category</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.enabled">enabled</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.integrationType">integrationType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutput">ExternalOauthIntegrationShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.category"></a>

```typescript
public readonly category: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.enabled"></a>

```typescript
public readonly enabled: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `integrationType`<sup>Required</sup> <a name="integrationType" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.integrationType"></a>

```typescript
public readonly integrationType: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ExternalOauthIntegrationShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.externalOauthIntegration.ExternalOauthIntegrationShowOutput">ExternalOauthIntegrationShowOutput</a>

---



