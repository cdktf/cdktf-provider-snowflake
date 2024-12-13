# `streamOnTable` Submodule <a name="`streamOnTable` Submodule" id="@cdktf/provider-snowflake.streamOnTable"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamOnTable <a name="StreamOnTable" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table snowflake_stream_on_table}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

new streamOnTable.StreamOnTable(scope: Construct, id: string, config: StreamOnTableConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig">StreamOnTableConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig">StreamOnTableConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.putAt">putAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.putBefore">putBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetAppendOnly">resetAppendOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetAt">resetAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetBefore">resetBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetCopyGrants">resetCopyGrants</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetShowInitialRows">resetShowInitialRows</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAt` <a name="putAt" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.putAt"></a>

```typescript
public putAt(value: StreamOnTableAt): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.putAt.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt">StreamOnTableAt</a>

---

##### `putBefore` <a name="putBefore" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.putBefore"></a>

```typescript
public putBefore(value: StreamOnTableBefore): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.putBefore.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore">StreamOnTableBefore</a>

---

##### `resetAppendOnly` <a name="resetAppendOnly" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetAppendOnly"></a>

```typescript
public resetAppendOnly(): void
```

##### `resetAt` <a name="resetAt" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetAt"></a>

```typescript
public resetAt(): void
```

##### `resetBefore` <a name="resetBefore" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetBefore"></a>

```typescript
public resetBefore(): void
```

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetCopyGrants` <a name="resetCopyGrants" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetCopyGrants"></a>

```typescript
public resetCopyGrants(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetId"></a>

```typescript
public resetId(): void
```

##### `resetShowInitialRows` <a name="resetShowInitialRows" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.resetShowInitialRows"></a>

```typescript
public resetShowInitialRows(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a StreamOnTable resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.isConstruct"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

streamOnTable.StreamOnTable.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.isTerraformElement"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

streamOnTable.StreamOnTable.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.isTerraformResource"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

streamOnTable.StreamOnTable.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.generateConfigForImport"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

streamOnTable.StreamOnTable.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a StreamOnTable resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamOnTable to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamOnTable that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the StreamOnTable to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.at">at</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference">StreamOnTableAtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.before">before</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference">StreamOnTableBeforeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.describeOutput">describeOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList">StreamOnTableDescribeOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.fullyQualifiedName">fullyQualifiedName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.showOutput">showOutput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList">StreamOnTableShowOutputList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.stale">stale</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.streamType">streamType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.appendOnlyInput">appendOnlyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.atInput">atInput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt">StreamOnTableAt</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.beforeInput">beforeInput</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore">StreamOnTableBefore</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.copyGrantsInput">copyGrantsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.databaseInput">databaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.schemaInput">schemaInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.showInitialRowsInput">showInitialRowsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.appendOnly">appendOnly</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.copyGrants">copyGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.database">database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.schema">schema</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.showInitialRows">showInitialRows</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.table">table</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `at`<sup>Required</sup> <a name="at" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.at"></a>

```typescript
public readonly at: StreamOnTableAtOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference">StreamOnTableAtOutputReference</a>

---

##### `before`<sup>Required</sup> <a name="before" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.before"></a>

```typescript
public readonly before: StreamOnTableBeforeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference">StreamOnTableBeforeOutputReference</a>

---

##### `describeOutput`<sup>Required</sup> <a name="describeOutput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.describeOutput"></a>

```typescript
public readonly describeOutput: StreamOnTableDescribeOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList">StreamOnTableDescribeOutputList</a>

---

##### `fullyQualifiedName`<sup>Required</sup> <a name="fullyQualifiedName" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.fullyQualifiedName"></a>

```typescript
public readonly fullyQualifiedName: string;
```

- *Type:* string

---

##### `showOutput`<sup>Required</sup> <a name="showOutput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.showOutput"></a>

```typescript
public readonly showOutput: StreamOnTableShowOutputList;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList">StreamOnTableShowOutputList</a>

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `streamType`<sup>Required</sup> <a name="streamType" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.streamType"></a>

```typescript
public readonly streamType: string;
```

- *Type:* string

---

##### `appendOnlyInput`<sup>Optional</sup> <a name="appendOnlyInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.appendOnlyInput"></a>

```typescript
public readonly appendOnlyInput: string;
```

- *Type:* string

---

##### `atInput`<sup>Optional</sup> <a name="atInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.atInput"></a>

```typescript
public readonly atInput: StreamOnTableAt;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt">StreamOnTableAt</a>

---

##### `beforeInput`<sup>Optional</sup> <a name="beforeInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.beforeInput"></a>

```typescript
public readonly beforeInput: StreamOnTableBefore;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore">StreamOnTableBefore</a>

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `copyGrantsInput`<sup>Optional</sup> <a name="copyGrantsInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.copyGrantsInput"></a>

```typescript
public readonly copyGrantsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `databaseInput`<sup>Optional</sup> <a name="databaseInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.databaseInput"></a>

```typescript
public readonly databaseInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.schemaInput"></a>

```typescript
public readonly schemaInput: string;
```

- *Type:* string

---

##### `showInitialRowsInput`<sup>Optional</sup> <a name="showInitialRowsInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.showInitialRowsInput"></a>

```typescript
public readonly showInitialRowsInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `appendOnly`<sup>Required</sup> <a name="appendOnly" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.appendOnly"></a>

```typescript
public readonly appendOnly: string;
```

- *Type:* string

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `copyGrants`<sup>Required</sup> <a name="copyGrants" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.copyGrants"></a>

```typescript
public readonly copyGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

---

##### `showInitialRows`<sup>Required</sup> <a name="showInitialRows" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.showInitialRows"></a>

```typescript
public readonly showInitialRows: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTable.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamOnTableAt <a name="StreamOnTableAt" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

const streamOnTableAt: streamOnTable.StreamOnTableAt = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt.property.offset">offset</a></code> | <code>string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt.property.statement">statement</a></code> | <code>string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt.property.stream">stream</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt.property.timestamp">timestamp</a></code> | <code>string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#offset StreamOnTable#offset}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#statement StreamOnTable#statement}

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#stream StreamOnTable#stream}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#timestamp StreamOnTable#timestamp}

---

### StreamOnTableBefore <a name="StreamOnTableBefore" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

const streamOnTableBefore: streamOnTable.StreamOnTableBefore = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore.property.offset">offset</a></code> | <code>string</code> | Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes). |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore.property.statement">statement</a></code> | <code>string</code> | Specifies the query ID of a statement to use as the reference point for Time Travel. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore.property.stream">stream</a></code> | <code>string</code> | Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore.property.timestamp">timestamp</a></code> | <code>string</code> | Specifies an exact date and time to use for Time Travel. |

---

##### `offset`<sup>Optional</sup> <a name="offset" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

Specifies the difference in seconds from the current time to use for Time Travel, in the form -N where N can be an integer or arithmetic expression (e.g. -120 is 120 seconds, -30*60 is 1800 seconds or 30 minutes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#offset StreamOnTable#offset}

---

##### `statement`<sup>Optional</sup> <a name="statement" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

Specifies the query ID of a statement to use as the reference point for Time Travel.

This parameter supports any statement of one of the following types: DML (e.g. INSERT, UPDATE, DELETE), TCL (BEGIN, COMMIT transaction), SELECT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#statement StreamOnTable#statement}

---

##### `stream`<sup>Optional</sup> <a name="stream" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

Specifies the identifier (i.e. name) for an existing stream on the queried table or view. The current offset in the stream is used as the AT point in time for returning change data for the source object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#stream StreamOnTable#stream}

---

##### `timestamp`<sup>Optional</sup> <a name="timestamp" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

Specifies an exact date and time to use for Time Travel.

The value must be explicitly cast to a TIMESTAMP, TIMESTAMP_LTZ, TIMESTAMP_NTZ, or TIMESTAMP_TZ data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#timestamp StreamOnTable#timestamp}

---

### StreamOnTableConfig <a name="StreamOnTableConfig" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

const streamOnTableConfig: streamOnTable.StreamOnTableConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.database">database</a></code> | <code>string</code> | The database in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.name">name</a></code> | <code>string</code> | Specifies the identifier for the stream; |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.schema">schema</a></code> | <code>string</code> | The schema in which to create the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.table">table</a></code> | <code>string</code> | Specifies an identifier for the table the stream will monitor. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.appendOnly">appendOnly</a></code> | <code>string</code> | Specifies whether this is an append-only stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.at">at</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt">StreamOnTableAt</a></code> | at block. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.before">before</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore">StreamOnTableBefore</a></code> | before block. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.comment">comment</a></code> | <code>string</code> | Specifies a comment for the stream. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.copyGrants">copyGrants</a></code> | <code>boolean \| cdktf.IResolvable</code> | Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#id StreamOnTable#id}. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.showInitialRows">showInitialRows</a></code> | <code>string</code> | Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `database`<sup>Required</sup> <a name="database" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.database"></a>

```typescript
public readonly database: string;
```

- *Type:* string

The database in which to create the stream.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#database StreamOnTable#database}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Specifies the identifier for the stream;

must be unique for the database and schema in which the stream is created. Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#name StreamOnTable#name}

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.schema"></a>

```typescript
public readonly schema: string;
```

- *Type:* string

The schema in which to create the stream.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#schema StreamOnTable#schema}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

Specifies an identifier for the table the stream will monitor.

Due to technical limitations (read more [here](https://github.com/Snowflake-Labs/terraform-provider-snowflake/blob/main/docs/technical-documentation/identifiers_rework_design_decisions.md#known-limitations-and-identifier-recommendations)), avoid using the following characters: `|`, `.`, `"`. For more information about this resource, see [docs](./table).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#table StreamOnTable#table}

---

##### `appendOnly`<sup>Optional</sup> <a name="appendOnly" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.appendOnly"></a>

```typescript
public readonly appendOnly: string;
```

- *Type:* string

Specifies whether this is an append-only stream.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#append_only StreamOnTable#append_only}

---

##### `at`<sup>Optional</sup> <a name="at" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.at"></a>

```typescript
public readonly at: StreamOnTableAt;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt">StreamOnTableAt</a>

at block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#at StreamOnTable#at}

---

##### `before`<sup>Optional</sup> <a name="before" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.before"></a>

```typescript
public readonly before: StreamOnTableBefore;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore">StreamOnTableBefore</a>

before block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#before StreamOnTable#before}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Specifies a comment for the stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#comment StreamOnTable#comment}

---

##### `copyGrants`<sup>Optional</sup> <a name="copyGrants" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.copyGrants"></a>

```typescript
public readonly copyGrants: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Retains the access permissions from the original stream when a stream is recreated using the OR REPLACE clause.

This is used when the provider detects changes for fields that can not be changed by ALTER. This value will not have any effect during creating a new object with Terraform.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#copy_grants StreamOnTable#copy_grants}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#id StreamOnTable#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `showInitialRows`<sup>Optional</sup> <a name="showInitialRows" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableConfig.property.showInitialRows"></a>

```typescript
public readonly showInitialRows: string;
```

- *Type:* string

Specifies whether to return all existing rows in the source table as row inserts the first time the stream is consumed.

Available options are: "true" or "false". When the value is not set in the configuration the provider will put "default" there which means to use the Snowflake default for this value. External changes for this field won't be detected. In case you want to apply external changes, you can re-create the resource manually using "terraform taint".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.100.0/docs/resources/stream_on_table#show_initial_rows StreamOnTable#show_initial_rows}

---

### StreamOnTableDescribeOutput <a name="StreamOnTableDescribeOutput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutput.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

const streamOnTableDescribeOutput: streamOnTable.StreamOnTableDescribeOutput = { ... }
```


### StreamOnTableShowOutput <a name="StreamOnTableShowOutput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutput"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutput.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

const streamOnTableShowOutput: streamOnTable.StreamOnTableShowOutput = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### StreamOnTableAtOutputReference <a name="StreamOnTableAtOutputReference" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

new streamOnTable.StreamOnTableAtOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resetStatement">resetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resetStream">resetStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetStatement` <a name="resetStatement" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```

##### `resetStream` <a name="resetStream" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resetStream"></a>

```typescript
public resetStream(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.streamInput">streamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.timestampInput">timestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.stream">stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt">StreamOnTableAt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.streamInput"></a>

```typescript
public readonly streamInput: string;
```

- *Type:* string

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableAtOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnTableAt;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableAt">StreamOnTableAt</a>

---


### StreamOnTableBeforeOutputReference <a name="StreamOnTableBeforeOutputReference" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

new streamOnTable.StreamOnTableBeforeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resetOffset">resetOffset</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resetStatement">resetStatement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resetStream">resetStream</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resetTimestamp">resetTimestamp</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOffset` <a name="resetOffset" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resetOffset"></a>

```typescript
public resetOffset(): void
```

##### `resetStatement` <a name="resetStatement" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resetStatement"></a>

```typescript
public resetStatement(): void
```

##### `resetStream` <a name="resetStream" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resetStream"></a>

```typescript
public resetStream(): void
```

##### `resetTimestamp` <a name="resetTimestamp" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.resetTimestamp"></a>

```typescript
public resetTimestamp(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.offsetInput">offsetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.statementInput">statementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.streamInput">streamInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.timestampInput">timestampInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.offset">offset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.statement">statement</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.stream">stream</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.timestamp">timestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore">StreamOnTableBefore</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `offsetInput`<sup>Optional</sup> <a name="offsetInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.offsetInput"></a>

```typescript
public readonly offsetInput: string;
```

- *Type:* string

---

##### `statementInput`<sup>Optional</sup> <a name="statementInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.statementInput"></a>

```typescript
public readonly statementInput: string;
```

- *Type:* string

---

##### `streamInput`<sup>Optional</sup> <a name="streamInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.streamInput"></a>

```typescript
public readonly streamInput: string;
```

- *Type:* string

---

##### `timestampInput`<sup>Optional</sup> <a name="timestampInput" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.timestampInput"></a>

```typescript
public readonly timestampInput: string;
```

- *Type:* string

---

##### `offset`<sup>Required</sup> <a name="offset" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.offset"></a>

```typescript
public readonly offset: string;
```

- *Type:* string

---

##### `statement`<sup>Required</sup> <a name="statement" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.statement"></a>

```typescript
public readonly statement: string;
```

- *Type:* string

---

##### `stream`<sup>Required</sup> <a name="stream" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.stream"></a>

```typescript
public readonly stream: string;
```

- *Type:* string

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.timestamp"></a>

```typescript
public readonly timestamp: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableBeforeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnTableBefore;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableBefore">StreamOnTableBefore</a>

---


### StreamOnTableDescribeOutputList <a name="StreamOnTableDescribeOutputList" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

new streamOnTable.StreamOnTableDescribeOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.get"></a>

```typescript
public get(index: number): StreamOnTableDescribeOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StreamOnTableDescribeOutputOutputReference <a name="StreamOnTableDescribeOutputOutputReference" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

new streamOnTable.StreamOnTableDescribeOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.baseTables">baseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.invalidReason">invalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.stale">stale</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.staleAfter">staleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutput">StreamOnTableDescribeOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTables`<sup>Required</sup> <a name="baseTables" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.baseTables"></a>

```typescript
public readonly baseTables: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `invalidReason`<sup>Required</sup> <a name="invalidReason" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.invalidReason"></a>

```typescript
public readonly invalidReason: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `staleAfter`<sup>Required</sup> <a name="staleAfter" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.staleAfter"></a>

```typescript
public readonly staleAfter: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnTableDescribeOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableDescribeOutput">StreamOnTableDescribeOutput</a>

---


### StreamOnTableShowOutputList <a name="StreamOnTableShowOutputList" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

new streamOnTable.StreamOnTableShowOutputList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.get"></a>

```typescript
public get(index: number): StreamOnTableShowOutputOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### StreamOnTableShowOutputOutputReference <a name="StreamOnTableShowOutputOutputReference" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.Initializer"></a>

```typescript
import { streamOnTable } from '@cdktf/provider-snowflake'

new streamOnTable.StreamOnTableShowOutputOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.baseTables">baseTables</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.createdOn">createdOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.databaseName">databaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.invalidReason">invalidReason</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.owner">owner</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.ownerRoleType">ownerRoleType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.schemaName">schemaName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.sourceType">sourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.stale">stale</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.staleAfter">staleAfter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.tableName">tableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutput">StreamOnTableShowOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `baseTables`<sup>Required</sup> <a name="baseTables" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.baseTables"></a>

```typescript
public readonly baseTables: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.createdOn"></a>

```typescript
public readonly createdOn: string;
```

- *Type:* string

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.databaseName"></a>

```typescript
public readonly databaseName: string;
```

- *Type:* string

---

##### `invalidReason`<sup>Required</sup> <a name="invalidReason" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.invalidReason"></a>

```typescript
public readonly invalidReason: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.owner"></a>

```typescript
public readonly owner: string;
```

- *Type:* string

---

##### `ownerRoleType`<sup>Required</sup> <a name="ownerRoleType" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.ownerRoleType"></a>

```typescript
public readonly ownerRoleType: string;
```

- *Type:* string

---

##### `schemaName`<sup>Required</sup> <a name="schemaName" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.schemaName"></a>

```typescript
public readonly schemaName: string;
```

- *Type:* string

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.sourceType"></a>

```typescript
public readonly sourceType: string;
```

- *Type:* string

---

##### `stale`<sup>Required</sup> <a name="stale" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.stale"></a>

```typescript
public readonly stale: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `staleAfter`<sup>Required</sup> <a name="staleAfter" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.staleAfter"></a>

```typescript
public readonly staleAfter: string;
```

- *Type:* string

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.tableName"></a>

```typescript
public readonly tableName: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutputOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: StreamOnTableShowOutput;
```

- *Type:* <a href="#@cdktf/provider-snowflake.streamOnTable.StreamOnTableShowOutput">StreamOnTableShowOutput</a>

---



