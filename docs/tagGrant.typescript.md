# `tagGrant` Submodule <a name="`tagGrant` Submodule" id="@cdktf/provider-snowflake.tagGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TagGrant <a name="TagGrant" id="@cdktf/provider-snowflake.tagGrant.TagGrant"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant snowflake_tag_grant}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tagGrant.TagGrant.Initializer"></a>

```typescript
import { tagGrant } from '@cdktf/provider-snowflake'

new tagGrant.TagGrant(scope: Construct, id: string, config: TagGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig">TagGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tagGrant.TagGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagGrant.TagGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.tagGrant.TagGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig">TagGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.resetEnableMultipleGrants">resetEnableMultipleGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.resetPrivilege">resetPrivilege</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.resetRevertOwnershipToRoleName">resetRevertOwnershipToRoleName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.resetRoles">resetRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.resetWithGrantOption">resetWithGrantOption</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tagGrant.TagGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.tagGrant.TagGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.tagGrant.TagGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tagGrant.TagGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.tagGrant.TagGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.tagGrant.TagGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.tagGrant.TagGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.tagGrant.TagGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.tagGrant.TagGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.tagGrant.TagGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.tagGrant.TagGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tagGrant.TagGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.tagGrant.TagGrant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.tagGrant.TagGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagGrant.TagGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tagGrant.TagGrant.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tagGrant.TagGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.tagGrant.TagGrant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagGrant.TagGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.tagGrant.TagGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tagGrant.TagGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.tagGrant.TagGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.tagGrant.TagGrant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagGrant.TagGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEnableMultipleGrants` <a name="resetEnableMultipleGrants" id="@cdktf/provider-snowflake.tagGrant.TagGrant.resetEnableMultipleGrants"></a>

```typescript
public resetEnableMultipleGrants(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.tagGrant.TagGrant.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrivilege` <a name="resetPrivilege" id="@cdktf/provider-snowflake.tagGrant.TagGrant.resetPrivilege"></a>

```typescript
public resetPrivilege(): void
```

##### `resetRevertOwnershipToRoleName` <a name="resetRevertOwnershipToRoleName" id="@cdktf/provider-snowflake.tagGrant.TagGrant.resetRevertOwnershipToRoleName"></a>

```typescript
public resetRevertOwnershipToRoleName(): void
```

##### `resetRoles` <a name="resetRoles" id="@cdktf/provider-snowflake.tagGrant.TagGrant.resetRoles"></a>

```typescript
public resetRoles(): void
```

##### `resetWithGrantOption` <a name="resetWithGrantOption" id="@cdktf/provider-snowflake.tagGrant.TagGrant.resetWithGrantOption"></a>

```typescript
public resetWithGrantOption(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TagGrant resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.tagGrant.TagGrant.isConstruct"></a>

```typescript
import { tagGrant } from '@cdktf/provider-snowflake'

tagGrant.TagGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tagGrant.TagGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.tagGrant.TagGrant.isTerraformElement"></a>

```typescript
import { tagGrant } from '@cdktf/provider-snowflake'

tagGrant.TagGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tagGrant.TagGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.tagGrant.TagGrant.isTerraformResource"></a>

```typescript
import { tagGrant } from '@cdktf/provider-snowflake'

tagGrant.TagGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tagGrant.TagGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.tagGrant.TagGrant.generateConfigForImport"></a>

```typescript
import { tagGrant } from '@cdktf/provider-snowflake'

tagGrant.TagGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TagGrant resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tagGrant.TagGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.tagGrant.TagGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TagGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.tagGrant.TagGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TagGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tagGrant.TagGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TagGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.databaseNameInput">databaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.enableMultipleGrantsInput">enableMultipleGrantsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.privilegeInput">privilegeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.revertOwnershipToRoleNameInput">revertOwnershipToRoleNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.rolesInput">rolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.schemaNameInput">schemaNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.tagNameInput">tagNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.withGrantOptionInput">withGrantOptionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.enableMultipleGrants">enableMultipleGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.privilege">privilege</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.roles">roles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.tagName">tagName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.withGrantOption">withGrantOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.databaseNameInput"></a>

```typescript
public readonly databaseNameInput: string;
```

- *Type:* string

---

##### `enableMultipleGrantsInput`<sup>Optional</sup> <a name="enableMultipleGrantsInput" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.enableMultipleGrantsInput"></a>

```typescript
public readonly enableMultipleGrantsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `privilegeInput`<sup>Optional</sup> <a name="privilegeInput" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.privilegeInput"></a>

```typescript
public readonly privilegeInput: string;
```

- *Type:* string

---

##### `revertOwnershipToRoleNameInput`<sup>Optional</sup> <a name="revertOwnershipToRoleNameInput" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.revertOwnershipToRoleNameInput"></a>

