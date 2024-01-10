# `tableColumnMaskingPolicyApplication` Submodule <a name="`tableColumnMaskingPolicyApplication` Submodule" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### TableColumnMaskingPolicyApplication <a name="TableColumnMaskingPolicyApplication" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication"></a>

Represents a {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/table_column_masking_policy_application snowflake_table_column_masking_policy_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer"></a>

```typescript
import { tableColumnMaskingPolicyApplication } from '@cdktf/provider-snowflake'

new tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication(scope: Construct, id: string, config: TableColumnMaskingPolicyApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig">TableColumnMaskingPolicyApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig">TableColumnMaskingPolicyApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.resetId"></a>

```typescript
public resetId(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a TableColumnMaskingPolicyApplication resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct"></a>

```typescript
import { tableColumnMaskingPolicyApplication } from '@cdktf/provider-snowflake'

tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement"></a>

```typescript
import { tableColumnMaskingPolicyApplication } from '@cdktf/provider-snowflake'

tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource"></a>

```typescript
import { tableColumnMaskingPolicyApplication } from '@cdktf/provider-snowflake'

tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport"></a>

```typescript
import { tableColumnMaskingPolicyApplication } from '@cdktf/provider-snowflake'

tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a TableColumnMaskingPolicyApplication resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the TableColumnMaskingPolicyApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing TableColumnMaskingPolicyApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/table_column_masking_policy_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the TableColumnMaskingPolicyApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.columnInput">columnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicyInput">maskingPolicyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tableInput">tableInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.column">column</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicy">maskingPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.table">table</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `columnInput`<sup>Optional</sup> <a name="columnInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.columnInput"></a>

```typescript
public readonly columnInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maskingPolicyInput`<sup>Optional</sup> <a name="maskingPolicyInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicyInput"></a>

```typescript
public readonly maskingPolicyInput: string;
```

- *Type:* string

---

##### `tableInput`<sup>Optional</sup> <a name="tableInput" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tableInput"></a>

```typescript
public readonly tableInput: string;
```

- *Type:* string

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maskingPolicy`<sup>Required</sup> <a name="maskingPolicy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.maskingPolicy"></a>

```typescript
public readonly maskingPolicy: string;
```

- *Type:* string

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### TableColumnMaskingPolicyApplicationConfig <a name="TableColumnMaskingPolicyApplicationConfig" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.Initializer"></a>

```typescript
import { tableColumnMaskingPolicyApplication } from '@cdktf/provider-snowflake'

const tableColumnMaskingPolicyApplicationConfig: tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.column">column</a></code> | <code>string</code> | The column to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.maskingPolicy">maskingPolicy</a></code> | <code>string</code> | Fully qualified name (`database.schema.policyname`) of the policy to apply. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.table">table</a></code> | <code>string</code> | The fully qualified name (`database.schema.table`) of the table to apply the masking policy to. |
| <code><a href="#@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `column`<sup>Required</sup> <a name="column" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.column"></a>

```typescript
public readonly column: string;
```

- *Type:* string

The column to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/table_column_masking_policy_application#column TableColumnMaskingPolicyApplication#column}

---

##### `maskingPolicy`<sup>Required</sup> <a name="maskingPolicy" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.maskingPolicy"></a>

```typescript
public readonly maskingPolicy: string;
```

- *Type:* string

Fully qualified name (`database.schema.policyname`) of the policy to apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/table_column_masking_policy_application#masking_policy TableColumnMaskingPolicyApplication#masking_policy}

---

##### `table`<sup>Required</sup> <a name="table" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.table"></a>

```typescript
public readonly table: string;
```

- *Type:* string

The fully qualified name (`database.schema.table`) of the table to apply the masking policy to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/table_column_masking_policy_application#table TableColumnMaskingPolicyApplication#table}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-snowflake.tableColumnMaskingPolicyApplication.TableColumnMaskingPolicyApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/snowflake-labs/snowflake/0.82.0/docs/resources/table_column_masking_policy_application#id TableColumnMaskingPolicyApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



