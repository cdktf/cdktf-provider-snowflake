# `streamOnDirectoryTable` Submodule <a name="`streamOnDirectoryTable` Submodule" id="@cdktf/provider-snowflake.streamOnDirectoryTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamOnDirectoryTable <a name="StreamOnDirectoryTable" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table snowflake_stream_on_directory_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

new streamOnDirectoryTable.StreamOnDirectoryTable(scope: Construct, id: string, config: StreamOnDirectoryTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig">StreamOnDirectoryTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig">StreamOnDirectoryTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetCopyGrants">resetCopyGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.putTimeouts"></a>

```typescript
public putTimeouts(value: StreamOnDirectoryTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts">StreamOnDirectoryTableTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCopyGrants` <a name="resetCopyGrants" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetCopyGrants"></a>

```typescript
public resetCopyGrants(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamOnDirectoryTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.isConstruct"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

streamOnDirectoryTable.StreamOnDirectoryTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.isTerraformElement"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

streamOnDirectoryTable.StreamOnDirectoryTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.isTerraformResource"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

streamOnDirectoryTable.StreamOnDirectoryTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.generateConfigForImport"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

streamOnDirectoryTable.StreamOnDirectoryTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamOnDirectoryTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamOnDirectoryTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamOnDirectoryTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamOnDirectoryTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList">StreamOnDirectoryTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList">StreamOnDirectoryTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.stale">stale</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.streamType">streamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference">StreamOnDirectoryTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.copyGrantsInput">copyGrantsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.stageInput">stageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts">StreamOnDirectoryTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.copyGrants">copyGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.stage">stage</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.describeOutput"></a>

```typescript
public readonly describeOutput: StreamOnDirectoryTableDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList">StreamOnDirectoryTableDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.showOutput"></a>

```typescript
public readonly showOutput: StreamOnDirectoryTableShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList">StreamOnDirectoryTableShowOutputList</a>

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.timeouts"></a>

```typescript
public readonly timeouts: StreamOnDirectoryTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference">StreamOnDirectoryTableTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `copyGrantsInput`<sup>Optional</sup> <a name="copyGrantsInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.copyGrantsInput"></a>

```typescript
public readonly copyGrantsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `stageInput`<sup>Optional</sup> <a name="stageInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.stageInput"></a>

```typescript
public readonly stageInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | StreamOnDirectoryTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts">StreamOnDirectoryTableTimeouts</a>

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `copyGrants`<sup>Required</sup> <a name="copyGrants" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.copyGrants"></a>

```typescript
public readonly copyGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamOnDirectoryTableConfig <a name="StreamOnDirectoryTableConfig" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

const streamOnDirectoryTableConfig: streamOnDirectoryTable.StreamOnDirectoryTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the stream; |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.stage">stage</a></code> | <code>string</code> | Specifies an identifier for the stage the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.copyGrants">copyGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `false`) Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#id StreamOnDirectoryTable#id}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts">StreamOnDirectoryTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the stream.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#database StreamOnDirectoryTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#name StreamOnDirectoryTable#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the stream.

Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#schema StreamOnDirectoryTable#schema}

---

##### `stage`<sup>Required</sup> <a name="stage" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.stage"></a>

```typescript
public readonly stage: string;
```

- *Type:* string

Specifies an identifier for the stage the stream will monitor.

Due to Snowflake limitations, the provider can not read the stage's database and schema. For stages, Snowflake returns only partially qualified name instead of fully qualified name. Please use stages located in the same schema as the stream. Due to technical limitations (read more [here](../guides/identifiers_rework_design_decisions#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information about this resource, see [docs](./stage).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#stage StreamOnDirectoryTable#stage}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#comment StreamOnDirectoryTable#comment}

---

##### `copyGrants`<sup>Optional</sup> <a name="copyGrants" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.copyGrants"></a>

```typescript
public readonly copyGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `false`) Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause.

This is used when the provider detects changes for fields that can not be changed by ALTER. This value will not have any effect during creating a new object with Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#copy_grants StreamOnDirectoryTable#copy_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#id StreamOnDirectoryTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: StreamOnDirectoryTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts">StreamOnDirectoryTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#timeouts StreamOnDirectoryTable#timeouts}

---

### StreamOnDirectoryTableDescribeOutput <a name="StreamOnDirectoryTableDescribeOutput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutput.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

const streamOnDirectoryTableDescribeOutput: streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutput = { ... }
```


### StreamOnDirectoryTableShowOutput <a name="StreamOnDirectoryTableShowOutput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutput.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

const streamOnDirectoryTableShowOutput: streamOnDirectoryTable.StreamOnDirectoryTableShowOutput = { ... }
```


### StreamOnDirectoryTableTimeouts <a name="StreamOnDirectoryTableTimeouts" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

const streamOnDirectoryTableTimeouts: streamOnDirectoryTable.StreamOnDirectoryTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#create StreamOnDirectoryTable#create}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#delete StreamOnDirectoryTable#delete}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#read StreamOnDirectoryTable#read}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#update StreamOnDirectoryTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#create StreamOnDirectoryTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#delete StreamOnDirectoryTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#read StreamOnDirectoryTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.1.0/docs/resources/stream_on_directory_table#update StreamOnDirectoryTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### StreamOnDirectoryTableDescribeOutputList <a name="StreamOnDirectoryTableDescribeOutputList" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

new streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.get"></a>

```typescript
public get(index: number): StreamOnDirectoryTableDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StreamOnDirectoryTableDescribeOutputOutputReference <a name="StreamOnDirectoryTableDescribeOutputOutputReference" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

new streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.baseTables">baseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.invalidReason">invalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.stale">stale</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.staleAfter">staleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutput">StreamOnDirectoryTableDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTables`<sup>Required</sup> <a name="baseTables" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.baseTables"></a>

```typescript
public readonly baseTables: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `invalidReason`<sup>Required</sup> <a name="invalidReason" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.invalidReason"></a>

```typescript
public readonly invalidReason: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `staleAfter`<sup>Required</sup> <a name="staleAfter" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.staleAfter"></a>

```typescript
public readonly staleAfter: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnDirectoryTableDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableDescribeOutput">StreamOnDirectoryTableDescribeOutput</a>

---


### StreamOnDirectoryTableShowOutputList <a name="StreamOnDirectoryTableShowOutputList" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

new streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.get"></a>

```typescript
public get(index: number): StreamOnDirectoryTableShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StreamOnDirectoryTableShowOutputOutputReference <a name="StreamOnDirectoryTableShowOutputOutputReference" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

new streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.baseTables">baseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.invalidReason">invalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.stale">stale</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.staleAfter">staleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutput">StreamOnDirectoryTableShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTables`<sup>Required</sup> <a name="baseTables" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.baseTables"></a>

```typescript
public readonly baseTables: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `invalidReason`<sup>Required</sup> <a name="invalidReason" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.invalidReason"></a>

```typescript
public readonly invalidReason: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `staleAfter`<sup>Required</sup> <a name="staleAfter" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.staleAfter"></a>

```typescript
public readonly staleAfter: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnDirectoryTableShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableShowOutput">StreamOnDirectoryTableShowOutput</a>

---


### StreamOnDirectoryTableTimeoutsOutputReference <a name="StreamOnDirectoryTableTimeoutsOutputReference" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { streamOnDirectoryTable } from '@cdktf/provider-snowflake'

new streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts">StreamOnDirectoryTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | StreamOnDirectoryTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.streamOnDirectoryTable.StreamOnDirectoryTableTimeouts">StreamOnDirectoryTableTimeouts</a>

---