```typescript
public readonly revertOwnershipToRoleNameInput: string;
```

- *Type:* string

---

##### `rolesInput`<sup>Optional</sup> <a name="rolesInput" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.rolesInput"></a>

```typescript
public readonly rolesInput: string[];
```

- *Type:* string[]

---

##### `schemaNameInput`<sup>Optional</sup> <a name="schemaNameInput" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.schemaNameInput"></a>

```typescript
public readonly schemaNameInput: string;
```

- *Type:* string

---

##### `tagNameInput`<sup>Optional</sup> <a name="tagNameInput" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.tagNameInput"></a>

```typescript
public readonly tagNameInput: string;
```

- *Type:* string

---

##### `withGrantOptionInput`<sup>Optional</sup> <a name="withGrantOptionInput" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.withGrantOptionInput"></a>

```typescript
public readonly withGrantOptionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `enableMultipleGrants`<sup>Required</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.enableMultipleGrants"></a>

```typescript
public readonly enableMultipleGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `privilege`<sup>Required</sup> <a name="privilege" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.privilege"></a>

```typescript
public readonly privilege: string;
```

- *Type:* string

---

##### `revertOwnershipToRoleName`<sup>Required</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.revertOwnershipToRoleName"></a>

```typescript
public readonly revertOwnershipToRoleName: string;
```

- *Type:* string

---

##### `roles`<sup>Required</sup> <a name="roles" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

---

##### `withGrantOption`<sup>Required</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.tagGrant.TagGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TagGrantConfig <a name="TagGrantConfig" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.Initializer"></a>

```typescript
import { tagGrant } from '@cdktf/provider-snowflake'

const tagGrantConfig: tagGrant.TagGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.databaseName">databaseName</a></code> | <code>string</code> | The name of the database containing the tag on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.schemaName">schemaName</a></code> | <code>string</code> | The name of the schema containing the tag on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.tagName">tagName</a></code> | <code>string</code> | The name of the tag on which to grant privileges. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.enableMultipleGrants">enableMultipleGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | When this is set to true, multiple grants of the same type can be created. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#id TagGrant#id}. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.privilege">privilege</a></code> | <code>string</code> | The privilege to grant on the tag. To grant all privileges, use the value `ALL PRIVILEGES`. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.revertOwnershipToRoleName">revertOwnershipToRoleName</a></code> | <code>string</code> | The name of the role to revert ownership to on destroy. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.roles">roles</a></code> | <code>string[]</code> | Grants privilege to these roles. |
| <code><a href="#@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.withGrantOption">withGrantOption</a></code> | <code>boolean \| cdktf.IResolvable</code> | When this is set to true, allows the recipient role to grant the privileges to other roles. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

The name of the database containing the tag on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#database_name TagGrant#database_name}

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

The name of the schema containing the tag on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#schema_name TagGrant#schema_name}

---

##### `tagName`<sup>Required</sup> <a name="tagName" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.tagName"></a>

```typescript
public readonly tagName: string;
```

- *Type:* string

The name of the tag on which to grant privileges.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#tag_name TagGrant#tag_name}

---

##### `enableMultipleGrants`<sup>Optional</sup> <a name="enableMultipleGrants" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.enableMultipleGrants"></a>

```typescript
public readonly enableMultipleGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When this is set to true, multiple grants of the same type can be created.

This will cause Terraform to not revoke grants applied to roles and objects outside Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#enable_multiple_grants TagGrant#enable_multiple_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#id TagGrant#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `privilege`<sup>Optional</sup> <a name="privilege" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.privilege"></a>

```typescript
public readonly privilege: string;
```

- *Type:* string

The privilege to grant on the tag. To grant all privileges, use the value `ALL PRIVILEGES`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#privilege TagGrant#privilege}

---

##### `revertOwnershipToRoleName`<sup>Optional</sup> <a name="revertOwnershipToRoleName" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.revertOwnershipToRoleName"></a>

```typescript
public readonly revertOwnershipToRoleName: string;
```

- *Type:* string

The name of the role to revert ownership to on destroy.

Has no effect unless `privilege` is set to `OWNERSHIP`

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#revert_ownership_to_role_name TagGrant#revert_ownership_to_role_name}

---

##### `roles`<sup>Optional</sup> <a name="roles" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.roles"></a>

```typescript
public readonly roles: string[];
```

- *Type:* string[]

Grants privilege to these roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#roles TagGrant#roles}

---

##### `withGrantOption`<sup>Optional</sup> <a name="withGrantOption" id="@cdktf/provider-snowflake.tagGrant.TagGrantConfig.property.withGrantOption"></a>

```typescript
public readonly withGrantOption: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

When this is set to true, allows the recipient role to grant the privileges to other roles.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.92.0/docs/resources/tag_grant#with_grant_option TagGrant#with_grant_option}

---



