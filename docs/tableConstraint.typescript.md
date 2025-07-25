# `tableConstraint` Submodule <a name="`tableConstraint` Submodule" id="@cdktf/provider-snowflake.tableConstraint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableConstraint <a name="TableConstraint" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint"></a>

Represents a {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint snowflake_table_constraint}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

new tableConstraint.TableConstraint(scope: Construct, id: string, config: TableConstraintConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig">TableConstraintConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig">TableConstraintConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties">putForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetComment">resetComment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetDeferrable">resetDeferrable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnable">resetEnable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnforced">resetEnforced</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetForeignKeyProperties">resetForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetInitially">resetInitially</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetRely">resetRely</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetValidate">resetValidate</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putForeignKeyProperties` <a name="putForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties"></a>

```typescript
public putForeignKeyProperties(value: TableConstraintForeignKeyProperties): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.putForeignKeyProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.putTimeouts"></a>

```typescript
public putTimeouts(value: TableConstraintTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a>

---

##### `resetComment` <a name="resetComment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetComment"></a>

```typescript
public resetComment(): void
```

##### `resetDeferrable` <a name="resetDeferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetDeferrable"></a>

```typescript
public resetDeferrable(): void
```

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnable"></a>

```typescript
public resetEnable(): void
```

##### `resetEnforced` <a name="resetEnforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetEnforced"></a>

```typescript
public resetEnforced(): void
```

##### `resetForeignKeyProperties` <a name="resetForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetForeignKeyProperties"></a>

```typescript
public resetForeignKeyProperties(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInitially` <a name="resetInitially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetInitially"></a>

```typescript
public resetInitially(): void
```

##### `resetRely` <a name="resetRely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetRely"></a>

```typescript
public resetRely(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetValidate` <a name="resetValidate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.resetValidate"></a>

```typescript
public resetValidate(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TableConstraint resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isConstruct"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

tableConstraint.TableConstraint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

tableConstraint.TableConstraint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

tableConstraint.TableConstraint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

tableConstraint.TableConstraint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TableConstraint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TableConstraint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TableConstraint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TableConstraint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyProperties">foreignKeyProperties</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference">TableConstraintForeignKeyPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference">TableConstraintTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columnsInput">columnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.commentInput">commentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrableInput">deferrableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforcedInput">enforcedInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyPropertiesInput">foreignKeyPropertiesInput</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initiallyInput">initiallyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.relyInput">relyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validateInput">validateInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.comment">comment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrable">deferrable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforced">enforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initially">initially</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.rely">rely</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `foreignKeyProperties`<sup>Required</sup> <a name="foreignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyProperties"></a>

```typescript
public readonly foreignKeyProperties: TableConstraintForeignKeyPropertiesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference">TableConstraintForeignKeyPropertiesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.timeouts"></a>

```typescript
public readonly timeouts: TableConstraintTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference">TableConstraintTimeoutsOutputReference</a>

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columnsInput"></a>

```typescript
public readonly columnsInput: string[];
```

- *Type:* string[]

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.commentInput"></a>

```typescript
public readonly commentInput: string;
```

- *Type:* string

---

##### `deferrableInput`<sup>Optional</sup> <a name="deferrableInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrableInput"></a>

```typescript
public readonly deferrableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforcedInput`<sup>Optional</sup> <a name="enforcedInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforcedInput"></a>

```typescript
public readonly enforcedInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `foreignKeyPropertiesInput`<sup>Optional</sup> <a name="foreignKeyPropertiesInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.foreignKeyPropertiesInput"></a>

```typescript
public readonly foreignKeyPropertiesInput: TableConstraintForeignKeyProperties;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `initiallyInput`<sup>Optional</sup> <a name="initiallyInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initiallyInput"></a>

```typescript
public readonly initiallyInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `relyInput`<sup>Optional</sup> <a name="relyInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.relyInput"></a>

```typescript
public readonly relyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | TableConstraintTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `validateInput`<sup>Optional</sup> <a name="validateInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validateInput"></a>

```typescript
public readonly validateInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

---

##### `deferrable`<sup>Required</sup> <a name="deferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.deferrable"></a>

```typescript
public readonly deferrable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enforced`<sup>Required</sup> <a name="enforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `initially`<sup>Required</sup> <a name="initially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.initially"></a>

```typescript
public readonly initially: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rely`<sup>Required</sup> <a name="rely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.rely"></a>

```typescript
public readonly rely: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `validate`<sup>Required</sup> <a name="validate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.tableConstraint.TableConstraint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TableConstraintConfig <a name="TableConstraintConfig" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.Initializer"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

const tableConstraintConfig: tableConstraint.TableConstraintConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.columns">columns</a></code> | <code>string[]</code> | Columns to use in constraint key. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.name">name</a></code> | <code>string</code> | Name of constraint. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.tableId">tableId</a></code> | <code>string</code> | Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id). |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.type">type</a></code> | <code>string</code> | Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.comment">comment</a></code> | <code>string</code> | Comment for the table constraint. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.deferrable">deferrable</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `true`) Whether the constraint is deferrable. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `true`) Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enforced">enforced</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `false`) Whether the constraint is enforced. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.foreignKeyProperties">foreignKeyProperties</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | foreign_key_properties block. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#id TableConstraint#id}. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.initially">initially</a></code> | <code>string</code> | (Default: `DEFERRED`) Whether the constraint is initially deferred or immediate. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.rely">rely</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `true`) Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.validate">validate</a></code> | <code>boolean \| cdktf.IResolvable</code> | (Default: `false`) Specifies whether to validate existing data on the table when a constraint is created. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

Columns to use in constraint key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#columns TableConstraint#columns}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#name TableConstraint#name}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

Identifier for table to create constraint on. Format must follow: "\"&lt;db_name&gt;\".\"&lt;schema_name&gt;\".\"&lt;table_name&gt;\"" or "&lt;db_name&gt;.&lt;schema_name&gt;.&lt;table_name&gt;" (snowflake_table.my_table.id).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#table_id TableConstraint#table_id}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Type of constraint, one of 'UNIQUE', 'PRIMARY KEY', or 'FOREIGN KEY'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#type TableConstraint#type}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.comment"></a>

```typescript
public readonly comment: string;
```

- *Type:* string

Comment for the table constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#comment TableConstraint#comment}

---

##### `deferrable`<sup>Optional</sup> <a name="deferrable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.deferrable"></a>

```typescript
public readonly deferrable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `true`) Whether the constraint is deferrable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#deferrable TableConstraint#deferrable}

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `true`) Specifies whether the constraint is enabled or disabled. These properties are provided for compatibility with Oracle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#enable TableConstraint#enable}

