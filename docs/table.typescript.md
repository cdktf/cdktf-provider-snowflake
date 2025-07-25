# `table` Submodule <a name="`table` Submodule" id="@cdktf/provider-snowflake.table"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Table <a name="Table" id="@cdktf/provider-snowflake.table.Table"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table snowflake_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.table.Table.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

new table.Table(scope: Construct, id: string, config: TableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.Table.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableConfig">TableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.table.Table.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.table.Table.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.table.Table.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableConfig">TableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.Table.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.table.Table.putColumn">putColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.putPrimaryKey">putPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.putTag">putTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.resetChangeTracking">resetChangeTracking</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.resetClusterBy">resetClusterBy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.resetDataRetentionTimeInDays">resetDataRetentionTimeInDays</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.resetPrimaryKey">resetPrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.table.Table.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.table.Table.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.table.Table.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.table.Table.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.table.Table.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.table.Table.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.table.Table.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.table.Table.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.table.Table.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.table.Table.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.table.Table.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.table.Table.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.table.Table.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.table.Table.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.table.Table.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.table.Table.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.table.Table.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.table.Table.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.table.Table.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.table.Table.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.table.Table.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.table.Table.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.table.Table.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.table.Table.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.table.Table.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.table.Table.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.Table.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.table.Table.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.table.Table.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.table.Table.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.table.Table.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.table.Table.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.table.Table.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.table.Table.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putColumn` <a name="putColumn" id="@cdktf/provider-snowflake.table.Table.putColumn"></a>

```typescript
public putColumn(value: IResolvable | TableColumn[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.table.Table.putColumn.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableColumn">TableColumn</a>[]

---

##### `putPrimaryKey` <a name="putPrimaryKey" id="@cdktf/provider-snowflake.table.Table.putPrimaryKey"></a>

```typescript
public putPrimaryKey(value: TablePrimaryKey): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.table.Table.putPrimaryKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.table.TablePrimaryKey">TablePrimaryKey</a>

---

##### `putTag` <a name="putTag" id="@cdktf/provider-snowflake.table.Table.putTag"></a>

```typescript
public putTag(value: IResolvable | TableTag[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.table.Table.putTag.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableTag">TableTag</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.table.Table.putTimeouts"></a>

```typescript
public putTimeouts(value: TableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.table.Table.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableTimeouts">TableTimeouts</a>

---

##### `resetChangeTracking` <a name="resetChangeTracking" id="@cdktf/provider-snowflake.table.Table.resetChangeTracking"></a>

```typescript
public resetChangeTracking(): void
```

##### `resetClusterBy` <a name="resetClusterBy" id="@cdktf/provider-snowflake.table.Table.resetClusterBy"></a>

```typescript
public resetClusterBy(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.table.Table.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDataRetentionTimeInDays` <a name="resetDataRetentionTimeInDays" id="@cdktf/provider-snowflake.table.Table.resetDataRetentionTimeInDays"></a>

```typescript
public resetDataRetentionTimeInDays(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.table.Table.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPrimaryKey` <a name="resetPrimaryKey" id="@cdktf/provider-snowflake.table.Table.resetPrimaryKey"></a>

```typescript
public resetPrimaryKey(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-snowflake.table.Table.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.table.Table.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.Table.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a Table resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.table.Table.isConstruct"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

table.Table.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.table.Table.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.table.Table.isTerraformElement"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

table.Table.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.table.Table.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.table.Table.isTerraformResource"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

table.Table.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.table.Table.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.table.Table.generateConfigForImport"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

table.Table.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a Table resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.table.Table.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.table.Table.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Table to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.table.Table.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Table that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.table.Table.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the Table to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.column">column</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableColumnList">TableColumnList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.primaryKey">primaryKey</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference">TablePrimaryKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.tag">tag</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableTagList">TableTagList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference">TableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.changeTrackingInput">changeTrackingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.clusterByInput">clusterByInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.columnInput">columnInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableColumn">TableColumn</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.dataRetentionTimeInDaysInput">dataRetentionTimeInDaysInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.primaryKeyInput">primaryKeyInput</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKey">TablePrimaryKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.tagInput">tagInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableTag">TableTag</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableTimeouts">TableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.changeTracking">changeTracking</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.clusterBy">clusterBy</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.schema">schema</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.table.Table.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.table.Table.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.table.Table.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.table.Table.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.table.Table.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.table.Table.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.table.Table.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.table.Table.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.table.Table.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.table.Table.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.table.Table.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.table.Table.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.table.Table.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.table.Table.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.table.Table.property.column"></a>

```typescript
public readonly column: TableColumnList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnList">TableColumnList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.table.Table.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.table.Table.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `primaryKey`<sup>Required</sup> <a name="primaryKey" id="@cdktf/provider-snowflake.table.Table.property.primaryKey"></a>

```typescript
public readonly primaryKey: TablePrimaryKeyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference">TablePrimaryKeyOutputReference</a>

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-snowflake.table.Table.property.tag"></a>

```typescript
public readonly tag: TableTagList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableTagList">TableTagList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.table.Table.property.timeouts"></a>

```typescript
public readonly timeouts: TableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference">TableTimeoutsOutputReference</a>

---

##### `changeTrackingInput`<sup>Optional</sup> <a name="changeTrackingInput" id="@cdktf/provider-snowflake.table.Table.property.changeTrackingInput"></a>

```typescript
public readonly changeTrackingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterByInput`<sup>Optional</sup> <a name="clusterByInput" id="@cdktf/provider-snowflake.table.Table.property.clusterByInput"></a>

```typescript
public readonly clusterByInput: string[];
```

- *Type:* string[]

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-snowflake.table.Table.property.columnInput"></a>

```typescript
public readonly columnInput: IResolvable | TableColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableColumn">TableColumn</a>[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.table.Table.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.table.Table.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDaysInput`<sup>Optional</sup> <a name="dataRetentionTimeInDaysInput" id="@cdktf/provider-snowflake.table.Table.property.dataRetentionTimeInDaysInput"></a>

```typescript
public readonly dataRetentionTimeInDaysInput: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.table.Table.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.table.Table.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `primaryKeyInput`<sup>Optional</sup> <a name="primaryKeyInput" id="@cdktf/provider-snowflake.table.Table.property.primaryKeyInput"></a>

```typescript
public readonly primaryKeyInput: TablePrimaryKey;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TablePrimaryKey">TablePrimaryKey</a>

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.table.Table.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-snowflake.table.Table.property.tagInput"></a>

```typescript
public readonly tagInput: IResolvable | TableTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableTag">TableTag</a>[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.table.Table.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | TableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableTimeouts">TableTimeouts</a>

---

##### `changeTracking`<sup>Required</sup> <a name="changeTracking" id="@cdktf/provider-snowflake.table.Table.property.changeTracking"></a>

```typescript
public readonly changeTracking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `clusterBy`<sup>Required</sup> <a name="clusterBy" id="@cdktf/provider-snowflake.table.Table.property.clusterBy"></a>

```typescript
public readonly clusterBy: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.table.Table.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.table.Table.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `dataRetentionTimeInDays`<sup>Required</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.table.Table.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.table.Table.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.table.Table.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.table.Table.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.Table.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.table.Table.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TableColumn <a name="TableColumn" id="@cdktf/provider-snowflake.table.TableColumn"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.table.TableColumn.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

const tableColumn: table.TableColumn = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumn.property.name">name</a></code> | <code>string</code> | Column name. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumn.property.type">type</a></code> | <code>string</code> | Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types). |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumn.property.collate">collate</a></code> | <code>string</code> | (Default: ``) Column collation, e.g. utf8. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumn.property.comment">comment</a></code> | <code>string</code> | (Default: ``) Column comment. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumn.property.default">default</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefault">TableColumnDefault</a></code> | default block. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumn.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentity">TableColumnIdentity</a></code> | identity block. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumn.property.maskingPolicy">maskingPolicy</a></code> | <code>string</code> | (Default: ``) Masking policy to apply on column. It has to be a fully qualified name. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumn.property.nullable">nullable</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `true`) Whether this column can contain null values. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.table.TableColumn.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Column name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#name Table#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.table.TableColumn.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Column type, e.g. VARIANT. For a full list of column types, see [Summary of Data Types](https://docs.snowflake.com/en/sql-reference/intro-summary-data-types).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#type Table#type}

---

##### `collate`<sup>Optional</sup> <a name="collate" id="@cdktf/provider-snowflake.table.TableColumn.property.collate"></a>

```typescript
public readonly collate: string;
```

- *Type:* string

(Default: ``) Column collation, e.g. utf8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#collate Table#collate}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.table.TableColumn.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

(Default: ``) Column comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#comment Table#comment}

---

##### `default`<sup>Optional</sup> <a name="default" id="@cdktf/provider-snowflake.table.TableColumn.property.default"></a>

```typescript
public readonly default: TableColumnDefault;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnDefault">TableColumnDefault</a>

default block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#default Table#default}

---

##### `identity`<sup>Optional</sup> <a name="identity" id="@cdktf/provider-snowflake.table.TableColumn.property.identity"></a>

```typescript
public readonly identity: TableColumnIdentity;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnIdentity">TableColumnIdentity</a>

identity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#identity Table#identity}

---

##### `maskingPolicy`<sup>Optional</sup> <a name="maskingPolicy" id="@cdktf/provider-snowflake.table.TableColumn.property.maskingPolicy"></a>

```typescript
public readonly maskingPolicy: string;
```

- *Type:* string

(Default: ``) Masking policy to apply on column. It has to be a fully qualified name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#masking_policy Table#masking_policy}

---

##### `nullable`<sup>Optional</sup> <a name="nullable" id="@cdktf/provider-snowflake.table.TableColumn.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `true`) Whether this column can contain null values.

**Note**: Depending on your Snowflake version, the default value will not suffice if this column is used in a primary key constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#nullable Table#nullable}

---

### TableColumnDefault <a name="TableColumnDefault" id="@cdktf/provider-snowflake.table.TableColumnDefault"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.table.TableColumnDefault.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

const tableColumnDefault: table.TableColumnDefault = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefault.property.constant">constant</a></code> | <code>string</code> | The default constant value for the column. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefault.property.expression">expression</a></code> | <code>string</code> | The default expression value for the column. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefault.property.sequence">sequence</a></code> | <code>string</code> | The default sequence to use for the column. |

---

##### `constant`<sup>Optional</sup> <a name="constant" id="@cdktf/provider-snowflake.table.TableColumnDefault.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

The default constant value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#constant Table#constant}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-snowflake.table.TableColumnDefault.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

The default expression value for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#expression Table#expression}

---

##### `sequence`<sup>Optional</sup> <a name="sequence" id="@cdktf/provider-snowflake.table.TableColumnDefault.property.sequence"></a>

```typescript
public readonly sequence: string;
```

- *Type:* string

The default sequence to use for the column.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#sequence Table#sequence}

---

### TableColumnIdentity <a name="TableColumnIdentity" id="@cdktf/provider-snowflake.table.TableColumnIdentity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.table.TableColumnIdentity.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

const tableColumnIdentity: table.TableColumnIdentity = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentity.property.startNum">startNum</a></code> | <code>number</code> | (Default: `1`) The number to start incrementing at. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentity.property.stepNum">stepNum</a></code> | <code>number</code> | (Default: `1`) Step size to increment by. |

---

##### `startNum`<sup>Optional</sup> <a name="startNum" id="@cdktf/provider-snowflake.table.TableColumnIdentity.property.startNum"></a>

```typescript
public readonly startNum: number;
```

- *Type:* number

(Default: `1`) The number to start incrementing at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#start_num Table#start_num}

---

##### `stepNum`<sup>Optional</sup> <a name="stepNum" id="@cdktf/provider-snowflake.table.TableColumnIdentity.property.stepNum"></a>

```typescript
public readonly stepNum: number;
```

- *Type:* number

(Default: `1`) Step size to increment by.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#step_num Table#step_num}

---

### TableConfig <a name="TableConfig" id="@cdktf/provider-snowflake.table.TableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.table.TableConfig.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

const tableConfig: table.TableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.column">column</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableColumn">TableColumn</a>[]</code> | column block. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the table. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the table; |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the table. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.changeTracking">changeTracking</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `false`) Specifies whether to enable change tracking on the table. Default false. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.clusterBy">clusterBy</a></code> | <code>string[]</code> | A list of one or more table columns/expressions to be used as clustering key(s) for the table. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the table. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.dataRetentionTimeInDays">dataRetentionTimeInDays</a></code> | <code>number</code> | (Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the retention period for the table so that Time Travel actions (SELECT, CLONE, UNDROP) can be performed on historical data in the table. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#id Table#id}. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.primaryKey">primaryKey</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKey">TablePrimaryKey</a></code> | primary_key block. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.tag">tag</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableTag">TableTag</a>[]</code> | tag block. |
| <code><a href="#@cdktf/provider-snowflake.table.TableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableTimeouts">TableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.table.TableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.table.TableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.table.TableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.table.TableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.table.TableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.table.TableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.table.TableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.table.TableConfig.property.column"></a>

```typescript
public readonly column: IResolvable | TableColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableColumn">TableColumn</a>[]

column block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#column Table#column}

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.table.TableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#database Table#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.table.TableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the table;

must be unique for the database and schema in which the table is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#name Table#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.table.TableConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#schema Table#schema}

---

##### `changeTracking`<sup>Optional</sup> <a name="changeTracking" id="@cdktf/provider-snowflake.table.TableConfig.property.changeTracking"></a>

```typescript
public readonly changeTracking: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `false`) Specifies whether to enable change tracking on the table. Default false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#change_tracking Table#change_tracking}

---

##### `clusterBy`<sup>Optional</sup> <a name="clusterBy" id="@cdktf/provider-snowflake.table.TableConfig.property.clusterBy"></a>

```typescript
public readonly clusterBy: string[];
```

- *Type:* string[]

A list of one or more table columns/expressions to be used as clustering key(s) for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#cluster_by Table#cluster_by}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.table.TableConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#comment Table#comment}

---

##### `dataRetentionTimeInDays`<sup>Optional</sup> <a name="dataRetentionTimeInDays" id="@cdktf/provider-snowflake.table.TableConfig.property.dataRetentionTimeInDays"></a>

```typescript
public readonly dataRetentionTimeInDays: number;
```

- *Type:* number

(Default: fallback to Snowflake default - uses special value that cannot be set in the configuration manually (`-1`)) Specifies the retention period for the table so that Time Travel actions (SELECT, CLONE, UNDROP) can be performed on historical data in the table.

If you wish to inherit the parent schema setting then pass in the schema attribute to this argument or do not fill this parameter at all; the default value for this field is -1, which is a fallback to use Snowflake default - in this case the schema value

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#data_retention_time_in_days Table#data_retention_time_in_days}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.table.TableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#id Table#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `primaryKey`<sup>Optional</sup> <a name="primaryKey" id="@cdktf/provider-snowflake.table.TableConfig.property.primaryKey"></a>

```typescript
public readonly primaryKey: TablePrimaryKey;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TablePrimaryKey">TablePrimaryKey</a>

primary_key block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#primary_key Table#primary_key}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-snowflake.table.TableConfig.property.tag"></a>

```typescript
public readonly tag: IResolvable | TableTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableTag">TableTag</a>[]

tag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#tag Table#tag}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.table.TableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: TableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableTimeouts">TableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#timeouts Table#timeouts}

---

### TablePrimaryKey <a name="TablePrimaryKey" id="@cdktf/provider-snowflake.table.TablePrimaryKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.table.TablePrimaryKey.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

const tablePrimaryKey: table.TablePrimaryKey = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKey.property.keys">keys</a></code> | <code>string[]</code> | Columns to use in primary key. |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKey.property.name">name</a></code> | <code>string</code> | Name of constraint. |

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-snowflake.table.TablePrimaryKey.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

Columns to use in primary key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#keys Table#keys}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-snowflake.table.TablePrimaryKey.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#name Table#name}

---

### TableTag <a name="TableTag" id="@cdktf/provider-snowflake.table.TableTag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.table.TableTag.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

const tableTag: table.TableTag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTag.property.name">name</a></code> | <code>string</code> | Tag name, e.g. department. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTag.property.value">value</a></code> | <code>string</code> | Tag value, e.g. marketing_info. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTag.property.database">database</a></code> | <code>string</code> | Name of the database that the tag was created in. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTag.property.schema">schema</a></code> | <code>string</code> | Name of the schema that the tag was created in. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.table.TableTag.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Tag name, e.g. department.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#name Table#name}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.table.TableTag.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Tag value, e.g. marketing_info.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#value Table#value}

---

##### `database`<sup>Optional</sup> <a name="database" id="@cdktf/provider-snowflake.table.TableTag.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

Name of the database that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#database Table#database}

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktf/provider-snowflake.table.TableTag.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

Name of the schema that the tag was created in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#schema Table#schema}

---

### TableTimeouts <a name="TableTimeouts" id="@cdktf/provider-snowflake.table.TableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.table.TableTimeouts.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

const tableTimeouts: table.TableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#create Table#create}. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#delete Table#delete}. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#read Table#read}. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#update Table#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.table.TableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#create Table#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.table.TableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#delete Table#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.table.TableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#read Table#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.table.TableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table#update Table#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TableColumnDefaultOutputReference <a name="TableColumnDefaultOutputReference" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

new table.TableColumnDefaultOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.resetConstant">resetConstant</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.resetExpression">resetExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.resetSequence">resetSequence</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConstant` <a name="resetConstant" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.resetConstant"></a>

```typescript
public resetConstant(): void
```

##### `resetExpression` <a name="resetExpression" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.resetExpression"></a>

```typescript
public resetExpression(): void
```

##### `resetSequence` <a name="resetSequence" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.resetSequence"></a>

```typescript
public resetSequence(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.constantInput">constantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.expressionInput">expressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.sequenceInput">sequenceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.constant">constant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.expression">expression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.sequence">sequence</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefault">TableColumnDefault</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `constantInput`<sup>Optional</sup> <a name="constantInput" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.constantInput"></a>

```typescript
public readonly constantInput: string;
```

- *Type:* string

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.expressionInput"></a>

```typescript
public readonly expressionInput: string;
```

- *Type:* string

---

##### `sequenceInput`<sup>Optional</sup> <a name="sequenceInput" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.sequenceInput"></a>

```typescript
public readonly sequenceInput: string;
```

- *Type:* string

---

##### `constant`<sup>Required</sup> <a name="constant" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.constant"></a>

```typescript
public readonly constant: string;
```

- *Type:* string

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.expression"></a>

```typescript
public readonly expression: string;
```

- *Type:* string

---

##### `sequence`<sup>Required</sup> <a name="sequence" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.sequence"></a>

```typescript
public readonly sequence: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TableColumnDefault;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnDefault">TableColumnDefault</a>

---


### TableColumnIdentityOutputReference <a name="TableColumnIdentityOutputReference" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

new table.TableColumnIdentityOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.resetStartNum">resetStartNum</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.resetStepNum">resetStepNum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStartNum` <a name="resetStartNum" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.resetStartNum"></a>

```typescript
public resetStartNum(): void
```

##### `resetStepNum` <a name="resetStepNum" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.resetStepNum"></a>

```typescript
public resetStepNum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.startNumInput">startNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.stepNumInput">stepNumInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.startNum">startNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.stepNum">stepNum</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentity">TableColumnIdentity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `startNumInput`<sup>Optional</sup> <a name="startNumInput" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.startNumInput"></a>

```typescript
public readonly startNumInput: number;
```

- *Type:* number

---

##### `stepNumInput`<sup>Optional</sup> <a name="stepNumInput" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.stepNumInput"></a>

```typescript
public readonly stepNumInput: number;
```

- *Type:* number

---

##### `startNum`<sup>Required</sup> <a name="startNum" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.startNum"></a>

```typescript
public readonly startNum: number;
```

- *Type:* number

---

##### `stepNum`<sup>Required</sup> <a name="stepNum" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.stepNum"></a>

```typescript
public readonly stepNum: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TableColumnIdentity;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnIdentity">TableColumnIdentity</a>

---


### TableColumnList <a name="TableColumnList" id="@cdktf/provider-snowflake.table.TableColumnList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.table.TableColumnList.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

new table.TableColumnList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.table.TableColumnList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.table.TableColumnList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.table.TableColumnList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.table.TableColumnList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.table.TableColumnList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.table.TableColumnList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.table.TableColumnList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.table.TableColumnList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.table.TableColumnList.get"></a>

```typescript
public get(index: number): TableColumnOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.table.TableColumnList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableColumn">TableColumn</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.table.TableColumnList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.table.TableColumnList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.table.TableColumnList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TableColumn[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableColumn">TableColumn</a>[]

---


### TableColumnOutputReference <a name="TableColumnOutputReference" id="@cdktf/provider-snowflake.table.TableColumnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

new table.TableColumnOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.putDefault">putDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.putIdentity">putIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.resetCollate">resetCollate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.resetDefault">resetDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.resetIdentity">resetIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.resetMaskingPolicy">resetMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.resetNullable">resetNullable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDefault` <a name="putDefault" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.putDefault"></a>

```typescript
public putDefault(value: TableColumnDefault): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.putDefault.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnDefault">TableColumnDefault</a>

---

##### `putIdentity` <a name="putIdentity" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.putIdentity"></a>

```typescript
public putIdentity(value: TableColumnIdentity): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.putIdentity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnIdentity">TableColumnIdentity</a>

---

##### `resetCollate` <a name="resetCollate" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.resetCollate"></a>

```typescript
public resetCollate(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDefault` <a name="resetDefault" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.resetDefault"></a>

```typescript
public resetDefault(): void
```

##### `resetIdentity` <a name="resetIdentity" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.resetIdentity"></a>

```typescript
public resetIdentity(): void
```

##### `resetMaskingPolicy` <a name="resetMaskingPolicy" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.resetMaskingPolicy"></a>

```typescript
public resetMaskingPolicy(): void
```

##### `resetNullable` <a name="resetNullable" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.resetNullable"></a>

```typescript
public resetNullable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.default">default</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference">TableColumnDefaultOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.identity">identity</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference">TableColumnIdentityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.schemaEvolutionRecord">schemaEvolutionRecord</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.collateInput">collateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.defaultInput">defaultInput</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableColumnDefault">TableColumnDefault</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.identityInput">identityInput</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TableColumnIdentity">TableColumnIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.maskingPolicyInput">maskingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.nullableInput">nullableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.collate">collate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.maskingPolicy">maskingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.nullable">nullable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableColumnOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableColumn">TableColumn</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `default`<sup>Required</sup> <a name="default" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.default"></a>

```typescript
public readonly default: TableColumnDefaultOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnDefaultOutputReference">TableColumnDefaultOutputReference</a>

---

##### `identity`<sup>Required</sup> <a name="identity" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.identity"></a>

```typescript
public readonly identity: TableColumnIdentityOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnIdentityOutputReference">TableColumnIdentityOutputReference</a>

---

##### `schemaEvolutionRecord`<sup>Required</sup> <a name="schemaEvolutionRecord" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.schemaEvolutionRecord"></a>

```typescript
public readonly schemaEvolutionRecord: string;
```

- *Type:* string

---

##### `collateInput`<sup>Optional</sup> <a name="collateInput" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.collateInput"></a>

```typescript
public readonly collateInput: string;
```

- *Type:* string

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `defaultInput`<sup>Optional</sup> <a name="defaultInput" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.defaultInput"></a>

```typescript
public readonly defaultInput: TableColumnDefault;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnDefault">TableColumnDefault</a>

---

##### `identityInput`<sup>Optional</sup> <a name="identityInput" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.identityInput"></a>

```typescript
public readonly identityInput: TableColumnIdentity;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TableColumnIdentity">TableColumnIdentity</a>

---

##### `maskingPolicyInput`<sup>Optional</sup> <a name="maskingPolicyInput" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.maskingPolicyInput"></a>

```typescript
public readonly maskingPolicyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `nullableInput`<sup>Optional</sup> <a name="nullableInput" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.nullableInput"></a>

```typescript
public readonly nullableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `collate`<sup>Required</sup> <a name="collate" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.collate"></a>

```typescript
public readonly collate: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `maskingPolicy`<sup>Required</sup> <a name="maskingPolicy" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.maskingPolicy"></a>

```typescript
public readonly maskingPolicy: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nullable`<sup>Required</sup> <a name="nullable" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.nullable"></a>

```typescript
public readonly nullable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.table.TableColumnOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TableColumn;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableColumn">TableColumn</a>

---


### TablePrimaryKeyOutputReference <a name="TablePrimaryKeyOutputReference" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

new table.TablePrimaryKeyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.resetName"></a>

```typescript
public resetName(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.keysInput">keysInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.keys">keys</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.table.TablePrimaryKey">TablePrimaryKey</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keysInput`<sup>Optional</sup> <a name="keysInput" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.keysInput"></a>

```typescript
public readonly keysInput: string[];
```

- *Type:* string[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `keys`<sup>Required</sup> <a name="keys" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.keys"></a>

```typescript
public readonly keys: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.table.TablePrimaryKeyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TablePrimaryKey;
```

- *Type:* <a href="#@cdktf/provider-snowflake.table.TablePrimaryKey">TablePrimaryKey</a>

---


### TableTagList <a name="TableTagList" id="@cdktf/provider-snowflake.table.TableTagList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.table.TableTagList.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

new table.TableTagList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.table.TableTagList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.table.TableTagList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.table.TableTagList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.table.TableTagList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.table.TableTagList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.table.TableTagList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.table.TableTagList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.table.TableTagList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.table.TableTagList.get"></a>

```typescript
public get(index: number): TableTagOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.table.TableTagList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableTag">TableTag</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.table.TableTagList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.table.TableTagList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.table.TableTagList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TableTag[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableTag">TableTag</a>[]

---


### TableTagOutputReference <a name="TableTagOutputReference" id="@cdktf/provider-snowflake.table.TableTagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.table.TableTagOutputReference.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

new table.TableTagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.table.TableTagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.table.TableTagOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.table.TableTagOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.resetDatabase">resetDatabase</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.table.TableTagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.table.TableTagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.table.TableTagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.table.TableTagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.table.TableTagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.table.TableTagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDatabase` <a name="resetDatabase" id="@cdktf/provider-snowflake.table.TableTagOutputReference.resetDatabase"></a>

```typescript
public resetDatabase(): void
```

##### `resetSchema` <a name="resetSchema" id="@cdktf/provider-snowflake.table.TableTagOutputReference.resetSchema"></a>

```typescript
public resetSchema(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTagOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableTag">TableTag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.table.TableTagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TableTag;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableTag">TableTag</a>

---


### TableTimeoutsOutputReference <a name="TableTimeoutsOutputReference" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.Initializer"></a>

```typescript
import { table } from '@cdktf/provider-snowflake'

new table.TableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.table.TableTimeouts">TableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.table.TableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.table.TableTimeouts">TableTimeouts</a>

---



