# `dynamicTable` Submodule <a name="`dynamicTable` Submodule" id="@cdktf/provider-snowflake.dynamicTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DynamicTable <a name="DynamicTable" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table snowflake_dynamic_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

new dynamicTable.DynamicTable(scope: Construct, id: string, config: DynamicTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig">DynamicTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig">DynamicTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTargetLag">putTargetLag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetInitialize">resetInitialize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOrReplace">resetOrReplace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetRefreshMode">resetRefreshMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTargetLag` <a name="putTargetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTargetLag"></a>

```typescript
public putTargetLag(value: DynamicTableTargetLag): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTargetLag.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTimeouts"></a>

```typescript
public putTimeouts(value: DynamicTableTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitialize` <a name="resetInitialize" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetInitialize"></a>

```typescript
public resetInitialize(): void
```

##### `resetOrReplace` <a name="resetOrReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetOrReplace"></a>

```typescript
public resetOrReplace(): void
```

##### `resetRefreshMode` <a name="resetRefreshMode" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetRefreshMode"></a>

```typescript
public resetRefreshMode(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DynamicTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isConstruct"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

dynamicTable.DynamicTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformElement"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

dynamicTable.DynamicTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformResource"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

dynamicTable.DynamicTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

dynamicTable.DynamicTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DynamicTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DynamicTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DynamicTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DynamicTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.automaticClustering">automaticClustering</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.bytes">bytes</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.clusterBy">clusterBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dataTimestamp">dataTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isClone">isClone</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isReplica">isReplica</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lastSuspendedOn">lastSuspendedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeReason">refreshModeReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.rows">rows</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schedulingState">schedulingState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLag">targetLag</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference">DynamicTableTargetLagOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference">DynamicTableTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.initializeInput">initializeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplaceInput">orReplaceInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.queryInput">queryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeInput">refreshModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLagInput">targetLagInput</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouseInput">warehouseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.initialize">initialize</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplace">orReplace</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.query">query</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshMode">refreshMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouse">warehouse</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `automaticClustering`<sup>Required</sup> <a name="automaticClustering" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.automaticClustering"></a>

```typescript
public readonly automaticClustering: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `bytes`<sup>Required</sup> <a name="bytes" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.bytes"></a>

```typescript
public readonly bytes: number;
```

- *Type:* number

---

##### `clusterBy`<sup>Required</sup> <a name="clusterBy" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.clusterBy"></a>

```typescript
public readonly clusterBy: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `dataTimestamp`<sup>Required</sup> <a name="dataTimestamp" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.dataTimestamp"></a>

```typescript
public readonly dataTimestamp: string;
```

- *Type:* string

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `isClone`<sup>Required</sup> <a name="isClone" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isClone"></a>

```typescript
public readonly isClone: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `isReplica`<sup>Required</sup> <a name="isReplica" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.isReplica"></a>

```typescript
public readonly isReplica: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `lastSuspendedOn`<sup>Required</sup> <a name="lastSuspendedOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.lastSuspendedOn"></a>

```typescript
public readonly lastSuspendedOn: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `refreshModeReason`<sup>Required</sup> <a name="refreshModeReason" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeReason"></a>

```typescript
public readonly refreshModeReason: string;
```

- *Type:* string

---

##### `rows`<sup>Required</sup> <a name="rows" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.rows"></a>

```typescript
public readonly rows: number;
```

- *Type:* number

---

##### `schedulingState`<sup>Required</sup> <a name="schedulingState" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schedulingState"></a>

```typescript
public readonly schedulingState: string;
```

- *Type:* string

---

##### `targetLag`<sup>Required</sup> <a name="targetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLag"></a>

```typescript
public readonly targetLag: DynamicTableTargetLagOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference">DynamicTableTargetLagOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.timeouts"></a>

```typescript
public readonly timeouts: DynamicTableTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference">DynamicTableTimeoutsOutputReference</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initializeInput`<sup>Optional</sup> <a name="initializeInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.initializeInput"></a>

```typescript
public readonly initializeInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `orReplaceInput`<sup>Optional</sup> <a name="orReplaceInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplaceInput"></a>

```typescript
public readonly orReplaceInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.queryInput"></a>

```typescript
public readonly queryInput: string;
```

- *Type:* string

---

##### `refreshModeInput`<sup>Optional</sup> <a name="refreshModeInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshModeInput"></a>

```typescript
public readonly refreshModeInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `targetLagInput`<sup>Optional</sup> <a name="targetLagInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.targetLagInput"></a>

```typescript
public readonly targetLagInput: DynamicTableTargetLag;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DynamicTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a>

---

##### `warehouseInput`<sup>Optional</sup> <a name="warehouseInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouseInput"></a>

```typescript
public readonly warehouseInput: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initialize`<sup>Required</sup> <a name="initialize" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.initialize"></a>

```typescript
public readonly initialize: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `orReplace`<sup>Required</sup> <a name="orReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.orReplace"></a>

```typescript
public readonly orReplace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

---

##### `refreshMode`<sup>Required</sup> <a name="refreshMode" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.refreshMode"></a>

```typescript
public readonly refreshMode: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.dynamicTable.DynamicTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DynamicTableConfig <a name="DynamicTableConfig" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.Initializer"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

const dynamicTableConfig: dynamicTable.DynamicTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for the dynamic table; must be unique for the schema in which the dynamic table is created. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.query">query</a></code> | <code>string</code> | Specifies the query to use to populate the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.targetLag">targetLag</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | target_lag block. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.warehouse">warehouse</a></code> | <code>string</code> | The warehouse in which to create the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#id DynamicTable#id}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.initialize">initialize</a></code> | <code>string</code> | (Default: `ON_CREATE`) Initialize trigger for the dynamic table. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.orReplace">orReplace</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `false`) Specifies whether to replace the dynamic table if it already exists. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.refreshMode">refreshMode</a></code> | <code>string</code> | (Default: `AUTO`) INCREMENTAL to use incremental refreshes, FULL to recompute the whole table on every refresh, or AUTO to let Snowflake decide. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#database DynamicTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for the dynamic table; must be unique for the schema in which the dynamic table is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#name DynamicTable#name}

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.query"></a>

```typescript
public readonly query: string;
```

- *Type:* string

Specifies the query to use to populate the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#query DynamicTable#query}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#schema DynamicTable#schema}

---

##### `targetLag`<sup>Required</sup> <a name="targetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.targetLag"></a>

```typescript
public readonly targetLag: DynamicTableTargetLag;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

target_lag block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#target_lag DynamicTable#target_lag}

---

##### `warehouse`<sup>Required</sup> <a name="warehouse" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.warehouse"></a>

```typescript
public readonly warehouse: string;
```

- *Type:* string

The warehouse in which to create the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#warehouse DynamicTable#warehouse}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#comment DynamicTable#comment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#id DynamicTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initialize`<sup>Optional</sup> <a name="initialize" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.initialize"></a>

```typescript
public readonly initialize: string;
```

- *Type:* string

(Default: `ON_CREATE`) Initialize trigger for the dynamic table.

Can only be set on creation. Available options are ON_CREATE and ON_SCHEDULE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#initialize DynamicTable#initialize}

---

##### `orReplace`<sup>Optional</sup> <a name="orReplace" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.orReplace"></a>

```typescript
public readonly orReplace: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `false`) Specifies whether to replace the dynamic table if it already exists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#or_replace DynamicTable#or_replace}

---

##### `refreshMode`<sup>Optional</sup> <a name="refreshMode" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.refreshMode"></a>

```typescript
public readonly refreshMode: string;
```

- *Type:* string

(Default: `AUTO`) INCREMENTAL to use incremental refreshes, FULL to recompute the whole table on every refresh, or AUTO to let Snowflake decide.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#refresh_mode DynamicTable#refresh_mode}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DynamicTableTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#timeouts DynamicTable#timeouts}

---

### DynamicTableTargetLag <a name="DynamicTableTargetLag" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.Initializer"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

const dynamicTableTargetLag: dynamicTable.DynamicTableTargetLag = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.downstream">downstream</a></code> | <code>boolean \| cdktf.IResolvable</code> | Specifies whether the target lag time is downstream. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.maximumDuration">maximumDuration</a></code> | <code>string</code> | Specifies the maximum target lag time for the dynamic table. |

---

##### `downstream`<sup>Optional</sup> <a name="downstream" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.downstream"></a>

```typescript
public readonly downstream: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Specifies whether the target lag time is downstream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#downstream DynamicTable#downstream}

---

##### `maximumDuration`<sup>Optional</sup> <a name="maximumDuration" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: string;
```

- *Type:* string

Specifies the maximum target lag time for the dynamic table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#maximum_duration DynamicTable#maximum_duration}

---

### DynamicTableTimeouts <a name="DynamicTableTimeouts" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.Initializer"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

const dynamicTableTimeouts: dynamicTable.DynamicTableTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#create DynamicTable#create}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#delete DynamicTable#delete}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#read DynamicTable#read}. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#update DynamicTable#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#create DynamicTable#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#delete DynamicTable#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#read DynamicTable#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.9.0/docs/resources/dynamic_table#update DynamicTable#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DynamicTableTargetLagOutputReference <a name="DynamicTableTargetLagOutputReference" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

new dynamicTable.DynamicTableTargetLagOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetDownstream">resetDownstream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetMaximumDuration">resetMaximumDuration</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDownstream` <a name="resetDownstream" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetDownstream"></a>

```typescript
public resetDownstream(): void
```

##### `resetMaximumDuration` <a name="resetMaximumDuration" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.resetMaximumDuration"></a>

```typescript
public resetMaximumDuration(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstreamInput">downstreamInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDurationInput">maximumDurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstream">downstream</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDuration">maximumDuration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `downstreamInput`<sup>Optional</sup> <a name="downstreamInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstreamInput"></a>

```typescript
public readonly downstreamInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumDurationInput`<sup>Optional</sup> <a name="maximumDurationInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDurationInput"></a>

```typescript
public readonly maximumDurationInput: string;
```

- *Type:* string

---

##### `downstream`<sup>Required</sup> <a name="downstream" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.downstream"></a>

```typescript
public readonly downstream: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `maximumDuration`<sup>Required</sup> <a name="maximumDuration" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.maximumDuration"></a>

```typescript
public readonly maximumDuration: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLagOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DynamicTableTargetLag;
```

- *Type:* <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTargetLag">DynamicTableTargetLag</a>

---


### DynamicTableTimeoutsOutputReference <a name="DynamicTableTimeoutsOutputReference" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer"></a>

```typescript
import { dynamicTable } from '@cdktf/provider-snowflake'

new dynamicTable.DynamicTableTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DynamicTableTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.dynamicTable.DynamicTableTimeouts">DynamicTableTimeouts</a>

---



