# `grantOwnership` Submodule <a name="`grantOwnership` Submodule" id="@cdktf/provider-snowflake.grantOwnership"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GrantOwnership <a name="GrantOwnership" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership snowflake_grant_ownership}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

new grantOwnership.GrantOwnership(scope: Construct, id: string, config: GrantOwnershipConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig">GrantOwnershipConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig">GrantOwnershipConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn">putOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetAccountRoleName">resetAccountRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetDatabaseRoleName">resetDatabaseRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOutboundPrivileges">resetOutboundPrivileges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putOn` <a name="putOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn"></a>

```typescript
public putOn(value: GrantOwnershipOn): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putOn.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putTimeouts"></a>

```typescript
public putTimeouts(value: GrantOwnershipTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a>

---

##### `resetAccountRoleName` <a name="resetAccountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetAccountRoleName"></a>

```typescript
public resetAccountRoleName(): void
```

##### `resetDatabaseRoleName` <a name="resetDatabaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetDatabaseRoleName"></a>

```typescript
public resetDatabaseRoleName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetId"></a>

```typescript
public resetId(): void
```

##### `resetOutboundPrivileges` <a name="resetOutboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetOutboundPrivileges"></a>

```typescript
public resetOutboundPrivileges(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GrantOwnership resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

grantOwnership.GrantOwnership.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

grantOwnership.GrantOwnership.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

grantOwnership.GrantOwnership.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

grantOwnership.GrantOwnership.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GrantOwnership resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GrantOwnership to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GrantOwnership that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GrantOwnership to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference">GrantOwnershipOnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference">GrantOwnershipTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleNameInput">accountRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleNameInput">databaseRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.onInput">onInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivilegesInput">outboundPrivilegesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleName">accountRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleName">databaseRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivileges">outboundPrivileges</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.on"></a>

```typescript
public readonly on: GrantOwnershipOnOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference">GrantOwnershipOnOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.timeouts"></a>

```typescript
public readonly timeouts: GrantOwnershipTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference">GrantOwnershipTimeoutsOutputReference</a>

---

##### `accountRoleNameInput`<sup>Optional</sup> <a name="accountRoleNameInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleNameInput"></a>

```typescript
public readonly accountRoleNameInput: string;
```

- *Type:* string

---

##### `databaseRoleNameInput`<sup>Optional</sup> <a name="databaseRoleNameInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleNameInput"></a>

```typescript
public readonly databaseRoleNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `onInput`<sup>Optional</sup> <a name="onInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.onInput"></a>

```typescript
public readonly onInput: GrantOwnershipOn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---

##### `outboundPrivilegesInput`<sup>Optional</sup> <a name="outboundPrivilegesInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivilegesInput"></a>

```typescript
public readonly outboundPrivilegesInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GrantOwnershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a>

---

##### `accountRoleName`<sup>Required</sup> <a name="accountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.accountRoleName"></a>

```typescript
public readonly accountRoleName: string;
```

- *Type:* string

---

##### `databaseRoleName`<sup>Required</sup> <a name="databaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.databaseRoleName"></a>

```typescript
public readonly databaseRoleName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `outboundPrivileges`<sup>Required</sup> <a name="outboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.outboundPrivileges"></a>

```typescript
public readonly outboundPrivileges: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnership.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GrantOwnershipConfig <a name="GrantOwnershipConfig" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

const grantOwnershipConfig: grantOwnership.GrantOwnershipConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.on">on</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | on block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.accountRoleName">accountRoleName</a></code> | <code>string</code> | The fully qualified name of the account role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.databaseRoleName">databaseRoleName</a></code> | <code>string</code> | The fully qualified name of the database role to which privileges will be granted. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#id GrantOwnership#id}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.outboundPrivileges">outboundPrivileges</a></code> | <code>string</code> | Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `on`<sup>Required</sup> <a name="on" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.on"></a>

```typescript
public readonly on: GrantOwnershipOn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

on block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#on GrantOwnership#on}

---

##### `accountRoleName`<sup>Optional</sup> <a name="accountRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.accountRoleName"></a>

```typescript
public readonly accountRoleName: string;
```

- *Type:* string

The fully qualified name of the account role to which privileges will be granted.

For more information about this resource, see [docs](./account_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#account_role_name GrantOwnership#account_role_name}

---

##### `databaseRoleName`<sup>Optional</sup> <a name="databaseRoleName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.databaseRoleName"></a>

```typescript
public readonly databaseRoleName: string;
```

- *Type:* string

The fully qualified name of the database role to which privileges will be granted.

For more information about this resource, see [docs](./database_role).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#database_role_name GrantOwnership#database_role_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#id GrantOwnership#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `outboundPrivileges`<sup>Optional</sup> <a name="outboundPrivileges" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.outboundPrivileges"></a>

```typescript
public readonly outboundPrivileges: string;
```

- *Type:* string

Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.

Available options are: REVOKE for removing existing privileges and COPY to transfer them with ownership. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#optional-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#outbound_privileges GrantOwnership#outbound_privileges}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GrantOwnershipTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#timeouts GrantOwnership#timeouts}

---

### GrantOwnershipOn <a name="GrantOwnershipOn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

const grantOwnershipOn: grantOwnership.GrantOwnershipOn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | all block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | future block. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectName">objectName</a></code> | <code>string</code> | Specifies the identifier for the object on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectType">objectType</a></code> | <code>string</code> | Specifies the type of object on which you are transferring ownership. |

---

##### `all`<sup>Optional</sup> <a name="all" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.all"></a>

```typescript
public readonly all: GrantOwnershipOnAll;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

all block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#all GrantOwnership#all}

---

##### `future`<sup>Optional</sup> <a name="future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.future"></a>

```typescript
public readonly future: GrantOwnershipOnFuture;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

future block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#future GrantOwnership#future}

---

##### `objectName`<sup>Optional</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

Specifies the identifier for the object on which you are transferring ownership.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#object_name GrantOwnership#object_name}

---

##### `objectType`<sup>Optional</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

Specifies the type of object on which you are transferring ownership.

Available values are: AGGREGATION POLICY | ALERT | AUTHENTICATION POLICY | COMPUTE POOL | DATA METRIC FUNCTION | DATABASE | DATABASE ROLE | DYNAMIC TABLE | EVENT TABLE | EXTERNAL TABLE | EXTERNAL VOLUME | FAILOVER GROUP | FILE FORMAT | FUNCTION | GIT REPOSITORY | HYBRID TABLE | ICEBERG TABLE | IMAGE REPOSITORY | INTEGRATION | MATERIALIZED VIEW | NETWORK POLICY | NETWORK RULE | PACKAGES POLICY | PIPE | PROCEDURE | MASKING POLICY | PASSWORD POLICY | PROJECTION POLICY | REPLICATION GROUP | RESOURCE MONITOR | ROLE | ROW ACCESS POLICY | SCHEMA | SESSION POLICY | SECRET | SEQUENCE | STAGE | STREAM | TABLE | TAG | TASK | USER | VIEW | WAREHOUSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#object_type GrantOwnership#object_type}

---

### GrantOwnershipOnAll <a name="GrantOwnershipOnAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

const grantOwnershipOnAll: grantOwnership.GrantOwnershipOnAll = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.objectTypePlural">objectTypePlural</a></code> | <code>string</code> | Specifies the type of object in plural form on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inDatabase">inDatabase</a></code> | <code>string</code> | The fully qualified name of the database. For more information about this resource, see [docs](./database). |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inSchema">inSchema</a></code> | <code>string</code> | The fully qualified name of the schema. For more information about this resource, see [docs](./schema). |

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.objectTypePlural"></a>

```typescript
public readonly objectTypePlural: string;
```

- *Type:* string

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

##### `inDatabase`<sup>Optional</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inDatabase"></a>

```typescript
public readonly inDatabase: string;
```

- *Type:* string

The fully qualified name of the database. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

##### `inSchema`<sup>Optional</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll.property.inSchema"></a>

```typescript
public readonly inSchema: string;
```

- *Type:* string

The fully qualified name of the schema. For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

### GrantOwnershipOnFuture <a name="GrantOwnershipOnFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

const grantOwnershipOnFuture: grantOwnership.GrantOwnershipOnFuture = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.objectTypePlural">objectTypePlural</a></code> | <code>string</code> | Specifies the type of object in plural form on which you are transferring ownership. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inDatabase">inDatabase</a></code> | <code>string</code> | The fully qualified name of the database. For more information about this resource, see [docs](./database). |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inSchema">inSchema</a></code> | <code>string</code> | The fully qualified name of the schema. For more information about this resource, see [docs](./schema). |

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.objectTypePlural"></a>

```typescript
public readonly objectTypePlural: string;
```

- *Type:* string

Specifies the type of object in plural form on which you are transferring ownership.

Available values are: AGGREGATION POLICIES | ALERTS | AUTHENTICATION POLICIES | COMPUTE POOLS | DATA METRIC FUNCTIONS | DATABASES | DATABASE ROLES | DYNAMIC TABLES | EVENT TABLES | EXTERNAL TABLES | EXTERNAL VOLUMES | FAILOVER GROUPS | FILE FORMATS | FUNCTIONS | GIT REPOSITORIES | HYBRID TABLES | ICEBERG TABLES | IMAGE REPOSITORIES | INTEGRATIONS | MATERIALIZED VIEWS | NETWORK POLICIES | NETWORK RULES | PACKAGES POLICIES | PIPES | PROCEDURES | MASKING POLICIES | PASSWORD POLICIES | PROJECTION POLICIES | REPLICATION GROUPS | RESOURCE MONITORS | ROLES | ROW ACCESS POLICIES | SCHEMAS | SESSION POLICIES | SECRETS | SEQUENCES | STAGES | STREAMS | TABLES | TAGS | TASKS | USERS | VIEWS | WAREHOUSES. For more information head over to [Snowflake documentation](https://docs.snowflake.com/en/sql-reference/sql/grant-ownership#required-parameters).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#object_type_plural GrantOwnership#object_type_plural}

---

##### `inDatabase`<sup>Optional</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inDatabase"></a>

```typescript
public readonly inDatabase: string;
```

- *Type:* string

The fully qualified name of the database. For more information about this resource, see [docs](./database).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#in_database GrantOwnership#in_database}

---

##### `inSchema`<sup>Optional</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture.property.inSchema"></a>

```typescript
public readonly inSchema: string;
```

- *Type:* string

The fully qualified name of the schema. For more information about this resource, see [docs](./schema).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#in_schema GrantOwnership#in_schema}

---

### GrantOwnershipTimeouts <a name="GrantOwnershipTimeouts" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

const grantOwnershipTimeouts: grantOwnership.GrantOwnershipTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#create GrantOwnership#create}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#delete GrantOwnership#delete}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#read GrantOwnership#read}. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#update GrantOwnership#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#create GrantOwnership#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#delete GrantOwnership#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#read GrantOwnership#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.7.0/docs/resources/grant_ownership#update GrantOwnership#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GrantOwnershipOnAllOutputReference <a name="GrantOwnershipOnAllOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

new grantOwnership.GrantOwnershipOnAllOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInDatabase">resetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInSchema">resetInSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInDatabase` <a name="resetInDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInDatabase"></a>

```typescript
public resetInDatabase(): void
```

##### `resetInSchema` <a name="resetInSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.resetInSchema"></a>

```typescript
public resetInSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabaseInput">inDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchemaInput">inSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePluralInput">objectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabase">inDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchema">inSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePlural">objectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inDatabaseInput`<sup>Optional</sup> <a name="inDatabaseInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabaseInput"></a>

```typescript
public readonly inDatabaseInput: string;
```

- *Type:* string

---

##### `inSchemaInput`<sup>Optional</sup> <a name="inSchemaInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchemaInput"></a>

```typescript
public readonly inSchemaInput: string;
```

- *Type:* string

---

##### `objectTypePluralInput`<sup>Optional</sup> <a name="objectTypePluralInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePluralInput"></a>

```typescript
public readonly objectTypePluralInput: string;
```

- *Type:* string

---

##### `inDatabase`<sup>Required</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inDatabase"></a>

```typescript
public readonly inDatabase: string;
```

- *Type:* string

---

##### `inSchema`<sup>Required</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.inSchema"></a>

```typescript
public readonly inSchema: string;
```

- *Type:* string

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.objectTypePlural"></a>

```typescript
public readonly objectTypePlural: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrantOwnershipOnAll;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---


### GrantOwnershipOnFutureOutputReference <a name="GrantOwnershipOnFutureOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

new grantOwnership.GrantOwnershipOnFutureOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInDatabase">resetInDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInSchema">resetInSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInDatabase` <a name="resetInDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInDatabase"></a>

```typescript
public resetInDatabase(): void
```

##### `resetInSchema` <a name="resetInSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.resetInSchema"></a>

```typescript
public resetInSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabaseInput">inDatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchemaInput">inSchemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePluralInput">objectTypePluralInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabase">inDatabase</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchema">inSchema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePlural">objectTypePlural</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `inDatabaseInput`<sup>Optional</sup> <a name="inDatabaseInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabaseInput"></a>

```typescript
public readonly inDatabaseInput: string;
```

- *Type:* string

---

##### `inSchemaInput`<sup>Optional</sup> <a name="inSchemaInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchemaInput"></a>

```typescript
public readonly inSchemaInput: string;
```

- *Type:* string

---

##### `objectTypePluralInput`<sup>Optional</sup> <a name="objectTypePluralInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePluralInput"></a>

```typescript
public readonly objectTypePluralInput: string;
```

- *Type:* string

---

##### `inDatabase`<sup>Required</sup> <a name="inDatabase" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inDatabase"></a>

```typescript
public readonly inDatabase: string;
```

- *Type:* string

---

##### `inSchema`<sup>Required</sup> <a name="inSchema" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.inSchema"></a>

```typescript
public readonly inSchema: string;
```

- *Type:* string

---

##### `objectTypePlural`<sup>Required</sup> <a name="objectTypePlural" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.objectTypePlural"></a>

```typescript
public readonly objectTypePlural: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrantOwnershipOnFuture;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---


### GrantOwnershipOnOutputReference <a name="GrantOwnershipOnOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

new grantOwnership.GrantOwnershipOnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll">putAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture">putFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetAll">resetAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetFuture">resetFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectName">resetObjectName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectType">resetObjectType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAll` <a name="putAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll"></a>

```typescript
public putAll(value: GrantOwnershipOnAll): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putAll.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---

##### `putFuture` <a name="putFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture"></a>

```typescript
public putFuture(value: GrantOwnershipOnFuture): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.putFuture.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---

##### `resetAll` <a name="resetAll" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetAll"></a>

```typescript
public resetAll(): void
```

##### `resetFuture` <a name="resetFuture" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetFuture"></a>

```typescript
public resetFuture(): void
```

##### `resetObjectName` <a name="resetObjectName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectName"></a>

```typescript
public resetObjectName(): void
```

##### `resetObjectType` <a name="resetObjectType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.resetObjectType"></a>

```typescript
public resetObjectType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.all">all</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference">GrantOwnershipOnAllOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.future">future</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference">GrantOwnershipOnFutureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.allInput">allInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.futureInput">futureInput</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectNameInput">objectNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectTypeInput">objectTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectName">objectName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectType">objectType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `all`<sup>Required</sup> <a name="all" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.all"></a>

```typescript
public readonly all: GrantOwnershipOnAllOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAllOutputReference">GrantOwnershipOnAllOutputReference</a>

---

##### `future`<sup>Required</sup> <a name="future" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.future"></a>

```typescript
public readonly future: GrantOwnershipOnFutureOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFutureOutputReference">GrantOwnershipOnFutureOutputReference</a>

---

##### `allInput`<sup>Optional</sup> <a name="allInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.allInput"></a>

```typescript
public readonly allInput: GrantOwnershipOnAll;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnAll">GrantOwnershipOnAll</a>

---

##### `futureInput`<sup>Optional</sup> <a name="futureInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.futureInput"></a>

```typescript
public readonly futureInput: GrantOwnershipOnFuture;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnFuture">GrantOwnershipOnFuture</a>

---

##### `objectNameInput`<sup>Optional</sup> <a name="objectNameInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectNameInput"></a>

```typescript
public readonly objectNameInput: string;
```

- *Type:* string

---

##### `objectTypeInput`<sup>Optional</sup> <a name="objectTypeInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectTypeInput"></a>

```typescript
public readonly objectTypeInput: string;
```

- *Type:* string

---

##### `objectName`<sup>Required</sup> <a name="objectName" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectName"></a>

```typescript
public readonly objectName: string;
```

- *Type:* string

---

##### `objectType`<sup>Required</sup> <a name="objectType" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.objectType"></a>

```typescript
public readonly objectType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GrantOwnershipOn;
```

- *Type:* <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipOn">GrantOwnershipOn</a>

---


### GrantOwnershipTimeoutsOutputReference <a name="GrantOwnershipTimeoutsOutputReference" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer"></a>

```typescript
import { grantOwnership } from '@cdktf/provider-snowflake'

new grantOwnership.GrantOwnershipTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GrantOwnershipTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.grantOwnership.GrantOwnershipTimeouts">GrantOwnershipTimeouts</a>

---