---

##### `enforced`<sup>Optional</sup> <a name="enforced" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.enforced"></a>

```typescript
public readonly enforced: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `false`) Whether the constraint is enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#enforced TableConstraint#enforced}

---

##### `foreignKeyProperties`<sup>Optional</sup> <a name="foreignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.foreignKeyProperties"></a>

```typescript
public readonly foreignKeyProperties: TableConstraintForeignKeyProperties;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

foreign_key_properties block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#foreign_key_properties TableConstraint#foreign_key_properties}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#id TableConstraint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `initially`<sup>Optional</sup> <a name="initially" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.initially"></a>

```typescript
public readonly initially: string;
```

- *Type:* string

(Default: `DEFERRED`) Whether the constraint is initially deferred or immediate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#initially TableConstraint#initially}

---

##### `rely`<sup>Optional</sup> <a name="rely" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.rely"></a>

```typescript
public readonly rely: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `true`) Specifies whether a constraint in NOVALIDATE mode is taken into account during query rewrite.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#rely TableConstraint#rely}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.timeouts"></a>

```typescript
public readonly timeouts: TableConstraintTimeouts;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#timeouts TableConstraint#timeouts}

---

##### `validate`<sup>Optional</sup> <a name="validate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintConfig.property.validate"></a>

```typescript
public readonly validate: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

(Default: `false`) Specifies whether to validate existing data on the table when a constraint is created.

Only used in conjunction with the ENABLE property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#validate TableConstraint#validate}

---

### TableConstraintForeignKeyProperties <a name="TableConstraintForeignKeyProperties" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.Initializer"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

const tableConstraintForeignKeyProperties: tableConstraint.TableConstraintForeignKeyProperties = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.references">references</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | references block. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.match">match</a></code> | <code>string</code> | (Default: `FULL`) The match type for the foreign key. Not applicable for primary/unique keys. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onDelete">onDelete</a></code> | <code>string</code> | (Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is deleted. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onUpdate">onUpdate</a></code> | <code>string</code> | (Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is updated. |

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.references"></a>

```typescript
public readonly references: TableConstraintForeignKeyPropertiesReferences;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

references block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#references TableConstraint#references}

---

##### `match`<sup>Optional</sup> <a name="match" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

(Default: `FULL`) The match type for the foreign key. Not applicable for primary/unique keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#match TableConstraint#match}

---

##### `onDelete`<sup>Optional</sup> <a name="onDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onDelete"></a>

```typescript
public readonly onDelete: string;
```

- *Type:* string

(Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is deleted.

Not applicable for primary/unique keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#on_delete TableConstraint#on_delete}

---

##### `onUpdate`<sup>Optional</sup> <a name="onUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties.property.onUpdate"></a>

```typescript
public readonly onUpdate: string;
```

- *Type:* string

(Default: `NO ACTION`) Specifies the action performed when the primary/unique key for the foreign key is updated.

Not applicable for primary/unique keys

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#on_update TableConstraint#on_update}

---

### TableConstraintForeignKeyPropertiesReferences <a name="TableConstraintForeignKeyPropertiesReferences" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.Initializer"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

const tableConstraintForeignKeyPropertiesReferences: tableConstraint.TableConstraintForeignKeyPropertiesReferences = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.columns">columns</a></code> | <code>string[]</code> | Columns to use in foreign key reference. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.tableId">tableId</a></code> | <code>string</code> | Name of constraint. |

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

Columns to use in foreign key reference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#columns TableConstraint#columns}

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

Name of constraint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#table_id TableConstraint#table_id}

---

### TableConstraintTimeouts <a name="TableConstraintTimeouts" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts.Initializer"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

const tableConstraintTimeouts: tableConstraint.TableConstraintTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#create TableConstraint#create}. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#delete TableConstraint#delete}. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#read TableConstraint#read}. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#update TableConstraint#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#create TableConstraint#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#delete TableConstraint#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#read TableConstraint#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflakedb/snowflake/2.4.0/docs/resources/table_constraint#update TableConstraint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### TableConstraintForeignKeyPropertiesOutputReference <a name="TableConstraintForeignKeyPropertiesOutputReference" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

new tableConstraint.TableConstraintForeignKeyPropertiesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences">putReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetMatch">resetMatch</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnDelete">resetOnDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnUpdate">resetOnUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putReferences` <a name="putReferences" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences"></a>

```typescript
public putReferences(value: TableConstraintForeignKeyPropertiesReferences): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.putReferences.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---

##### `resetMatch` <a name="resetMatch" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetMatch"></a>

```typescript
public resetMatch(): void
```

##### `resetOnDelete` <a name="resetOnDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnDelete"></a>

```typescript
public resetOnDelete(): void
```

##### `resetOnUpdate` <a name="resetOnUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.resetOnUpdate"></a>

```typescript
public resetOnUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.references">references</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference">TableConstraintForeignKeyPropertiesReferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.matchInput">matchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDeleteInput">onDeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdateInput">onUpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.referencesInput">referencesInput</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.match">match</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDelete">onDelete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdate">onUpdate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `references`<sup>Required</sup> <a name="references" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.references"></a>

```typescript
public readonly references: TableConstraintForeignKeyPropertiesReferencesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference">TableConstraintForeignKeyPropertiesReferencesOutputReference</a>

---

##### `matchInput`<sup>Optional</sup> <a name="matchInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.matchInput"></a>

```typescript
public readonly matchInput: string;
```

- *Type:* string

---

##### `onDeleteInput`<sup>Optional</sup> <a name="onDeleteInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDeleteInput"></a>

```typescript
public readonly onDeleteInput: string;
```

- *Type:* string

---

##### `onUpdateInput`<sup>Optional</sup> <a name="onUpdateInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdateInput"></a>

```typescript
public readonly onUpdateInput: string;
```

- *Type:* string

---

##### `referencesInput`<sup>Optional</sup> <a name="referencesInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.referencesInput"></a>

```typescript
public readonly referencesInput: TableConstraintForeignKeyPropertiesReferences;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---

##### `match`<sup>Required</sup> <a name="match" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.match"></a>

```typescript
public readonly match: string;
```

- *Type:* string

---

##### `onDelete`<sup>Required</sup> <a name="onDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onDelete"></a>

```typescript
public readonly onDelete: string;
```

- *Type:* string

---

##### `onUpdate`<sup>Required</sup> <a name="onUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.onUpdate"></a>

```typescript
public readonly onUpdate: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TableConstraintForeignKeyProperties;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyProperties">TableConstraintForeignKeyProperties</a>

---


### TableConstraintForeignKeyPropertiesReferencesOutputReference <a name="TableConstraintForeignKeyPropertiesReferencesOutputReference" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

new tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columnsInput">columnsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableIdInput">tableIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columns">columns</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableId">tableId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `columnsInput`<sup>Optional</sup> <a name="columnsInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columnsInput"></a>

```typescript
public readonly columnsInput: string[];
```

- *Type:* string[]

---

##### `tableIdInput`<sup>Optional</sup> <a name="tableIdInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableIdInput"></a>

```typescript
public readonly tableIdInput: string;
```

- *Type:* string

---

##### `columns`<sup>Required</sup> <a name="columns" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.columns"></a>

```typescript
public readonly columns: string[];
```

- *Type:* string[]

---

##### `tableId`<sup>Required</sup> <a name="tableId" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.tableId"></a>

```typescript
public readonly tableId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferencesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: TableConstraintForeignKeyPropertiesReferences;
```

- *Type:* <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintForeignKeyPropertiesReferences">TableConstraintForeignKeyPropertiesReferences</a>

---


### TableConstraintTimeoutsOutputReference <a name="TableConstraintTimeoutsOutputReference" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer"></a>

```typescript
import { tableConstraint } from '@cdktf/provider-snowflake'

new tableConstraint.TableConstraintTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | TableConstraintTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-snowflake.tableConstraint.TableConstraintTimeouts">TableConstraintTimeouts</a>

---



